import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKAL Staffing | AI-native operators embedded into your workflow',
  description: 'Pre-vetted engineers and operators who already work AI-first. Drop them into your workflow and start shipping immediately. Top 5% talent, billed by the hour.',
  keywords: [
    'AI-native operators',
    'AI engineers',
    'embedded engineering talent',
    'AI staffing',
    'pre-vetted developers',
    'AI/ML engineers',
    'full-stack engineers',
    'DevOps engineers',
    'data engineers',
    'autonomous execution',
  ],
  alternates: {
    canonical: 'https://skal.ai/staffing',
  },
  openGraph: {
    title: 'SKAL Staffing | AI-native operators embedded into your workflow',
    description: 'Pre-vetted engineers and operators who work AI-first. Drop them in and start shipping immediately. Billed by the hour.',
    url: 'https://skal.ai/staffing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKAL Staffing | AI-native operators embedded into your workflow',
    description: 'Pre-vetted engineers and operators who work AI-first. Ship from week one.',
  },
};

const staffingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SKAL Staffing",
  "url": "https://skal.ai/staffing",
  "provider": { "@id": "https://skal.ai/#organization" },
  "serviceType": "AI-native engineering staffing",
  "description": "Pre-vetted, AI-native engineers and operators embedded directly into your workflow. Full-stack, AI/ML, DevOps, and data engineering.",
};

export default function StaffingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(staffingServiceSchema) }}
      />
      {children}
    </>
  );
}
