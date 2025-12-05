import { Section } from "@/components/ui/Section";
import { Grid } from "@/components/ui/Grid";
import { Card } from "@/components/ui/Card";

const outcomes = [
  {
    title: "Higher conversion rate",
    description: "Turn more of your existing visitors into buyers without touching your ad budget first.",
  },
  {
    title: "Stronger AOV",
    description: "Design offers, bundles, and flows that naturally lift average order value.",
  },
  {
    title: "More repeat buyers",
    description: "Align onsite experience with Klaviyo flows and CX so customers come back, not just convert once.",
  },
  {
    title: "More profit from every ad dollar",
    description: "Stop watching CAC rise while ROAS stays flat. Build a store that sells more with less pressure.",
  },
];

export function OutcomesSection() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Outcomes
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">What changes when your store stops leaking</h2>
          <p className="mt-4 text-slate-600">
            When your Shopify store is built to convert, you make more from the traffic you already have, and every new
            visitor becomes an opportunity&mdash;not a gamble.
          </p>
        </div>
        <Grid gap="md">
          {outcomes.map((outcome) => (
            <Card key={outcome.title}>
              <h3 className="text-xl font-semibold text-slate-900">{outcome.title}</h3>
              <p className="mt-3 text-sm text-slate-700">{outcome.description}</p>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  );
}


