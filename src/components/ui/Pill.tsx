import type { ReactNode } from "react";
import { cn } from "@/lib/utils/formatting";

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700", className)}>
      {children}
    </span>
  );
}
