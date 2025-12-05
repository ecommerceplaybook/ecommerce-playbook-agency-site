import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const components: Components = {
  h2: ({ children }) => <h2 className="mt-10 text-3xl font-semibold text-slate-900">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-8 text-2xl font-semibold text-slate-900">{children}</h3>,
  p: ({ children }) => <p className="mt-4 text-lg text-slate-600">{children}</p>,
  ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-slate-600">{children}</ul>,
  ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-lg text-slate-600">{children}</ol>,
  blockquote: ({ children }) => (
    <blockquote className="mt-4 border-l-4 border-slate-200 pl-4 text-xl italic text-slate-700">
      {children}
    </blockquote>
  ),
};

export function Prose({ content }: { content: string }) {
  if (!content) return null;
  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
}
