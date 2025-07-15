import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const TRACKING_CONFIG = {
  endpoint: 'https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/ghosttrace-tracker',
  trackingCode: 'f2fc46b6518c600a965b97732ca2e952',
  siteId: '2f82d2b4-ca47-4145-9a1b-abb6f6f9d732',
  userId: '02122bc0-283b-4ea8-bbd0-2ed844a95a9b',
  domain: 'skal.ai'
};

export async function middleware(request: NextRequest) {
  try {
    // Forward request data to GhostTrace
    fetch(TRACKING_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tracking_code: TRACKING_CONFIG.trackingCode,
        site_id: TRACKING_CONFIG.siteId,
        user_id: TRACKING_CONFIG.userId,
        domain: TRACKING_CONFIG.domain,
        user_agent: request.headers.get('user-agent') || '',
        referrer: request.headers.get('referer') || '',
        url: request.nextUrl.href,
        test_mode: false,
        server_side: true
      })
    }).catch(() => {
      // Silently fail - don't block the request
    });
  } catch {
    // Ignore errors - don't block the request
  }
  
  // Always continue with the request
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
} 
