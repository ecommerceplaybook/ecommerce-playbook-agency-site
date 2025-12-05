import type { ReactNode } from "react";
import { cn } from "@/lib/utils/formatting";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600", className)}>
      {children}
    </span>
  );
}
