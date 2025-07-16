// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|fonts|api).*)'], // don't match static assets
}

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
  const accept = request.headers.get('accept') || ''
  const secChUa = request.headers.get('sec-ch-ua') || ''
  const acceptLang = request.headers.get('accept-language') || ''
  const referer = request.headers.get('referer') || ''
  const dnt = request.headers.get('dnt') || ''
  const encoding = request.headers.get('accept-encoding') || ''
  const language = request.headers.get('accept-language') || ''
  const platform = request.headers.get('sec-ch-ua-platform') || ''
  const uaMobile = request.headers.get('sec-ch-ua-mobile') || ''
  const deviceHint = request.headers.get('sec-fetch-dest') || ''

  const fingerprint = crypto
    .createHash('sha256')
    .update(userAgent + ip + accept + language + platform)
    .digest('hex')

  const botData = {
    userAgent,
    ip,
    url: request.nextUrl.href,
    referer,
    accept,
    secChUa,
    acceptLang,
    dnt,
    encoding,
    language,
    platform,
    uaMobile,
    deviceHint,
    fingerprint,
    source: 'middleware',
    tracking_code: '__middleware_request__',
    timestamp: new Date().toISOString(),
  }

  // Fire-and-forget async call
  fetch('https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/ghosttrace-server', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(botData),
  }).catch((err) => {
    console.warn('Bot notification failed:', err)
  })

  const response = NextResponse.next()
  response.headers.set('X-Middleware-Fingerprint', fingerprint.slice(0, 12)) // Optional

  return response
}
