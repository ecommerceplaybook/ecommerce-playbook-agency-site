import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/formatting";

const baseTextarea =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(baseTextarea, props.className)} />;
}
