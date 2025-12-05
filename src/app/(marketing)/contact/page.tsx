import { getPageBySlug } from "@/lib/supabase/queries/pages";
import { buildMetadata } from "@/lib/utils/seo";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/marketing/forms/ContactForm";

export async function generateMetadata() {
  const page = await getPageBySlug("contact").catch(() => null);
  return buildMetadata({
    title: page?.seo_title ?? "Contact",
    description: page?.seo_description ?? "Tell us about your Shopify growth goals.",
    path: "/contact",
  });
}

export default async function ContactPage() {
  const page = await getPageBySlug("contact").catch(() => null);

  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Contact"
          title={page?.title ?? "Let’s audit your funnel"}
          description={
            page?.hero_subheading ?? "Share where revenue is stuck and we’ll map your CRO + build roadmap in 30 days."
          }
        />
      </Section>
      <Section>
        <ContactForm />
      </Section>
    </>
  );
}
