
# Bhashamitra — Prototype (Vercel-ready) — Fixed build-safe version

This version fixes server-side rendering issues by avoiding direct `localStorage` access during build/SSR.
Everything that touches browser-only APIs runs inside `useEffect` or guarded checks.

To run locally:
- `npm install`
- `npm run dev`
- Open http://localhost:3000
