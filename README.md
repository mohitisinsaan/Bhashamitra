
# Bhashamitra — Prototype (Vercel-ready)

Minimal Next.js prototype for a gamified learning app focused on local Indian languages.
Drop this repo into Vercel (or run locally with `npm install` + `npm run dev`).

Features (prototype):
- Homepage, language selection, lesson interface
- Local account (localStorage) — no online auth
- Gamified: XP, streak, badges (localStorage)
- Offline-friendly structure, minimal external deps

Deploy notes:
- This is a basic Next.js (pages/) app. Vercel auto-detects Next.js projects.
- To test locally:
  - `npm install`
  - `npm run dev` and open http://localhost:3000
