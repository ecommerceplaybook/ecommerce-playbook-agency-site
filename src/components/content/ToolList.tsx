import Link from "next/link";
import type { Tool } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function ToolList({ tools }: { tools: Tool[] }) {
  if (!tools.length) return null;

  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.id}>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-slate-900">{tool.name}</h3>
              {tool.category && <Badge>{tool.category}</Badge>}
            </div>
            <p className="mt-3 text-sm text-slate-600">{tool.short_description}</p>
            <Link href={`/tools/${tool.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-900 cta-link">
              View tool →
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
