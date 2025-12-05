import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface Stat {
  value: string;
  description: string;
}

interface ImageContentSectionProps {
  tagline?: string;
  heading?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  stats?: Stat[];
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  imagePosition?: "left" | "right";
}

const defaultStats: Stat[] = [
  {
    value: "50%",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export function ImageContentSection({
  tagline = "Tagline",
  heading = "Medium length section heading goes here",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image = "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  imageAlt = "Content section image",
  stats = defaultStats,
  primaryButtonText = "Button",
  primaryButtonHref = "#",
  secondaryButtonText = "Button",
  secondaryButtonHref = "#",
  imagePosition = "left",
}: ImageContentSectionProps) {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
        <div className={imagePosition === "left" ? "order-1" : "order-2 md:order-1"}>
          <img
            src={image}
            className="w-full object-cover"
            alt={imageAlt}
          />
        </div>
        <div className={imagePosition === "left" ? "order-2" : "order-1 md:order-2"}>
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="mb-6 md:mb-8 md:text-md">{description}</p>
          <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  {stat.value}
                </h3>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {primaryButtonText && primaryButtonHref && (
              <Button href={primaryButtonHref} size="md">
                {primaryButtonText}
              </Button>
            )}
            {secondaryButtonText && secondaryButtonHref && (
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center whitespace-nowrap border-0 text-text-primary gap-2 p-0 hover:underline"
              >
                {secondaryButtonText}
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 15 15"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}



