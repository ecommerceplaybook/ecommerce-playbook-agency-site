import Link from "next/link";
import type { ShopifyProduct } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Price } from "@/components/store/Price";

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const firstVariant = product.variants[0];

  return (
    <Card>
      {product.featuredImage && (
        <div className="mb-4 overflow-hidden rounded-2xl bg-slate-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.featuredImage.url}
            alt={product.featuredImage.altText ?? product.title}
            className="aspect-square w-full object-cover"
          />
        </div>
      )}
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Product</p>
      <h3 className="mt-2 text-2xl font-semibold text-slate-900">
        <Link href={`/shop/products/${product.handle}`}>{product.title}</Link>
      </h3>
      {firstVariant && (
        <div className="mt-3">
          <Price price={firstVariant.price} />
        </div>
      )}
    </Card>
  );
}
