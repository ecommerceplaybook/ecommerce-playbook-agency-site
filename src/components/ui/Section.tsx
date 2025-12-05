import type { ReactNode } from "react";
import { cn } from "@/lib/utils/formatting";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: "default" | "muted" | "contrast";
}

export function Section({ id, className, children, background = "default" }: SectionProps) {
  const bg =
    background === "muted"
      ? "bg-[hsl(var(--color-brand-muted))]"
      : background === "contrast"
        ? "bg-[hsl(var(--color-brand))] text-white"
        : "bg-white";

  return (
    <section id={id} className={cn("py-16", bg, className)}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}
