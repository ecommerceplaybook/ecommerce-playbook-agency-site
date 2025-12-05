import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-16 px-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
      <div className="max-w-4xl mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0">
          {/* Left Column */}
          <div className="space-y-4">
            <h2 className="text-gray-900 text-2xl md:text-3xl font-bold opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] [animation-delay:150ms]">
              Who We Are (and Why We Only Take 5 Clients)
            </h2>
            
            <p className="text-gray-600">
              eCommerce Playbook is a boutique CRO and headless Shopify team led by Michael Muniz.
            </p>
            
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mt-6">
              What We Believe
            </h3>
            
            <ul className="text-gray-600 space-y-2 list-disc pl-5 mt-4">
              <li>Brands should stop guessing.</li>
              <li>Decisions should be rooted in data, UX, and real customer behavior.</li>
              <li>Senior team only — no juniors.</li>
              <li>KPI-driven strategy.</li>
            </ul>
            
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mt-6">
              Team Structure
            </h3>
            
            <div className="mt-6">
              <Link 
                href="/about" 
                className="text-sm font-medium text-gray-900 underline hover:text-gray-700 cta-link"
              >
                Learn more about how we work
              </Link>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            <p className="text-gray-600">
              Boutique team of four:
            </p>
            
            <ul className="text-gray-600 space-y-2 list-disc pl-5 mt-2">
              <li>Strategy</li>
              <li>Client success</li>
              <li>Design</li>
              <li>Development</li>
            </ul>
            
            <p className="text-gray-600 mt-4">
              Focus: Shopify brands doing $100k+/month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

