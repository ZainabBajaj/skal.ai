import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | SKAL',
  description: 'How SKAL uses cookies and how to manage your preferences.',
  alternates: { canonical: 'https://skal.ai/cookie-policy' },
  robots: { index: true, follow: true },
};

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
