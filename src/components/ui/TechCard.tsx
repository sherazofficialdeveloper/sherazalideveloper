'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Palette,
  FileCode,
  ShieldCheck,
  Atom,
  Layers,
  Component,
  LayoutGrid,
  Wind,
  Server,
  Cpu,
  Boxes,
  Network,
  Key,
  Lock,
  FileText,
  Smartphone,
  Terminal,
  Settings,
  Flame,
  Bell,
  HardDrive,
  Shield,
  Wifi,
  Monitor,
  Zap,
  Database,
  Bot,
  CheckCircle2,
  Globe,
  Sparkles,
  GitBranch,
  Github,
  Cloud,
} from 'lucide-react';
import { TechItem } from '../../types/portfolio';

interface TechCardProps {
  item: TechItem;
  index: number;
}

export const TechCard: React.FC<TechCardProps> = ({ item, index }) => {
  // Render domain-specific Lucide icon
  const renderIcon = () => {
    const iconClass = "w-5 h-5 transition-colors duration-300";
    switch (item.icon) {
      case 'Code':
        return <Code className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Palette':
        return <Palette className={`${iconClass} text-[#F97316] group-hover:text-white`} />;
      case 'FileCode':
        return <FileCode className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'ShieldCheck':
        return <ShieldCheck className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Atom':
        return <Atom className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Layers':
        return <Layers className={`${iconClass} text-[#F97316] group-hover:text-white`} />;
      case 'Component':
        return <Component className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'LayoutGrid':
        return <LayoutGrid className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Wind':
        return <Wind className={`${iconClass} text-[#F97316] group-hover:text-white`} />;
      case 'Server':
        return <Server className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Cpu':
        return <Cpu className={`${iconClass} text-[#F97316] group-hover:text-white`} />;
      case 'Boxes':
        return <Boxes className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Network':
        return <Network className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Key':
        return <Key className={`${iconClass} text-[#F97316] group-hover:text-white`} />;
      case 'Lock':
        return <Lock className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'FileText':
        return <FileText className={`${iconClass} text-[#6f7174] group-hover:text-white`} />;
      case 'Smartphone':
        return <Smartphone className={`${iconClass} text-[#F97316] group-hover:text-white`} />;
      case 'Terminal':
        return <Terminal className={`${iconClass} text-[#18191c] group-hover:text-white`} />;
      case 'Settings':
        return <Settings className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Flame':
        return <Flame className={`${iconClass} text-[#F97316] group-hover:text-white`} />;
      case 'Bell':
        return <Bell className={`${iconClass} text-[#F97316] group-hover:text-white`} />;
      case 'HardDrive':
        return <HardDrive className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Shield':
        return <Shield className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Wifi':
        return <Wifi className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Monitor':
        return <Monitor className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Zap':
        return <Zap className={`${iconClass} text-[#F97316] group-hover:text-white`} />;
      case 'Database':
        return <Database className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Bot':
        return <Bot className={`${iconClass} text-[#F97316] group-hover:text-white`} />;
      case 'CheckCircle2':
        return <CheckCircle2 className={`${iconClass} text-emerald-500 group-hover:text-white`} />;
      case 'Globe':
        return <Globe className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      case 'Sparkles':
        return <Sparkles className={`${iconClass} text-[#F97316] group-hover:text-white`} />;
      case 'GitBranch':
        return <GitBranch className={`${iconClass} text-[#F97316] group-hover:text-white`} />;
      case 'Github':
        return <Github className={`${iconClass} text-[#18191c] group-hover:text-white`} />;
      case 'Cloud':
        return <Cloud className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
      default:
        return <Code className={`${iconClass} text-[#2563EB] group-hover:text-white`} />;
    }
  };

  const isOrange = index % 2 === 1;
  const fillGradient = isOrange
    ? 'from-[#F97316] to-[#EA580C]'
    : 'from-[#2563EB] to-[#1D4ED8]';

  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }}
      className="group relative w-[240px] sm:w-[260px] h-[132px] shrink-0 rounded-[6px] bg-white border border-[#e9ecef] hover:border-transparent shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)] transition-all duration-300 p-4 flex flex-col justify-between overflow-hidden cursor-pointer select-none hover:-translate-y-1.5 hover:scale-[1.015]"
    >
      {/* ========================================================
          ANIMATED ACCENT LAYER: TRAVELS FROM BOTTOM TO TOP
          ======================================================== */}
      <div
        className={`absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-t ${fillGradient} transform translate-y-full transition-transform duration-400 ease-out group-hover:translate-y-0 z-0 pointer-events-none`}
        aria-hidden="true"
      />

      {/* Top 2.5px Line Accent */}
      <span
        className={`absolute top-0 left-0 w-full h-[2.5px] z-10 ${
          isOrange ? 'bg-[#F97316]' : 'bg-[#2563EB]'
        }`}
      />

      {/* Header Row: Category/Type Tag + 3D Flipping Icon Box */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-[10.5px] font-['Lexend'] font-bold uppercase tracking-wider text-[#6f7174] group-hover:text-white/90 transition-colors duration-300">
            {item.category}
          </span>
          {item.type && (
            <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-[3px] bg-[#f4f5f8] text-[#18191c] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
              {item.type}
            </span>
          )}
        </div>

        {/* ========================================================
            3D ICON FLIP CONTAINER
            Flips 180° / 360° on hover with smooth 3D perspective
            ======================================================== */}
        <div className="w-8 h-8 rounded-[4px] bg-[#f8f9fa] border border-[#e2e8f0] flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300 [perspective:1000px] shrink-0">
          <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:[transform:rotateY(180deg)]">
            {renderIcon()}
          </div>
        </div>
      </div>

      {/* Main Technology Name & Short Description */}
      <div className="relative z-10">
        <h4 className="font-['Lexend'] text-[15px] font-bold text-[#18191c] group-hover:text-white transition-colors duration-300 leading-tight mb-0.5">
          {item.name}
        </h4>
        <p className="text-[11.5px] leading-[16px] text-[#6f7174] group-hover:text-white/90 transition-colors duration-300 line-clamp-1">
          {item.description}
        </p>
      </div>

      {/* Subtle Bottom Accent Indicator */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-medium text-slate-400 group-hover:text-white/80 transition-colors duration-300 pt-1 border-t border-slate-100 group-hover:border-white/20">
        <span>Verified Tool</span>
        <span className="font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Ready ↗
        </span>
      </div>
    </motion.div>
  );
};
