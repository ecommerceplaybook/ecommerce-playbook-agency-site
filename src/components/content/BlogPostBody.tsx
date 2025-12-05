import type { BlogPost } from "@/lib/types";
import { Prose } from "@/components/ui/Prose";
import { Section } from "@/components/ui/Section";
import { formatDate } from "@/lib/utils/formatting";

export function BlogPostBody({ post }: { post: BlogPost }) {
  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{formatDate(post.published_at)}</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">{post.title}</h1>
        <p className="mt-2 text-lg text-slate-600">{post.excerpt}</p>
        <div className="mt-8">
          <Prose content={post.body} />
        </div>
      </article>
    </Section>
  );
}
