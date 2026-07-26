# SmileCare Dental Clinic

Production-ready Next.js 15 App Router website for SmileCare Dental Clinic.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Supabase-ready appointment submissions through a Server Action

## Local Development

```bash
npm install
npm run dev
```

The app runs on `http://localhost:3000` unless that port is already in use.

## Environment Variables

Copy `.env.example` to `.env.local` and add real values:

```env
NEXT_PUBLIC_SITE_URL=https://smiledentalcare-zeta.vercel.app
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` in client-side code.

## Supabase

Run the SQL in `database/appointments.sql` in your Supabase SQL editor to create the appointment table.

## Validation

```bash
npm run type-check
npm run lint
npm run build
```

## Deployment

Deploy on Vercel and configure the same environment variables in Project Settings. The app includes `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, Metadata API configuration, and JSON-LD schema.
