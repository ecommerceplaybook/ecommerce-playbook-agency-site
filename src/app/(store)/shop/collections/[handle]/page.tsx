import { notFound } from "next/navigation";
import { getCollections, getCollectionByHandle } from "@/lib/shopify/collections";
import { buildMetadata } from "@/lib/utils/seo";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductGrid } from "@/components/store/ProductGrid";

interface Params {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  const collections = await getCollections().catch(() => []);
  return collections.map((collection) => ({ handle: collection.handle }));
}

export async function generateMetadata({ params }: Params) {
  const { handle } = await params;
  const { collection } = await getCollectionByHandle(handle).catch(() => ({ collection: null }));
  return buildMetadata({
    title: collection?.title ?? "Collection",
    description: collection?.descriptionHtml?.replace(/<[^>]+>/g, "") ?? "Shop curated products",
    path: `/shop/collections/${handle}`,
  });
}

export default async function CollectionDetailPage({ params }: Params) {
  const { handle } = await params;
  const { collection, products } = await getCollectionByHandle(handle).catch(() => ({
    collection: null,
    products: [],
  }));

  if (!collection) return notFound();

  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Collection"
          title={collection.title}
          description={<span dangerouslySetInnerHTML={{ __html: collection.descriptionHtml }} />}
        />
      </Section>
      <ProductGrid products={products} />
    </>
  );
}
