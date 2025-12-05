import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/supabase/queries/blog";
import { buildMetadata } from "@/lib/utils/seo";
import { BlogPostBody } from "@/components/content/BlogPostBody";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts().catch(() => []);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug).catch(() => null);
  return buildMetadata({
    title: post?.title ?? "Blog Post",
    description: post?.excerpt ?? "CRO insights",
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug).catch(() => null);
  if (!post) return notFound();

  return <BlogPostBody post={post} />;
}
