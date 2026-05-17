import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Suspense } from "react";
import { ThemeProvider } from './context/ThemeContext';
import { CookieConsentProvider } from './context/CookieConsentContext';
import ChatWidget from './components/ChatWidget';
import CookieBanner from './components/CookieBanner';
import TrackingScripts from './components/TrackingScripts';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "SKAL | AI-native operational infrastructure for B2B companies",
    template: "%s | SKAL",
  },
  description: "SKAL deploys AI systems, automation infrastructure, and AI-native operators that run sales, support, and operations for modern B2B companies. Four ways to plug in: Scale, Systems, Services, Staffing.",
  keywords: [
    "AI systems",
    "AI sales systems",
    "automated outbound",
    "operational infrastructure",
    "AI-native operators",
    "workflow automation",
    "support automation",
    "voice AI",
    "chat AI",
    "agentic workflows",
    "AI staffing",
    "custom AI development",
    "execution layer",
    "autonomous operations",
    "B2B AI infrastructure",
    "ElevenLabs",
    "Claude",
    "n8n",
    "Make",
    "Zapier",
  ],
  authors: [{ name: "SKAL", url: "https://skal.ai" }],
  creator: "SKAL",
  publisher: "SKAL",
  applicationName: "SKAL",
  category: "Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://skal.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skal.ai',
    siteName: 'SKAL',
    title: 'SKAL | AI-native operational infrastructure for B2B companies',
    description: 'AI systems, automation infrastructure, and AI-native operators that run sales, support, and operations. Four ways to plug in: Scale, Systems, Services, Staffing.',
    images: [
      {
        url: '/skal-logo.png',
        width: 1200,
        height: 630,
        alt: 'SKAL — AI-native operational infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKAL | AI-native operational infrastructure for B2B companies',
    description: 'AI systems, automation infrastructure, and AI-native operators that run sales, support, and operations.',
    images: ['/skal-logo.png'],
    creator: '@skalai_official',
    site: '@skalai_official',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
  other: {
    'theme-color': '#009bd7',
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://skal.ai/#organization",
  "name": "SKAL",
  "alternateName": "SKAL AI",
  "url": "https://skal.ai",
  "logo": {
    "@type": "ImageObject",
    "url": "https://skal.ai/skal-logo.png",
    "width": 1200,
    "height": 630,
  },
  "description": "SKAL deploys AI systems, automation infrastructure, and AI-native operators that run sales, support, and operations for modern B2B companies.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "SKAL Founder",
  },
  "areaServed": "Worldwide",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "130 NW 77th Ave",
      "addressLocality": "Pembroke Pines",
      "addressRegion": "FL",
      "postalCode": "33024",
      "addressCountry": "US",
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "26th Floor, Amber Gem Tower",
      "addressLocality": "Ajman",
      "addressCountry": "AE",
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "H, 21 Mateen Fatima Rd Block, Block H, Gulberg",
      "addressLocality": "Lahore",
      "addressCountry": "PK",
    },
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hi@skal.ai",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"],
    },
  ],
  "sameAs": [
    "https://www.linkedin.com/company/skal-official",
    "https://www.instagram.com/skalai_official",
    "https://www.youtube.com/@skal-ai",
  ],
  "knowsAbout": [
    "AI systems",
    "AI sales systems",
    "Operational automation",
    "AI-native execution",
    "Voice AI",
    "Chat AI",
    "Workflow automation",
    "Custom AI development",
    "AI staffing",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://skal.ai/#website",
  "name": "SKAL",
  "url": "https://skal.ai",
  "description": "AI-native operational infrastructure for modern B2B companies.",
  "publisher": {
    "@id": "https://skal.ai/#organization",
  },
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://skal.ai/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://skal.ai/#service",
  "name": "SKAL",
  "image": "https://skal.ai/skal-logo.png",
  "url": "https://skal.ai",
  "telephone": "",
  "priceRange": "$$",
  "provider": {
    "@id": "https://skal.ai/#organization",
  },
  "serviceType": [
    "AI sales systems",
    "Operational AI automation",
    "Custom AI development",
    "AI-native staffing",
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SKAL Products",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SKAL Scale",
          "description": "Automated outbound infrastructure. AI prospecting, personalised sequences, and a proprietary contact database. Pay only when qualified meetings land on your calendar.",
          "url": "https://skal.ai/scale",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SKAL Systems",
          "description": "Deployable AI systems that handle support, calls, bookings, and operations automatically. Voice and chat systems trained on your business.",
          "url": "https://skal.ai/systems",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SKAL Services",
          "description": "Custom AI systems, workflow automation, and software built specifically for your operations.",
          "url": "https://skal.ai/services",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SKAL Staffing",
          "description": "AI-native operators embedded into your workflow. Pre-vetted engineers who ship from week one.",
          "url": "https://skal.ai/staffing",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/skal-logo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/skal-logo.png" />
        <link rel="shortcut icon" type="image/png" href="/skal-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/skal-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#009bd7" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />

        <ThemeProvider>
          <CookieConsentProvider>
            <Suspense>
              <TrackingScripts />
            </Suspense>
            {children}
            <ChatWidget />
            <CookieBanner />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
