import React, { useState } from 'react';
import { X, SlidersHorizontal, RotateCcw, Download, Check, Sparkles } from 'lucide-react';
import { UserProfile } from '../types';
import { defaultProfile } from '../data/portfolioData';

interface LiveCustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
  onResetProfile: () => void;
}

export const LiveCustomizerDrawer: React.FC<LiveCustomizerDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  onResetProfile,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof UserProfile, value: any) => {
    onUpdateProfile({ ...profile, [field]: value });
  };

  const handleStatChange = (index: number, key: 'value' | 'label' | 'subtext', val: string) => {
    const newStats = [...profile.stats];
    newStats[index] = { ...newStats[index], [key]: val };
    onUpdateProfile({ ...profile, stats: newStats });
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(profile, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${(profile.wordmark || 'portfolio').toLowerCase()}_config.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <aside className="relative w-full max-w-lg bg-white border-l border-neutral-200 shadow-2xl z-10 flex flex-col h-full text-[#111111]">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100 bg-[#FAFAFC]">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-neutral-800" />
            <h3 className="text-sm font-semibold text-[#111111] font-display">
              Live Portfolio Customizer
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onResetProfile}
              className="p-1.5 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
              title="Reset to Template Defaults"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Body Form */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs">
          
          <div className="p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-600 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
              <span>Real-Time In-Browser Editing</span>
            </div>
            <p className="text-neutral-500 text-[11px]">
              Tweak your name, headline, bio, and stats below. Changes update the live layout immediately and persist across page refreshes.
            </p>
          </div>

          {/* Identity Fields */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
              1. Name & Headline
            </h4>

            <div>
              <label className="text-neutral-600 block mb-1">Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-[#111111] focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-neutral-600 block mb-1">Hero Greeting Headline</label>
              <input
                type="text"
                value={profile.greetingHeadline}
                onChange={(e) => handleChange('greetingHeadline', e.target.value)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-[#111111] focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-neutral-600 block mb-1">Hero Subtitle</label>
              <input
                type="text"
                value={profile.bioSubtitle}
                onChange={(e) => handleChange('bioSubtitle', e.target.value)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-[#111111] focus:outline-none focus:border-black"
              />
            </div>
          </div>

          {/* About Me statement */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
              2. About Me Statement
            </h4>

            <div>
              <label className="text-neutral-600 block mb-1">Bio Paragraph</label>
              <textarea
                rows={3}
                value={profile.detailedBio}
                onChange={(e) => handleChange('detailedBio', e.target.value)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-[#111111] focus:outline-none focus:border-black"
              />
            </div>
          </div>

          {/* Hero Stats */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
              3. Key Metrics
            </h4>

            {profile.stats.map((st, i) => (
              <div key={i} className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1.5">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-neutral-400 block mb-0.5">Value</label>
                    <input
                      type="text"
                      value={st.value}
                      onChange={(e) => handleStatChange(i, 'value', e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-white border border-neutral-200 rounded-lg text-[#111111] font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-neutral-400 block mb-0.5">Label</label>
                    <input
                      type="text"
                      value={st.label}
                      onChange={(e) => handleStatChange(i, 'label', e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-white border border-neutral-200 rounded-lg text-[#111111]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Standout 120% Metric Card */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
              4. Engagement Highlight Card
            </h4>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-neutral-600 block mb-1">Percentage / Number</label>
                <input
                  type="text"
                  value={profile.standoutMetric.value}
                  onChange={(e) =>
                    onUpdateProfile({
                      ...profile,
                      standoutMetric: { ...profile.standoutMetric, value: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-[#111111] font-mono"
                />
              </div>

              <div>
                <label className="text-neutral-600 block mb-1">Metric Description</label>
                <input
                  type="text"
                  value={profile.standoutMetric.label}
                  onChange={(e) =>
                    onUpdateProfile({
                      ...profile,
                      standoutMetric: { ...profile.standoutMetric, label: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-[#111111]"
                />
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
              5. Contact & Footer
            </h4>

            <div>
              <label className="text-neutral-600 block mb-1">Footer Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-[#111111]"
              />
            </div>
          </div>

        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-neutral-100 bg-[#FAFAFC] flex items-center justify-between gap-3">
          <button
            onClick={handleExportJson}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-neutral-700 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Download className="w-3.5 h-3.5" />}
            <span>Export JSON</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#111111] hover:bg-black text-white font-medium rounded-full transition-colors"
          >
            Done Editing
          </button>
        </div>

      </aside>
    </div>
  );
};
