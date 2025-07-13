import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Suspense } from "react";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "SKAL - AI, Data Science & Full Stack Solutions",
  description: "Transforming businesses through innovative AI, Data Science, and Full Stack solutions",
  icons: {
    icon: [
      { url: "/skal-logo.png", sizes: "16x16", type: "image/png" },
      { url: "/skal-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/skal-logo.png", sizes: "48x48", type: "image/png" }
    ],
    shortcut: [{ url: "/skal-logo.png" }],
    apple: [
      { url: "/skal-logo.png", sizes: "180x180", type: "image/png" }
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/skal-logo.png" />
        <link rel="shortcut icon" type="image/png" href="/skal-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/skal-logo.png" />
      </head>
      <body className={GeistSans.className}>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        {/* GhostTrace AI Bot Tracker for skal.ai */}
        <Script 
          id="ghosttrace-config"
          strategy="afterInteractive"
        >
          {`
            window.ghostTraceConfig = {
              trackingCode: '65b176e1fe89f021f4565f57a709f7cb',
              siteName: 'skal.ai', 
              siteId: 'cd05923b-954f-4329-8c4f-415644a18ca7',
              userId: '02122bc0-283b-4ea8-bbd0-2ed844a95a9b',
              domain: 'skal.ai'
            };
          `}
        </Script>
        <Script 
          id="ghosttrace-tracker"
          strategy="afterInteractive"
        >
          {`
            (function() {
              'use strict';
              
              const TRACKER_CONFIG = {
                endpoint: 'https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/ghosttrace-tracker',
                timeout: 5000
              };
              
              function sendTrackingData() {
                const config = window.ghostTraceConfig || {};
                const requestData = {
                  tracking_code: config.trackingCode,
                  page_url: window.location.href,
                  user_agent: navigator.userAgent,
                  referrer: document.referrer || null,
                  visitor_ip: 'client_side_detected',
                  session_id: 'session-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
                  user_id: config.userId
                };
                
                fetch(TRACKER_CONFIG.endpoint, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(requestData),
                  mode: 'cors'
                }).then(response => {
                  console.log('✅ GhostTrace tracking:', response.ok ? 'Success' : 'Failed');
                }).catch(error => {
                  console.warn('⚠️ GhostTrace tracking failed:', error);
                });
              }
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', sendTrackingData);
              } else {
                sendTrackingData();
              }
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
