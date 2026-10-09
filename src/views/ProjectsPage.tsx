'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FolderGit2, ArrowRight, Sparkles } from 'lucide-react';
import { Projects } from '../components/sections/Projects';
import { Button } from '../components/ui/Button';
import { fadeUp, staggerContainer } from '../utils/motion';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-[72px] sm:pt-[80px] bg-white">
      {/* Header Banner */}
      <section className="bg-[#0F286E] bg-gradient-to-b from-[#0F286E] via-[#1D4ED8] to-[#112A6E] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <motion.div
            initial={false}
            animate="visible"
            variants={staggerContainer(0.1)}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/20 border border-blue-400/30 text-blue-200 text-[12px] font-semibold mb-4"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Project Portfolio</span>
              <span className="w-1 h-1 rounded-full bg-blue-300" />
              <span>Case Studies</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Lexend'] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4"
            >
              Featured <span className="text-[#FDBA74]">Projects</span> &amp; Work
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-hero-body text-blue-100/90 max-w-2xl"
            >
              A curated collection of websites, mobile apps, desktop software, and custom bots. Filter by category or discuss a custom build for your business.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute right-0 top-0 w-96 h-full bg-gradient-to-l from-[#2563EB]/20 to-transparent pointer-events-none" />
      </section>

      {/* Main Filterable Projects Section */}
      <Projects />

      {/* Project Inquiry CTA */}
      <section className="py-20 bg-[#0F286E] bg-gradient-to-r from-[#0A1B4A] via-[#0F286E] to-[#1E3A8A] text-white border-t border-blue-900/40">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-[12px] font-['Lexend'] font-bold uppercase tracking-wider text-[#FDBA74] block mb-2">
              Start A Build
            </span>
            <h3 className="font-['Lexend'] text-2xl sm:text-3xl font-extrabold text-white mb-1">
              Have a project you want built?
            </h3>
            <p className="text-[14px] text-blue-100/90">
              Share your project requirements to receive a realistic scope, architecture plan, and timeline.
            </p>
          </div>
          <div>
            <Link href="/contact">
              <Button variant="accent" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
