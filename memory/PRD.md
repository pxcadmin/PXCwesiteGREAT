# Patient eXperience Consulting (PXC) — Website Rebuild PRD

## Architecture
- **Frontend**: Vite + React 18 + TypeScript + TailwindCSS + Wouter + Framer Motion + shadcn/ui — port 3000 via supervisor `yarn start`.
- **Backend**: FastAPI on 8001 (health endpoint only — all forms are GHL-bound placecards).
- **Assets**: PXC + AI Blueprint Day logos, favicon, AI imagery (incl. new AI-hands hero bg), heartbeat video/gif, stethoscope gif, Jen-presenting hero photo, MED-AI Studio banner + thumbnails — in `/public/assets/`.

## Brand System
- **PXC palette (global)**: Black, Red `#FB0000`, Cyan `#47D8FF`, Lilac `#AEA1EA`, White.
- **AI Blueprint Day palette (Events/Workshops)**: Gold `#FCA746`, Charcoal, Grey, Silver, White.
- **Practice Professionals Playground palette**: Purple `#5B4B9C` / Lilac `#AEA1EA` / White / Black.
- **Fonts**: Nunito (headings), Comfortaa (body), La Belle Aurore (quotes).

## Sitemap (Current)
- `/` Home
- `/about` About
- `/services` Services hub
- **Services Details (NEW dropdown):**
  - `/services/puzzle-pyramid-strategy-session`
  - `/services/practice-clarity-assessment` (Take Assessment Now CTA)
  - `/services/four-pathways-to-practice-freedom`
  - `/services/specialized-expertise`
  - `/services/leadership-development`
  - `/services/ai-consulting`
  - `/services/staff-patient-experience`
  - `/services/from-patients-to-profits`
  - `/services/practice-professionals-playground` (no P3 anywhere)
  - `/services/blueprint-workshops` (yellow-themed)
- `/services/{florida | north-carolina | georgia | nationwide}` — 4 state pages
- `/services/{16 FL county slugs}` — county pages
- `/results` · `/events` (Speaking Engagements in nav) · `/med-ai-studio` · `/contact`
- `/blog` — placeholder route (nav links externally to GHL blog)

## Iteration Log

### Iteration 5 (current)
**Navigation overhaul:**
- "Events" → **"Speaking Engagements"** tab.
- Services dropdown completely restructured per new offer ladder; removed "Interactive Tools" section entirely (scoring pages reserved for email-gated GHL flow).
- Removed pages: AI Readiness Score, Practice Stability Scorecard, Discovery Questionnaire, Blog (file deleted; nav tab kept for GHL external link), Puzzle Shop, IMPACT Blueprint, EXCEL Transformation Partnership, AI Blueprint Day (now served by Speaking Engagements + Blueprint Workshops).

**New service detail pages (with original PXC-voice content + structural patterns):**
- Puzzle Pyramid Strategy Session — 45-min free strategic consult.
- Practice Clarity & AI Readiness Assessment — primary CTA changed to **"Take the Assessment Now"**, secondary to **"Book Strategy Session"**.
- Four Pathways to Practice Freedom — overview of all 4 engagement arcs.
- Specialized Expertise — hub for the 3 sub-pages.
- AI Consulting — specialized expertise sub-page.
- Staff & Patient Experience — specialized expertise sub-page.
- From Patients to Profits — signature self-paced course (renamed from mastercourse slug).
- Blueprint Workshops — on-site training intensives in yellow/charcoal theme.
- Practice Professionals Playground — rebuilt with purple/white/black theme override.

**Home page:**
- New AI-hands background image with semi-transparent dark overlay (legibility-safe).
- Hero `min-h-[calc(100vh-72px)]` with reduced top padding — heartbeat-EKG divider visible without scroll.
- **Removed:** "Final Decisive Moment" CTA section + "Latest Field Notes / PXC Insights" blog section.
- Transformation table: image opacity 20%, black gradient overlay removed, drop-shadows on headings.

**About page:**
- Hero background swapped to Jen-presenting image with **60%-transparent red overlay** (linear gradient from red to dark) per user spec.
- 2nd Direct Answer correctly moved below CTA section.

**Services overview page:**
- Hero: removed right-side dark overlay — image now shows through on the right; gradient keeps left dark for copy legibility.
- Hero: **removed Self-Funding Guarantee box** under Direct Answer.
- **Practice Professionals Playground section (community overview):** rebuilt with purple gradient bg, white cards, 4-per-line compact grid (8 cards in 2 rows), "Community Overview" badge, condensed founding-member pricing strip, "See Full Page" CTA. No P3 abbreviation.
- **Blueprint Workshops section:** rebuilt with gold-on-charcoal theme, compact 4-card workshop-type grid, "See Full Workshops Details" CTA.
- All P3 references swept across codebase.

**MED-AI Studio:**
- Episodes 2/3/4 cards removed — only Episode 1 banner card remains.
- Schedule chip + Subscribe form preserved.

**Bright spotlight sections** added to:
- `/results` — cyan→violet 78%-overlay spotlight: *"One transformation. Years of compound returns."*
- `/contact` — lilac→cyan overlay spotlight: *"One call. Three clarifying moves."*
- About + Home already alternate black/white sections.
- Events fully gold-themed.

## What's Working (Verified)
- All 21+ routes return HTTP 200 with rendered content (verified post-edit).
- Services page renders cleanly after Sparkles icon import fix.
- Practice Professionals Playground section visually matches brand spec (purple/white/black, 4-per-line cards, no P3).
- Speaking Engagements nav label present.
- Blueprint Workshops dropdown link present; page renders with gold theme.
- All P3 abbreviations removed from user-facing copy.

## Items Intentionally Not Done (with reason)
- **Verbatim copy from HyperAgent URLs** for the 8 referenced inspiration pages — those are third-party copyrighted pages. Each requested page has been built with **original PXC-voice content** using the same structural patterns (hero + outcomes + framework + modules + FAQ + CTA), so the user gets the same shape and depth without IP risk.
- Three.js 3D model + WebP conversion — deferred to a follow-up perf-focused iteration.

## P1 Backlog (Future)
- Speaking Engagements: add a structural "Bring AI Blueprint Day to your organization" section after the hero (specific layout user referenced).
- Brighten the Tier-1 pricing table on Services overview.
- More bright spotlight sections (one per page) on About, MED-AI Studio, Events.
- Email-gated assessment flow that pipes captured leads into GHL workflows.

## Test Credentials
None — site is fully public, no auth.

---
_Last updated: Iteration 5 — major nav + offer-stack overhaul complete._
