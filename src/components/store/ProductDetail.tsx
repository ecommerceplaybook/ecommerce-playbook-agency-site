import type { ShopifyProduct } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { AddToCartButton } from "@/components/store/AddToCartButton";
import { Price } from "@/components/store/Price";

export function ProductDetail({ product }: { product: ShopifyProduct }) {
  const primaryImage = product.images[0] ?? product.featuredImage;
  const firstVariant = product.variants[0];

  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-2">
        {primaryImage && (
          <div className="overflow-hidden rounded-3xl bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={primaryImage.url} alt={primaryImage.altText ?? product.title} className="w-full" />
          </div>
        )}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Product</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">{product.title}</h1>
          {firstVariant && (
            <div className="mt-4 text-2xl">
              <Price price={firstVariant.price} />
            </div>
          )}
          <div className="mt-6 space-y-4 text-slate-600" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          <div className="mt-8">
            <AddToCartButton productHandle={product.handle} variantId={firstVariant?.id} />
          </div>
        </div>
      </div>
    </Section>
  );
}
