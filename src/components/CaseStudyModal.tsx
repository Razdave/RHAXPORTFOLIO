import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, BarChart2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenBooking }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm overflow-y-auto">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-white border border-neutral-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-[#111111]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-neutral-100 bg-[#FAFAFC]">
          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-500 hover:text-black hover:bg-neutral-200/60 transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-8 md:p-10 space-y-8">
          
          {/* Main Title & Metric Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] font-display [text-wrap:balance]">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-2xl leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="shrink-0 self-start bg-neutral-100 border border-neutral-200 px-4 py-2.5 rounded-2xl text-right">
              <span className="text-[11px] text-neutral-500 block">Demonstrated Impact</span>
              <span className="text-sm font-semibold text-[#111111]">{project.metricsBadge}</span>
            </div>
          </div>

          {/* Large Hero Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-xs">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter contrast-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 text-xs font-mono text-white bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm">
              Live Production Showcase
            </div>
          </div>

          {/* Key Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#F7F7F9] rounded-2xl border border-neutral-200/60">
            {project.keyStats.map((stat, sIdx) => (
              <div key={sIdx} className="flex flex-col">
                <span className="text-xs text-neutral-500 mb-1">{stat.label}</span>
                <span className="text-2xl font-bold text-[#111111] font-mono tabular-nums">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Narrative Grid: Challenge vs. Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                <BarChart2 className="w-3.5 h-3.5 text-neutral-800" />
                <span>The Core Challenge</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-800" />
                <span>Strategic Architecture</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="p-5 bg-[#F5F5F7] rounded-2xl border border-neutral-200/60">
            <span className="text-xs font-mono text-neutral-500 block mb-1">Business & User Impact</span>
            <p className="text-sm sm:text-base font-medium text-[#111111] leading-relaxed">
              {project.impact}
            </p>
          </div>

          {/* Tech Stack & Design Systems (Clean unboxed tags) */}
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
              Deliverables & Tooling
            </span>
            <div className="text-xs text-neutral-600">
              {project.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span className="hover:text-black transition-colors">{tag}</span>
                  {idx < project.tags.length - 1 && (
                    <span className="mx-2 text-neutral-400" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8 py-5 border-t border-neutral-100 bg-[#FAFAFC]">
          <span className="text-xs text-neutral-500">
            Looking for something similar for your product?
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#111111] hover:bg-black rounded-full transition-colors whitespace-nowrap"
            >
              <span>Discuss This Architecture</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-neutral-600 hover:text-black bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
