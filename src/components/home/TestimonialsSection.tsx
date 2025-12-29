"use client";

import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    text: "Wow, this is absolutely incredible – huge props to the @relume_io team for bringing these amazing AI superpowers to more Webflow visual developers!",
    author: "@callmevlad",
    role: "Co-founder & CEO @webflow",
    avatar: "http://localhost:3845/assets/90b0caeca490c87a82b5e4b027289339fe09455a.png",
  },
  {
    text: "Finally an Ai tool that I will ACTUALLY include as part of my workflow. I love how seamless it is from start to finish.",
    author: "@SoyBalta",
    role: "Designer & Webflow developer",
    avatar: "http://localhost:3845/assets/cce003bf613c80be3ce0fd528e98260cd072ef65.png",
  },
  {
    text: "This is pure magic. ✨ → Sitemaps in seconds → Wireframes in minutes → Full copy written with AI → Layered wireframes to Figma @relume_io saving the day for web and product designers!",
    author: "@DannPetty",
    role: "Designer & Content Creator",
    avatar: "http://localhost:3845/assets/fbb691e187dc53f7ae02c9401d72eb45dc387ad2.png",
  },
  {
    text: "Bro what?! Are you telling I was able to produce all of this with just one prompt? As soon as that happened, I signed up for the highest tier plan RIGHT AWAY. If you're a web designer, it's honestly a no-brainer that you have to sign up for @relume_io . They shut it down with this one 🔥",
    author: "@rrabrot",
    role: "Designer & Webflow developer",
    avatar: "http://localhost:3845/assets/91f50497229c425c9f0f85930a913b76c5c63410.png",
  },
  {
    text: "Yooooooooo, this is 🔥 @relume_io has been one of my favorite teams I've seen evolve in the @webflow space. They're carving out a tremendous groove that designers and developers can vibe in when being able to generate web concepts.",
    author: "@rileyj_s",
    role: "Designer & Webflow developer",
    avatar: "http://localhost:3845/assets/fbb691e187dc53f7ae02c9401d72eb45dc387ad2.png",
  },
  {
    text: "Epic and Amazing... The @relume_io products that were already amazing, gain another great addition with the site builder. This a really time saver",
    author: "",
    role: "",
    avatar: "",
  },
  {
    text: "This is insane. The amount of time and effort that goes into what the AI just generated in seconds 🤯 Relume are revitalising the fun in web design.",
    author: "@cjpux_",
    role: "Designer",
    avatar: "http://localhost:3845/assets/ffd61d89f447506d645c196c16e70e4d356278dc.png",
  },
  {
    text: "This is the most exciting AI website product I've seen — great work Relume team!!! Looks especially powerful for serious web professionals looking to build a site for scale. Having tried an earlier version the \"building of site IA in real time\" was 🤩",
    author: "@brryant",
    role: "Co-founder @webflow",
    avatar: "http://localhost:3845/assets/d852d4301f2485d19821e8e882869420fae7abbb.png",
  },
  {
    text: "The new @relume_io AI Sitemap and Wireframe tools are game changers! This can absolutely speed up our development and will change how we build and design @webflow sites going forward. Huge shoutout to @AdamMura and the entire Relume team! 🎉",
    author: "@KarimArdalan",
    role: "Designer & Webflow developer",
    avatar: "http://localhost:3845/assets/117c01689ed5ec9dff86e4c177a68888849ab4ec.png",
  },
  {
    text: "Very excited for @relume_io 's new AI-powered generative website builder. I love the messaging and positioning: 'to empower you, not replace you'. Strategic language to get even skeptical designers, who believe AI is the end of their jobs, to jump in.",
    author: "@gabelopez",
    role: "Designer",
    avatar: "http://localhost:3845/assets/117c01689ed5ec9dff86e4c177a68888849ab4ec.png",
  },
  {
    text: "Been sitting here with my jaw on the floor - periodically saying \"oh my god, no fucking way\" after checking out @relume_io new site builder. This is nutz my",
    author: "",
    role: "",
    avatar: "",
  },
  {
    text: "@relume_io bringing the heat 🔥 Big big fan. Been using it on client projects to build sitemaps",
    author: "",
    role: "",
    avatar: "",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#f1f0ee] py-20 lg:py-32">
      <div className="page-container mx-auto max-w-7xl px-6">
        {/* Brand Logos */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <div className="flex items-center justify-center h-6 opacity-60 hover:opacity-100 transition-opacity">
              <Image
                src="/black-tie.png"
                alt="Black Tie"
                width={120}
                height={32}
                className="h-6 w-auto object-contain grayscale"
              />
            </div>
            <div className="flex items-center justify-center h-6 opacity-60 hover:opacity-100 transition-opacity">
              <Image
                src="/brand-2.svg"
                alt="Brand"
                width={120}
                height={32}
                className="h-6 w-auto object-contain"
                style={{ filter: 'invert(1) grayscale(100%) brightness(0.3)' }}
              />
            </div>
            <div className="flex items-center justify-center h-6 opacity-60 hover:opacity-100 transition-opacity">
              <Image
                src="/ooo.png"
                alt="OOO"
                width={120}
                height={32}
                className="h-6 w-auto object-contain grayscale"
              />
            </div>
            <div className="flex items-center justify-center h-6 opacity-60 hover:opacity-100 transition-opacity">
              <Image
                src="/arc-grove.png"
                alt="Arc Grove"
                width={120}
                height={32}
                className="h-6 w-auto object-contain grayscale"
              />
            </div>
            <div className="flex items-center justify-center h-6 opacity-60 hover:opacity-100 transition-opacity">
              <Image
                src="/Kidsy-Logo-Desktop.avif"
                alt="Kidsy"
                width={120}
                height={32}
                className="h-6 w-auto object-contain grayscale"
              />
            </div>
          </div>
          <p className="text-sm text-[#686868]">
            Used by leading brands and companies from across the globe
          </p>
        </div>

        {/* Testimonials Grid - Masonry Style with Varying Heights */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 auto-rows-max">
          {testimonials.map((testimonial, index) => {
            // Create a pattern of different heights for visual interest
            // Pattern: tall, medium, short, tall, medium, short, etc.
            const heightClasses = [
              "lg:min-h-[280px]", // Card 0 - tall
              "lg:min-h-[220px]", // Card 1 - medium
              "lg:min-h-[240px]", // Card 2 - medium-tall
              "lg:min-h-[320px]", // Card 3 - very tall
              "lg:min-h-[260px]", // Card 4 - tall
              "lg:min-h-[200px]", // Card 5 - short
              "lg:min-h-[230px]", // Card 6 - medium
              "lg:min-h-[290px]", // Card 7 - tall
              "lg:min-h-[270px]", // Card 8 - tall
              "lg:min-h-[250px]", // Card 9 - medium-tall
              "lg:min-h-[210px]", // Card 10 - short
              "lg:min-h-[180px]", // Card 11 - very short
            ];
            
            const heightClass = heightClasses[index] || "lg:min-h-[240px]";
            
            return (
              <div
                key={index}
                className={`rounded-2xl bg-white p-5 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08),0px_1px_2px_0px_rgba(0,0,0,0.04)] flex flex-col ${heightClass}`}
              >
                <p className="mb-4 text-[17px] font-medium leading-[27px] text-[#161616] flex-grow">
                  {testimonial.text}
                </p>
                
                {testimonial.author && (
                  <div className="flex items-start justify-between gap-4 mt-auto">
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-medium leading-6 text-[#161616]">
                        {testimonial.author}
                      </p>
                      {testimonial.role && (
                        <p className="text-[13px] leading-[21px] text-[rgba(22,22,22,0.65)]">
                          {testimonial.role}
                        </p>
                      )}
                    </div>
                    
                    {testimonial.avatar && (
                      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Main Heading */}
        <div className="mt-16 mb-8 text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-medium leading-tight tracking-[-0.02em] text-[#161616] md:text-4xl lg:text-5xl">
            Helping Lumers streamline their workflow and deliver faster
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#"
            className="flex h-10 items-center justify-center gap-2 rounded-lg border border-black/15 px-4 text-[15px] font-medium text-[#161616] transition-colors hover:bg-white/50"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
            Join our community
          </Link>
          
          <Link
            href="#"
            className="flex h-10 items-center justify-center rounded-lg border border-black/15 px-4 text-[15px] font-medium text-[#161616] transition-colors hover:bg-white/50"
          >
            Read more reviews
          </Link>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#f1f0ee]" />
    </section>
  );
}
