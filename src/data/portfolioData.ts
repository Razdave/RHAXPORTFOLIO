import { UserProfile, Pillar, ExperienceItem, ProjectItem, ArticleItem } from '../types';

export const defaultProfile: UserProfile = {
  name: 'RAZEP IBE',
  wordmark: 'RI',
  title: 'Web Developer',
  greetingHeadline: "Hi, I’m RAZEP IBE",
  bioSubtitle: '— Web developer building modern digital experiences',
  detailedBio: "I’m a web developer based in Cross River State, Nigeria, focused on creating responsive, user-centered websites and web applications that solve real problems and deliver smooth digital experiences.",
  location: 'Cross River State, Nigeria',
  availability: 'Available for freelance and full-time opportunities',
  email: 'hello@raazepibe.com',
  phone: '+234 811 324 6342',
  stats: [
    { value: '100%', label: 'Client-focused', subtext: 'Built around user needs and business goals' },
    { value: '24/7', label: 'Problem solving', subtext: 'From concept to deployment' },
  ],
  socialLinks: [
    { platform: 'instagram', url: 'https://www.instagram.com/r_the5th_ibe?rpxt=MTI5Z283MTBlazR3&utm_source=qr', handle: 'Follow me' },
    { platform: 'GitHub', url: 'https://github.com/Razdave', handle: 'View projects' },
    { platform: 'whatsapp', url: 'https://wa.me/2348113246342', handle: 'Chat with me' },
  ],
  standoutMetric: {
    value: 'Modern',
    label: 'Web experiences designed to be fast, functional, and memorable',
    context: 'Focused on clean interfaces, responsive design, and practical results',
  },
};

export const defaultAboutPoints = [
  'With 4+ years of experience, I specialize in creating intuitive, user-focused designs that solve real-world problems and deliver seamless digital experiences.',
  'I thrive on working closely with clients, blending creativity with strategy to bring their vision to life through thoughtful, impactful design solutions.',
];

export const defaultShowcaseCarousel = [
  {
    id: 'show-1',
    title: 'Dental Clinic',
    client: 'For Squeeze',
    image: '/src/assets/images/dental_hero.PNG',
  },
  {
    id: 'show-2',
    title: 'Beauty/spa website',
    client: 'For Squeeze',
    image: '/src/assets/images/saloon_foto.PNG',
    hasOverlayButton: true,
  },
  {
    id: 'show-3',
    title: 'Digital Agency website',
    client: 'For Squeeze',
    image: '/src/assets/images/unforsaken_foto.PNG',
  },
];

export const defaultExperiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Product Designer',
    company: 'Creative Minds',
    period: 'February 2022 - Present',
    location: 'Cross River State, Nigeria',
    summary: 'Innovated designs as a Senior Product Designer',
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
    company: 'Innovative Designs Inc',
    period: 'January 2020 - February 2022',
    location: 'Cross River State, Nigeria',
    summary: 'Led UX/UI, crafting tomorrow\'s experiences',
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
    company: 'Visionary Creations Ltd',
    period: 'February 2022 - Present',
    location: 'Cross River State, Nigeria',
    summary: 'Principal Designer, crafting tomorrow\'s experiences',
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
    company: 'FutureTech',
    period: 'February 2022 - Present',
    location: 'Cross River State, Nigeria',
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
    company: 'Expert Designs Inc',
    period: 'February 2022 - Present',
    location: 'Cross River State, Nigeria',
    summary: 'Innovated designs as a Senior Product Designer',
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
