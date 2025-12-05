import Link from "next/link";

export default function TrendingAdsSection() {

  return (
    <section className="relative bg-[#f9fbf9] py-20">
      <div className="page-container">
        <div className="mx-auto max-w-7xl px-6">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(226,235,224,0.25)] bg-[#fdfffa] px-4 py-2 shadow-sm">
              <svg className="h-4 w-4 text-[#454545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm font-medium text-[#454545]">Recent Results</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="mb-12 text-center text-4xl font-normal leading-tight tracking-tight text-[#030901] md:text-5xl lg:text-6xl">
            Recent Results That
            <br />
            Speak for Themselves
          </h2>

          {/* Results Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="border-l-4 border-[#72fd4e] pl-4">
                  <h3 className="text-xl font-semibold text-[#111311] mb-2">CBD Brand</h3>
                  <p className="text-base leading-relaxed text-[#111311]">
                    Helped a CBD brand grow from $250k → $400k/month in 90 days by migrating to Shopify.
                  </p>
                </div>

                <div className="border-l-4 border-[#72fd4e] pl-4">
                  <h3 className="text-xl font-semibold text-[#111311] mb-2">Skincare Brand</h3>
                  <p className="text-base leading-relaxed text-[#111311]">
                    $180k in 4 days for a SKINCARE brand during Memorial Weekend 2025 using Klaviyo.
                  </p>
                </div>

                <div className="border-l-4 border-[#72fd4e] pl-4">
                  <h3 className="text-xl font-semibold text-[#111311] mb-2">Shark Tank Brand</h3>
                  <p className="text-base leading-relaxed text-[#111311]">
                    +24% CVR for a SHARK TANK brand doing $150k/mo by A/B testing PDP/homepage/Klaviyo.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/case-studies"
                className="group relative inline-flex h-[52px] w-fit items-center justify-center rounded-2xl px-8 text-base font-medium text-[#111311] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg"
                style={{
                  background: "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(114, 253, 78) 0%, rgb(170, 254, 36) 100%)",
                  boxShadow: "0px 8px 35px 0px rgba(170, 254, 36, 0.15), 0px 4px 19.4px 0px rgba(170, 254, 36, 0.15)",
                }}
              >
                <span className="relative z-10">View All Case Studies</span>
              </Link>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl">
                <div className="aspect-[633/356] w-full bg-gradient-to-br from-gray-50 to-gray-100">
                  {/* Placeholder for results visual */}
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 text-5xl">📊</div>
                      <p className="text-sm text-gray-500">Results Dashboard Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

