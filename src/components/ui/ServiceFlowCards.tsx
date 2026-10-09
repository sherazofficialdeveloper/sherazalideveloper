'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export interface ServiceFlowItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  icon: React.ReactNode;
  themeColor: string; // Must be existing website colors (#2563EB, #F97316, #0F286E, #10B981)
  deliverables?: string[];
  technologies?: string[];
  href?: string;
}

interface ServiceFlowCardsProps {
  items: ServiceFlowItem[];
  defaultActiveIndex?: number;
  showDetailCard?: boolean;
}

export const ServiceFlowCards: React.FC<ServiceFlowCardsProps> = ({
  items,
  defaultActiveIndex = 0,
  showDetailCard = true,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);
  const activeItem = items[activeIndex] || items[0];

  // Helper for the SVG right-crescent with directional arrow
  const getCrescentPath = (hasArrow: boolean) => {
    const cx = 100;
    const cy = 110;
    const rOut = 102;
    const rIn = 80;

    if (!hasArrow) {
      return `M ${cx} ${cy - rOut} A ${rOut} ${rOut} 0 0 1 ${cx} ${cy + rOut} L ${cx} ${cy + rIn} A ${rIn} ${rIn} 0 0 0 ${cx} ${cy - rIn} Z`;
    }

    return `M ${cx} ${cy - rOut} A ${rOut} ${rOut} 0 0 1 ${cx + 100} ${cy - 14} L ${cx + 126} ${cy} L ${cx + 100} ${cy + 14} A ${rOut} ${rOut} 0 0 1 ${cx} ${cy + rOut} L ${cx} ${cy + rIn} A ${rIn} ${rIn} 0 0 0 ${cx} ${cy - rIn} Z`;
  };

  return (
    <div className="w-full font-['Lexend']">
      {/* =========================================================================
          THE 4 CIRCULAR FLOW CARDS (REFERENCE IMAGE LAYOUT)
          Horizontal sequence with connecting crescent arrows
          ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 items-center justify-items-center mb-10">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const isLast = index === items.length - 1;
          const hasArrow = !isLast;

          return (
            <motion.div
              key={item.id}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative flex items-center justify-center cursor-pointer select-none group"
              onClick={() => setActiveIndex(index)}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              aria-label={`Select ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
            >
              {/* Card wrapper: 240px wide x 220px high */}
              <div className="relative w-[240px] h-[220px] flex items-center">
                {/* SVG Crescent Arc on the right side */}
                <svg
                  viewBox="0 0 240 220"
                  className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]"
                  aria-hidden="true"
                >
                  <path
                    d={getCrescentPath(hasArrow)}
                    fill={item.themeColor}
                    className="transition-colors duration-300"
                  />
                </svg>

                {/* White Circular Card centered at (100, 110) with diameter 160px */}
                <div
                  className={`absolute left-[20px] top-[30px] w-[160px] h-[160px] rounded-full bg-white flex flex-col items-center justify-center p-3 text-center transition-all duration-300 z-10 ${
                    isActive
                      ? 'shadow-[0_16px_35px_rgba(0,0,0,0.16)] scale-[1.04] ring-3 ring-offset-2'
                      : 'shadow-[0_10px_25px_rgba(0,0,0,0.07)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)] hover:scale-[1.02]'
                  }`}
                  style={{
                    // ring color using themeColor
                    boxShadow: isActive
                      ? `0 16px 35px rgba(0,0,0,0.14), 0 0 0 3px ${item.themeColor}`
                      : undefined,
                  }}
                >
                  {/* Outline Icon */}
                  <div
                    className="mb-1.5 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: item.themeColor }}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h4 className="font-['Lexend'] font-bold text-[13px] sm:text-[13.5px] text-[#18191c] leading-tight mb-1 line-clamp-1">
                    {item.title}
                  </h4>

                  {/* Short Description */}
                  <p className="font-['Lexend'] text-[10.5px] sm:text-[11px] text-[#6f7174] leading-snug line-clamp-2 max-w-[136px]">
                    {item.shortDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* =========================================================================
          ACTIVE SERVICE SPECIFICATION DRAWER
          Compact enterprise detail card showing deliverables, tech, and action
          ========================================================================= */}
      {showDetailCard && activeItem && (
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-8 rounded-[10px] bg-white border border-[#e9ecef] shadow-[0_4px_25px_rgba(0,0,0,0.04)] relative overflow-hidden"
        >
          {/* Top color accent strip */}
          <span
            className="absolute top-0 left-0 w-full h-[3px]"
            style={{ backgroundColor: activeItem.themeColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Service overview & Deliverables */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="font-mono text-[11px] font-bold px-2 py-0.5 rounded border"
                  style={{
                    color: activeItem.themeColor,
                    borderColor: `${activeItem.themeColor}33`,
                    backgroundColor: `${activeItem.themeColor}10`,
                  }}
                >
                  Service {activeItem.number}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-[12px] font-semibold text-[#6f7174]">
                  Production Discipline
                </span>
              </div>

              <h3 className="font-['Lexend'] text-2xl font-bold text-[#18191c] mb-3">
                {activeItem.title}
              </h3>

              <p className="text-[14px] leading-relaxed text-[#6f7174] mb-6">
                {activeItem.fullDescription || activeItem.shortDescription}
              </p>

              {/* Deliverables Checklist */}
              {activeItem.deliverables && activeItem.deliverables.length > 0 && (
                <div>
                  <h5 className="font-['Lexend'] text-[11.5px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Verified Deliverables &amp; Capabilities
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeItem.deliverables.map((deliv, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-[13px] text-[#18191c] p-2.5 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef]"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: activeItem.themeColor }}
                        />
                        <span className="leading-snug">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 5 cols: Technologies and Direct Link */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full p-6 rounded-[8px] bg-[#f8f9fa] border border-[#e9ecef]">
              <div>
                <h5 className="font-['Lexend'] text-[11.5px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Technologies &amp; Runtime
                </h5>

                {activeItem.technologies && activeItem.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {activeItem.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11.5px] font-semibold text-[#18191c] bg-white border border-[#e2e8f0] px-2.5 py-1 rounded-[4px] shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center gap-3">
                {activeItem.href && (
                  <Link
                    href={activeItem.href}
                    className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-[6px] font-['Lexend'] text-[13px] font-bold text-white flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all"
                    style={{ backgroundColor: activeItem.themeColor }}
                  >
                    <span>Explore {activeItem.title} Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}

                <Link
                  href="/contact"
                  className="w-full sm:w-auto py-2.5 px-4 rounded-[6px] font-['Lexend'] text-[13px] font-bold text-[#18191c] bg-white border border-[#cbd5e1] hover:border-slate-400 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Discuss Project</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

