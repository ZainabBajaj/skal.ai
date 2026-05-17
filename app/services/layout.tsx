import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKAL Services | Custom AI systems built around your operations',
  description: 'SKAL Services designs and deploys internal AI systems, workflow automation, and custom software built specifically for how your business operates. AI-native infrastructure scoped to your requirements.',
  keywords: [
    'custom AI systems',
    'internal AI tooling',
    'workflow automation',
    'AI infrastructure',
    'custom AI development',
    'operational software',
    'process automation',
    'AI-native MVP',
    'enterprise AI tooling',
  ],
  alternates: {
    canonical: 'https://skal.ai/services',
  },
  openGraph: {
    title: 'SKAL Services | Custom AI systems built around your operations',
    description: 'Internal AI systems, workflow automation, and custom software built specifically for how your business operates.',
    url: 'https://skal.ai/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKAL Services | Custom AI systems built around your operations',
    description: 'Internal AI systems, workflow automation, and custom software built around your operations.',
  },
};

const servicesServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SKAL Services",
  "url": "https://skal.ai/services",
  "provider": { "@id": "https://skal.ai/#organization" },
  "serviceType": "Custom AI development and workflow automation",
  "description": "Custom AI systems, workflow automation, and software built specifically for how your business operates.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesServiceSchema) }}
      />
      {children}
    </>
  );
}
