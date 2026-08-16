-- Schema for the skal.ai site's own Supabase project.
--
-- Two tables, one per API route: app/api/leads/route.ts writes `leads`,
-- app/api/analytics/route.ts writes `page_views`. The columns here are
-- exactly the keys those routes insert — a column this file is missing is
-- a form submission the site drops with "Insert failed".
--
-- Both routes run server-side with the service role key, which bypasses
-- RLS. RLS is enabled with no policies on purpose: nothing holding the
-- anon key can read a lead or a page view.
--
-- Idempotent; safe to re-run.

create table if not exists public.leads (
  id         uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source     text not null,
  name       text,
  email      text,
  phone      text,
  website    text,
  budget     text,
  message    text,
  category   text,
  detail     text,
  timing     text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_source_idx     on public.leads (source);

create table if not exists public.page_views (
  id         uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  session_id text not null,
  page_url   text not null,
  referrer   text,
  user_agent text,
  ip_country text
);

create index if not exists page_views_created_at_idx on public.page_views (created_at desc);
create index if not exists page_views_session_idx    on public.page_views (session_id);

alter table public.leads      enable row level security;
alter table public.page_views enable row level security;
