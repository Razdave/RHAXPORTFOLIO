import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, SlidersHorizontal } from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  profile: UserProfile;
  onOpenBooking: () => void;
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenBooking, onOpenCustomizer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Portfolio', href: '#works' },
    { label: 'Services', href: '#experience' },
    { label: 'Blog', href: '#insights' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 py-4 shadow-sm'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Left: Minimalist Geometric Star / Diamond Mark */}
        <a href="#" className="flex items-center gap-2 group" aria-label="Home">
          <svg
            className="w-7 h-7 text-[#111111] group-hover:scale-105 transition-transform"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
        </a>

        {/* Center: 4 Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-black transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-neutral-600 hover:text-black bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
            title="Customize Name & Copy"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Customize</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-1 px-5 py-2.5 text-xs font-semibold text-white bg-[#111111] hover:bg-black rounded-full transition-all duration-150 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Book A Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenCustomizer}
            className="p-2 text-neutral-600 hover:text-black bg-neutral-100 rounded-full"
            aria-label="Customize"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 rounded-lg hover:bg-neutral-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-neutral-200 px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-4 mb-5 text-sm font-medium text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center gap-1.5 py-3 text-xs font-semibold text-white bg-[#111111] rounded-full"
          >
            <span>Book A Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
