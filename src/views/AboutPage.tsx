'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Mail,
  Terminal,
  Layers,
  ArrowUpRight,
  Briefcase,
  Calendar,
  Check,
  Sparkles,
  Zap,
  Rocket,
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { personalInfo, personalProfileImage, verifiedStats } from '../data/portfolioData';
import profileSvg from '../assets/profile.svg';
import { fadeUp, staggerContainer, cardReveal } from '../utils/motion';

export const AboutPage: React.FC = () => {
  const milestones = [
    {
      period: '2022 — Present (2+ Years)',
      company: 'Commercial Software Development',
      role: 'Full Stack Developer',
      description:
        'Engineered responsive web applications, structured RESTful API backends, cross-platform Android mobile apps with React Native, and native desktop utilities.',
      deliverables: [
        'Built full-stack React and Node.js business applications',
        'Engineered cross-platform mobile apps tested on real Android devices',
        'Managed MySQL and MongoDB schemas with type-safe queries',
        'Implemented automated background bots for data syncing',
      ],
    },
  ];

  const skillDisciplines = [
    {
      title: 'Frontend Development',
      techs: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
      desc: 'Clean user interfaces that load quickly and respond smoothly across all screen sizes.',
    },
    {
      title: 'Backend & APIs',
      techs: ['Node.js', 'Express.js', 'Nest.js', 'REST APIs', 'JWT', 'bcrypt'],
      desc: 'Secure server logic, encrypted authentication, input validation, and database connections.',
    },
    {
      title: 'Mobile Applications',
      techs: ['React Native', 'React Native CLI', 'Android Studio', 'Firebase', 'AsyncStorage'],
      desc: 'Fast Android and iOS applications with offline support and push notifications.',
    },
    {
      title: 'Desktop Software',
      techs: ['Electron.js', 'SQLite', 'Node.js IPC', 'Vite', 'Local File Storage'],
      desc: 'Standalone desktop applications for Windows, Mac, and Linux that work without internet.',
    },
  ];

  return (
    <div className="pt-[72px] sm:pt-[80px] bg-white">
      {/* =========================================================================
          ABOUT HERO BANNER WITH STAGGER REVEAL (DEEP BLUE)
          ========================================================================= */}
      <section className="bg-[#0F286E] bg-gradient-to-b from-[#0F286E] via-[#1D4ED8] to-[#112A6E] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <motion.div
            initial={false}
            animate="visible"
            variants={staggerContainer(0.1)}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/20 border border-blue-400/30 text-blue-200 text-[12px] font-semibold mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Full Stack Developer</span>
              <span className="w-1 h-1 rounded-full bg-blue-300" />
              <span>2+ Years Commercial Experience</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Lexend'] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-5"
            >
              About <span className="text-[#FDBA74]">Sheraz Ali</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-hero-body text-blue-100/90 max-w-2xl mb-6"
            >
              I am a practical Full Stack Developer. I build websites, mobile apps, desktop software, and automation bots that help businesses operate efficiently.
            </motion.p>
          </motion.div>
        </div>

        {/* Ambient Graphic Accent */}
        <div className="absolute right-0 top-0 w-96 h-full bg-gradient-to-l from-blue-400/20 to-transparent pointer-events-none" />
      </section>

      {/* =========================================================================
          LAYERED PORTRAIT & COMMERCIAL BIOGRAPHY
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Layered Photo Frame */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Accent geometric lines */}
                <div className="absolute -top-5 -left-5 w-40 h-40 bg-dot-pattern opacity-60 pointer-events-none" />
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-[8px] border-2 border-[#2563EB] -z-0 pointer-events-none" />
                <div className="absolute -top-3 -left-3 w-24 h-24 rounded-tl-[8px] border-t-4 border-l-4 border-[#F97316] pointer-events-none" />

                <div className="relative z-10 rounded-[8px] overflow-hidden bg-[#0F286E] shadow-[0_20px_50px_rgba(29,78,216,0.2)] border border-blue-400/30">
                  <img
                    src="/assets/Sheraz Ali FullStack Developer.png"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = profileSvg;
                    }}
                    alt={`${personalInfo.name} - Full Stack Developer`}
                    className="w-full h-auto aspect-[4/5] object-cover object-top hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0F286E]/95 via-[#0F286E]/40 to-transparent pointer-events-none" />

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
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -bottom-5 -right-3 sm:-right-5 p-4 rounded-[6px] bg-white border border-[#e9ecef] shadow-[0_12px_35px_rgba(0,0,0,0.12)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] hover:scale-105 transition-all duration-300 flex items-center gap-3.5 z-20 cursor-default"
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
              </div>
            </motion.div>

            {/* Right: Bio & Background */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <SectionHeading
                align="left"
                category="My Background"
                title="Engineering Clean Code &amp;"
                highlight="Practical Solutions."
                highlightColor="orange"
                className="mb-6"
              />

              <div className="space-y-4 text-[15px] sm:text-[16px] leading-[28px] text-[#6f7174]">
                <p>
                  I am a Full Stack Developer with over 2 years of verified commercial software development experience.
                </p>
                <p>
                  I do not write messy code or promise things I cannot deliver. I focus on writing clean, type-safe software that works reliably in production. Whether you need a website, mobile app, desktop program, or background automation bot, I build it to solve real business problems.
                </p>
              </div>

              {/* Verified Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#e9ecef]">
                <div className="p-4 rounded-[6px] bg-white border border-[#e9ecef] hover:border-[#F97316]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <span className="text-[11px] font-bold text-[#F97316] uppercase tracking-wider block mb-1">
                    Track Record
                  </span>
                  <h4 className="font-['Lexend'] text-base font-bold text-[#18191c]">
                    Production Applications
                  </h4>
                  <p className="text-[12.5px] text-[#6f7174]">
                    2+ Years Commercial Development
                  </p>
                </div>

                <div className="p-4 rounded-[6px] bg-white border border-[#e9ecef] hover:border-[#2563EB]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                    Core Disciplines
                  </span>
                  <h4 className="font-['Lexend'] text-base font-bold text-[#18191c]">
                    Web, Mobile, Desktop &amp; Bots
                  </h4>
                  <p className="text-[12.5px] text-[#6f7174]">
                    End-to-end full stack architecture
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button variant="accent" size="md">
                    Work With Me
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline-dark" size="md">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VERIFIED COMMERCIAL EXPERIENCE TIMELINE
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#e9ecef]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionHeading
            category="Commercial Experience"
            title="Professional Work"
            highlight="History."
            highlightColor="blue"
            description="Verified software engineering experience delivering real client applications."
            className="mb-14"
          />

          <div className="space-y-8">
            {milestones.map((item, idx) => (
              <motion.div
                key={item.company}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 sm:p-10 rounded-[8px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-slate-300 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute top-0 left-0 w-full h-[3px] bg-[#2563EB]" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#e9ecef]">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#F97316] mb-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <h3 className="font-['Lexend'] text-2xl font-bold text-[#18191c]">
                      {item.company}
                    </h3>
                    <p className="text-[14px] font-semibold text-[#2563EB]">
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="text-[15px] leading-relaxed text-[#6f7174] mb-6">
                  {item.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#f1f3f6]">
                  {item.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#18191c] hover:translate-x-1 transition-transform duration-150">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT ENGAGEMENT & PAYMENT MILESTONES (NEW SECTION)
          Structured client-perspective workflow, payment checkpoints & policy
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-[#e9ecef]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <SectionHeading
            category="Engagement & Payments"
            title="How We Work Together &"
            highlight="Payment Milestones."
            highlightColor="orange"
            description="Clear, predictable financial checkpoints and working expectations designed for transparency, safety, and smooth delivery."
            className="mb-14"
          />

          {/* 3 Structured Milestones: 30% -> 50% -> 20% */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative">
            {/* Step 1: 30% Advance */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-[8px] bg-white border border-[#e9ecef] hover:border-[#2563EB]/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-[4px] bg-[#2563EB]" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-[6px] bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="font-['Lexend'] text-3xl font-extrabold text-[#2563EB]">
                    30%
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316] block">
                    Milestone 01 · Project Kickoff
                  </span>
                  <h3 className="font-['Lexend'] text-xl font-bold text-[#18191c] group-hover:text-[#2563EB] transition-colors">
                    Project Start &amp; Scope Lock
                  </h3>
                </div>

                <p className="text-[14px] leading-relaxed text-[#6f7174] mb-5">
                  A 30% advance deposit is required to officially lock the agreed project scope, schedule engineering capacity, and initialize codebase repositories.
                </p>
              </div>

              <div className="pt-4 border-t border-[#f1f3f6] space-y-2 text-[12.5px] text-[#18191c]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Comprehensive technical requirements finalized</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Architecture, database &amp; milestones scheduled</span>
                </div>
              </div>
            </motion.div>

            {/* Step 2: 50% at 60% Completion */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-[8px] bg-white border border-[#e9ecef] hover:border-[#F97316]/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-[4px] bg-[#F97316]" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-[6px] bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F97316] group-hover:scale-105 transition-transform">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <span className="font-['Lexend'] text-3xl font-extrabold text-[#F97316]">
                    50%
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB] block">
                    Milestone 02 · ~60% Completion
                  </span>
                  <h3 className="font-['Lexend'] text-xl font-bold text-[#18191c] group-hover:text-[#F97316] transition-colors">
                    Midpoint Review &amp; Demo
                  </h3>
                </div>

                <p className="text-[14px] leading-relaxed text-[#6f7174] mb-5">
                  When approximately 60% of agreed functionality is built, the next 50% payment is due. You receive an interactive staging demo to test features and verify progress.
                </p>
              </div>

              <div className="pt-4 border-t border-[#f1f3f6] space-y-2 text-[12.5px] text-[#18191c]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Interactive staging preview link provided</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Client reviews completed features &amp; feedback</span>
                </div>
              </div>
            </motion.div>

            {/* Step 3: 20% Final Completion */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-[8px] bg-white border border-[#e9ecef] hover:border-emerald-500/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-[4px] bg-emerald-600" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-[6px] bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <span className="font-['Lexend'] text-3xl font-extrabold text-emerald-600">
                    20%
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                    Milestone 03 · Final Launch
                  </span>
                  <h3 className="font-['Lexend'] text-xl font-bold text-[#18191c] group-hover:text-emerald-600 transition-colors">
                    Final Delivery &amp; Handover
                  </h3>
                </div>

                <p className="text-[14px] leading-relaxed text-[#6f7174] mb-5">
                  The remaining 20% is paid after the project is completed, final verification is approved, and live production deployment &amp; code handover take place.
                </p>
              </div>

              <div className="pt-4 border-t border-[#f1f3f6] space-y-2 text-[12.5px] text-[#18191c]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Production deployment with custom domain &amp; SSL</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>100% Git repository &amp; full IP handover</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 2 Supporting Policy Blocks: Client Access & Scope Policy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Policy 1: Client Access & Transparency */}
            <div className="p-6 sm:p-7 rounded-[8px] bg-white border border-[#e9ecef] shadow-xs">
              <div className="flex items-center gap-3 mb-3.5">
                <div className="w-10 h-10 rounded-[6px] bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#2563EB] block">
                    Transparency First
                  </span>
                  <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c]">
                    Client Access &amp; Open Progress
                  </h4>
                </div>
              </div>

              <p className="text-[13.5px] leading-relaxed text-[#6f7174] mb-4">
                You retain complete visibility throughout the engineering lifecycle. You have access to project repositories, staging URLs, and direct 1-on-1 communication so you always know where things stand.
              </p>

              <ul className="space-y-2 text-[12.5px] text-[#18191c]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Regular demo links to test real interactive functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Direct WhatsApp and email communication without agency delay</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Full source code and database ownership transferred at launch</span>
                </li>
              </ul>
            </div>

            {/* Policy 2: Scope & Additional Changes */}
            <div className="p-6 sm:p-7 rounded-[8px] bg-white border border-[#e9ecef] shadow-xs">
              <div className="flex items-center gap-3 mb-3.5">
                <div className="w-10 h-10 rounded-[6px] bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F97316]">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#F97316] block">
                    Scope Clarity
                  </span>
                  <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c]">
                    Agreed Scope &amp; Extra Requests
                  </h4>
                </div>
              </div>

              <p className="text-[13.5px] leading-relaxed text-[#6f7174] mb-4">
                To guarantee on-time delivery and fixed pricing, development is strictly based on the requirements finalized before starting.
              </p>

              <ul className="space-y-2 text-[12.5px] text-[#18191c]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>No extra charges for fixes:</strong> Routine bug fixes and refinements within original scope are 100% included.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>New feature requests:</strong> Substantial new capabilities requested after deal finalization are quoted separately with timeline adjustments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Transparent change approvals before any additional work starts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            category="Core Competencies"
            title="Software Disciplines I"
            highlight="Mastered."
            highlightColor="orange"
            description="Four practical engineering pillars tested across multiple commercial software releases."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillDisciplines.map((disc, idx) => (
              <motion.div
                key={disc.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-6 sm:p-7 rounded-[8px] bg-white border border-[#e9ecef] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="font-['Lexend'] text-sm font-bold text-[#F97316] block mb-2">
                    Pillar 0{idx + 1}
                  </span>
                  <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {disc.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-[#6f7174] mb-4">
                    {disc.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f1f3f6] flex flex-wrap gap-1.5">
                  {disc.techs.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-semibold text-[#18191c] bg-[#f4f5f8] hover:bg-blue-50 hover:text-[#2563EB] px-2 py-0.5 rounded-[3px] transition-colors duration-150 cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Client & Team Reviews (All Reviews) */}
      <ReviewsSection />

      {/* Direct Contact Banner */}
      <section className="py-20 bg-[#0F286E] bg-gradient-to-r from-[#0A1B4A] via-[#0F286E] to-[#1E3A8A] text-white border-t border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-['Lexend'] text-2xl font-bold text-white mb-2">
              Ready to start your project?
            </h3>
            <p className="text-[14px] text-blue-100/90">
              Get in touch directly with Sheraz Ali to discuss requirements, timeline, and scope.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button variant="accent" size="lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
