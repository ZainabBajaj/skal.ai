import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// AI Bot Detection Patterns
const AI_BOT_PATTERNS = [
  // OpenAI bots
  /GPTBot/i,
  /ChatGPT-User/i,
  /OAI-SearchBot/i,
  /OpenAI-SearchBot/i,
  
  // Anthropic bots
  /ClaudeBot/i,
  /Claude-Web/i,
  /anthropic-ai/i,
  
  // Perplexity bots
  /PerplexityBot/i,
  /Perplexity-User/i,
  
  // Google AI bots
  /Google-Extended/i,
  /GoogleOther/i,
  /Bard-Bot/i,
  
  // Microsoft AI bots
  /BingBot.*AI/i,
  /Microsoft-AI/i,
  
  // Other AI bots
  /Meta-AI/i,
  /YouBot/i,
  /cohere-ai/i,
  /AI2Bot/i,
  /DuckAssistBot/i
];

const TRACKING_CONFIG = {
  endpoint: 'https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/ghosttrace-tracker',
  trackingCode: '0504b9c5ab9c32afdae435117a35aacf'
};

async function trackAIBot(request: NextRequest, detectedBot: string) {
  try {
    const userAgent = request.headers.get('user-agent') || '';
    const url = request.nextUrl.href;
    const referrer = request.headers.get('referer') || '';
    
    console.log('🤖 SKAL.AI Server-Side: AI Bot detected!', {
      bot: detectedBot,
      url: url,
      userAgent: userAgent.substring(0, 100)
    });

    const trackingData = {
      tracking_code: TRACKING_CONFIG.trackingCode,
      user_agent: userAgent,
      referrer: referrer,
      page_url: url,
      test_mode: false
    };

    // Fire and forget - don't wait for response to avoid slowing down the request
    fetch(TRACKING_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackingData)
    }).catch(error => {
      console.warn('⚠️ SKAL.AI Server-Side: Tracking failed:', error);
    });

  } catch (error) {
    console.warn('⚠️ SKAL.AI Server-Side: Error tracking bot:', error);
  }
}

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  
  // Check if this is an AI bot
  for (const pattern of AI_BOT_PATTERNS) {
    if (pattern.test(userAgent)) {
      const botName = userAgent.match(pattern)?.[0] || 'Unknown AI Bot';
      
      // Track the bot visit (fire and forget)
      trackAIBot(request, botName);
      
      break; // Only track once per request
    }
  }
  
  // Continue with the request
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
} 
