import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils/formatting";

const baseSelect =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 focus:border-slate-900 focus:outline-none";

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(baseSelect, props.className)} />;
}
