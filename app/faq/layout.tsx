import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | SKAL',
  description: 'Answers to the most common questions about SKAL Scale, Systems, Services, and Staffing.',
  openGraph: {
    title: 'SKAL FAQ',
    description: 'Answers to the most common questions about working with SKAL.',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
