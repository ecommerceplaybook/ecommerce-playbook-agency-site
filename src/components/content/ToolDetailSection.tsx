import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import type { Tool } from "@/lib/types";
import { Prose } from "@/components/ui/Prose";

export function ToolDetailSection({ tool }: { tool: Tool }) {
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-4xl font-semibold text-slate-900">{tool.name}</h1>
          <p className="mt-2 text-lg text-slate-600">{tool.short_description}</p>
          <div className="mt-6">
            <Prose content={tool.long_description} />
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Usage</p>
          <p className="mt-3 text-base text-slate-600">
            {tool.metadata?.usage ?? "Embed this workflow into your CRO sprints or share with your team."}
          </p>
          {tool.link_url && (
            <Button href={tool.link_url} className="mt-6 w-full" target={tool.is_external ? "_blank" : undefined}>
              Launch Tool
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
