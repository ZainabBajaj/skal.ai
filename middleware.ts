// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|fonts|api).*)'], // don't match static assets
}

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  const isBot = /chatgpt|openai|python|curl|scrapy|httpclient|ai|bot/i.test(userAgent)

  if (isBot) {
    const botData = {
      userAgent,
      ip: request.headers.get('x-forwarded-for') ?? 'unknown',
      url: request.nextUrl.href,
      timestamp: new Date().toISOString(),
    }

    // Send to your Supabase Edge Function
    fetch('https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/ghosttrace-server', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(botData),
    }).catch((err) => {
      console.warn('Bot notification failed', err)
    })
  }

  return NextResponse.next()
}
