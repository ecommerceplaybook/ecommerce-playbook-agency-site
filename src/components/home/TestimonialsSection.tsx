import Image from "next/image";

const testimonials = [
  {
    quote: "Michael is a unicorn and an absolute dream to work with! Not only did him and his team deliver an incredible website redesign with a responsive backend, and improved front-end…",
    author: "Client",
    role: "Shopify Brand Owner",
    avatar: "/placeholder-avatar.png",
  },
  {
    quote: "Michael is an absolute professional through and through. He's extraordinarily competent in his skillset, and I grew to appreciate his adaptability when details change. I highly recommend his services.",
    author: "Client",
    role: "Furniture Brand Owner",
    avatar: "/placeholder-avatar.png",
  },
  {
    quote: "Michael is an outstanding freelancer. He is organized, shows up on time, and goes above and beyond with his work. We had a pretty serious issue with our website functionality…",
    author: "Client",
    role: "DTC Brand Owner",
    avatar: "/placeholder-avatar.png",
  },
  {
    quote: "Michael was excellent to work with on the design of a semi-custom Shopify theme. He helped us select the best premium theme based on initial meetings to discuss what our…",
    author: "Client",
    role: "Retail Medical Store",
    avatar: "/placeholder-avatar.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#030901] py-20">
      <div className="page-container">
        <div className="mx-auto max-w-7xl px-6">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.07] p-6 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.1] hover:border-white/12"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-[#72fd4e]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="h-5 w-5 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                
                {/* Quote */}
                <p className="mb-6 text-sm leading-relaxed text-white">
                  {testimonial.quote}
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#72fd4e] to-[#aafe24]" />
                  <div>
                    <p className="text-sm font-medium text-white">{testimonial.author}</p>
                    <p className="text-xs text-white/73">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Partner Logos */}
          <div className="mt-16">
            <p className="text-center text-sm text-white/73 mb-6">Trusted by 7- and 8-Figure Shopify Brands:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                "Black Tie",
                "Brand 2",
                "Brand 3",
                "Arc Grove",
                "Kidsy",
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-6 py-2 opacity-80 transition-all duration-300 hover:opacity-100"
                >
                  <span className="text-sm font-medium text-white/80">{logo}</span>
                  {index < 4 && <span className="text-white/40 mx-2">•</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

