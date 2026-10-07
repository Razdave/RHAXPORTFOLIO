import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { UserProfile } from '../types';

interface FooterProps {
  profile: UserProfile;
  onOpenBooking: () => void;
  onOpenCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenCustomizer }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email || 'hello@dnova.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Me', href: '#about' },
    { label: 'Portfolio', href: '#works' },
    { label: 'Services', href: '#experience' },
    { label: 'Blog', href: '#insights' },
  ];

  return (
    <footer id="contact" className="bg-[#141517] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Main Footer Layout matching screenshot */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          
          {/* Left: Navigation links in single row */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Giant Typographic Email */}
          <div className="flex items-center gap-4 group">
            <a
              href={`mailto:${profile.email || 'hello@dnova.com'}`}
              className="text-3xl sm:text-5xl md:text-6xl font-normal text-white font-display tracking-tight hover:text-neutral-300 transition-colors"
            >
              {profile.email || 'hello@dnova.com'}
            </a>

            <button
              onClick={handleCopy}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
              title="Copy email to clipboard"
              aria-label="Copy email"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Marginal Footer Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {profile.name || 'D.Nova'}. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCustomizer}
              className="hover:text-neutral-300 transition-colors"
            >
              Live Customizer
            </button>
            <span aria-hidden="true">·</span>
            <a
              href="#about"
              className="hover:text-neutral-300 transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
