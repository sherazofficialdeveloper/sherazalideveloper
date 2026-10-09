export interface ServiceItem {
  id: string;
  number: string; // e.g. "01", "02", "03", "04"
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  icon: string;
}

export type TechCategory =
  | 'Frontend'
  | 'Backend'
  | 'Mobile'
  | 'Desktop'
  | 'Databases'
  | 'Automation / Browser'
  | 'Testing'
  | 'Backend / Supporting'
  | 'Deployment / Hosting'
  | 'Automation & Testing'
  | 'Deployment & Tools';

export interface TechItem {
  name: string;
  category: TechCategory;
  type?: string;
  description?: string;
  icon?: string;
  isLearning?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location?: string;
  highlights: string[];
  technologies: string[];
}

export type ProjectCategory =
  | 'All'
  | 'Website'
  | 'Mobile App'
  | 'Landing Page'
  | 'E-Commerce'
  | 'Desktop Application'
  | 'Automation Software'
  | 'Admin Dashboard'
  | 'In Development';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  additionalCategories?: ProjectCategory[];
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;

  liveUrl?: string;
  playStoreUrl?: string;
  apkUrl?: string;
  videoUrl?: string;
  repoUrl?: string;

  statusBadge?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role?: string;
  company?: string;
  content: string;
  rating?: number;
}

export interface ContactInfo {
  name: string;
  brandName: string;
  role: string;
  status: string;
  availableForHire: boolean;
  emailPlaceholder: string;
}
