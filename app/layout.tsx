import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Script from "next/script";
import { Suspense } from "react";

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
        
        {/* GhostTrace AI Bot Tracker */}
        <Script id="ghosttrace-init" strategy="afterInteractive">
          {`
            // Initialize GhostTrace with your site configuration
            if (typeof window !== 'undefined') {
              fetch('https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/llm-tracker', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  tracking_code: '0504b9c5ab9c32afdae435117a35aacf',
                  user_agent: navigator.userAgent,
                  referrer: document.referrer || '',
                  url: window.location.href,
                  test_mode: false
                })
              }).then(response => {
                console.log('GhostTrace response status:', response.status);
                return response.json();
              }).then(data => {
                console.log('GhostTrace response:', data);
              }).catch(error => {
                console.error('GhostTrace error:', error);
              });
            }
          `}
        </Script>
        
        {/* HTML Fallback for when JavaScript is disabled - This will catch ChatGPT */}
        <noscript>
          <img 
            src="https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/llm-tracker?method=GET&tracking_code=0504b9c5ab9c32afdae435117a35aacf&url=skal.ai&test_mode=false" 
            alt="" 
            style={{ display: 'none' }}
          />
        </noscript>
        
        {children}
      </body>
    </html>
  );
}
