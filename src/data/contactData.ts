/**
 * ============================================================================
 * CENTRALIZED CONTACT & SOCIAL CONFIGURATION (SINGLE SOURCE OF TRUTH)
 * ============================================================================
 * All contact information, WhatsApp numbers, email addresses, and social media
 * links across the entire website MUST be imported from this file.
 * 
 * Rules:
 * - Empty string ("") means the platform is currently not configured and will
 *   automatically be hidden from the UI, floating menu, and footer.
 * - Adding or changing a URL here will automatically update all components.
 */

export interface SocialLinks {
  linkedin: string;
  x: string;
  twitter: string;
  facebook: string;
  facebookPage: string;
  instagram: string;
  googleBusiness: string;
}

export interface ContactData {
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsapp: string;
  social: SocialLinks;
  socials: SocialLinks;
}

const socialProfiles: SocialLinks = {
  linkedin: 'https://linkedin.com/in/sheraz-ali-developer-a26b79430',
  x: 'https://x.com',
  twitter: 'https://x.com/RaiSherazali',
  facebook: 'https://www.facebook.com/profile.php?id=61574943250058',
  facebookPage: 'https://www.facebook.com/sherazalideveloper',
  instagram: 'https://www.instagram.com/sherazalideveloper',
  googleBusiness: 'https://www.google.com/maps/place/Sheraz+Ali+Developer/@32.780341,-47.8023207,3z/data=!3m1!4b1!4m6!3m5!1s0x275cfed0b56c21d9:0x2894e37c98448c2c!8m2!3d32.780341!4d-47.8023207!16s%2Fg%2F11zdddjkpc?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D',
};

export const contactData: ContactData = {
  // Official Primary Email
  email: 'sherazofficialdev@gmail.com',
  // Phone / WhatsApp (Formatted for display and raw digits for wa.me)
  phone: '+92 348 6346858',
  phoneDisplay: '+92 348 6346858',
  whatsappNumber: '923486346858',
  whatsapp: 'https://wa.me/923486346858',

  // Social & Business Profiles
  social: socialProfiles,
  socials: socialProfiles,
};
