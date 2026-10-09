'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Layers } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';
import { Button } from './Button';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative z-10 w-full max-w-2xl rounded-[8px] bg-[#0F286E] bg-gradient-to-b from-[#0F286E] via-[#0D2260] to-[#0A1B4A] border border-blue-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.5)] p-6 sm:p-8 overflow-hidden text-white"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-[4px] text-blue-200 hover:text-white hover:bg-blue-800/50 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-blue-500/20 border border-blue-400/30 text-xs font-semibold text-blue-200 mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>

            {/* Title */}
            <h3 className="font-['Lexend'] text-2xl sm:text-3xl font-bold text-white mb-4">
              {project.title}
            </h3>

            {/* Optional Screenshot */}
            {project.image && (
              <div className="mb-6 rounded-[6px] overflow-hidden border border-blue-400/20 max-h-72 bg-[#06112C]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Description */}
            <p className="text-[15px] leading-[26px] text-blue-100/90 mb-6 font-normal">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <span className="text-[12px] font-bold uppercase tracking-wider text-blue-200/80 block mb-2.5">
                Technologies Applied
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[12px] font-semibold px-2.5 py-1 rounded-[3px] bg-[#0A1B4A] text-blue-100 border border-blue-400/25 hover:border-blue-300 hover:text-white transition-colors duration-150 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-blue-400/20">
              {project.liveUrl && (
                <Button
                  variant="accent"
                  size="md"
                  href={project.liveUrl}
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Live Preview
                </Button>
              )}
              {project.repoUrl && (
                <Button
                  variant="white"
                  size="md"
                  href={project.repoUrl}
                  icon={<Github className="w-4 h-4" />}
                >
                  Source Repository
                </Button>
              )}
              <Button
                variant="white"
                size="md"
                onClick={onClose}
              >
                Close Modal
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
