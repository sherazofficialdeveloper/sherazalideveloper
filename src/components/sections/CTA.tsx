'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { contactData } from '../../data/contactData';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#e9ecef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* =========================================================================
            DESIX DUAL CTA BOXES — FLAWLESS CONTRAST & ACCESSIBILITY
            Zero black-on-black or dark-on-dark text in any state!
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Box 1: Engineering Consultation (Vibrant Blue with White Text & White Button) */}
          <div className="p-8 sm:p-12 rounded-[6px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-[0_15px_40px_rgba(37,99,235,0.18)] flex flex-col justify-between relative overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-[4px] bg-[#F97316]" />

            <div className="mb-8">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-blue-100 block mb-2">
                // System Architecture &amp; Development
              </span>
              <h3 className="font-['Lexend'] text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
                Software Solutions For Startups &amp; Growing Enterprises
              </h3>
              <p className="text-[14px] text-blue-100/90 leading-[24px]">
                Engineering client-ready web portals, cross-platform mobile apps, native desktop software, and workflow automators.
              </p>
            </div>

            <div>
              {/* White Button with dark readable text in normal state -> Accent on hover */}
              <Link href="/contact">
                <Button variant="white" size="md">
                  Request Project Scope
                </Button>
              </Link>
            </div>
          </div>

          {/* Box 2: Direct Developer Reach (Clean Light Card with Dark Readable Text) */}
          <div className="p-8 sm:p-12 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] shadow-[0_10px_35px_rgba(0,0,0,0.04)] flex flex-col justify-between relative overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-[4px] bg-[#F97316]" />

            <div className="mb-8">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F97316] block mb-2">
                // Direct Contact Channel
              </span>
              <h3 className="font-['Lexend'] text-2xl sm:text-3xl font-bold text-[#18191c] leading-tight mb-2">
                Have An Immediate Question?
              </h3>
              <p className="text-[15px] leading-[26px] text-[#6f7174]">
                Reach out directly via email or WhatsApp to discuss timelines, technical scope, and architectural requirements.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${contactData.email}`}
                className="inline-flex items-center gap-2.5 font-['Lexend'] text-[15px] font-bold text-[#18191c] hover:text-[#2563EB] transition-colors p-2 pr-3 rounded-[4px] bg-white border border-[#e9ecef] hover:border-blue-400 shadow-xs"
              >
                <div className="w-9 h-9 rounded-[4px] bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{contactData.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F97316]" />
              </a>

              {contactData.whatsapp && (
                <a
                  href={contactData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-['Lexend'] text-[14px] font-bold text-white bg-[#25D366] hover:bg-[#20ba59] px-4 py-2.5 rounded-[4px] shadow-sm hover:shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
