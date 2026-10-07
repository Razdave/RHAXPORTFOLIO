import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { UserProfile } from '../types';

interface HeroProps {
  profile: UserProfile;
  onOpenBooking: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-white">
      
      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full flex-1 flex flex-col justify-between">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 pt-6 sm:pt-10">
          
          {/* Left Column (Stats + Giant Headline) */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10">
            
            {/* Top Left Stats Pair */}
            <div className="flex items-start gap-12 sm:gap-16 mb-12 sm:mb-16">
              <div>
                <span className="text-3xl sm:text-4xl font-normal text-[#111111] font-display block tracking-tight">
                  {profile.stats[0]?.value || '+200'}
                </span>
                <span className="text-xs text-neutral-500 font-normal mt-1 block">
                  {profile.stats[0]?.label || 'Project completed'}
                </span>
              </div>

              <div>
                <span className="text-3xl sm:text-4xl font-normal text-[#111111] font-display block tracking-tight">
                  {profile.stats[1]?.value || '+50'}
                </span>
                <span className="text-xs text-neutral-500 font-normal mt-1 block">
                  {profile.stats[1]?.label || 'Startup raised'}
                </span>
              </div>
            </div>

            {/* Giant Typographic Headline */}
            <div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-[#111111] font-display tracking-tight leading-[0.95] mb-6">
                {profile.greetingHeadline || 'Hello'}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-light tracking-wide">
                {profile.bioSubtitle || "— It's D.Nova a design wizerd"}
              </p>
            </div>

          </div>

          {/* Right Column: Hero Portrait */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-end relative">
            <div className="relative w-full max-w-lg lg:max-w-none flex justify-center lg:justify-end">
              
              {!imageError ? (
                <div className="relative w-full max-w-[460px] aspect-[4/5] overflow-hidden flex items-end">
                  <img
                    src="/src/assets/images/hero_designer_glasses_1791384344068.jpg"
                    alt={`${profile.name} - ${profile.title}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top filter grayscale contrast-[1.08] mix-blend-multiply"
                  />
                  {/* Subtle fade at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                </div>
              ) : (
                <div className="w-80 h-96 bg-neutral-100 rounded-2xl flex items-center justify-center text-neutral-400">
                  <span>Portrait</span>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Bottom Marginal Row */}
        <div className="grid grid-cols-12 items-end pt-8 pb-4 text-xs text-neutral-400 border-t border-transparent">
          
          {/* Left Vertical / Marginal Indicators */}
          <div className="col-span-4 sm:col-span-3 flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-wider text-neutral-400">
              2024
            </span>
            <span className="h-3 w-[1px] bg-neutral-300" aria-hidden="true" />
            <span className="text-[11px] text-neutral-400 hidden sm:inline">
              Product designer
            </span>
          </div>

          {/* Center Scroll Indicator */}
          <div className="col-span-4 sm:col-span-6 flex justify-center">
            <a
              href="#about"
              className="flex items-center gap-1.5 text-xs text-neutral-600 hover:text-black transition-colors group"
            >
              <span>Scroll down</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right margin space */}
          <div className="col-span-4 sm:col-span-3" />

        </div>

      </div>

    </section>
  );
};
