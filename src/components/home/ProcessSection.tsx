import Link from "next/link";

export default function ProcessSection() {
  return (
    <section className="py-16 px-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] [animation-delay:150ms]">
          Our Process Removes Guesswork from Growth
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-600 mb-8">
          Every engagement follows the same path: diagnose the leaks, rebuild what matters most, then run a repeatable CRO program.
        </p>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Step 1 */}
          <div className="border border-gray-200 rounded-lg p-6 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-lg hover:border-[var(--color-accent)]/30 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] [animation-delay:200ms]">
            <h3 className="text-gray-900 text-lg font-semibold mb-3">
              Step 1 — CRO Audit (Start Here)
            </h3>
            <p className="text-gray-600 mb-2">
              Deep dive into store, analytics, email, UX, and funnel.
            </p>
            <p className="text-gray-600 font-medium">
              Deliverable: Prioritized 90-day roadmap.
            </p>
          </div>

          {/* Step 2 */}
          <div className="border border-gray-200 rounded-lg p-6 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-lg hover:border-[var(--color-accent)]/30 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] [animation-delay:350ms]">
            <h3 className="text-gray-900 text-lg font-semibold mb-3">
              Step 2 — CRO, UX, and Headless Project
            </h3>
            <p className="text-gray-600">
              Implement roadmap: redesign key pages, improve UX, upgrade storefront, rebuild email flows.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border border-gray-200 rounded-lg p-6 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-lg hover:border-[var(--color-accent)]/30 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] [animation-delay:500ms]">
            <h3 className="text-gray-900 text-lg font-semibold mb-3">
              Step 3 — Ongoing CRO & Email Retainer
            </h3>
            <p className="text-gray-600">
              Weekly experiments, monthly reporting, and KPI-centric growth.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8">
          <Link
            href="/audits"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 ease-out hover:-translate-y-[1px] hover:shadow-md active:translate-y-[1px]"
          >
            See how the CRO Audit works
          </Link>
        </div>
      </div>
    </section>
  );
}

