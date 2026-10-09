'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Clock, ShieldCheck, CheckCircle2, MessageSquare, HelpCircle } from 'lucide-react';
import { Contact } from '../components/sections/Contact';
import { personalInfo } from '../data/portfolioData';
import { fadeUp, staggerContainer } from '../utils/motion';

export const ContactPage: React.FC = () => {
  const faqs = [
    {
      q: 'What is your typical response time?',
      a: 'I reply to all emails and inquiries within 24 hours on business days with clear feedback or answers.',
    },
    {
      q: 'Can we start with a small milestone?',
      a: 'Yes, starting with an initial milestone or prototype is a great way to verify code quality and communication before scaling up.',
    },
    {
      q: 'Do I receive full ownership of the source code?',
      a: '100% yes. Upon completion, you own all repositories, source code files, assets, and deployment documentation.',
    },
    {
      q: 'Do you provide post-launch support?',
      a: 'Yes, every project includes bug fixing and support to make sure your software runs seamlessly after go-live.',
    },
  ];

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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[12px] font-semibold mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for New Projects</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Lexend'] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4"
            >
              Let's Talk About Your <span className="text-[#FDBA74]">Project</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-hero-body text-blue-100/90 max-w-2xl"
            >
              Whether you need a new website, mobile app, desktop tool, or automation bot, feel free to send a message. I respond promptly within 24 hours.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute right-0 top-0 w-96 h-full bg-gradient-to-l from-[#F97316]/20 to-transparent pointer-events-none" />
      </section>

      {/* Main Interactive Contact Section */}
      <Contact />

      {/* Frequently Asked Questions */}
      <section className="py-20 sm:py-28 bg-[#f8f9fa] border-t border-[#e9ecef]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <span className="font-['Lexend'] text-[12px] font-bold uppercase tracking-widest text-[#F97316] block mb-2 flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              <span>Common Questions</span>
            </span>
            <h2 className="font-['Lexend'] text-3xl font-extrabold text-[#18191c]">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={faq.q}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-7 rounded-[8px] bg-white border border-[#e9ecef] shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-300 group"
              >
                <h4 className="font-['Lexend'] text-base font-bold text-[#18191c] group-hover:text-[#2563EB] transition-colors mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] group-hover:scale-125 transition-transform" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-[13.5px] leading-relaxed text-[#6f7174]">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
