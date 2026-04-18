import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | SKAL',
  description: 'The story behind SKAL — a practitioner-led AI studio building the systems most businesses want but do not know how to build.',
  openGraph: {
    title: 'About SKAL',
    description: 'A practitioner-led AI studio building systems most businesses want but do not know how to build.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
