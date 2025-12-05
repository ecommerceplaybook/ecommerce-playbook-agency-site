"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { mainNav, secondaryNav } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className={`mx-auto max-w-7xl rounded-[10px] bg-black transition-all duration-300 ease-out ${scrolled ? "backdrop-blur-md border-b border-[var(--color-border)]" : ""}`}>
        <div className="grid grid-cols-3 items-center px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-white">
            {"{Finsweet"}
          </Link>
          <nav className="hidden items-center justify-center gap-8 text-sm font-medium text-white md:flex">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gray-300 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden justify-end md:flex">
            <Button 
              href="/contact" 
              size="md"
              className="bg-green-500 hover:bg-green-600 text-black border-none rounded-md"
            >
              Contact Sales →
            </Button>
          </div>
          <button className="col-start-3 justify-self-end md:hidden text-white" onClick={() => setOpen(true)} aria-label="Open navigation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
