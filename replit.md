# Heal & Cure Health Clinic

A premium, production-ready multi-page React website for Heal & Cure Health Clinic — a boutique homoeopathy + nutrition clinic in Kolkata.

## Run & Operate

- `pnpm --filter @workspace/heal-and-cure run dev` — run the frontend (port assigned via PORT env)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- No backend required — fully static site

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React + Vite (react-vite artifact)
- Tailwind CSS v4, Framer Motion
- wouter for routing
- Lucide React + react-icons for icons
- Google Fonts: Cormorant Garamond (headings) + DM Sans (body)
- Calendly popup embed (widget.js in index.html)

## Where things live

- `artifacts/heal-and-cure/` — main website artifact
- `artifacts/heal-and-cure/src/pages/` — Home, About, Services, HealthTips, BookAppointment, Contact
- `artifacts/heal-and-cure/src/components/` — Navbar, Footer, FloatingWhatsApp
- `artifacts/heal-and-cure/src/index.css` — CSS variables (green/teal/gold palette), Google Fonts
- `attached_assets/` — logo + doctor photos (accessed via @assets alias)

## Architecture decisions

- Static-only: no backend, no database, no API — pure frontend React site
- Presentation-first build: design subagent owned full frontend
- @assets Vite alias points to attached_assets/ — import doctor photos and logo directly
- Calendly URLs are placeholder strings (SOUVIK_CALENDLY_URL / PAMPITA_CALENDLY_URL) — client fills in
- wouter base uses import.meta.env.BASE_URL for proxy-compatible routing

## Product

6-page premium clinic website: Home (13 sections), About, Services, Health Tips, Book Appointment, Contact. Features include animated hero, trust bar with counters, govt credibility banner, doctor profiles with real photos, services grid, 8-testimonial carousel, health tips blog preview, dual booking cards with Calendly, floating WhatsApp button, Google Maps embed in footer.

## User preferences

- Calendly URLs to be filled in later (SOUVIK_CALENDLY_URL, PAMPITA_CALENDLY_URL)
- No doctor placeholder photos — real images provided in attached_assets/
- Premium agency-quality design — Cormorant Garamond serif + DM Sans body
- Fully responsive at 390px (iPhone 14)

## Gotchas

- Google Fonts @import must be the very FIRST line in index.css (before @import "tailwindcss")
- Logo has a dark/transparent background — works on dark green surfaces (navbar, footer)
- Calendly scripts loaded async in index.html head — use window.Calendly?.initPopupWidget()
- Doctor images imported with @assets alias, not from public/

## Pointers

- See the `react-vite` skill for React + Vite conventions
- See the `pnpm-workspace` skill for workspace structure
