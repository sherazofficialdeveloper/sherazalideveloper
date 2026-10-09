'use client';

import React from 'react';
import {
  Search,
  Code2,
  ShieldCheck,
  Cpu,
  Rocket,
} from 'lucide-react';
import { ProcessTimelineSection, ProcessStep } from '../ui/ProcessTimelineSection';

export const BotProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      name: 'Analyze',
      label: 'ANALYZE',
      tagline: 'DOM Selectors, API Endpoints & Rate Limits',
      duration: 'Days 1–2',
      shortDescPre: 'Analyzing target websites, authentication challenges, and',
      highlightPhrase: 'authentication challenges',
      shortDescPost: 'before writing scripts.',
      overview:
        'Analyze target web pages, DOM selectors, dynamic AJAX endpoints, captcha challenges, and API rate limits before writing scraping or webhook automation scripts.',
      icon: <Search className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Target DOM & API Audit', desc: 'Identification of static and dynamic data elements.' },
        { title: 'Anti-Bot & Rate Limit Map', desc: 'Analysis of request throttling, tokens, and cookies.' },
        { title: 'Payload & Schema Design', desc: 'Normalized database models for harvested data.' },
        { title: 'Trigger Frequency Specification', desc: 'Event-driven webhooks vs scheduled cron intervals.' },
      ],
      techStack: ['Playwright', 'Puppeteer', 'DevTools Network', 'DOM Inspectors'],
      engineerNote: 'Analyzing network payloads upfront reveals clean JSON endpoints, avoiding heavy DOM parsing.',
      statusText: 'Targets Mapped',
    },
    {
      number: '02',
      name: 'Script',
      label: 'SCRIPT',
      tagline: 'Headless Actions & Webhook Handlers',
      duration: 'Days 2–4',
      shortDescPre: 'Writing resilient Node.js scripts with',
      highlightPhrase: 'headless automation',
      shortDescPost: 'and session cookies.',
      overview:
        'Engineer type-safe Node.js automation scripts. Implement headless browser navigation with Playwright/Puppeteer, session persistence, and webhook payload receivers.',
      icon: <Code2 className="w-7 h-7 text-[#F97316]" strokeWidth={1.75} />,
      themeColor: '#F97316',
      accentBg: 'bg-orange-50 border-orange-200/70',
      accentText: 'text-[#EA580C]',
      deliverables: [
        { title: 'Headless Browser Navigation', desc: 'Automated login, clicks, scrolling, and data parsing.' },
        { title: 'Webhook Event Handlers', desc: 'Express.js endpoints to catch payment and CRM events.' },
        { title: 'Data Validation & Cleansing', desc: 'Sanitizing harvested fields into structured records.' },
        { title: 'Modular Script Architecture', desc: 'Separation of scraper engine, parser, and storage.' },
      ],
      techStack: ['Node.js', 'Playwright', 'Puppeteer', 'TypeScript', 'Cheerio'],
      engineerNote: 'Using robust CSS/XPath selectors prevents scripts from breaking on minor layout updates.',
      statusText: 'Script Built',
    },
    {
      number: '03',
      name: 'Guardrails',
      label: 'GUARDRAILS',
      tagline: 'Exponential Backoff & Anti-Crash Buffers',
      duration: 'Days 3–5',
      shortDescPre: 'Adding residential proxies and',
      highlightPhrase: 'exponential backoff',
      shortDescPost: 'for zero silent crashes.',
      overview:
        'Implement production-grade fault tolerance: automatic retry loops with exponential backoff, residential proxy rotation, user-agent randomization, and memory limit guards.',
      icon: <ShieldCheck className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Exponential Retry Loops', desc: 'Graceful recovery from network timeouts and drops.' },
        { title: 'Proxy & Header Rotation', desc: 'Preventing IP bans and throttling blocks.' },
        { title: 'Anti-Crash Safe Guards', desc: 'Global uncaughtException handlers and process restart.' },
        { title: 'Alert Notification Hooks', desc: 'Instant Telegram or email alerts on unexpected anomalies.' },
      ],
      techStack: ['Proxy Rotators', 'Exponential Backoff', 'Telegram Alerts', 'Winston'],
      engineerNote: 'Unattended bots must never crash silently; automated self-healing keeps them running.',
      statusText: 'Guardrails Active',
    },
    {
      number: '04',
      name: 'Deploy',
      label: 'DEPLOY',
      tagline: 'PM2 Daemon & 24/7 VPS Runtime Setup',
      duration: 'Sprint Phase',
      shortDescPre: 'Configuring PM2 process manager on',
      highlightPhrase: '24/7 Linux VPS',
      shortDescPost: 'with reboot recovery.',
      overview:
        'Deploy scripts to dedicated Linux cloud VPS infrastructure. Configure PM2 process management with automatic system reboot recovery and resource monitoring.',
      icon: <Cpu className="w-7 h-7 text-[#F97316]" strokeWidth={1.75} />,
      themeColor: '#F97316',
      accentBg: 'bg-orange-50 border-orange-200/70',
      accentText: 'text-[#EA580C]',
      deliverables: [
        { title: 'PM2 Daemon Configuration', desc: 'Auto-restart on crash and reboot persistence.' },
        { title: 'Linux VPS Provisioning', desc: 'Hardened Ubuntu server setup with cron scheduling.' },
        { title: 'Database Storage Pipeline', desc: 'Direct storage into PostgreSQL, MySQL, or MongoDB.' },
        { title: 'Logging & Audit Trails', desc: 'Structured file logs with automated daily log rotation.' },
      ],
      techStack: ['PM2', 'Linux VPS', 'Ubuntu Server', 'Cron Jobs', 'MongoDB'],
      engineerNote: 'PM2 ensures your script immediately revives if memory limits or OS reboots occur.',
      statusText: 'Daemon Online',
    },
    {
      number: '05',
      name: 'Monitor',
      label: 'MONITOR',
      tagline: 'Continuous Sync & 100% Code Handover',
      duration: 'Launch Day',
      shortDescPre: 'Live monitoring dashboards, webhook alerts, and',
      highlightPhrase: '100% code handover',
      shortDescPost: 'with setup docs.',
      overview:
        'Validate live background executions, establish webhook delivery verification, configure performance monitoring, and deliver full source code with step-by-step operation docs.',
      icon: <Rocket className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Live Execution Verification', desc: 'Confirmed end-to-end data harvesting and webhook triggers.' },
        { title: 'Webhooks & Sync Monitoring', desc: 'Dashboard verification of 100% delivery rate.' },
        { title: '100% Source Code Transfer', desc: 'Complete repository handover with environment variables.' },
        { title: 'Maintenance & Ops Guide', desc: 'Simple instructions to start, stop, and configure the bot.' },
      ],
      techStack: ['Git Repository', 'Env Configs', 'PM2 Monitor', 'Webhook Logs'],
      engineerNote: 'You receive clean, documented source code so you have full autonomous control.',
      statusText: 'Live & Monitoring',
    },
  ];

  return (
    <ProcessTimelineSection
      id="bot-lifecycle"
      category="Automation Lifecycle"
      title="Structured 5-Stage Engineering For"
      highlight="Bots & Scripts."
      highlightColor="orange"
      description="A structured 5-stage lifecycle engineered for high reliability, automatic error recovery, rate limiting, and 24/7 daemon runtime."
      steps={steps}
      contactSubject="Bot & Automation Project Inquiry"
    />
  );
};

