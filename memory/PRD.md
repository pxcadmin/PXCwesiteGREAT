# Patient eXperience Consulting (PXC) — Website Rebuild PRD

## Architecture
- **Frontend**: Vite + React 18 + TypeScript + TailwindCSS + Wouter routing + Framer Motion + shadcn/ui — served on port 3000 via supervisor `yarn start`.
- **Backend**: FastAPI on port 8001 (`/api/` health endpoint only — all forms are placecards bound to Go High Level workflows; no submission logic).
- **Assets**: Brand logos (PXC + AI Blueprint Day), favicon, AI-medical imagery, heartbeat video/gif, stethoscope gif, founder + presenting photos, MED-AI Studio banner + thumbnails — all in `/public/assets/`.

## Brand System
- **PXC palette (global)**: Black `#000000`, Red `#FB0000`, Cyan `#47D8FF`, Lilac `#AEA1EA`, White.
- **AI Blueprint Day palette (Events page only)**: Gold `#FCA746`, Charcoal `#1A1A1A`, Grey `#4A4A4A`, Silver `#C0C0C0`, White — NO red/cyan/lilac.
- **Fonts**: Nunito (heading 800/700), Comfortaa (body 400), La Belle Aurore (signature quotes), JetBrains Mono (Events labels/data).

## Sitemap
- `/` Home
- `/about` About
- `/services` Services hub
- `/services/{puzzle-pyramid-strategy-session | px-fast-pass | px-treatment-plan | mastercourse | practice-professionals-playground | puzzle-shop | leadership-development}` — 7 per-service detail pages
- `/services/{florida | north-carolina | georgia | nationwide}` — 4 state pages
- `/services/{16 county slugs}` — Florida county pages (Sarasota, Manatee, Orange, Seminole, Lake, Polk, Volusia, Osceola, Miami-Dade, Broward, Palm Beach, Lee, Collier, Hillsborough, Pinellas, Charlotte)
- `/results` Real practice transformation outcomes
- `/events` AI Blueprint Day™ speaking & live events
- `/med-ai-studio` Florida's healthcare AI channel
- `/ai-readiness-score` Interactive 8-question AI assessment
- `/practice-stability-scorecard` Interactive 10-question stability diagnostic
- `/discovery-questionnaire` 4-section multi-step intake form
- `/blog` Blog (placeholder route — linked to GHL externally per user)
- `/contact` Contact / book session

## Iteration Log

### Iteration 1
- Ported user's GitHub foundation into Vite + React + TS stack on port 3000.
- Built new Header with PXC logo, 7-item nav + state/county dropdown, new favicon.
- Rebuilt Home hero with video-right + glowing rings, EKG card, beating stethoscope, pulsating heartbeat divider.
- Created new pages: Results, Events (v1), MED-AI Studio (v1), state pages.

### Iteration 2
- Fixed Events page runtime crash (MarqueeStrip prop API).
- Moved stethoscope off the H1 copy to bottom-left of hero.
- Compacted Direct Answer box; enlarged heartbeat-EKG divider.
- Added AI Blueprint Day branding (v1) to Events.

### Iteration 3 (current)
- **Navigation**: Added Blog between MED-AI Studio and Contact (no external link wiring — per user, will link inside GHL).
- **Home**: Removed medical-bg image from hero — pure shiny-black with radial highlights only.
- **About**: Moved 2nd Direct Answer (AnswerCapsule) from hero down to AFTER the "Ready to Go From Burnout to Breakthrough" CTA section.
- **CountyPage**: Moved 2nd Direct Answer from hero to AFTER "Ready to Transform Your [County] Practice?" CTA section (applies to all 16 Florida county pages).
- **Contact**: Moved 2nd Direct Answer from hero to AFTER FAQ section.
- **Events**: Complete rebrand — pure AI Blueprint Day palette (gold/charcoal/grey/silver/white, ZERO red/cyan/lilac). Jennifer-presenting image as hero background with yellow-gold semi-transparent overlay. AI Blueprint Day logo prominently centered (single instance). Tiny corner logo removed. **Header swaps to gold palette automatically on `/events` route** so the entire Events experience has zero red/cyan/lilac.
- **MED-AI Studio**: Complete rewrite. Florida's healthcare AI channel branding, "Powered by AI. Driven by People. Designed for Impact." signature line, MED-AI Studio banner image full-bleed, 4 content pillars (Long-Form, Studio Cuts, Audio Podcast, Field Notes), 4 featured episodes with first episode using user's medai-thumb-1 image, "Why Tune In" reasons grid, platforms strip (YouTube/Spotify/Apple/Amazon/Overcast/RSS), GHL-bound subscribe placecard.
- **AI Readiness Score™** (NEW): Interactive 8-question assessment across AI Awareness / Workflow Docs / Data Hygiene / Staff Buy-In / Top Pain / Tech Stack / Leadership Time / Budget. Animated radial gauge result, 3 tier recommendations (AI Curious / AI Ready / AI Accelerator), GHL email-capture placecard, retake button.
- **Practice Stability Scorecard™** (NEW): Interactive 10-question diagnostic across 10 operational domains (Staff Retention, Patient Retention, Front Desk Load, Leadership Alignment, Reviews, Operational Clarity, Financial Visibility, Burnout, Patient Experience, Owner Time). Animated radial gauge, 3 tier results (Crisis / Strain / Solid Ground).
- **Discovery Questionnaire** (NEW): 4-section multi-step form (About Practice / Friction Points / 12-Month Goals / Contact Info) with progress bar, success page.
- **7 Per-Service Detail Pages** (NEW): Single dynamic `ServiceDetail.tsx` template renders all 7 services from a config record — Puzzle Pyramid Strategy Session, PX Fast Pass, PX Treatment Plan, From Patients to Profits MasterCourse, Practice Professionals Playground (P3), Puzzle Shop, Leadership Development. Each renders: hero with eyebrow badge + Best Fit card + Guarantee, outcomes grid, framework section, modules timeline (phases), FAQ, bottom CTA.
- **Image optimization**: Added `<link rel="preload">` for critical above-the-fold assets (logo, favicon, heartbeat video) and `<link rel="preconnect">` for Google Fonts. All below-the-fold images use `loading="lazy"`.
- **Testing-agent regression**: 100% routes load, all 20 verified routes render content + header + footer correctly. Services dropdown verified with all 30+ items. AI Readiness 8-question flow tested end-to-end (intro → 8 questions → tier result with radial gauge → email capture → CTA + retake). Mobile hamburger (375px) shows all 8 nav links + book CTA. Tablet (768px) verified no horizontal scroll. Events page body palette confirmed gold/black/grey/white only.

## What's Working (Verified)
- All 20+ routes return HTTP 200 with rendered content.
- Header swaps to gold theme on `/events`; PXC theme on every other page.
- All interactive flows work: AI Readiness scoring → tier → gauge → CTA; Practice Stability scoring → tier → gauge → CTA; Discovery 4-section → success page.
- All 7 per-service detail pages render with unique config (icons, colors, modules, FAQs).
- All 16 Florida county pages render with 2nd Direct Answer moved below the Ready-to-Transform CTA.
- About/Contact 2nd Direct Answers correctly moved below their target sections.
- Mobile + tablet responsive verified by testing agent.

## P1 Backlog (Future)
- 3D Three.js rotatable model on Home (libs installed).
- Production WebP conversion of large hero PNGs (Lighthouse 95+).
- About page deeper merge with founder timeline + values grid expansion.
- Dedicated NC + GA county pages once user confirms metro lists.
- Real client testimonial swap-ins on Results page.

## Test Credentials
None — site is fully public, no auth.

---
_Last updated: Iteration 3 — all user-requested tasks complete._
