import { Prose } from "@/components/ui/Prose";

export function RichTextRenderer({ content }: { content: string }) {
  return <Prose content={content} />;
}
