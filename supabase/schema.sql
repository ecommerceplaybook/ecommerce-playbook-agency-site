create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  seo_title text,
  seo_description text,
  hero_heading text,
  hero_subheading text,
  body text,
  created_at timestamptz default timezone('utc', now()),
  updated_at timestamptz default timezone('utc', now())
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  body text not null,
  tags text[] default array[]::text[],
  featured boolean default false,
  published_at timestamptz default timezone('utc', now()),
  reading_time_minutes int,
  created_at timestamptz default timezone('utc', now()),
  updated_at timestamptz default timezone('utc', now())
);

create table if not exists public.case_studies (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  client_name text not null,
  summary text not null,
  industry text not null,
  before_metric_label text,
  before_metric_value text,
  after_metric_label text,
  after_metric_value text,
  body text not null,
  featured boolean default false,
  created_at timestamptz default timezone('utc', now()),
  updated_at timestamptz default timezone('utc', now())
);

create table if not exists public.faq_items (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  category text,
  sort_order int default 0,
  created_at timestamptz default timezone('utc', now()),
  updated_at timestamptz default timezone('utc', now())
);

create table if not exists public.tools (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  short_description text not null,
  long_description text not null,
  category text,
  link_url text,
  is_external boolean default true,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default timezone('utc', now()),
  updated_at timestamptz default timezone('utc', now())
);

-- CRO Checker tables
create table if not exists public.scans (
  id uuid primary key default gen_random_uuid(),
  url text not null,
  status text not null default 'queued' check (status in ('queued', 'processing', 'completed', 'failed')),
  current_step text,
  scores jsonb default '{}'::jsonb,
  error_message text,
  created_at timestamptz default timezone('utc', now()),
  completed_at timestamptz
);

create table if not exists public.scan_results (
  id uuid primary key default gen_random_uuid(),
  scan_id uuid not null references public.scans(id) on delete cascade,
  rule_id text not null,
  category text not null,
  passed boolean not null,
  impact text not null check (impact in ('low', 'medium', 'high')),
  effort text not null check (effort in ('quick', 'moderate', 'extensive')),
  evidence jsonb default '{}'::jsonb,
  recommendation text,
  created_at timestamptz default timezone('utc', now())
);

create table if not exists public.scan_artifacts (
  id uuid primary key default gen_random_uuid(),
  scan_id uuid not null references public.scans(id) on delete cascade,
  type text not null check (type in ('screenshot', 'metrics')),
  url text not null,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default timezone('utc', now())
);

-- Indexes for performance
create index if not exists idx_scan_results_scan_id on public.scan_results(scan_id);
create index if not exists idx_scan_artifacts_scan_id on public.scan_artifacts(scan_id);
create index if not exists idx_scans_status on public.scans(status);
create index if not exists idx_scans_created_at on public.scans(created_at desc);

-- RLS policies (public read for completed scans)
alter table public.scans enable row level security;
alter table public.scan_results enable row level security;
alter table public.scan_artifacts enable row level security;

-- Allow public read access to completed scans
create policy "Public can read completed scans" on public.scans
  for select using (status = 'completed');

create policy "Public can read scan results for completed scans" on public.scan_results
  for select using (
    exists (
      select 1 from public.scans
      where scans.id = scan_results.scan_id
      and scans.status = 'completed'
    )
  );

create policy "Public can read artifacts for completed scans" on public.scan_artifacts
  for select using (
    exists (
      select 1 from public.scans
      where scans.id = scan_artifacts.scan_id
      and scans.status = 'completed'
    )
  );
