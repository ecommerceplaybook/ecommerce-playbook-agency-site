"use client";

export function ScrollingShowcase() {
  // Generate placeholder images
  const placeholderImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    url: `https://picsum.photos/400/300?random=${i + 1}`,
  }));

  return (
    <div className="relative py-12 px-4">
      <div className="mx-auto max-w-7xl bg-black rounded-[10px] overflow-hidden">
        <div className="relative py-12 px-6">
          {/* Centered text overlay - hovers above middle row */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-lg text-center">
              <p className="text-xl md:text-2xl font-semibold text-gray-900">
                5 stars 100% Success Rate on Upwork Across 85 Projects
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                Shopify eCommerce Agency
              </p>
            </div>
          </div>

          {/* Three scrolling rows */}
          <div className="space-y-4 relative overflow-hidden">
            {/* Row 1 */}
            <div className="flex scroll-row-left">
              <div className="flex gap-4">
                {[...placeholderImages, ...placeholderImages].map((img, idx) => (
                  <div
                    key={`row1-${idx}`}
                    className="flex-shrink-0 w-[280px] h-[180px] rounded-lg overflow-hidden bg-gray-900"
                  >
                    <img
                      src={img.url}
                      alt={`Website showcase ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Scrolls right - Middle row with overlay */}
            <div className="flex scroll-row-right relative">
              <div className="flex gap-4">
                {[...placeholderImages, ...placeholderImages].map((img, idx) => (
                  <div
                    key={`row2-${idx}`}
                    className="flex-shrink-0 w-[280px] h-[180px] rounded-lg overflow-hidden bg-gray-900"
                  >
                    <img
                      src={img.url}
                      alt={`Website showcase ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3 - Scrolls left */}
            <div className="flex scroll-row-left">
              <div className="flex gap-4">
                {[...placeholderImages, ...placeholderImages].map((img, idx) => (
                  <div
                    key={`row3-${idx}`}
                    className="flex-shrink-0 w-[280px] h-[180px] rounded-lg overflow-hidden bg-gray-900"
                  >
                    <img
                      src={img.url}
                      alt={`Website showcase ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

