# Patient eXperience Consulting (PXC) — Website Rebuild PRD

## Original Problem Statement
Build a visually striking, conversion-focused, AEO/SEO/GEO-optimized website for Patient eXperience Consulting (PXC) that combines the foundation of the user's existing GitHub repo with structural inspiration from referenced sites. The site must look like a $75K build — bold, modern, motion-rich, dark-only, healthcare-credible — and serve as paste-ready HTML/CSS for Go High Level deployment. Forms = labeled placecards (no submit logic) since the user wires them to GHL workflows.

## Architecture
- **Frontend**: Vite + React 18 + TypeScript + TailwindCSS + Wouter (routing) + Framer Motion + shadcn/ui — served on port 3000 via supervisor `yarn start`.
- **Backend**: FastAPI on port 8001 (default `/api/` health endpoint only — forms route to GHL).
- **Assets**: Brand logo, favicon, AI-medical background, heartbeat video/gif, stethoscope gif, founder photos in `/public/assets/` and `/attached_assets/`.

## Brand System (per user's guidelines doc)
- Color palette: Black `#000000` (dominant), Neon Red `#FB0000` (CTAs), Neon Baby Blue `#47D8FF` (clarity/links), Neon Lilac `#AEA1EA` (innovation), White `#FFFFFF`, grey accents.
- Fonts: Nunito (heading 800/700), Comfortaa (body 400), La Belle Aurore (signature quotes).
- Dark-only system, 70/15/8/5/2 ratio, motion-rich (auroras, beam cards, marquee, EKG line draws, rotating rings).

## Phase 1 — Delivered (Iteration 1)
### Foundation
- Ported user's existing GitHub repo into `/app/frontend` as Vite + React + TypeScript stack.
- Added Vite alias system: `@/` (src), `@assets/` (attached_assets), `@public/` (public/assets), `@shared/` (shared types).
- Migrated all existing pages (Home, About, Services, Contact, Blog, CountyPage, NotFound) without breaking them.
- Tailwind content paths fixed; PXC global CSS / motion layer fully active.

### New Header & Footer
- New PXC logo wired into header (auto-shrinks on scroll).
- Nav expanded to: Home · About · Services (with state + 16 county dropdown) · Results · Events · MED-AI Studio · Contact + red CTA.
- Footer adds Results / Events & Speaking / MED-AI Studio links.
- New favicon (user's puzzle-piece favicon) wired in `index.html`.

### Home Hero — fully rebuilt to spec
- LEFT (3-second SEO/AEO/GEO clarity): three-color H1 "Stop the Burnout. / Save Your Practice. / Scale With AI." + Unified PXC System™ subhead + animated EKG stat card (326+/38%/41%) + dual CTAs + 4.9★ trust line.
- RIGHT: Video placecard (heartbeat.mp4) inside three concentric rotating glowing rings (cyan-large, violet, cyan-medium) + red oscillating frame + LIVE pulse badge + 3 floating stat cards.
- Floating beating stethoscope (~180px) animated in left side of hero.
- AI-medical background image with semi-transparent overlay.
- Pulsating gradient heartbeat divider at bottom of hero (visible without scroll).
- Below-the-fold AEO Answer Capsule preserved.

### New Pages (4)
- **`/results`** — case-studies grid with 6 anonymized practice transformations, headline KPI counters, Self-Funding Guarantee block, CTA.
- **`/events`** — speaking page with hero (rotating-ring speaker card), 4 signature talks, marquee of past venues, 4 engagement formats, "three perspectives" credibility, testimonial quote, CTA.
- **`/med-ai-studio`** — PXC media-arm hub with hero, 4 content pillars, 4 featured episodes, editorial promise, GHL-bound subscribe placecard.
- **`/services/florida` · `/north-carolina` · `/georgia` · `/nationwide`** — single `StatePage.tsx` driven by route slug (geo metadata, metro list, why-this-state copy, CTA pair).

### Existing Florida county pages (16)
Preserved from foundation: Orange, Seminole, Lake, Polk, Volusia, Osceola, Miami-Dade, Broward, Palm Beach, Lee, Collier, Hillsborough, Pinellas, Sarasota, Manatee, Charlotte.

### Forms
All forms are labeled placecards (no submit handlers) — ready for GHL paste/wire.

## What's Working (Verified)
- All 9 routes return HTTP 200 (Home / About / Services / Results / Events / MED-AI Studio / Contact / state pages / county pages).
- Hero renders with stethoscope, EKG card, video placecard, rotating rings, heartbeat divider, all stats animated.
- Vite HMR running cleanly; no missing imports; no console-blocking errors.

## P1 Backlog (Next Iteration)
- Per-service detail pages (Puzzle Pyramid Strategy Session, PX Fast Pass, PX Treatment Plan, MasterCourse, P3, Puzzle Shop, AI Readiness Assessment, Leadership Development) — currently single Services hub.
- Contact page deeper merge with HyperAgent-inspired multi-channel cards + interactive FAQ (current Contact is the existing repo version).
- About page expansion with founder timeline + values grid + triple-perspective deep-dive.
- 3D rotatable/zoomable Three.js model on Home (Three.js + react-three-fiber installed; component not yet built).
- Animated data-viz dashboard section (recharts is installed).
- Mobile fine-tuning for the new hero (rings on small screens).

## P2 Backlog
- Generate dedicated NC + GA county pages once user confirms metro list.
- Run testing-agent on full visual + nav regression after Contact/About merges.
- Replace placeholder case-study quotes with real client quotes once user provides them.
- Heartbeat-video poster frame + WebM fallback for iOS Safari autoplay reliability.

## Test Credentials
None — site is fully public, no auth.

---

_Last updated: Iteration 1 completion._
