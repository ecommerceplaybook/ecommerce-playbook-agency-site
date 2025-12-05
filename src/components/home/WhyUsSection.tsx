export default function WhyUsSection() {
  return (
    <section className="py-16 px-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Heading + Intro */}
          <div>
            <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] [animation-delay:150ms]">
              A Boutique Team for Brands That Demand Clarity
            </h2>

            <div className="space-y-4">
              <p className="text-gray-600">
                We're not an agency trying to scale. We're a small, senior team
                that works with a maximum of five clients at a time so we can
                go deep instead of wide.
              </p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-gray-900 text-lg font-semibold mb-4">What Makes Us Different</h3>
            </div>
          </div>

          {/* Right Column: Bullet List */}
          <div className="flex items-start">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                <span>No juniors.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                <span>No bloated account teams.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                <span>Founder-led strategy on every account.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                <span>
                  Senior CRO, designer, developer, and client success on each project.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                <span>
                  Weekly experiments and monthly insights.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                <span>
                  Transparent reporting tied to revenue and KPIs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                <span>
                  A reliable operating system for conversion, not random tactics.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing Line */}
        <p className="text-gray-600 mt-8 font-medium">
          Ideal Fit: Brands doing $100k+/month that want a partner who treats their metrics like their own.
        </p>
      </div>
    </section>
  );
}

