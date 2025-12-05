import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils/formatting";

interface BlogListProps {
  posts: BlogPost[];
  layout?: "grid" | "list";
  title?: string;
}

export function BlogList({ posts, layout = "grid", title = "Insights" }: BlogListProps) {
  if (!posts.length) return null;

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
          <Link href="/blog" className="text-sm text-slate-600">
            View all →
          </Link>
        </div>
        <div className={layout === "grid" ? "grid gap-6 md:grid-cols-3" : "space-y-6"}>
          {posts.map((post) => (
            <Card key={post.id}>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {formatDate(post.published_at)}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="mt-2 text-sm text-slate-500">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-900">
                Read post →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
