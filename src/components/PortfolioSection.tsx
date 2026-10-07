import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface PortfolioSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects, onSelectProject }) => {
  return (
    <section id="works" className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs text-neutral-500 font-medium tracking-wide flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block" />
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] font-display tracking-tight">
            Latest Works
          </h2>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {projects.slice(0, 3).map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col gap-3.5"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#F2F2F4] shadow-xs">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 filter contrast-[1.03]"
                />

                {/* Overlaid Badge & Button on Card 2 (or on hover for all) */}
                {idx === 1 ? (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-white pointer-events-none">
                      <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                        Website
                      </span>
                      <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 font-mono">
                        halodigital.xyz
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                    <div className="w-11 h-11 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>

              {/* Caption */}
              <div className="flex items-center justify-between text-xs sm:text-[13px] text-neutral-800 px-1">
                <span className="font-medium text-[#111111] truncate">{project.title}</span>
                <span className="text-neutral-500 font-normal shrink-0 ml-2">{project.client}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="flex justify-center pt-2">
          <button
            onClick={() => onSelectProject(projects[0])}
            className="flex items-center gap-2 text-xs font-medium text-neutral-600 hover:text-black transition-colors"
          >
            <span>Check out More</span>
            <ArrowRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-black underline underline-offset-4">View More</span>
          </button>
        </div>

      </div>
    </section>
  );
};
