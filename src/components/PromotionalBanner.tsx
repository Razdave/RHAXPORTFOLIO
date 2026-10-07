import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PromotionalBannerProps {
  onOpenBooking: () => void;
}

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="relative rounded-3xl overflow-hidden bg-[#111216] min-h-[360px] sm:min-h-[420px] flex items-center justify-center p-8 sm:p-14 text-center shadow-lg">
          
          {/* Background Image with Car Prototype */}
          <div className="absolute inset-0 z-0">
            <img
              src="/src/assets/images/concept_car_banner_1791384411293.jpg"
              alt="Automotive design styling model"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-35 filter contrast-[1.1] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/80" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            <span className="text-xs sm:text-[13px] text-neutral-300 font-light mb-3 block">
              (Book Your Free Consultation Now!)
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white font-display tracking-tight leading-tight mb-4 [text-wrap:balance]">
              Exclusive Winter Deal Days Get a Free Consultation!
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl mb-8">
              Take advantage of this limited-time offer to discuss your design needs with an experienced UI/UX and product designer.
            </p>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-1.5 px-6 py-3 text-xs font-semibold text-white bg-black/60 hover:bg-black border border-white/20 hover:border-white/40 backdrop-blur-md rounded-full transition-all duration-150 hover:scale-105 active:scale-95"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
