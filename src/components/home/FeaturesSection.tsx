import Link from "next/link";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="relative bg-[#fdfffa] py-20">
      <div className="page-container">
        <div className="mx-auto max-w-7xl px-6">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(226,235,224,0.25)] bg-[#fdfffa] px-4 py-2 shadow-sm">
              <svg className="h-4 w-4 text-[#454545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm font-medium text-[#454545]">Our Services</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="mb-16 text-center text-4xl font-normal leading-tight tracking-tight text-[#030901] md:text-5xl lg:text-6xl">
            Services to Scale
            <br />
            8-Figures and Beyond
          </h2>

          {/* First Feature Card - Shop Database */}
          <div className="mb-12 rounded-[22px] bg-[#f9fbf9] p-6 md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left Content */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                    <svg className="h-6 w-6 text-[#111311]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-normal text-[#111311] md:text-2xl">
                    Conversion Rate Optimization (CRO)
                  </h3>
                </div>

                <p className="mb-6 text-base leading-relaxed text-[#111311]">
                  Identify and fix the leaks in your funnel across homepage, collection pages, product pages, cart, and checkout.
                </p>

                {/* Features List */}
                <ul className="mb-8 space-y-3">
                  {[
                    "Shopify CRO audits (homepage, collection, product, checkout)",
                    "Landing page optimization and redesign",
                    "A/B testing for copy, layout, offers, and UX",
                    "Conversion copywriting to boost CVR and AOV",
                    "Analytics setup: GA4, Hotjar, Shopify reports",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 shrink-0 text-[#72fd4e]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base text-[#111311]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/services"
                  className="group relative inline-flex h-[52px] items-center justify-center rounded-2xl px-8 text-base font-medium text-[#111311] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg"
                  style={{
                    background: "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(114, 253, 78) 0%, rgb(170, 254, 36) 100%)",
                    boxShadow: "0px 8px 35px 0px rgba(170, 254, 36, 0.15), 0px 4px 19.4px 0px rgba(170, 254, 36, 0.15)",
                  }}
                >
                  <span className="relative z-10">View All Services</span>
                </Link>
              </div>

              {/* Right Content - Screenshot/Video */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white shadow-xl">
                  <div className="aspect-[574/344] w-full bg-gradient-to-br from-gray-50 to-gray-100">
                    {/* Placeholder for product screenshot/video */}
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <div className="mb-4 text-5xl">📊</div>
                        <p className="text-sm text-gray-500">Shop Database Preview</p>
                      </div>
                    </div>
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-all hover:bg-black/60">
                      <svg className="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Feature Card - Analyze Any Store */}
          <div className="rounded-[22px] bg-[#f9fbf9] p-6 md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left Content - Screenshot */}
              <div className="order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white shadow-xl">
                  <div className="aspect-[574/364] w-full bg-gradient-to-br from-gray-50 to-gray-100">
                    {/* Placeholder for analytics screenshot */}
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <div className="mb-4 text-5xl">📈</div>
                        <p className="text-sm text-gray-500">Store Analytics Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                    <svg className="h-6 w-6 text-[#111311]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-normal text-[#111311] md:text-2xl">
                    Headless Shopify & UX
                  </h3>
                </div>

                <p className="mb-8 text-base leading-relaxed text-[#111311]">
                  High-performance storefronts built in Next.js with the speed, flexibility, and UX needed for serious scaling.
                </p>

                {/* Features List */}
                <ul className="mb-8 space-y-3">
                  {[
                    "Shopify theme customization and speed optimization",
                    "Custom product & collection page layouts",
                    "UX/UI enhancements for mobile and desktop",
                    "Page speed improvements to reduce bounce",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 shrink-0 text-[#72fd4e]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base text-[#111311]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/services"
                  className="group relative inline-flex h-[52px] items-center justify-center rounded-2xl px-8 text-base font-medium text-[#111311] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg"
                  style={{
                    background: "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(114, 253, 78) 0%, rgb(170, 254, 36) 100%)",
                    boxShadow: "0px 8px 35px 0px rgba(170, 254, 36, 0.15), 0px 4px 19.4px 0px rgba(170, 254, 36, 0.15)",
                  }}
                >
                  <span className="relative z-10">View All Services</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Third Feature Card - Email & Lifecycle Growth */}
          <div className="rounded-[22px] bg-[#f9fbf9] p-6 md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left Content */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                    <svg className="h-6 w-6 text-[#111311]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-normal text-[#111311] md:text-2xl">
                    Email & Lifecycle Growth
                  </h3>
                </div>

                <p className="mb-6 text-base leading-relaxed text-[#111311]">
                  Klaviyo flows, campaigns, and segmentation that increase lifetime value and turn one-time buyers into repeat customers.
                </p>

                {/* Features List */}
                <ul className="mb-8 space-y-3">
                  {[
                    "Klaviyo flow setup (welcome, cart, post-purchase, winback)",
                    "Email marketing strategy and segmentation",
                    "Flow copywriting focused on conversions",
                    "Email analytics and A/B testing to boost clicks and revenue",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 shrink-0 text-[#72fd4e]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base text-[#111311]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/services"
                  className="group relative inline-flex h-[52px] items-center justify-center rounded-2xl px-8 text-base font-medium text-[#111311] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg"
                  style={{
                    background: "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(114, 253, 78) 0%, rgb(170, 254, 36) 100%)",
                    boxShadow: "0px 8px 35px 0px rgba(170, 254, 36, 0.15), 0px 4px 19.4px 0px rgba(170, 254, 36, 0.15)",
                  }}
                >
                  <span className="relative z-10">View All Services</span>
                </Link>
              </div>

              {/* Right Content - Screenshot */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white shadow-xl">
                  <div className="aspect-[574/344] w-full bg-gradient-to-br from-gray-50 to-gray-100">
                    {/* Placeholder for email screenshot */}
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <div className="mb-4 text-5xl">📧</div>
                        <p className="text-sm text-gray-500">Email Marketing Preview</p>
                      </div>
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

