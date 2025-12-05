import type { ReactNode } from "react";
import { cn } from "@/lib/utils/formatting";

interface AccordionItem {
  id: string;
  trigger: ReactNode;
  content: ReactNode;
}

export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => (
        <details key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer text-lg font-semibold text-slate-900">
            {item.trigger}
          </summary>
          <div className="mt-3 text-base text-slate-600">{item.content}</div>
        </details>
      ))}
    </div>
  );
}
