import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-native MVP builds for startups | SKAL',
  description: 'Launch with AI-native infrastructure from day one. Automation-first architecture and scalable systems built for startups that move fast.',
  keywords: [
    'AI-native MVP',
    'startup AI',
    'automation-first architecture',
    'AI MVP development',
    'scalable startup infrastructure',
    'AI for founders',
  ],
  alternates: {
    canonical: 'https://skal.ai/startup',
  },
  openGraph: {
    title: 'AI-native MVP builds for startups | SKAL',
    description: 'Launch with AI-native infrastructure from day one. Built for startups that move fast.',
    url: 'https://skal.ai/startup',
    type: 'website',
  },
};

export default function StartupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
