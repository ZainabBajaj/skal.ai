import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

type AnalyticsPayload = {
  session_id?: string;
  page_url?: string;
  referrer?: string | null;
  user_agent?: string;
};

const sanitize = (v: unknown, max = 2000) =>
  typeof v === 'string' ? v.replace(/[<>]/g, '').trim().slice(0, max) : null;

export async function POST(req: Request) {
  let body: AnalyticsPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const session_id = sanitize(body.session_id, 64);
  const page_url = sanitize(body.page_url);

  if (!session_id || !page_url) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const ip_country =
    req.headers.get('x-vercel-ip-country') ||
    req.headers.get('cf-ipcountry') ||
    null;

  const row = {
    session_id,
    page_url,
    referrer: sanitize(body.referrer),
    user_agent: sanitize(body.user_agent, 512),
    ip_country,
  };

  const { error } = await supabaseAdmin.from('page_views').insert(row);

  if (error) {
    console.error('[analytics] insert failed', error);
    return NextResponse.json({ error: 'Insert failed' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
