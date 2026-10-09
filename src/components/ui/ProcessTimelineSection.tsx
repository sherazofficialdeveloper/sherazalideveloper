'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export interface ProcessStep {
  number: string;
  name: string;
  label: string;
  tagline: string;
  duration: string;
  shortDescPre: string;
  highlightPhrase: string;
  shortDescPost: string;
  overview: string;
  icon: React.ReactNode;
  themeColor: string;
  accentBg: string;
  accentText: string;
  deliverables: { title: string; desc: string }[];
  techStack: string[];
  engineerNote: string;
  statusText: string;
}

export interface ProcessTimelineSectionProps {
  id?: string;
  category: string;
  title: string;
  highlight?: string;
  highlightColor?: 'orange' | 'blue';
  description?: string;
  steps: ProcessStep[];
  contactSubject?: string;
}

export const ProcessTimelineSection: React.FC<ProcessTimelineSectionProps> = ({
  id = 'process',
  category,
  title,
  highlight,
  highlightColor = 'orange',
  description,
  steps,
  contactSubject,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const current = steps[activeStep] || steps[0];

  const handlePrev = () => setActiveStep((p) => (p > 0 ? p - 1 : steps.length - 1));
  const handleNext = () => setActiveStep((p) => (p < steps.length - 1 ? p + 1 : 0));

  return (
    <section id={id} className="py-16 sm:py-20 bg-white relative overflow-hidden font-['Lexend'] border-b border-[#e9ecef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* =====================================================================
            SECTION HEADER
            ===================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <SectionHeading
              category={category}
              title={title}
              highlight={highlight}
              highlightColor={highlightColor}
              description={description}
            />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
              <span className="text-[#2563EB]">{current.number}</span>
              <span className="text-slate-300 mx-1.5">/</span>
              <span>{steps.length < 10 ? `0${steps.length}` : steps.length}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous stage"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-[#2563EB] hover:text-[#2563EB] text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next stage"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-[#F97316] hover:text-[#F97316] text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================================
            DESKTOP TIMELINE (lg and up)
            S-curve sine wave connecting all stages with alternating text
            ===================================================================== */}
        <div className="hidden lg:block relative mb-10" style={{ height: '420px' }}>
          {/* Continuous dotted sine wave connecting stages */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 420"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 20 210 C 50 210, 80 115, 120 115 C 200 115, 280 305, 360 305 C 440 305, 520 115, 600 115 C 680 115, 760 305, 840 305 C 920 305, 1000 115, 1080 115 C 1120 115, 1150 210, 1180 210"
              fill="none"
              stroke="#0F286E"
              strokeWidth="2.5"
              strokeDasharray="3 8"
              strokeLinecap="round"
              opacity="0.3"
            />
            <circle cx="20" cy="210" r="5" fill="#0F286E" />
            <circle cx="1180" cy="210" r="5" fill="#0F286E" />
          </svg>

          {/* 5-Column Grid */}
          <div className="relative grid grid-cols-5 h-full">
            {steps.map((st, idx) => {
              const isActive = activeStep === idx;
              const isTop = idx % 2 === 0;

              return (
                <div
                  key={st.number}
                  className="relative flex flex-col items-center justify-between h-full group"
                >
                  {/* ============ TEXT ABOVE (for steps 01, 03, 05) ============ */}
                  {isTop ? (
                    <div className="h-[110px] flex flex-col justify-end items-center text-center px-2 pb-2">
                      <h4
                        className={`text-sm font-bold uppercase tracking-wide transition-colors mb-1 ${
                          isActive ? 'text-[#2563EB]' : 'text-[#18191c]'
                        }`}
                      >
                        {st.name}
                      </h4>
                      <p className="text-xs leading-relaxed text-[#6f7174] max-w-[200px]">
                        {st.shortDescPre}{' '}
                        <span className={`px-1.5 py-0.5 rounded-[4px] font-semibold border inline ${st.accentBg} ${st.accentText}`}>
                          {st.highlightPhrase}
                        </span>{' '}
                        {st.shortDescPost}
                      </p>
                    </div>
                  ) : (
                    <div className="h-[110px] pointer-events-none" />
                  )}

                  {/* ============ CENTER NODE WITH BRAND-COLORED ARC & CIRCLE ============ */}
                  <div className="relative w-[180px] h-[180px] flex items-center justify-center">
                    {/* Brand Arc — Top half for odd steps, Bottom half for even steps */}
                    <svg
                      viewBox="0 0 180 180"
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      aria-hidden="true"
                    >
                      {isTop ? (
                        <>
                          <path
                            d="M 26 53 A 74 74 0 0 1 154 53"
                            fill="none"
                            stroke={st.themeColor}
                            strokeWidth="15"
                            strokeLinecap="round"
                          />
                          <circle cx="90" cy="16" r="6" stroke="#18191c" strokeWidth="1.5" fill="none" />
                          <circle cx="90" cy="16" r="2.8" fill="#18191c" />
                          <circle cx="38" cy="38" r="2" fill="#18191c" />
                          <circle cx="53" cy="26" r="2" fill="#18191c" />
                          <circle cx="71" cy="18.5" r="2" fill="#18191c" />
                          <circle cx="109" cy="18.5" r="2" fill="#18191c" />
                          <circle cx="127" cy="26" r="2" fill="#18191c" />
                          <circle cx="142" cy="38" r="2" fill="#18191c" />
                        </>
                      ) : (
                        <>
                          <path
                            d="M 26 127 A 74 74 0 0 0 154 127"
                            fill="none"
                            stroke={st.themeColor}
                            strokeWidth="15"
                            strokeLinecap="round"
                          />
                          <circle cx="90" cy="164" r="6" stroke="#18191c" strokeWidth="1.5" fill="none" />
                          <circle cx="90" cy="164" r="2.8" fill="#18191c" />
                          <circle cx="38" cy="142" r="2" fill="#18191c" />
                          <circle cx="53" cy="154" r="2" fill="#18191c" />
                          <circle cx="71" cy="161.5" r="2" fill="#18191c" />
                          <circle cx="109" cy="161.5" r="2" fill="#18191c" />
                          <circle cx="127" cy="154" r="2" fill="#18191c" />
                          <circle cx="142" cy="142" r="2" fill="#18191c" />
                        </>
                      )}
                    </svg>

                    {/* Elevated White Circle Card */}
                    <button
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      aria-pressed={isActive}
                      aria-label={`Select stage ${st.number}: ${st.name}`}
                      className={`relative z-10 w-[124px] h-[124px] rounded-full bg-white flex flex-col items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none ${
                        isActive
                          ? 'shadow-[0_20px_35px_rgba(0,0,0,0.16)] scale-[1.05] ring-4 ring-[#2563EB]/30 border-2 border-[#18191c]'
                          : 'shadow-[0_14px_28px_rgba(0,0,0,0.08)] border border-slate-200 hover:scale-[1.02] hover:shadow-[0_18px_32px_rgba(0,0,0,0.12)]'
                      }`}
                    >
                      <div className="transition-transform duration-200 group-hover:scale-105">
                        {st.icon}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#18191c] mt-2">
                        {st.label}
                      </span>
                    </button>
                  </div>

                  {/* ============ TEXT BELOW (for steps 02, 04) ============ */}
                  {!isTop ? (
                    <div className="h-[110px] flex flex-col justify-start items-center text-center px-2 pt-2">
                      <h4
                        className={`text-sm font-bold uppercase tracking-wide transition-colors mb-1 ${
                          isActive ? 'text-[#F97316]' : 'text-[#18191c]'
                        }`}
                      >
                        {st.name}
                      </h4>
                      <p className="text-xs leading-relaxed text-[#6f7174] max-w-[200px]">
                        {st.shortDescPre}{' '}
                        <span className={`px-1.5 py-0.5 rounded-[4px] font-semibold border inline ${st.accentBg} ${st.accentText}`}>
                          {st.highlightPhrase}
                        </span>{' '}
                        {st.shortDescPost}
                      </p>
                    </div>
                  ) : (
                    <div className="h-[110px] pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================================
            MOBILE & TABLET TIMELINE (below lg)
            ===================================================================== */}
        <div className="lg:hidden mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {steps.map((st, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={st.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`w-full flex items-center gap-3.5 p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-white border-[#2563EB] shadow-md ring-2 ring-[#2563EB]/25'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex flex-col items-center justify-center shrink-0 border transition-all ${
                    isActive
                      ? 'bg-blue-50/70 border-[#2563EB] shadow-xs'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  {st.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                      Stage {st.number}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {st.duration}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold uppercase text-[#18191c] truncate mb-0.5">
                    {st.name}
                  </h4>
                  <p className="text-xs text-[#6f7174] leading-snug line-clamp-2">
                    {st.shortDescPre}{' '}
                    <span className={`px-1 rounded-xs font-semibold ${st.accentText}`}>
                      {st.highlightPhrase}
                    </span>{' '}
                    {st.shortDescPost}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* =====================================================================
            DETAIL PANEL — Crisp, readable, standard typography matching website
            ===================================================================== */}
        <div className="bg-[#fbfcfe] rounded-2xl border border-slate-200 p-5 sm:p-6 lg:p-7 shadow-xs relative overflow-hidden">
          {/* Top Bar: Active Stage info + Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-200">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#2563EB] shadow-2xs shrink-0">
                {current.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 sm:gap-2.5 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                    Stage {current.number}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                    {current.duration}
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {current.statusText}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#18191c] leading-snug">
                  {current.name}: <span className="text-slate-500 font-normal text-sm sm:text-base">{current.tagline}</span>
                </h3>
              </div>
            </div>

            {/* Quick Stage Switch Pills + Nav Buttons */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
                {steps.map((s, i) => (
                  <button
                    key={s.number}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className={`w-7 h-7 rounded-md text-xs font-bold flex items-center justify-center transition-all ${
                      activeStep === i
                        ? 'bg-[#2563EB] text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {s.number}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous stage"
                  className="w-8 h-8 rounded-md bg-white border border-slate-200 hover:border-[#2563EB] text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
                >
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next stage"
                  className="w-8 h-8 rounded-md bg-white border border-slate-200 hover:border-[#F97316] text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Overview + Deliverables (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed mb-5">
                {current.overview}
              </p>

              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Phase Deliverables
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    {current.deliverables.length} Verified Milestones
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.deliverables.map((item) => (
                    <div
                      key={item.title}
                      className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-2.5 hover:border-blue-300 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <span className="text-xs sm:text-[13px] font-bold text-[#18191c] block leading-tight">
                          {item.title}
                        </span>
                        <span className="text-xs text-slate-500 block leading-normal mt-1">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Stack, Engineer Quote & CTA (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4 p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Tools &amp; Specifications
                </span>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {current.techStack.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100/90 border border-slate-200 text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-orange-50/70 border border-orange-200/70 text-xs sm:text-[13px] text-slate-800 flex items-start gap-2 leading-relaxed">
                  <Zap className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                  <span className="italic">"{current.engineerNote}"</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Direct Handover · 100% IP</span>
                </div>

                <Link
                  href={contactSubject ? `/contact?subject=${encodeURIComponent(contactSubject)}` : '/contact'}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-bold shadow-2xs hover:shadow transition-all"
                >
                  <span>Discuss Stage {current.number}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

