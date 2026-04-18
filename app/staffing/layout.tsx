import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKAL Staffing | Pre-Vetted AI & Engineering Talent',
  description: 'Embed pre-vetted engineers from the top 5% directly into your team. Full-stack, AI/ML, DevOps, and data engineering talent — ready to ship from week one.',
  openGraph: {
    title: 'SKAL Staffing | Top 5% AI Talent',
    description: 'Pre-vetted AI and engineering talent embedded directly into your team.',
  },
};

export default function StaffingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
