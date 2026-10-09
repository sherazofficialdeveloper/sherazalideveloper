'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Globe, Smartphone, Monitor, Bot, Layers } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { ServicesProcess } from '../components/sections/ServicesProcess';
import { ServiceFlowCards, ServiceFlowItem } from '../components/ui/ServiceFlowCards';
import { fadeUp, staggerContainer } from '../utils/motion';

export const ServicesPage: React.FC = () => {
  const serviceFlowItems: ServiceFlowItem[] = [
    {
      id: 'web-dev',
      number: '01',
      title: 'Website Development',
      shortDescription: 'Responsive web apps, React & Next.js frontends, and typed APIs.',
      fullDescription:
        'I engineer fast, responsive websites and full-stack web applications using React.js, Next.js, and secure Node.js/Express backend API handlers. Every site is built for clean UX, sub-second loading speed, and long-term stability.',
      icon: <Globe className="w-7 h-7" />,
      themeColor: '#2563EB', // Primary Blue
      deliverables: [
        'Responsive websites and single page applications',
        'Modern React.js, Next.js, and Vue.js frontends',
        'Secure Node.js, Express.js, and Nest.js backend APIs',
        'Optimized MySQL and MongoDB database schemas',
      ],
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MySQL', 'MongoDB'],
      href: '/services/website-development',
    },
    {
      id: 'mobile-dev',
      number: '02',
      title: 'Mobile App Development',
      shortDescription: 'Cross-platform iOS and Android apps with React Native.',
      fullDescription:
        'Cross-platform mobile applications engineered for high performance on both Android and iOS devices. Features include offline local storage, instant background data sync, push alerts, and verified testing on real physical phones.',
      icon: <Smartphone className="w-7 h-7" />,
      themeColor: '#F97316', // Accent Orange
      deliverables: [
        'Android and iOS mobile applications with React Native',
        'Offline data saving and instant background sync',
        'User accounts, secure logins, and push notifications',
        'Production builds tested on real Android devices',
      ],
      technologies: ['React Native', 'React Native CLI', 'Android Studio', 'Firebase', 'AsyncStorage', 'TypeScript'],
      href: '/services/mobile-app-development',
    },
    {
      id: 'desktop-dev',
      number: '03',
      title: 'Desktop Development',
      shortDescription: 'Native desktop software for Windows, macOS, and Linux.',
      fullDescription:
        'Standalone desktop applications powered by Electron.js that run seamlessly across Windows, macOS, and Linux. Built for offline business records, embedded SQLite storage, system tray utilities, and high data reliability.',
      icon: <Monitor className="w-7 h-7" />,
      themeColor: '#0F286E', // Deep Navy
      deliverables: [
        'Desktop applications for Windows, macOS, and Linux (Electron.js)',
        'Local file storage with embedded SQLite databases',
        'System tray utilities, global shortcuts, and notifications',
        'Custom tools for business records and file processing',
      ],
      technologies: ['Electron.js', 'React', 'SQLite', 'Node.js IPC', 'Vite', 'Local File Storage'],
      href: '/services/desktop-development',
    },
    {
      id: 'bot-dev',
      number: '04',
      title: 'Bots & Automation',
      shortDescription: 'Background workers, web scrapers, and task automators.',
      fullDescription:
        'Custom background scripts, automated webhook listeners, and web scrapers that eliminate repetitive manual workflows. Engineered with Playwright, Puppeteer, and Node.js for zero human delay.',
      icon: <Bot className="w-7 h-7" />,
      themeColor: '#10B981', // Emerald Green
      deliverables: [
        'Custom background bots and process automation tools',
        'Automated webhook receivers and event triggers',
        'Scheduled tasks, web scrapers, and data sync workers',
        'Eliminates manual, repetitive workflows for your team',
      ],
      technologies: ['Node.js', 'Playwright', 'Puppeteer', 'Express.js', 'Cron Tasks', 'Webhooks'],
      href: '/services/bot-development',
    },
  ];

  return (
    <div className="pt-[72px] sm:pt-[80px] bg-white font-['Lexend']">
      {/* =========================================================================
          SERVICES OVERVIEW HERO BANNER (DEEP BLUE)
          ========================================================================= */}
      <section className="bg-[#0F286E] bg-gradient-to-b from-[#0F286E] via-[#1D4ED8] to-[#112A6E] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-[500px] h-[450px] bg-blue-400/20 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/15 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <motion.div
            initial={false}
            animate="visible"
            variants={staggerContainer(0.1)}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/40 text-[#FDBA74] text-[12px] font-semibold mb-4">
              <Layers className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Full Stack Engineering Services</span>
              <span className="w-1 h-1 rounded-full bg-[#F97316]" />
              <span>4 Core Disciplines</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Lexend'] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-5"
            >
              Services &amp; <span className="text-[#FDBA74]">Capabilities</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-hero-body text-blue-100/90 mb-8 max-w-2xl"
            >
              I build websites, mobile apps, desktop software, and automation bots. Every project uses clean, type-safe architecture and verified production technologies.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <Button variant="accent" size="lg">
                  Discuss A Project
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline-white" size="lg">
                  View Portfolio
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          THE 4 CORE SERVICES (UNIFIED REFERENCE IMAGE FLOW CARDS)
          Website Development + Mobile + Desktop + Bots in circular arrow layout
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            category="What I Offer"
            title="Four Specialized Software"
            highlight="Disciplines."
            highlightColor="orange"
            description="Explore each service below to see what I build, technologies used, and how I can help your project."
          />

          {/* Unified circular arrow sequence matching reference image */}
          <ServiceFlowCards items={serviceFlowItems} defaultActiveIndex={0} showDetailCard={true} />
        </div>
      </section>

      {/* =========================================================================
          MY PROCESS FOR SERVICES (DEDICATED 5-PHASE LIFECYCLE)
          ========================================================================= */}
      <ServicesProcess />

      {/* =========================================================================
          CTA STRIP
          ========================================================================= */}
      <section className="py-20 bg-[#0F286E] bg-gradient-to-r from-[#0A1B4A] via-[#0F286E] to-[#1E3A8A] text-white border-t border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-['Lexend'] text-2xl font-bold text-white mb-2">
              Have a tailored software requirement?
            </h3>
            <p className="text-[14px] text-blue-100/90">
              I can help architect and build your website, mobile app, desktop tool, or automation script.
            </p>
          </div>
          <div>
            <Link href="/contact">
              <Button variant="accent" size="lg">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
