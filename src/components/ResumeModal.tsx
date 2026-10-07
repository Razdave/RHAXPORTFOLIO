import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check } from 'lucide-react';
import { UserProfile, ExperienceItem } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  experiences: ExperienceItem[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile, experiences }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const text = `${profile.name} - ${profile.title}\n${profile.location} | ${profile.email}\n\nSummary:\n${profile.detailedBio}\n\nKey Metrics:\n${profile.stats.map(s => `${s.value} ${s.label}`).join(' | ')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:fixed print:inset-0">
      <div className="fixed inset-0 print:hidden" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-3xl bg-white border border-neutral-200 rounded-3xl shadow-2xl z-10 overflow-hidden my-auto text-[#111111] print:border-none print:shadow-none">
        
        {/* Action Bar (hidden in print) */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-neutral-100 bg-[#FAFAFC] print:hidden">
          <span className="text-xs text-neutral-500 font-medium">
            Curriculum Vitae Preview
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs text-neutral-600 hover:text-black bg-neutral-100 rounded-full transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Summary'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-[#111111] hover:bg-black rounded-full transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-black rounded-full ml-1"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto space-y-8 text-neutral-800 print:max-h-none print:overflow-visible">
          
          {/* Header */}
          <div className="border-b border-neutral-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-normal text-[#111111] font-display">
                {profile.name}
              </h1>
              <span className="text-xs font-mono text-neutral-500">
                {profile.availability}
              </span>
            </div>
            
            <p className="text-base text-neutral-700 mt-1 font-medium">
              {profile.title}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mt-3 font-mono">
              <span>{profile.email}</span>
              <span aria-hidden="true">·</span>
              <span>{profile.phone}</span>
              <span aria-hidden="true">·</span>
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2 font-medium">
              Profile Overview
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700">
              {profile.detailedBio}
            </p>
          </div>

          {/* Experience Timeline */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4 font-medium">
              Professional Journey
            </h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="text-base font-semibold text-[#111111]">
                      {exp.role} <span className="font-normal text-neutral-500">at {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-neutral-500">
                      {exp.period} · {exp.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600">
                    {exp.summary}
                  </p>

                  <ul className="list-disc list-inside text-xs text-neutral-500 space-y-1 pl-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2 font-medium">
                Core Specializations
              </h2>
              <div className="text-xs text-neutral-600 space-y-1">
                <p>• UI/UX Systems & High-Fidelity Prototyping</p>
                <p>• Brand Direction & Tactile Visual Systems</p>
                <p>• Client Engagement Optimization (+120%)</p>
                <p>• Cross-Disciplinary Leadership</p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2 font-medium">
                Accolades
              </h2>
              <div className="text-xs text-neutral-600 space-y-1">
                <p className="font-medium text-[#111111]">Product Hunt & Awwwards Features</p>
                <p>+200 Projects Completed Across 4+ Years</p>
                <p>+50 Startups Aided in Fundraising</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
