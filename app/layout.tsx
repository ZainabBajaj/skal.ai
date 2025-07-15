import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
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

export default async function RootLayout({
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
        
        {/* Single LLM Bot Tracking Script - Using Working ghosttrace-tracker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                'use strict';
                console.log('🚀 SKAL.AI LLM Tracker: Initializing...');

                // LLM Tracker Configuration - SKAL.AI
                const LLM_TRACKER_CONFIG = {
                  endpoint: 'https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/ghosttrace-tracker',
                  trackingCode: '0504b9c5ab9c32afdae435117a35aacf',
                  siteId: '2f10a5f5-be42-4f26-a755-940487ff3004',
                  userId: '02122bc0-283b-4ea8-bbd0-2ed844a95a9b',
                  domain: 'skal.ai'
                };

                /**
                 * Track LLM bot visits
                 */
                async function trackLLMVisit() {
                  try {
                    const trackingData = {
                      tracking_code: LLM_TRACKER_CONFIG.trackingCode,
                      user_agent: navigator.userAgent,
                      referrer: document.referrer || '',
                      url: window.location.href,
                      test_mode: false
                    };

                    console.log('🤖 SKAL.AI LLM Tracker: Sending data...', {
                      tracking_code: trackingData.tracking_code,
                      url: trackingData.url,
                      user_agent: trackingData.user_agent.substring(0, 100)
                    });

                    const response = await fetch(LLM_TRACKER_CONFIG.endpoint, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(trackingData),
                      mode: 'cors'
                    });

                    if (response.ok) {
                      const result = await response.json();
                      if (result.detected) {
                        console.log('🚨 SKAL.AI LLM Bot Detected:', {
                          botName: result.bot_name,
                          confidence: (result.confidence * 100).toFixed(1) + '%',
                          category: result.bot_category
                        });
                      } else {
                        console.log('👤 SKAL.AI: Human visitor detected');
                      }
                    } else {
                      console.warn('⚠️ SKAL.AI LLM Tracker: Request failed:', response.status);
                    }
                  } catch (error) {
                    console.warn('⚠️ SKAL.AI LLM Tracker: Error:', error);
                  }
                }

                // Track initial page load
                trackLLMVisit();
                
                // Track SPA navigation (if applicable)
                if (typeof window.history !== 'undefined' && window.history.pushState) {
                  const originalPushState = window.history.pushState;
                  window.history.pushState = function() {
                    originalPushState.apply(window.history, arguments);
                    setTimeout(() => trackLLMVisit(), 100);
                  };
                  
                  const originalReplaceState = window.history.replaceState;
                  window.history.replaceState = function() {
                    originalReplaceState.apply(window.history, arguments);
                    setTimeout(() => trackLLMVisit(), 100);
                  };
                }
                
                // Track popstate events (back/forward buttons)
                window.addEventListener('popstate', function() {
                  setTimeout(() => trackLLMVisit(), 100);
                });

                console.log('✅ SKAL.AI LLM Tracker: Initialized successfully');
              })();
            `
          }}
        />
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
