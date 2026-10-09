'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ExternalLink,
  Layers,
  PlayCircle,
  Smartphone,
  X,
  Download,
  Github,
} from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [showVideo, setShowVideo] = useState(false);

  const hasLiveUrl = Boolean(project.liveUrl);
  const hasPlayStore = Boolean(project.playStoreUrl);
  const hasApk = Boolean(project.apkUrl);
  const hasVideo = Boolean(project.videoUrl);

  return (
    <motion.div
      layout
      initial={false}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-[6px] bg-white border border-[#e9ecef] hover:border-[#2563EB]/40 shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[#f4f5f8]">
        <AnimatePresence mode="wait">
          {showVideo && project.videoUrl ? (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black z-20"
            >
              <VideoEmbed url={project.videoUrl} title={project.title} />

              <button
                type="button"
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
                className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-sm transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="thumb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] text-slate-500 p-6 text-center">
                  <Layers className="w-10 h-10 mb-2 text-[#2563EB] group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-['Lexend'] text-[12px] font-bold text-[#18191c] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              )}

              {project.statusBadge && (
                <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-[#F97316] text-white text-[10.5px] font-bold uppercase tracking-wider shadow-md">
                  {project.statusBadge}
                </span>
              )}

              <div className="absolute inset-0 bg-[#0F286E]/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <button
                  type="button"
                  onClick={() => onSelect(project)}
                  className="px-6 py-3 rounded-[4px] bg-[#F97316] text-white font-['Lexend'] text-[13px] font-semibold flex items-center gap-2 shadow-lg hover:bg-[#EA580C] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>View Full Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F97316] block mb-2">
            {project.category}
          </span>
          <h3 className="font-['Lexend'] text-[20px] font-bold text-[#18191c] group-hover:text-[#2563EB] transition-colors duration-200 mb-3 leading-snug">
            {project.title}
          </h3>
          <p className="text-[14px] leading-[24px] text-[#6f7174] line-clamp-3 mb-5">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#f1f3f6] mb-5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium text-[#18191c] bg-[#f4f5f8] hover:bg-blue-50 hover:text-[#2563EB] px-2.5 py-1 rounded-[3px] border border-transparent transition-colors duration-150"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2 text-[13px] flex-wrap">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="group/action font-['Lexend'] font-bold text-[#18191c] hover:text-[#2563EB] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Details</span>
              <ArrowUpRight className="w-4 h-4 group-hover/action:translate-x-1 group-hover/action:-translate-y-1 transition-transform duration-200" />
            </button>

            <div className="flex items-center gap-1.5 flex-wrap">
              {hasLiveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[11px] font-bold transition-all"
                >
                  Live Demo
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {hasPlayStore && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#01875F] hover:bg-[#006F4D] text-white text-[11px] font-bold transition-all"
                >
                  Play Store
                  <Smartphone className="w-3 h-3" />
                </a>
              )}

              {hasApk && (
                <a
                  href={project.apkUrl}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0F286E] hover:bg-[#1D4ED8] text-white text-[11px] font-bold transition-all"
                >
                  Download APK
                  <Download className="w-3 h-3" />
                </a>
              )}

              {hasVideo && !showVideo && (
                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F97316] hover:bg-[#EA580C] text-white text-[11px] font-bold transition-all cursor-pointer"
                >
                  Watch Demo
                  <PlayCircle className="w-3.5 h-3.5" />
                </button>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-full bg-[#f4f5f8] hover:bg-[#1D4ED8] hover:text-white text-[#18191c] flex items-center justify-center hover:scale-110 hover:shadow-xs transition-all duration-200"
                  aria-label="GitHub repository"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ============================================================
   VideoEmbed — Smart YouTube / Vimeo iframe with fullscreen
   ============================================================ */
const VideoEmbed: React.FC<{ url: string; title: string }> = ({ url, title }) => {
  const embedUrl = React.useMemo(() => {
    if (!url) return '';

    const ytMatch = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
    );
    if (ytMatch && ytMatch[1]) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`;
    }

    const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeoMatch && vimeoMatch[1]) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
    }

    return url;
  }, [url]);

  if (!embedUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white text-sm">
        Invalid video URL
      </div>
    );
  }

  return (
    <iframe
      src={embedUrl}
      title={title}
      className="w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      allowFullScreen
      loading="lazy"
    />
  );
};