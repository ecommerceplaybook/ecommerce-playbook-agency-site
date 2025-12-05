import Link from "next/link";
import { cn } from "@/lib/utils/formatting";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "utility";
  size?: "md" | "lg";
  children: ReactNode;
  target?: string;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--color-brand-accent]";

const variants: Record<string, string> = {
  primary:
    "bg-[hsl(var(--color-brand))] text-white hover:bg-[#123852] hover:-translate-y-[1px] hover:shadow-md active:translate-y-[1px]",
  secondary:
    "border border-[hsl(var(--color-brand))] bg-transparent text-white hover:bg-[hsl(var(--color-brand-muted))] hover:-translate-y-[1px] hover:shadow-md active:translate-y-[1px]",
  ghost: "text-white hover:bg-[hsl(var(--color-brand-muted))]",
  utility:
    "bg-[#F5F6FA] text-white hover:bg-[hsl(var(--color-brand-muted))] border border-transparent hover:-translate-y-[1px] hover:shadow-md active:translate-y-[1px]",
};

const sizes: Record<string, string> = {
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
};

export function Button({ href, variant = "primary", size = "md", className, children, target, ...props }: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
