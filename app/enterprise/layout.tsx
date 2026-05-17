import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise AI tooling | SKAL',
  description: 'Replace manual workflows with internal AI tooling, process automation, and operational orchestration built around how your team actually works.',
  keywords: [
    'enterprise AI',
    'internal AI tooling',
    'process automation',
    'workflow orchestration',
    'operational efficiency',
    'enterprise automation',
  ],
  alternates: {
    canonical: 'https://skal.ai/enterprise',
  },
  openGraph: {
    title: 'Enterprise AI tooling | SKAL',
    description: 'Internal AI tooling and operational orchestration for enterprise teams.',
    url: 'https://skal.ai/enterprise',
    type: 'website',
  },
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
