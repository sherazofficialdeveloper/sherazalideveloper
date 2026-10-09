'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonialsData } from '../../data/portfolioData';

export const Testimonials: React.FC = () => {
  // If no authentic testimonials have been provided yet, keep section dormant
  if (testimonialsData.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-24 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          category="Client Feedback"
          title="Verified Client"
          highlight="Endorsements"
          description="Direct reviews and feedback from clients and engineering collaborators."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#0F172A] border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-[#2563EB]/40" />
                  {item.rating && (
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-sm font-bold text-white">
                  {item.clientName}
                </h4>
                {(item.role || item.company) && (
                  <p className="text-xs text-slate-400 mt-0.5">
                    {item.role} {item.company ? `at ${item.company}` : ''}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
