# Patient eXperience Consulting (PXC) — Website Rebuild PRD

## Architecture
- **Frontend**: Vite + React 18 + TypeScript + TailwindCSS + Wouter + Framer Motion + shadcn/ui — port 3000 via supervisor `yarn start`.
- **Backend**: FastAPI on 8001 (health endpoint only — all forms are GHL-bound placecards).
- **Assets**: Brand logos, favicon, AI imagery (incl. new AI-hands hero bg), heartbeat video/gif, stethoscope gif, founder + presenting photos, MED-AI Studio banner + thumbnails — all in `/public/assets/`.

## Brand System
- **PXC palette (global)**: Black `#000000`, Red `#FB0000`, Cyan `#47D8FF`, Lilac `#AEA1EA`, White.
- **AI Blueprint Day palette (Events only)**: Gold `#FCA746` / Charcoal / Grey / Silver / White — NO red/cyan/lilac.
- **Fonts**: Nunito (headings), Comfortaa (body), La Belle Aurore (quotes), JetBrains Mono (Events labels).

## Sitemap (Final)
- `/` Home
- `/about` About
- `/services` Services hub
- `/services/practice-clarity-assessment` · Tier 1 (Free)
- `/services/pxc-impact-blueprint` · Tier 2 (90-Day)
- `/services/excel-transformation-partnership` · Tier 3 (12-Month, Self-Funding Guarantee)
- `/services/mastercourse` · From Patients to Profits™ MasterCourse
- `/services/practice-professionals-playground` · P3 Membership
- `/services/puzzle-shop` · Digital products
- `/services/leadership-development` · Sub-offering
- `/services/{florida | north-carolina | georgia | nationwide}` · State pages
- `/services/{16 FL county slugs}` · Florida county pages
- `/results` · Outcomes + case studies
- `/events` · AI Blueprint Day™ speaking & live events
- `/med-ai-studio` · Florida's healthcare AI channel
- `/ai-readiness-score` · Interactive 8-question scoring
- `/practice-stability-scorecard` · Interactive 10-question diagnostic
- `/discovery-questionnaire` · 4-section intake form
- `/blog` · Placeholder (linked externally in GHL)
- `/contact` · Contact / book session

## Iteration Log

### Iterations 1–3 (prior)
- Vite foundation + new header, footer, favicon, logo.
- Hero rebuild with video + rotating rings + EKG divider + stethoscope.
- New Results, Events, MED-AI Studio, state pages.
- Direct Answer 2nd-instance moves on About/Contact/County.
- Events full AI Blueprint Day rebrand + header palette swap.
- MED-AI Studio with banner + thumbnails.
- 3 interactive scoring pages + 7 per-service detail pages.
- Image preload + lazy-load + preconnect optimization.
- Testing-agent regression: 100% routes pass.

### Iteration 4 (current)
- **Home hero**: New AI-hands background (semi-transparent 35% + dark overlay for legibility). Hero height reduced to `calc(100vh-72px)` and top padding tightened to `pt-3/pt-4` — copy now sits closer to nav, EKG heartbeat divider clearly visible at bottom of hero **without scrolling**.
- **Transformation table**: Image opacity raised to 0.20, black gradient overlay removed — image shows through naturally. Headings + section title got drop-shadow for legibility against the brighter background.
- **Bright sections added** (1 per page where previously all-black):
  - `/results` — cyan-violet overlay spotlight after case-studies grid ("One transformation. Years of compound returns.")
  - `/contact` — lilac-cyan overlay spotlight after the moved Direct Answer ("One call. Three clarifying moves.")
  - About / Home already had alternating white sections.
- **Offer stack realigned to current business model**:
  - "Puzzle Pyramid Strategy Session" → **Practice Clarity & AI Readiness Assessment™** (Tier 1, free)
  - "PX Fast Pass" → **PXC IMPACT Blueprint™** (Tier 2, 90-day)
  - "PX Treatment Plan" → **EXCEL Transformation Partnership™** (Tier 3, 12-month fractional fCAIOX, Self-Funding Guarantee — Contractual)
  - URL slugs updated: `/services/practice-clarity-assessment`, `/services/pxc-impact-blueprint`, `/services/excel-transformation-partnership`
  - Header dropdown + App.tsx route allow-list updated to match
  - **From Patients to Profits™ MasterCourse** enhanced with 60+ template promise, AI prompt library callout, ROI tracker, P3 graduation path, monthly office hours, team licenses
  - **Practice Professionals Playground™ (P3)** expanded to twice-monthly + bi-weekly Field Notes + always-on community + quarterly 1:1

## What's Working (Verified)
- All 20+ routes return HTTP 200 with rendered content.
- Hero EKG divider clearly visible without scrolling at 1440×900.
- AI-hands background semi-transparent — copy is fully legible.
- Transformation-table section is brighter (image shows through 20%) with no black overlay.
- Bright spotlight sections render with cyan/lilac overlay + readable black-on-color copy.
- Header swaps to gold theme on `/events`; PXC theme everywhere else.
- All 7 per-service pages render with new naming + new slugs.
- All interactive scoring flows still functional after rename.

## P1 Backlog (Future)
- AI Blueprint Day™ dedicated `/services/ai-blueprint-day` detail page (currently served via `/events`).
- Per-service deliverables galleries (when user supplies asset thumbnails for each offer).
- 3D Three.js rotatable healthcare model on Home (libs installed).
- WebP conversion of large hero PNGs for Lighthouse 95+.
- Real testimonial swap-ins on Results once user supplies them.

## Test Credentials
None — site is fully public, no auth.

---
_Last updated: Iteration 4 — hero brightness + offer-stack realignment complete._
