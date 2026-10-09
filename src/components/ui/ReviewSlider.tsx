'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReviewItem } from '../../data/reviewsData';
import { ReviewCard } from './ReviewCard';

interface ReviewSliderProps {
  reviews: ReviewItem[];
}

export const ReviewSlider: React.FC<ReviewSliderProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragDistanceRef = useRef(0);

  // Responsive visible count tracking
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      let count = 3;
      if (width < 640) {
        count = 1;
      } else if (width < 1024) {
        count = 2;
      } else {
        count = 3;
      }
      setVisibleCount(count);

      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gap = 24; // gap-6
        const totalGaps = (count - 1) * gap;
        const calculatedWidth = (containerWidth - totalGaps) / count;
        setCardWidth(calculatedWidth);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [reviews.length]);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  // Keep index within bounds if window resized
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Pointer drag gestures
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    dragDistanceRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    dragDistanceRef.current = e.clientX - startXRef.current;
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const distance = dragDistanceRef.current;
    if (distance < -45) {
      // Swiped Left -> Next
      handleNext();
    } else if (distance > 45) {
      // Swiped Right -> Prev
      handlePrev();
    }
    dragDistanceRef.current = 0;
  };

  const gap = 24;
  const translateX = cardWidth > 0 ? currentIndex * (cardWidth + gap) : 0;

  return (
    <div className="w-full relative">
      {/* Top Header Controls Strip: Review Counter + Slider Arrows */}
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#f1f3f6]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
          <span className="font-['Lexend'] text-[13px] font-semibold text-[#18191c]">
            Showing {currentIndex + 1}–{Math.min(currentIndex + visibleCount, reviews.length)} of {reviews.length} Client Reviews
          </span>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <span className="text-[12px] text-slate-500 font-medium hidden sm:inline">
            Slide to view all endorsements
          </span>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              currentIndex === 0
                ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50'
                : 'border-[#cbd5e1] text-[#18191c] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] hover:scale-105 active:scale-95 shadow-xs'
            }`}
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 pointer-events-none" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              currentIndex >= maxIndex
                ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50'
                : 'border-[#cbd5e1] text-[#18191c] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] hover:scale-105 active:scale-95 shadow-xs'
            }`}
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 pointer-events-none" />
          </button>
        </div>
      </div>

      {/* Main Slider Track Viewport */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="w-full overflow-hidden select-none touch-pan-y py-2 cursor-grab active:cursor-grabbing"
      >
        <div
          className="flex items-stretch gap-6 transition-transform duration-400 ease-out"
          style={{
            transform: `translateX(-${translateX}px)`,
          }}
        >
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="shrink-0 flex flex-col"
              style={{
                width: cardWidth > 0 ? `${cardWidth}px` : '320px',
              }}
            >
              <ReviewCard review={rev} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pagination Dots Indicator */}
      {maxIndex > 0 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i
                  ? 'w-8 bg-[#2563EB]'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
