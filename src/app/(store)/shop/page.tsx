import { getProducts } from "@/lib/shopify/products";
import { getCollections } from "@/lib/shopify/collections";
import { ProductGrid } from "@/components/store/ProductGrid";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { CollectionCard } from "@/components/store/CollectionCard";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata = buildMetadata({
  title: "Shop",
  description: "Featured Shopify products and collections powered by eCommerce Playbook.",
  path: "/shop",
});

export const revalidate = 300;

export default async function ShopLandingPage() {
  const [products, collections] = await Promise.all([
    getProducts().catch(() => []),
    getCollections(6).catch(() => []),
  ]);

  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Shop"
          title="Conversion-tested templates, bundles, and offers"
          description="Powered by Shopify Storefront API with fast rendering and merchandising flexibility."
        />
      </Section>
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </Section>
      <ProductGrid products={products} />
    </>
  );
}
