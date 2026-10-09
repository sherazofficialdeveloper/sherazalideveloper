'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FolderGit2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';
import { Button } from '../ui/Button';
import { projectsData } from '../../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../../types/portfolio';

const PROJECTS_PER_PAGE = 9;

export const Projects: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const categories: ProjectCategory[] = [
    'All',
    'Website',
    'Landing Page',
    'E-Commerce',
    'Mobile App',
    'Desktop Application',
    'Automation Software',
    'Admin Dashboard',
    'In Development',
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;

    return projectsData.filter((item) => {
      if (item.category === selectedCategory) return true;
      if (item.additionalCategories?.includes(selectedCategory)) return true;
      return false;
    });
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;

  const displayedProjects = isHomePage
    ? filteredProjects.slice(0, 6)
    : filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (typeof document !== 'undefined') {
      const grid = document.getElementById('projects-grid');
      if (grid) {
        const yOffset = -100;
        const y = grid.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white relative border-b border-[#e9ecef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <SectionHeading
          category="Our Work"
          title="Case Studies &"
          highlight="Recent Work"
          description="Explore commercial projects across web applications, cross-platform mobile apps, native desktop software, and automated workflows."
        />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`font-['Lexend'] text-[13px] font-semibold px-5 py-2.5 rounded-[4px] transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                    : 'bg-[#f4f5f8] text-[#18191c] hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {displayedProjects.length > 0 ? (
          <div>
            <div
              id="projects-grid"
              key={`${selectedCategory}-${currentPage}`}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12 animate-fadeIn auto-rows-fr"
            >
              {displayedProjects.map((project) => (
                <div key={project.id} className="h-full flex">
                  <ProjectCard
                    project={project}
                    onSelect={(p) => setSelectedProject(p)}
                  />
                </div>
              ))}
            </div>

            {!isHomePage && totalPages > 1 && (
              <div className="flex flex-col items-center gap-4 mb-12">
                <div className="flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className="w-10 h-10 rounded-md bg-white border border-slate-200 hover:border-[#2563EB] hover:text-[#2563EB] text-slate-700 flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-700 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      aria-current={currentPage === page ? 'page' : undefined}
                      className={`min-w-[40px] h-10 px-3 rounded-md font-['Lexend'] text-[13px] font-bold transition-all cursor-pointer ${
                        currentPage === page
                          ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-[#2563EB] hover:text-[#2563EB]'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className="w-10 h-10 rounded-md bg-white border border-slate-200 hover:border-[#2563EB] hover:text-[#2563EB] text-slate-700 flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-700 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[12.5px] font-hero-body text-slate-500">
                  Showing{' '}
                  <span className="font-semibold text-slate-700">{startIndex + 1}</span>
                  {' – '}
                  <span className="font-semibold text-slate-700">
                    {Math.min(startIndex + PROJECTS_PER_PAGE, filteredProjects.length)}
                  </span>
                  {' of '}
                  <span className="font-semibold text-slate-700">{filteredProjects.length}</span>
                  {' projects'}
                </p>
              </div>
            )}

            {isHomePage && (
              <div className="text-center pt-4">
                <Link href="/projects">
                  <Button variant="accent" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                    Explore All Portfolio Projects
                  </Button>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-md mx-auto p-8 rounded-[8px] bg-[#f8f9fa] border border-[#e9ecef] text-center">
            <FolderGit2 className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="font-['Lexend'] text-lg font-bold text-[#18191c] mb-1">
              No Projects Found
            </h4>
            <p className="text-[13px] text-[#6f7174] mb-4">
              No projects currently listed under category "{selectedCategory}".
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className="text-[13px] font-bold text-[#2563EB] hover:underline"
            >
              Reset to All Projects
            </button>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};