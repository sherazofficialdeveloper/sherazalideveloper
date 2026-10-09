import { ServiceItem, TechItem, ExperienceItem, ProjectItem, TestimonialItem, ContactInfo } from '../types/portfolio';
import { contactData } from './contactData';

export { contactData };

// Personal Developer Profile Photo Asset
export const personalProfileImage = '/assets/profile.svg';

export const personalInfo: ContactInfo = {
  name: 'Sheraz Ali',
  brandName: 'Sheraz Ali Developer',
  role: 'Full Stack Developer',
  status: 'Available for new projects',
  availableForHire: true,
  emailPlaceholder: contactData.email,
};

export const verifiedStats = [
  { label: 'Commercial Experience', value: '2+ Years', detail: 'Full Stack Software Development' },
  { label: 'Core Disciplines', value: '4 Pillars', detail: 'Web, Mobile, Desktop & Bots' },
  { label: 'Production Tech Stack', value: '40+ Tools & Techs', detail: 'JavaScript, TypeScript & Full Stack Systems' },
  { label: 'Code Quality', value: '100%', detail: 'Clean Architecture & Type Safety' },
];

export const servicesData: (ServiceItem & { slug: string; simpleDescription: string })[] = [
  {
    id: 'web-dev',
    slug: 'website-development',
    number: '01',
    title: 'Website Development',
    tagline: 'Modern websites and web applications built for your business.',
    simpleDescription: 'Modern websites and web applications built for your business.',
    description:
      'Modern websites and web applications built for your business. Fast, responsive, and secure web solutions that work seamlessly across all devices.',
    technologies: ['React.js', 'Next.js', 'Vue.js', 'Node.js', 'Express.js', 'Nest.js', 'TypeScript', 'Tailwind CSS'],
    icon: 'Globe',
  },
  {
    id: 'mobile-dev',
    slug: 'mobile-app-development',
    number: '02',
    title: 'Mobile App Development',
    tagline: 'Fast and user-friendly Android and mobile applications.',
    simpleDescription: 'Fast and user-friendly Android and mobile applications.',
    description:
      'Fast and user-friendly Android and mobile applications. Smooth navigation, offline support, and clean user experience built with React Native.',
    technologies: ['React Native', 'JavaScript', 'TypeScript', 'REST APIs', 'Firebase', 'AsyncStorage'],
    icon: 'Smartphone',
  },
  {
    id: 'desktop-dev',
    slug: 'desktop-development',
    number: '03',
    title: 'Desktop Software',
    tagline: 'Custom desktop software built for real business needs.',
    simpleDescription: 'Custom desktop software built for real business needs.',
    description:
      'Custom desktop software built for real business needs. Cross-platform applications for Windows, macOS, and Linux with local file storage and high reliability.',
    technologies: ['Electron.js', 'React', 'Vite', 'Node.js', 'SQLite', 'Local Storage'],
    icon: 'Monitor',
  },
  {
    id: 'bot-dev',
    slug: 'bot-development',
    number: '04',
    title: 'Bots & Automation',
    tagline: 'Automation tools and bots that save time and reduce manual work.',
    simpleDescription: 'Automation tools and bots that save time and reduce manual work.',
    description:
      'Automation tools and bots that save time and reduce manual work. Custom webhook listeners, background scripts, and process automation to speed up daily operations.',
    technologies: ['Node.js', 'Express.js', 'Playwright', 'Puppeteer', 'Automation APIs', 'Webhooks'],
    icon: 'Bot',
  },
];

export const techStackData: TechItem[] = [
  // ==================== FRONTEND ====================
  { name: 'HTML5', category: 'Frontend', type: 'Language', description: 'Semantic, accessible document structure', icon: 'Code' },
  { name: 'CSS3', category: 'Frontend', type: 'Styling', description: 'Modern responsive layouts, flexbox & grid', icon: 'Palette' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', type: 'Language', description: 'Dynamic scripting & asynchronous logic', icon: 'FileCode' },
  { name: 'TypeScript', category: 'Frontend', type: 'Language', description: 'Strict static typing & robust architecture', icon: 'ShieldCheck' },
  { name: 'React.js', category: 'Frontend', type: 'Framework', description: 'Component-driven reactive user interfaces', icon: 'Atom' },
  { name: 'Next.js', category: 'Frontend', type: 'Framework', description: 'Server-side rendering, routing & full-stack React', icon: 'Layers' },
  { name: 'Vue.js', category: 'Frontend', type: 'Framework', description: 'Progressive, lightweight front-end framework', icon: 'Component' },
  { name: 'Bootstrap', category: 'Frontend', type: 'Styling', description: 'Responsive grid system & UI component styling', icon: 'LayoutGrid' },
  { name: 'Tailwind CSS', category: 'Frontend', type: 'Styling', description: 'Utility-first modern responsive styling system', icon: 'Wind' },

  // ==================== BACKEND ====================
  { name: 'Node.js', category: 'Backend', type: 'Runtime', description: 'Event-driven asynchronous server runtime', icon: 'Server' },
  { name: 'Express.js', category: 'Backend', type: 'Framework', description: 'Fast, minimalist REST API routing engine', icon: 'Cpu' },
  { name: 'Nest.js', category: 'Backend', type: 'Framework', description: 'Enterprise modular backend architecture', icon: 'Boxes' },
  { name: 'REST APIs', category: 'Backend', type: 'Architecture', description: 'Structured JSON endpoints & HTTP status codes', icon: 'Network' },

  // ==================== MOBILE ====================
  { name: 'React Native', category: 'Mobile', type: 'Framework', description: 'Universal cross-platform mobile app development', icon: 'Smartphone' },
  { name: 'React Native CLI', category: 'Mobile', type: 'Tool', description: 'Native toolchain & custom Android compilation', icon: 'Terminal' },
  { name: 'Android Studio', category: 'Mobile', type: 'IDE', description: 'Android development suite & APK packaging', icon: 'Smartphone' },
  { name: 'Gradle', category: 'Mobile', type: 'Tool', description: 'Android build automation & native dependency engine', icon: 'Settings' },
  { name: 'Firebase', category: 'Mobile', type: 'Platform', description: 'Real-time database, auth & mobile backend sync', icon: 'Flame' },
  { name: 'Firebase Cloud Messaging', category: 'Mobile', type: 'Platform', description: 'Targeted background push notifications & alerts', icon: 'Bell' },

  // ==================== DESKTOP ====================
  { name: 'Electron.js', category: 'Desktop', type: 'Runtime', description: 'Native Windows, macOS & Linux desktop apps', icon: 'Monitor' },
  { name: 'React (Desktop UI)', category: 'Desktop', type: 'Framework', description: 'Interactive desktop views & local state', icon: 'Atom' },
  { name: 'Vite', category: 'Desktop', type: 'Tool', description: 'Instant desktop HMR & fast bundle packaging', icon: 'Zap' },
  { name: 'Node.js IPC', category: 'Desktop', type: 'Runtime', description: 'Main/renderer communication & local OS filesystem', icon: 'Cpu' },

  // ==================== DATABASES ====================
  { name: 'MongoDB', category: 'Databases', type: 'Database', description: 'High-speed NoSQL document storage & indexes', icon: 'Database' },
  { name: 'MySQL', category: 'Databases', type: 'Database', description: 'ACID-compliant relational database management', icon: 'Database' },
  { name: 'PostgreSQL', category: 'Databases', type: 'Database', description: 'Enterprise relational database with JSON support', icon: 'Database' },
  { name: 'Mongoose', category: 'Databases', type: 'Tool', description: 'Strict schema validation & ODM for MongoDB', icon: 'Layers' },

  // ==================== AUTOMATION / BROWSER ====================
  { name: 'Playwright', category: 'Automation / Browser', type: 'Tool', description: 'Multi-browser web automation & scraping', icon: 'Bot' },
  { name: 'Puppeteer', category: 'Automation / Browser', type: 'Tool', description: 'Headless Chrome scripting, PDF & data harvest', icon: 'Bot' },

  // ==================== TESTING ====================
  { name: 'Android Studio Emulator', category: 'Testing', type: 'Tool', description: 'Virtual device simulation across API versions', icon: 'Smartphone' },
  { name: 'Android Virtual Device (AVD)', category: 'Testing', type: 'Tool', description: 'Screen sizes, densities & OS version testing', icon: 'Smartphone' },
  { name: 'Real Android Devices', category: 'Testing', type: 'Hardware', description: 'Physical hardware touch, camera & sensor tests', icon: 'CheckCircle2' },
  { name: 'Browser Testing', category: 'Testing', type: 'Tool', description: 'Cross-browser Chrome, Safari, Edge verification', icon: 'Globe' },
  { name: 'Playwright Testing', category: 'Testing', type: 'Tool', description: 'End-to-end automated UI & regression test suites', icon: 'CheckCircle2' },

  // ==================== BACKEND / SUPPORTING ====================
  { name: 'JWT', category: 'Backend / Supporting', type: 'Security', description: 'Secure stateless token authentication & verification', icon: 'Key' },
  { name: 'bcrypt', category: 'Backend / Supporting', type: 'Security', description: 'Salted cryptographic password hashing & verification', icon: 'Lock' },
  { name: 'Winston', category: 'Backend / Supporting', type: 'Logging', description: 'Production multi-transport logging & audit tracking', icon: 'FileText' },
  { name: 'AsyncStorage', category: 'Backend / Supporting', type: 'Storage', description: 'Local asynchronous key-value persistence for mobile', icon: 'HardDrive' },
  { name: 'React Native Keychain', category: 'Backend / Supporting', type: 'Security', description: 'Hardware-backed secure biometric & credential storage', icon: 'Shield' },
  { name: 'NetInfo', category: 'Backend / Supporting', type: 'Network', description: 'Network reachability, connection type & offline detection', icon: 'Wifi' },

  // ==================== DEPLOYMENT / HOSTING ====================
  { name: 'Vercel', category: 'Deployment / Hosting', type: 'Platform', description: 'Edge deployment, zero-config CI/CD & preview builds', icon: 'Cloud' },
  { name: 'Railway', category: 'Deployment / Hosting', type: 'Platform', description: 'Containerized backend server & database infrastructure', icon: 'Server' },
  { name: 'Hostinger', category: 'Deployment / Hosting', type: 'Platform', description: 'Commercial web hosting, SSL & production DNS setups', icon: 'Globe' },
  { name: 'Cloudflare / R2', category: 'Deployment / Hosting', type: 'Platform', description: 'Global CDN caching, DDoS shield & S3-compatible storage', icon: 'Shield' },
  { name: 'VPS / Server Deployment', category: 'Deployment / Hosting', type: 'Platform', description: 'Linux Ubuntu, Nginx reverse proxy & PM2 process manager', icon: 'Terminal' },
  { name: 'Git', category: 'Deployment / Hosting', type: 'Tool', description: 'Distributed version control, branching & merge workflows', icon: 'GitBranch' },
  { name: 'GitHub', category: 'Deployment / Hosting', type: 'Platform', description: 'Source code management, pull requests & CI/CD workflows', icon: 'Github' },
];

export const experienceData: ExperienceItem[] = [
  {
    company: 'Commercial Software Development',
    role: 'Full Stack Developer',
    duration: '2+ Years',
    highlights: [
      'Built and maintained responsive web applications, backend APIs, and cross-platform software.',
      'Developed user-friendly frontends, structured RESTful API endpoints, and clean database integrations.',
      'Collaborated on architectural design, code reviews, and production release cycles ensuring high quality and reliability.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'JavaScript', 'TypeScript', 'MySQL', 'MongoDB', 'React Native'],
  },
];


export const projectsData: ProjectItem[] = [
  // ============================================================
  // ROUND 1: Mobile App → Website → Landing Page → E-Commerce → Desktop → Admin
  // ============================================================

  // 1. Mobile App
  {
    id: 'mobile-coggsafe',
    title: 'CoGG Safe',
    category: 'Mobile App',
    description:
      'An emergency safety mobile application that lets users trigger SOS alerts, share precise location, capture emergency photos and short audio, and notify trusted groups during critical situations.',
    image: '/CoGG Safe.png',
    technologies: [
      'React Native', 'Node.js', 'Express.js', 'MongoDB', 'JWT',
      'Firebase Cloud Messaging', 'Cloud Storage',
    ],
    featured: true,
    apkUrl: '/apk/cogg-safe.apk',
  },

  // 2. Website
  {
    id: 'website-pms-graphix',
    title: 'PMS GRAPHIX Agency Portfolio',
    category: 'Website',
    description:
      'A modern agency portfolio showcasing web development, mobile applications, UI/UX design, branding, and custom software solutions.',
    image: '/pms graphix.png',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'],
    featured: true,
    liveUrl: 'https://pms-graphix-three.vercel.app/',
  },

  // 3. Landing Page
  {
    id: 'landing-verde-restaurant',
    title: 'Professional Verde Restaurant',
    category: 'Landing Page',
    description:
      'A responsive restaurant landing page featuring an interactive menu, featured dishes, reservations, gallery, and a modern customer experience.',
    image: '/resturent website two.png',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
    featured: true,
    liveUrl: 'https://resturent-website-delta.vercel.app/',
  },

  // 4. E-Commerce
  {
    id: 'ecommerce-lazak-care',
    title: 'Lazak Care',
    category: 'E-Commerce',
    description:
      'A modern healthcare e-commerce platform for browsing, purchasing, and managing medical and wellness products with a seamless shopping experience.',
    image: '/lazak care.png',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'],
    featured: true,
    liveUrl: 'https://lazak-store.vercel.app/',
  },

  // 5. Desktop Application
  {
    id: 'software-irctc-automation',
    title: 'IRCTC Auto Booking Software',
    category: 'Desktop Application',
    additionalCategories: ['Automation Software'],
    description:
      'A desktop automation application that connects to the IRCTC website to perform automated ticket booking. Built with a robust scripting engine, secure credential handling, and real-time booking status monitoring.',
    image: '/irctc.png',
    technologies: ['Python', 'Selenium', 'Desktop Application', 'Web Automation', 'IRCTC Integration'],
    featured: true,
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_IRCTC_VIDEO_ID',
  },

  // 6. Admin Dashboard
  {
    id: 'admin-wave-pilot',
    title: 'Wave Pilot Admin Panel',
    category: 'Admin Dashboard',
    description:
      'A complete recruitment administration dashboard for managing jobs, applicants, users, contact messages, and the overall recruitment workflow.',
    image: '/wave pilot admin penel.png',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Admin Dashboard'],
    featured: true,
    liveUrl: 'https://wavepilotadminpanel.vercel.app/',
  },

  // ============================================================
  // ROUND 2: Mobile App → Website → Landing Page → E-Commerce → Desktop
  // ============================================================

  // 7. Mobile App
  {
    id: 'mobile-child-tube',
    title: 'Child Tube',
    category: 'Mobile App',
    additionalCategories: ['In Development'],
    description:
      'A child-focused streaming application (currently in development) with a YouTube Kids-inspired interface, parent and child accounts, parent-controlled settings, screen-time controls, PIN-protected settings, content management, and dedicated parent and admin panels.',
    image: '/kidstube.png',
    technologies: ['Kotlin', 'Jetpack Compose', 'Node.js', 'Express.js', 'MongoDB', 'Android'],
    featured: true,
    statusBadge: 'In Development',
    apkUrl: '/apk/child-tube-demo.apk',
  },

  // 8. Website
  {
    id: 'website-wave-pilot',
    title: 'Wave Pilot Recruitment Platform',
    category: 'Website',
    description:
      'A complete recruitment platform where job seekers can apply for jobs while administrators manage vacancies, users, and applications through a secure management dashboard.',
    image: '/wave pilot.png',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'],
    featured: true,
    liveUrl: 'https://hydrocean.vercel.app/',
  },

  // 9. Landing Page
  {
    id: 'landing-restaurant',
    title: 'Restaurant Landing Page',
    category: 'Landing Page',
    description:
      'A restaurant landing page with an online menu, reservation system, contact form, and responsive customer experience.',
    image: '/resturent website-four.png',
    technologies: ['React.js', 'Tailwind CSS', 'Responsive Design'],
    featured: true,
    liveUrl: 'https://deen-s-project-resturant.vercel.app/',
  },

  // 10. E-Commerce
  {
    id: 'ecommerce-cuties-glow',
    title: 'Cuties Glow',
    category: 'E-Commerce',
    description:
      'A custom-coded e-commerce website integrated with Shopify, using Shopify payment functionality while providing a custom frontend shopping experience.',
    image: '/cuties glow.png',
    technologies: ['React.js', 'Next.js', 'Shopify', 'Custom Coding', 'Shopify Payments'],
    featured: true,
    liveUrl: 'https://cutiesglowf.vercel.app/'
  },

  // 11. Desktop Application
  {
    id: 'software-mumbai-restaurant',
    title: 'Mumbai Restaurant & Cafe Management Software',
    category: 'Desktop Application',
    description:
      'A complete restaurant and cafe management desktop software handling menu management, order processing, table reservations, billing, inventory tracking, and daily sales reports for restaurant operations.',
    image: '/mumbai.png',
    technologies: [
      'Desktop Application', 'Database Management', 'POS System',
      'Inventory Tracking', 'Billing', 'Restaurant Management',
    ],
    featured: true,
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_MUMBAI_VIDEO_ID',
  },

  // ============================================================
  // ROUND 3: Mobile App → Website → Landing Page → E-Commerce → In Development
  // ============================================================

  // 12. Mobile App
  {
    id: 'mobile-ticktime',
    title: 'TickTime',
    category: 'Mobile App',
    description:
      'A lightweight offline Android stopwatch application designed for accurate time tracking with a simple and focused user experience without requiring an internet connection.',
    image: '/ticktime.jpeg',
    technologies: ['Kotlin', 'Jetpack Compose', 'Android', 'Gradle', 'Offline Storage'],
    featured: true,
    apkUrl: 'https://play.google.com/store/apps/details?id=com.sherazalideveloper.ticktime&hl=en-US&ah=aMv7Z-q0IcbF-IYJ7zLRE8bMet4',
  },

  // 13. Website
  {
    id: 'website-zeeno-global',
    title: 'Zeeno Global Solution',
    category: 'Website',
    description:
      'A multi-page software house website showcasing services, portfolio, company information, and client-focused digital solutions.',
    image: '/zeeno globle.png',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    featured: true,
    liveUrl: 'https://zeenogloblesolution.com/',
  },

  // 14. Landing Page
  {
    id: 'landing-essential-vibrations',
    title: 'Essential Vibrations',
    category: 'Landing Page',
    description:
      'A modern e-commerce landing page built with React and Tailwind CSS, featuring smooth Framer Motion animations, Lucide icons, and a clean responsive shopping experience.',
    image: '/assentials.png',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Lucide', 'Vercel'],
    featured: true,
    liveUrl: 'https://essentialvibrations.vercel.app/',
  },

  // 15. E-Commerce
  {
    id: 'ecommerce-glow-botanicals',
    title: 'Glow Botanicals',
    category: 'E-Commerce',
    additionalCategories: ['In Development'],
    description:
      'A complete e-commerce platform (currently in development) with a modern shopping experience, product management, admin panel, dashboard, backend APIs, and MongoDB database integration.',
    image: '/glow botanicals.png',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Admin Dashboard'],
    featured: true,
    statusBadge: 'In Development',
    liveUrl: 'https://glow-botanicals.vercel.app/'
  },

  // 16. In Development
  {
    id: 'indev-fly-ayla',
    title: 'Fly Ayla — Aviation Booking Platform',
    category: 'In Development',
    description:
      'A full-stack aviation booking platform currently in active development. Includes an admin dashboard, customer dashboard, separate frontend/backend architecture, MongoDB database, and integration with paid third-party flight APIs. Hosting and domain are client-managed. Target development completion: 25 days.',
    image: '/fly ayla.png',
    technologies: [
      'React.js', 'Next.js', 'Node.js', 'MongoDB',
      'Admin Dashboard', 'Customer Dashboard',
      'Paid API Integration', 'Aviation Booking',
    ],
    featured: true,
    statusBadge: 'In Development',
    liveUrl: 'https://fly-ayla.vercel.app/',
  },

  // ============================================================
  // ROUND 4: Mobile App → Website → Landing Page → Website
  // ============================================================

  // 17. Mobile App
  {
    id: 'mobile-basa-now',
    title: 'Basa Now',
    category: 'Mobile App',
    additionalCategories: ['In Development'],
    description:
      'A job marketplace mobile application (frontend demo) connecting job seekers and employers. Includes a Job Seeker Android app, an Employer Android app, and a web-based admin panel for managing platform users and country availability. Initially launching in Zimbabwe, with country toggles planned for future expansion.',
    image: '/basanow.jpeg',
    technologies: [
      'React Native', 'Android', 'Node.js', 'MongoDB',
      'Web Admin Panel', 'Multi-Country Support',
    ],
    featured: true,
    statusBadge: 'In Development',
    apkUrl: '/apk/basanow.apk',
  },

  // 18. Website
  {
    id: 'website-quran',
    title: 'Quran Kareem',
    category: 'Website',
    description:
      'A responsive Quran Kareem website featuring Surah navigation, translations, audio recitation, and a clean reading experience.',
    image: '/quran.png',
    technologies: ['React.js', 'Next.js', 'JavaScript', 'Responsive Design'],
    featured: true,
    liveUrl: 'http://quran-kareem-dusky.vercel.app/',
  },

  // 19. Landing Page
  {
    id: 'landing-petpop',
    title: 'PetPop',
    category: 'Landing Page',
    description:
      'A playful pet-focused landing page with a modern, animated shopping experience built using React, Tailwind CSS, and Framer Motion.',
    image: '/petpop.png',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    featured: false,
    liveUrl: 'https://petpop.vercel.app/',
  },

  // 20. Website
  {
    id: 'website-brightlink-typing',
    title: 'BrightLink Typing',
    category: 'Website',
    description:
      'A professional UAE visa typing and documentation services website. Handles family visa applications, Emirates ID typing, medical typing, document clearance, and government liaison services with a streamlined online experience.',
    image: '/bright.png',
    technologies: [
      'React.js', 'Next.js', 'Node.js', 'MongoDB',
      'Visa Typing Services', 'Emirates ID', 'Document Clearance',
    ],
    featured: true,
    liveUrl: 'https://brightlinktyping.com',
  },

  // ============================================================
  // ROUND 5: Mobile App → Landing Page → Landing Page
  // ============================================================

  // 21. Mobile App
  {
    id: 'mobile-mclive',
    title: 'MC Live',
    category: 'Mobile App',
    additionalCategories: ['In Development'],
    description:
      'A live streaming mobile application demo enabling real-time video broadcast and viewing. Built as a proof-of-concept for streaming capabilities with a modern mobile UI.',
    image: '/mclive.png',
    technologies: ['React Native', 'Live Streaming', 'Node.js', 'WebRTC', 'Android'],
    featured: true,
    statusBadge: 'In Development',
    apkUrl: '/apk/mclive.apk',
  },

  // 22. Landing Page
  {
    id: 'landing-rooted-ground-therapy',
    title: 'Rooted Ground Therapy',
    category: 'Landing Page',
    description:
      'A calming, professional therapy landing page built with React and Tailwind CSS, featuring Framer Motion animations, a soothing sage green and cream palette, and a supportive, grounded user experience.',
    image: '/rooted.png',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    featured: false,
    liveUrl: 'https://rooted-ground-therapy.vercel.app/',
  },

  // 23. Landing Page
  {
    id: 'landing-verifiedbmbuy',
    title: 'Verifiedbmbuy',
    category: 'Landing Page',
    description:
      'A professional business landing page designed to showcase services, build customer trust, and generate high-quality leads through a modern user experience.',
    image: '/verify.png',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Business Landing Page'],
    featured: false,
    liveUrl: 'https://verifiedbmbuy.vercel.app/',
  },
];
export const testimonialsData: TestimonialItem[] = [];
