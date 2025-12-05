import { getCollections } from "@/lib/shopify/collections";
import { CollectionCard } from "@/components/store/CollectionCard";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata = buildMetadata({
  title: "Collections",
  description: "Shopify collections powered by the Storefront API.",
  path: "/shop/collections",
});

export default async function CollectionsPage() {
  const collections = await getCollections().catch(() => []);

  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Collections"
          title="Shop curated lineups"
          description="Each collection stacks products purpose-built for conversion experiments."
        />
      </Section>
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </Section>
    </>
  );
}
