import { buildMetadata } from "@/lib/utils/seo";
import { getPageBySlug } from "@/lib/supabase/queries/pages";
import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import BrandTrackerSection from "@/components/home/BrandTrackerSection";
import TrendingAdsSection from "@/components/home/TrendingAdsSection";
import ExtendedTestimonialsSection from "@/components/home/ExtendedTestimonialsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export async function generateMetadata() {
  const page = await getPageBySlug("home").catch(() => null);
  return buildMetadata({
    title: page?.seo_title ?? "Find the top Ecom Stores & Ads selling right now. Stronger data than any other tool.",
    description:
      page?.seo_description ??
      "Stop launching blind. Track what top brands and your competitors are doing to win. Find the top Ecom Stores & Ads selling right now.",
    path: "/",
  });
}

export default async function HomePage() {
  const page = await getPageBySlug("home").catch(() => null);

  return (
    <>
      <Hero />
      <TestimonialsSection />
      <FeaturesSection />
      <BrandTrackerSection />
      <TrendingAdsSection />
      <ExtendedTestimonialsSection />
      <FinalCtaSection />
    </>
  );
}
