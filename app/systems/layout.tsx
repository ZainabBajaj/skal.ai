import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKAL Systems | Deployable AI systems for support, sales, and operations',
  description: 'Deploy AI systems that handle support, calls, bookings, and operations automatically. Voice and chat infrastructure trained on your business. Powered by Claude, ElevenLabs, n8n, Make, and Zapier.',
  keywords: [
    'AI systems',
    'operational AI',
    'support automation',
    'voice AI',
    'chat AI',
    'AI receptionist',
    'inbound automation',
    'AI sales system',
    'workflow automation',
    'autonomous operations',
  ],
  alternates: {
    canonical: 'https://skal.ai/systems',
  },
  openGraph: {
    title: 'SKAL Systems | Deployable AI systems for support, sales, and operations',
    description: 'Voice, chat, and workflow automation built around your business. Customer support, inbound calls, lead qualification, and operational tasks handled 24/7.',
    url: 'https://skal.ai/systems',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKAL Systems | Deployable AI systems for support, sales, and operations',
    description: 'Voice, chat, and workflow automation built around your business. Operations handled 24/7.',
  },
};

const systemsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SKAL Systems",
  "url": "https://skal.ai/systems",
  "provider": { "@id": "https://skal.ai/#organization" },
  "serviceType": "Operational AI automation",
  "description": "Deployable AI systems for support, sales, and inbound operations. Voice and chat infrastructure trained on your business, integrated with your existing tools.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SKAL Systems",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sales System",
          "description": "Automated outbound infrastructure for your pipeline. Outreach, qualification, CRM updates, and meeting booking handled 24/7.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Support System",
          "description": "Support infrastructure that scales without increasing headcount. Resolves tickets, answers product questions, escalates the hard ones.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Receptionist System",
          "description": "Always-on inbound operations. Calls, scheduling, and routing handled instantly in every language your customers speak.",
        },
      },
    ],
  },
};

export default function SystemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(systemsServiceSchema) }}
      />
      {children}
    </>
  );
}
