import React, { useState, useEffect } from 'react';
import { defaultProfile, defaultExperiences, defaultProjects, defaultArticles } from './data/portfolioData';
import { UserProfile, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ShowcaseStrip } from './components/ShowcaseStrip';
import { ExperienceSection } from './components/ExperienceSection';
import { PromotionalBanner } from './components/PromotionalBanner';
import { PortfolioSection } from './components/PortfolioSection';
import { InsightsSection } from './components/InsightsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { BookingModal } from './components/BookingModal';
import { ResumeModal } from './components/ResumeModal';
import { LiveCustomizerDrawer } from './components/LiveCustomizerDrawer';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const stored = localStorage.getItem('nova_portfolio_profile_v2');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // ignore
    }
    return defaultProfile;
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Synchronize profile changes to local storage
  useEffect(() => {
    try {
      localStorage.setItem('nova_portfolio_profile_v2', JSON.stringify(profile));
    } catch {
      // LocalStorage error handling
    }
  }, [profile]);

  const handleResetProfile = () => {
    setProfile(defaultProfile);
    try {
      localStorage.removeItem('nova_portfolio_profile_v2');
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] font-body selection:bg-[#111111] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar
        profile={profile}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          profile={profile}
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 3. About Me Section (3-Column Bento) */}
        <AboutSection
          profile={profile}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 4. Horizontal Showcase Strip (3 Sculptural Cards) */}
        <ShowcaseStrip onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 5. Explore My Design Journey (Experiences Timeline) */}
        <ExperienceSection
          experiences={defaultExperiences}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 6. Promotional Banner (Exclusive Winter Deal Days) */}
        <PromotionalBanner onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 7. Latest Works (Portfolio) */}
        <PortfolioSection
          projects={defaultProjects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 8. Design Insights & Trends (Blogs) */}
        <InsightsSection articles={defaultArticles} />

        {/* 9. Final Call to Action */}
        <FinalCTASection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* 10. Dark Editorial Footer with giant hello@dnova.com */}
      <Footer
        profile={profile}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Modals & Interactive Drawers */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        profile={profile}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        experiences={defaultExperiences}
      />

      <LiveCustomizerDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onUpdateProfile={setProfile}
        onResetProfile={handleResetProfile}
      />
    </div>
  );
}
