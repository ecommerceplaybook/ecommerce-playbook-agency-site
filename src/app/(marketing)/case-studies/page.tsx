import Link from "next/link";
import { getCaseStudies } from "@/lib/supabase/queries/caseStudies";
import { getPageBySlug } from "@/lib/supabase/queries/pages";
import { getFAQItems } from "@/lib/supabase/queries/faq";
import { buildMetadata } from "@/lib/utils/seo";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TestimonialsGrid } from "@/components/marketing/TestimonialsGrid";
import { CaseStudyTimeline } from "@/components/marketing/CaseStudyTimeline";
import { StatsSection } from "@/components/marketing/StatsSection";
import { ImageContentSection } from "@/components/marketing/ImageContentSection";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CTASection } from "@/components/marketing/CTASection";
import { CaseStudyHero } from "@/components/marketing/CaseStudyHero";

export async function generateMetadata() {
  const page = await getPageBySlug("case-studies").catch(() => null);
  return buildMetadata({
    title: page?.seo_title ?? "Case Studies",
    description: page?.seo_description ?? "Conversion lifts we’ve shipped for Shopify brands.",
    path: "/case-studies",
  });
}

export default async function CaseStudiesPage() {
  const [page, caseStudies, faqs] = await Promise.all([
    getPageBySlug("case-studies").catch(() => null),
    getCaseStudies().catch(() => []),
    getFAQItems().catch(() => []),
  ]);

  return (
    <>
      <CaseStudyHero
        tagline="Case Studies"
        heading={page?.title ?? "Proof that CRO and build should sit together"}
        description={
          page?.hero_subheading ?? "We stack conversion lifts across PDPs, mobile checkout, and lifecycle."
        }
        primaryButtonText="View Case Studies"
        primaryButtonHref="#case-studies"
        secondaryButtonText="Get Started"
        secondaryButtonHref="/contact"
      />
      <Section id="case-studies">
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.id}>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{study.industry}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
              </h3>
              <p className="mt-2 text-sm text-slate-600">{study.summary}</p>
              <Link href={`/case-studies/${study.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-900">
                Read case study →
              </Link>
            </Card>
          ))}
        </div>
      </Section>
      <StatsSection
        tagline="Results"
        heading="Measured impact"
        description="Real numbers from real brands we've worked with."
        stats={[
          { value: "30%", label: "Average conversion rate increase" },
          { value: "2.5x", label: "Return on investment" },
          { value: "45%", label: "Mobile checkout improvement" },
        ]}
      />
      <CaseStudyTimeline />
      <ImageContentSection
        tagline="Success"
        heading="How we deliver results"
        description="Our proven methodology combines conversion rate optimization with strategic development to maximize your revenue potential."
        stats={[
          { value: "50%", description: "Average revenue increase within 90 days" },
          { value: "3x", description: "ROI on optimization investments" },
        ]}
        primaryButtonText="View Our Process"
        primaryButtonHref="/about"
        secondaryButtonText="Get Started"
        secondaryButtonHref="/contact"
        imagePosition="right"
      />
      <TestimonialsGrid />
      <FAQSection items={faqs.slice(0, 5)} />
      <CTASection />
    </>
  );
}
