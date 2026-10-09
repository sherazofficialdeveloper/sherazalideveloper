'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';
import { Button } from '../ui/Button';
import { TopBar } from './TopBar';
import { MobileMenu } from './MobileMenu';
import { ServicesMegaMenu } from './ServicesMegaMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const clearDropdownTimeout = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearDropdownTimeout();
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    clearDropdownTimeout();
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 400);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services', hasDropdown: true },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  const serviceSublinks = [
    { label: 'Website Development', path: '/services/website-development', desc: 'Modern responsive websites and web apps' },
    { label: 'Mobile App Development', path: '/services/mobile-app-development', desc: 'Android and mobile apps with React Native' },
    { label: 'Desktop Software Development', path: '/services/desktop-development', desc: 'Custom desktop software with Electron.js' },
    { label: 'Bots & Automation', path: '/services/bots-automation', desc: 'Process automation tools and background scripts' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    clearDropdownTimeout();
  }, [pathname]);

  useEffect(() => () => clearDropdownTimeout(), []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
        <div className={`transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
          <TopBar />
        </div>

        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.06)] py-3 border-b border-[#e9ecef]'
              : 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-4 border-b border-[#f1f3f6]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
            <Link href="/" className="focus:outline-none shrink-0">
              <BrandLogo size="md" />
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => {
                const isActive =
                  item.path === '/' ? pathname === '/' : pathname.startsWith(item.path);

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative group/services"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={item.path}
                        onMouseEnter={handleMouseEnter}
                        className={`group relative font-['Lexend'] text-[15px] font-semibold tracking-tight transition-colors py-2 flex items-center gap-1.5 ${
                          isActive ? 'text-[#2563EB]' : 'text-[#18191c] hover:text-[#F97316]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 opacity-60 transition-all duration-200 ${
                            servicesDropdownOpen
                              ? 'rotate-180 opacity-100'
                              : 'group-hover:translate-y-0.5 group-hover:opacity-100'
                          }`}
                        />
                        {isActive ? (
                          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563EB] rounded-full" />
                        ) : (
                          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F97316] group-hover:w-full transition-all duration-300 rounded-full" />
                        )}
                      </Link>

                      {/* Mega Menu Dropdown Container with Continuous Hover Bridge */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 z-[999] pt-2 transition-all duration-200 ${
                          servicesDropdownOpen
                            ? 'opacity-100 visible pointer-events-auto'
                            : 'opacity-0 invisible pointer-events-none group-hover/services:opacity-100 group-hover/services:visible group-hover/services:pointer-events-auto'
                        }`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <ServicesMegaMenu onClose={() => setServicesDropdownOpen(false)} />
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.path}
                    className={`group relative font-['Lexend'] text-[15px] font-semibold tracking-tight transition-colors py-2 ${
                      isActive ? 'text-[#2563EB]' : 'text-[#18191c] hover:text-[#F97316]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563EB] rounded-full" />
                    ) : (
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F97316] group-hover:w-full transition-all duration-300 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <Link href="/contact">
                  <Button variant="accent" size="sm">Let's Talk</Button>
                </Link>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-[4px] text-[#18191c] hover:text-[#2563EB] hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        serviceSublinks={serviceSublinks}
      />
    </>
  );
};