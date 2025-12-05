import { Section } from "@/components/ui/Section";
import { Grid } from "@/components/ui/Grid";
import { Card } from "@/components/ui/Card";

export function PlanSection() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            The plan
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Our 3-step CRO playbook</h2>
          <p className="mt-4 text-slate-600">
            No random redesigns. No guessing. Just a clear sequence to map your funnel, fix the biggest leaks, and ship
            experiments that actually move revenue.
          </p>
        </div>
        <Grid gap="md">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Step 1</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">Book a CRO Mapping Call</h3>
            <p className="mt-3 text-sm text-slate-700">
              We dig into your numbers, funnel, and current store performance to understand how traffic is really
              behaving today.
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Step 2</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">Get a CRO Playbook &amp; Roadmap</h3>
            <p className="mt-3 text-sm text-slate-700">
              You receive a prioritized plan to plug leaks, elevate key flows, and design tests that actually matter to
              CVR, AOV, and retention.
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Step 3</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">Implement, Test, and Scale</h3>
            <p className="mt-3 text-sm text-slate-700">
              We handle design, dev, and experiments so you get compounding gains&mdash;not one-off wins&mdash;from the
              traffic you already have.
            </p>
          </Card>
        </Grid>
      </div>
    </Section>
  );
}


