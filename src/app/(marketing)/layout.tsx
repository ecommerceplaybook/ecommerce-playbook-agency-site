import type { ReactNode } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import "../globals.css";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>;
}
