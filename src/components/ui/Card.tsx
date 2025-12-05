import type { ReactNode } from "react";
import { cn } from "@/lib/utils/formatting";

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-lg hover:border-[var(--color-accent)]/30", className)}>
      {children}
    </div>
  );
}
