import type { FAQItem } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";

export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold text-slate-900">Questions teams ask us</h2>
        <Accordion
          className="mt-8"
          items={items.map((item) => ({
            id: item.id,
            trigger: item.question,
            content: item.answer,
          }))}
        />
      </div>
    </Section>
  );
}
