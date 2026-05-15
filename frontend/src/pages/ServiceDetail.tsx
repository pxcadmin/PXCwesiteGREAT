import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Clock, Users, Trophy, Brain, BookOpen, Store, GraduationCap, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { BeamCard } from "@/components/effects/BeamCard";
import { useSEO } from "@/lib/useSEO";

interface ServiceConfig {
  slug: string;
  name: string;
  brand: string;
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
}

const SERVICES: Record<string, ServiceConfig> = {
  "practice-clarity-assessment": {
    slug: "practice-clarity-assessment",
    name: "Practice Clarity & AI Readiness Assessment™",
    brand: "PXC",
    eyebrow: "Tier 1 · Free Strategic Consult",
    Icon: Layers,
    primaryColor: "#47d8ff",
    oneLiner: "Your free 30-minute on-ramp into the Unified PXC System™ — Jennifer Radu, fCAIOX, personally maps the three highest-leverage transformation moves for your practice.",
    forWho: "Independent practice owners, managers, and physician-leaders who want clarity before they commit — not a generic sales pitch.",
    duration: "30 minutes",
    format: "Virtual (Zoom) — calendar held immediately after submission",
    outcomes: [
      "Your top 3 highest-ROI transformation moves identified live",
      "A clear yes/no on whether PXC is the right fit",
      "An honest tier recommendation across the PXC offer ladder",
      "Documented action plan you can run yourself — even if you never engage further",
    ],
    framework: {
      title: "The Puzzle Pyramid™ on-ramp — Engage. Educate. Excel.",
      items: [
        "Engage: identify the people-side leverage points first",
        "Educate: surface the workflow + leadership gaps driving friction",
        "Excel: design the AI-supported next step that compounds across the practice",
      ],
    },
    modules: [
      { n: "01", title: "Practice Snapshot", desc: "5-minute walkthrough of your current operational reality — no judgment, no canned questions." },
      { n: "02", title: "Pain Triage", desc: "Jennifer identifies which painful symptom is actually the upstream cause." },
      { n: "03", title: "Three-Move Map", desc: "You leave with the three highest-leverage moves — sequenced and ready to execute." },
    ],
    guarantee: "If the session doesn't deliver three concrete moves you can act on this week, the next session is free. No upsell pressure during or after.",
    faq: [
      { q: "Is this really free?", a: "Yes. 30 minutes, no card, no obligation. Jennifer believes in earning your trust before earning your business." },
      { q: "Will I be pitched at?", a: "No. Only if your needs match the PXC offer ladder will we tell you which tier fits — and exactly why." },
      { q: "What comes after this?", a: "If we're the right fit, the natural next steps are Tier 2 (PXC IMPACT Blueprint™), Tier 3 (EXCEL Transformation Partnership™), or an AI Blueprint Day™ — depending on your scale and urgency." },
    ],
  },
  "pxc-impact-blueprint": {
    slug: "pxc-impact-blueprint",
    name: "PXC IMPACT Blueprint™",
    brand: "PXC",
    eyebrow: "Tier 2 · 90-Day Architecture Engagement",
    Icon: Zap,
    primaryColor: "#FB0000",
    oneLiner: "A 90-day intensive that delivers your practice's complete operational + AI blueprint — built with you, ready to deploy by your team or PXC's.",
    forWho: "Practices that know they need transformation but want the architecture documented and tested before committing to a full Partnership.",
    duration: "90 days · weekly working sessions + async support",
    format: "Virtual-first · monthly onsite working day available",
    outcomes: [
      "Complete operational blueprint for your practice (every workflow, role, rhythm)",
      "AI deployment roadmap with prioritized, costed implementations",
      "Two pilot workflows live and measured before engagement ends",
      "Leadership rhythm calendar installed and running",
      "Path-forward decision: self-deploy, or roll into Tier 3 EXCEL Partnership™",
    ],
    framework: {
      title: "The IMPACT™ Framework — six-phase blueprint",
      items: [
        "Inspire — align leadership on the vision",
        "Motivate — surface and remove team friction",
        "Provide — design the workflow + AI stack",
        "Achieve — pilot two priority workflows",
        "Communicate — train + roll out + document",
        "Transform — measure, tune, and decide next step",
      ],
    },
    modules: [
      { n: "Wk 1–3", title: "Discovery + Architecture", desc: "Workflow audit, patient journey mapping, AI readiness, leadership alignment, blueprint draft." },
      { n: "Wk 4–6", title: "Pilot Design", desc: "Pick the two highest-leverage pilots. Design with your team. Train the leads." },
      { n: "Wk 7–10", title: "Pilot + Measure", desc: "Run both pilots concurrently. Measure weekly. Tune in real time." },
      { n: "Wk 11–12", title: "Decision Day + Transfer", desc: "Document everything. Hand off the playbooks. Decide: self-deploy or roll into EXCEL Partnership." },
    ],
    guarantee: "If the blueprint isn't actionable enough to deploy yourself at the end of 90 days, PXC continues at no charge until it is.",
    faq: [
      { q: "Is this just consulting?", a: "No. It's architecture with two live pilots — so you have real-world evidence the blueprint works in YOUR practice before you commit further." },
      { q: "What happens after the Blueprint?", a: "Most practices roll into the EXCEL Transformation Partnership™ for the full 12-month deployment with the Self-Funding Guarantee. Some choose to self-deploy using the blueprint." },
    ],
  },
  "excel-transformation-partnership": {
    slug: "excel-transformation-partnership",
    name: "EXCEL Transformation Partnership™",
    brand: "PXC",
    eyebrow: "Tier 3 · 12-Month Fractional fCAIOX Partnership",
    Icon: Trophy,
    primaryColor: "#FB0000",
    oneLiner: "PXC's signature 12-month fractional fCAIOX engagement — the offering 326+ providers have used to stop the bleeding, stabilize, and scale. Backed by the Self-Funding Guarantee — Contractual.",
    forWho: "Practices ready for the deepest operational, cultural, and AI-supported transformation PXC offers — with Jennifer Radu, fCAIOX, embedded as your fractional Chief AI Experience Officer for 12 months.",
    duration: "12 months · structured quarterly arcs",
    format: "Virtual-first · monthly onsite working days · always-on async access",
    outcomes: [
      "Staff turnover reduced (avg. -38% in case studies)",
      "Patient satisfaction lift (avg. +41% in case studies)",
      "Documented ROI > investment within 6 months — in writing",
      "AI-supported workflows deployed across the most painful operational domains",
      "Leadership rhythm + accountability cadence installed permanently",
      "Self-Funding Guarantee — Contractual on every engagement",
    ],
    framework: {
      title: "The Unified PXC System™",
      items: [
        "Puzzle Pyramid™ deployment methodology",
        "IMPACT™ Framework strategic transformation",
        "AI-Fueled, People-Powered PX Cycle™ sustainability",
      ],
    },
    modules: [
      { n: "Q1", title: "Inside-Out Diagnostic + Architecture", desc: "Full workflow audit, culture diagnostic, AI readiness, leadership alignment, blueprint installed." },
      { n: "Q2", title: "Pilot + Train", desc: "Two priority workflows live. Staff trained in-process. Leadership rhythm running." },
      { n: "Q3", title: "Full Deployment", desc: "Roll out across every role. Stand up AI-supported workflows. Document every SOP." },
      { n: "Q4", title: "Compound + Transfer", desc: "Measure compound returns. Quarterly transformation review installed. Handoff to your team with P3 ongoing support." },
    ],
    guarantee: "The Self-Funding Guarantee — Contractual. Documented savings exceed your investment within 6 months — in writing — or PXC keeps working at no charge until they do.",
    faq: [
      { q: "How customized is it?", a: "Every engagement is built specifically for your practice. The Unified PXC System™ is constant; the deployment is bespoke." },
      { q: "What happens after 12 months?", a: "Most clients roll into Practice Professionals Playground™ (P3) for ongoing AI updates, leadership rhythm, and quarterly check-ins." },
      { q: "Is Jennifer personally on every engagement?", a: "Yes. EXCEL is Jennifer-led. No junior associates handed your transformation. That's the entire point." },
    ],
  },
  "mastercourse": {
    slug: "mastercourse",
    name: "From Patients to Profits™ MasterCourse",
    brand: "PXC",
    eyebrow: "Signature Self-Paced Course",
    Icon: BookOpen,
    primaryColor: "#AEA1EA",
    oneLiner: "The complete Unified PXC System™ — distilled into PXC's flagship self-paced course for the practice owner who wants to deploy independently and turn every patient interaction into compounding profit.",
    forWho: "Owner-operators, practice managers, and operations leads who'd rather run the frameworks themselves than hire them out — and want a permanent operating system, not a consulting binder.",
    duration: "8 modules · self-paced · ~12 weeks recommended",
    format: "On-demand video + workbooks + AI prompt library + monthly office hours · lifetime access",
    outcomes: [
      "Every framework from the Unified PXC System™ taught in plain language",
      "60+ done-for-you templates: SOPs, scripts, intake flows, no-show recovery, leadership rhythm calendars",
      "AI Prompt Library tuned for independent medical practices (chart prep, comms, training, marketing)",
      "Patients-to-Profits ROI tracker so you can prove dollar-impact to your team — and yourself",
      "Direct access to Jennifer's monthly office hours for active students",
      "Certificate of completion + invitation to the Practice Professionals Playground™ at member pricing",
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
      { n: "M3", title: "Engage the Team", desc: "Staff buy-in scripts for the 6 hardest conversations, leadership rhythm calendar template (daily/weekly/monthly/quarterly), and the meeting-redesign playbook." },
      { n: "M4", title: "Educate to Excel", desc: "Training cadence templates, certification pathways for every role, peer-coaching frameworks, and the 'first 90 days' new-hire onboarding system." },
      { n: "M5", title: "AI Workflow Design", desc: "From prompt to pilot to shipped: the 5-step PXC AI deployment loop. Includes 80+ tool-agnostic prompts and the human-in-the-loop checkpoint framework." },
      { n: "M6", title: "Patient Experience Architecture", desc: "Map every touchpoint from first-Google-search to lifelong-loyalty. Engineer the moments that matter and remove the moments that bleed." },
      { n: "M7", title: "Measurement Layer", desc: "Stand up the 10-domain operational dashboard, the Patients-to-Profits ROI tracker, and the quarterly transformation review template." },
      { n: "M8", title: "Sustainability + Compound", desc: "Build the quarterly cadence that keeps the system running once you remove yourself from daily ops — and turns one transformation into a year of compound returns." },
    ],
    guarantee: "30-day no-questions-asked refund. Watch Module 1, run the first exercise, and if it doesn't move something inside 30 days — full refund, keep the templates.",
    faq: [
      { q: "How does this compare to the EXCEL Transformation Partnership™?", a: "MasterCourse teaches the same frameworks the EXCEL Partnership deploys in-person. Same systems, different delivery — DIY versus done-with-you. Many practices start with MasterCourse and graduate into EXCEL once they want hands-on implementation." },
      { q: "How long do I get access?", a: "Lifetime access — including every version update. Plus monthly office hours with Jennifer for as long as you're an active student." },
      { q: "Do I get the AI prompt library separately?", a: "It's included. Every prompt is tool-agnostic — works in ChatGPT, Claude, Gemini, or any clinical AI tool you already have." },
      { q: "Can my whole team take it?", a: "Yes. Team licenses are available — ask about the cohort discount for 3+ seats from the same practice." },
    ],
  },
  "practice-professionals-playground": {
    slug: "practice-professionals-playground",
    name: "Practice Professionals Playground™ (P3)",
    brand: "PXC",
    eyebrow: "Ongoing Membership & Mastermind",
    Icon: Users,
    primaryColor: "#47d8ff",
    oneLiner: "PXC's ongoing membership for independent practice leaders ready to keep evolving — twice-monthly masterminds, AI updates, prompt library access, and Jennifer in the room.",
    forWho: "Independent practice owners, managers, and ops directors who've completed an EXCEL Transformation Partnership™, AI Blueprint Day™, or the From Patients to Profits™ MasterCourse — and want a permanent strategic community + AI tailwind.",
    duration: "Monthly membership · cancel anytime",
    format: "2× monthly group mastermind + private community + AI Field Notes + quarterly 1:1",
    outcomes: [
      "Two live group masterminds per month with Jennifer Radu, fCAIOX",
      "Private community of vetted independent practice operators",
      "First access to every new PXC framework, prompt, and playbook before it's released",
      "Quarterly 1:1 office hours slot with Jennifer (45 minutes)",
      "Bi-weekly AI Field Notes — Jennifer's actual implementation notebook, shipped to your inbox",
      "Hot-seat coaching slots + member case-study deep dives",
    ],
    framework: {
      title: "Four membership rhythms",
      items: [
        "Twice-Monthly Live Mastermind",
        "Bi-Weekly AI Field Notes Newsletter",
        "Private Member Community (always-on Slack-style)",
        "Quarterly 1:1 with Jennifer Radu, fCAIOX",
      ],
    },
    modules: [
      { n: "Live", title: "Twice-Monthly Mastermind (90 min)", desc: "Live group session with Jennifer — hot-seat coaching, member Q&A, case-study deep dives, and a real-time framework walkthrough each session." },
      { n: "Async", title: "Private Member Community", desc: "Always-on private community where Jennifer is in daily, members ask questions in real time, share wins, and trade resources. Peer-to-peer help is one of the most-praised P3 benefits." },
      { n: "Resources", title: "AI Field Notes + Prompt Library", desc: "Every new AI prompt, workflow playbook, or implementation note Jennifer writes — first. Members get it weeks before it lands anywhere else." },
      { n: "1:1", title: "Quarterly 45-Minute Office Hours", desc: "One private strategy slot per quarter for every active P3 member. Bring one problem; leave with three moves." },
    ],
    guarantee: "Cancel anytime. No long-term contract. If the first 30 days don't deliver one concrete improvement to your practice, full refund — keep all the resources you've already downloaded.",
    faq: [
      { q: "Do I need to have done another PXC engagement first?", a: "Recommended but not required. Some members join P3 directly and use it as their entry point — it works either way." },
      { q: "Is the community really active?", a: "Yes — Jennifer is in it daily, and member-to-member peer help is one of P3's most-praised aspects. It's NOT a ghost-town Facebook group." },
      { q: "What if I miss a live mastermind?", a: "Every session is recorded, summarized, and tagged by topic — so you can binge or skim depending on relevance." },
      { q: "Is there a team option?", a: "Yes — team memberships are available so a practice owner + 1–2 leaders can share the resources and attend masterminds together. Ask about cohort pricing." },
    ],
  },
  "puzzle-shop": {
    slug: "puzzle-shop",
    name: "The Puzzle Shop",
    brand: "PXC",
    eyebrow: "Digital Products & Templates",
    Icon: Store,
    primaryColor: "#AEA1EA",
    oneLiner: "Digital downloads, AI prompt playbooks, workflow templates, and microcourses — for practices that want a single piece, not a partnership.",
    forWho: "Owners and operators who want to grab one specific PXC asset and run it in their practice — no engagement required.",
    duration: "Instant digital delivery",
    format: "PDFs, Notion templates, AI prompt libraries, mini-courses",
    outcomes: [
      "Instant access to PXC's most-requested operational templates",
      "AI prompt playbooks tuned for independent medical practices",
      "Mini-courses that deliver one outcome each",
      "Bundle discounts for practices that want the full library",
    ],
    framework: { title: "Four product categories", items: ["Workflow Templates","AI Prompt Playbooks","Mini-Courses","Workbooks & Worksheets"] },
    modules: [
      { n: "Templates", title: "Workflow Templates", desc: "Front-desk SOPs, intake flows, no-show recovery sequences, end-of-day reconciliation." },
      { n: "Prompts", title: "AI Prompt Playbooks", desc: "Battle-tested prompts for chart prep, patient communication, content marketing, and staff training." },
      { n: "Courses", title: "Mini-Courses", desc: "1–2 hour focused courses on a single transformation — e.g. 'Fix your front desk in 7 days.'" },
      { n: "Workbooks", title: "Workbooks & Worksheets", desc: "Printable workbooks for staff training, patient journey mapping, and quarterly planning." },
    ],
    guarantee: "30-day refund on any single product. No questions asked.",
    faq: [
      { q: "Can I use prompts in any AI tool?", a: "Yes — every prompt is tool-agnostic. Use them in ChatGPT, Claude, Gemini, or any clinical AI tool you already have." },
      { q: "Do products get updated?", a: "Yes. Every Puzzle Shop product gets free version updates for 12 months after purchase." },
    ],
  },
  "leadership-development": {
    slug: "leadership-development",
    name: "Healthcare Leadership Development & Training",
    brand: "PXC",
    eyebrow: "Custom Leadership Programs",
    Icon: GraduationCap,
    primaryColor: "#FB0000",
    oneLiner: "Custom leadership development programs that turn overwhelmed practice managers into operational executives — without sending them to off-site retreats.",
    forWho: "Practices investing in their next generation of leaders — practice managers, ops directors, and clinical leads stepping into executive roles.",
    duration: "12 weeks · cohort or 1:1 formats",
    format: "Hybrid · virtual sessions + (optional) one onsite intensive",
    outcomes: [
      "Operational language and rhythm shared across the leadership bench",
      "Documented playbooks for the 12 most common practice-leadership scenarios",
      "Confidence to run staff meetings, financial reviews, and difficult conversations",
      "Clear succession path for the practice owner",
    ],
    framework: {
      title: "The PXC Leadership Stack™",
      items: ["The Triple Perspective lens for leaders","Leadership rhythm cadence (daily/weekly/monthly/quarterly)","Difficult-conversation scripts and frameworks","Financial fluency for non-financial leaders","Hiring, firing, and team-building playbooks"],
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

  return (
    <div className="bg-black text-white" data-testid={`page-service-${svc.slug}`}>
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
                <Button size="lg" className="cta-bounce bg-[#FB0000] text-white font-black px-7 py-6" style={{ fontFamily: "Nunito, sans-serif" }} asChild data-testid={`service-cta-${svc.slug}`}>
                  <Link to="/contact#book-session">Book Free Strategy Session <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white font-black px-7 py-6" asChild>
                  <Link to="/discovery-questionnaire">Tell Us About Your Practice</Link>
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
          <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
            How it works
          </h2>
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
          <h2 className="text-3xl sm:text-4xl font-black mb-7" style={{ fontFamily: "Nunito, sans-serif" }}>
            Common questions
          </h2>
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
            Ready to start with <span style={{ color: C }}>{svc.name.split("™")[0]}™?</span>
          </h2>
          <p className="text-lg text-[#AEA1EA] mb-8">
            Book a free 30-minute Puzzle Pyramid™ Strategy Session and we'll confirm if this is the right fit — or recommend the tier that actually is.
          </p>
          <Button size="lg" className="cta-bounce bg-[#FB0000] text-white font-black px-8 py-6" style={{ fontFamily: "Nunito, sans-serif" }} asChild data-testid={`service-cta-bottom-${svc.slug}`}>
            <Link to="/contact#book-session">Book My Free Strategy Session <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
