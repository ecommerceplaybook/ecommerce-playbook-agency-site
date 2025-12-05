"use client";

import { Section } from "@/components/ui/Section";

const logos = [
  "Haus",
  "Cadence",
  "Jot",
  "Brightland",
  "Vacation",
  "AURA",
  "Vanta",
  "GitHub",
  "Entertainment",
];

export function LogoCloud() {
  return (
    <Section background="default">
      <p className="text-center text-sm uppercase tracking-[0.3em] text-slate-500 mb-8">
        Trusted by seven and eight figure Shopify brands
      </p>
      <div className="relative overflow-hidden">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling logos */}
        <div className="flex scroll-logos">
          <div className="flex gap-8 items-center">
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div
                key={`logo-${idx}`}
                className="flex-shrink-0 px-6 py-4 bg-gray-100 rounded-lg text-xl font-semibold text-slate-700 transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-lg"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
