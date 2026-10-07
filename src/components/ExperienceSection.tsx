import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  onOpenBooking: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences, onOpenBooking }) => {
  // Row 4 (FutureTech) is expanded by default in the template
  const [expandedId, setExpandedId] = useState<string>('exp-4');

  const toggleRow = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs text-neutral-500 font-medium tracking-wide flex items-center gap-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block" />
              Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] font-display tracking-tight">
              Explore My Design Journey
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between">
            <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal mb-3 max-w-md lg:text-right">
              Over the past 4+ years, I've had the opportunity to work on a wide range of design projects, collaborating with diverse teams and clients to bring creative visions to life.
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#111111] hover:text-neutral-600 underline underline-offset-4 transition-colors"
            >
              <span>Book A Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* List of Experience Rows */}
        <div className="space-y-4">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className={`rounded-2xl sm:rounded-3xl transition-all duration-200 border ${
                  isExpanded
                    ? 'bg-[#F7F7F9] border-neutral-200/80 shadow-xs'
                    : 'bg-white hover:bg-[#FAFAFC] border-neutral-100'
                }`}
              >
                {/* Main Row Bar */}
                <div
                  onClick={() => toggleRow(exp.id)}
                  className="p-6 sm:p-7 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  {/* Left: Company & Dates */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium text-[#111111] font-display">
                      {exp.company}
                    </h3>
                    <p className="text-xs text-neutral-500 font-normal mt-1 flex items-center gap-2">
                      <span>• {exp.period}</span>
                    </p>
                  </div>

                  {/* Middle: Role narrative */}
                  <div className="flex-1 text-xs text-neutral-600 font-normal hidden lg:block">
                    {exp.summary}
                  </div>

                  {/* Right: Badges */}
                  <div className="flex items-center gap-2 shrink-0">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-[11px] px-3 py-1 rounded-full font-medium transition-colors ${
                          isExpanded && exp.id === 'exp-4'
                            ? 'bg-[#111111] text-white'
                            : 'bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Card Details (Exact match to FutureTech card in template) */}
                {isExpanded && (
                  <div className="px-6 pb-7 sm:px-8 sm:pb-8 pt-1 border-t border-neutral-200/60">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-4">
                      
                      {/* Left: 3 Photographic Thumbnails */}
                      <div className="lg:col-span-6 grid grid-cols-3 gap-3">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200 shadow-xs">
                          <img
                            src="/src/assets/images/sculptural_minimalist_warm_1791384383016.jpg"
                            alt="Design detail"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200 shadow-xs">
                          <img
                            src="/src/assets/images/sculptural_geometric_pastel_1791384398084.jpg"
                            alt="Architecture and materials"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200 shadow-xs">
                          <img
                            src="/src/assets/images/project_lumina_brand_1791383609770.jpg"
                            alt="Lighting and forms"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Right: Narrative Statement + Circular Dark Button */}
                      <div className="lg:col-span-6 flex items-center justify-between gap-6 pl-0 lg:pl-4">
                        <p className="text-xs sm:text-[13px] text-neutral-700 font-normal leading-relaxed max-w-md">
                          From crafting seamless user experiences to leading strategic product design initiatives, each experience has shaped my approach and strengthened my passion for solving design challenges
                        </p>

                        <button
                          onClick={onOpenBooking}
                          className="w-12 h-12 rounded-full bg-[#111111] hover:bg-black text-white flex items-center justify-center shrink-0 shadow-md hover:scale-105 transition-transform"
                          aria-label="View experience case study"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </button>
                      </div>

                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
