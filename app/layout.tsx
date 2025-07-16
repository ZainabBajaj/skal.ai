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

        <Script 
          src="https://cemoyczgfrsspjdgczys.supabase.co/storage/v1/object/public/website-assets/bot-tracker.js"
          strategy="afterInteractive"
        />

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

        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
