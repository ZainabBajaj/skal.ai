import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKAL Systems | AI agents that work like employees',
  description: 'AI agents trained on your business. They talk, chat, and run operations end to end. Live in one week, no engineering required.',
  openGraph: {
    title: 'SKAL Systems | AI agents that work like employees',
    description: 'AI agents that talk, chat, and customise to your business. Trained and onboarded by SKAL.',
  },
};

export default function SystemsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
