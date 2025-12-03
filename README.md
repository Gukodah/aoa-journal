# Nevermine Journal (App Router)

Nevermine Journal is a companion wiki/diary for Advent of Ascension (Nevermine 2), running on Next.js App Router with a cinematic dark UI tuned for desktop and mobile.

## What you get
- Guided auth: Clerk social sign-in (Google, Apple, Twitch) with redirect to the in-app dashboard and synced progress.
- Rich compendium: dimensions, bosses, mobs, NPCs, loot tables, ores/gems, and diary entries with cards, filters, and tabs.
- Progress tracking: mark encounters, favorites, and drops; data persists to Supabase and syncs per user.
- Responsive shell: sticky navbar, slide-in mobile sidenav, animated loading and navigation progress overlays.
- 3D/model support: `@react-three/fiber` + `@react-three/drei` viewers with graceful skeleton fallbacks.
- Fast lookup: search/filter UI, pagination, and compact tables for quick scanning.

## Tech stack
- Framework: Next.js 15 (App Router) + React 19, client and server components mixed as needed.
- Auth: Clerk (social OAuth, user menu, protected routes).
- Data: Supabase (user progress), JSON data sources under `src/data`.
- 3D: Three.js via `@react-three/fiber` and `@react-three/drei`.
- Styling: Global CSS (`src/app/globals.css`, `src/styles.css`, `src/styles/*.css`), custom gradients/shadows; no CSS modules.
- Tooling: TypeScript config in place (`allowJs: true`), `@/*` alias to `src/*`, ESLint via Next.js.

## Getting started
1) Node 18+ or 20+.  
2) Install deps: `npm install`.  
3) Run dev server: `npm run dev` and open the printed URL.

## Scripts
- `npm run dev` — start Next.js in dev mode.
- `npm run build` — production build.
- `npm run start` — serve the production build.
- `npm run lint` — run ESLint (Next.js + React hooks rules).

## Project layout
- `src/app` — App Router routes (`page.jsx`, feature routes for dimensions, bosses, mobs, ores, diary, account).
- `src/components` — shared UI (navbar, mobile sidenav, tabs, cards, model viewer, dialogs, progress overlays).
- `src/data` — static JSON sources for entities.
- `src/styles` + `src/app/globals.css` — global styling.
- `public` — static assets (logos, textures, HDRs, models).

## Notes
- Build artifacts (`.next`, `out`, `.turbo`) are ignored via `.gitignore`.
- TypeScript is enabled; you can add `.ts/.tsx` gradually alongside existing JS.
- Vite scaffolding was removed; use the Next.js scripts above.

## Deploy on Vercel
1) Create a Vercel project and link this repo. Framework: Next.js. Runtime: Node 20.
2) Configure environment variables:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `SUPABASE_USERS_TABLE` (optional, default `users`)
   - `SUPABASE_PROGRESS_COLUMN` (optional, default `pogress_data`)
3) Build settings (defaults work):
   - Install: `npm install`
   - Build: `npm run build`
   - Output: `.next`
4) Set `NODE_ENV=production` (default on Vercel) and deploy. Clerk/Supabase calls run in serverless functions; keep the Supabase service role key private.
