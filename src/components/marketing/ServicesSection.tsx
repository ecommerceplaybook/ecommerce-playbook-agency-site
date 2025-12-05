import { Button } from "@/components/ui/Button";

interface Service {
  icon: string;
  heading: string;
  description: string;
  href?: string;
}

const services: Service[] = [
  {
    icon: "🖥️",
    heading: "Design & Strategy",
    description: "Design your website strategically to convert more customers",
    href: "/services/design-strategy",
  },
  {
    icon: "</>",
    heading: "Web Development",
    description: "Develop scalable and maintainable websites with Webflow",
    href: "/services/web-development",
  },
  {
    icon: "🔍",
    heading: "SEO, CRO & Growth",
    description: "Drive more people to your website with a strong SEO strategy",
    href: "/services/seo-cro-growth",
  },
  {
    icon: "📱",
    heading: "Business Apps",
    description: "Build company-critical business applications in Webflow",
    href: "/services/business-apps",
  },
  {
    icon: "✨",
    heading: "AI and Automation",
    description: "Enhance your business process with AI and automation",
    href: "/services/ai-automation",
  },
  {
    icon: "🔄",
    heading: "Long-Term Relationship",
    description: "Pay-as-you-go maintenance service for your Webflow project",
    href: "/services/maintenance",
  },
];

export function ServicesSection() {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Subheading */}
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Services
            </p>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">
              Access to a world leading agency that works as an{" "}
              <span className="text-slate-500">extension of your team</span>
            </h2>
            
            {/* Paragraph */}
            <p className="text-lg text-slate-600">
              Our expert team specializes in delivering top-notch Webflow solutions tailored to your needs. From design to deployment, we ensure a seamless experience.
            </p>
          </div>
          
          {/* Right Column - Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col"
              >
                {/* Icon */}
                <div className="text-3xl mb-4 w-fit" style={{ background: 'linear-gradient(90deg, hsla(160, 50%, 51%, 1) 0%, hsla(247, 60%, 21%, 1) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {service.icon}
                </div>
                
                {/* Heading */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.heading}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-slate-600 mb-4 flex-grow">
                  {service.description}
                </p>
                
                {/* Button */}
                <Button
                  href={service.href || "#"}
                  size="md"
                  className="bg-green-500 hover:bg-green-600 text-black border-none rounded-md w-fit"
                >
                  →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

