import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startup Package | SKAL',
  description: 'Transform your startup idea into reality with expert AI development, strategic guidance, and scalable solutions that accelerate growth.',
  openGraph: {
    title: 'Startup Package | SKAL',
    description: 'Transform your startup idea into reality with expert AI development, strategic guidance, and scalable solutions.',
  },
};

export default function StartupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
