import type { ReactNode } from "react";
import { cn } from "@/lib/utils/formatting";

interface GridProps {
  columns?: 2 | 3 | 4;
  gap?: "md" | "lg";
  children: ReactNode;
  className?: string;
}

export function Grid({ columns = 3, gap = "lg", children, className }: GridProps) {
  const columnClass =
    columns === 2 ? "md:grid-cols-2" : columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  const gapClass = gap === "md" ? "gap-6" : "gap-10";

  return <div className={cn("grid grid-cols-1", columnClass, gapClass, className)}>{children}</div>;
}
