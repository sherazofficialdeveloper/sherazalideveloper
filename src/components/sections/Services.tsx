'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Globe, Smartphone, Monitor, Bot, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { servicesData } from '../../data/portfolioData';

export const Services: React.FC = () => {
  const serviceDetails = [
    {
      id: 'web-dev',
      icon: <Globe className="w-6 h-6 text-[#2563EB]" />,
      deliverables: [
        'Responsive Single Page Applications (React.js, Next.js, Vue.js)',
        'RESTful & Modular API Engineering (Node.js, Express.js, Nest.js)',
        'Database Optimization & Normalization (MySQL, MongoDB)',
      ],
    },
    {
      id: 'mobile-dev',
      icon: <Smartphone className="w-6 h-6 text-[#F97316]" />,
      deliverables: [
        'Universal Cross-Platform Native Apps (React Native)',
        'Fluid Touch Gestures, Offline Cache & State Synchronization',
        'Push Notifications, Secure Auth & Mobile REST Integration',
      ],
    },
    {
      id: 'desktop-dev',
      icon: <Monitor className="w-6 h-6 text-[#2563EB]" />,
      deliverables: [
        'Standalone Desktop Systems for Windows, macOS & Linux (Electron.js)',
        'Local File System Access, Hardware Acceleration & SQLite',
        'System Tray Utilities, Auto-Updates & Native Menus',
      ],
    },
    {
      id: 'bot-dev',
      icon: <Bot className="w-6 h-6 text-[#F97316]" />,
      deliverables: [
        'Custom Webhook Processors & Automated Background Workers',
        'Data Scraping, Scheduled Tasks & Message Dispatchers',
        'Workflow Automators Built With Node.js & REST APIs',
      ],
    },
  ];

  return (
    <section id="services" className="pt-24 pb-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <SectionHeading
          category="What I Build"
          title="Engineered Services For"
          highlight="Real-World Use."
          highlightColor="orange"
          description="Detailed technical breakdown across the 4 verified commercial disciplines with clean, type-safe architecture and long-term maintainability."
        />

        {/* 4 In-Depth Capability Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-14">
          {servicesData.map((service, index) => {
            const detail = serviceDetails.find((d) => d.id === service.id);
            const isOrange = index % 2 === 1;

            return (
              <motion.div
                key={service.id}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-[#cbd5e1] hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* 3px Accent Line */}
                <span
                  className={`absolute top-0 left-0 w-full h-[3px] transition-all duration-300 group-hover:h-[4px] ${
                    isOrange ? 'bg-[#F97316]' : 'bg-[#2563EB]'
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-[4px] bg-white border border-[#e2e8f0] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {detail?.icon}
                      </div>
                      <div>
                        <span className="font-['Lexend'] text-[11px] font-bold tracking-widest uppercase text-[#F97316]">
                          Discipline {service.number}
                        </span>
                        <h3 className="font-['Lexend'] text-[19px] font-bold text-[#18191c] leading-tight group-hover:text-[#2563EB] transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <span className="font-['Lexend'] text-2xl font-bold text-[#e2e8f0] group-hover:text-slate-300 transition-colors select-none">
                      {service.number}
                    </span>
                  </div>

                  <p className="text-[14px] leading-[26px] text-[#6f7174] mb-5">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6">
                    {detail?.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#18191c] hover:translate-x-1 transition-transform duration-150">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isOrange ? 'text-[#F97316]' : 'text-[#2563EB]'
                          }`}
                        />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges Row */}
                <div className="pt-4 border-t border-[#e9ecef] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-semibold text-[#18191c] bg-white hover:bg-slate-100 hover:border-slate-300 px-2.5 py-0.5 rounded-[3px] border border-[#e2e8f0] transition-colors duration-150"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[13px] font-bold text-[#18191c] group-hover:text-[#F97316] transition-colors"
                  >
                    <span>Consult</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desix Agency Callout Strip */}
        <div className="p-8 sm:p-10 rounded-[6px] bg-[#0F286E] bg-gradient-to-r from-[#0A1B4A] via-[#0F286E] to-[#1E3A8A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(15,40,110,0.2)] border border-blue-400/25 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-[#2563EB]/20 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FDBA74] block mb-1.5">
              // Custom Engineering &amp; System Design
            </span>
            <h3 className="font-['Lexend'] text-xl sm:text-2xl font-bold text-white leading-snug">
              Have a tailored technical requirement or complex feature spec?
            </h3>
          </div>
          <div className="relative z-10 shrink-0">
            <Link href="/contact">
              <Button variant="accent" size="md">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
