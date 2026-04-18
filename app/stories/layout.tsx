import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stories | SKAL',
  description: 'Field notes, case studies, and essays from the SKAL team on building AI systems that actually work.',
  openGraph: {
    title: 'Stories | SKAL',
    description: 'Field notes, case studies, and essays from the SKAL team on building AI systems that actually work.',
  },
};

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
