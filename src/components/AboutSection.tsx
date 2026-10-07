import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { UserProfile } from '../types';
import { defaultAboutPoints } from '../data/portfolioData';

interface AboutSectionProps {
  profile: UserProfile;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const togglePoint = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* 3-Column Grid Layout matching the template */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Heading & Philosophy & Hand-drawn Arrow (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#111111] font-display tracking-tight mb-6">
                About Me
              </h2>

              <p className="text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal mb-8 max-w-sm">
                {profile.detailedBio}
              </p>
            </div>

            {/* Hand-drawn whimsical curved arrow pointing towards the cards */}
            <div className="hidden lg:block pt-8 pl-4">
              <svg
                className="w-32 h-28 text-neutral-300"
                viewBox="0 0 100 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 65 Q 45 15, 85 45" />
                <path d="M72 44 L 85 45 L 82 32" />
              </svg>
            </div>
          </div>

          {/* Column 2: 120% Stat Card + Designer Portrait in White T-shirt (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Top Stat Card (120% Engagement) */}
            <div className="bg-[#F5F5F7] rounded-3xl p-7 sm:p-8 flex flex-col justify-between min-h-[220px]">
              {/* Icon badge */}
              <div className="w-10 h-10 rounded-full border border-neutral-300 bg-white flex items-center justify-center mb-6 shadow-xs">
                <svg className="w-5 h-5 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>

              <div>
                <span className="text-5xl sm:text-6xl font-normal text-[#111111] font-display block tracking-tight mb-2">
                  {profile.standoutMetric.value}
                </span>
                <p className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed max-w-xs">
                  {profile.standoutMetric.label}
                </p>
              </div>
            </div>

            {/* Bottom Photo Card: Smiling Designer in White T-shirt */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-100 shadow-xs group">
              <img
                src="/src/assets/images/about_designer_smile_1791384357933.jpg"
                alt="D.Nova Designer in Studio"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 filter grayscale-[15%]"
              />
            </div>

          </div>

          {/* Column 3: Thumbnail with Arrow + Expandable Accordion Points (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Top Card: Small square photo with circular hover arrow button */}
            <div
              onClick={onOpenBooking}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-neutral-100 cursor-pointer group shadow-xs"
            >
              <img
                src="/src/assets/images/hero_portrait_designer_1791383581493.jpg"
                alt="Creative Studio Work"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />

              {/* Centered Circular Dark Button with arrow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Bottom Card: Accordion Points with (+) Icons */}
            <div className="bg-[#F5F5F7] rounded-3xl p-7 sm:p-8 space-y-6">
              {defaultAboutPoints.map((text, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="border-b border-neutral-200/60 pb-5 last:border-b-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => togglePoint(idx)}
                      className="w-full flex items-start gap-3.5 text-left group"
                    >
                      <div className="w-6 h-6 rounded-full bg-neutral-200 group-hover:bg-neutral-300 flex items-center justify-center text-neutral-800 shrink-0 mt-0.5 transition-colors">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                      <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed font-normal">
                        {text}
                      </p>
                    </button>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
