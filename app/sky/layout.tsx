import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKAL Sky | Capture any lead you read, scored against your ICP',
  description: 'A Chrome extension that turns a highlighted message, post or thread into a structured lead, scored against your ideal customer profile and filed automatically. Free to start.',
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
    title: 'SKAL Sky | Capture any lead you read, scored against your ICP',
    description: 'Highlight a message on WhatsApp, LinkedIn or email. Sky extracts the lead, scores it against your ICP and files it. Live on the Chrome Web Store.',
    url: 'https://skal.ai/scale',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKAL Sky | Capture any lead you read, scored against your ICP',
    description: 'Highlight anything. Sky turns it into a scored lead.',
  },
};

const scaleServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SKAL Sky",
  "url": "https://skal.ai/scale",
  "provider": { "@id": "https://skal.ai/#organization" },
  "serviceType": "AI sales automation",
  "description": "A Chrome extension for capturing leads from any page, extracting them into structured records and scoring them against an ideal customer profile.",
  "offers": {
    "@type": "Offer",
    "name": "Pay-per-qualified-meeting",
    "description": "Free monthly allowance of leads, with paid plans priced in leads.",
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
