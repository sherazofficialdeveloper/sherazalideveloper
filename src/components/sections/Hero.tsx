'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, ArrowUpRight, Award, Code2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { BrandLogo } from '../ui/BrandLogo';
import { ServiceCard } from '../ui/ServiceCard';
import { servicesData, personalInfo, personalProfileImage, verifiedStats } from '../../data/portfolioData';
import profileSvg from '../../assets/profile.svg';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-[72px] sm:pt-[80px] bg-white">
      {/* ===================== HERO MAIN BANNER (DEEP BLUE) ===================== */}
      <section
        id="home"
        className="relative bg-[#0F286E] bg-gradient-to-b from-[#0F286E] via-[#1D4ED8] to-[#112A6E] text-white pt-14 pb-32 sm:pb-36 lg:pt-16 lg:pb-40 overflow-hidden"
      >
        {/* Subtle Architectural Grid & Curved Lines */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        />

        {/* Ambient Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column (7 cols): Main Headline & CTAs */}
            <div className="lg:col-span-7 max-w-2xl lg:max-w-none">
              {/* Top Subtitle / Verified Commercial Status */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[13px] font-medium text-blue-100 mb-6"
              >
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Full Stack Developer · 2+ Years Commercial Experience</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-['Lexend'] text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight mb-6"
              >
                Building High-Impact{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-10 text-white px-2 py-0.5">Software Solutions</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#EA580C] shadow-lg shadow-orange-500/30 rounded-md -rotate-1 -skew-x-6 z-0"
                  />
                </span>{' '}
                for the Real World.
              </motion.h1>

              {/* Subheading / Value Proposition */}
              <motion.p
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-hero-body text-blue-100/90 mb-8 max-w-xl"
              >
                I am <span className="font-semibold" style={{ color: '#ffffff' }}>Sheraz Ali</span>, a Full Stack Developer with 2+ years of verified commercial software experience delivering modern web applications, mobile apps, native desktop software, and intelligent bots.
              </motion.p>

              {/* Action Buttons: Desix High-Contrast Styled Buttons */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Link href="/services">
                  <Button
                    variant="accent"
                    size="lg"
                  >
                    View Services
                  </Button>
                </Link>

                <Link href="/contact">
                  <button
                    type="button"
                    className="group theme-btn btn-style-white text-[15px] px-8 py-3.5 rounded-[4px] font-['Lexend'] font-semibold inline-flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>Get In Touch</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-6 border-t border-blue-400/20 flex flex-wrap items-center gap-6 sm:gap-8 text-[13px] text-blue-100/80 font-medium"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Modern Clean Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Responsive &amp; Mobile-Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Commercial Code Delivery</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column (5 cols): Hero Right-Side Developer Showcase Card */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="lg:col-span-5 relative w-full flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Decorative glowing offset background frame */}
                <div className="absolute -top-3 -left-3 w-full h-full rounded-[12px] border border-blue-400/30 bg-blue-500/10 -z-0 pointer-events-none" />
                <div className="absolute -bottom-3 -right-3 w-28 h-28 rounded-br-[12px] border-b-4 border-r-4 border-[#F97316] pointer-events-none" />

                {/* Main Card Surface */}
                <div className="relative z-10 rounded-[12px] overflow-hidden bg-[#0A1B4A] border border-blue-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-5 text-white">
                  {/* Photo area — NO full overlay now, image is fully clear */}
                  <div className="relative rounded-[8px] overflow-hidden bg-[#0F286E] border border-blue-400/20 mb-4 aspect-[4/3] group">
                    <img
                      src='/assets/Sheraz Ali.png'
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = profileSvg;
                      }}
                      alt={`${personalInfo.name} - Full Stack Developer`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Status Pill on Photo */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0A1B4A]/85 backdrop-blur-xs text-[11px] font-semibold text-white border border-blue-400/30 flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Available for Hire</span>
                    </div>

                    {/* Developer Name Bar — bottom-only subtle backdrop for readability */}
                    <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 bg-gradient-to-t from-[#0A1B4A]/95 via-[#0A1B4A]/60 to-transparent flex items-center justify-between text-white">
                      <div>
                        <h4 className="font-['Lexend'] text-lg font-bold leading-tight text-white">
                          {personalInfo.name}
                        </h4>
                        <p className="text-[11px] text-[#F97316] font-semibold tracking-wider uppercase">
                          {personalInfo.role}
                        </p>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white/15 backdrop-blur-xs border border-white/25">
                        2+ Yrs Exp
                      </span>
                    </div>
                  </div>

                  {/* Commercial Stats Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <div className="p-3 rounded-[6px] bg-[#0F286E]/80 border border-blue-400/20">
                      <div className="font-['Lexend'] text-xl font-black text-white leading-none mb-1">
                        2+ <span className="text-xs font-bold text-[#F97316]">Years</span>
                      </div>
                      <p className="text-[11px] text-blue-200/80 font-medium">Commercial Experience</p>
                    </div>

                    <div className="p-3 rounded-[6px] bg-[#0F286E]/80 border border-blue-400/20">
                      <div className="font-['Lexend'] text-xl font-black text-white leading-none mb-1">
                        4 <span className="text-xs font-bold text-blue-400">Pillars</span>
                      </div>
                      <p className="text-[11px] text-blue-200/80 font-medium">Web, Mobile, Desktop, Bots</p>
                    </div>
                  </div>

                  {/* Bottom Quick Contact Bar inside Card */}
                  <div className="mt-3.5 pt-3 border-t border-blue-400/20 flex items-center justify-between text-[12px]">
                    <span className="text-blue-200/80 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#F97316]" />
                      <span>Verified Commercial Coder</span>
                    </span>
                    <Link
                      href="/about"
                      className="font-bold text-[#F97316] hover:text-orange-400 hover:underline flex items-center gap-1 transition-colors"
                    >
                      <span>Bio &amp; Skills</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HERO OVERLAPPING SERVICE OVERVIEW CARDS (DESIX SIGNATURE LAYOUT)
          Overlaps the deep-blue hero section with -mt-24 to match the reference style
          ========================================================================= */}
      <div className="relative -mt-20 sm:-mt-24 z-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={{
                ...service,
                slug:
                  service.id === 'web-dev'
                    ? 'website-development'
                    : service.id === 'mobile-dev'
                    ? 'mobile-app-development'
                    : service.id === 'desktop-dev'
                    ? 'desktop-development'
                    : 'bots-automation',
                simpleDescription:
                  service.id === 'web-dev'
                    ? 'Full-stack web applications and SPAs engineered with React & Next.js.'
                    : service.id === 'mobile-dev'
                    ? 'Native-feel mobile apps built with React Native and Android Studio.'
                    : service.id === 'desktop-dev'
                    ? 'High-performance desktop apps using Electron.js with SQLite.'
                    : 'Intelligent automation bots, web scrapers, and task runners.',
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};