import { buildMetadata } from "@/lib/utils/seo";
import { getPageBySlug } from "@/lib/supabase/queries/pages";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Prose } from "@/components/ui/Prose";

export async function generateMetadata() {
  const page = await getPageBySlug("about").catch(() => null);
  return buildMetadata({
    title: page?.seo_title ?? "About",
    description: page?.seo_description ?? "About eCommerce Playbook",
    path: "/about",
  });
}

export default async function AboutPage() {
  const page = await getPageBySlug("about").catch(() => null);

  return (
    <>
      <Section>
        <PageHeader
          eyebrow="About"
          title={page?.title ?? "We’re the CRO partner shipping outcomes, not decks"}
          description={
            page?.hero_subheading ??
            "Led by Michael Muniz, eCommerce Playbook is a senior Shopify CRO partner focused on measurable revenue lifts."
          }
        />
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {["CRO Strategy", "Build & QA", "Experimentation"].map((pillar) => (
            <Card key={pillar}>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Pillar</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{pillar}</h3>
              <p className="mt-2 text-sm text-slate-600">
                We pair senior strategy with hands-on implementation so your roadmap ships faster.
              </p>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-3xl">
          <Prose content={page?.body ?? ""} />
        </div>
      </Section>
    </>
  );
}
