"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030901]">
      {/* Gradient Overlay - Green to Black */}
      <div className="absolute inset-0 z-0">
        {/* Main radial gradient from center */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 10%, rgba(114, 253, 78, 0.4) 0%, rgba(114, 253, 78, 0.2) 30%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 1) 100%)',
          }}
        />
        {/* Secondary gradient for depth */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 30% 25%, rgba(170, 254, 36, 0.3) 0%, transparent 50%)',
          }}
        />
        {/* Additional glow effect */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 70% 5%, rgba(114, 253, 78, 0.25) 0%, transparent 60%)',
          }}
        />
        {/* Darker overlay around CTA area */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: 'radial-gradient(ellipse at 50% 45%, rgba(3, 9, 1, 0.8) 0%, rgba(3, 9, 1, 0.6) 40%, transparent 70%)',
          }}
        />
      </div>
      
      {/* Hero Content */}
      <div className="page-container relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Eyebrow Text */}
          <div className="mb-6 flex flex-col items-center justify-center gap-2 text-center">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-3.5 w-3.5 text-[#72fd4e]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-white/73 md:text-base">
              100% Job Success • $200K+ Total Earnings • 86 Completed Jobs • Trusted by 5 Shopify Brands
            </p>
          </div>
          
          {/* Main Heading */}
          <div className="mb-8 text-center">
            <h1 className="mx-auto mb-6 max-w-4xl text-3xl font-normal leading-none tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
              Get More{" "}
              <span className="bg-gradient-to-r from-[#72fd4e] to-[#aafe24] bg-clip-text text-transparent">
                Shopify Orders
              </span>{" "}
              Without Increasing{" "}
              <span className="bg-gradient-to-r from-[#72fd4e] to-[#aafe24] bg-clip-text text-transparent">
                Ad Spend
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/73 md:text-xl">
              We help you build optimized customer journeys that reduce confusion and make your offer, promise, and unique value proposition crystal clear—so your customers know exactly why they should buy from you.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-16">
              <Link
                href="/services"
                className="group relative inline-flex w-full sm:w-auto h-[52px] items-center justify-center rounded-2xl px-8 text-base font-medium text-[#111311] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg"
                style={{
                  background: "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(114, 253, 78) 0%, rgb(170, 254, 36) 100%)",
                  boxShadow: "0px 8px 35px 0px rgba(170, 254, 36, 0.15), 0px 4px 19.4px 0px rgba(170, 254, 36, 0.15)",
                }}
              >
                <span className="relative z-10">View All Services</span>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto h-[44px] items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white px-6 text-base font-medium text-[#111311] transition-all duration-200 hover:bg-white/90 hover:-translate-y-[1px] hover:shadow-md"
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - Light Background */}
      <div className="relative bg-[#f1f0ee] py-20 lg:py-32">
        <div className="page-container mx-auto max-w-7xl px-6">
          {/* Stats Text */}
          <div className="mb-12 flex flex-col items-center justify-center">
            <p className="text-sm text-[#686868] text-center">
              100% Job Success • $200K+ Total Earnings • 86 Completed Jobs • Trusted by 5 Shopify Brands
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 auto-rows-max">
            {[
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
            ].map((testimonial, index) => {
              const heightClasses = [
                "lg:min-h-[280px]",
                "lg:min-h-[220px]",
                "lg:min-h-[240px]",
                "lg:min-h-[320px]",
                "lg:min-h-[260px]",
                "lg:min-h-[200px]",
                "lg:min-h-[230px]",
                "lg:min-h-[290px]",
                "lg:min-h-[270px]",
                "lg:min-h-[250px]",
                "lg:min-h-[210px]",
                "lg:min-h-[180px]",
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
        </div>
      </div>
      
      {/* Gradient Dividers */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#72fd4e] to-transparent opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#72fd4e] to-transparent opacity-20" />
    </section>
  );
}
