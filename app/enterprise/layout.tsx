import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Solutions | SKAL AI',
  description: 'Enterprise-grade AI and development solutions with dedicated project management, security compliance, and scalable architecture.',
  openGraph: {
    title: 'Enterprise Solutions | SKAL AI',
    description: 'Enterprise-grade AI and development solutions with dedicated project management and security compliance.',
  },
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
