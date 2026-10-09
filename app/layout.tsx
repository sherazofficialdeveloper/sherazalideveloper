import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '../src/components/layout/Navbar';
import { Footer } from '../src/components/layout/Footer';
import { ScrollToTop } from '../src/components/common/ScrollToTop';
import { FloatingContactButton } from '../src/components/common/FloatingContactButton';

export const metadata: Metadata = {
  title: 'Sheraz Ali | Full Stack Developer',
  description:
    'Professional portfolio of Sheraz Ali, Full Stack Developer specializing in Website Development, Mobile Apps, Desktop Software, and Bot Development.',
  openGraph: {
    title: 'Sheraz Ali | Full Stack Developer',
    description:
      'Professional portfolio of Sheraz Ali, Full Stack Developer specializing in Website Development, Mobile Apps, Desktop Software, and Bot Development.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheraz Ali | Full Stack Developer',
    description:
      'Professional portfolio of Sheraz Ali, Full Stack Developer specializing in Website Development, Mobile Apps, Desktop Software, and Bot Development.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-slate-900 flex flex-col font-['Lexend'] selection:bg-[#F97316] selection:text-white antialiased"
      >
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}