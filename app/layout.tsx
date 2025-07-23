import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GlobalSquidBackground from "./components/GlobalSquidBackground";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Suspense } from "react";
import Script from 'next/script';

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
  title: "Skal AI - Transform Your Business with AI Solutions",
  description: "Leading AI and software development company specializing in machine learning, automation, and full-stack solutions that drive business growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/skal-logo.png" />
        <link rel="shortcut icon" type="image/png" href="/skal-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/skal-logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
                      console.log('Bot detected:', result.bot_name, 'confidence:', result.confidence);
                    }
                  }
                } catch (error) {
                  console.warn('Bot tracking failed:', error);
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
          <img 
            src={`https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/pixel-tracker?d=skal.ai&s=2f82d2b4-ca47-4145-9a1b-abb6f6f9d732&t=f2fc46b6518c600a965b97732ca2e952&u=02122bc0-283b-4ea8-bbd0-2ed844a95a9b&p=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
            width="1"
            height="1"
            style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
            alt=""
          />
        </noscript>

        <GlobalSquidBackground />
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
