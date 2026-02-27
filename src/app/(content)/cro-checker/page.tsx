import { buildMetadata } from "@/lib/utils/seo";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScanForm } from "@/components/cro-checker/ScanForm";

export const metadata = buildMetadata({
  title: "CRO & Performance Checker",
  description: "Get a free automated audit of your website's conversion rate optimization, performance, and technical foundations.",
  path: "/cro-checker",
});

export default function CROCheckerPage() {
  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Free Tool"
          title="CRO & Performance Checker"
          description="Enter your website URL to receive an automated audit of your conversion rate optimization, performance, accessibility, and technical foundations. No login required."
          align="center"
        />
        <div className="mt-8">
          <ScanForm />
        </div>
      </Section>

      <Section background="muted">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-xl font-semibold">What We Check</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Messaging & value proposition</li>
              <li>• Call-to-action optimization</li>
              <li>• Trust & credibility signals</li>
              <li>• Content structure</li>
              <li>• Performance metrics</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">How It Works</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>1. Enter your website URL</li>
              <li>2. We analyze your page</li>
              <li>3. Get actionable recommendations</li>
              <li>4. Share your report</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">Free & Private</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>✓ No login required</li>
              <li>✓ No credit card needed</li>
              <li>✓ Results are shareable</li>
              <li>✓ No data stored permanently</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
