import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import GoogleAnalytics from "./components/GoogleAnalytics";
import { Suspense } from "react";
import Script from 'next/script';
import { ThemeProvider } from './context/ThemeContext';

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
  title: "SKAL AI - Leading AI & Software Development Company | Transform Your Business",
  description: "SKAL AI is a premier AI and software development company specializing in machine learning, automation, full-stack development, and innovative AI solutions that drive business growth and digital transformation.",
  keywords: "AI development, machine learning, software development, artificial intelligence, automation, full-stack development, data science, DevOps, cloud solutions, business transformation, AI consulting, custom software, web development, mobile apps, digital transformation",
  authors: [{ name: "SKAL AI Team" }],
  creator: "SKAL AI",
  publisher: "SKAL AI",
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
    siteName: 'SKAL AI',
    title: 'SKAL AI - Leading AI & Software Development Company',
    description: 'Transform your business with cutting-edge AI solutions, machine learning, and innovative software development services.',
    images: [
      {
        url: '/skal-logo.png',
        width: 1200,
        height: 630,
        alt: 'SKAL AI - AI and Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKAL AI - Leading AI & Software Development Company',
    description: 'Transform your business with cutting-edge AI solutions, machine learning, and innovative software development services.',
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

        <Script id="ghost-trace-config" strategy="beforeInteractive">
          {`
            window.ghostTraceConfig = {
              trackingCode: 'f2fc46b6518c600a965b97732ca2e952',
              siteName: 'skal.ai',
              siteId: '2f82d2b4-ca47-4145-9a1b-abb6f6f9d732',
              domain: 'skal.ai',
              userId: '02122bc0-283b-4ea8-bbd0-2ed844a95a9b'
            };
          `}
        </Script>

        <Script id="ghosttrace-tracker" strategy="afterInteractive">
          {`
            (function() {
              'use strict';

              const TRACKER_CONFIG = {
                endpoint: 'https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/ghosttrace-tracker',
                timeout: 5000,
                retryAttempts: 2
              };

              function getVisitorInfo() {
                const config = window.ghostTraceConfig || {};
                return {
                  tracking_code: config.trackingCode,
                  user_agent: navigator.userAgent,
                  page_url: window.location.href,
                  referrer: document.referrer || null,
                  session_id: 'visit-' + Date.now(),
                  site_id: config.siteId,
                  user_id: config.userId
                };
              }

              async function sendTrackingData(data) {
                try {
                  const response = await fetch(TRACKER_CONFIG.endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                  });

                  if (response.ok) {
                    const result = await response.json();
                    if (result.detected) {
                      // Bot detected — no action needed
                    }
                  }
                } catch (error) {
                  // Bot tracking failed silently
                }
              }

              // Initialize tracking
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => sendTrackingData(getVisitorInfo()));
              } else {
                sendTrackingData(getVisitorInfo());
              }
            })();
          `}
        </Script>

        <Script id="server-side-detection" strategy="afterInteractive">
          {`
            fetch('https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/server-side-bot-detector?' +
              new URLSearchParams({
                domain: 'skal.ai',
                site_id: '2f82d2b4-ca47-4145-9a1b-abb6f6f9d732',
                tracking_code: 'f2fc46b6518c600a965b97732ca2e952',
                user_id: '02122bc0-283b-4ea8-bbd0-2ed844a95a9b',
                page_url: window.location.href
              }), { method: 'GET', mode: 'no-cors' }).catch(() => {});
          `}
        </Script>

        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/pixel-tracker?d=skal.ai&s=2f82d2b4-ca47-4145-9a1b-abb6f6f9d732&t=f2fc46b6518c600a965b97732ca2e952&u=02122bc0-283b-4ea8-bbd0-2ed844a95a9b&p=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
            width="1"
            height="1"
            style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
            alt=""
          />
        </noscript>
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
              "name": "SKAL AI",
              "url": "https://skal.ai",
              "logo": "https://skal.ai/skal-logo.png",
              "description": "Leading AI and software development company specializing in machine learning, automation, and full-stack solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
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
                "AI Development",
                "Machine Learning",
                "Software Development",
                "Full Stack Development",
                "Data Science",
                "DevOps & Cloud"
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
              "name": "SKAL AI",
              "url": "https://skal.ai",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://skal.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        <ThemeProvider>
          <Suspense>
            <GoogleAnalytics />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
