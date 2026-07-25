create extension if not exists pgcrypto;

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text not null,
  service text not null,
  appointment_date date not null,
  appointment_time time not null,
  message text
);

alter table public.appointments enable row level security;

create index if not exists appointments_created_at_idx
  on public.appointments (created_at desc);

create index if not exists appointments_appointment_date_idx
  on public.appointments (appointment_date);

comment on table public.appointments is
  'Appointment requests submitted from the SmileCare Dental Clinic website.';
