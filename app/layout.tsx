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
        <!-- GhostTrace AI Bot Tracker for skal.ai -->
        <script src="https://cemoyczgfrsspjdgczys.supabase.co/storage/v1/object/public/website-assets/ghosttrace-universal.js"></script>
        <script>
          // Initialize GhostTrace with your site configuration
          window.GhostTrace.init({
            trackingCode: '65b176e1fe89f021f4565f57a709f7cb',
            siteId: 'cd05923b-954f-4329-8c4f-415644a18ca7',
            userId: '02122bc0-283b-4ea8-bbd0-2ed844a95a9b',
            domain: 'skal.ai'
          });
        </script>
        <!-- End GhostTrace -->
        {children}
      </body>
    </html>
  );
}
