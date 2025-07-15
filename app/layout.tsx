import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Suspense } from "react";
import Script from "next/script";

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
        
        {/* GhostTrace AI Bot Tracker */}
        <Script 
          src="https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/ghosttrace-tracker" 
          strategy="beforeInteractive"
        />
        <Script id="ghosttrace-init" strategy="afterInteractive">
          {`
            window.GhostTrace.init({
              trackingCode: 'f2fc46b6518c600a965b97732ca2e952',
              siteId: '2f82d2b4-ca47-4145-9a1b-abb6f6f9d732',
              userId: '02122bc0-283b-4ea8-bbd0-2ed844a95a9b',
              domain: 'skal.ai'
            });
          `}
        </Script>
      </head>
      <body className={GeistSans.className}>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
