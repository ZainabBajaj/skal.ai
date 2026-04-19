import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

const ALLOWED_SOURCES = [
  'contact_form',
  'chat_widget',
  'waitlist_scale',
  'waitlist_startup',
  'waitlist_rescue',
  'waitlist_enterprise',
  'waitlist_99',
] as const;

type LeadSource = (typeof ALLOWED_SOURCES)[number];

type LeadPayload = {
  source: LeadSource;
  name?: string;
  email?: string;
  phone?: string;
  website?: string;
  budget?: string;
  message?: string;
  category?: string;
  detail?: string;
  timing?: string;
};

const sanitize = (v: unknown) =>
  typeof v === 'string' ? v.replace(/[<>]/g, '').trim().slice(0, 2000) : null;

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!ALLOWED_SOURCES.includes(body.source)) {
    return NextResponse.json({ error: 'Invalid source' }, { status: 400 });
  }

  const row = {
    source: body.source,
    name: sanitize(body.name),
    email: sanitize(body.email),
    phone: sanitize(body.phone),
    website: sanitize(body.website),
    budget: sanitize(body.budget),
    message: sanitize(body.message),
    category: sanitize(body.category),
    detail: sanitize(body.detail),
    timing: sanitize(body.timing),
  };

  const { data, error } = await supabaseAdmin
    .from('leads')
    .insert(row)
    .select('id')
    .single();

  if (error) {
    console.error('[leads] insert failed', error);
    return NextResponse.json({ error: 'Insert failed' }, { status: 500 });
  }

  return NextResponse.json({ id: data.id });
}
