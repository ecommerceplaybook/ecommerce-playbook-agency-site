import type { ReactNode } from "react";
import "../globals.css";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  // Temporarily hiding header/footer for coming soon page
  return <div className="min-h-screen">{children}</div>;
}
