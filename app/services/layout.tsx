import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKAL Services | Custom AI & Software Development',
  description: 'Bespoke AI architectures, MVPs, and engineering teams built around your business. From startup builds to enterprise-scale systems.',
  openGraph: {
    title: 'SKAL Services | Built to Spec',
    description: 'Custom AI architectures and tech solutions engineered for your business.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
