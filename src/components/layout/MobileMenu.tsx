'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Mail, ChevronRight } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/portfolioData';

interface NavItem {
  label: string;
  path: string;
}

interface ServiceSublink {
  label: string;
  path: string;
  desc?: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  serviceSublinks?: ServiceSublink[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  serviceSublinks = [],
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs lg:hidden"
          />

          {/* Slide-out Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#0B1739] border-l border-blue-900/50 p-6 flex flex-col justify-between shadow-2xl lg:hidden overflow-y-auto"
          >
            {/* Header: Logo & Close */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-blue-900/50">
                <BrandLogo size="sm" theme="dark" />
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-[4px] text-blue-200 hover:text-white hover:bg-blue-800/40 transition-colors focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const isActive =
                    item.path === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.path);

                  return (
                    <div key={item.label}>
                      <Link
                        href={item.path}
                        onClick={onClose}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-[4px] text-[14px] font-['Lexend'] font-semibold transition-all ${
                          isActive
                            ? 'bg-[#2563EB]/25 text-[#93C5FD] border border-[#2563EB]/40'
                            : 'text-blue-100 hover:text-white hover:bg-blue-900/30'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-4 h-4 opacity-50" />
                      </Link>

                      {/* If item is Services, show sublinks indented */}
                      {item.path === '/services' && serviceSublinks.length > 0 && (
                        <div className="pl-4 pr-1 py-1 space-y-1">
                          {serviceSublinks.map((sub) => (
                            <Link
                              key={sub.path}
                              href={sub.path}
                              onClick={onClose}
                              className={`flex items-center justify-between py-1.5 px-3 rounded text-[12px] font-medium transition-colors ${
                                pathname === sub.path
                                  ? 'text-[#F97316] font-bold bg-[#F97316]/10'
                                  : 'text-blue-200/80 hover:text-white hover:bg-blue-900/20'
                              }`}
                            >
                              <span>{sub.label}</span>
                              <ChevronRight className="w-3 h-3 opacity-60" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-blue-900/50">
              <div className="mb-4 text-[12px] text-blue-200/80">
                <p className="font-semibold text-white mb-0.5">{personalInfo.role}</p>
                <p className="text-blue-300/70">2+ Years Commercial Experience</p>
              </div>

              <Link href="/contact" onClick={onClose} className="block w-full">
                <Button
                  variant="accent"
                  size="md"
                  className="w-full"
                  icon={<Mail className="w-4 h-4" />}
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
