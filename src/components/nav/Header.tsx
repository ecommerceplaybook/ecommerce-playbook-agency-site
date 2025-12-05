"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "CRO Audits", href: "/audits", hasDropdown: true },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Case Studies", href: "/case-studies", hasDropdown: true },
  { label: "Tools", href: "/tools", hasDropdown: true },
  { label: "About", href: "/about" },
];

const dropdownItems = {
  "CRO Audits": [
    { title: "Homepage Audit", image: "/home.png", href: "/audits/homepage" },
    { title: "Product Page Audit", image: "/product-page.png", href: "/audits/product-page" },
    { title: "Collections Audit", image: "/collections.png", href: "/audits/collections" },
    { title: "Checkout Audit", image: "/shopify.png", href: "/audits/checkout" },
  ],
  "Services": [
    { title: "CRO Strategy", image: "/arc-grove.png", href: "/services/cro-strategy" },
    { title: "UX Design", image: "/black-tie.png", href: "/services/ux-design" },
    { title: "Development", image: "/kidsy.png", href: "/services/development" },
    { title: "Analytics Setup", image: "/ooo.png", href: "/services/analytics" },
  ],
  "Case Studies": [
    { title: "Kidsy", image: "/kidsy.png", href: "/case-studies/kidsy" },
    { title: "Arc Grove", image: "/arc-grove.png", href: "/case-studies/arc-grove" },
    { title: "Black Tie", image: "/black-tie.png", href: "/case-studies/black-tie" },
    { title: "Out of Office", image: "/ooo.png", href: "/case-studies/ooo" },
  ],
  "Tools": [
    { title: "CRO Calculator", image: "/home.png", href: "/tools/cro-calculator" },
    { title: "A/B Test Planner", image: "/product-page.png", href: "/tools/ab-test-planner" },
    { title: "Heatmap Analyzer", image: "/collections.png", href: "/tools/heatmap-analyzer" },
    { title: "Funnel Optimizer", image: "/shopify.png", href: "/tools/funnel-optimizer" },
  ],
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  return (
    <header 
      className="sticky top-0 z-50 bg-black border-b border-gray-800"
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center">
              <div className="inline-flex items-center rounded-md p-[2px] bg-gradient-to-r from-[#008060] via-[#95bf47] to-[#1a365d]">
                <div className="inline-flex items-center justify-center rounded-md w-10 h-10 bg-black">
                  <span className="text-sm font-semibold text-white">EP</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.label)}
                >
                  <Link
                    href={link.href}
                    className="text-sm !text-white hover:underline flex items-center gap-1"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <span className="text-xs">+</span>
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/work-with-us"
                className="inline-flex items-center gap-1.5 pl-5 pr-4 py-2 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-200 ease-out hover:-translate-y-[1px] hover:shadow-md active:translate-y-[1px]"
              >
                <span>Work With Us</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden p-2 !text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{ color: 'white' }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: 'white' }}
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Full Width Dropdown Menu */}
        {openDropdown && (
          <div 
            className="absolute top-full left-0 right-0 w-full bg-black border-t border-gray-800 shadow-xl z-40 overflow-hidden"
            onMouseEnter={() => setOpenDropdown(openDropdown)}
            onMouseLeave={() => setOpenDropdown(null)}
            style={{
              animation: 'slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-4 gap-6">
                {dropdownItems[openDropdown as keyof typeof dropdownItems]?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative overflow-hidden rounded-lg aspect-square"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        className="text-sm !text-white py-2 hover:underline flex items-center gap-1 w-full text-left"
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label)}
                        style={{ color: 'white' }}
                      >
                        {link.label}
                        <span className="text-xs">+</span>
                      </button>
                      {mobileDropdownOpen === link.label && (
                        <div className="pl-4 pb-4 grid grid-cols-2 gap-3">
                          {dropdownItems[link.label as keyof typeof dropdownItems]?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group relative overflow-hidden rounded-lg aspect-square"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileDropdownOpen(null);
                              }}
                            >
                              <div className="relative w-full h-full">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-3">
                                  <h3 className="text-white font-semibold text-xs group-hover:text-green-400 transition-colors">
                                    {item.title}
                                  </h3>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm !text-white py-2 hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ color: 'white' }}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/work-with-us"
                className="inline-flex items-center gap-1.5 pl-5 pr-4 py-2 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-200 ease-out hover:-translate-y-[1px] hover:shadow-md active:translate-y-[1px] w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Work With Us</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

