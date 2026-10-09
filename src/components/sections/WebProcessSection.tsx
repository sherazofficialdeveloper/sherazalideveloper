'use client';

import React from 'react';
import {
  Search,
  Compass,
  Code2,
  CheckCircle2,
  Rocket,
} from 'lucide-react';
import { ProcessTimelineSection, ProcessStep } from '../ui/ProcessTimelineSection';

export const WebProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      name: 'Understand',
      label: 'DISCOVERY',
      tagline: 'Discovery, Scope & Sitemap Hierarchy',
      duration: 'Days 1–2',
      shortDescPre: 'Reviewing business objectives, target audience, and',
      highlightPhrase: 'sitemap hierarchy',
      shortDescPost: 'with clear technical scope.',
      overview:
        'Review your business goals, target audience, core user journeys, and feature inventory. Asking key architectural questions early avoids scope creep and clarifies technical constraints.',
      icon: <Search className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Feature Inventory & Sitemap', desc: 'Complete website page hierarchy and scope brief.' },
        { title: 'Framework Selection Blueprint', desc: 'Next.js SSR vs React SPA architecture selection.' },
        { title: 'Responsive Breakpoint Map', desc: 'Mobile, tablet, and desktop layout planning.' },
        { title: 'Direct Communication Channel', desc: '1-on-1 direct WhatsApp & email access.' },
      ],
      techStack: ['Next.js', 'React.js', 'Sitemap Spec', 'Scope Map'],
      engineerNote: 'Planning the page hierarchy upfront saves dozens of hours of revision during coding.',
      statusText: 'Scope Confirmed',
    },
    {
      number: '02',
      name: 'Plan',
      label: 'PLANNING',
      tagline: 'Database Schemas, API Contracts & Wireframes',
      duration: 'Days 2–4',
      shortDescPre: 'Architecting relational database models and',
      highlightPhrase: 'typed REST contracts',
      shortDescPost: 'before writing frontend code.',
      overview:
        'Design relational or document database tables, define REST API endpoint contracts, plan component hierarchies, and map out responsive mobile breakpoints before writing code.',
      icon: <Compass className="w-7 h-7 text-[#F97316]" strokeWidth={1.75} />,
      themeColor: '#F97316',
      accentBg: 'bg-orange-50 border-orange-200/70',
      accentText: 'text-[#EA580C]',
      deliverables: [
        { title: 'Database Schema Modeling', desc: 'ACID PostgreSQL / MySQL / MongoDB models.' },
        { title: 'REST API Payload Contracts', desc: 'Typed endpoint signatures and error handlers.' },
        { title: 'Component Hierarchy Blueprint', desc: 'Reusable UI components and state management.' },
        { title: 'Wireframe Flowcharts', desc: 'Interactive user paths and validation rules.' },
      ],
      techStack: ['PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs', 'Figma Specs'],
      engineerNote: 'A structured database contract prevents breaking changes when scaling features.',
      statusText: 'Schema Approved',
    },
    {
      number: '03',
      name: 'Build',
      label: 'BUILD',
      tagline: 'Next.js Frontend & Node.js Backend Implementation',
      duration: 'Sprint Phase',
      shortDescPre: 'Coding modular, type-safe React & Next.js views with',
      highlightPhrase: 'sub-second loading',
      shortDescPost: 'and weekly live demos.',
      overview:
        'Code type-safe, modular React and Next.js interfaces paired with high-performance Node.js/Express endpoints. Regular demo checkpoints keep you continuously informed of tangible progress.',
      icon: <Code2 className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Next.js Production Frontends', desc: 'Server-rendered pages with sub-second loading.' },
        { title: 'Secure Node.js Backend APIs', desc: 'Protected endpoints with JWT authentication.' },
        { title: 'Tailwind Responsive Layouts', desc: 'Adaptive styling across all screen sizes.' },
        { title: 'Weekly Staging Demos', desc: 'Interactive preview links to test progress.' },
      ],
      techStack: ['TypeScript', 'Next.js', 'React.js', 'Node.js', 'Tailwind CSS'],
      engineerNote: 'Clean TypeScript interfaces guarantee type safety across both frontend and backend.',
      statusText: 'Code Verified',
    },
    {
      number: '04',
      name: 'Test',
      label: 'TESTING',
      tagline: 'Cross-Browser QA, Responsiveness & Lighthouse 95+',
      duration: 'QA Phase',
      shortDescPre: 'Rigorous quality assurance across browsers targeting',
      highlightPhrase: 'Lighthouse 95+',
      shortDescPost: 'and zero layout shifts.',
      overview:
        'Thorough quality assurance across desktop and mobile browsers. Verify form validations, input sanitization, network error recovery, and Core Web Vitals performance benchmarks.',
      icon: <CheckCircle2 className="w-7 h-7 text-[#F97316]" strokeWidth={1.75} />,
      themeColor: '#F97316',
      accentBg: 'bg-orange-50 border-orange-200/70',
      accentText: 'text-[#EA580C]',
      deliverables: [
        { title: 'Cross-Browser Parity QA', desc: 'Chrome, Safari, Firefox, and Edge compatibility.' },
        { title: 'Mobile Viewport Usability', desc: 'Touch interactions, mobile tap targets, and zoom handling.' },
        { title: 'Lighthouse Audit 95+', desc: 'Top scores in Performance, SEO, and Accessibility.' },
        { title: 'Form & Security Validation', desc: 'XSS sanitization, CSRF protection, and error states.' },
      ],
      techStack: ['Chrome DevTools', 'Safari WebKit', 'Core Web Vitals', 'Lighthouse'],
      engineerNote: 'Testing on real browsers and devices catches subtle rendering bugs before launch.',
      statusText: 'QA Passed',
    },
    {
      number: '05',
      name: 'Launch',
      label: 'LAUNCH',
      tagline: 'Zero-Downtime Deployment & 100% Code Handover',
      duration: 'Launch Day',
      shortDescPre: 'Deploying to production hosting with automated SSL and',
      highlightPhrase: '100% Git transfer',
      shortDescPost: 'with complete docs.',
      overview:
        'Deploy the production build to high-speed hosting (Vercel/VPS), connect custom domain DNS, provision automated HTTPS certificates, and transfer 100% Git repository ownership.',
      icon: <Rocket className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Zero-Downtime Deployment', desc: 'Live production setup on Vercel or Linux VPS.' },
        { title: 'Custom Domain & SSL Setup', desc: 'HTTPS encryption certificates and redirect rules.' },
        { title: '100% Git Repository Handover', desc: 'Complete source code, README, and deployment docs.' },
        { title: 'Post-Launch Warranty', desc: 'Direct support and assistance during initial go-live.' },
      ],
      techStack: ['Vercel', 'VPS Linux', 'Custom DNS', 'SSL Certs', 'Git Handover'],
      engineerNote: 'You receive full, unrestricted ownership of the entire repository and database assets.',
      statusText: 'Live in Production',
    },
  ];

  return (
    <ProcessTimelineSection
      id="workflow"
      category="Web Development Workflow"
      title="From Concept To Production"
      highlight="Web Architecture."
      highlightColor="orange"
      description="A structured 5-stage web engineering journey connecting requirements discovery, clean code development, cross-browser testing, and live deployment."
      steps={steps}
      contactSubject="Web Development Project Inquiry"
    />
  );
};

