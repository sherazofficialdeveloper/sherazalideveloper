'use client';

import React from 'react';
import {
  Monitor,
  Cpu,
  Layers,
  CheckCircle2,
  Rocket,
} from 'lucide-react';
import { ProcessTimelineSection, ProcessStep } from '../ui/ProcessTimelineSection';

export const DesktopProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      name: 'Specs',
      label: 'SPECS',
      tagline: 'Target OS, Local Filesystem & Hardware Specs',
      duration: 'Days 1–2',
      shortDescPre: 'Defining OS targets across Windows, macOS, Linux, and',
      highlightPhrase: 'hardware peripherals',
      shortDescPost: 'before writing code.',
      overview:
        'Define desktop OS targets (Windows 10/11, macOS Apple Silicon/Intel, Ubuntu Linux), local file system read/write requirements, USB/serial hardware peripherals, and offline data storage rules.',
      icon: <Monitor className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'OS Compatibility Matrix', desc: 'Windows, macOS, and Linux support baselines.' },
        { title: 'Local File System Model', desc: 'File read/write privileges and storage directory schema.' },
        { title: 'Peripheral Hardware Audit', desc: 'Thermal printers, barcode scanners, and USB tools.' },
        { title: 'Offline Persistence Rules', desc: 'Zero-dependency local database architecture.' },
      ],
      techStack: ['Windows', 'macOS', 'Linux', 'Node FS API', 'Peripherals'],
      engineerNote: 'Defining filesystem boundaries upfront ensures seamless OS permission compliance.',
      statusText: 'Specs Approved',
    },
    {
      number: '02',
      name: 'Architecture',
      label: 'IPC DESIGN',
      tagline: 'Electron IPC Design & Embedded SQLite Schemas',
      duration: 'Days 2–4',
      shortDescPre: 'Architecting secure contextBridge IPC channels and',
      highlightPhrase: 'embedded SQLite',
      shortDescPost: 'with WAL mode.',
      overview:
        'Architect secure, asynchronous Inter-Process Communication channels between Electron main process and renderer views. Model embedded local SQLite tables with WAL journaling for zero-latency operations.',
      icon: <Cpu className="w-7 h-7 text-[#F97316]" strokeWidth={1.75} />,
      themeColor: '#F97316',
      accentBg: 'bg-orange-50 border-orange-200/70',
      accentText: 'text-[#EA580C]',
      deliverables: [
        { title: 'Electron ContextBridge IPC', desc: 'Secure async communication without nodeIntegration.' },
        { title: 'ACID Local SQLite Models', desc: 'WAL-mode tables for instant reads and crash resilience.' },
        { title: 'Window & System Tray Design', desc: 'Native framing, tray quick-menu, and minimizations.' },
        { title: 'Offline Sync Architecture', desc: 'Conflict-free background sync to cloud when connected.' },
      ],
      techStack: ['Electron IPC', 'SQLite3', 'ContextBridge', 'WAL Mode'],
      engineerNote: 'Enforcing contextBridge IPC prevents malicious code execution inside desktop views.',
      statusText: 'IPC Locked',
    },
    {
      number: '03',
      name: 'Build',
      label: 'BUILD',
      tagline: 'Electron Shell & Multi-Threaded Workers',
      duration: 'Sprint Phase',
      shortDescPre: 'Building responsive desktop windows and',
      highlightPhrase: 'worker threads',
      shortDescPost: 'for bulk local files.',
      overview:
        'Build responsive desktop windows with modern React/TypeScript frontends. Implement background Node.js worker threads to process heavy file batches without blocking the visual interface.',
      icon: <Layers className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Frameless Window Shell', desc: 'Custom native titlebar, window snapping, and themes.' },
        { title: 'Multi-Threaded Worker Pool', desc: 'Background batch processor for bulk data & exports.' },
        { title: 'System Tray Integration', desc: 'Background daemon state and desktop notifications.' },
        { title: 'Interactive Staging Builds', desc: 'Testable desktop packages shared at each sprint.' },
      ],
      techStack: ['TypeScript', 'Electron.js', 'React.js', 'Worker Threads'],
      engineerNote: 'Offloading intensive tasks to worker threads prevents desktop UI freezes.',
      statusText: 'Build Verified',
    },
    {
      number: '04',
      name: 'Test',
      label: 'TESTING',
      tagline: 'Multi-OS Memory Profiling & Stress Tests',
      duration: 'QA Phase',
      shortDescPre: 'Testing on Windows, macOS, and Linux VMs with',
      highlightPhrase: '50,000+ records',
      shortDescPost: 'and zero memory leaks.',
      overview:
        'Execute multi-OS verification across Windows, macOS, and Linux virtual machines. Profile RAM heap dumps to ensure 0 memory leaks over long continuous runtimes with 50,000+ local records.',
      icon: <CheckCircle2 className="w-7 h-7 text-[#F97316]" strokeWidth={1.75} />,
      themeColor: '#F97316',
      accentBg: 'bg-orange-50 border-orange-200/70',
      accentText: 'text-[#EA580C]',
      deliverables: [
        { title: 'Zero Memory Leak Signoff', desc: 'Stable RAM footprint under 180MB continuous runtime.' },
        { title: 'High-Volume Stress Testing', desc: '50,000+ SQLite database entries with instant query times.' },
        { title: 'Offline Stability Validation', desc: 'Instant application startup with 0ms network lag.' },
        { title: 'Multi-OS Render Verification', desc: 'Identical UI behavior on Windows 11, macOS, and Linux.' },
      ],
      techStack: ['Heap Profiler', 'VirtualBox VMs', 'Offline Tests', 'SQLite Stress'],
      engineerNote: 'Heap profiling ensures your software can run 24/7 without consuming excessive RAM.',
      statusText: 'QA Passed',
    },
    {
      number: '05',
      name: 'Delivery',
      label: 'INSTALLERS',
      tagline: 'Signed Installers (.exe, .dmg, .deb) & Source Code',
      duration: 'Delivery Day',
      shortDescPre: 'Compiling native installers with auto-update channels and',
      highlightPhrase: 'native installers',
      shortDescPost: 'for all operating systems.',
      overview:
        'Package standalone production installers (.exe for Windows, .dmg for macOS, .deb for Linux), configure automated update feeds, and hand over 100% complete source code.',
      icon: <Rocket className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Native Installers (.exe, .dmg, .deb)', desc: 'One-click install setup files for all major OS.' },
        { title: 'Auto-Update Mechanism', desc: 'Background release checks and seamless updates.' },
        { title: '100% Git Repository Handover', desc: 'Complete Electron source code with build scripts.' },
        { title: 'Setup Documentation', desc: 'Clear setup guide for developer maintenance.' },
      ],
      techStack: ['electron-builder', 'NSIS Installer', 'DMG Package', 'Git Handover'],
      engineerNote: 'You receive signed native installers and full repository ownership.',
      statusText: 'Installers Ready',
    },
  ];

  return (
    <ProcessTimelineSection
      id="desktop-workflow"
      category="Desktop Engineering"
      title="From System Specs To Installers"
      highlight="Desktop Architecture."
      highlightColor="blue"
      description="A structured 5-stage workflow for cross-platform desktop software with Electron.js, embedded SQLite, and native installers."
      steps={steps}
      contactSubject="Desktop Software Project Inquiry"
    />
  );
};

