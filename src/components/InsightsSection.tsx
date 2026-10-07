import React, { useState } from 'react';
import { X, Clock } from 'lucide-react';
import { ArticleItem } from '../types';

interface InsightsSectionProps {
  articles: ArticleItem[];
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ articles }) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  // Custom thumbnail colors/composition to mirror the template's colorful 3D blocks
  const articleImages = [
    '/src/assets/images/sculptural_geometric_pastel_1791384398084.jpg',
    '/src/assets/images/sculptural_minimalist_warm_1791384383016.jpg',
    '/src/assets/images/project_lumina_brand_1791383609770.jpg',
  ];

  return (
    <section id="insights" className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs text-neutral-500 font-medium tracking-wide flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block" />
            Blogs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] font-display tracking-tight">
            Design Insights & Trends
          </h2>
        </div>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((art, idx) => (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group cursor-pointer flex flex-col gap-4"
            >
              {/* Image Container with 3D colorful geometric art */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#F2F2F4] shadow-xs">
                <img
                  src={articleImages[idx % articleImages.length]}
                  alt={art.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 filter contrast-[1.04]"
                />
              </div>

              {/* Badges: Black Pill MARKETING + 5 min read */}
              <div className="flex items-center gap-3 pt-1">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#111111] text-white rounded-md">
                  {art.category}
                </span>
                <span className="text-xs text-neutral-500 font-normal">
                  {art.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-medium text-[#111111] font-display group-hover:text-neutral-600 transition-colors leading-snug [text-wrap:balance]">
                {art.title}
              </h3>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm">
          <div className="fixed inset-0" onClick={() => setSelectedArticle(null)} aria-hidden="true" />
          
          <div className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase font-bold px-2.5 py-1 bg-[#111111] text-white rounded-md">
                  {selectedArticle.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-neutral-500">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedArticle.readTime}
                </span>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-neutral-400 hover:text-black rounded-lg transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] font-display mb-6 [text-wrap:balance]">
              {selectedArticle.title}
            </h2>

            <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              {selectedArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-full transition-colors"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
