import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenBooking: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 sm:py-32 bg-white text-center border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 flex flex-col items-center">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] font-display tracking-tight mb-4 [text-wrap:balance]">
          Got a Vision? Let’s Bring It to Life!
        </h2>

        <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed max-w-lg mb-8">
          I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea
        </p>

        <button
          onClick={onOpenBooking}
          className="flex items-center gap-1.5 px-7 py-3 text-xs font-semibold text-white bg-[#111111] hover:bg-black rounded-full transition-all duration-150 hover:scale-105 active:scale-95 shadow-sm"
        >
          <span>Book A Call</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </section>
  );
};
