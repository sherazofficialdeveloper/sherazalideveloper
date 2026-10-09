'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Globe,
  Layout,
  Server,
  Database,
  Shield,
  Zap,
  CheckCircle2,
  Code2,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Monitor,
} from 'lucide-react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { ReviewsSection } from '../../components/sections/ReviewsSection';
import { Contact } from '../../components/sections/Contact';
import { WebProcessSection } from '../../components/sections/WebProcessSection';
import { ServiceFlowCards, ServiceFlowItem } from '../../components/ui/ServiceFlowCards';
import { fadeUp, staggerContainer, cardReveal } from '../../utils/motion';

export const WebsiteDevelopmentPage: React.FC = () => {
  const webFlowItems: ServiceFlowItem[] = [
    {
      id: 'portals',
      number: '01',
      title: 'Websites & Portals',
      shortDescription: 'Fast, responsive corporate websites that convert visitors.',
      fullDescription:
        'Fast, responsive websites that explain your business clearly and help customers get in touch. Built with semantic SEO markup, mobile-first design, and sub-second load times.',
      icon: <Globe className="w-7 h-7" />,
      themeColor: '#2563EB',
      deliverables: [
        'Works on all phones and computers',
        'Fast loading times',
        'Clean layout and clear text',
        'SEO and mobile optimized',
      ],
      technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'TypeScript'],
      href: '/contact',
    },
    {
      id: 'spas',
      number: '02',
      title: 'Web Applications (SPAs)',
      shortDescription: 'Interactive tools with instant updates and no page reload.',
      fullDescription:
        'Interactive web tools that feel like software, with instant page updates and no reloading. State-managed interfaces with user authentication, dashboard analytics, and reactive views.',
      icon: <Layout className="w-7 h-7" />,
      themeColor: '#F97316',
      deliverables: [
        'React.js and Next.js frameworks',
        'Instant user feedback',
        'User account login & roles',
        'Smooth client-side routing',
      ],
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Zustand', 'Tailwind CSS'],
      href: '/contact',
    },
    {
      id: 'apis',
      number: '03',
      title: 'Secure Backend APIs',
      shortDescription: 'Reliable server endpoints handling auth, queries, and sync.',
      fullDescription:
        'Reliable server endpoints that handle user logins, forms, database queries, and third-party integrations with strict validation, rate limiting, and secure token authorization.',
      icon: <Server className="w-7 h-7" />,
      themeColor: '#0F286E',
      deliverables: [
        'Node.js and Express.js servers',
        'MySQL and MongoDB databases',
        'Password encryption and security',
        'JWT authorization route guards',
      ],
      technologies: ['Node.js', 'Express.js', 'Nest.js', 'MySQL', 'MongoDB', 'JWT'],
      href: '/contact',
    },
    {
      id: 'dashboards',
      number: '04',
      title: 'Business Dashboards',
      shortDescription: 'Custom portals to view orders, manage content, and export.',
      fullDescription:
        'Custom dashboards where you and your team can view orders, manage content, filter business records, and generate automated CSV or PDF summary reports.',
      icon: <Database className="w-7 h-7" />,
      themeColor: '#10B981',
      deliverables: [
        'Role permissions for staff',
        'Data search and filtering',
        'CSV and PDF exports',
        'Real-time database queries',
      ],
      technologies: ['React.js', 'Tailwind CSS', 'Chart.js', 'REST API', 'MySQL'],
      href: '/contact',
    },
  ];

  const technologies = [
    { name: 'React.js', role: 'Interactive user interface' },
    { name: 'Next.js', role: 'Full-stack React framework' },
    { name: 'Vue.js', role: 'Lightweight web interfaces' },
    { name: 'TypeScript', role: 'Type safety and stability' },
    { name: 'Tailwind CSS', role: 'Modern responsive styling' },
    { name: 'Node.js', role: 'Fast backend server runtime' },
    { name: 'Express.js', role: 'Web API route handlers' },
    { name: 'Nest.js', role: 'Structured backend architecture' },
    { name: 'MySQL', role: 'Structured relational database' },
    { name: 'MongoDB', role: 'Flexible document storage' },
  ];

  const processSteps = [
    { step: '01', title: 'Understand', desc: 'Review your business objectives, target audience, must-have features, and brand requirements.' },
    { step: '02', title: 'Plan', desc: 'Architect the sitemap, database schema, API endpoint contracts, and technical infrastructure.' },
    { step: '03', title: 'Design', desc: 'Create clear user journeys, clean interface layouts, component hierarchy, and mobile breakpoints.' },
    { step: '04', title: 'Develop', desc: 'Code type-safe React/Next.js frontends and secure Node.js/Express backend API endpoints.' },
    { step: '05', title: 'Test', desc: 'Verify cross-browser stability (Chrome, Safari, Firefox), responsive layout, forms, and page speed.' },
    { step: '06', title: 'Launch', desc: 'Deploy to production (Vercel/VPS), connect custom domain and SSL, and hand over the repository.' },
  ];

  return (
    <div className="pt-[72px] sm:pt-[80px] bg-white">
      {/* =========================================================================
          CUSTOM HERO COMPOSITION: BROWSER WINDOW & INTERACTIVE PANELS MOCKUP
          ========================================================================= */}
      <section className="bg-[#0F286E] bg-gradient-to-b from-[#0F286E] via-[#1D4ED8] to-[#112A6E] text-white py-16 sm:py-24 lg:py-28 relative overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-10 w-[500px] h-[450px] bg-blue-400/20 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/15 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <motion.div
              initial={false}
              animate="visible"
              variants={staggerContainer(0.1)}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/20 border border-blue-400/30 text-blue-200 text-[12px] font-semibold mb-5">
                <Globe className="w-3.5 h-3.5" />
                <span>Service 01 · Full-Stack Web Development</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-['Lexend'] text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] mb-5"
              >
                Modern Websites &amp; <br />
                <span className="text-[#FDBA74]">Web Applications</span> <br />
                Built for Business.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="font-hero-body text-blue-100/90 mb-8 max-w-xl"
              >
                I engineer fast, responsive websites and web applications with type-safe TypeScript, modern React &amp; Next.js architecture, and secure backend APIs.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button variant="accent" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                    Request A Website
                  </Button>
                </Link>
                <a href="#workflow">
                  <Button variant="outline-white" size="lg">
                    View Process
                  </Button>
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 pt-6 border-t border-blue-400/25 flex items-center gap-6 text-[12.5px] text-blue-100/90 font-medium">
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#FDBA74]" />
                  <span>100% Responsive</span>
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#93C5FD]" />
                  <span>Fast Page Speed</span>
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Secure Backend</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Right Side: Asymmetric Layered Browser Composition (5 cols) */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              {/* Floating "WEB" Watermark Label */}
              <div
                className="absolute -top-10 -right-4 font-['Lexend'] text-7xl font-black text-blue-400/15 tracking-widest select-none pointer-events-none"
                aria-hidden="true"
              >
                WEB
              </div>

              {/* Main Primary Browser Frame */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full max-w-md rounded-[12px] bg-[#0A1B4A]/90 backdrop-blur-md border border-blue-400/30 hover:border-blue-400/50 shadow-[0_25px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_30px_70px_rgba(37,99,235,0.3)] transition-all duration-300 overflow-hidden z-10"
              >
                {/* Browser Tab Bar */}
                <div className="bg-[#0F2666]/90 px-4 py-3 border-b border-blue-400/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:scale-110 transition-transform" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:scale-110 transition-transform" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:scale-110 transition-transform" />
                  </div>
                  <div className="px-3.5 py-1 rounded-full bg-[#0A1B4A] text-blue-200 text-[11px] font-mono border border-blue-400/20 flex items-center gap-2">
                    <span className="text-emerald-400">https://</span>
                    <span>app.production.com</span>
                  </div>
                  <div className="w-4" />
                </div>

                {/* Inner Browser Layout */}
                <div className="p-5 space-y-3.5 font-mono text-[12px]">
                  {/* Top Bar Preview */}
                  <div className="flex items-center justify-between pb-2 border-b border-blue-400/20 text-blue-200/80 text-[11px]">
                    <span className="font-bold text-white font-sans flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                      Portal Dashboard
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-600/30 text-blue-200 border border-blue-400/30">
                      Live SPA
                    </span>
                  </div>

                  {/* Mock Content Blocks */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 rounded bg-[#0F2666]/90 border border-blue-400/20 hover:border-blue-300/40 hover:bg-[#143285] transition-colors">
                      <span className="text-[10px] text-blue-200/70 block mb-1">Weekly Traffic</span>
                      <span className="text-base font-bold text-white font-sans">+142%</span>
                    </div>
                    <div className="p-3 rounded bg-[#0F2666]/90 border border-blue-400/20 hover:border-blue-300/40 hover:bg-[#143285] transition-colors">
                      <span className="text-[10px] text-blue-200/70 block mb-1">Server Latency</span>
                      <span className="text-base font-bold text-emerald-400 font-sans">28ms</span>
                    </div>
                  </div>

                  {/* Code Architecture Pill */}
                  <div className="p-3 rounded-[6px] bg-[#06112C]/90 border border-blue-400/20 text-blue-100 text-[11px] leading-relaxed">
                    <span className="text-[#93C5FD]">const</span> webApp = <span className="text-[#FDBA74]">createApp</span>({'{'}
                    <br />
                    &nbsp;&nbsp;framework: <span className="text-emerald-400">'React.js &amp; Next.js'</span>,
                    <br />
                    &nbsp;&nbsp;apiRuntime: <span className="text-emerald-400">'Node.js &amp; Express'</span>,
                    <br />
                    &nbsp;&nbsp;typeSafe: <span className="text-[#93C5FD]">true</span>
                    <br />
                    {'}'});
                  </div>
                </div>
              </motion.div>

              {/* Offset Overlapping Floating UI Card */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 p-4 rounded-[10px] bg-white text-[#18191c] border border-[#e2e8f0] hover:border-blue-400/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 z-20 w-52 cursor-default"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10.5px] font-['Lexend'] font-bold text-[#F97316] uppercase tracking-wider">
                    Full-Stack Build
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h5 className="font-['Lexend'] text-[13px] font-bold text-[#18191c]">
                  React.js + Node.js
                </h5>
                <p className="text-[11px] text-[#6f7174]">Type-Safe API Contracts</p>
              </motion.div>

              {/* Floating Top-Right Technology Badge */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 px-3.5 py-1.5 rounded-full bg-[#2563EB] text-white font-['Lexend'] text-[11px] font-bold shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-20 flex items-center gap-1.5 cursor-default"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Responsive &amp; Fast</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT I BUILD SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            category="Deliverables"
            title="What I Build For"
            highlight="The Web."
            highlightColor="blue"
            description="Clear web solutions built for actual business operations and users."
          />

          <ServiceFlowCards items={webFlowItems} defaultActiveIndex={0} showDetailCard={true} />
        </div>
      </section>

      {/* Web Development Structured Workflow */}
      <WebProcessSection />

      {/* =========================================================================
          WEB TECHNOLOGIES
          ========================================================================= */}
      <section className="py-20 bg-[#f8f9fa] border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            category="Tech Stack"
            title="Web Technologies In Active"
            highlight="Production."
            highlightColor="blue"
            description="Modern, tested tools used to build stable websites."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-[6px] bg-white border border-[#e9ecef] hover:border-[#2563EB]/40 hover:-translate-y-1 hover:shadow-xs transition-all duration-200 cursor-default"
              >
                <h4 className="font-['Lexend'] text-[15px] font-bold text-[#18191c] mb-1">
                  {tech.name}
                </h4>
                <p className="text-[12px] text-[#6f7174]">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY THIS SERVICE
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-slate-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <Zap className="w-8 h-8 text-[#F97316] mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-2 group-hover:text-[#F97316] transition-colors">Speed &amp; Performance</h4>
              <p className="text-[13.5px] leading-relaxed text-[#6f7174]">
                Clean markup, fast page loads, and responsive layouts that keep visitors on your website.
              </p>
            </div>

            <div className="p-7 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-slate-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <Shield className="w-8 h-8 text-[#2563EB] mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
              <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-2 group-hover:text-[#2563EB] transition-colors">Data Security</h4>
              <p className="text-[13.5px] leading-relaxed text-[#6f7174]">
                Protected forms, safe authentication, and secure database connections prevent data leaks.
              </p>
            </div>

            <div className="p-7 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-slate-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <Server className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-2 group-hover:text-emerald-600 transition-colors">Direct Communication</h4>
              <p className="text-[13.5px] leading-relaxed text-[#6f7174]">
                You talk directly to me, the engineer building your site. No agency middlemen or confusing jargon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Development Client Reviews */}
      <ReviewsSection serviceFilter="website" />

      {/* Direct Contact Form */}
      <Contact />
    </div>
  );
};
