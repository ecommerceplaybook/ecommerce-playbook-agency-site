import { getFAQItems } from "@/lib/supabase/queries/faq";
import { getPageBySlug } from "@/lib/supabase/queries/pages";
import { buildMetadata } from "@/lib/utils/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FAQSection } from "@/components/marketing/FAQSection";

export async function generateMetadata() {
  const page = await getPageBySlug("faq").catch(() => null);
  return buildMetadata({
    title: page?.seo_title ?? "FAQs",
    description: page?.seo_description ?? "Questions teams ask before partnering with us.",
    path: "/faq",
  });
}

export default async function FAQPage() {
  const [page, faqs] = await Promise.all([
    getPageBySlug("faq").catch(() => null),
    getFAQItems().catch(() => []),
  ]);

  return (
    <>
      <Section>
        <PageHeader
          eyebrow="FAQ"
          title={page?.title ?? "How we partner with Shopify brands"}
          description={
            page?.hero_subheading ?? "Ask us anything about CRO audits, implementation, and testing."
          }
        />
      </Section>
      <FAQSection items={faqs} />
    </>
  );
}
