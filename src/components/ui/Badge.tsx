import type { ReactNode } from "react";
import { cn } from "@/lib/utils/formatting";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const variants = {
  default: "bg-slate-100 text-slate-600",
  secondary: "bg-slate-200 text-slate-700",
  destructive: "bg-red-100 text-red-700",
  outline: "border border-slate-300 bg-transparent text-slate-600",
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide", variants[variant], className)}>
      {children}
    </span>
  );
}
