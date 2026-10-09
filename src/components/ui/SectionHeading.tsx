'use client';

import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  category: string;
  title: string;
  highlight?: string;
  highlightColor?: 'orange' | 'blue';
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  category,
  title,
  highlight,
  highlightColor = 'orange',
  description,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`relative mb-12 lg:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {/* Category Sub-Title: Desix uppercase letter-spaced marker */}
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={`inline-flex items-center gap-2 mb-3.5 ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="inline-block w-2 h-2 rounded-sm bg-[#F97316] rotate-45" />
        <span className="text-[13px] font-bold tracking-[0.18em] uppercase text-[#F97316]">
          {category}
        </span>
        <span className="inline-block w-8 h-[2px] bg-[#F97316]/40" />
      </motion.div>

      {/* Main Title with Desix Signature Skewed Parallelogram Accent */}
      <motion.h2
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-[-0.04em] leading-[1.18] font-['Lexend'] ${
          isDark ? 'text-white' : 'text-[#18191c]'
        }`}
        style={{ textWrap: 'balance' }}
      >
        {title}{' '}
        {highlight && (
          <span className="relative inline-block z-0">
            <span className="relative z-10 text-white px-2 py-0.5">
              {highlight}
            </span>
            <span
              className={`absolute inset-0 -rotate-1 rounded-md -skew-x-12 z-0 ${
                highlightColor === 'orange'
                  ? 'bg-gradient-to-r from-[#F97316] to-[#EA580C] shadow-md shadow-orange-500/20'
                  : 'bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] shadow-md shadow-blue-500/20'
              }`}
            />
          </span>
        )}
      </motion.h2>

      {/* Description text matching Desix typography */}
      {description && (
        <motion.p
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-[15px] leading-[28px] ${
            isDark ? 'text-slate-300' : 'text-[#6f7174]'
          } ${align === 'center' ? 'mx-auto max-w-2xl' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
