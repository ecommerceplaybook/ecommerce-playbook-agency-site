import { getBlogPosts } from "@/lib/supabase/queries/blog";
import { buildMetadata } from "@/lib/utils/seo";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { BlogList } from "@/components/content/BlogList";

export const revalidate = 300;

export const metadata = buildMetadata({
  title: "Blog",
  description: "Insights on CRO, experimentation, and Shopify growth.",
  path: "/blog",
});

export default async function BlogIndexPage() {
  const posts = await getBlogPosts().catch(() => []);

  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Blog"
          title="Playbooks for teams who want compounding conversion wins"
          description="Strategy notes, teardown, and experimentation frameworks we use across Shopify brands."
        />
      </Section>
      <BlogList posts={posts} layout="list" title="Latest" />
    </>
  );
}
