import type { ReactNode } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>;
}
