'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Smartphone,
  Monitor,
  Bot,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export interface ServiceMenuData {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  tagline: string;
  badge: string;
  icon: React.ReactNode;
  accentColor: string;
  image: string;
}

export const servicesMenuList: ServiceMenuData[] = [
  {
    id: 'web-dev',
    slug: 'website-development',
    title: 'Website Development',
    shortDesc: 'Responsive websites, SPAs, and full-stack web applications with React & Node.',
    tagline: 'Fast, responsive web applications built for business growth & scale.',
    badge: 'Service 01 · Full Stack',
    icon: <Globe className="w-5 h-5" />,
    accentColor: '#2563EB',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'mobile-dev',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDesc: 'Cross-platform Android & mobile apps engineered with React Native CLI.',
    tagline: 'High-performance mobile apps tested on real physical Android hardware.',
    badge: 'Service 02 · Mobile',
    icon: <Smartphone className="w-5 h-5" />,
    accentColor: '#10B981',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'desktop-dev',
    slug: 'desktop-development',
    title: 'Desktop Software Development',
    shortDesc: 'Native desktop applications using Electron.js with local database persistence.',
    tagline: 'Cross-platform desktop tools that run fast on Windows, Mac, and Linux.',
    badge: 'Service 03 · Desktop',
    icon: <Monitor className="w-5 h-5" />,
    accentColor: '#8B5CF6',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'bot-dev',
    slug: 'bots-automation',
    title: 'Bots & Automation',
    shortDesc: 'Autonomous workflow bots, web scrapers, and background automation engines.',
    tagline: 'Save hundreds of manual hours with reliable 24/7 background automation.',
    badge: 'Service 04 · Automation',
    icon: <Bot className="w-5 h-5" />,
    accentColor: '#F97316',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=900&q=80',
  },
];

interface ServicesMegaMenuProps {
  onClose: () => void;
}

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({ onClose }) => {
  const pathname = usePathname();

  // Determine which service is active based on current route
  const getServiceFromRoute = (path: string): string => {
    if (path.includes('/services/website-development') || path.includes('website')) {
      return 'web-dev';
    }
    if (path.includes('/services/mobile-app-development') || path.includes('mobile')) {
      return 'mobile-dev';
    }
    if (path.includes('/services/desktop-development') || path.includes('desktop')) {
      return 'desktop-dev';
    }
    if (
      path.includes('/services/bots-automation') ||
      path.includes('/services/bot-development') ||
      path.includes('/services/automation') ||
      path.includes('bot')
    ) {
      return 'bot-dev';
    }
    return 'web-dev';
  };

  const [activeServiceId, setActiveServiceId] = useState<string>(() =>
    getServiceFromRoute(pathname || '/')
  );

  // Sync active service whenever location changes or menu opens
  useEffect(() => {
    setActiveServiceId(getServiceFromRoute(pathname || '/'));
  }, [pathname]);

  const activeService =
    servicesMenuList.find((s) => s.id === activeServiceId) || servicesMenuList[0];

  return (
    <div className="relative pt-2">
      {/* Small Triangle Pointer / Notch on top edge pointing directly to Services nav link */}
      <div
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border-t border-l border-[#e2e8f0] transform rotate-45 z-20"
        aria-hidden="true"
      />

      {/* Main Container Card — Direct Layout inspired by Reference Image */}
      <div className="w-[740px] lg:w-[800px] p-6 rounded-[16px] bg-white border border-[#e2e8f0] shadow-[0_20px_50px_rgba(0,0,0,0.14)] relative z-10 overflow-hidden">
        {/* Top Header Label */}
        <div className="flex items-center gap-1.5 mb-5 pb-3 border-b border-[#f1f3f6]">
          <span className="text-[11.5px] font-['Lexend'] font-extrabold uppercase tracking-widest text-[#F97316] flex items-center gap-1.5">
            <span>CORE SERVICES &amp; DISCIPLINES</span>
            <span className="text-[9px] text-[#F97316]">▼</span>
          </span>
          <span className="text-slate-300 text-xs">·</span>
          <span className="text-[12px] text-slate-500 font-medium">
            Full-Stack Software Engineering
          </span>
        </div>

        {/* 2-Column Mega Menu Grid (Matches Reference Image Composition) */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {/* =========================================================================
              LEFT SIDE: DYNAMIC PREVIEW PANEL WITH LARGE VISUAL IMAGE
              Matches reference composition: full background visual, overlay, text, CTA
              Instant cross-fade images without stalling
              ========================================================================= */}
          <div className="col-span-6 relative rounded-[12px] overflow-hidden min-h-[340px] bg-slate-900 flex flex-col justify-end p-6 border border-slate-800 shadow-inner group">
            {/* Background Images Layer with reliable CSS Cross-fade transition */}
            <div className="absolute inset-0 z-0">
              {servicesMenuList.map((svc) => (
                <div
                  key={svc.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-out ${
                    svc.id === activeService.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Heavy dark gradient overlay ensuring readability matching reference */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B4A] via-[#0A1B4A]/80 to-transparent" />
                  <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" />
                </div>
              ))}
            </div>

            {/* Glowing Accent Ring in Top Right */}
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#F97316]" />
                <span>Featured Solution</span>
              </span>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10">
              {/* Category Pill Tag */}
              <div className="mb-2">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#F97316] font-['Lexend'] bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded-[4px] border border-orange-500/30">
                  {activeService.badge}
                </span>
              </div>

              {/* Title & Tagline with smooth entrance */}
              <div>
                <h3 className="font-['Lexend'] text-xl font-bold text-white mb-2 leading-tight transition-all duration-200">
                  {activeService.title}
                </h3>

                <p className="text-[13px] text-slate-200 leading-relaxed font-normal mb-5 line-clamp-2 transition-all duration-200">
                  {activeService.tagline}
                </p>

                <Link
                  href={`/services/${activeService.slug}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#18191c] hover:bg-[#F97316] hover:text-white font-['Lexend'] text-[13px] font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 group/btn"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT SIDE: COMPLETE LIST OF SERVICES (Hover updates Left Preview)
              ========================================================================= */}
          <div className="col-span-6 flex flex-col justify-between gap-2">
            {servicesMenuList.map((item) => {
              const isSelected = activeServiceId === item.id;

              return (
                <Link
                  key={item.id}
                  href={`/services/${item.slug}`}
                  onClick={onClose}
                  onMouseEnter={() => setActiveServiceId(item.id)}
                  className={`group relative p-3.5 rounded-[10px] border transition-all duration-200 flex items-center justify-between gap-3 text-left ${
                    isSelected
                      ? 'bg-[#f8f9fa] border-[#2563EB] shadow-xs translate-x-1'
                      : 'bg-white border-[#e9ecef] hover:border-slate-300 hover:bg-slate-50/70'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Icon container */}
                    <div
                      className={`w-10 h-10 rounded-[8px] flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#2563EB] text-white shadow-xs'
                          : 'bg-[#f4f5f8] text-[#18191c] group-hover:bg-[#2563EB]/10 group-hover:text-[#2563EB]'
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h4
                        className={`font-['Lexend'] text-[14.5px] font-bold transition-colors ${
                          isSelected ? 'text-[#2563EB]' : 'text-[#18191c] group-hover:text-[#2563EB]'
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] text-[#6f7174] leading-snug line-clamp-1">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Indicator on Right */}
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-all ${
                      isSelected
                        ? 'text-[#2563EB] translate-x-0.5 opacity-100'
                        : 'text-slate-300 group-hover:text-[#2563EB] opacity-60 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}

            {/* Bottom Footer Action */}
            <div className="pt-2 mt-1 border-t border-[#f1f3f6] flex items-center justify-between text-[11.5px] text-slate-500 font-medium">
              <span>Looking for custom combination?</span>
              <Link
                href="/services"
                onClick={onClose}
                className="font-bold text-[#2563EB] hover:text-[#F97316] flex items-center gap-1 transition-colors"
              >
                <span>View All Services</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
