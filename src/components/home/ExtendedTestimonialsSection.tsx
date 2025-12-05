import Link from "next/link";

const testimonials = [
  {
    quote: "Michael is a unicorn and an absolute dream to work with! Not only did him and his team deliver an incredible website redesign with a responsive backend, and improved front-end…",
    author: "Client",
    role: "Shopify Brand Owner",
  },
  {
    quote: "Michael is an absolute professional through and through. He's extraordinarily competent in his skillset, and I grew to appreciate his adaptability when details change.",
    author: "Client",
    role: "Furniture Brand Owner",
  },
  {
    quote: "Michael is an outstanding freelancer. He is organized, shows up on time, and goes above and beyond with his work. We had a pretty serious issue with our website functionality…",
    author: "Client",
    role: "DTC Brand Owner",
  },
  {
    quote: "Michael was excellent to work with on the design of a semi-custom Shopify theme. He helped us select the best premium theme based on initial meetings to discuss what our…",
    author: "Client",
    role: "Retail Medical Store",
  },
  {
    quote: "Michael was great to work with from start to finish. He was professional, responsive, and brought a lot of valuable insight to the table. He helped build out a clean…",
    author: "Client",
    role: "Painting Company",
  },
  {
    quote: "Michael helped us with creating a beautiful landing page for our supplement company that we are able to use for Facebook Ads and affiliates. His work is beautiful, professional, and…",
    author: "Client",
    role: "Supplement Brand",
  },
];

export default function ExtendedTestimonialsSection() {
  return (
    <section className="relative bg-white py-20">
      <div className="page-container">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <h2 className="mb-8 text-center text-4xl font-normal leading-tight tracking-tight text-[#030901] md:text-5xl lg:text-6xl">
            What Our Clients Say
          </h2>

          {/* CTA Button */}
          <div className="mb-16 flex justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex h-[52px] items-center justify-center rounded-2xl px-8 text-base font-medium text-[#111311] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg"
              style={{
                background: "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(114, 253, 78) 0%, rgb(170, 254, 36) 100%)",
                boxShadow: "0px 8px 35px 0px rgba(170, 254, 36, 0.15), 0px 4px 19.4px 0px rgba(170, 254, 36, 0.15)",
              }}
            >
              <span className="relative z-10">Let's Connect</span>
            </Link>
          </div>

          {/* Testimonials Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-[#72fd4e]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <p className="mb-6 text-base leading-relaxed text-[#030901]">{testimonial.quote}</p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-[#72fd4e] to-[#aafe24]" />
                    <div>
                      <p className="text-sm font-medium text-[#030901]">{testimonial.author}</p>
                      <p className="text-xs text-[#030901]/73">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

