import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|fonts|api).*)'],
}

// Edge-compatible SHA256 hashing
async function hash(input: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(input)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function middleware(request: NextRequest) {
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

  const fingerprint = await hash(userAgent + ip + accept + language + platform)

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

  // Send request and ignore result safely
  try {
    await fetch('https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/ghosttrace-server', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(botData),
    })
  } catch (err) {
    // Log to edge runtime-compatible logger
    console.warn('Ghosttrace fetch failed')
  }

  const response = NextResponse.next()
  response.headers.set('X-Middleware-Fingerprint', fingerprint.slice(0, 12))
  return response
}
