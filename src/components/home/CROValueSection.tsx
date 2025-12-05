import Link from "next/link";

export default function CROValueSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Heading */}
        <div className="space-y-4">
          <h2 className="text-gray-900 text-3xl font-bold">
            See What CRO Could Be Worth to Your Store
          </h2>
          <p className="text-gray-600">
            Most teams know their traffic numbers, but not the value of small conversion lifts. Here's how incremental improvements compound into real revenue.
          </p>
        </div>

        {/* Value Proposition Card */}
        <div className="border border-gray-200 rounded-lg p-6 md:p-8 space-y-6 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-lg hover:border-[var(--color-accent)]/30 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          {/* Key Insight */}
          <div className="space-y-3">
            <h3 className="text-gray-900 text-xl font-semibold">
              Small Changes, Big Impact
            </h3>
            <p className="text-gray-600">
              A 1% lift in conversion rate doesn't sound like much, but when you're driving significant traffic, that small improvement can translate to hundreds of thousands in additional monthly revenue—without spending more on ads.
            </p>
          </div>

          {/* Example Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Example Scenario
              </p>
              <p className="text-gray-600 text-sm">
                100K monthly visitors × 2.5% conversion rate × $100 AOV = $250K monthly revenue
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                With 1% Lift
              </p>
              <p className="text-gray-600 text-sm">
                100K monthly visitors × 3.5% conversion rate × $100 AOV = $350K monthly revenue
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Additional Revenue
              </p>
              <p className="text-gray-900 text-lg font-semibold">
                +$100K/month
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Want to see what CRO could be worth to your specific store?
            </p>
            <Link
              href="/tools/cro-uplift-calculator"
              className="inline-flex items-center px-5 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 transition-all duration-200 ease-out hover:-translate-y-[1px] hover:shadow-md active:translate-y-[1px]"
            >
              Try the CRO Revenue Calculator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

