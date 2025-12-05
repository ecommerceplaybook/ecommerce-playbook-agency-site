import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";

export default function PrivacyPage() {
  return (
    <Section>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="We use client data solely to deliver services and never sell or rent information."
      />
    </Section>
  );
}
