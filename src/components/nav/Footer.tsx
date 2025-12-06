"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, secondaryNav, footerNav } from "@/config/navigation";

const services = [
  { 
    label: "Design and Strategy", 
    href: "/services/design-strategy",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="6" height="6" rx="1" fill="currentColor"/>
        <rect x="8" y="8" width="6" height="6" rx="1" fill="currentColor"/>
      </svg>
    )
  },
  { 
    label: "Web Development", 
    href: "/services/web-development",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4h12M2 8h12M2 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    label: "SEO, CRO & Growth", 
    href: "/services/seo-cro-growth",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="m10 10 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    label: "Business Apps", 
    href: "/services/business-apps",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3h8v10H4V3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M6 6h4M6 8h4M6 10h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    label: "AI and Automation", 
    href: "/services/ai-automation",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2v4M8 10v4M2 8h4M10 8h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  { 
    label: "Long-Term Relationship", 
    href: "/services/maintenance",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
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

const tabs = [
  { id: "agency", label: "Agency" },
  { id: "products", label: "Products" },
  { id: "company", label: "Company" },
  { id: "security", label: "Security & Legal" },
];

// Mock portfolio items - replace with actual data from CMS
const portfolioItems = [
  { id: 1, title: "Trust", image: "/after-kidsy.png" },
  { id: 2, title: "Jack.org BTC", image: "/black-tie.png" },
  { id: 3, title: "Givebutter", image: "/kidsy.png" },
];

export default function Footer() {
  const [activeTab, setActiveTab] = useState("agency");

  return (
    <footer className="bg-gray-50 relative">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Column 1 - Dark card with navigation tabs */}
          <div className="bg-black/90 backdrop-blur-md border border-gray-800/50 text-white rounded-[14px] p-6 lg:p-12">
            <div className="space-y-4">
              {/* Tabs */}
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-3 py-3 rounded-[7px] text-[27px] font-normal transition-colors flex items-center justify-between ${
                      activeTab === tab.id
                        ? "bg-white"
                        : "text-white hover:text-[#72fd4e]"
                    }`}
                  >
                    <span className={activeTab === tab.id ? "text-black" : ""}>{tab.label}</span>
                    <svg
                      className={`w-6 h-6 ${activeTab === tab.id ? "text-black" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Logo */}
              <div className="pt-8">
                <p className="text-lg font-semibold">{"{Finsweet"}</p>
              </div>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="bg-white border border-gray-200 rounded-[14px] p-6 lg:p-12">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-normal uppercase tracking-[1.3px] text-gray-500 mb-2">
                  Core Services
                </p>
                <Link
                  href="/services"
                  className="text-[20px] font-normal text-black hover:text-[#72fd4e] transition-colors block pb-4 border-b border-transparent hover:border-gray-300"
                >
                  All Services
                </Link>
              </div>

              <nav className="space-y-3">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-3 text-[15px] text-gray-700 hover:text-black transition-colors py-1"
                  >
                    <div className="bg-gray-100 rounded-[3px] p-1.5 flex-shrink-0 text-gray-600">
                      {service.icon}
                    </div>
                    <span>{service.label}</span>
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-[15px] font-medium text-[#111311] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg"
                style={{
                  background: "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(114, 253, 78) 0%, rgb(170, 254, 36) 100%)",
                  boxShadow: "0px 8px 35px 0px rgba(170, 254, 36, 0.15), 0px 4px 19.4px 0px rgba(170, 254, 36, 0.15)",
                }}
              >
                <span className="relative z-10">Contact Agency Sales</span>
                <svg
                  className="w-4 h-4 relative z-10"
                  fill="none"
                  viewBox="0 0 16 16"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 4l4 4-4 4"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 3 - Portfolio & Companies */}
          <div className="space-y-6">
            {/* Portfolio Section */}
            <div className="bg-white border border-gray-200 rounded-[14px] p-6 lg:p-12">
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-normal uppercase tracking-[1.3px] text-gray-500 mb-2">
                    The Work
                  </p>
                  <Link
                    href="/case-studies"
                    className="text-[20px] font-normal text-black hover:text-[#72fd4e] transition-colors block pb-4 border-b border-transparent hover:border-gray-300"
                  >
                    Portfolio
                  </Link>
                </div>

                <nav className="space-y-3">
                  {portfolioLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-[15px] text-gray-700 hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Portfolio Carousel */}
                <div className="relative overflow-hidden">
                  <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                    {[...portfolioItems, ...portfolioItems].map((item, idx) => (
                      <Link
                        key={`${item.id}-${idx}`}
                        href={`/case-studies/${item.id}`}
                        className="flex-shrink-0 w-[192px] bg-neutral-900 rounded-[7px] overflow-hidden hover:opacity-90 transition-opacity"
                      >
                        <div className="aspect-[164/82] bg-neutral-800 relative">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="bg-[#313131] px-3 py-2 flex items-center justify-between">
                          <span className="text-[13px] text-neutral-50 truncate">
                            {item.title}
                          </span>
                          <svg
                            className="w-4 h-4 text-neutral-50 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 16 16"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 4l4 4-4 4"
                            />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Companies That Trust Us */}
            <div className="bg-white border border-gray-200 rounded-[14px] p-6 lg:p-12">
              <div className="space-y-4">
                <p className="text-[10px] font-normal uppercase tracking-[1.3px] text-gray-500">
                  Companies That Trust Us
                </p>
                
                {/* Scrolling Logos */}
                <div className="relative overflow-hidden">
                  <div className="flex gap-8 animate-scroll animate-scroll-pause">
                    <div className="flex gap-8 items-center flex-shrink-0">
                      {[...companyLogos, ...companyLogos].map((logo, idx) => (
                        <div
                          key={`${logo}-${idx}`}
                          className="flex-shrink-0 px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-700 whitespace-nowrap"
                        >
                          {logo}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Finsweet
          </p>
          <p className="text-sm text-gray-600">
            Reliable since 2016
          </p>
        </div>
      </div>
    </footer>
  );
}
