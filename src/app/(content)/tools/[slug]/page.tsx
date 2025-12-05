import { notFound } from "next/navigation";
import { getTools, getToolBySlug } from "@/lib/supabase/queries/tools";
import { buildMetadata } from "@/lib/utils/seo";
import { ToolDetailSection } from "@/components/content/ToolDetailSection";

interface Params {
  params: { slug: string };
}

export async function generateStaticParams() {
  const tools = await getTools().catch(() => []);
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Params) {
  const tool = await getToolBySlug(params.slug).catch(() => null);
  return buildMetadata({
    title: tool?.name ?? "Tool",
    description: tool?.short_description ?? "Workflow from eCommerce Playbook",
    path: `/tools/${params.slug}`,
  });
}

export default async function ToolDetailPage({ params }: Params) {
  const tool = await getToolBySlug(params.slug).catch(() => null);
  if (!tool) return notFound();

  return <ToolDetailSection tool={tool} />;
}
