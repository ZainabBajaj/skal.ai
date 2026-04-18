import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKAL Systems | Custom AI & Tech Architecture',
  description: 'Custom AI architectures and tech solutions engineered for your business. From startup MVPs to enterprise-scale systems — we design, build, and deploy.',
  openGraph: {
    title: 'SKAL Systems | AI That Builds',
    description: 'Custom AI architectures and tech solutions engineered for your business.',
  },
};

export default function SystemsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
