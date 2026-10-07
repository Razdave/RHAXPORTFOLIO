export interface HeroStat {
  value: string;
  label: string;
  subtext?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
}

export interface UserProfile {
  name: string;
  wordmark: string;
  title: string;
  greetingHeadline: string;
  bioSubtitle: string;
  detailedBio: string;
  location: string;
  availability: string;
  email: string;
  phone?: string;
  stats: HeroStat[];
  socialLinks: SocialLink[];
  standoutMetric: {
    value: string;
    label: string;
    context: string;
  };
}

export interface Pillar {
  number: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
  previewImage?: string;
  isExpandedDefault?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Digital Product' | 'Brand Systems' | 'Motion & 3D' | 'Design Engineering';
  client: string;
  year: string;
  metricsBadge: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  keyStats: { label: string; value: string }[];
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
}

export interface BookingFormData {
  service: string;
  name: string;
  email: string;
  company?: string;
  date: string;
  timeSlot: string;
  projectBudget: string;
  notes: string;
}
