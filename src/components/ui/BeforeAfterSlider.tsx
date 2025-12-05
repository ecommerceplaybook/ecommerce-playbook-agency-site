'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [imageError, setImageError] = useState({ before: false, after: false });
  const containerRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLDivElement>(null);
  const beforeImageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current || !isDragging) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, [isDragging]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!containerRef.current || !isDragging) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleMouseUp, handleTouchEnd]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // Set initial scroll position to top
  useEffect(() => {
    if (afterImageRef.current) {
      afterImageRef.current.scrollTop = 0;
    }
    if (beforeImageRef.current) {
      beforeImageRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] rounded-lg overflow-hidden shadow-2xl bg-gray-900">
      <div
        ref={containerRef}
        className="relative w-full min-h-[400px] md:min-h-[500px] cursor-col-resize select-none"
        onClick={handleContainerClick}
      >
        {/* After Image (Background) */}
        <div 
          ref={afterImageRef}
          className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden"
          style={{ scrollBehavior: 'smooth' }}
        >
          {!imageError.after ? (
            <div className="relative w-full">
              <Image
                src={afterImage}
                alt={afterLabel}
                width={1200}
                height={1800}
                className="w-full h-auto"
                style={{ objectPosition: 'top' }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => setImageError(prev => ({ ...prev, after: true }))}
              />
            </div>
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
              Failed to load image
            </div>
          )}
        </div>

        {/* Before Image (Clipped) */}
        <div
          ref={beforeImageRef}
          className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden"
          style={{ 
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            scrollBehavior: 'smooth'
          }}
        >
          {!imageError.before ? (
            <div className="relative w-full">
              <Image
                src={beforeImage}
                alt={beforeLabel}
                width={1200}
                height={1800}
                className="w-full h-auto"
                style={{ objectPosition: 'top' }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => setImageError(prev => ({ ...prev, before: true }))}
              />
            </div>
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
              Failed to load image
            </div>
          )}
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing pointer-events-auto"
            onMouseDown={(e) => {
              e.stopPropagation();
              setIsDragging(true);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              setIsDragging(true);
            }}
          >
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <svg
                className="w-4 h-4 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-sm font-semibold z-20 pointer-events-none">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-sm font-semibold z-20 pointer-events-none">
          {afterLabel}
        </div>
      </div>
    </div>
  );
}

