'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Smartphone,
  CheckCircle2,
  WifiOff,
  Bell,
  Cpu,
  Shield,
  Zap,
  ArrowRight,
  HardDrive,
  Layers,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { ReviewsSection } from '../../components/sections/ReviewsSection';
import { Contact } from '../../components/sections/Contact';
import { MobileProcessSection } from '../../components/sections/MobileProcessSection';
import { ServiceFlowCards, ServiceFlowItem } from '../../components/ui/ServiceFlowCards';
import { fadeUp, staggerContainer } from '../../utils/motion';

export const MobileAppPage: React.FC = () => {
  const mobileFlowItems: ServiceFlowItem[] = [
    {
      id: 'cross-platform',
      number: '01',
      title: 'iOS & Android Apps',
      shortDescription: 'One unified codebase for iOS & Android with React Native.',
      fullDescription:
        'One clean codebase that runs smoothly on both Android phones and iPhones, saving time and money. Features fluid native gestures, smooth 60fps animations, and platform-specific UI polish.',
      icon: <Smartphone className="w-7 h-7" />,
      themeColor: '#2563EB',
      deliverables: [
        'React Native framework',
        'Smooth 60fps animations',
        'Native navigation transitions',
        'Universal phone and tablet support',
      ],
      technologies: ['React Native', 'React Native CLI', 'TypeScript', 'Android Studio'],
      href: '/contact',
    },
    {
      id: 'offline-first',
      number: '02',
      title: 'Offline-First Apps',
      shortDescription: 'Continue working without internet and auto-sync on reconnect.',
      fullDescription:
        'Apps that continue working when there is no internet connection, and sync data as soon as you reconnect. Perfect for field operations, remote audits, and spotty signal environments.',
      icon: <WifiOff className="w-7 h-7" />,
      themeColor: '#F97316',
      deliverables: [
        'Local device storage (AsyncStorage)',
        'Background data sync',
        'Zero data loss when offline',
        'Optimistic UI updates',
      ],
      technologies: ['AsyncStorage', 'SQLite', 'NetInfo', 'Background Sync'],
      href: '/contact',
    },
    {
      id: 'business-tools',
      number: '03',
      title: 'Business Mobile Tools',
      shortDescription: 'Field team apps with barcode scan, forms, and camera.',
      fullDescription:
        'Internal apps for warehouse staff, field technicians, order processing, and mobile inspections. Integrated directly with device hardware for barcode scanning and instant photo uploads.',
      icon: <HardDrive className="w-7 h-7" />,
      themeColor: '#0F286E',
      deliverables: [
        'Camera and barcode scanning',
        'Fast form submission',
        'Push notifications and alerts',
        'Hardware peripheral integration',
      ],
      technologies: ['Camera Kit', 'Barcode Scanner', 'REST API', 'Node.js'],
      href: '/contact',
    },
    {
      id: 'portals-booking',
      number: '04',
      title: 'Booking & Portals',
      shortDescription: 'Apps for clients to book, track orders, and view history.',
      fullDescription:
        'Customer-facing mobile portals where your clients can book appointments, track active deliveries, view account history, and receive instant push updates.',
      icon: <Bell className="w-7 h-7" />,
      themeColor: '#10B981',
      deliverables: [
        'Secure user account login',
        'Instant notifications',
        'Clean mobile user interface',
        'Real-time booking confirmations',
      ],
      technologies: ['Firebase FCM', 'Keychain', 'REST APIs', 'Stripe Auth'],
      href: '/contact',
    },
  ];

  const technologies = [
    { name: 'React Native', role: 'Universal mobile app engine' },
    { name: 'React Native CLI', role: 'Native Android build tooling' },
    { name: 'Android Studio', role: 'Android APK compilation & emulator' },
    { name: 'Gradle', role: 'Native Android build system' },
    { name: 'Firebase', role: 'Real-time database and auth' },
    { name: 'Firebase Cloud Messaging', role: 'Push notifications & background alerts' },
    { name: 'AsyncStorage', role: 'Local device data cache' },
    { name: 'React Native Keychain', role: 'Secure device password storage' },
    { name: 'TypeScript', role: 'Strict typing for app stability' },
  ];

  const processSteps = [
    { step: '01', title: 'Requirements', desc: 'Identify core app features, target Android API levels, offline needs, and push notification requirements.' },
    { step: '02', title: 'App Structure', desc: 'Architect screen navigation stacks, user journey wireframes, native modules, and local state management.' },
    { step: '03', title: 'Development', desc: 'Build clean React Native components, implement AsyncStorage/Keychain, and integrate backend REST APIs.' },
    { step: '04', title: 'Device Testing', desc: 'Test on physical Android devices and AVD emulators to verify touch responsiveness, network drops, and memory.' },
    { step: '05', title: 'Release', desc: 'Compile optimized Gradle production release builds, sign APK/AAB packages, and verify installation.' },
  ];

  return (
    <div className="pt-[72px] sm:pt-[80px] bg-white">
      {/* =========================================================================
          CUSTOM HERO COMPOSITION: SMARTPHONE DEVICE MOCKUP & LAYERED SCREENS
          ========================================================================= */}
      <section className="bg-[#0F286E] bg-gradient-to-b from-[#0F286E] via-[#1D4ED8] to-[#112A6E] text-white py-16 sm:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-[500px] h-[450px] bg-orange-500/15 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <motion.div
              initial={false}
              animate="visible"
              variants={staggerContainer(0.1)}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/40 text-[#FDBA74] text-[12px] font-semibold mb-5">
                <Smartphone className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Service 02 · Cross-Platform Mobile Apps</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-['Lexend'] text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] mb-5"
              >
                Fast &amp; User-Friendly <br />
                <span className="text-[#FDBA74]">Mobile Applications</span> <br />
                for Android &amp; iOS.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="font-hero-body text-blue-100/90 mb-8 max-w-xl"
              >
                I develop native-feel mobile applications with React Native CLI. Clean navigation, local offline storage, push notifications, and verified compatibility on real Android physical devices.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button variant="accent" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                    Request Mobile App
                  </Button>
                </Link>
                <a href="#mobile-workflow">
                  <Button variant="outline-white" size="lg">
                    View Process
                  </Button>
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 pt-6 border-t border-blue-400/25 flex items-center gap-6 text-[12.5px] text-blue-100/90 font-medium">
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#FDBA74]" />
                  <span>React Native CLI</span>
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#93C5FD]" />
                  <span>Offline Storage</span>
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Real Device Tested</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Right Side: Asymmetric Layered Mobile Composition (5 cols) */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              {/* Floating "MOBILE" Watermark */}
              <div
                className="absolute -top-10 -right-4 font-['Lexend'] text-7xl font-black text-orange-400/15 tracking-widest select-none pointer-events-none"
                aria-hidden="true"
              >
                APP
              </div>

              {/* Primary Smartphone Mockup with Ambient Movement */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 sm:w-72 rounded-[34px] bg-[#0A1B4A] border-4 border-blue-400/30 hover:border-blue-400/50 shadow-[0_25px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_70px_rgba(249,115,22,0.25)] transition-all duration-300 p-3 overflow-hidden z-10"
              >
                {/* Camera Punch Hole */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-[#06112C] rounded-full flex items-center justify-center gap-1.5 z-30">
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/80" />
                </div>

                {/* Inner Screen */}
                <div className="rounded-[26px] bg-[#0F2666]/90 pt-7 pb-4 px-3.5 space-y-3 text-white overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] text-blue-200/80 px-1 font-mono">
                    <span>09:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-orange-400 font-bold">5G</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Header inside phone */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-[10px] text-[#FDBA74] font-bold block uppercase tracking-wider">
                        React Native Engine
                      </span>
                      <h4 className="font-['Lexend'] text-sm font-bold text-white">
                        Production App
                      </h4>
                    </div>
                    <span className="w-7 h-7 rounded-full bg-orange-500/20 text-[#F97316] flex items-center justify-center text-xs font-bold">
                      APK
                    </span>
                  </div>

                  {/* Activity Metric Card */}
                  <div className="p-3 rounded-[8px] bg-[#0A1B4A]/90 border border-blue-400/25 space-y-1.5 hover:border-blue-300/40 hover:bg-[#143285] transition-colors">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-blue-100">Device Hardware Sync</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">Connected</span>
                    </div>
                    <div className="h-2 w-3/4 rounded bg-blue-300/40" />
                    <div className="h-1.5 w-1/2 rounded bg-blue-400/30" />
                  </div>

                  {/* Feature Badges */}
                  <div className="grid grid-cols-2 gap-2 text-center text-[10.5px]">
                    <div className="p-2 rounded-[6px] bg-[#F97316]/20 border border-orange-400/30 text-[#FDBA74] font-bold hover:scale-105 transition-transform cursor-default">
                      Offline Cache
                    </div>
                    <div className="p-2 rounded-[6px] bg-blue-500/20 border border-blue-400/30 text-blue-200 font-bold hover:scale-105 transition-transform cursor-default">
                      Push FCM
                    </div>
                  </div>

                  {/* Bottom Navigation Strip */}
                  <div className="pt-2 border-t border-blue-400/20 flex items-center justify-around text-[10px] text-blue-200/70">
                    <span className="text-[#FDBA74] font-bold">Home</span>
                    <span>Activity</span>
                    <span>Settings</span>
                  </div>
                </div>
              </motion.div>

              {/* Offset Floating Card: Real Android Hardware Verification */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 p-4 rounded-[10px] bg-white text-[#18191c] border border-[#e2e8f0] hover:border-orange-400/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 z-20 w-52 cursor-default"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-['Lexend'] font-bold text-[#2563EB] uppercase tracking-wider">
                    Hardware Verified
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h5 className="font-['Lexend'] text-[13px] font-bold text-[#18191c]">
                  Physical Android Touch
                </h5>
                <p className="text-[11px] text-[#6f7174]">Tested across screen densities</p>
              </motion.div>

              {/* Floating Top Badge */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-2 px-3.5 py-1.5 rounded-full bg-[#F97316] text-white font-['Lexend'] text-[11px] font-bold shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-20 flex items-center gap-1.5 cursor-default"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>60 FPS Native UI</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT I BUILD SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            category="Deliverables"
            title="What I Build For"
            highlight="Mobile Devices."
            highlightColor="orange"
            description="Functional, performant mobile apps customized for your business operations."
          />

          <ServiceFlowCards items={mobileFlowItems} defaultActiveIndex={0} showDetailCard={true} />
        </div>
      </section>

      {/* Mobile App Structured Roadmap */}
      <MobileProcessSection />

      {/* =========================================================================
          MOBILE TECHNOLOGIES
          ========================================================================= */}
      <section className="py-20 bg-[#f8f9fa] border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            category="Mobile Stack"
            title="Mobile Technologies In Active"
            highlight="Production."
            highlightColor="orange"
            description="The verified tools used to compile, test, and release reliable mobile apps."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-[6px] bg-white border border-[#e9ecef] hover:border-[#F97316]/40 hover:-translate-y-1 hover:shadow-xs transition-all duration-200 cursor-default"
              >
                <h4 className="font-['Lexend'] text-[15px] font-bold text-[#18191c] mb-1">
                  {tech.name}
                </h4>
                <p className="text-[12px] text-[#6f7174]">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY ADVANTAGES
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-slate-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <Cpu className="w-8 h-8 text-[#2563EB] mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-2 group-hover:text-[#2563EB] transition-colors">One Codebase for Two Stores</h4>
              <p className="text-[13.5px] leading-relaxed text-[#6f7174]">
                React Native runs on Android and iOS simultaneously, cutting down your development and maintenance costs.
              </p>
            </div>

            <div className="p-7 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-slate-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <WifiOff className="w-8 h-8 text-[#F97316] mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
              <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-2 group-hover:text-[#F97316] transition-colors">Offline Capability</h4>
              <p className="text-[13.5px] leading-relaxed text-[#6f7174]">
                Your team can continue saving data and filling out forms even when cellular data or WiFi is disconnected.
              </p>
            </div>

            <div className="p-7 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] hover:border-slate-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <Bell className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-2 group-hover:text-emerald-600 transition-colors">Push Notifications</h4>
              <p className="text-[13.5px] leading-relaxed text-[#6f7174]">
                Send instant alerts directly to customer lock screens using Firebase Cloud Messaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Client Reviews */}
      <ReviewsSection serviceFilter="mobile" />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};
