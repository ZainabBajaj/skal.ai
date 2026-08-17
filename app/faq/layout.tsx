import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | SKAL',
  description: 'Common questions about SKAL Scale, Systems, Services, and Staffing. Pricing, timelines, integrations, and how we work.',
  keywords: ['SKAL FAQ', 'AI consulting questions', 'AI implementation pricing', 'how SKAL works'],
  alternates: {
    canonical: 'https://skal.ai/faq',
  },
  openGraph: {
    title: 'FAQ | SKAL',
    description: 'Common questions about how SKAL works: pricing, timelines, integrations.',
    url: 'https://skal.ai/faq',
    type: 'website',
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "url": "https://skal.ai/faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "I'm not sure which of the four I need. Where do I start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with a 30-minute discovery call. We listen, name the bottleneck, and tell you which of Scale, Systems, Services, or Staffing fits. Sometimes more than one. If none of them fit, we tell you that too.",
      },
    },
    {
      "@type": "Question",
      "name": "How does pricing work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the engagement. Scale is priced per qualified meeting. Systems are flat fees per deployment. Services are scoped and quoted up front. Staffing is billed hourly. You get a clear number after the discovery call, no surprise line items.",
      },
    },
    {
      "@type": "Question",
      "name": "How long until something is live?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Systems typically deploy in about a week. Services run on the timeline of the build, scoped before we start so there are no moving goalposts. Staffing engineers can start within days once the brief is set. Scale ramps over the first few weeks as we calibrate to your ICP.",
      },
    },
    {
      "@type": "Question",
      "name": "Will SKAL work with the tools we already use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Systems plug into HubSpot, Salesforce, Zendesk, Intercom, Freshdesk, and most of what you already run. Workflows ride on n8n, Make, and Zapier. Voice and chat are powered by ElevenLabs and Claude. We work inside your stack rather than replacing it.",
      },
    },
    {
      "@type": "Question",
      "name": "Can SKAL replace, augment, or build my engineering team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All three, depending on what you need. Staffing slots pre-vetted engineers into your existing team. Services builds for you when you do not have one yet. Either way, the people shipping the code stay accountable to you.",
      },
    },
    {
      "@type": "Question",
      "name": "What happens after a system goes live?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We do not disappear. Systems come with monitoring, prompt and policy tuning, and updates as your business changes. Services include a clear handoff and an optional retainer if you want us to keep iterating. You set the level of ongoing involvement.",
      },
    },
  ],
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      {children}
    </>
  );
}
