'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Globe, Smartphone, Monitor, Bot, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../../types/portfolio';

interface ServiceCardProps {
  service: ServiceItem & { slug?: string; simpleDescription?: string };
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const cardConfigs = [
    {
      fillGradient: 'from-[#2563EB] to-[#1D4ED8]',
      accentColor: '#2563EB',
      badgeBg: 'bg-blue-50 text-[#2563EB] border-blue-200',
      topBorder: 'before:w-20 before:left-0 before:bg-[#2563EB]',
      techSnippet: 'React.js · Next.js · Node.js',
      cornerAccent: 'border-t-2 border-l-2 border-[#2563EB]/40',
    },
    {
      fillGradient: 'from-[#F97316] to-[#EA580C]',
      accentColor: '#F97316',
      badgeBg: 'bg-orange-50 text-[#F97316] border-orange-200',
      topBorder: 'before:w-20 before:left-0 before:bg-[#F97316]',
      techSnippet: 'React Native · Android Studio',
      cornerAccent: 'border-t-2 border-l-2 border-[#F97316]/40',
    },
    {
      fillGradient: 'from-[#2563EB] to-[#1D4ED8]',
      accentColor: '#2563EB',
      badgeBg: 'bg-blue-50 text-[#2563EB] border-blue-200',
      topBorder: 'before:w-20 before:left-0 before:bg-[#2563EB]',
      techSnippet: 'Electron.js · SQLite · Node.js',
      cornerAccent: 'border-t-2 border-l-2 border-[#2563EB]/40',
    },
    {
      fillGradient: 'from-[#F97316] to-[#EA580C]',
      accentColor: '#F97316',
      badgeBg: 'bg-orange-50 text-[#F97316] border-orange-200',
      topBorder: 'before:w-20 before:left-0 before:bg-[#F97316]',
      techSnippet: 'Puppeteer · Python · Automations',
      cornerAccent: 'border-t-2 border-l-2 border-[#F97316]/40',
    },
  ];

  const config = cardConfigs[index % cardConfigs.length];

  const getIcon = () => {
    switch (service.id) {
      case 'web-dev':
        return <Globe className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors duration-300" />;
      case 'mobile-dev':
        return <Smartphone className="w-5 h-5 text-[#F97316] group-hover:text-white transition-colors duration-300" />;
      case 'desktop-dev':
        return <Monitor className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors duration-300" />;
      case 'bot-dev':
        return <Bot className="w-5 h-5 text-[#F97316] group-hover:text-white transition-colors duration-300" />;
      default:
        return <Globe className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors duration-300" />;
    }
  };

  const targetSlug = service.slug || (service.id === 'bot-dev' ? 'bots-automation' : service.id);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative bg-white rounded-[6px] border border-[#e2e8f0] p-5 shadow-[0_4px_18px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Bottom-to-Top Card Fill Background */}
      <div
        className={`desix-card-bottom-fill bg-gradient-to-t ${config.fillGradient} opacity-95`}
      />

      <div className="relative z-10">
        {/* Top Header: Number & Circular Icon */}
        <div className="flex items-center justify-between mb-3.5">
          <span className="font-['Lexend'] text-2xl font-extrabold text-[#0A1B4A]/40 group-hover:text-white/60 transition-colors duration-300">
            {service.number}
          </span>

          {/* 360-degree rotating icon badge */}
          <div className="w-10 h-10 rounded-full bg-[#f4f5f8] group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 shadow-xs desix-icon-rotate">
            {getIcon()}
          </div>
        </div>

        {/* Service Title */}
        <h3 className="font-['Lexend'] text-[16px] font-bold text-[#18191c] group-hover:text-white transition-colors duration-300 mb-1.5 leading-snug">
          {service.title}
        </h3>

        {/* Short, Simple 1-2 line description */}
        <p className="text-[12.5px] leading-[20px] text-[#6f7174] group-hover:text-white/95 transition-colors duration-300 line-clamp-2">
          {service.simpleDescription || service.tagline || service.description}
        </p>
      </div>

      {/* Bottom Action Indicator */}
      <div className="relative z-10 pt-3 mt-3 border-t border-[#f1f3f6] group-hover:border-white/20 transition-colors duration-300 flex items-center justify-between text-[11px] font-semibold text-[#6f7174] group-hover:text-white">
        <span className="truncate text-slate-500 group-hover:text-white/80">{config.techSnippet}</span>
        <Link
          href={`/services/${targetSlug}`}
          className="inline-flex items-center gap-1 font-bold text-[#2563EB] group-hover:text-white transition-all ml-1 shrink-0 hover:underline"
        >
          <span>View</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};
