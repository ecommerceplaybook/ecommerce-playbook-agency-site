import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteMeta } from "@/config/siteMeta";

const prodigySans = localFont({
  src: [
    {
      path: "../fonts/ProdigySans-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/ProdigySans-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/ProdigySans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/ProdigySans-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/ProdigySans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/ProdigySans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/ProdigySans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ProdigySans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/ProdigySans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ProdigySans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/ProdigySans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ProdigySans-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/ProdigySans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ProdigySans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/ProdigySans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/ProdigySans-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/ProdigySans-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/ProdigySans-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-prodigy-sans",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: siteMeta.name,
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  openGraph: {
    title: siteMeta.name,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.name,
    images: [siteMeta.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={prodigySans.className}>
        {children}
      </body>
    </html>
  );
}
