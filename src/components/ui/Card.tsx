import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils/formatting";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-lg hover:border-[var(--color-accent)]/30", className)} {...props}>
      {children}
    </div>
  );
}
