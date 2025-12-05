import { getTools } from "@/lib/supabase/queries/tools";
import { buildMetadata } from "@/lib/utils/seo";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { ToolList } from "@/components/content/ToolList";

export const metadata = buildMetadata({
  title: "Tools",
  description: "Workflows and calculators for CRO sprints.",
  path: "/tools",
});

export default async function ToolsPage() {
  const tools = await getTools().catch(() => []);

  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Tools"
          title="Ops-ready workflows for CRO, UX, and merchandising teams"
          description="Use these free tools to prioritize tests, score PDPs, and align lifecycle with onsite."
        />
      </Section>
      <ToolList tools={tools} />
    </>
  );
}
