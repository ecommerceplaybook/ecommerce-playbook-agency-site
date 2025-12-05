import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030901]">
      {/* Hero Content */}
      <div className="page-container relative z-10 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Main Heading */}
          <div className="mb-8 text-center">
            <h1 className="mx-auto mb-6 max-w-4xl text-3xl font-normal leading-none tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
              Get More{" "}
              <span className="bg-gradient-to-r from-[#72fd4e] to-[#aafe24] bg-clip-text text-transparent">
                Shopify Orders
              </span>{" "}
              Without Increasing{" "}
              <span className="bg-gradient-to-r from-[#72fd4e] to-[#aafe24] bg-clip-text text-transparent">
                Ad Spend
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/73 md:text-xl">
              We help you build optimized customer journeys that reduce confusion and make your offer, promise, and unique value proposition crystal clear—so your customers know exactly why they should buy from you.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              
              <Link
                href="/contact"
                className="inline-flex h-[44px] items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white px-6 text-base font-medium text-[#111311] transition-all duration-200 hover:bg-white/90 hover:-translate-y-[1px] hover:shadow-md"
              >
                Let's Connect
              </Link>
            </div>
            
            {/* Trust Logos */}
            <div className="mt-12 flex flex-col items-center gap-6">
              <p className="text-sm text-white/73">Trusted by 7- and 8-Figure Shopify Brands:</p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity">
                  <Image
                    src="/black-tie.png"
                    alt="Black Tie"
                    width={120}
                    height={32}
                    className="h-8 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity">
                  <Image
                    src="/brand-2.svg"
                    alt="Brand 2"
                    width={120}
                    height={32}
                    className="h-8 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity">
                  <Image
                    src="/ooo.png"
                    alt="OOO"
                    width={120}
                    height={32}
                    className="h-8 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity">
                  <Image
                    src="/arc-grove.png"
                    alt="Arc Grove"
                    width={120}
                    height={32}
                    className="h-8 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity">
                  <Image
                    src="/Kidsy-Logo-Desktop.avif"
                    alt="Kidsy"
                    width={120}
                    height={32}
                    className="h-8 w-auto object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="mt-8">
              <p className="text-xs text-white/50">
                <span className="text-white/60">Note:</span> You are experiencing a conversion rate optimized custom Headless Shopify store.{" "}
                <Link href="/tools" className="underline hover:text-white/80">
                  To view all conversion rate tactics on this page click here
                </Link>
                .
              </p>
            </div>
            
            {/* Social Proof */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3.5 w-3.5 text-[#72fd4e]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-white/73">100% Job Success • $200K+ Total Earnings • 86 Completed Jobs</span>
            </div>
          </div>
          
          {/* Product Screenshot/Video */}
          <div className="mt-16">
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/8 bg-black/40 backdrop-blur-sm">
              <div className="aspect-video w-full bg-gradient-to-br from-[#030901] to-black">
                {/* Placeholder for product screenshot/video */}
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 text-4xl">📊</div>
                    <p className="text-white/50">Product Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Dividers */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#72fd4e] to-transparent opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#72fd4e] to-transparent opacity-20" />
    </section>
  );
}
