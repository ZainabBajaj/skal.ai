import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Code Rescue | SKAL',
  description: 'Fix your messy codebase and eliminate tech debt with expert code review, refactoring, and performance optimization.',
  openGraph: {
    title: 'Code Rescue | SKAL',
    description: 'Fix your messy codebase and eliminate tech debt with expert code review and performance optimization.',
  },
};

export default function RescueLayout({ children }: { children: React.ReactNode }) {
  return children;
}
