import { Section } from "@/components/ui/Section";

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  tagline?: string;
  heading?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    value: "30%",
    label: "Short heading goes here",
  },
];

export function StatsSection({
  tagline = "Tagline",
  heading = "Short heading goes here",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image = "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  imageAlt = "Stats section image",
  stats = defaultStats,
}: StatsSectionProps) {
  return (
    <Section>
      <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          {heading}
        </h2>
        <p className="md:text-md">{description}</p>
      </div>
      <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 lg:grid-cols-[1fr_0.5fr]">
        <div>
          <img
            className="aspect-[3/2] size-full object-cover"
            src={image}
            alt={imageAlt}
          />
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 md:gap-y-12 md:p-8 lg:grid-cols-1 lg:gap-x-0 lg:p-12">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="mb-2 text-6xl font-bold leading-[1.2] md:text-9xl lg:text-10xl">
                {stat.value}
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}



