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
  title: "SKAL | Practitioners building AI systems that ship",
  description: "SKAL builds AI systems that actually ship. Four ways to plug in: Scale, Systems, Services, and Staffing. Practitioners, not generalists.",
  keywords: "AI systems, AI agents, custom AI development, AI staffing, agentic workflows, voice agents, chat agents, sales automation, AI consulting, ElevenLabs, Claude, n8n, Make, Zapier",
  authors: [{ name: "SKAL" }],
  creator: "SKAL",
  publisher: "SKAL",
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
    title: 'SKAL | Practitioners building AI systems that ship',
    description: 'Four ways to plug in: Scale, Systems, Services, and Staffing. Practitioners, not generalists.',
    images: [
      {
        url: '/skal-logo.png',
        width: 1200,
        height: 630,
        alt: 'SKAL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKAL | Practitioners building AI systems that ship',
    description: 'Four ways to plug in: Scale, Systems, Services, and Staffing. Practitioners, not generalists.',
    images: ['/skal-logo.png'],
    creator: '@skalai_official',
    site: '@skalai_official',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SKAL",
              "url": "https://skal.ai",
              "logo": "https://skal.ai/skal-logo.png",
              "description": "SKAL builds AI systems that ship. Four ways to plug in: Scale, Systems, Services, and Staffing. Practitioners, not generalists.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hi@skal.ai"
              },
              "sameAs": [
                "https://www.linkedin.com/company/skal-official",
                "https://www.instagram.com/skalai_official"
              ],
              "foundingDate": "2024",
              "serviceType": [
                "AI Agents",
                "Agentic Workflows",
                "AI Sales Automation",
                "AI Staffing",
                "Custom AI Development"
              ]
            })
          }}
        />

        {/* Structured Data - WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SKAL",
              "url": "https://skal.ai"
            })
          }}
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
