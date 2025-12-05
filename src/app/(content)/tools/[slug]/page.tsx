import { notFound } from "next/navigation";
import { getTools, getToolBySlug } from "@/lib/supabase/queries/tools";
import { buildMetadata } from "@/lib/utils/seo";
import { ToolDetailSection } from "@/components/content/ToolDetailSection";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tools = await getTools().catch(() => []);
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug).catch(() => null);
  return buildMetadata({
    title: tool?.name ?? "Tool",
    description: tool?.short_description ?? "Workflow from eCommerce Playbook",
    path: `/tools/${slug}`,
  });
}

export default async function ToolDetailPage({ params }: Params) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug).catch(() => null);
  if (!tool) return notFound();

  return <ToolDetailSection tool={tool} />;
}
