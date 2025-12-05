import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";

const services = [
  {
    title: "eCommerce CRO Audit & Roadmap",
    description:
      "Deep dive into your analytics, onsite flows, and customer behavior to identify the highest-impact opportunities.",
  },
  {
    title: "CRO Implementation (Design + Dev + A/B Tests)",
    description:
      "Translate insights into new UX, offers, and experiments across homepage, PLP, PDP, cart, and checkout touchpoints.",
  },
  {
    title: "Klaviyo Flows & Email CRO",
    description:
      "Build flows and campaigns that reinforce onsite offers, lift LTV, and turn more first-time buyers into repeat customers.",
  },
  {
    title: "Conversion-led Shopify & Webflow Builds",
    description:
      "New builds and redesigns that start with conversion strategy first—so your site doesn’t just look good, it sells.",
  },
];

export function ServiceGrid() {
  return (
    <Section>
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Services
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">What we actually do</h2>
        <p className="mt-4 text-slate-600">
          Whether you need a focused CRO audit or end-to-end implementation, we plug into your team to ship the
          experiments and experiences that move revenue.
        </p>
      </div>
      <Grid gap="md">
        {services.map((service) => (
          <Card key={service.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Service</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-slate-600">{service.description}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
