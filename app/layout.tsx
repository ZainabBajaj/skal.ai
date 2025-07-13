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
          id="ghosttrace-tracker"
          strategy="afterInteractive"
        >
          {`
            (function() {
                'use strict';
                
                console.log('🚀 GhostTrace AI Bot Tracker starting...');
                
                // Your tracking configuration
                const config = {
                    trackingCode: '65b176e1fe89f021f4565f57a709f7cb',
                    siteName: 'skal.ai',
                    siteId: 'cd05923b-954f-4329-8c4f-415644a18ca7',
                    userId: '02122bc0-283b-4ea8-bbd0-2ed844a95a9b',
                    domain: 'skal.ai'
                };
                
                // Collect tracking data
                const trackingData = {
                    tracking_code: config.trackingCode,
                    page_url: window.location.href,
                    user_agent: navigator.userAgent,
                    referrer: document.referrer || null,
                    visitor_ip: 'client_detected',
                    session_id: 'session-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
                    user_id: config.userId
                };
                
                console.log('📊 Tracking data prepared:', {
                    tracking_code: trackingData.tracking_code,
                    page_url: trackingData.page_url,
                    user_agent: trackingData.user_agent.substring(0, 100) + '...',
                    user_id: trackingData.user_id
                });
                
                // Send tracking data to the fixed function
                async function sendTracking() {
                    try {
                        console.log('📡 Sending tracking data to ghosttrace-tracker...');
                        
                        const response = await fetch('https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/ghosttrace-tracker', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'User-Agent': navigator.userAgent
                            },
                            body: JSON.stringify(trackingData),
                            mode: 'cors'
                        });
                        
                        console.log('📡 Response status:', response.status, response.statusText);
                        
                        if (response.ok) {
                            const result = await response.json();
                            console.log('✅ GhostTrace tracking successful:', result);
                            
                            if (result.detected) {
                                console.log('🤖 Bot detected:', result.bot_name, 'confidence:', result.confidence);
                                
                                // Show detection result on page
                                const detectionDiv = document.createElement('div');
                                detectionDiv.style.cssText = 'background: #e8f5e8; border: 1px solid #4caf50; padding: 10px; margin: 10px 0; border-radius: 5px;';
                                detectionDiv.innerHTML = \`
                                    <h3>🤖 AI Bot Detected!</h3>
                                    <p><strong>Bot Name:</strong> \${result.bot_name}</p>
                                    <p><strong>Confidence:</strong> \${(result.confidence * 100).toFixed(1)}%</p>
                                    <p><strong>Category:</strong> \${result.category}</p>
                                \`;
                                document.body.appendChild(detectionDiv);
                            } else {
                                console.log('👤 Human visitor detected');
                                
                                // Show human visitor result
                                const humanDiv = document.createElement('div');
                                humanDiv.style.cssText = 'background: #e3f2fd; border: 1px solid #2196f3; padding: 10px; margin: 10px 0; border-radius: 5px;';
                                humanDiv.innerHTML = \`
                                    <h3>👤 Human Visitor</h3>
                                    <p>No AI bot patterns detected in your user agent.</p>
                                \`;
                                document.body.appendChild(humanDiv);
                            }
                        } else {
                            const errorText = await response.text();
                            console.error('❌ GhostTrace tracking failed:', response.status, errorText);
                            
                            // Show error on page
                            const errorDiv = document.createElement('div');
                            errorDiv.style.cssText = 'background: #ffebee; border: 1px solid #f44336; padding: 10px; margin: 10px 0; border-radius: 5px;';
                            errorDiv.innerHTML = \`
                                <h3>❌ Tracking Error</h3>
                                <p><strong>Status:</strong> \${response.status}</p>
                                <p><strong>Error:</strong> \${errorText}</p>
                            \`;
                            document.body.appendChild(errorDiv);
                        }
                    } catch (error) {
                        console.error('💥 GhostTrace tracking error:', error);
                        
                        // Show network error on page
                        const networkErrorDiv = document.createElement('div');
                        networkErrorDiv.style.cssText = 'background: #fff3e0; border: 1px solid #ff9800; padding: 10px; margin: 10px 0; border-radius: 5px;';
                        networkErrorDiv.innerHTML = \`
                            <h3>💥 Network Error</h3>
                            <p><strong>Error:</strong> \${error.message}</p>
                        \`;
                        document.body.appendChild(networkErrorDiv);
                    }
                }
                
                // Send tracking immediately
                sendTracking();
                
                // Test with different AI bot user agents
                const testBots = [
                    {
                        name: 'ChatGPT-User',
                        userAgent: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot'
                    },
                    {
                        name: 'GPTBot',
                        userAgent: 'Mozilla/5.0 (compatible; GPTBot/1.0; +https://openai.com/gptbot)'
                    },
                    {
                        name: 'ClaudeBot',
                        userAgent: 'Mozilla/5.0 (compatible; ClaudeBot/1.0; +https://www.anthropic.com/)'
                    },
                    {
                        name: 'PerplexityBot',
                        userAgent: 'Mozilla/5.0 (compatible; PerplexityBot/1.0; +https://www.perplexity.ai/bot)'
                    }
                ];
                
                // Test each bot after 2 seconds
                setTimeout(() => {
                    console.log('🧪 Testing AI bot detection with different user agents...');
                    
                    testBots.forEach((bot, index) => {
                        setTimeout(() => {
                            console.log(\`🧪 Testing \${bot.name}...\`);
                            
                            const testData = {
                                ...trackingData,
                                user_agent: bot.userAgent,
                                session_id: \`test-\${bot.name.toLowerCase()}-\${Date.now()}\`
                            };
                            
                            fetch('https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/ghosttrace-tracker', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'User-Agent': bot.userAgent
                                },
                                body: JSON.stringify(testData),
                                mode: 'cors'
                            })
                            .then(response => response.json())
                            .then(result => {
                                console.log(\`🧪 \${bot.name} test result:\`, result);
                                
                                if (result.detected) {
                                    console.log(\`✅ \${bot.name} detected successfully!\`);
                                } else {
                                    console.log(\`❌ \${bot.name} not detected\`);
                                }
                            })
                            .catch(error => {
                                console.error(\`🧪 \${bot.name} test failed:\`, error);
                            });
                        }, index * 1000); // Stagger tests by 1 second each
                    });
                }, 2000);
                
            })();
          `}
        </Script>
        {/* End GhostTrace */}
        {children}
      </body>
    </html>
  );
}
