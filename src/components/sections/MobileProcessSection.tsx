'use client';

import React from 'react';
import {
  Smartphone,
  Layers,
  Code2,
  CheckCircle2,
  Rocket,
} from 'lucide-react';
import { ProcessTimelineSection, ProcessStep } from '../ui/ProcessTimelineSection';

export const MobileProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      name: 'Understand',
      label: 'DISCOVERY',
      tagline: 'Native Scope, Permissions & Hardware Audit',
      duration: 'Days 1–2',
      shortDescPre: 'Mapping mobile user journeys, device permissions, and',
      highlightPhrase: 'device permissions',
      shortDescPost: 'before starting code.',
      overview:
        'Map out core mobile user journeys, device permissions (camera, location, notifications), target Android/iOS versions, and offline caching requirements before starting development.',
      icon: <Smartphone className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Device Permissions Matrix', desc: 'Camera, storage, biometric, and GPS permission map.' },
        { title: 'React Native CLI Blueprint', desc: 'Modular cross-platform native architecture plan.' },
        { title: 'Offline Storage Strategy', desc: 'Local caching rules and background sync model.' },
        { title: 'Target API Baselines', desc: 'Support standards for Android 11+ and iOS 15+.' },
      ],
      techStack: ['React Native CLI', 'Android Studio', 'Xcode', 'Permissions Map'],
      engineerNote: 'Locking native permissions upfront avoids app rejection during store review.',
      statusText: 'Matrix Approved',
    },
    {
      number: '02',
      name: 'UX/UI',
      label: 'GESTURES',
      tagline: 'Native Component Hierarchy & 60fps Gestures',
      duration: 'Days 2–4',
      shortDescPre: 'Designing fluid touch gestures, navigation stacks, and',
      highlightPhrase: 'fluid touch gestures',
      shortDescPost: 'for single-thumb ergonomics.',
      overview:
        'Design fluid mobile navigation stacks, responsive touch components, bottom sheet modals, and pull-to-refresh interactions optimized for single-thumb mobile ergonomics.',
      icon: <Layers className="w-7 h-7 text-[#F97316]" strokeWidth={1.75} />,
      themeColor: '#F97316',
      accentBg: 'bg-orange-50 border-orange-200/70',
      accentText: 'text-[#EA580C]',
      deliverables: [
        { title: 'React Navigation Hierarchy', desc: 'Native stack, drawer, and bottom tab navigators.' },
        { title: '60fps Reanimated Gestures', desc: 'Smooth swipe, pinch, and sheet animations.' },
        { title: 'Ergonomic Mobile Layouts', desc: 'Single-thumb reachability on all screen sizes.' },
        { title: 'Dark & Light Mode Themes', desc: 'System-matched adaptive color palettes.' },
      ],
      techStack: ['React Navigation', 'Gesture Handler', 'Reanimated 3', 'Figma'],
      engineerNote: 'Hardware-accelerated animations ensure the app feels genuinely native, not web-wrapped.',
      statusText: 'UI Locked',
    },
    {
      number: '03',
      name: 'Build',
      label: 'BUILD',
      tagline: 'React Native CLI Codebase & Offline Persistence',
      duration: 'Sprint Phase',
      shortDescPre: 'Writing type-safe TypeScript code with encrypted',
      highlightPhrase: 'offline persistence',
      shortDescPost: 'and SQLite caching.',
      overview:
        'Engineer clean TypeScript mobile code using React Native CLI. Implement local data caching with SQLite/AsyncStorage and secure biometric credential encryption via Keychain.',
      icon: <Code2 className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Type-Safe Mobile Codebase', desc: 'Modular React Native architecture in TypeScript.' },
        { title: 'Encrypted Biometric Storage', desc: 'Keychain / Keystore token and password security.' },
        { title: 'Offline SQLite Storage Engine', desc: 'Instant offline read/write and optimistic UI.' },
        { title: 'REST API Integration', desc: 'Typed network client with auto-refreshing JWTs.' },
      ],
      techStack: ['React Native', 'TypeScript', 'AsyncStorage', 'SQLite', 'Keychain'],
      engineerNote: 'Building with React Native CLI gives direct access to native APIs without Expo restrictions.',
      statusText: 'Alpha Built',
    },
    {
      number: '04',
      name: 'Test',
      label: 'TESTING',
      tagline: 'Physical Android Hardware & Battery QA',
      duration: 'QA Phase',
      shortDescPre: 'Testing on physical phones for memory leaks and',
      highlightPhrase: 'real physical phones',
      shortDescPost: 'with zero crashes.',
      overview:
        'Verify build stability directly on real physical Android smartphones of varying screen sizes and processor speeds. Test network drops, battery drain, and memory usage.',
      icon: <CheckCircle2 className="w-7 h-7 text-[#F97316]" strokeWidth={1.75} />,
      themeColor: '#F97316',
      accentBg: 'bg-orange-50 border-orange-200/70',
      accentText: 'text-[#EA580C]',
      deliverables: [
        { title: 'Real Physical Phone QA', desc: 'Tested on budget, mid-range, and flagship Android devices.' },
        { title: 'Offline Network Drop Tests', desc: 'Zero crash rate when dropping and reconnecting WiFi.' },
        { title: 'Memory Profiler Inspection', desc: '0 residual memory leaks and steady 60fps rendering.' },
        { title: 'Battery Efficiency Audit', desc: 'Minimized background CPU cycles and wake locks.' },
      ],
      techStack: ['Physical Androids', 'Android Profiler', 'AVD Emulators', 'Systrace'],
      engineerNote: 'Emulators hide performance stutters; physical testing guarantees real-world smoothness.',
      statusText: 'QA Verified',
    },
    {
      number: '05',
      name: 'Release',
      label: 'RELEASE',
      tagline: 'Production APK/AAB Compilation & Signing',
      duration: 'Release Day',
      shortDescPre: 'Generating signed release bundles, upload keystores, and',
      highlightPhrase: 'signed release bundles',
      shortDescPost: 'ready for store.',
      overview:
        'Compile optimized release builds (Android App Bundle AAB and APK), sign with production keystores, set up ProGuard obfuscation, and prepare store-ready listings.',
      icon: <Rocket className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />,
      themeColor: '#2563EB',
      accentBg: 'bg-blue-50 border-blue-200/70',
      accentText: 'text-[#2563EB]',
      deliverables: [
        { title: 'Signed Production AAB & APK', desc: 'ProGuard-shrunk release binaries ready for install.' },
        { title: 'Keystore & Credentials', desc: 'Secure transfer of release keystores and passwords.' },
        { title: 'Store Assets & Metadata', desc: 'Icons, splash screens, and store listing preparation.' },
        { title: '100% Mobile Source Code', desc: 'Full Git repository handover with build instructions.' },
      ],
      techStack: ['Android App Bundle', 'ProGuard', 'Release Keystores', 'Git Handover'],
      engineerNote: 'You receive the cryptographic keystores and 100% source code with no lock-in.',
      statusText: 'Ready for Store',
    },
  ];

  return (
    <ProcessTimelineSection
      id="mobile-workflow"
      category="Mobile App Workflow"
      title="From Architecture To App Store"
      highlight="Mobile Engineering."
      highlightColor="orange"
      description="A structured 5-stage mobile workflow covering permission audits, 60fps gesture interfaces, offline SQLite sync, and store compilation."
      steps={steps}
      contactSubject="Mobile App Project Inquiry"
    />
  );
};

