'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, Code2, Cpu, Mail } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { personalInfo, personalProfileImage } from '../../data/portfolioData';
import { contactData } from '../../data/contactData';
import profileSvg from '../../assets/profile.svg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f8f9fa] relative overflow-hidden border-b border-[#e9ecef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* =========================================================================
              LEFT COLUMN: PROFESSIONAL LAYERED PERSONAL IMAGE COMPOSITION (5 COLS)
              Easily replaceable: simply drop new photo into src/assets/profile.png!
              ========================================================================= */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Decorative Geometric Background Pattern */}
              <div className="absolute -top-5 -left-5 w-40 h-40 bg-dot-pattern opacity-60 pointer-events-none" />

              {/* Offset Accent Frame (Desix Layered Style) */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-[8px] border-2 border-[#2563EB] -z-0 pointer-events-none" />
              <div className="absolute -top-3 -left-3 w-24 h-24 rounded-tl-[8px] border-t-4 border-l-4 border-[#F97316] pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative z-10 rounded-[8px] overflow-hidden bg-[#0F286E] shadow-[0_18px_45px_rgba(29,78,216,0.2)] border border-blue-400/30">
                <img
                  src='/assets/Sheraz Ali Developer.png'
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = profileSvg;
                  }}
                  alt={`${personalInfo.name} - Full Stack Developer`}
                  className="w-full h-auto aspect-[4/5] object-cover object-top transition-transform duration-500 hover:scale-102"
                />

                {/* Subtle Bottom Vignette */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0F286E]/95 via-[#0F286E]/40 to-transparent pointer-events-none" />

                {/* Floating Top Pill on Image */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-[4px] bg-[#0A1B4A]/90 backdrop-blur-xs text-white border border-blue-400/30 text-[11px] font-bold tracking-wider uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Full Stack Developer</span>
                </div>

                {/* Name Bar at bottom of photo */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-white">
                  <div>
                    <span className="font-['Lexend'] text-lg font-bold block leading-tight">
                      {personalInfo.name}
                    </span>
                    <span className="text-[11px] font-semibold text-[#F97316] uppercase tracking-wider">
                      {personalInfo.brandName}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white/10 border border-white/20">
                    2+ Yrs Exp
                  </span>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="absolute -bottom-5 -right-2 sm:-right-4 p-4 rounded-[6px] bg-white border border-[#e9ecef] shadow-[0_12px_35px_rgba(0,0,0,0.12)] flex items-center gap-3.5 z-20"
              >
                <div className="w-11 h-11 rounded-[4px] bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <div className="font-['Lexend'] text-xl font-bold text-[#18191c] leading-none mb-1">
                    2+ <span className="text-xs font-bold text-[#F97316]">Years</span>
                  </div>
                  <p className="text-[11.5px] font-semibold text-[#6f7174]">
                    Commercial Experience
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: EDITORIAL CONTENT & PILLARS (7 COLS)
              ========================================================================= */}
          <div className="lg:col-span-7">
            <SectionHeading
              align="left"
              category="About Me"
              title="Full Stack Software"
              highlight="Developer."
              highlightColor="orange"
              className="mb-5"
            />

            <motion.p
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[15px] sm:text-[16px] leading-[28px] text-[#6f7174] mb-6 font-normal"
            >
              I am <strong className="text-[#18191c] font-bold">{personalInfo.name}</strong>, a practical Full Stack Developer with 2+ years of verified software development experience. I focus on building reliable websites, mobile apps, desktop software, and automated tools that help businesses solve real problems.
            </motion.p>

            {/* Info Boxes */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="space-y-3.5 mb-7"
            >
              <div className="flex items-start gap-3.5 p-4 rounded-[6px] bg-white border border-[#e9ecef] shadow-xs">
                <div className="w-9 h-9 rounded-[4px] bg-[#2563EB]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Code2 className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="font-['Lexend'] text-[15px] font-bold text-[#18191c] mb-1">
                    Frontend &amp; Backend Development
                  </h4>
                  <p className="text-[13px] leading-[22px] text-[#6f7174]">
                    Building clean user interfaces with React.js, Next.js, and Vue.js, along with secure, fast backend APIs using Node.js, Express.js, and Nest.js with MySQL and MongoDB databases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-[6px] bg-white border border-[#e9ecef] shadow-xs">
                <div className="w-9 h-9 rounded-[4px] bg-[#F97316]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-5 h-5 text-[#F97316]" />
                </div>
                <div>
                  <h4 className="font-['Lexend'] text-[15px] font-bold text-[#18191c] mb-1">
                    Mobile, Desktop &amp; Automation
                  </h4>
                  <p className="text-[13px] leading-[22px] text-[#6f7174]">
                    Developing cross-platform mobile apps using React Native, native desktop applications using Electron.js, and automated bots that save hours of repetitive work.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Author & Action Row */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center justify-between gap-5 pt-5 border-t border-[#e9ecef]"
            >
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-3 p-2.5 px-3.5 rounded-[6px] bg-white hover:bg-blue-50/60 border border-[#e9ecef] shadow-xs transition-all group"
              >
                <div className="w-9 h-9 rounded-[4px] bg-[#2563EB] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6f7174]">
                    Direct Email
                  </span>
                  <span className="text-[13px] font-bold text-[#18191c] group-hover:text-[#2563EB] transition-colors">
                    {contactData.email}
                  </span>
                </div>
              </a>

              <Button
                variant="accent"
                size="md"
                href="#contact"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
