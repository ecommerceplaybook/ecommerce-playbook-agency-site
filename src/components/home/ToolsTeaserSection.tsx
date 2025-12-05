import Link from "next/link";

export default function ToolsTeaserSection() {
  return (
    <section className="py-16 px-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] [animation-delay:150ms]">
          See What CRO Could Be Worth to Your Store
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-600 mb-8">
          Most teams know their traffic numbers, but not the value of small conversion lifts. Our tools make the upside of CRO tangible.
        </p>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Primary Tool Card - CRO Revenue Uplift Calculator */}
          <div className="border border-gray-200 rounded-lg p-6 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-lg hover:border-[var(--color-accent)]/30 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] [animation-delay:200ms]">
            <h3 className="text-gray-900 text-lg font-semibold mb-3">
              CRO Revenue Uplift Calculator
            </h3>
            <p className="text-gray-600 mb-4">
              Plug in your traffic, conversion rate, and average order value to see how small improvements compound into real monthly revenue.
            </p>
            <Link
              href="/tools/cro-uplift-calculator"
              className="inline-flex items-center px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 ease-out hover:-translate-y-[1px] hover:shadow-md active:translate-y-[1px]"
            >
              Try the CRO Calculator
            </Link>
          </div>

          {/* Secondary Tool Card 1 - Funnel Leak Diagnostic */}
          <div className="border border-gray-200 rounded-lg p-6 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-lg hover:border-[var(--color-accent)]/30 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] [animation-delay:350ms]">
            <h3 className="text-gray-900 text-lg font-semibold mb-3">
              Funnel Leak Diagnostic
            </h3>
            <p className="text-gray-600 mb-4">
              Answer a few questions and we'll show you where the biggest leaks are in your funnel.
            </p>
            <span className="text-xs text-gray-500 italic border border-gray-200 rounded px-2 py-1 inline-block">
              Coming soon
            </span>
          </div>

          {/* Secondary Tool Card 2 - Agency Effectiveness Check */}
          <div className="border border-gray-200 rounded-lg p-6 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-lg hover:border-[var(--color-accent)]/30 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] [animation-delay:500ms]">
            <h3 className="text-gray-900 text-lg font-semibold mb-3">
              Agency Effectiveness Check
            </h3>
            <p className="text-gray-600 mb-4">
              Evaluate whether your current agency is actually moving the metrics that matter.
            </p>
            <span className="text-xs text-gray-500 italic border border-gray-200 rounded px-2 py-1 inline-block">
              Coming soon
            </span>
          </div>

          {/* Secondary Tool Card 3 - CRO Fit Checker */}
          <div className="border border-gray-200 rounded-lg p-6 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-lg hover:border-[var(--color-accent)]/30 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] [animation-delay:650ms]">
            <h3 className="text-gray-900 text-lg font-semibold mb-3">
              CRO Fit Checker
            </h3>
            <p className="text-gray-600 mb-4">
              Quickly see if your brand is ready for a deeper CRO and headless engagement.
            </p>
            <span className="text-xs text-gray-500 italic border border-gray-200 rounded px-2 py-1 inline-block">
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

