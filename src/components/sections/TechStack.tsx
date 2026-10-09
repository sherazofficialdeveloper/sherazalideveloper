'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { TechCard } from '../ui/TechCard';
import { techStackData } from '../../data/portfolioData';
import { TechCategory } from '../../types/portfolio';

export const TechStack: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: string[] = [
    'All',
    'Frontend',
    'Backend',
    'Mobile',
    'Desktop',
    'Databases',
    'Automation / Browser',
    'Testing',
    'Backend / Supporting',
    'Deployment / Hosting',
  ];

  const filteredTech =
    selectedCategory === 'All'
      ? techStackData
      : techStackData.filter((item) => item.category === selectedCategory);

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  // Robust pointer drag implementation (works with mouse drag and touch swipe)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only respond to primary button (0) on mouse, or any touch
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    isPointerDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX;
    scrollLeftRef.current = container.scrollLeft;

    try {
      container.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const dx = e.clientX - startXRef.current;
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - dx;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;
    setIsDragging(false);
    try {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.releasePointerCapture(e.pointerId);
      }
    } catch {}
  };

  const scrollByAmount = (amount: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    try {
      el.scrollBy({ left: amount, behavior: 'smooth' });
    } catch {
      el.scrollLeft += amount;
    }
  };

  return (
    <section id="skills" className="pt-20 pb-24 sm:pt-24 sm:pb-28 bg-white border-b border-[#e9ecef] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <SectionHeading
          category="Technical Toolkit"
          title="Technologies In Active"
          highlight="Production."
          highlightColor="blue"
          description="Complete confirmed tools, languages, frameworks, and deployment platforms across web, mobile, desktop, and automations."
          className="mb-8"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? techStackData.length
                : techStackData.filter((i) => i.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleSelectCategory(cat)}
                aria-pressed={isSelected}
                className={`px-3.5 py-1.5 rounded-[4px] text-[12.5px] font-['Lexend'] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 hover:scale-105 active:scale-95 ${
                  isSelected
                    ? 'bg-[#1D4ED8] text-white shadow-xs'
                    : 'bg-[#f4f5f8] text-[#6f7174] hover:text-[#18191c] hover:bg-slate-200/80 hover:border-slate-300 border border-transparent'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            SINGLE HORIZONTAL ROW SCROLLER — 100% NO VERTICAL SCROLLBAR
            Interactive Click & Drag + Arrow Controls + Touch Swipe
            ========================================================================= */}
        <div className="relative group/scroller">
          {/* Subtle Side Vignettes */}
          <div className="absolute left-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-20" />
          <div className="absolute right-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />

          {/* Left Arrow Navigation Control */}
          <button
            type="button"
            onClick={() => scrollByAmount(-380)}
            className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-[#cbd5e1] shadow-lg flex items-center justify-center text-[#18191c] hover:text-[#2563EB] hover:bg-blue-50 hover:border-[#2563EB] hover:scale-110 active:scale-95 transition-all opacity-90 hover:opacity-100 hidden sm:flex cursor-pointer"
            aria-label="Scroll technologies left"
          >
            <ChevronLeft className="w-5 h-5 pointer-events-none" />
          </button>

          {/* Right Arrow Navigation Control */}
          <button
            type="button"
            onClick={() => scrollByAmount(380)}
            className="absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-[#cbd5e1] shadow-lg flex items-center justify-center text-[#18191c] hover:text-[#2563EB] hover:bg-blue-50 hover:border-[#2563EB] hover:scale-110 active:scale-95 transition-all opacity-90 hover:opacity-100 hidden sm:flex cursor-pointer"
            aria-label="Scroll technologies right"
          >
            <ChevronRight className="w-5 h-5 pointer-events-none" />
          </button>

          {/* Draggable Row Flex Container */}
          <div
            ref={scrollContainerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`flex flex-nowrap items-stretch gap-4 overflow-x-auto select-none hide-scrollbar py-3 px-6 sm:px-12 touch-pan-y ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {filteredTech.map((item, index) => (
              <TechCard key={item.name} item={item} index={index} />
            ))}

            {/* Ending Spacing Spacer for Natural Finish */}
            <div className="w-8 shrink-0" aria-hidden="true" />
          </div>
        </div>

        {/* Bottom Helper Hint & Total Count */}
        <div className="mt-6 flex flex-wrap items-center justify-between text-[12px] text-slate-400 px-2 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Showing {filteredTech.length} of {techStackData.length} confirmed production tools</span>
          </div>

          <span className="hidden sm:inline">
            Click &amp; drag or swipe horizontally · Hover to flip icon &amp; reveal details
          </span>
        </div>
      </div>
    </section>
  );
};
