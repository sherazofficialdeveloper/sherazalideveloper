'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, ShieldCheck, CheckCircle2, Code, Database } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { experienceData } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#0F286E] bg-gradient-to-b from-[#0F286E] via-[#112D7A] to-[#0A1B4A] text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/15 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <SectionHeading
          theme="dark"
          category="Commercial Background"
          title="Verified Professional"
          highlight="Experience."
          highlightColor="orange"
          description="Proven commercial track record in architecting, developing, and deploying full stack solutions."
        />

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-12 rounded-[8px] bg-[#0A1B4A]/90 backdrop-blur-md border border-blue-400/25 shadow-[0_25px_60px_rgba(15,40,110,0.35)] relative overflow-hidden"
            >
              {/* Header Box */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-blue-400/20 mb-8">
                <div className="flex items-start sm:items-center gap-5">
                  <div className="w-14 h-14 rounded-[6px] bg-[#2563EB]/25 border border-blue-400/40 flex items-center justify-center shrink-0">
                    <Briefcase className="w-7 h-7 text-[#93C5FD]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-[0.18em] text-[#FDBA74] block mb-1">
                      Commercial Software Engineering
                    </span>
                    <h3 className="font-['Lexend'] text-2xl sm:text-3xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-[14px] font-medium text-blue-100 mt-1">
                      {exp.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 px-4 py-2 rounded-[4px] bg-[#0F286E] border border-blue-400/30 self-start sm:self-auto shadow-xs">
                  <Calendar className="w-4 h-4 text-[#F97316]" />
                  <span className="font-['Lexend'] text-[13px] font-bold text-white">
                    {exp.duration} Experience
                  </span>
                </div>
              </div>

              {/* Work Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-[6px] bg-[#0F2666]/90 border border-blue-400/20 hover:border-blue-400/40 hover:bg-[#143285] transition-colors flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[4px] bg-blue-500/20 flex items-center justify-center shrink-0 text-[#93C5FD]">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-['Lexend'] text-[15px] font-bold text-white mb-1">
                      Full-Stack Architecture
                    </h4>
                    <p className="text-[13px] leading-[22px] text-blue-100/80">
                      Building client-facing portals and robust RESTful API endpoints with structured component hierarchies.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-[6px] bg-[#0F2666]/90 border border-blue-400/20 hover:border-orange-400/40 hover:bg-[#143285] transition-colors flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[4px] bg-orange-500/20 flex items-center justify-center shrink-0 text-[#FDBA74]">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-['Lexend'] text-[15px] font-bold text-white mb-1">
                      Relational &amp; Document Data
                    </h4>
                    <p className="text-[13px] leading-[22px] text-blue-100/80">
                      Optimizing MySQL and MongoDB schemas, query performance, and reliable state persistence across services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Highlights Checklist */}
              <div className="space-y-3.5 mb-8">
                {exp.highlights.map((point) => (
                  <div key={point} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-[14px] leading-[24px] text-blue-100/90">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Applied */}
              <div className="pt-6 border-t border-blue-400/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[12px] font-bold text-blue-200/80 mr-2">Technologies:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[12px] font-semibold text-blue-100 bg-[#0F2666] px-3 py-1 rounded-[4px] border border-blue-400/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[12px] font-semibold text-blue-200/90 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#F97316]" />
                  <span>2+ Years Real Commercial Experience</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
