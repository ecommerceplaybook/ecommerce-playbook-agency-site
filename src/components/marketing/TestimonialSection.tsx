import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function TestimonialSection() {
  return (
    <Section background="contrast">
      <Card className="bg-white text-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Testimonial</p>
        <p className="mt-6 text-2xl font-semibold">
          &ldquo;eCommerce Playbook helped us fix the friction in our PDPs and mobile checkout. We saw a 28% lift in
          conversion before touching ad spend.&rdquo;
        </p>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-slate-500">COO, Growth Stage Beauty Brand</p>
      </Card>
    </Section>
  );
}
