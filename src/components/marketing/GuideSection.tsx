import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function GuideSection() {
  return (
    <Section background="muted">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            The guide
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Why eCommerce Playbook exists</h2>
          <p className="mt-4 text-slate-600">
            We&rsquo;ve seen great brands burn cash on traffic while their store quietly leaks revenue. You shouldn&rsquo;t
            have to choose between growth and profitability&mdash;you deserve both.
          </p>
          <p className="mt-3 text-slate-600">
            We partner with DTC founders, CMOs, and eCom managers to bring clarity to the chaos: where you&rsquo;re
            leaking, what to fix first, and how to turn your existing traffic into profit.
          </p>
        </div>
        <div className="grid max-w-md gap-4">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Authority</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>Helped brands grow from $250k to $400k+/month in ~90 days.</li>
              <li>Delivered 20–30%+ conversion lifts without increasing ad spend.</li>
              <li>Specialist in Shopify CRO, Klaviyo, and high-converting UX.</li>
            </ul>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">How we show up</p>
            <p className="mt-4 text-sm text-slate-700">
              We obsess over the numbers&mdash;analytics, session replays, and testing&mdash;so you can focus on running
              the brand while your store quietly becomes a better salesperson.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}


