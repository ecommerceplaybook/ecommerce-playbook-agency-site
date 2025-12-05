import { notFound } from "next/navigation";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/supabase/queries/caseStudies";
import { buildMetadata } from "@/lib/utils/seo";
import { Section } from "@/components/ui/Section";
import { Prose } from "@/components/ui/Prose";
import { Card } from "@/components/ui/Card";

interface Params {
  params: { slug: string };
}

export async function generateStaticParams() {
  const studies = await getCaseStudies().catch(() => []);
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params) {
  const study = await getCaseStudyBySlug(params.slug).catch(() => null);
  return buildMetadata({
    title: study?.title ?? "Case Study",
    description: study?.summary ?? "Conversion lift story from eCommerce Playbook",
    path: `/case-studies/${params.slug}`,
  });
}

export default async function CaseStudyDetail({ params }: Params) {
  const study = await getCaseStudyBySlug(params.slug).catch(() => null);
  if (!study) return notFound();

  return (
    <>
      <Section>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{study.industry}</p>
            <h1 className="mt-2 text-4xl font-semibold text-slate-900">{study.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{study.summary}</p>
          </div>
          <Card>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Impact</p>
            <dl className="mt-4 space-y-4 text-slate-900">
              {study.before_metric_label && study.before_metric_value && (
                <div>
                  <dt className="text-sm text-slate-500">Before</dt>
                  <dd className="text-2xl font-semibold">{study.before_metric_value}</dd>
                  <p className="text-sm text-slate-500">{study.before_metric_label}</p>
                </div>
              )}
              {study.after_metric_label && study.after_metric_value && (
                <div>
                  <dt className="text-sm text-slate-500">After</dt>
                  <dd className="text-2xl font-semibold">{study.after_metric_value}</dd>
                  <p className="text-sm text-slate-500">{study.after_metric_label}</p>
                </div>
              )}
            </dl>
          </Card>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-3xl">
          <Prose content={study.body} />
        </div>
      </Section>
    </>
  );
}
