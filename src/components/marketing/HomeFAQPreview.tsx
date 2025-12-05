import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    id: "homepage-faq-1",
    trigger: "What happens on a CRO Mapping Call?",
    content:
      "We review your key metrics, walk through your current funnel, and identify the biggest leaks in your onsite experience. You’ll leave with clear next steps, not a generic sales pitch.",
  },
  {
    id: "homepage-faq-2",
    trigger: "How quickly can we see results?",
    content:
      "Most brands see meaningful lift within 60–90 days as we ship the first wave of high-impact changes across PDPs, carts, and key flows. Bigger structural tests follow once the foundations are solid.",
  },
  {
    id: "homepage-faq-3",
    trigger: "Do you only work with Shopify brands?",
    content:
      "Yes. We specialize in Shopify and Shopify Plus so we can go deep on what actually moves the needle for DTC brands on that stack.",
  },
];

export function HomeFAQPreview() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Is CRO with eCommerce Playbook right for you?
            </h2>
          </div>
          <a href="/faq" className="hidden text-sm font-medium text-slate-600 md:inline">
            View full FAQ →
          </a>
        </div>
        <Accordion className="mt-8" items={faqItems} />
        <a href="/faq" className="mt-4 inline-block text-sm font-medium text-slate-600 md:hidden">
          View full FAQ →
        </a>
      </div>
    </Section>
  );
}


