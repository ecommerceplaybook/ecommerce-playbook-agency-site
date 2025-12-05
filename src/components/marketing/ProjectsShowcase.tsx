"use client";

import { useState } from "react";

interface Feature {
  icon: string;
  heading: string;
  text: string;
}

interface ProjectsShowcaseProps {
  subheading?: string;
  heading: string;
  logoUrl?: string;
  paragraph: string;
  features: Feature[];
  imageUrl?: string;
  imageUrls?: string[];
  imageAlt: string;
  imagePosition?: "left" | "right";
  index?: number;
}

export function ProjectsShowcase({
  subheading = "Projects",
  heading,
  logoUrl,
  paragraph,
  features,
  imageUrl,
  imageUrls,
  imageAlt,
  imagePosition = "right",
  index = 0,
}: ProjectsShowcaseProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = imageUrls || (imageUrl ? [imageUrl] : []);

  const contentColumn = (
    <div className="space-y-8">
      {/* Subheading */}
      {subheading && (
        <div className="inline-block rounded-full p-[2px]" style={{ background: 'linear-gradient(90deg, hsla(160, 50%, 51%, 1) 0%, hsla(247, 60%, 21%, 1) 100%)' }}>
          <p className="inline-block text-xs font-semibold text-black rounded-full px-4 py-1.5 bg-white">
            {subheading}
          </p>
        </div>
      )}
      
      {/* Heading or Logo */}
      {logoUrl ? (
        <div className="mb-6">
          <img
            src={logoUrl}
            alt={heading}
            className="h-8 md:h-10 w-auto"
          />
        </div>
      ) : (
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">
          {heading}
        </h2>
      )}
      
      {/* Paragraph */}
      <p className="text-lg text-slate-600">
        {paragraph}
      </p>
      
      {/* Two Feature Columns */}
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, idx) => (
          <div key={idx}>
            <div className="text-4xl mb-4 w-fit" style={{ background: 'linear-gradient(90deg, hsla(160, 50%, 51%, 1) 0%, hsla(247, 60%, 21%, 1) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              {feature.heading}
            </h3>
            <p className="text-sm text-slate-600">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const imageColumn = (
    <div className="relative">
      <div className="rounded-lg overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${imageAlt} ${currentImageIndex + 1}`}
          className="w-full h-auto"
        />
      </div>
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentImageIndex
                  ? "bg-slate-900 w-6"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className={`bg-gray-100 ${index === 0 ? "pt-16 pb-8" : "-mt-32 pt-40 pb-8"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-white rounded-lg p-8 md:p-12 relative z-10">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {imagePosition === "left" ? (
              <>
                {imageColumn}
                {contentColumn}
              </>
            ) : (
              <>
                {contentColumn}
                {imageColumn}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

