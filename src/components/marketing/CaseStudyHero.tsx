import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface CaseStudyHeroProps {
  tagline?: string;
  heading: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundImage?: string;
}

export function CaseStudyHero({
  tagline,
  heading,
  description,
  primaryButtonText = "Get Started",
  primaryButtonHref = "/contact",
  secondaryButtonText,
  secondaryButtonHref,
  backgroundImage = "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
}: CaseStudyHeroProps) {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg mx-auto text-center">
        {tagline && (
          <p className="mb-3 font-semibold text-white md:mb-4">{tagline}</p>
        )}
        <h1 className="mb-5 text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-10xl">
          {heading}
        </h1>
        {description && (
          <p className="text-white md:text-md">{description}</p>
        )}
        {(primaryButtonText || secondaryButtonText) && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            {primaryButtonText && primaryButtonHref && (
              <Button
                href={primaryButtonHref}
                size="md"
                className="bg-white text-black border-white hover:bg-gray-100"
              >
                {primaryButtonText}
              </Button>
            )}
            {secondaryButtonText && secondaryButtonHref && (
              <Button
                href={secondaryButtonHref}
                variant="secondary"
                size="md"
                className="border-white text-white hover:bg-white/10"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        )}
      </div>
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <>
            <img
              src={backgroundImage}
              className="size-full object-cover"
              alt="Hero background"
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        )}
      </div>
    </section>
  );
}



