import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '$99 MVP Package | SKAL AI',
  description: 'Get your minimum viable product built for just $99. Fast, affordable MVP development to validate your idea.',
  openGraph: {
    title: '$99 MVP Package | SKAL AI',
    description: 'Get your minimum viable product built for just $99. Fast, affordable MVP development.',
  },
};

export default function MVPLayout({ children }: { children: React.ReactNode }) {
  return children;
}
