'use client';

import React from 'react';
import {
  ClipboardList,
  Cpu,
  Code2,
  ShieldCheck,
  Rocket,
} from 'lucide-react';
import { ProcessTimelineSection, ProcessStep } from '../ui/ProcessTimelineSection';

export const ServicesProcess: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      name: 'Understand',
      label: 'DISCOVERY',
      tagline: 'Discovery & Client Requirements',
      duration: 'Days 1–2',
      shortDescPre: 'Reviewing project goals, feature lists, and',
      highlightPhrase: 'technical requirements',
      shortDescPost: 'before writing code.',
      overview:
        'We review your goals, feature list, and target audience. I ask the right questions early to avoid scope creep and identify technical requirements.',
      icon: <ClipboardList className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Feature Breakdown Inventory', desc: 'Acceptance criteria and core deliverables.' },
        { title: 'Platform Selection Blueprint', desc: 'Web, Mobile, Desktop or Bot architecture.' },
        { title: 'Milestone Delivery Roadmap', desc: 'Sprint schedules with live checkpoints.' },
        { title: 'Direct Communication Setup', desc: '1-on-1 direct WhatsApp and email access.' },
      ],
      techStack: ['Scope Map', 'Architecture Blueprint', 'Figma Brief', 'Milestone Spec'],
      engineerNote: 'Asking clear technical questions upfront prevents unexpected scope creep.',
      statusText: 'Requirements Locked',
    },
    {
      number: '02',
      name: 'Plan',
      label: 'PLANNING',
      tagline: 'System Architecture & Blueprint',
      duration: 'Days 2–4',
      shortDescPre: 'Organizing database models and',
      highlightPhrase: 'API endpoint structures',
      shortDescPost: 'for smooth scalability.',
      overview:
        'I organize the database models, API endpoint structures, and user interface wireframes before writing code to ensure smooth scalability.',
      icon: <Cpu className="w-7 h-7 text-[#F97316]" strokeWidth={1.75} />,
      themeColor: '#F97316',
      accentBg: 'bg-orange-50 border-orange-200/70',
      accentText: 'text-[#EA580C]',
      deliverables: [
        { title: 'Database Schema Modeling', desc: 'Relational or document schema designs.' },
        { title: 'REST API Payload Contracts', desc: 'Typed request and response contracts.' },
        { title: 'User Journey Flowcharts', desc: 'UX navigation and logic branch maps.' },
        { title: 'Security & Auth Protocol', desc: 'JWT token handling and protected routes.' },
      ],
      techStack: ['MySQL', 'PostgreSQL', 'MongoDB', 'REST APIs', 'JWT Auth'],
      engineerNote: 'Clean contracts between client and server make development fast and reliable.',
      statusText: 'Architecture Approved',
    },
    {
      number: '03',
      name: 'Build',
      label: 'BUILD',
      tagline: 'Clean Code & Continuous Progress',
      duration: 'Sprint Phase',
      shortDescPre: 'Writing clean, modular, and',
      highlightPhrase: 'type-safe code',
      shortDescPost: 'with regular milestones.',
      overview:
        'I write clean, modular, and type-safe code using TypeScript and modern frameworks. You get regular milestone demonstrations as features are completed.',
      icon: <Code2 className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Interactive Frontend UI', desc: 'High-performance user interfaces and responsive layouts.' },
        { title: 'Secure Backend Endpoints', desc: 'Robust server handlers with input validation.' },
        { title: 'Database CRUD Logic', desc: 'Fast, indexed queries and ACID transactions.' },
        { title: 'Milestone Demos', desc: 'Working interactive demos at every phase.' },
      ],
      techStack: ['TypeScript', 'React.js', 'Next.js', 'React Native', 'Electron.js'],
      engineerNote: 'Building with modular architecture makes future features easy to add.',
      statusText: 'Active Development',
    },
    {
      number: '04',
      name: 'Test',
      label: 'TESTING',
      tagline: 'Cross-Device & Stability Verification',
      duration: 'QA Phase',
      shortDescPre: 'Testing on real phones, desktop OS, and',
      highlightPhrase: 'browsers',
      shortDescPost: 'to eliminate bugs.',
      overview:
        'The software is tested on real Android devices, desktop operating systems, and browsers to catch performance bottlenecks, styling bugs, and edge cases.',
      icon: <ShieldCheck className="w-7 h-7 text-[#F97316]" strokeWidth={1.75} />,
      themeColor: '#F97316',
      accentBg: 'bg-orange-50 border-orange-200/70',
      accentText: 'text-[#EA580C]',
      deliverables: [
        { title: 'Cross-Device & Browser Checks', desc: 'Tested across phones, tablets, and computers.' },
        { title: 'Security & Input Validation', desc: 'Sanitizing data and protecting from common attacks.' },
        { title: 'Error Recovery & Logging', desc: 'Handling offline modes and network failures.' },
        { title: 'Performance Profiling', desc: 'Optimizing load speed and memory footprint.' },
      ],
      techStack: ['Real Androids', 'Virtual Machines', 'DevTools', 'Audit Tools'],
      engineerNote: 'Rigorous testing before release ensures zero surprises on launch day.',
      statusText: 'Quality Verified',
    },
    {
      number: '05',
      name: 'Deliver',
      label: 'DELIVER',
      tagline: 'Live Launch & Full Code Handover',
      duration: 'Launch Day',
      shortDescPre: 'Configuring production hosting and',
      highlightPhrase: '100% source code',
      shortDescPost: 'transfer.',
      overview:
        'I configure production hosting, setup domains and SSL certificates, hand over complete Git repositories, and support you during initial go-live.',
      icon: <Rocket className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Live Production Deployment', desc: 'Configuring servers, cloud domains, and SSL.' },
        { title: '100% Source Code Ownership', desc: 'Complete Git repositories and intellectual property.' },
        { title: 'Setup & Operation Docs', desc: 'Clear guidelines to run and manage your software.' },
        { title: 'Post-Launch Support', desc: 'Dedicated warranty assistance after going live.' },
      ],
      techStack: ['Cloud Hosting', 'SSL Certs', 'Git Handover', 'Domain Config'],
      engineerNote: 'You own 100% of your software and intellectual property with zero lock-in.',
      statusText: 'Successfully Deployed',
    },
  ];

  return (
    <ProcessTimelineSection
      id="services-methodology"
      category="Development Methodology"
      title="How Client Ideas Become"
      highlight="Finished Software."
      highlightColor="blue"
      description="A structured 5-phase delivery process that ensures predictability, high code quality, and on-time launches across all software disciplines."
      steps={steps}
      contactSubject="General Services Inquiry"
    />
  );
};

