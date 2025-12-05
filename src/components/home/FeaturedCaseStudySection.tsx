import Link from "next/link";

export default function FeaturedCaseStudySection() {
  return (
    <section className="py-16 px-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Heading */}
        <div className="space-y-4">
          <h2 className="text-gray-900 text-3xl font-bold opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] [animation-delay:150ms]">
            Inside a Real CRO Engagement
          </h2>
          <p className="text-gray-600">
            Here's what it actually looks like when we partner with a high-volume Shopify brand to fix leaks, improve UX, and drive more revenue from the same traffic.
          </p>
        </div>

        {/* Featured Case Study Card */}
        <div className="border border-gray-200 rounded-lg p-6 md:p-8 space-y-6 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-lg hover:border-[var(--color-accent)]/30 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] [animation-delay:200ms]">
          {/* Case Study Label */}
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Featured Case Study
          </p>

          {/* Case Study Title */}
          <h3 className="text-gray-900 text-2xl font-bold">
            From 2.7% to 7–8%: How a CBD Brand Turned CRO into a Revenue Engine
          </h3>

          {/* Context Paragraph */}
          <p className="text-gray-600">
            A high-volume CBD brand came to us with strong traffic, stalled conversion rates, and a product page that wasn't pulling its weight.
          </p>

          {/* 3-Part Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Problem */}
            <div className="space-y-3">
              <h4 className="text-gray-900 font-semibold">
                The Problem
              </h4>
              <p className="text-gray-600 text-sm">
                They were spending aggressively on paid traffic, but the site experience wasn't converting qualified visitors. The product page was cluttered, mobile performance lagged, and email flows weren't aligned with how customers actually bought.
              </p>
            </div>

            {/* What We Did */}
            <div className="space-y-3">
              <h4 className="text-gray-900 font-semibold">
                What We Did
              </h4>
              <p className="text-gray-600 text-sm">
                We ran a CRO audit across their funnel, rebuilt the product detail page, refined navigation and collection UX, and aligned Klaviyo flows with the real customer journey.
              </p>
            </div>

            {/* The Result */}
            <div className="space-y-3">
              <h4 className="text-gray-900 font-semibold">
                The Result
              </h4>
              <p className="text-gray-600 text-sm">
                Conversion rate increased from 2.7% to 7–8%, with more revenue coming from the same traffic and a stronger foundation for future testing.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/case-studies/blacktie-cbd-cro"
              className="inline-flex items-center justify-center px-5 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 transition-all duration-200 ease-out hover:-translate-y-[1px] hover:shadow-md active:translate-y-[1px]"
            >
              View full case study
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-5 py-3 text-gray-900 font-medium underline hover:text-gray-700 cta-link"
            >
              View all case studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

