"use client";

import { useRef, useState, useEffect } from "react";

const reviews = [
  {
    quote: "Michael is a unicorn and an absolute dream to work with! Not only did him and his team deliver an incredible website redesign with a responsive backend, and improved front-end, they did it while hitting all deliverables in record time.",
    author: "Client",
    role: "Shopify Brand Owner",
  },
  {
    quote: "Michael is an absolute professional through and through. He's extraordinarily competent in his skillset, and I grew to appreciate his adaptability when details change.",
    author: "Client",
    role: "Furniture Brand Owner",
  },
  {
    quote: "Michael is an outstanding freelancer. He is organized, shows up on time, and goes above and beyond with his work. We had a pretty serious issue with our website functionality, data tracking, and CRO. Michael jumped on board and quickly figured out our issues.",
    author: "Client",
    role: "DTC Brand Owner",
  },
  {
    quote: "Michael was excellent to work with on the design of a semi-custom Shopify theme. He helped us select the best premium theme based on initial meetings to discuss what our goals and aspirations were for the project.",
    author: "Client",
    role: "Retail Medical Store",
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => {
        container.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#030901] py-20">
      <div className="page-container">
        <div className="mx-auto max-w-7xl px-6">
          {/* Swipable Reviews Section */}
          <div className="relative">
            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[30%]"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.07] p-6 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.1] hover:border-white/12">
                    {/* Stars */}
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-[#72fd4e]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <div className="mb-6">
                      <p className="text-sm leading-relaxed text-white">
                        {review.quote}
                      </p>
                    </div>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#72fd4e] to-[#aafe24]" />
                      <div>
                        <p className="text-sm font-medium text-white">{review.author}</p>
                        <p className="text-xs text-white/73">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows - Desktop Only */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all z-10"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all z-10"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
