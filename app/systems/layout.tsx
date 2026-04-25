import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKAL Systems | Sagents: AI Employees You Train and Onboard',
  description: 'Sagents are AI agents that work with you like employees. We train them, help you onboard them, and they cost a fraction of a human hire.',
  openGraph: {
    title: 'SKAL Systems | Meet Sagents',
    description: 'AI employees that talk, chat, and customise to your business. Trained and onboarded by SKAL.',
  },
};

export default function SystemsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
