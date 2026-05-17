import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SKAL | Practitioners building AI-native operational infrastructure',
  description: 'SKAL is a practitioner-led AI company building operational infrastructure for modern B2B companies. We deploy AI systems that run inside real businesses. Offices in the US, UAE, and Pakistan.',
  keywords: [
    'about SKAL',
    'AI company',
    'AI infrastructure team',
    'founder story',
    'practitioners',
    'operational AI',
  ],
  alternates: {
    canonical: 'https://skal.ai/about',
  },
  openGraph: {
    title: 'About SKAL | Practitioners building AI-native operational infrastructure',
    description: 'A practitioner-led AI company building operational infrastructure for modern B2B companies.',
    url: 'https://skal.ai/about',
    type: 'website',
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About SKAL",
  "url": "https://skal.ai/about",
  "description": "The story behind SKAL, a practitioner-led AI company building operational infrastructure for modern B2B companies.",
  "mainEntity": {
    "@id": "https://skal.ai/#organization",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {children}
    </>
  );
}
