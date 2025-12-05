import { Section } from "@/components/ui/Section";
import { Grid } from "@/components/ui/Grid";

export function ProblemSection() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            The problem
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Is your Shopify store quietly leaking revenue?
          </h2>
          <p className="mt-4 text-slate-600">
            ROAS keeps slipping. CAC creeps up. The site looks good on the surface, but conversion, AOV, and repeat
            purchases lag behind the effort you&rsquo;re putting into growth.
          </p>
          <p className="mt-3 text-slate-600">
            If this sounds familiar, you&rsquo;re not alone. Most DTC brands are guessing their way through CRO&mdash;shipping
            small changes and hoping something moves the needle.
          </p>
        </div>
        <Grid gap="md">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">External</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>ROAS is weak and CAC keeps creeping up.</li>
              <li>Your site looks good but CVR, AOV, and repeat purchases lag.</li>
              <li>You&rsquo;re constantly shipping small changes that don&rsquo;t move the needle.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Internal</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>You feel like you&rsquo;re wasting money on ads and redesigns.</li>
              <li>You&rsquo;re tired of guessing what to fix next.</li>
              <li>You don&rsquo;t have a partner who truly understands CRO and Shopify.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Philosophical</p>
            <p className="mt-4 text-sm text-slate-700">
              It shouldn&rsquo;t be this hard (or this expensive) to turn interested visitors into profitable customers.
            </p>
          </div>
        </Grid>
      </div>
    </Section>
  );
}


