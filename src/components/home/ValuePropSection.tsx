"use client";

import { useState } from "react";
import { CROProductCard } from "@/components/store/CROProductCard";

const services = [
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "Identify and fix the leaks in your funnel across homepage, collection pages, product pages, cart, and checkout.",
    imageUrl: "/product-page.png",
    imageAlt: "Conversion Rate Optimization Service",
    price: {
      amount: "5000.00",
      currencyCode: "USD",
    },
    handle: "conversion-rate-optimization-cro",
    variantId: "cro-service-variant-1",
  },
  {
    title: "Headless Shopify & UX",
    description: "High-performance storefronts built in Next.js with the speed, flexibility, and UX needed for serious scaling.",
    imageUrl: "/home.png",
    imageAlt: "Headless Shopify & UX Service",
    price: {
      amount: "10000.00",
      currencyCode: "USD",
    },
    handle: "headless-shopify-ux",
    variantId: "headless-service-variant-1",
  },
  {
    title: "Email & Lifecycle Growth",
    description: "Klaviyo flows, campaigns, and segmentation that increase lifetime value and turn one-time buyers into repeat customers.",
    imageUrl: "/collections.png",
    imageAlt: "Email & Lifecycle Growth Service",
    price: {
      amount: "3000.00",
      currencyCode: "USD",
    },
    handle: "email-lifecycle-growth",
    variantId: "email-service-variant-1",
  },
];

export default function ValuePropSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-default opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
      <div className="page-container">
        <h2 className="mb-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] [animation-delay:150ms]">
          Services to Scale 8-Figures and Beyond
        </h2>

        {/* Tabs */}
        <div className="mb-8 flex border-b border-slate-200">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-4 text-sm font-semibold transition-colors ${
                activeTab === index
                  ? "border-b-2 border-[var(--color-accent)] text-slate-900"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Tab Content - Larger Product Card */}
        <div className="opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] [animation-delay:200ms]">
          <div className="max-w-2xl mx-auto">
            <CROProductCard
              title={services[activeTab].title}
              description={services[activeTab].description}
              imageUrl={services[activeTab].imageUrl}
              imageAlt={services[activeTab].imageAlt}
              price={services[activeTab].price}
              handle={services[activeTab].handle}
              variantId={services[activeTab].variantId}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

