"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  image?: string;
}

interface CaseStudyTimelineProps {
  items?: TimelineItem[];
}

const defaultItems: TimelineItem[] = [
  {
    date: "Date",
    title: "Timeline Item",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    date: "Date",
    title: "Timeline Item",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    date: "Date",
    title: "Timeline Item",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
];

export function CaseStudyTimeline({ items = defaultItems }: CaseStudyTimelineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate how many items to show at once based on screen size
  const itemsPerView = 3; // Show 3 items on desktop
  
  const maxIndex = Math.max(0, items.length - itemsPerView);
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const goPrevious = () => {
    if (canGoPrevious) {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const goNext = () => {
    if (canGoNext) {
      setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
    }
  };

  return (
    <Section className="overflow-hidden">
      <div className="mb-12 md:mb-18 lg:mb-20">
        <div className="mx-auto w-full max-w-lg text-center">
          <p className="mb-3 font-semibold md:mb-4">Tagline</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Medium length section heading goes here
          </h2>
          <p className="md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
      </div>
      <div className="relative h-full overflow-hidden" role="region" aria-roledescription="carousel">
        <div className="absolute left-0 z-20 h-full w-8 bg-gradient-to-r from-white to-transparent lg:w-16" />
        <div className="absolute right-0 z-20 h-full w-8 bg-gradient-to-l from-white to-transparent lg:w-16" />
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                role="group"
                aria-roledescription="slide"
                className="min-w-0 shrink-0 grow-0 basis-full pl-0 sm:basis-1/2 md:basis-1/3"
              >
                <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                  <div className="w-3/5 overflow-hidden">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={`${item.title} ${index + 1}`}
                        className="w-full"
                      />
                    )}
                  </div>
                  <div className="mb-4 mt-8 flex w-full items-center">
                    <div className="h-[3px] w-full bg-black" />
                    <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                    <div className="h-[3px] w-full bg-black" />
                  </div>
                  <div className="px-6 text-center">
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                      {item.date}
                    </h3>
                    <p>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary absolute rounded-full bg-white left-0 top-1/2 -translate-y-1/2 z-30 size-12"
          disabled={!canGoPrevious}
          onClick={goPrevious}
          aria-label="Previous slide"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="size-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" />
          </svg>
          <span className="sr-only">Previous slide</span>
        </button>
        <button
          className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary absolute rounded-full bg-white right-0 top-1/2 -translate-y-1/2 z-30 size-12"
          disabled={!canGoNext}
          onClick={goNext}
          aria-label="Next slide"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="size-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
          </svg>
          <span className="sr-only">Next slide</span>
        </button>
      </div>
    </Section>
  );
}

