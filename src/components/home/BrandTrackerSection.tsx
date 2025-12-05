"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  { id: "blacktie", label: "Blacktie CBD", active: true },
  { id: "emme", label: "Emme Diane", active: false },
  { id: "horncreek", label: "Horn Creek Hemp", active: false },
];

const caseStudies = [
  {
    id: "blacktie",
    title: "From 2.7% to 7–8%: How a CBD Brand Turned CRO into a Revenue Engine",
    problem: "Aggressive paid traffic, but poor site conversion. Cluttered PDP, lagging mobile performance, misaligned email flows.",
    whatWeDid: [
      "CRO audit",
      "PDP rebuild",
      "Navigation + collection UX refinements",
      "Klaviyo rebuild aligned to buyer behavior",
    ],
    result: "From 2.7% to 7–8% conversion rate without increasing ad spend.",
    link: "/case-studies/blacktie-cbd-cro",
  },
  {
    id: "emme",
    title: "How a Clinical Skincare Brand Increased Email Revenue by 34%",
    problem: "Complex customer journey with inconsistent email revenue. Low engagement from existing flows and templates.",
    whatWeDid: [
      "Klaviyo flow rebuild",
      "Email marketing strategy and segmentation",
      "Flow copywriting focused on conversions",
      "Email analytics and A/B testing",
    ],
    result: "+34% email revenue and higher engagement from rebuilt flows and templates.",
    link: "/case-studies/emme-diane-klaviyo-cro",
  },
  {
    id: "horncreek",
    title: "Migration and CRO Improvements for a Hemp Brand",
    problem: "Hemp brand moving into a more scalable Shopify setup needed conversion improvements.",
    whatWeDid: [
      "Shopify migration",
      "CRO improvements across funnel",
      "UX enhancements",
      "Checkout optimization",
    ],
    result: "Early lifts in CVR, ATC, and checkout completion.",
    link: "/case-studies/horn-creek-hemp-migration",
  },
];

export default function BrandTrackerSection() {
  const [activeTab, setActiveTab] = useState("blacktie");

  const activeCaseStudy = caseStudies.find((cs) => cs.id === activeTab) || caseStudies[0];

  return (
    <section className="relative py-20">
      <div className="px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="relative overflow-hidden rounded-[28px] bg-[#111311] py-20 px-6 md:px-12 lg:px-16">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#323531] px-4 py-2 shadow-lg">
              <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-white">Featured Case Studies</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8 flex justify-center">
            <div className="relative inline-flex rounded-full border border-white/8 bg-[#111311] p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative z-10 rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-white/20 text-white"
                      : "text-white/50 hover:text-white/75"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="mb-12 mx-auto max-w-2xl text-center text-2xl font-normal leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
            {activeCaseStudy.title}
          </h2>

          {/* Case Study Content */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">The Problem</h3>
                <p className="text-white/80 leading-relaxed">
                  {activeCaseStudy.problem}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">What We Did</h3>
                <ul className="space-y-2 text-white/80">
                  {activeCaseStudy.whatWeDid.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#72fd4e] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">The Result</h3>
                <p className="text-white/80 leading-relaxed">
                  {activeCaseStudy.result}
                </p>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl border border-white/20 bg-neutral-800 shadow-xl">
                <div className="aspect-[574/364] w-full bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* Placeholder for case study visual */}
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 text-5xl">📈</div>
                      <p className="text-sm text-white/50">Case Study Visual</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={activeCaseStudy.link}
              className="group relative inline-flex h-[52px] items-center justify-center rounded-2xl px-8 text-base font-medium text-[#111311] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg"
              style={{
                background: "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(114, 253, 78) 0%, rgb(170, 254, 36) 100%)",
                boxShadow: "0px 8px 35px 0px rgba(170, 254, 36, 0.15), 0px 4px 19.4px 0px rgba(170, 254, 36, 0.15)",
              }}
            >
              <span className="relative z-10">View full case study</span>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 text-base font-medium text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-[1px] hover:shadow-md"
            >
              View all case studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

