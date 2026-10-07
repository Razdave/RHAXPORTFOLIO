import { UserProfile, Pillar, ExperienceItem, ProjectItem, ArticleItem } from '../types';

export const defaultProfile: UserProfile = {
  name: 'D.Nova',
  wordmark: 'D.Nova',
  title: 'Product designer',
  greetingHeadline: "Hello",
  bioSubtitle: "— It's D.Nova a design wizerd",
  detailedBio: "I'm specialize in turning complex problems into elegant solutions. My approach blends creativity with strategic thinking to deliver designs that not only look great but work seamlessly. Ready to start your next project?",
  location: 'San Francisco & Berlin',
  availability: 'Available for New Projects',
  email: 'hello@dnova.com',
  phone: '+1 (415) 890-2341',
  stats: [
    { value: '+200', label: 'Project completed', subtext: 'Across SaaS and digital products' },
    { value: '+50', label: 'Startup raised', subtext: 'Helped founders secure funding' },
  ],
  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com', handle: '/in/dnova-design' },
    { platform: 'Twitter / X', url: 'https://x.com', handle: '@dnova_design' },
    { platform: 'GitHub', url: 'https://github.com', handle: 'github.com/dnova-dev' },
    { platform: 'Dribbble', url: 'https://dribbble.com', handle: 'dribbble.com/dnova' },
  ],
  standoutMetric: {
    value: '120%',
    label: 'Average increase in client engagement in the first 6 months',
    context: 'Audited across 18 enterprise client deployments in 2025–2026',
  },
};

export const defaultAboutPoints = [
  'With 4+ years of experience, I specialize in creating intuitive, user-focused designs that solve real-world problems and deliver seamless digital experiences.',
  'I thrive on working closely with clients, blending creativity with strategy to bring their vision to life through thoughtful, impactful design solutions.',
];

export const defaultShowcaseCarousel = [
  {
    id: 'show-1',
    title: 'Halo Digital Agency website',
    client: 'For Squeeze',
    image: '/src/assets/images/sculptural_minimalist_warm_1791384383016.jpg',
  },
  {
    id: 'show-2',
    title: 'Halo Digital Agency website',
    client: 'For Squeeze',
    image: '/src/assets/images/project_lumina_brand_1791383609770.jpg',
    hasOverlayButton: true,
  },
  {
    id: 'show-3',
    title: 'Digital Agency website',
    client: 'For Squeeze',
    image: '/src/assets/images/sculptural_geometric_pastel_1791384398084.jpg',
  },
];

export const defaultExperiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Product Designer',
    company: 'Creative Minds, New York, USA',
    period: 'February 2022 - Present',
    location: 'New York, USA',
    summary: 'Innovated designs, New York, Senior Product Designer',
    highlights: [
      'Led the core cross-functional product design team for web and mobile flagships.',
      'Designed end-to-end user flows and reduced customer drop-off by 35%.',
    ],
    skills: ['UI/UX', 'Branding'],
    isExpandedDefault: false,
  },
  {
    id: 'exp-2',
    role: 'Led UX/UI',
    company: 'Innovative Designs Inc, USA',
    period: 'January 2020 - February 2022',
    location: 'San Francisco, USA',
    summary: 'Led UX/UI, San Francisco, Crafting tomorrow\'s experiences',
    highlights: [
      'Managed end-to-end design sprints from conceptual wireframes to high-fidelity systems.',
      'Collaborated closely with front-end engineers to implement pixel-perfect micro-interactions.',
    ],
    skills: ['UI/UX', 'Branding'],
    isExpandedDefault: false,
  },
  {
    id: 'exp-3',
    role: 'Principal Designer',
    company: 'Visionary Creations Ltd, UK',
    period: 'February 2022 - Present',
    location: 'Berlin, Germany',
    summary: 'Principal Designer, Berlin, Crafting tomorrow\'s experiences',
    highlights: [
      'Standardized global branding language and web component libraries.',
      'Advised startup founders on UX validation and customer discovery.',
    ],
    skills: ['Branding', 'UI/UX'],
    isExpandedDefault: false,
  },
  {
    id: 'exp-4',
    role: 'Strategic Design Lead',
    company: 'FutureTech, Berlin, Germany',
    period: 'February 2022 - Present',
    location: 'Berlin, Germany',
    summary: 'From crafting seamless user experiences to leading strategic product design initiatives, each experience has shaped my approach and strengthened my passion for solving design challenges',
    highlights: [
      'Crafted seamless user experiences across flagship autonomous tools.',
      'Led strategic design roadmaps with multi-disciplinary stakeholders.',
    ],
    skills: ['Branding', 'UI/UX'],
    previewImage: '/src/assets/images/sculptural_geometric_pastel_1791384398084.jpg',
    isExpandedDefault: true,
  },
  {
    id: 'exp-5',
    role: 'Senior Product Designer',
    company: 'Expert Designs Inc, USA',
    period: 'February 2022 - Present',
    location: 'New York, USA',
    summary: 'Innovated designs, New York, Senior Product Designer',
    highlights: [
      'Spearheaded user research and multi-platform interface design.',
      'Scaled design operations across distributed product squads.',
    ],
    skills: ['UI/UX', 'Branding'],
    isExpandedDefault: false,
  },
];

export const defaultProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Halo Digital Agency website',
    category: 'Digital Product',
    client: 'For Squeeze',
    year: '2024',
    metricsBadge: 'Case Study',
    summary: 'Modern digital agency web platform engineered for high conversion and immersive storytelling.',
    challenge: 'Needed to display rich tactile 3D artworks without sacrificing page speed or clarity.',
    solution: 'Designed an elegant minimal grid with subtle tactile micro-interactions and smooth scroll physics.',
    impact: 'Increased client inquiries by 140% and received featured design honors.',
    keyStats: [
      { label: 'Conversion Lift', value: '+140%' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Visitor Engagement', value: '4m 12s' },
    ],
    image: '/src/assets/images/sculptural_geometric_pastel_1791384398084.jpg',
    tags: ['UI/UX', 'Branding', 'Web Design'],
    liveUrl: 'https://halodigital.xyz',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Halo Digital Agency website',
    category: 'Brand Systems',
    client: 'For Squeeze',
    year: '2024',
    metricsBadge: 'halodigital.xyz',
    summary: 'Tactile architectural visual identity and web experience for creative technology agency.',
    challenge: 'Merging high-end editorial aesthetics with dynamic portfolio showcases.',
    solution: 'Crafted bespoke grid layouts, stone and travertine 3D renders, and intuitive navigation.',
    impact: 'Adopted as the primary global web presence generating 50+ enterprise leads.',
    keyStats: [
      { label: 'Client Inbound', value: '50+' },
      { label: 'Bounce Rate', value: '18%' },
      { label: 'Global Reach', value: '120k' },
    ],
    image: '/src/assets/images/sculptural_minimalist_warm_1791384383016.jpg',
    tags: ['UI/UX', 'Branding', 'Art Direction'],
    liveUrl: 'https://halodigital.xyz',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Halo Digital Agency website',
    category: 'Motion & 3D',
    client: 'For Squeeze',
    year: '2024',
    metricsBadge: 'Featured',
    summary: 'Architectural geometry and interactive physical computing showcases.',
    challenge: 'Ensuring seamless cross-device responsiveness with high visual fidelity.',
    solution: 'Lightweight responsive image containers, refined typography, and accessible design.',
    impact: '99% client satisfaction rating and global recognition.',
    keyStats: [
      { label: 'Satisfaction', value: '99%' },
      { label: 'Active Users', value: '25k' },
      { label: 'Design Awards', value: '3x' },
    ],
    image: '/src/assets/images/project_lumina_brand_1791383609770.jpg',
    tags: ['UI/UX', 'Branding', 'Motion'],
    liveUrl: 'https://halodigital.xyz',
    featured: true,
  },
];

export const defaultArticles: ArticleItem[] = [
  {
    id: 'art-1',
    title: 'Conducting in-depth research and usability testing',
    category: 'Marketing',
    date: '2024',
    readTime: '5 min read',
    excerpt: 'How foundational user interviews and heuristic audits uncover the hidden leverage points that double product engagement.',
    content: [
      'In-depth usability research is not an academic chore—it is the quickest shortcut to validating product hypotheses before writing code.',
      'By testing early prototypes with target customers, design teams prevent weeks of wasted engineering and build high-confidence features.',
    ],
  },
  {
    id: 'art-2',
    title: 'Designing cohesive strategies and visual identities',
    category: 'Marketing',
    date: '2024',
    readTime: '5 min read',
    excerpt: 'Connecting brand voice, tactile typography, and digital interface systems into a unified narrative that customers instantly remember.',
    content: [
      'A great visual identity works seamlessly across high-resolution displays, business proposals, and physical tactile touchpoints.',
      'We explore how to define consistent design tokens and brand guidelines that empower engineering teams to build at speed.',
    ],
  },
  {
    id: 'art-3',
    title: 'Providing expert advice and strategic guidance',
    category: 'Marketing',
    date: '2024',
    readTime: '5 min read',
    excerpt: 'Why high-growth startup founders partner with fractional design leads to navigate pivot moments and scale user experiences.',
    content: [
      'Strategic design leadership bridges the gap between executive business goals and daily tactical execution.',
      'Setting up critique rituals, clear design metrics, and structured design reviews creates an environment where exceptional work flourishes.',
    ],
  },
];
