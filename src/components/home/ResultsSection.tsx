import Link from "next/link";

export default function ResultsSection() {
  return (
    <section className="section-default opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
      <div className="page-container">
        <h2 className="mb-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] [animation-delay:150ms]">
          The Results Speak for Themselves
        </h2>

        <p className="mb-8 max-w-2xl">
          We partner with high-volume Shopify brands to turn traffic into profit
          with measurable, repeatable improvements.
        </p>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <div className="card opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] [animation-delay:100ms] group">
            <div className="text-2xl md:text-3xl font-semibold mb-2 text-[var(--color-ink)] transition-all duration-200 group-hover:scale-[1.03]">
              2.7% → 7–8%
            </div>
            <p className="text-sm">
              Conversion rate increase for a high-volume CBD brand.
            </p>
          </div>

          <div className="card opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] [animation-delay:250ms] group">
            <div className="text-2xl md:text-3xl font-semibold mb-2 text-[var(--color-ink)] transition-all duration-200 group-hover:scale-[1.03]">
              +34%
            </div>
            <p className="text-sm">
              Email revenue growth after a Klaviyo rebuild.
            </p>
          </div>

          <div className="card opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] [animation-delay:400ms] group">
            <div className="text-2xl md:text-3xl font-semibold mb-2 text-[var(--color-ink)] transition-all duration-200 group-hover:scale-[1.03]">
              +XX%
            </div>
            <p className="text-sm">
              Lift in key funnel metrics after a Shopify migration.
            </p>
          </div>
        </div>

        {/* Case Study Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          <div className="card card-hover">
            <h3 className="mb-3">
              Blacktie CBD
            </h3>
            <p className="mb-4">
              Full CRO and UX overhaul for a high-volume CBD brand selling on Shopify.
            </p>
            <p className="text-sm mb-4">
              Result: From 2.7% to 7–8% conversion with a rebuilt product page and optimized funnel.
            </p>
            <Link
              href="/case-studies/blacktie-cbd-cro"
              className="text-sm font-medium text-[var(--color-accent)] hover:underline cta-link"
            >
              View case study
            </Link>
          </div>

          <div className="card card-hover">
            <h3 className="mb-3">
              Emme Diane
            </h3>
            <p className="mb-4">
              Klaviyo and CRO engagement for a clinical skincare brand with a complex customer journey.
            </p>
            <p className="text-sm mb-4">
              Result: +34% email revenue and higher engagement.
            </p>
            <Link
              href="/case-studies/emme-diane-klaviyo-cro"
              className="text-sm font-medium text-[var(--color-accent)] hover:underline cta-link"
            >
              View case study
            </Link>
          </div>

          <div className="card card-hover">
            <h3 className="mb-3">
              Horn Creek Hemp
            </h3>
            <p className="mb-4">
              Migration and CRO improvements for a hemp brand moving into a more scalable Shopify setup.
            </p>
            <p className="text-sm mb-4">
              Result: Early lifts in CVR, ATC, and checkout completion.
            </p>
            <Link
              href="/case-studies/horn-creek-hemp-migration"
              className="text-sm font-medium text-[var(--color-accent)] hover:underline cta-link"
            >
              View case study
            </Link>
          </div>
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-[var(--color-accent)] hover:underline cta-link"
          >
            View all case studies
          </Link>
        </div>
      </div>
    </section>
  );
}

