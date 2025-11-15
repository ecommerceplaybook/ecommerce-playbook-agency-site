8. Modular Component Strategy
8.1 Section Wrapper
Create a generic Section component:

// src/components/ui/Section.tsx
import { ReactNode } from "react";
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
      ? "bg-slate-50"
      : background === "contrast"
      ? "bg-slate-900 text-white"
      : "";
  return (
    <section id={id} className={cn("py-16", bg, className)}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}

Every section component (Hero, CTA, etc.) should compose Section to maintain consistent spacing.

8.2 Section-based Content

Design components so they accept data props and not fetch inside the component (fetch in page, pass down). This keeps components reusable and easy for Cursor to test and stub.

⸻
