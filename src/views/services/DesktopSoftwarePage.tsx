'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Monitor,
  CheckCircle2,
  HardDrive,
  Cpu,
  ShieldCheck,
  FolderCog,
  ArrowRight,
  Database,
  Layers,
  Terminal,
  Zap,
} from 'lucide-react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { ReviewsSection } from '../../components/sections/ReviewsSection';
import { Contact } from '../../components/sections/Contact';
import { DesktopProcessSection } from '../../components/sections/DesktopProcessSection';
import { ServiceFlowCards, ServiceFlowItem } from '../../components/ui/ServiceFlowCards';
import { fadeUp, staggerContainer } from '../../utils/motion';

export const DesktopSoftwarePage: React.FC = () => {
  const desktopFlowItems: ServiceFlowItem[] = [
    {
      id: 'biz-mgmt',
      number: '01',
      title: 'Business Software',
      shortDescription: 'POS, invoices, and inventory records with embedded SQLite.',
      fullDescription:
        'Dedicated desktop software for point-of-sale, invoices, inventory records, and local data filing. Runs fast on Windows, macOS, and Linux without browser tab limitations.',
      icon: <Monitor className="w-7 h-7" />,
      themeColor: '#2563EB',
      deliverables: [
        'Runs on Windows, macOS, and Linux',
        'Embedded SQLite local database',
        'Instant launch without browser tabs',
        'ACID-compliant local persistence',
      ],
      technologies: ['Electron.js', 'React', 'SQLite', 'TypeScript'],
      href: '/contact',
    },
    {
      id: 'batch-processors',
      number: '02',
      title: 'Batch Processors',
      shortDescription: 'Direct hard drive read & write without file upload limits.',
      fullDescription:
        'Tools designed to process thousands of local files, images, logs, or spreadsheets without browser upload limits. Direct disk read/write for high-throughput business data extraction.',
      icon: <Cpu className="w-7 h-7" />,
      themeColor: '#F97316',
      deliverables: [
        'Direct read & write to your hard drive',
        'Fast background processing',
        'PDF, CSV, and Excel exports',
        'Multi-threaded worker threads',
      ],
      technologies: ['Node.js fs', 'Worker Threads', 'ExcelJS', 'PDFKit'],
      href: '/contact',
    },
    {
      id: 'tray-utilities',
      number: '03',
      title: 'System Tray Tools',
      shortDescription: 'Background utilities with global hotkeys and alerts.',
      fullDescription:
        'Quiet programs that sit in your system tray to monitor files, run automated scripts, and show notifications. Instant accessibility via custom global keyboard shortcuts.',
      icon: <Zap className="w-7 h-7" />,
      themeColor: '#0F286E',
      deliverables: [
        'Custom system tray menus',
        'Global keyboard shortcuts',
        'Native desktop notifications',
        'Automated local file watchers',
      ],
      technologies: ['Electron Tray', 'IPC Main', 'Global Shortcuts', 'Native OS API'],
      href: '/contact',
    },
    {
      id: 'hardware-tools',
      number: '04',
      title: 'Hardware & Scanners',
      shortDescription: 'Thermal receipt printers, USB barcode scanners, and ports.',
      fullDescription:
        'Desktop applications that talk directly to thermal receipt printers, USB barcode scanners, or serial ports. Works 100% offline without internet for maximum reliability.',
      icon: <HardDrive className="w-7 h-7" />,
      themeColor: '#10B981',
      deliverables: [
        'Direct USB communication',
        'Works 100% offline without internet',
        'High commercial stability',
        'POS printer ESC/POS integration',
      ],
      technologies: ['Node SerialPort', 'USB Direct', 'Offline SQLite', 'Electron Packager'],
      href: '/contact',
    },
  ];

  const technologies = [
    { name: 'Electron.js', role: 'Desktop application runtime' },
    { name: 'React', role: 'Interactive user interface' },
    { name: 'Vite', role: 'Fast compilation & bundling' },
    { name: 'Node.js', role: 'Operating system access & files' },
    { name: 'SQLite', role: 'Embedded offline database' },
    { name: 'Multi-OS Packager', role: 'Generates .exe, .dmg, and .deb files' },
  ];

  const processSteps = [
    { step: '01', title: 'Requirements', desc: 'Define target OS platforms (Windows, macOS, Linux), local file access needs, and hardware integrations.' },
    { step: '02', title: 'UI/Architecture', desc: 'Design desktop window layout, system tray menus, modal views, and main-to-renderer IPC channels.' },
    { step: '03', title: 'Development', desc: 'Build the desktop application using Electron.js, React UI components, Node.js runtime, and embedded SQLite.' },
    { step: '04', title: 'Testing', desc: 'Perform multi-OS testing, memory leak profiling, offline operations checks, and crash resilience verification.' },
    { step: '05', title: 'Build', desc: 'Compile native binaries, execute cryptographic code signing, and package .exe, .dmg, or .deb installers.' },
    { step: '06', title: 'Distribute', desc: 'Set up seamless auto-updater feeds, create user distribution links, and hand over the full repository.' },
  ];

  return (
    <div className="pt-[72px] sm:pt-[80px] bg-white">
      {/* =========================================================================
          CUSTOM HERO COMPOSITION: NATIVE DESKTOP WINDOW & SYSTEM MOCKUP (DEEP BLUE)
          ========================================================================= */}
      <section className="bg-[#0F286E] bg-gradient-to-b from-[#0F286E] via-[#1D4ED8] to-[#112A6E] text-white py-16 sm:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-[500px] h-[450px] bg-blue-400/20 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/15 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column (7 cols) */}
            <motion.div
              initial={false}
              animate="visible"
              variants={staggerContainer(0.1)}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/20 border border-blue-400/30 text-blue-200 text-[12px] font-semibold mb-5">
                <Monitor className="w-3.5 h-3.5" />
                <span>Service 03 · Native Desktop Software</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-['Lexend'] text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] mb-5"
              >
                Custom Desktop <br />
                <span className="text-[#FDBA74]">Software Applications</span> <br />
                for Real Business Needs.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="font-hero-body text-blue-100/90 mb-8 max-w-xl"
              >
                I build cross-platform desktop applications for Windows, macOS, and Linux using Electron.js. Standalone software with embedded SQLite storage, native OS access, and zero internet dependency.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button variant="accent" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                    Request Desktop Software
                  </Button>
                </Link>
                <a href="#desktop-workflow">
                  <Button variant="outline-white" size="lg">
                    View Process
                  </Button>
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 pt-6 border-t border-blue-400/25 flex items-center gap-6 text-[12.5px] text-blue-100/90 font-medium">
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#93C5FD]" />
                  <span>Windows · Mac · Linux</span>
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#FDBA74]" />
                  <span>Offline SQLite DB</span>
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct File Access</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Right Side: Asymmetric Multi-Window Composition (5 cols) */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              {/* Floating "DESK" Watermark */}
              <div
                className="absolute -top-10 -right-4 font-['Lexend'] text-7xl font-black text-blue-400/15 tracking-widest select-none pointer-events-none"
                aria-hidden="true"
              >
                DESK
              </div>

              {/* Main Desktop Window with Ambient Motion */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full max-w-md rounded-[12px] bg-[#0A1B4A]/90 backdrop-blur-md border border-blue-400/30 hover:border-blue-400/50 shadow-[0_25px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_30px_70px_rgba(37,99,235,0.25)] transition-all duration-300 overflow-hidden z-10"
              >
                {/* OS Desktop Title Bar */}
                <div className="bg-[#0F2666]/90 px-4 py-2.5 border-b border-blue-400/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-3.5 h-3.5 text-[#93C5FD]" />
                    <span className="text-[11.5px] font-sans font-bold text-white">InventoryDesk — Windows &amp; Mac</span>
                  </div>
                  {/* Minimize / Maximize / Close Buttons */}
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600 hover:scale-110 transition-transform" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600 hover:scale-110 transition-transform" />
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-600/80 hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Software Workspace Preview */}
                <div className="p-4 flex gap-3 text-[12px] font-sans">
                  {/* Sidebar Navigation */}
                  <div className="w-24 shrink-0 space-y-1 border-r border-blue-400/20 pr-2">
                    <div className="p-1 rounded bg-[#2563EB]/30 text-blue-200 font-bold text-[10.5px]">
                      Dashboard
                    </div>
                    <div className="p-1 rounded text-blue-200/70 hover:text-white hover:bg-[#0F2666] transition-colors text-[10.5px] cursor-default">
                      SQLite DB
                    </div>
                    <div className="p-1 rounded text-blue-200/70 hover:text-white hover:bg-[#0F2666] transition-colors text-[10.5px] cursor-default">
                      Files IPC
                    </div>
                  </div>

                  {/* Main Work Area */}
                  <div className="flex-1 space-y-2.5">
                    <div className="flex items-center justify-between text-[10.5px]">
                      <span className="font-bold text-white">Local Database</span>
                      <span className="text-emerald-400 font-mono text-[9.5px]">● Connected</span>
                    </div>

                    {/* Mock Data Table */}
                    <div className="p-2.5 rounded-[6px] bg-[#0F2666]/90 border border-blue-400/20 hover:border-blue-300/40 hover:bg-[#143285] transition-colors space-y-1.5 text-[10.5px]">
                      <div className="flex justify-between text-blue-200/70 text-[9.5px] pb-1 border-b border-blue-400/20">
                        <span>Record ID</span>
                        <span>Item Name</span>
                        <span>Status</span>
                      </div>
                      <div className="flex justify-between text-blue-100 font-mono text-[10px]">
                        <span>#0491</span>
                        <span>Local Export.csv</span>
                        <span className="text-emerald-400">Saved</span>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-[#06112C]/90 border border-blue-400/20 text-[9.5px] font-mono text-blue-200/80">
                      System Tray: Active · 0% Cloud Dependency
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Offset Overlapping Secondary Floating Window */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 p-4 rounded-[10px] bg-white text-[#18191c] border border-[#e2e8f0] hover:border-blue-400/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 z-20 w-52 cursor-default"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-['Lexend'] font-bold text-[#2563EB] uppercase tracking-wider">
                    Native Electron
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h5 className="font-['Lexend'] text-[13px] font-bold text-[#18191c]">
                  Multi-OS Packaging
                </h5>
                <p className="text-[11px] text-[#6f7174]">.exe · .dmg · .deb files</p>
              </motion.div>

              {/* Floating Top Badge */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-2 px-3.5 py-1.5 rounded-full bg-[#2563EB] text-white font-['Lexend'] text-[11px] font-bold shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-20 flex items-center gap-1.5 cursor-default"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>100% Offline Ready</span>
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
            highlight="Desktop Systems."
            highlightColor="blue"
            description="Standalone programs built for heavy data processing, local stability, and speed."
          />

          <ServiceFlowCards items={desktopFlowItems} defaultActiveIndex={0} showDetailCard={true} />
        </div>
      </section>

      {/* =========================================================================
          DESKTOP ROADMAP
          ========================================================================= */}
      <DesktopProcessSection />

      {/* =========================================================================
          DESKTOP TECH STACK
          ========================================================================= */}
      <section className="py-20 bg-[#f8f9fa] border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            category="Desktop Stack"
            title="Desktop Technologies In Active"
            highlight="Production."
            highlightColor="blue"
            description="Engineered using the proven Electron and Node.js desktop ecosystem."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
          KEY ADVANTAGES
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-slate-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <HardDrive className="w-8 h-8 text-[#2563EB] mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-2 group-hover:text-[#2563EB] transition-colors">Works Without Internet</h4>
              <p className="text-[13.5px] leading-relaxed text-[#6f7174]">
                Desktop applications run locally on your machine with embedded SQLite databases, without depending on external web connections.
              </p>
            </div>

            <div className="p-7 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-slate-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <FolderCog className="w-8 h-8 text-[#F97316] mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
              <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-2 group-hover:text-[#F97316] transition-colors">Direct Local File Access</h4>
              <p className="text-[13.5px] leading-relaxed text-[#6f7174]">
                Process local folders, generate reports, and read files instantly without browser upload limits or speed restrictions.
              </p>
            </div>

            <div className="p-7 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-slate-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-2 group-hover:text-emerald-600 transition-colors">Installer Packages (.exe / .dmg)</h4>
              <p className="text-[13.5px] leading-relaxed text-[#6f7174]">
                I provide ready-to-run installation files for Windows, Mac, and Linux that your team can install in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Software Development Client Reviews */}
      <ReviewsSection serviceFilter="desktop" />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};
