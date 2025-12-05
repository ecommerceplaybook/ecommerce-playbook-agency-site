import Link from "next/link";
import type { CaseStudy } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils/formatting";

export function CaseStudyCarousel({ caseStudies }: { caseStudies: CaseStudy[] }) {
  if (!caseStudies.length) return null;

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Case studies</p>
            <h2 className="text-3xl font-semibold text-slate-900">Conversion wins we’ve shipped</h2>
          </div>
          <Link href="/case-studies" className="text-sm font-medium text-slate-600 cta-link">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.id}>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{study.industry}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{study.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{study.summary}</p>
              <dl className="mt-4 space-y-2 text-sm text-slate-700">
                {study.before_metric_label && study.before_metric_value && (
                  <div className="flex justify-between">
                    <dt>{study.before_metric_label}</dt>
                    <dd>{study.before_metric_value}</dd>
                  </div>
                )}
                {study.after_metric_label && study.after_metric_value && (
                  <div className="flex justify-between">
                    <dt>{study.after_metric_label}</dt>
                    <dd>{study.after_metric_value}</dd>
                  </div>
                )}
              </dl>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                Published {formatDate(study.created_at)}
              </p>
              <Link href={`/case-studies/${study.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-900 cta-link">
                Read story →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
