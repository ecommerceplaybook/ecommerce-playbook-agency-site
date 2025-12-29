"use client";

import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/utils/seo";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center">
      {/* Logo Text */}
      <div className="absolute top-6 left-6 z-20">
        <div className="flex items-center">
          <span className="text-gray-900 text-sm font-medium uppercase">ecommerce</span>
          <span className="text-gray-900 text-sm font-bold uppercase">playbook</span>
        </div>
      </div>

      {/* Vertical Menu */}
      <nav className="absolute top-6 right-6 z-20">
        <ul className="flex flex-col gap-1.5 text-left">
          <li>
            <Link href="/results" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Results
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Services
            </Link>
          </li>
          <li>
            <Link href="/testimonials" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/resources" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Resources
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Optional: Add a subtle animation or additional text */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 bg-gray-50">
            <div className="h-2 w-2 rounded-full bg-[#72fd4e] animate-pulse"></div>
            <p className="text-sm text-gray-700">Top Rated Plus CRO Agency</p>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-gray-900 mb-6 max-w-3xl mx-auto">
            Increase Your Shopify Conversion Rate by{" "}
            <span className="text-gray-900">20%</span>
            .{" "}
            <span className="text-gray-900 font-bold">Guaranteed.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
            We optimize your customer journey to maximize conversions and revenue without increasing ad spend.
          </p>
          <span 
            className="inline-block rounded-2xl"
            style={{
              background: "linear-gradient(90deg, rgb(114, 253, 78) 0%, rgb(170, 254, 36) 100%)",
              padding: "2px",
            }}
          >
            <Link
              href="https://www.upwork.com/freelancers/michaeldmuniz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-[52px] items-center justify-center rounded-[14px] px-8 text-base font-medium text-white bg-black transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg hover:text-white"
            >
              <span className="relative z-10 text-white group-hover:text-white">View Upwork Profile</span>
            </Link>
          </span>
          
          {/* Used by Brands Section */}
          <div className="mt-12">
            <p className="text-sm text-gray-600 mb-6">
              Used by leading brands and companies from across the globe
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src="/black-tie.png"
                  alt="Black Tie"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain grayscale"
                />
              </div>
              <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src="/brand-2.svg"
                  alt="Brand"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain"
                  style={{ filter: 'invert(1) grayscale(100%) brightness(0.3)' }}
                />
              </div>
              <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src="/ooo.png"
                  alt="OOO"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain grayscale"
                />
              </div>
              <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src="/arc-grove.png"
                  alt="Arc Grove"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain grayscale"
                />
              </div>
              <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src="/Kidsy-Logo-Desktop.avif"
                  alt="Kidsy"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Dividers */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#72fd4e] to-transparent opacity-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#72fd4e] to-transparent opacity-10" />
    </div>
  );
}
