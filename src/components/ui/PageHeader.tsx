import type { ReactNode } from "react";
import { cn } from "@/lib/utils/formatting";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string | ReactNode;
  align?: "left" | "center";
}

export function PageHeader({ eyebrow, title, description, align = "left" }: PageHeaderProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={cn("flex flex-col gap-4", alignment)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--color-brand-accent)" }}>
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl font-semibold md:text-5xl" style={{ color: "var(--color-brand)" }}>
        {title}
      </h1>
      {description && (
        <p className="max-w-2xl text-lg" style={{ color: "hsl(var(--color-ink-light))" }}>
          {description}
        </p>
      )}
    </div>
  );
}
