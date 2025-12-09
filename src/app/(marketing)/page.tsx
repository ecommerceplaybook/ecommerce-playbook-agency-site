"use client";

import { buildMetadata } from "@/lib/utils/seo";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030901] flex items-center justify-center">
      {/* Gradient Overlay - Green to Black */}
      <div className="absolute inset-0 z-0">
        {/* Main radial gradient from center */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(114, 253, 78, 0.4) 0%, rgba(114, 253, 78, 0.2) 30%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 1) 100%)',
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
            background: 'radial-gradient(ellipse at 70% 75%, rgba(114, 253, 78, 0.25) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
            Coming{" "}
            <span className="bg-gradient-to-r from-[#72fd4e] to-[#aafe24] bg-clip-text text-transparent">
              Soon
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/73 max-w-2xl mx-auto">
            Something amazing is on the way.
          </p>
        </div>

        {/* Optional: Add a subtle animation or additional text */}
        <div className="mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-[#72fd4e] animate-pulse"></div>
            <p className="text-sm text-white/60">Under Construction</p>
          </div>
        </div>
      </div>

      {/* Gradient Dividers */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#72fd4e] to-transparent opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#72fd4e] to-transparent opacity-20" />
    </div>
  );
}
