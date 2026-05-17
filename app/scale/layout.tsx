import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKAL Scale | Automated outbound infrastructure for B2B pipeline',
  description: 'Automated outbound infrastructure. AI prospecting, personalised multi-channel sequences, and a proprietary contact database. Pay only when qualified meetings land on your calendar.',
  keywords: [
    'AI sales systems',
    'automated outbound',
    'B2B lead generation',
    'AI prospecting',
    'sales automation',
    'pipeline automation',
    'pay per meeting',
    'outbound infrastructure',
    'AI SDR',
    'cold email automation',
  ],
  alternates: {
    canonical: 'https://skal.ai/scale',
  },
  openGraph: {
    title: 'SKAL Scale | Automated outbound infrastructure for B2B pipeline',
    description: 'AI prospecting, personalised outreach, and a proprietary database built in-house. You only pay when a qualified meeting lands on your calendar.',
    url: 'https://skal.ai/scale',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKAL Scale | Automated outbound infrastructure for B2B pipeline',
    description: 'Pay only when qualified meetings land on your calendar.',
  },
};

const scaleServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SKAL Scale",
  "url": "https://skal.ai/scale",
  "provider": { "@id": "https://skal.ai/#organization" },
  "serviceType": "AI sales automation",
  "description": "Automated outbound infrastructure for B2B pipeline. AI prospecting, personalised multi-channel sequences, proprietary contact database, pay-per-qualified-meeting pricing.",
  "offers": {
    "@type": "Offer",
    "name": "Pay-per-qualified-meeting",
    "description": "You pay per qualified meeting that lands on your calendar. No-shows do not count.",
  },
};

export default function ScaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scaleServiceSchema) }}
      />
      {children}
    </>
  );
}
