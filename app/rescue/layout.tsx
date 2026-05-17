import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System rescue and operational recovery | SKAL',
  description: 'Rebuild broken systems, automate technical debt, and stabilize your operations. We unstick teams whose codebase or stack is blocking progress.',
  keywords: [
    'code rescue',
    'system rebuild',
    'technical debt automation',
    'operational recovery',
    'legacy system migration',
    'codebase stabilization',
  ],
  alternates: {
    canonical: 'https://skal.ai/rescue',
  },
  openGraph: {
    title: 'System rescue and operational recovery | SKAL',
    description: 'Rebuild broken systems, automate technical debt, and stabilize operations.',
    url: 'https://skal.ai/rescue',
    type: 'website',
  },
};

export default function RescueLayout({ children }: { children: React.ReactNode }) {
  return children;
}
