"use client";

import Link from "next/link";
import { useEffect } from "react";
import { mainNav, secondaryNav } from "@/config/navigation";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900 px-6 py-10">
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-white">Menu</span>
        <button onClick={onClose} aria-label="Close navigation" className="text-white shadow-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="drop-shadow-none filter-none">
            <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="mt-10 space-y-6 text-xl font-semibold">
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose} className="text-white hover:bg-transparent hover:text-white">
            {item.label}
          </Link>
        ))}
        {secondaryNav.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose} className="text-slate-400 hover:bg-transparent hover:text-slate-400">
            {item.label}
          </Link>
        ))}
        <Link href="/contact" onClick={onClose} className="text-white hover:bg-transparent hover:text-white">
          Work With Us →
        </Link>
      </div>
    </div>
  );
}
