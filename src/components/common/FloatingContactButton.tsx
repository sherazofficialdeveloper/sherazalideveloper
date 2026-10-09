'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Mail, Phone, ExternalLink } from 'lucide-react';
import { contactData } from '../../data/contactData';

// Recognizable Brand SVG Icons
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.97.57 3.81 1.558 5.362L2 22l4.764-1.523A10.003 10.003 0 0012.03 22c5.536 0 10.03-4.494 10.03-10.029C22.062 6.494 17.567 2 12.031 2zm0 18.286c-1.636 0-3.18-.465-4.502-1.272l-.323-.198-3.003.96.982-2.923-.21-.336A8.258 8.258 0 013.743 12.03c0-4.57 3.718-8.287 8.288-8.287 4.57 0 8.288 3.717 8.288 8.287 0 4.57-3.718 8.286-8.288 8.286zm4.537-6.208c-.248-.124-1.47-.726-1.698-.809-.228-.083-.394-.124-.56.124-.166.248-.642.809-.787.974-.145.166-.29.186-.539.062-.248-.124-1.047-.386-1.996-1.231-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.383.109-.506.112-.112.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.042-.311-.02-.435-.063-.124-.56-1.349-.767-1.848-.202-.485-.407-.419-.56-.427-.145-.008-.311-.008-.477-.008s-.435.062-.663.311c-.228.248-.871.85-.871 2.074 0 1.223.892 2.406 1.016 2.572.124.166 1.755 2.68 4.252 3.757.594.256 1.058.41 1.42.525.597.19 1.14.163 1.57.099.479-.071 1.47-.601 1.677-1.182.207-.581.207-1.078.145-1.182-.062-.104-.228-.166-.477-.29z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const XTwitterIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const GoogleBusinessIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.35 11.1h-9.17v2.98h5.27c-.23 1.25-.93 2.31-1.98 3.01v2.51h3.2c1.87-1.72 2.95-4.26 2.95-7.3 0-.73-.07-1.43-.27-2.2z" fill="#4285F4"/>
    <path d="M12.18 21c2.65 0 4.88-.88 6.51-2.4l-3.2-2.51c-.88.59-2.01.94-3.31.94-2.55 0-4.71-1.72-5.48-4.04H3.39v2.59C5.03 18.82 8.35 21 12.18 21z" fill="#34A853"/>
    <path d="M6.7 12.99c-.2-.59-.31-1.22-.31-1.87 0-.65.11-1.28.31-1.87V6.66H3.39C2.72 8 2.33 9.52 2.33 11.12s.39 3.12 1.06 4.46l3.31-2.59z" fill="#FBBC05"/>
    <path d="M12.18 5.17c1.44 0 2.74.5 3.76 1.47l2.82-2.82C17.06 2.22 14.83 1.2 12.18 1.2c-3.83 0-7.15 2.18-8.79 5.46l3.31 2.59c.77-2.32 2.93-4.04 5.48-4.04z" fill="#EA4335"/>
  </svg>
);

export const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (!document.contains(target)) return;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Construct menu items based ONLY on valid/non-empty URLs
  interface ContactMenuItem {
    id: string;
    label: string;
    href: string;
    icon: React.ReactNode;
    colorClass: string;
    badge?: string;
  }

  const items: ContactMenuItem[] = [];

  // WhatsApp (ALWAYS if present)
  if (contactData.whatsapp && contactData.whatsapp.trim() !== '') {
    items.push({
      id: 'whatsapp',
      label: 'Chat on WhatsApp',
      href: contactData.whatsapp,
      icon: <WhatsAppIcon className="w-5 h-5 text-white" />,
      colorClass: 'bg-[#25D366] hover:bg-[#20ba59] shadow-emerald-500/20',
      badge: 'Quick Reply',
    });
  }

  // Email (ALWAYS if present)
  if (contactData.email && contactData.email.trim() !== '') {
    items.push({
      id: 'email',
      label: 'Send Email',
      href: `mailto:${contactData.email}`,
      icon: <Mail className="w-5 h-5 text-white" />,
      colorClass: 'bg-[#2563EB] hover:bg-[#1D4ED8] shadow-blue-500/20',
    });
  }

  // LinkedIn
  if (contactData.social.linkedin && contactData.social.linkedin.trim() !== '') {
    items.push({
      id: 'linkedin',
      label: 'LinkedIn Profile',
      href: contactData.social.linkedin,
      icon: <LinkedInIcon className="w-5 h-5 text-white" />,
      colorClass: 'bg-[#0A66C2] hover:bg-[#084e96] shadow-sky-600/20',
    });
  }

  // X / Twitter (Only if configured)
  if (contactData.social.x && contactData.social.x.trim() !== '') {
    items.push({
      id: 'x',
      label: 'X (Twitter)',
      href: contactData.social.x,
      icon: <XTwitterIcon className="w-4 h-4 text-white" />,
      colorClass: 'bg-[#0A1B4A] hover:bg-[#1D4ED8] shadow-blue-900/20',
    });
  }

  // Facebook Profile (Only if configured)
  if (contactData.social.facebook && contactData.social.facebook.trim() !== '') {
    items.push({
      id: 'facebook',
      label: 'Facebook Profile',
      href: contactData.social.facebook,
      icon: <FacebookIcon className="w-5 h-5 text-white" />,
      colorClass: 'bg-[#1877F2] hover:bg-[#1567d3] shadow-blue-600/20',
    });
  }

  // Facebook Page (Only if configured)
  if (contactData.social.facebookPage && contactData.social.facebookPage.trim() !== '') {
    items.push({
      id: 'facebookPage',
      label: 'Facebook Page',
      href: contactData.social.facebookPage,
      icon: <FacebookIcon className="w-5 h-5 text-white" />,
      colorClass: 'bg-[#1877F2] hover:bg-[#1567d3] shadow-blue-600/20',
      badge: 'Official Page',
    });
  }

  // Instagram (Only if configured)
  if (contactData.social.instagram && contactData.social.instagram.trim() !== '') {
    items.push({
      id: 'instagram',
      label: 'Instagram',
      href: contactData.social.instagram,
      icon: <InstagramIcon className="w-5 h-5 text-white" />,
      colorClass: 'bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] hover:opacity-95 shadow-pink-500/20',
    });
  }

  // Google Business Profile (Only if configured)
  if (contactData.social.googleBusiness && contactData.social.googleBusiness.trim() !== '') {
    items.push({
      id: 'googleBusiness',
      label: 'Google Business Profile',
      href: contactData.social.googleBusiness,
      icon: <GoogleBusinessIcon className="w-5 h-5" />,
      colorClass: 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 shadow-slate-300/30',
      badge: 'Verified',
    });
  }

  return (
    <div
      ref={menuRef}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end pointer-events-auto"
      aria-label="Contact options"
    >
      {/* Expanded Menu Stack */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="flex flex-col items-end gap-2.5 mb-3 max-h-[calc(100vh-130px)] overflow-y-auto hide-scrollbar p-1"
            role="menu"
            aria-label="Direct contact channels"
          >
            {items.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.id === 'email' ? undefined : '_blank'}
                rel={item.id === 'email' ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, x: 20, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.85 }}
                transition={{
                  duration: 0.18,
                  delay: (items.length - 1 - index) * 0.03,
                  ease: 'easeOut',
                }}
                className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-full"
                role="menuitem"
                aria-label={item.label}
              >
                {/* Text Label Pill on Hover / Visible on larger screens */}
                <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-[#0F286E] text-white text-[12px] font-['Lexend'] font-semibold shadow-lg border border-blue-400/30 opacity-90 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-150 whitespace-nowrap">
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 px-1.5 py-0.2 rounded bg-[#F97316] text-[10px] text-white uppercase font-bold">
                      {item.badge}
                    </span>
                  )}
                </span>

                {/* Circular Icon Button */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110 active:scale-95 ${item.colorClass}`}
                >
                  {item.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Toggle Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={isOpen ? 'Close contact menu' : 'Open contact channels'}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 focus:outline-none focus-visible:ring-3 focus-visible:ring-[#2563EB] cursor-pointer text-white select-none ${
          isOpen
            ? 'bg-[#0F286E] rotate-90 border-2 border-blue-400 shadow-blue-900/30'
            : 'bg-gradient-to-tr from-[#F97316] to-[#EA580C] hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(249,115,22,0.4)]'
        }`}
      >
        {/* Subtle Pulse Ring When Closed */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-[#F97316] opacity-35 animate-ping pointer-events-none" />
        )}

        <div className="pointer-events-none flex items-center justify-center transition-transform duration-200">
          {isOpen ? (
            <X className="w-6 h-6 text-white stroke-[2.5]" />
          ) : (
            <MessageSquare className="w-6 h-6 text-white stroke-[2] group-hover:scale-110 transition-transform duration-200" />
          )}
        </div>
      </button>
    </div>
  );
};
