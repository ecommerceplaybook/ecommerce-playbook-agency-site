import { CROProductCard } from "@/components/store/CROProductCard";
import { Section } from "@/components/ui/Section";
import { Grid } from "@/components/ui/Grid";

export default function CRODemoPage() {
  return (
    <Section>
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Demo
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900">
          CRO Product Card
        </h1>
        <p className="mt-4 text-slate-600">
          Shopify-style product card for Conversion Rate Optimization service
        </p>
      </div>

      <Grid columns={3} className="md:grid-cols-2 lg:grid-cols-3">
        <CROProductCard
          title="Conversion Rate Optimization (CRO)"
          description="Identify and fix the leaks in your funnel across homepage, collection pages, product pages, cart, and checkout."
          imageUrl="/product-page.png"
          imageAlt="CRO Service - Conversion Rate Optimization"
          price={{
            amount: "5000.00",
            currencyCode: "USD",
          }}
          handle="conversion-rate-optimization-cro"
          variantId="cro-service-variant-1"
        />
      </Grid>
    </Section>
  );
}

