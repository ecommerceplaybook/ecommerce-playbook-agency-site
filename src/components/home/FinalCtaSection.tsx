import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="relative bg-white py-20">
      <div className="page-container">
        <div className="mx-auto max-w-7xl px-6">
          {/* Dark Container */}
          <div className="relative overflow-hidden rounded-[24px] bg-[#030901] px-6 py-16 md:px-12 md:py-20">
            {/* Decorative Vertical Dividers */}
            <div className="absolute inset-y-[10%] left-[8.42%] w-px bg-gradient-to-b from-[#72fd4e] to-[#aafe24] shadow-[8px_8px_4px_0px_rgba(94,201,24,0.02),5px_4px_4px_0px_rgba(94,201,24,0.08),2px_2px_3px_0px_rgba(94,201,24,0.13),1px_0px_2px_0px_rgba(94,201,24,0.15)]" />
            <div className="absolute inset-y-[44.2%] left-[8.42%] bottom-[27.11%] w-px bg-gradient-to-b from-[#72fd4e] to-[#aafe24] shadow-[8px_8px_4px_0px_rgba(94,201,24,0.02),5px_4px_4px_0px_rgba(94,201,24,0.08),2px_2px_3px_0px_rgba(94,201,24,0.13),1px_0px_2px_0px_rgba(94,201,24,0.15)]" />
            <div className="absolute inset-y-[10%] right-[8.42%] w-px bg-gradient-to-b from-[#72fd4e] to-[#aafe24] shadow-[8px_8px_4px_0px_rgba(94,201,24,0.02),5px_4px_4px_0px_rgba(94,201,24,0.08),2px_2px_3px_0px_rgba(94,201,24,0.13),1px_0px_2px_0px_rgba(94,201,24,0.15)]" />
            <div className="absolute inset-y-[44.2%] right-[8.42%] bottom-[27.11%] w-px bg-gradient-to-b from-[#72fd4e] to-[#aafe24] shadow-[8px_8px_4px_0px_rgba(94,201,24,0.02),5px_4px_4px_0px_rgba(94,201,24,0.08),2px_2px_3px_0px_rgba(94,201,24,0.13),1px_0px_2px_0px_rgba(94,201,24,0.15)]" />

            {/* Inner Border */}
            <div className="absolute inset-0 border border-white/8" />
            <div className="absolute inset-x-[112px] inset-y-0 border-x border-white/8" />
            <div className="absolute inset-x-[213px] inset-y-0 border-x border-white/8" />

            <div className="relative mx-auto max-w-4xl text-center">
              {/* Social Proof */}
              <div className="mb-8 flex items-center justify-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-[#72fd4e]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-white/73">100% Job Success • $200K+ Total Earnings • 86 Completed Jobs</span>
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full border-2 border-[#030901] bg-gradient-to-br from-[#72fd4e] to-[#aafe24]"
                      style={{ zIndex: 4 - i }}
                    />
                  ))}
                </div>
              </div>

              {/* Heading */}
              <h2 className="mb-6 text-3xl font-normal leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Ready to Stop Guessing
                <br />
                and Start Testing?
              </h2>

              {/* Description */}
              <p className="mb-8 text-base leading-relaxed text-white/73 md:text-lg">
                Clients work with us when they're ready to stop guessing and start testing,
                <br />
                turn traffic into sales, and improve conversion metrics without increasing ad spend.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex h-[52px] items-center justify-center rounded-2xl px-8 text-base font-medium text-[#111311] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg"
                  style={{
                    background: "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(114, 253, 78) 0%, rgb(170, 254, 36) 100%)",
                    boxShadow: "0px 8px 35px 0px rgba(170, 254, 36, 0.15), 0px 4px 19.4px 0px rgba(170, 254, 36, 0.15)",
                  }}
                >
                  <span className="relative z-10">Get a Free Website Audit</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-[44px] items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 text-base font-medium text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-[1px] hover:shadow-md"
                >
                  Let's Connect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
