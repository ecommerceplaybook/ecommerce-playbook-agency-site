import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <Section background="muted">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Ready to plug the leaks?
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          More of the sales you deserve. Less of the ad spend you regret.
        </h2>
        <p className="max-w-2xl text-lg text-slate-600">
          Book a CRO Mapping Call to see exactly where your store is leaking, what to fix first, and how to turn your
          existing traffic into profitable growth.
        </p>
        <Button href="/contact" size="lg">
          Book a CRO Mapping Call
        </Button>
      </div>
    </Section>
  );
}
