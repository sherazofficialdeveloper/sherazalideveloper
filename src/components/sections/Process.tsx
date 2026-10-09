'use client';

import React from 'react';
import {
  Search,
  Lightbulb,
  Code2,
  CheckCircle2,
  Rocket,
} from 'lucide-react';
import { ProcessTimelineSection, ProcessStep } from '../ui/ProcessTimelineSection';

export const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      name: 'Understand',
      label: 'UNDERSTAND',
      tagline: 'Discovery, Scope & Technical Inventory',
      duration: 'Days 1–2',
      shortDescPre: 'Every build begins with deep',
      highlightPhrase: 'architectural alignment',
      shortDescPost: 'and technical scope definition.',
      overview:
        'Every solid piece of software begins with deep architectural alignment. I work directly with you to define core features, target users, performance baselines, and database models before writing a single line of production code.',
      icon: <Search className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Technical Scope Inventory', desc: 'Acceptance criteria and core capabilities.' },
        { title: 'Framework & Stack Blueprint', desc: 'Architecture matched to speed & scalability.' },
        { title: 'Milestone Delivery Roadmap', desc: 'Sprint schedule with demo checkpoint dates.' },
        { title: 'Direct Communication Channel', desc: '1-on-1 direct WhatsApp & email access.' },
      ],
      techStack: ['Scope Map', 'System Blueprint', 'Figma Brief', 'Milestone Spec'],
      engineerNote: 'Asking the hard technical questions upfront eliminates 90% of scope creep later.',
      statusText: 'Requirements Locked',
    },
    {
      number: '02',
      name: 'Plan',
      label: 'PLAN',
      tagline: 'Database Schemas, API Contracts & System Design',
      duration: 'Days 2–4',
      shortDescPre: 'Architecting robust relational',
      highlightPhrase: 'database schemas',
      shortDescPost: 'and typed REST API contracts.',
      overview:
        'Before coding frontend views, I architect relational or document database tables, define REST API endpoint request/response payloads, and structure secure JWT authorization flows to guarantee frictionless scaling.',
      icon: <Lightbulb className="w-7 h-7 text-[#F97316]" strokeWidth={1.75} />,
      themeColor: '#F97316',
      accentBg: 'bg-orange-50 border-orange-200/70',
      accentText: 'text-[#EA580C]',
      deliverables: [
        { title: 'Database Schema Modeling', desc: 'ACID-compliant tables or document schemas.' },
        { title: 'REST API Payload Contracts', desc: 'Typed signatures and status handling.' },
        { title: 'Auth & Role Hierarchy', desc: 'Stateless JWT tokens and route guards.' },
        { title: 'Responsive UI Flowcharts', desc: 'Component breakdown and breakpoint maps.' },
      ],
      techStack: ['MySQL', 'PostgreSQL', 'MongoDB', 'REST Contracts', 'JWT Auth'],
      engineerNote: 'Clean database normalization and structured contracts ensure your frontend remains lightning-fast.',
      statusText: 'Schema Approved',
    },
    {
      number: '03',
      name: 'Build',
      label: 'BUILD',
      tagline: 'Full-Stack Implementation & Clean TypeScript Code',
      duration: 'Sprint Phase',
      shortDescPre: 'Writing clean, modular, and',
      highlightPhrase: 'type-safe code',
      shortDescPost: 'with weekly interactive demos.',
      overview:
        'I engineer clean, type-safe, modular code using modern reactive frontend libraries and robust backend handlers. Regular demo links keep you continuously updated on tangible visual and operational progress.',
      icon: <Code2 className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Responsive Reactive Frontend', desc: 'Pixel-perfect semantic layouts with React/Next.' },
        { title: 'Secure Backend Handlers', desc: 'Express/Node servers with rate limiting and validation.' },
        { title: 'Optimized Cache & State Flow', desc: 'Fast hydration and memory leak prevention.' },
        { title: 'Weekly Interactive Demos', desc: 'Live preview environments to verify features.' },
      ],
      techStack: ['TypeScript', 'React.js', 'Next.js', 'Node.js', 'Tailwind CSS'],
      engineerNote: 'Type safety with TypeScript prevents whole categories of runtime errors before production.',
      statusText: 'Active Sprints',
    },
    {
      number: '04',
      name: 'Test',
      label: 'TEST',
      tagline: 'Multi-Device Stability, Security & Edge Cases',
      duration: 'QA Phase',
      shortDescPre: 'Rigorous verification on',
      highlightPhrase: 'real physical phones',
      shortDescPost: 'and browser audit checks.',
      overview:
        'Rigorous quality assurance across physical devices and browsers. I test responsive layouts on real Android smartphones, cross-browser compatibility on Chrome/Safari/Edge, and simulate offline connection drops.',
      icon: <CheckCircle2 className="w-7 h-7 text-[#F97316]" strokeWidth={1.75} />,
      themeColor: '#F97316',
      accentBg: 'bg-orange-50 border-orange-200/70',
      accentText: 'text-[#EA580C]',
      deliverables: [
        { title: 'Physical Hardware Testing', desc: 'Tested on real Android devices for touch latency.' },
        { title: 'Cross-Browser Verification', desc: 'Render stability on Chrome, Safari, Firefox, Edge.' },
        { title: 'Offline & Error Resilience', desc: 'Network dropouts, retry backoffs, form validations.' },
        { title: 'Lighthouse Performance Audit', desc: 'Sub-second paint and zero cumulative layout shift.' },
      ],
      techStack: ['Real Android Phones', 'Chrome DevTools', 'Playwright', 'Network Throttling'],
      engineerNote: 'Testing on real physical hardware ensures your software does not fail when real users tap on it.',
      statusText: 'Zero-Defect QA',
    },
    {
      number: '05',
      name: 'Deliver',
      label: 'DELIVER',
      tagline: 'Production Go-Live & 100% Code Handover',
      duration: 'Launch Day',
      shortDescPre: 'Zero-downtime deployment, SSL, and',
      highlightPhrase: '100% repository handover',
      shortDescPost: 'with developer docs.',
      overview:
        'I deploy your software to high-availability production infrastructure, configure custom domains with automated SSL certificates, hand over complete Git repository ownership, and provide initial launch support.',
      icon: <Rocket className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Zero-Downtime Deployment', desc: 'Live production build on Vercel, Railway, or VPS.' },
        { title: 'Custom Domain & SSL Setup', desc: 'Automated HTTPS encryption certificates & redirects.' },
        { title: '100% Git Codebase Handover', desc: 'Complete source repository with README & setup docs.' },
        { title: 'Post-Launch Warranty Support', desc: 'Direct post-deployment bug fixing and support.' },
      ],
      techStack: ['Vercel', 'VPS Linux', 'Custom DNS', 'SSL Certs', 'Git Repository Handover'],
      engineerNote: 'You retain 100% ownership of every line of code, documentation, and database schema from day one.',
      statusText: 'Production Verified',
    },
  ];

  return (
    <ProcessTimelineSection
      id="process"
      category="Engineering Workflow"
      title="A Structured 5-Stage"
      highlight="Development Journey."
      highlightColor="orange"
      description="Clear, transparent progression from the initial requirements discussion to live production deployment with 100% code ownership."
      steps={steps}
      contactSubject="Engineering Workflow Discussion"
    />
  );
};