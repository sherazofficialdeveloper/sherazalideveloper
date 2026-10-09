import React from 'react';
import Link from 'next/link';
import { Mail, MessageCircle } from 'lucide-react';
import { contactData } from '../../data/contactData';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#0A1B4A] border-b border-blue-900/50 text-[12px] font-['Lexend'] text-blue-200/90 py-2 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Email & WhatsApp */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={`mailto:${contactData.email}`}
            className="group flex items-center gap-2 text-blue-200/90 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#F97316] group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium group-hover:underline underline-offset-2">{contactData.email}</span>
          </a>

          {contactData.whatsapp && (
            <a
              href={contactData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-blue-200/90 hover:text-emerald-400 transition-colors group"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">{contactData.phoneDisplay}</span>
            </a>
          )}

          <div className="hidden xl:flex items-center gap-2 text-blue-300/70">
            <span className="w-1 h-1 rounded-full bg-blue-400" />
            <span>Full Stack Developer · 2+ Years Commercial Experience</span>
          </div>
        </div>

        {/* Right: Availability Status & Quick Links */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-white font-semibold text-[11px] uppercase tracking-[0.16em]">
              Available For Work
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-blue-200/80 text-[12px] pl-4 border-l border-blue-800/50">
            <Link href="/about" className="hover:text-white transition-colors hover:-translate-y-0.5 inline-block duration-150">About</Link>
            <Link href="/services" className="hover:text-white transition-colors hover:-translate-y-0.5 inline-block duration-150">Services</Link>
            <Link href="/projects" className="hover:text-white transition-colors hover:-translate-y-0.5 inline-block duration-150">Projects</Link>
            <Link href="/contact" className="hover:text-white transition-colors hover:-translate-y-0.5 inline-block duration-150">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
