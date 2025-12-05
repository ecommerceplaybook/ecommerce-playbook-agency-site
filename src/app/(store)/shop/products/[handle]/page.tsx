import { notFound } from "next/navigation";
import { getProducts, getProductByHandle } from "@/lib/shopify/products";
import { buildMetadata } from "@/lib/utils/seo";
import { ProductDetail } from "@/components/store/ProductDetail";

interface Params {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts().catch(() => []);
  return products.map((product) => ({ handle: product.handle }));
}

export async function generateMetadata({ params }: Params) {
  const { handle } = await params;
  const product = await getProductByHandle(handle).catch(() => null);
  return buildMetadata({
    title: product?.title ?? "Product",
    description: product?.descriptionHtml?.replace(/<[^>]+>/g, "") ?? "Product detail",
    path: `/shop/products/${handle}`,
  });
}

export default async function ProductDetailPage({ params }: Params) {
  const { handle } = await params;
  const product = await getProductByHandle(handle).catch(() => null);
  if (!product) return notFound();
  return <ProductDetail product={product} />;
}
