"use client";

import Link from "next/link";
import { mainNav, secondaryNav, footerNav } from "@/config/navigation";
import { siteMeta } from "@/config/siteMeta";

const services = [
  { label: "Design & Strategy", href: "/services/design-strategy" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "SEO, CRO & Growth", href: "/services/seo-cro-growth" },
  { label: "Business Apps", href: "/services/business-apps" },
  { label: "AI and Automation", href: "/services/ai-automation" },
  { label: "Long-Term Relationship", href: "/services/maintenance" },
];

const portfolioLinks = [
  { label: "Portfolio", href: "/case-studies" },
  { label: "Testimonials", href: "/testimonials" },
];

const companyLogos = [
  "Dropbox Sign",
  "WV",
  "GitHub",
  "Vanta",
  "AURA",
  "Entertainment",
];

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Column 1 - Black card with navigation links */}
          <div className="bg-black text-white rounded-lg p-8 md:p-12">
            <div className="space-y-6">
              <p className="text-lg font-semibold">{"{Finsweet"}</p>
              <nav className="space-y-4">
                {mainNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                {secondaryNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="pt-8 space-y-2">
                <p className="text-xs text-gray-400">© {new Date().getFullYear()} Finsweet</p>
              </div>
            </div>
          </div>

          {/* Column 2 - White card with Services */}
          <div className="bg-white rounded-lg p-8 md:p-12">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Services
              </p>
              <nav className="space-y-4">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-sm text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Column 3 - Two separate white cards */}
          <div className="space-y-6">
            {/* Portfolio Card */}
            <div className="bg-white rounded-lg p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-4">
                Portfolio
              </p>
              <nav className="space-y-4">
                {portfolioLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Companies That Trust Us Card */}
            <div className="bg-white rounded-lg p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-4">
                Companies That Trust Us
              </p>
              <div className="relative overflow-hidden">
                {/* Left fade gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                
                {/* Right fade gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                
                {/* Scrolling logos */}
                <div className="flex scroll-logos">
                  <div className="flex gap-8 items-center">
                    {[...companyLogos, ...companyLogos, ...companyLogos].map((logo, idx) => (
                      <div
                        key={`logo-${idx}`}
                        className="flex-shrink-0 px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-slate-700"
                      >
                        {logo}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4 text-right">
                Reliable since 2016
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
