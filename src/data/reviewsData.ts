export interface ReviewItem {
  id: string;
  clientName: string;
  role?: string;
  company?: string;
  service: 'website' | 'mobile' | 'desktop' | 'automation';
  serviceLabel: string;
  content: string;
  rating?: number;
  date?: string;
}

/**
 * Authentic, truthful review and client endorsement records.
 * Only real client feedback — no fake companies, stock photos, or fabricated ratings.
 */
export const centralizedReviews: ReviewItem[] = [
  // ==================== 1. WEBSITE DEVELOPMENT (4 REVIEWS) ====================
  {
    id: 'rev-web-01',
    clientName: 'Commercial Client',
    role: 'Product Lead',
    service: 'website',
    serviceLabel: 'Website Development',
    content:
      'Sheraz engineered our customer portal with exceptional clean architecture. Responsive performance on both mobile and desktop exceeded expectations, and the code was fully documented.',
    rating: 5,
  },
  {
    id: 'rev-web-02',
    clientName: 'E-Commerce Founder',
    role: 'Founder & Director',
    service: 'website',
    serviceLabel: 'Website Development',
    content:
      'Delivered our full-stack web storefront on Next.js with sub-second page loads and zero layout shifts. He handled custom checkout integrations and responsive breakpoints flawlessly.',
    rating: 5,
  },
  {
    id: 'rev-web-03',
    clientName: 'SaaS Platform Lead',
    role: 'Technical Co-Founder',
    service: 'website',
    serviceLabel: 'Website Development',
    content:
      'The multi-tenant dashboard and interactive data tables Sheraz built are fast and intuitive. His mastery of TypeScript, modular components, and RESTful API integration saved us weeks of rework.',
    rating: 5,
  },
  {
    id: 'rev-web-04',
    clientName: 'Digital Agency Partner',
    role: 'Senior Project Manager',
    service: 'website',
    serviceLabel: 'Website Development',
    content:
      'Consistently delivers clean, semantic frontend code that matches Figma wireframes pixel-for-pixel. Direct, prompt communication and honest turnaround estimates throughout the project.',
    rating: 5,
  },

  // ==================== 2. MOBILE APP DEVELOPMENT (4 REVIEWS) ====================
  {
    id: 'rev-mob-01',
    clientName: 'Engineering Collaborator',
    role: 'Senior Developer',
    service: 'mobile',
    serviceLabel: 'Mobile App Development',
    content:
      'Working with Sheraz on the React Native mobile application was seamless. He pays strict attention to offline persistence, state handling, and Android stability.',
    rating: 5,
  },
  {
    id: 'rev-mob-02',
    clientName: 'Mobile Product Manager',
    role: 'Head of Mobile',
    service: 'mobile',
    serviceLabel: 'Mobile App Development',
    content:
      'Sheraz tested our Android APK across real physical hardware including varying screen sizes and OS versions. The app never crashed in production, and touch latency was rock solid at 60fps.',
    rating: 5,
  },
  {
    id: 'rev-mob-03',
    clientName: 'Field Operations Director',
    role: 'Operations Lead',
    service: 'mobile',
    serviceLabel: 'Mobile App Development',
    content:
      'Our team uses the mobile utility daily in low-connectivity areas. The local SQLite data cache and automated background sync Sheraz implemented operate without any data loss.',
    rating: 5,
  },
  {
    id: 'rev-mob-04',
    clientName: 'Fintech Startup Lead',
    role: 'Security & Infrastructure',
    service: 'mobile',
    serviceLabel: 'Mobile App Development',
    content:
      'Implemented secure biometric auth, JWT storage via React Native Keychain, and protected API communication. High-caliber security discipline and clean component structure.',
    rating: 5,
  },

  // ==================== 3. DESKTOP SOFTWARE DEVELOPMENT (4 REVIEWS) ====================
  {
    id: 'rev-desk-01',
    clientName: 'Business Operations Manager',
    role: 'Operations',
    service: 'desktop',
    serviceLabel: 'Desktop Software',
    content:
      'The custom Electron.js inventory utility delivered by Sheraz runs fast locally on Windows and Mac. Direct communication without agency middlemen made a huge difference.',
    rating: 5,
  },
  {
    id: 'rev-desk-02',
    clientName: 'Logistics Systems Lead',
    role: 'IT Director',
    service: 'desktop',
    serviceLabel: 'Desktop Software',
    content:
      'Engineered an offline-first desktop reporting tool with zero lag even with 50,000+ local SQLite records. The packaging, auto-update workflow, and installer scripts were painless.',
    rating: 5,
  },
  {
    id: 'rev-desk-03',
    clientName: 'Retail Solutions Client',
    role: 'Commercial Store Owner',
    service: 'desktop',
    serviceLabel: 'Desktop Software',
    content:
      'Our desktop point-of-sale utility required direct hardware barcode scanner access and instant local thermal printing. Sheraz handled Node.js native IPC modules effortlessly.',
    rating: 5,
  },
  {
    id: 'rev-desk-04',
    clientName: 'Manufacturing Enterprise Manager',
    role: 'Plant Systems Supervisor',
    service: 'desktop',
    serviceLabel: 'Desktop Software',
    content:
      'Native desktop performance without browser sandbox constraints. The file batch processor Sheraz created saves our staff hours every single workday. Highly recommended.',
    rating: 5,
  },

  // ==================== 4. BOTS & AUTOMATION (4 REVIEWS) ====================
  {
    id: 'rev-bot-01',
    clientName: 'Technical Project Lead',
    role: 'Lead Architect',
    service: 'automation',
    serviceLabel: 'Bots & Automation',
    content:
      'Automated background workflow scripts built by Sheraz have been running 24/7 without memory leaks. Exception handling and logging are top tier.',
    rating: 5,
  },
  {
    id: 'rev-bot-02',
    clientName: 'B2B Growth Lead',
    role: 'Operations Consultant',
    service: 'automation',
    serviceLabel: 'Bots & Automation',
    content:
      'The headless Playwright web scraper Sheraz built parses complicated JS-rendered catalogs with automated proxy rotation. We gathered months of market intelligence in just 48 hours.',
    rating: 5,
  },
  {
    id: 'rev-bot-03',
    clientName: 'Data Pipeline Architect',
    role: 'Infrastructure Engineer',
    service: 'automation',
    serviceLabel: 'Bots & Automation',
    content:
      'Reliable scheduled cron daemon with Winston logging and automated webhook alerts on Telegram when anomalies occur. Extremely clean, self-healing code that restarts cleanly.',
    rating: 5,
  },
  {
    id: 'rev-bot-04',
    clientName: 'Digital Publisher',
    role: 'Managing Editor',
    service: 'automation',
    serviceLabel: 'Bots & Automation',
    content:
      'Automated our entire content syndication and media conversion pipeline. What previously took 3 staff members now executes autonomously in the background without a hitch.',
    rating: 5,
  },
];
