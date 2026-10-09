'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Mail, Send, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { personalInfo, servicesData } from '../../data/portfolioData';
import { contactData } from '../../data/contactData';

// Recognizable Brand SVGs for Footer
const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const XTwitterIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (typeof window !== 'undefined') {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } catch {}
      try {
        document.documentElement?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } catch {}
      try {
        document.body?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } catch {}
    }
  };

  return (
    <footer className="w-full bg-[#0A1B4A] text-white border-t border-blue-900/60 relative overflow-hidden font-['Lexend']">
      {/* Background Accent Subtle Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* ===================== TOP CTA STRIP ===================== */}
      <div className="border-b border-blue-900/50 bg-[#071438] py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-[4px] bg-[#F97316] text-white flex items-center justify-center shrink-0 shadow-lg">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-['Lexend'] text-lg font-bold text-white tracking-tight">
                Ready to bring your software ideas to life?
              </h4>
              <p className="text-[13px] text-blue-200/80 font-normal">
                Let's discuss your project scope, architecture, and timeline directly.
              </p>
            </div>
          </div>

          <div>
            <Link
              href="/contact"
              className="group px-6 py-3 rounded-[4px] bg-[#F97316] hover:bg-[#EA580C] text-white text-[13px] font-['Lexend'] font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>Contact Sheraz Ali</span>
              <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* ===================== MAIN 4-COLUMN FOOTER ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-blue-900/40">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
                  <img src="/assets/logo.png" width="300px" height="" alt="" />
            <p className="text-[13.5px] leading-[24px] text-blue-100/80 max-w-sm mb-5 font-normal">
              Specialized Full Stack Developer with 2+ years of verified commercial software development experience. Engineering responsive websites, cross-platform mobile apps, native desktop software, and automated bots.
            </p>
            <div className="inline-flex items-center gap-2 p-2.5 rounded-[4px] bg-[#071129] border border-blue-500/20 text-[12px] text-blue-200/90 hover:border-blue-400/40 transition-colors">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Commercial Software Engineer</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h5 className="font-['Lexend'] text-[14px] font-bold text-white uppercase tracking-wider mb-4">
              Explore
            </h5>
            <ul className="space-y-2 text-[13.5px] font-medium">
              <li>
                <Link href="/" className="text-blue-200/70 hover:text-white transition-all hover:translate-x-1 inline-flex items-center gap-1.5 duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-200/70 hover:text-white transition-all hover:translate-x-1 inline-flex items-center gap-1.5 duration-150">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200/70 hover:text-white transition-all hover:translate-x-1 inline-flex items-center gap-1.5 duration-150">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-blue-200/70 hover:text-white transition-all hover:translate-x-1 inline-flex items-center gap-1.5 duration-150">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200/70 hover:text-white transition-all hover:translate-x-1 inline-flex items-center gap-1.5 duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The 4 Core Services (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="font-['Lexend'] text-[14px] font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h5>
            <ul className="space-y-2.5 text-[13.5px]">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="group flex items-start gap-2 text-blue-200/70 hover:text-white transition-all hover:translate-x-1 duration-150 font-medium"
                  >
                    <span className="font-['Lexend'] text-[#F97316] font-bold group-hover:text-orange-400 transition-colors">
                      {svc.number}.
                    </span>
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social Handles (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="font-['Lexend'] text-[14px] font-bold text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h5>
            <div className="space-y-3 text-[13px] text-blue-100/80 mb-5">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-blue-300/70 font-semibold mb-0.5">
                  Official Email
                </span>
                <a
                  href={`mailto:${contactData.email}`}
                  className="font-semibold text-white hover:text-[#F97316] transition-colors break-all"
                >
                  {contactData.email}
                </a>
              </div>

              {contactData.whatsapp && (
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-blue-300/70 font-semibold mb-0.5">
                    WhatsApp Direct
                  </span>
                  <a
                    href={contactData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{contactData.phoneDisplay}</span>
                  </a>
                </div>
              )}

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-blue-300/70 font-semibold mb-0.5">
                  Availability
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold text-[12px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Commercial Contracts &amp; Projects
                </span>
              </div>
            </div>

            {/* Social Media Links with Real Brand Vectors */}
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-blue-300/70 font-semibold mb-2">
                Connect Directly
              </span>
              <div className="flex items-center gap-2">
                {contactData.socials.linkedin && (
                  <a
                    href={contactData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-8 h-8 rounded-[4px] bg-[#071129] border border-blue-500/20 text-blue-200 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] flex items-center justify-center transition-all duration-200"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                )}
                {contactData.socials.twitter && (
                  <a
                    href={contactData.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X Twitter Profile"
                    className="w-8 h-8 rounded-[4px] bg-[#071129] border border-blue-500/20 text-blue-200 hover:text-white hover:bg-black hover:border-slate-700 flex items-center justify-center transition-all duration-200"
                  >
                    <XTwitterIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {contactData.socials.facebook && (
                  <a
                    href={contactData.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Profile"
                    className="w-8 h-8 rounded-[4px] bg-[#071129] border border-blue-500/20 text-blue-200 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] flex items-center justify-center transition-all duration-200"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                )}
                {contactData.socials.instagram && (
                  <a
                    href={contactData.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="w-8 h-8 rounded-[4px] bg-[#071129] border border-blue-500/20 text-blue-200 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:border-transparent flex items-center justify-center transition-all duration-200"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ===================== BOTTOM COPYRIGHT BAR ===================== */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-blue-300/70">
          <p>© {new Date().getFullYear()} Sheraz Ali. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors">
              Full Stack Software Developer
            </span>
            <span className="text-blue-500/40">·</span>
            <span className="hover:text-white transition-colors">
              2+ Years Commercial Experience
            </span>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-[4px] bg-blue-900/60 hover:bg-[#F97316] text-white flex items-center justify-center transition-all duration-200 cursor-pointer ml-2 group"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
