import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar?: string;
}

interface TestimonialsGridProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position",
    company: "Company name",
  },
];

export function TestimonialsGrid({ testimonials = defaultTestimonials }: TestimonialsGridProps) {
  return (
    <Section>
      <div className="mx-auto max-w-lg text-center mb-12 md:mb-18 lg:mb-20">
        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Customer testimonials
        </h2>
        <p className="md:text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="mr-1 size-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z" />
                  </svg>
                ))}
              </div>
              <blockquote className="md:text-md">
                &quot;{testimonial.quote}&quot;
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              {testimonial.avatar ? (
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                />
              ) : (
                <div className="mb-4 size-12 min-h-12 min-w-12 rounded-full bg-slate-200 md:mb-0 md:mr-4" />
              )}
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p>{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}



