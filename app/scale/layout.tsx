import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKAL Scale | AI-Powered Outbound Lead Generation',
  description: 'The outbound lead generation platform that 10X\'s your revenue. AI-powered prospecting, automated outreach, and intelligent pipeline management.',
  openGraph: {
    title: 'SKAL Scale | AI That Sells',
    description: 'The outbound lead generation platform that 10X\'s your revenue.',
  },
};

export default function ScaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
