'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Bot,
  CheckCircle2,
  Clock,
  Zap,
  Cpu,
  ArrowRight,
  Network,
  Terminal,
  FileCode,
  Bell,
  RefreshCw,
  Layers,
} from 'lucide-react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { ReviewsSection } from '../../components/sections/ReviewsSection';
import { Contact } from '../../components/sections/Contact';
import { BotProcessSection } from '../../components/sections/BotProcessSection';
import { ServiceFlowCards, ServiceFlowItem } from '../../components/ui/ServiceFlowCards';
import { fadeUp, staggerContainer } from '../../utils/motion';

export const BotDevelopmentPage: React.FC = () => {
  const botFlowItems: ServiceFlowItem[] = [
    {
      id: 'webhooks',
      number: '01',
      title: 'Webhook Listeners',
      shortDescription: 'Catch payment & form webhooks and trigger instant actions.',
      fullDescription:
        'Background listeners that instantly catch webhook events from payment systems, forms, or CRMs and trigger automated actions with zero latency and retry security.',
      icon: <Zap className="w-7 h-7" />,
      themeColor: '#2563EB',
      deliverables: [
        'Payment success listeners',
        'CRM record auto-creation',
        'Instant email and message triggers',
        'Automatic payload verification',
      ],
      technologies: ['Express.js', 'Node.js', 'Stripe Webhooks', 'PM2 Daemon'],
      href: '/contact',
    },
    {
      id: 'cron-tasks',
      number: '02',
      title: 'Cron Automators',
      shortDescription: 'Scheduled scripts to generate reports and sync data.',
      fullDescription:
        'Reliable background scripts running on strict schedules to generate reports, clean databases, and sync external third-party data automatically.',
      icon: <Cpu className="w-7 h-7" />,
      themeColor: '#F97316',
      deliverables: [
        'Hourly and daily automated routines',
        'Automated email summaries',
        'Database maintenance and backups',
        'Error logging and retries',
      ],
      technologies: ['Node-cron', 'Node.js', 'TypeScript', 'MySQL'],
      href: '/contact',
    },
    {
      id: 'scrapers',
      number: '03',
      title: 'Web Scrapers',
      shortDescription: 'Custom bots to extract structured data from online portals.',
      fullDescription:
        'Custom bots built with Playwright and Puppeteer to extract structured data from websites and online catalogues, with automated rate-limiting and CSV exports.',
      icon: <Layers className="w-7 h-7" />,
      themeColor: '#0F286E',
      deliverables: [
        'Headless browser automation',
        'Structured JSON, CSV, and Excel exports',
        'Automatic rate-limiting and retry logic',
        'Proxy rotation support',
      ],
      technologies: ['Playwright', 'Puppeteer', 'Headless Chrome', 'ExcelJS'],
      href: '/contact',
    },
    {
      id: 'notification-bots',
      number: '04',
      title: 'Notification Bots',
      shortDescription: 'Instant alerts on Telegram, Slack, and Discord for events.',
      fullDescription:
        'Instant notification bots that send alerts when critical system events, errors, or customer activities happen, eliminating human delay.',
      icon: <Bot className="w-7 h-7" />,
      themeColor: '#10B981',
      deliverables: [
        'Telegram, Slack, and Discord integrations',
        'Error tracking and urgent alerts',
        'Zero human delay',
        'Custom command interaction',
      ],
      technologies: ['Telegram API', 'Slack Webhooks', 'Discord.js', 'REST API'],
      href: '/contact',
    },
  ];

  const technologies = [
    { name: 'Playwright', role: 'End-to-end browser automation & scraping' },
    { name: 'Puppeteer', role: 'Headless Chrome scripting & PDF generator' },
    { name: 'Node.js', role: 'Event-driven asynchronous automation runtime' },
    { name: 'Express.js', role: 'Lightweight webhook & HTTP receiver endpoints' },
    { name: 'PM2 Daemon', role: 'Continuous 24/7 background process manager' },
    { name: 'Webhooks & APIs', role: 'Third-party system integrations' },
  ];

  const processSteps = [
    { step: '01', title: 'Task Flow Analysis', desc: 'Map out the repetitive manual workflow, target browser operations, API endpoints, and data requirements.' },
    { step: '02', title: 'Scripting & Scraping', desc: 'Build headless browser logic using Playwright/Puppeteer with robust DOM element selectors and data extraction.' },
    { step: '03', title: 'Error Handling', desc: 'Implement automated retry algorithms, network drop recovery, proxy support, and anti-crash guardrails.' },
    { step: '04', title: 'Scheduling', desc: 'Set up cron timers, webhook event listeners, rate limiting, and background queue workers.' },
    { step: '05', title: 'Deployment', desc: 'Deploy 24/7 background process on Linux VPS via PM2, configure Winston audit logs, and alert triggers.' },
  ];

  return (
    <div className="pt-[72px] sm:pt-[80px] bg-white">
      {/* =========================================================================
          CUSTOM HERO COMPOSITION: CONNECTED AUTOMATION NODES & WORKFLOW CANVAS (DEEP BLUE)
          ========================================================================= */}
      <section className="bg-[#0F286E] bg-gradient-to-b from-[#0F286E] via-[#1D4ED8] to-[#112A6E] text-white py-16 sm:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-[500px] h-[450px] bg-orange-500/15 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <motion.div
              initial={false}
              animate="visible"
              variants={staggerContainer(0.1)}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/40 text-[#FDBA74] text-[12px] font-semibold mb-5">
                <Bot className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Service 04 · Automation &amp; Webhooks</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-['Lexend'] text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] mb-5"
              >
                Automation Tools &amp; <br />
                <span className="text-[#FDBA74]">Bots That Save Hours</span> <br />
                of Manual Work.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="font-hero-body text-blue-100/90 mb-8 max-w-xl"
              >
                I engineer custom background bots and automation tools using Playwright, Puppeteer, and Node.js. Web scrapers, webhook listeners, scheduled data syncs, and automated alerting systems.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button variant="accent" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                    Request Automation Bot
                  </Button>
                </Link>
                <a href="#bot-workflow">
                  <Button variant="outline-white" size="lg">
                    View Process
                  </Button>
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 pt-6 border-t border-blue-400/25 flex items-center gap-6 text-[12.5px] text-blue-100/90 font-medium">
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#FDBA74]" />
                  <span>24/7 Silent Operation</span>
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#93C5FD]" />
                  <span>Playwright Scraping</span>
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Automated Retries</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Right Side: Asymmetric Connected Workflow Canvas (5 cols) */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              {/* Floating "AUTO" Watermark */}
              <div
                className="absolute -top-10 -right-4 font-['Lexend'] text-7xl font-black text-blue-400/15 tracking-widest select-none pointer-events-none"
                aria-hidden="true"
              >
                AUTO
              </div>

              {/* Primary Workflow Canvas with Ambient Movement */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full max-w-md rounded-[12px] bg-[#0A1B4A]/90 backdrop-blur-md border border-blue-400/30 hover:border-blue-400/50 shadow-[0_25px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_30px_70px_rgba(249,115,22,0.25)] transition-all duration-300 p-5 overflow-hidden z-10"
              >
                {/* Canvas Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-blue-400/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11.5px] font-bold text-white font-mono">Process Daemon: Active</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/20 text-[#FDBA74] font-bold font-mono">
                    24/7 PM2 Worker
                  </span>
                </div>

                {/* Workflow Nodes Flow */}
                <div className="space-y-3 relative">
                  {/* Node 1: Event Trigger */}
                  <div className="p-3 rounded-[6px] bg-[#0F2666]/90 border border-blue-400/20 hover:border-blue-300/40 hover:bg-[#143285] hover:translate-x-1 transition-all duration-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-[4px] bg-[#2563EB]/30 text-blue-200 flex items-center justify-center font-bold text-xs font-mono">
                        01
                      </div>
                      <div>
                        <span className="text-[9.5px] text-blue-200/70 font-mono block">TRIGGER</span>
                        <h5 className="font-['Lexend'] text-[12.5px] font-bold text-white">
                          Webhook / Scheduled Cron
                        </h5>
                      </div>
                    </div>
                    <span className="text-[9.5px] font-mono text-emerald-400 font-bold">● Listening</span>
                  </div>

                  {/* Connecting Arrow */}
                  <div className="flex justify-center -my-1.5">
                    <div className="w-0.5 h-4 bg-gradient-to-b from-[#2563EB] to-[#F97316]" />
                  </div>

                  {/* Node 2: Automated Execution */}
                  <div className="p-3 rounded-[6px] bg-[#0F2666]/90 border border-blue-400/20 hover:border-orange-400/40 hover:bg-[#143285] hover:translate-x-1 transition-all duration-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-[4px] bg-[#F97316]/20 text-[#FDBA74] flex items-center justify-center font-bold text-xs font-mono">
                        02
                      </div>
                      <div>
                        <span className="text-[9.5px] text-blue-200/70 font-mono block">SCRAPE &amp; PARSE</span>
                        <h5 className="font-['Lexend'] text-[12.5px] font-bold text-white">
                          Playwright Headless Browser
                        </h5>
                      </div>
                    </div>
                    <span className="text-[9.5px] font-mono text-[#FDBA74] font-bold">Running</span>
                  </div>

                  {/* Connecting Arrow */}
                  <div className="flex justify-center -my-1.5">
                    <div className="w-0.5 h-4 bg-gradient-to-b from-[#F97316] to-emerald-500" />
                  </div>

                  {/* Node 3: Database & Notification Output */}
                  <div className="p-3 rounded-[6px] bg-[#0F2666]/90 border border-blue-400/20 hover:border-emerald-400/40 hover:bg-[#143285] hover:translate-x-1 transition-all duration-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-[4px] bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
                        03
                      </div>
                      <div>
                        <span className="text-[9.5px] text-blue-200/70 font-mono block">DISPATCH</span>
                        <h5 className="font-['Lexend'] text-[12.5px] font-bold text-white">
                          Database Stored &amp; Alert Sent
                        </h5>
                      </div>
                    </div>
                    <span className="text-[9.5px] font-mono text-emerald-400 font-bold">Success ✓</span>
                  </div>
                </div>
              </motion.div>

              {/* Offset Overlapping Floating Card */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 p-4 rounded-[10px] bg-white text-[#18191c] border border-[#e2e8f0] hover:border-emerald-400/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 z-20 w-52 cursor-default"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-['Lexend'] font-bold text-emerald-600 uppercase tracking-wider">
                    Error Resilience
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h5 className="font-['Lexend'] text-[13px] font-bold text-[#18191c]">
                  Auto Retry &amp; Guardrails
                </h5>
                <p className="text-[11px] text-[#6f7174]">Exponential backoff retry</p>
              </motion.div>

              {/* Floating Top Badge */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-2 px-3.5 py-1.5 rounded-full bg-[#F97316] text-white font-['Lexend'] text-[11px] font-bold shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-20 flex items-center gap-1.5 cursor-default"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Zero Human Delay</span>
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
            title="What I Automate For"
            highlight="Your Operations."
            highlightColor="orange"
            description="Eliminate tedious manual work with reliable background automation scripts."
          />

          <ServiceFlowCards items={botFlowItems} defaultActiveIndex={0} showDetailCard={true} />
        </div>
      </section>

      {/* =========================================================================
          BOT WORKFLOW (CIRCULAR CONTINUOUS LIFECYCLE)
          ========================================================================= */}
      <BotProcessSection />

      {/* =========================================================================
          BOT TECHNOLOGIES
          ========================================================================= */}
      <section className="py-20 bg-[#f8f9fa] border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            category="Automation Stack"
            title="Bot Technologies In Active"
            highlight="Production."
            highlightColor="orange"
            description="Proven tools that handle high volumes of events without crashing."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-[6px] bg-white border border-[#e9ecef] hover:border-[#F97316]/40 hover:-translate-y-1 hover:shadow-xs transition-all duration-200 cursor-default"
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
          KEY ADVANTAGES
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-slate-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <Clock className="w-8 h-8 text-[#2563EB] mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-2 group-hover:text-[#2563EB] transition-colors">Save Hundreds of Hours</h4>
              <p className="text-[13.5px] leading-relaxed text-[#6f7174]">
                Tasks that take your team hours every week are completed by automated scripts in just seconds.
              </p>
            </div>

            <div className="p-7 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-slate-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <Zap className="w-8 h-8 text-[#F97316] mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
              <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-2 group-hover:text-[#F97316] transition-colors">Zero Clerical Errors</h4>
              <p className="text-[13.5px] leading-relaxed text-[#6f7174]">
                Automations strictly follow coded rules without typos, missed notifications, or data copy-paste errors.
              </p>
            </div>

            <div className="p-7 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-slate-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <Cpu className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-2 group-hover:text-emerald-600 transition-colors">24/7 Silent Operation</h4>
              <p className="text-[13.5px] leading-relaxed text-[#6f7174]">
                Background daemons run continuously day and night, handling sync tasks while you and your team sleep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bots & Automation Development Client Reviews */}
      <ReviewsSection serviceFilter="automation" />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};
