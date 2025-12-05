import type { Metadata } from "next";
import { siteMeta } from "@/config/siteMeta";

interface SeoOptions {
  title?: string | null;
  description?: string | null;
  path?: string;
}

export function buildMetadata({ title, description, path }: SeoOptions): Metadata {
  const fullTitle = title ? `${title} | ${siteMeta.name}` : siteMeta.name;
  const url = path ? new URL(path, siteMeta.url).toString() : siteMeta.url;

  return {
    title: fullTitle,
    description: description ?? siteMeta.description,
    openGraph: {
      title: fullTitle,
      description: description ?? siteMeta.description,
      url,
      siteName: siteMeta.name,
      images: [siteMeta.ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}
