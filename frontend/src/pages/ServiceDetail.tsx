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
  "puzzle-pyramid-strategy-session": {
    slug: "puzzle-pyramid-strategy-session",
    name: "Puzzle Pyramid™ Strategy Session",
    brand: "PXC",
    eyebrow: "Free Strategic Consult",
    Icon: Layers,
    primaryColor: "#47d8ff",
    oneLiner: "30 free minutes with Jennifer Radu, fCAIOX, that maps your practice's three highest-leverage transformation moves.",
    forWho: "Independent practice owners, managers, and physician-leaders who want clarity — not a generic sales pitch.",
    duration: "30 minutes",
    format: "Virtual (Zoom) — calendar held immediately after submission",
    outcomes: [
      "Your top 3 highest-ROI transformation moves identified",
      "A clear yes/no on whether PXC is the right fit",
      "An honest tier recommendation across the PXC offer ladder",
      "Documented action plan you can run yourself — even if you never engage further",
    ],
    framework: {
      title: "The Puzzle Pyramid™ — Engage. Educate. Excel.",
      items: [
        "Engage: identify the people-side leverage points first",
        "Educate: surface the workflow + leadership gaps that drive operational friction",
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
    ],
  },
  "px-fast-pass": {
    slug: "px-fast-pass",
    name: "PX Fast Pass™",
    brand: "PXC",
    eyebrow: "30-Day Operational Sprint",
    Icon: Zap,
    primaryColor: "#FB0000",
    oneLiner: "A 30-day, hands-on operational sprint that fixes your single most painful patient experience leak — fast.",
    forWho: "Practices that need momentum now, not in 6 months. Best for one-location practices with a clear top pain point.",
    duration: "30 days · 4 working sessions + async support",
    format: "Virtual + (optional) one onsite working day",
    outcomes: [
      "One critical PX leak documented, fixed, and measured",
      "New workflow rolled out with staff trained in-process",
      "Before/after metrics tracked and verified",
      "Repeatable playbook your team can run again on the next leak",
    ],
    framework: {
      title: "The PX IMPACT Sprint™",
      items: [
        "Identify — root-cause the friction in week 1",
        "Map — design the fix with the team that will run it",
        "Pilot — small-batch test before the full rollout",
        "Activate — full rollout with staff working alongside Jennifer",
        "Calibrate — measure, tune, document",
        "Transfer — handoff a playbook your team owns forever",
      ],
    },
    modules: [
      { n: "Wk 1", title: "Discovery + Diagnostic", desc: "Live workflow audit. Staff conversations. Patient journey map. Picks the single most painful PX leak." },
      { n: "Wk 2", title: "Design + Pilot", desc: "Build the new workflow with your team. Pilot it on a small batch. Tune before scaling." },
      { n: "Wk 3", title: "Activate + Train", desc: "Roll it out everywhere. Train every role. Document the new SOP." },
      { n: "Wk 4", title: "Measure + Transfer", desc: "Verify the metric moved. Hand your team the repeatable playbook. Plan the next sprint." },
    ],
    guarantee: "Documented improvement on the target metric within 30 days — or we keep working at no charge until it moves.",
    faq: [
      { q: "What kind of metric typically moves?", a: "No-show rate, front-desk wait time, intake-to-rooming, after-hours documentation hours, staff complaint count — whichever one we target." },
      { q: "Can it run during normal operations?", a: "Yes. Every Fast Pass is designed to run alongside daily operations — never disruptive to patient care." },
    ],
  },
  "px-treatment-plan": {
    slug: "px-treatment-plan",
    name: "PX Treatment Plan™ (EXCEL Transformation Partnership™)",
    brand: "PXC",
    eyebrow: "Signature 90-Day Engagement",
    Icon: Trophy,
    primaryColor: "#FB0000",
    oneLiner: "PXC's signature 90-day transformation engagement — the offering 326+ providers have used to stop the bleeding and start scaling.",
    forWho: "Practices ready for the deepest operational, cultural, and AI-supported transformation PXC offers — backed by the Self-Funding Guarantee.",
    duration: "90 days · 12-week structured engagement",
    format: "Virtual-first · monthly onsite working days available",
    outcomes: [
      "Staff turnover reduced (avg. -38% in case studies)",
      "Patient satisfaction lift (avg. +41% in case studies)",
      "Documented ROI > investment within 6 months — in writing",
      "AI-supported workflows deployed across the most painful operational domains",
      "Leadership rhythm + accountability cadence installed",
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
      { n: "Phase 1", title: "Inside-Out Diagnostic (Weeks 1–3)", desc: "Deep workflow audit + culture diagnostic + AI readiness assessment + leadership alignment session." },
      { n: "Phase 2", title: "Architecture + Pilot (Weeks 4–7)", desc: "Build the operational blueprint with your team. Pilot the top 2 workflows. Train leadership rhythm." },
      { n: "Phase 3", title: "Full Deployment (Weeks 8–11)", desc: "Roll out across every role. Stand up AI-supported workflows. Document every SOP." },
      { n: "Phase 4", title: "Transfer + Sustain (Week 12)", desc: "Handoff to your team with the Practice Professionals Playground™ ongoing support." },
    ],
    guarantee: "The Self-Funding Guarantee — Contractual. Documented savings exceed your investment within 6 months — in writing — or PXC keeps working at no charge until they do.",
    faq: [
      { q: "How customized is it?", a: "Every engagement is built specifically for your practice. The frameworks are constant; the deployment is bespoke." },
      { q: "What happens after 90 days?", a: "Most clients roll into Practice Professionals Playground™ (P3) for ongoing AI support, leadership rhythm, and quarterly check-ins." },
    ],
  },
  "mastercourse": {
    slug: "mastercourse",
    name: "From Patients to Profits MasterCourse™",
    brand: "PXC",
    eyebrow: "Self-Paced Digital Course",
    Icon: BookOpen,
    primaryColor: "#AEA1EA",
    oneLiner: "The complete Unified PXC System™ — distilled into a self-paced course for practices that prefer to deploy independently.",
    forWho: "Owner-operators, practice managers, and operations leads who want PXC's frameworks but want to run them themselves.",
    duration: "8 weeks · self-paced (lifetime access)",
    format: "On-demand video + workbooks + AI prompt library",
    outcomes: [
      "Every framework from the Unified PXC System™ taught in plain language",
      "Practical templates for every workflow PXC deploys in-person",
      "AI prompt library tuned for independent practice workflows",
      "Direct access to Jennifer's quarterly office hours",
    ],
    framework: { title: "Eight modules. One outcome.", items: ["The Triple Perspective lens","The Puzzle Pyramid™","The IMPACT™ Framework","AI-Fueled People-Powered PX Cycle™","Workflow deployment playbooks","AI prompt engineering for healthcare","Staff buy-in scripts","Quarterly cadence playbook"] },
    modules: [
      { n: "M1", title: "Foundations", desc: "Triple Perspective, brand archetype, and why inside-out always wins." },
      { n: "M2", title: "Diagnose the Leaks", desc: "Workflow audits, patient journey maps, leadership alignment surveys." },
      { n: "M3", title: "Engage the Team", desc: "Staff buy-in scripts, complete leadership rhythm playbook." },
      { n: "M4", title: "Educate to Excel", desc: "Training cadence, certification pathways, and feedback loops." },
      { n: "M5", title: "AI Workflow Design", desc: "Building your first AI-supported workflow from prompt → ship." },
      { n: "M6", title: "Patient Experience Architecture", desc: "Mapping every touchpoint and engineering the moments that matter." },
      { n: "M7", title: "Measurement Layer", desc: "The 10-domain operational dashboard you can run yourself." },
      { n: "M8", title: "Sustainability", desc: "Quarterly review, course-correction, and continuous improvement." },
    ],
    guarantee: "30-day money-back guarantee. Watch Module 1, run the first exercise, and if it doesn't move something inside 30 days — full refund.",
    faq: [
      { q: "How does this compare to the PX Treatment Plan™?", a: "MasterCourse teaches the same frameworks the Treatment Plan deploys in-person. Same systems, different delivery." },
      { q: "How long do I get access?", a: "Lifetime access. Plus quarterly office hours with Jennifer for active practice owners." },
    ],
  },
  "practice-professionals-playground": {
    slug: "practice-professionals-playground",
    name: "Practice Professionals Playground™ (P3)",
    brand: "PXC",
    eyebrow: "Ongoing Membership & Mastermind",
    Icon: Users,
    primaryColor: "#47d8ff",
    oneLiner: "PXC's ongoing membership for practices ready to keep evolving — group masterminds, AI updates, and direct access.",
    forWho: "Independent practice owners and operators who've completed a PXC engagement (or the MasterCourse) and want ongoing strategic support.",
    duration: "Monthly · cancel anytime",
    format: "Monthly group mastermind + private community + AI updates",
    outcomes: [
      "Two live group masterminds per month with Jennifer",
      "Private community of independent practice operators",
      "First access to every new PXC framework, prompt, and playbook",
      "Quarterly 1:1 office hours slot",
    ],
    framework: { title: "Four membership rhythms", items: ["Monthly Mastermind","Monthly AI Field Notes","Private Community","Quarterly 1:1 with Jennifer"] },
    modules: [
      { n: "Live", title: "Twice-Monthly Mastermind", desc: "Live group session — hot seats, Q&A, and case study deep dives." },
      { n: "Async", title: "Private Community", desc: "Private community space for daily questions, wins, and resource sharing." },
      { n: "Resources", title: "AI Field Notes + Prompt Library", desc: "Every new AI prompt, playbook, or implementation note Jennifer writes — first." },
      { n: "1:1", title: "Quarterly Office Hours", desc: "One private 45-minute strategy slot per quarter for every active member." },
    ],
    guarantee: "Cancel anytime. No long-term contract. If the first 30 days don't deliver one concrete improvement to your practice, full refund.",
    faq: [
      { q: "Do I need to have done another PXC engagement first?", a: "Recommended but not required. Some members join P3 directly and use it as their entry point." },
      { q: "Is the community really active?", a: "Yes — Jennifer is in it daily, and the member-to-member peer help is one of the most-praised aspects." },
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
