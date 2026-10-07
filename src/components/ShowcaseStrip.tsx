import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { defaultShowcaseCarousel } from '../data/portfolioData';

interface ShowcaseStripProps {
  onOpenBooking: () => void;
}

export const ShowcaseStrip: React.FC<ShowcaseStripProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {defaultShowcaseCarousel.map((item) => (
            <div
              key={item.id}
              onClick={onOpenBooking}
              className="group cursor-pointer flex flex-col gap-3"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#F2F2F4] shadow-xs">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 filter contrast-[1.03]"
                />

                {/* Dark circular hover button overlay (present on center card or hover) */}
                {item.hasOverlayButton ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
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
                <span className="font-medium text-[#111111] truncate">{item.title}</span>
                <span className="text-neutral-500 font-normal shrink-0 ml-2">{item.client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
