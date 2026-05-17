import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Users, Trophy, Brain, GraduationCap, Layers, Zap, Map, Stethoscope, HeartHandshake, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { BeamCard } from "@/components/effects/BeamCard";
import { useSEO } from "@/lib/useSEO";

interface ServiceConfig {
  slug: string;
  name: string;
  eyebrow: string;
  Icon: any;
  primaryColor: string;
  oneLiner: string;
  forWho: string;
  duration: string;
  format: string;
  outcomes: string[];
  framework: { title: string; items: string[] };
  modules: { n: string; title: string; desc: string }[];
  guarantee: string;
  faq: { q: string; a: string }[];
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  themeOverride?: { bgClass: string; accent: string };
}

const SERVICES: Record<string, ServiceConfig> = {
  "puzzle-pyramid-strategy-session": {
    slug: "puzzle-pyramid-strategy-session",
    name: "Puzzle Pyramid Strategy Session",
    eyebrow: "Free 45-Minute Strategic Consult",
    Icon: Layers,
    primaryColor: "#47d8ff",
    oneLiner: "Forty-five free minutes with Jennifer Radu, fCAIOX — the most strategic conversation about your practice you'll have this year.",
    forWho: "Independent practice owners, physician-leaders, and operations directors ready to identify exactly where their practice is leaking time, staff, patients, or profit — and the precise next move to plug each leak.",
    duration: "45 minutes",
    format: "Virtual (Zoom) · calendar held the moment you submit",
    outcomes: [
      "Your top 3 highest-leverage transformation moves — mapped live",
      "Clear yes/no on whether PXC is the right fit for your stage",
      "Honest tier recommendation across the PXC offer ladder",
      "Documented action plan you can run yourself — even if you never engage further",
    ],
    framework: {
      title: "Engage. Educate. Excel.",
      items: [
        "Engage — surface the people-side leverage points first",
        "Educate — surface the workflow + leadership gaps driving friction",
        "Excel — design the AI-supported next step that compounds practice-wide",
      ],
    },
    modules: [
      { n: "01", title: "Practice Snapshot", desc: "5-minute walkthrough of your current operational reality — no judgment, no canned questions, no fake assessment." },
      { n: "02", title: "Pain Triage", desc: "Jennifer identifies which painful symptom is actually the upstream cause — the one move that fixes three others." },
      { n: "03", title: "Three-Move Map", desc: "You leave with the three highest-leverage moves sequenced and ready to execute — even if we never speak again." },
    ],
    guarantee: "If the session doesn't deliver three concrete moves you can act on this week, the next session is free. Zero upsell pressure during or after.",
    faq: [
      { q: "Is this really free?", a: "Yes. 45 minutes, no credit card, no obligation. Jennifer believes in earning your trust before earning your business." },
      { q: "Will I be pitched at?", a: "No. Only if your needs match the PXC offer ladder will we tell you which tier fits — and exactly why." },
      { q: "Who is this NOT for?", a: "Practices looking for a generic consulting binder, or anyone wanting AI to replace clinical judgment. PXC is for practices ready to fix the inside so the outside becomes unforgettable." },
    ],
    primaryCtaLabel: "Book My Strategy Session",
    primaryCtaHref: "/contact#book-session",
    secondaryCtaLabel: "Take the AI Readiness Assessment",
    secondaryCtaHref: "/services/practice-clarity-assessment",
  },
  "practice-clarity-assessment": {
    slug: "practice-clarity-assessment",
    name: "Practice Clarity & AI Readiness Assessment",
    eyebrow: "Free Online Diagnostic",
    Icon: Brain,
    primaryColor: "#47d8ff",
    oneLiner: "A precision-engineered 10-minute online assessment that reveals exactly where your practice sits across the 10 operational + AI-readiness domains that quietly make or break independent medicine.",
    forWho: "Owners and operators who want truth-grade clarity before scheduling a single sales call — delivered as a personalized report, not a generic score.",
    duration: "~10 minutes to complete",
    format: "Online assessment · personalized report emailed within minutes",
    outcomes: [
      "Domain-by-domain visibility across 10 operational + AI readiness areas",
      "Personalized 'first move' recommendation tuned to your tier",
      "Custom benchmark vs. similar-stage independent practices",
      "Optional follow-up: book a Puzzle Pyramid Strategy Session to act on the report",
    ],
    framework: {
      title: "The 10 Domains the Assessment Measures",
      items: [
        "Leadership Alignment · Staff Stability · Operational Clarity",
        "Patient Retention · Front-Desk Load · Review Reputation",
        "Financial Visibility · Burnout Signal · AI Readiness · Owner Time",
      ],
    },
    modules: [
      { n: "01", title: "10-Minute Online Assessment", desc: "Answer in under 10 minutes — domain by domain, no jargon. Designed to feel honest, not performative." },
      { n: "02", title: "Instant Score + Tier Match", desc: "See your overall stability score, your AI readiness band, and which PXC offering matches your tier." },
      { n: "03", title: "Personalized Report Delivered", desc: "A custom report — not a template — sent to your inbox within minutes, including your highest-leverage first move." },
    ],
    guarantee: "Your data is yours. We never sell it. Unsubscribe in one click. The assessment + report are free — forever.",
    faq: [
      { q: "What happens after I take it?", a: "You'll receive your personalized report immediately and an invitation to book a free Puzzle Pyramid Strategy Session to act on it." },
      { q: "Is there a charge to receive the report?", a: "Zero. Free is free. The report is the value — the conversation that comes after is optional." },
      { q: "How is this different from a generic 'AI quiz'?", a: "It's built specifically for independent medical practices, scored by Jennifer Radu's frameworks, and benchmarked against 326+ provider engagements." },
    ],
    primaryCtaLabel: "Take the Assessment Now",
    primaryCtaHref: "/contact#take-assessment",
    secondaryCtaLabel: "Book Strategy Session",
    secondaryCtaHref: "/contact#book-session",
  },
  "four-pathways-to-practice-freedom": {
    slug: "four-pathways-to-practice-freedom",
    name: "Four Pathways to Practice Freedom",
    eyebrow: "Choose Your Transformation Arc",
    Icon: Map,
    primaryColor: "#AEA1EA",
    oneLiner: "Four distinct paths into the Unified PXC System™ — each tuned to a different starting point, urgency level, and budget. One of them is built for the exact season your practice is in right now.",
    forWho: "Independent practice owners ready to stop circling and pick the path. Whether you need a single intensive day, a quarter of architecture, a full-year fractional engagement, or a self-paced DIY route — there's a pathway for every season.",
    duration: "Varies by pathway — 1 day to 12 months",
    format: "Virtual + onsite hybrid · always Jennifer-led",
    outcomes: [
      "Crystal-clear picture of which pathway fits your stage, budget, and urgency",
      "Pathway-specific ROI projection based on similar engagements",
      "Direct booking into the pathway you choose — no extra sales call required",
      "Confidence that you're not over-buying or under-buying for where you actually are",
    ],
    framework: {
      title: "The Four Pathways",
      items: [
        "Pathway 1 — AI Blueprint Day · 1-day onsite intensive",
        "Pathway 2 — Strategic Quarter · 90-day architecture engagement",
        "Pathway 3 — Fractional fCAIOX · 12-month embedded partnership",
        "Pathway 4 — From Patients to Profits · self-paced course + community",
      ],
    },
    modules: [
      { n: "P1", title: "AI Blueprint Day", desc: "One day on-site (or virtual) where Jennifer architects a full AI + ops blueprint for your specific practice. Walk away with a fully costed roadmap." },
      { n: "P2", title: "Strategic Quarter (90 days)", desc: "Deeper than a day, lighter than a year. Two priority workflows piloted, full blueprint documented, leadership rhythm installed." },
      { n: "P3", title: "Fractional fCAIOX (12 months)", desc: "Jennifer embedded as your fractional Chief AI Experience Officer for a full year. Self-Funding Guarantee — Contractual." },
      { n: "P4", title: "From Patients to Profits™", desc: "The complete PXC System distilled into a self-paced course + community for owner-operators who'd rather deploy independently." },
    ],
    guarantee: "Every pathway carries a tier-specific guarantee. The Fractional fCAIOX path is backed by the Self-Funding Guarantee — Contractual.",
    faq: [
      { q: "How do I know which pathway is right?", a: "Take the free Practice Clarity & AI Readiness Assessment — it auto-recommends the pathway that fits your stage. Or book a free Strategy Session and Jennifer will map it live." },
      { q: "Can I move between pathways?", a: "Yes. Many clients start with an AI Blueprint Day, then graduate to the Strategic Quarter or Fractional fCAIOX. Every pathway is designed to flow into the next." },
    ],
  },
  "specialized-expertise": {
    slug: "specialized-expertise",
    name: "Specialized Expertise",
    eyebrow: "Three Domains. One Operator.",
    Icon: Sparkles,
    primaryColor: "#FB0000",
    oneLiner: "PXC's three core expertise domains — Leadership Development, AI Consulting, and Staff & Patient Experience — each built on Jennifer Radu's 21+ years of hands-on independent-practice operating experience.",
    forWho: "Practices that need world-class specialist depth in one of three domains — without the overhead of hiring three separate consultancies.",
    duration: "Varies by engagement type",
    format: "Standalone engagements OR bundled into broader pathways",
    outcomes: [
      "Specialist-grade execution across three of the most-mission-critical domains in independent practice",
      "One coherent operating system across leadership, AI, and patient experience — not three disconnected playbooks",
      "Bench depth without bench overhead — Jennifer leads every engagement personally",
      "Direct path into a multi-domain pathway when ready",
    ],
    framework: {
      title: "Three Domains, One Architect",
      items: [
        "Leadership Development — turn managers into operational executives",
        "AI Consulting — practical AI deployment that serves humans, not replaces them",
        "Staff & Patient Experience — fix the inside so the outside becomes unforgettable",
      ],
    },
    modules: [
      { n: "1", title: "Leadership Development", desc: "Cohort or 1:1 programs that turn practice managers into operational executives — without sending them off-site." },
      { n: "2", title: "AI Consulting", desc: "Hands-on AI architecture, prompt engineering, and workflow design — tuned for independent medical practices, never enterprise SaaS pitches." },
      { n: "3", title: "Staff & Patient Experience", desc: "The IMPACT™ Framework deployed end-to-end — every staff touchpoint, every patient moment, engineered intentionally." },
    ],
    guarantee: "If a specialized engagement doesn't deliver a documented, measurable shift in its target domain within the agreed window, PXC continues at no charge until it does.",
    faq: [
      { q: "Can I engage just one domain?", a: "Yes. All three specialized domains run as standalone engagements." },
      { q: "Are the domains stronger combined?", a: "Yes — the multi-domain pathways (Strategic Quarter, Fractional fCAIOX) are how most practices unlock compound returns." },
    ],
  },
  "leadership-development": {
    slug: "leadership-development",
    name: "Healthcare Leadership Development & Training",
    eyebrow: "Specialized Expertise · Leadership",
    Icon: GraduationCap,
    primaryColor: "#FB0000",
    oneLiner: "Custom leadership development programs that turn overwhelmed practice managers into operational executives — without sending them to expensive off-site retreats or generic MBA programs.",
    forWho: "Practices investing in their next generation of leaders — practice managers, operations directors, and clinical leads stepping into executive roles.",
    duration: "12 weeks · cohort or 1:1 formats",
    format: "Hybrid · virtual sessions + optional onsite intensive",
    outcomes: [
      "Operational language and rhythm shared across the leadership bench",
      "Documented playbooks for the 12 most common practice-leadership scenarios",
      "Confidence to run staff meetings, financial reviews, and difficult conversations",
      "Clear succession path for the practice owner",
    ],
    framework: {
      title: "The PXC Leadership Stack™",
      items: [
        "Triple Perspective lens for leaders",
        "Leadership rhythm cadence (daily/weekly/monthly/quarterly)",
        "Difficult-conversation scripts and frameworks",
        "Financial fluency for non-financial leaders",
        "Hiring, firing, and team-building playbooks",
      ],
    },
    modules: [
      { n: "M1", title: "The Leadership Rhythm", desc: "The daily/weekly/monthly/quarterly cadence every confident practice leader runs." },
      { n: "M2", title: "Operational Language", desc: "Speaking financials, KPIs, and ops in the language executives use." },
      { n: "M3", title: "Hard Conversations", desc: "Scripts and frameworks for the 12 hardest conversations every leader faces." },
      { n: "M4", title: "Strategic Decision-Making", desc: "How to make decisions when the data is ambiguous — and own them." },
    ],
    guarantee: "If a graduate isn't running their leadership rhythm independently within 12 weeks, PXC continues coaching at no charge until they are.",
    faq: [
      { q: "Is this for clinical leaders or operational leaders?", a: "Both. The frameworks are taught with parallel examples for each track." },
      { q: "Can it run as a cohort with other practices?", a: "Yes. Cohort pricing is available for 4–8 leaders from non-competing practices." },
    ],
  },
  "ai-consulting": {
    slug: "ai-consulting",
    name: "AI Consulting for Independent Medical Practices",
    eyebrow: "Specialized Expertise · AI",
    Icon: Brain,
    primaryColor: "#47d8ff",
    oneLiner: "Hands-on AI consulting that translates the noisy promise of healthcare AI into deployed, documented, human-centered workflows — built specifically for independent practices.",
    forWho: "Practices ready to deploy real AI (not buy another AI-labeled SaaS subscription) — and want it architected by someone who's actually run independent medical operations.",
    duration: "Varies · 1-day Blueprint to 12-month embedded engagements",
    format: "Virtual-first · onsite available · always Jennifer-led",
    outcomes: [
      "Practical AI workflows deployed across your most painful operational domains",
      "Tool-agnostic prompt library tuned for your specialty and workflow patterns",
      "Human-in-the-loop checkpoints designed so AI supports — never replaces — clinical judgment",
      "Documented ROI on every AI workflow deployed",
    ],
    framework: {
      title: "The AI-Fueled, People-Powered PX Cycle™",
      items: [
        "Practical AI mapping — what to automate, what to keep human",
        "Prompt engineering for healthcare contexts",
        "Human-in-the-loop design — checkpoints, audits, escalations",
        "Measurement and continuous improvement loops",
      ],
    },
    modules: [
      { n: "01", title: "AI Readiness Audit", desc: "Map your current tech stack, data hygiene, and team readiness — identify the highest-leverage first AI deployment." },
      { n: "02", title: "Workflow Architecture", desc: "Design 2–3 priority workflows with human checkpoints, escalations, and audit trails baked in." },
      { n: "03", title: "Pilot + Deploy", desc: "Small-batch pilot, measure, tune, then full rollout with staff trained in-process." },
      { n: "04", title: "Measurement Layer", desc: "Stand up the dashboard that tracks every AI workflow's ROI in dollars saved, hours reclaimed, and outcomes improved." },
    ],
    guarantee: "Every AI workflow we deploy carries a documented ROI report. If the workflow doesn't move the target metric within the agreed window, we keep working at no charge until it does.",
    faq: [
      { q: "Do I need expensive enterprise AI tools?", a: "No. PXC is tool-agnostic. We work with whatever you already have (ChatGPT, Claude, Gemini, clinical AI tools) and only recommend new tooling when it's genuinely the right move." },
      { q: "Will AI replace my staff?", a: "Not on our watch. PXC frames AI as a force-multiplier for humans, never a replacement for clinical judgment or human care." },
    ],
  },
  "staff-patient-experience": {
    slug: "staff-patient-experience",
    name: "Staff & Patient Experience Transformation",
    eyebrow: "Specialized Expertise · Experience",
    Icon: HeartHandshake,
    primaryColor: "#AEA1EA",
    oneLiner: "Engineer the moments that build loyalty — and remove the friction that quietly costs you patients and team members. Built on the IMPACT™ Framework Jennifer has refined across 326+ providers.",
    forWho: "Practices where staff turnover is silently bleeding profit, online reviews are inconsistent, and patient retention is below where it should be — and the owner suspects the fix is internal, not external.",
    duration: "60–90 days · hybrid",
    format: "Virtual-first · 1–2 onsite working days · always Jennifer-led",
    outcomes: [
      "Documented staff experience map with every friction point identified",
      "Engineered patient journey with every moment-that-matters intentionally designed",
      "Staff retention and patient satisfaction metrics measurably moved",
      "Internal review + feedback rhythm installed so improvements compound",
    ],
    framework: {
      title: "The IMPACT™ Framework",
      items: [
        "Identify — the friction points draining staff and patients alike",
        "Map — every touchpoint from first-search to lifelong-loyalty",
        "Pilot — small-batch redesign before the full rollout",
        "Activate — full rollout with staff trained in-process",
        "Communicate — internal review + feedback rhythm installed",
        "Transform — measure compound returns over 90/180/365 days",
      ],
    },
    modules: [
      { n: "01", title: "Staff Experience Diagnostic", desc: "Live workflow audits + staff conversations + leadership alignment survey." },
      { n: "02", title: "Patient Journey Map", desc: "Every touchpoint from first-Google-search to lifelong-loyalty, mapped and scored." },
      { n: "03", title: "Pilot + Train", desc: "Redesign the 2–3 highest-leverage moments and pilot with your team." },
      { n: "04", title: "Full Rollout + Rhythm", desc: "Roll out across every role and install the review + feedback cadence so improvements compound." },
    ],
    guarantee: "Documented movement on the target metric (turnover, patient sat, retention, reviews) within 90 days — or PXC continues at no charge until it moves.",
    faq: [
      { q: "Why is this called inside-out?", a: "Because every external patient experience problem is actually an internal staff experience leak. Fix the inside first — the outside becomes unforgettable." },
    ],
  },
  "from-patients-to-profits": {
    slug: "from-patients-to-profits",
    name: "From Patients to Profits",
    eyebrow: "Self-Paced Signature Course",
    Icon: Trophy,
    primaryColor: "#AEA1EA",
    oneLiner: "The complete Unified PXC System™ — distilled into PXC's flagship self-paced course for the practice owner who wants to deploy independently and turn every patient interaction into compounding profit.",
    forWho: "Owner-operators, practice managers, and operations leads who'd rather run the frameworks themselves than hire them out — and want a permanent operating system, not a consulting binder.",
    duration: "8 modules · self-paced · ~12 weeks recommended",
    format: "On-demand video + workbooks + AI prompt library + monthly office hours · lifetime access",
    outcomes: [
      "Every framework from the Unified PXC System™ taught in plain language",
      "60+ done-for-you templates: SOPs, scripts, intake flows, no-show recovery, leadership calendars",
      "AI Prompt Library tuned for independent medical practices (chart prep, comms, training, marketing)",
      "Patients-to-Profits ROI tracker so you can prove dollar-impact to your team",
      "Direct access to Jennifer's monthly office hours for active students",
      "Certificate of completion + invitation to the Practice Professionals Playground at member pricing",
    ],
    framework: {
      title: "Eight modules. One operating system.",
      items: [
        "Foundations: Triple Perspective + brand archetype",
        "Diagnose the Leaks: workflow audits + patient journey mapping",
        "Engage the Team: staff buy-in scripts + leadership rhythm",
        "Educate to Excel: training cadence + certification pathways",
        "AI Workflow Design: prompt → pilot → ship",
        "Patient Experience Architecture: every touchpoint engineered",
        "Measurement Layer: the 10-domain dashboard",
        "Sustainability: quarterly cadence + continuous improvement",
      ],
    },
    modules: [
      { n: "M1", title: "Foundations — The Triple Perspective", desc: "Why every PX problem is an inside problem. Brand archetype, the Triple Perspective lens, and the 'Improve the inside first' operating principle." },
      { n: "M2", title: "Diagnose the Leaks", desc: "Live-workflow audit template, patient journey mapping kit, leadership alignment survey, and the 10-domain stability scorecard." },
      { n: "M3", title: "Engage the Team", desc: "Staff buy-in scripts for the 6 hardest conversations, leadership rhythm calendar template, and the meeting-redesign playbook." },
      { n: "M4", title: "Educate to Excel", desc: "Training cadence templates, certification pathways for every role, peer-coaching frameworks, and the new-hire onboarding system." },
      { n: "M5", title: "AI Workflow Design", desc: "From prompt to pilot to shipped: the 5-step PXC AI deployment loop with 80+ tool-agnostic prompts." },
      { n: "M6", title: "Patient Experience Architecture", desc: "Map every touchpoint from first-Google-search to lifelong-loyalty. Engineer the moments that matter." },
      { n: "M7", title: "Measurement Layer", desc: "Stand up the 10-domain operational dashboard and the Patients-to-Profits ROI tracker." },
      { n: "M8", title: "Sustainability + Compound", desc: "Build the quarterly cadence that turns one transformation into a year of compound returns." },
    ],
    guarantee: "30-day no-questions-asked refund. Watch Module 1, run the first exercise, and if it doesn't move something inside 30 days — full refund, keep the templates.",
    faq: [
      { q: "How does this compare to working with PXC directly?", a: "The course teaches the same frameworks PXC deploys hands-on. Same systems, different delivery — DIY versus done-with-you. Many practices start with the course and graduate into a Fractional fCAIOX engagement." },
      { q: "How long do I get access?", a: "Lifetime access — including every version update. Plus monthly office hours with Jennifer for as long as you're an active student." },
      { q: "Do I get the AI prompt library separately?", a: "It's included. Every prompt is tool-agnostic — works in ChatGPT, Claude, Gemini, or any clinical AI tool you already have." },
      { q: "Can my whole team take it?", a: "Yes. Team licenses are available — ask about the cohort discount for 3+ seats from the same practice." },
    ],
  },
  "practice-professionals-playground": {
    slug: "practice-professionals-playground",
    name: "Practice Professionals Playground",
    eyebrow: "Ongoing Membership & Mastermind",
    Icon: Users,
    primaryColor: "#AEA1EA",
    oneLiner: "PXC's ongoing membership for independent practice leaders ready to keep evolving — twice-monthly masterminds, AI updates, prompt library access, and Jennifer in the room.",
    forWho: "Independent practice owners, managers, and operations directors who've completed a PXC engagement (or the From Patients to Profits course) — and want a permanent strategic community + AI tailwind.",
    duration: "Monthly membership · cancel anytime",
    format: "2× monthly group mastermind + private community + AI Field Notes + quarterly 1:1",
    outcomes: [
      "Two live group masterminds per month with Jennifer Radu, fCAIOX",
      "Private community of vetted independent practice operators",
      "First access to every new PXC framework, prompt, and playbook",
      "Quarterly 1:1 office hours slot with Jennifer (45 minutes)",
      "Bi-weekly AI Field Notes — Jennifer's implementation notebook to your inbox",
      "Hot-seat coaching slots and member case-study deep dives",
    ],
    framework: {
      title: "Four membership rhythms",
      items: [
        "Twice-Monthly Live Mastermind",
        "Bi-Weekly AI Field Notes Newsletter",
        "Private Member Community (always-on)",
        "Quarterly 1:1 with Jennifer Radu, fCAIOX",
      ],
    },
    modules: [
      { n: "Live", title: "Twice-Monthly Mastermind (90 min)", desc: "Live group session — hot-seat coaching, member Q&A, case-study deep dives, real-time framework walkthrough each session." },
      { n: "Async", title: "Private Member Community", desc: "Always-on community where Jennifer is in daily and members trade resources in real time. Peer-to-peer help is one of the most-praised aspects." },
      { n: "Resources", title: "AI Field Notes + Prompt Library", desc: "Every new AI prompt, workflow playbook, or implementation note — first. Members get it weeks before it lands anywhere else." },
      { n: "1:1", title: "Quarterly 45-Minute Office Hours", desc: "One private strategy slot per quarter for every active member. Bring one problem; leave with three moves." },
    ],
    guarantee: "Cancel anytime. No long-term contract. If the first 30 days don't deliver one concrete improvement, full refund — keep everything you've downloaded.",
    faq: [
      { q: "Do I need to have done another PXC engagement first?", a: "Recommended but not required. Some members join directly and use it as their entry point." },
      { q: "Is the community really active?", a: "Yes — Jennifer is in it daily, and member-to-member peer help is one of the most-praised aspects. It's NOT a ghost-town Facebook group." },
      { q: "What if I miss a live mastermind?", a: "Every session is recorded, summarized, and tagged by topic — binge or skim depending on relevance." },
      { q: "Is there a team option?", a: "Yes — team memberships are available so a practice owner + 1–2 leaders can share resources and attend together." },
    ],
    themeOverride: { bgClass: "bg-[#1a0d2e]", accent: "#AEA1EA" },
  },
  "blueprint-workshops": {
    slug: "blueprint-workshops",
    name: "Blueprint Workshops",
    eyebrow: "On-Site Training & Intensives",
    Icon: Lightbulb,
    primaryColor: "#fca746",
    oneLiner: "Custom on-site (or virtual) training intensives Jennifer brings directly to your practice — focused on AI deployment, patient experience, and practice-leadership development.",
    forWho: "Independent practices, multi-site groups, and healthcare associations that want Jennifer in the room with their team for a day, a weekend, or a recurring quarterly cadence.",
    duration: "Half-day to 3-day intensives · custom recurring options",
    format: "On-site (preferred) · virtual workshop option available",
    outcomes: [
      "Your entire leadership bench trained on PXC frameworks in one focused intensive",
      "Custom playbook authored for your specific practice during the workshop itself",
      "AI workflow scaffolded and ready to pilot the week after",
      "Recurring cadence option for quarterly leadership recalibration",
    ],
    framework: {
      title: "Workshop Types",
      items: [
        "AI Blueprint Day — full-practice AI architecture",
        "Leadership Recalibration — for practice managers and ops leads",
        "Patient Experience Intensive — IMPACT™ Framework deployment",
        "Custom Multi-Day — combine any of the above into a tailored intensive",
      ],
    },
    modules: [
      { n: "01", title: "AI Blueprint Day", desc: "One full day on-site where Jennifer architects your practice's complete AI + ops blueprint. Walk away with a costed roadmap and pilot scaffolded." },
      { n: "02", title: "Leadership Recalibration", desc: "Half-day or full-day intensive specifically for practice managers, ops directors, and lead clinicians stepping into executive roles." },
      { n: "03", title: "Patient Experience Intensive", desc: "Full IMPACT™ Framework taught and applied to YOUR patient journey — every touchpoint mapped, every moment-that-matters engineered." },
      { n: "04", title: "Custom Multi-Day", desc: "Combine workshop types into a 2-day or 3-day immersive intensive tuned to your practice's exact season." },
    ],
    guarantee: "If your team doesn't walk away with a documented, actionable playbook ready to deploy the week after the workshop, PXC continues at no charge until they do.",
    faq: [
      { q: "What's the difference between this and Speaking Engagements?", a: "Speaking Engagements are keynotes and panels at external events. Blueprint Workshops are Jennifer brought INTO your practice for hands-on training with your team." },
      { q: "Do you travel?", a: "Yes. Anywhere in the U.S. for on-site Blueprint Workshops. Florida and Southeast U.S. are most common — but we travel nationwide." },
    ],
    themeOverride: { bgClass: "bg-[#1a1408]", accent: "#fca746" },
  },
};

export default function ServiceDetail() {
  const [location] = useLocation();
  const slug = location.split("/").filter(Boolean).pop() || "";
  const svc = SERVICES[slug];

  useSEO({
    title: svc ? `${svc.name} | PXC` : "Service | PXC",
    description: svc?.oneLiner || "PXC service detail.",
    canonical: `https://patientexperienceconsulting.com/services/${slug}`,
  });

  if (!svc) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-black mb-4">Service not found</h1>
          <Button asChild><Link to="/services">Back to Services</Link></Button>
        </div>
      </div>
    );
  }

  const Icon = svc.Icon;
  const C = svc.primaryColor;
  const primaryCta = svc.primaryCtaLabel || "Book Free Strategy Session";
  const primaryHref = svc.primaryCtaHref || "/contact#book-session";
  const secondaryCta = svc.secondaryCtaLabel || "Tell Us About Your Practice";
  const secondaryHref = svc.secondaryCtaHref || "/contact";
  const themeBg = svc.themeOverride?.bgClass || "bg-black";

  return (
    <div className={`${themeBg} text-white`} data-testid={`page-service-${svc.slug}`}>
      {/* HERO */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-white/10">
        <AuroraBackdrop opacity={0.15} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4 px-3 py-1 font-bold" style={{ background: `${C}20`, color: C, borderColor: `${C}60` }} data-testid={`service-eyebrow-${svc.slug}`}>
                <Icon className="h-3.5 w-3.5 mr-1.5" /> {svc.eyebrow}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-5" style={{ fontFamily: "Nunito, sans-serif" }} data-testid={`service-headline-${svc.slug}`}>
                {svc.name}
              </h1>
              <p className="text-lg text-[#AEA1EA] leading-relaxed mb-6">{svc.oneLiner}</p>
              <div className="grid grid-cols-2 gap-3 mb-7">
                <div className="rounded-lg border border-white/10 bg-[#0F0F0F] p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] font-bold mb-1" style={{ color: C }}>Duration</div>
                  <div className="text-sm font-bold text-white">{svc.duration}</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-[#0F0F0F] p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] font-bold mb-1" style={{ color: C }}>Format</div>
                  <div className="text-sm font-bold text-white">{svc.format}</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="cta-bounce text-white font-black px-7 py-6" style={{ background: C === "#fca746" ? "#fca746" : "#FB0000", color: C === "#fca746" ? "#1a1a1a" : "#fff", fontFamily: "Nunito, sans-serif" }} asChild data-testid={`service-cta-${svc.slug}`}>
                  <Link to={primaryHref}>{primaryCta} <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white font-black px-7 py-6 hover:bg-white/10" asChild>
                  <Link to={secondaryHref}>{secondaryCta}</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div className="relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
              <div className="rounded-2xl border-2 p-8" style={{ background: "#0F0F0F", borderColor: `${C}50`, boxShadow: `0 0 40px ${C}33` }}>
                <Icon className="h-14 w-14 mb-5" style={{ color: C }} />
                <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>Best fit for</h3>
                <p className="text-[#AEA1EA] leading-relaxed mb-6">{svc.forWho}</p>
                <div className="border-t border-white/10 pt-5">
                  <div className="text-[10px] uppercase tracking-[0.18em] font-bold mb-3" style={{ color: C }}>Guarantee</div>
                  <p className="text-white/85 text-sm leading-relaxed">{svc.guarantee}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black mb-8" style={{ fontFamily: "Nunito, sans-serif" }}>
            What you walk away with
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {svc.outcomes.map((o, i) => (
              <motion.div
                key={o}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-3 rounded-xl border border-white/10 bg-[#0F0F0F] p-5"
                data-testid={`service-outcome-${i}`}
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: C }} />
                <span className="text-white/90 text-sm leading-relaxed">{o}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="relative py-20 border-y border-white/10 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-3" style={{ background: `${C}20`, color: C, borderColor: `${C}60` }}>The Framework</Badge>
          <h2 className="text-3xl sm:text-4xl font-black mb-7" style={{ fontFamily: "Nunito, sans-serif" }}>
            {svc.framework.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {svc.framework.items.map((it, i) => (
              <BeamCard key={it} className={i % 2 === 0 ? "" : "pxc-beam-cyan"}>
                <div className="rounded-xl bg-[#0F0F0F] p-5 h-full">
                  <div className="font-black text-3xl mb-2" style={{ color: C, fontFamily: "Nunito, sans-serif" }}>{String(i + 1).padStart(2, "0")}</div>
                  <p className="text-sm text-white/85 leading-relaxed">{it}</p>
                </div>
              </BeamCard>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES / PHASES */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>How it works</h2>
          <p className="text-[#AEA1EA] mb-10">Step-by-step delivery — what happens, when, and what you walk away with at every checkpoint.</p>
          <div className="space-y-4">
            {svc.modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="grid md:grid-cols-[120px_1fr] gap-5 rounded-xl border border-white/10 bg-[#0F0F0F] p-6"
                data-testid={`service-module-${i}`}
              >
                <div className="font-black text-3xl" style={{ color: C, fontFamily: "Nunito, sans-serif" }}>{m.n}</div>
                <div>
                  <h3 className="font-black text-lg text-white mb-1" style={{ fontFamily: "Nunito, sans-serif" }}>{m.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 border-t border-white/10 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-3" style={{ background: `${C}20`, color: C, borderColor: `${C}60` }}>FAQ</Badge>
          <h2 className="text-3xl sm:text-4xl font-black mb-7" style={{ fontFamily: "Nunito, sans-serif" }}>Common questions</h2>
          <div className="space-y-4">
            {svc.faq.map((f, i) => (
              <div key={f.q} className="rounded-xl border border-white/10 bg-[#0F0F0F] p-5" data-testid={`service-faq-${i}`}>
                <h3 className="font-black text-white mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>{f.q}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-10 w-10 mx-auto mb-4" style={{ color: C }} />
          <h2 className="text-3xl sm:text-5xl font-black mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>
            Ready to start with <span style={{ color: C }}>{svc.name}?</span>
          </h2>
          <p className="text-lg text-[#AEA1EA] mb-8">Book a free Puzzle Pyramid Strategy Session and we'll confirm fit — or recommend the tier that actually is.</p>
          <Button size="lg" className="cta-bounce text-white font-black px-8 py-6" style={{ background: C === "#fca746" ? "#fca746" : "#FB0000", color: C === "#fca746" ? "#1a1a1a" : "#fff", fontFamily: "Nunito, sans-serif" }} asChild data-testid={`service-cta-bottom-${svc.slug}`}>
            <Link to={primaryHref}>{primaryCta} <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
