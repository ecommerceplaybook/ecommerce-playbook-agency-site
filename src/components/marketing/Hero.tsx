import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

interface HeroProps {
  heading: string;
  subheading: string;
  supportingPoints?: string[];
}

export function Hero({ heading, subheading, supportingPoints }: HeroProps) {
  return (
    <Section className="pt-24">
      <div className="flex flex-col gap-8 text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Conversion-first Shopify builds
        </p>
        <h1 className="text-4xl font-semibold text-slate-900 md:text-6xl">{heading}</h1>
        <p className="text-xl text-slate-600 md:text-2xl">{subheading}</p>
        {supportingPoints && (
          <ul className="grid gap-2 text-left text-sm uppercase tracking-wide text-slate-500 md:grid-cols-3">
            {supportingPoints.map((point) => (
              <li key={point} className="rounded-full border border-slate-200 px-4 py-2 text-center text-slate-700">
                {point}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-col gap-4 md:flex-row">
          <Button href="/contact" size="lg">
            Build the Playbook
          </Button>
          <Button href="/case-studies" variant="secondary" size="lg">
            See Case Studies
          </Button>
        </div>
      </div>
    </Section>
  );
}
