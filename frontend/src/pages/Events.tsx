import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Mic, Calendar, Users, Sparkles, Award, Quote, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/lib/useSEO";

// AI Blueprint Day brand palette — gold/black/grey/white ONLY
const GOLD = "#fca746";
const CHARCOAL = "#1a1a1a";
const GREY = "#4a4a4a";
const SILVER = "#C0C0C0";

const SIGNATURE_TALKS = [
  {
    title: "AI in Healthcare: Replace the Friction, Not the Humans",
    duration: "45–60 min keynote",
    audience: "Physician owners, practice leaders, healthcare executives",
    description: "A practical, no-fear walkthrough of how independent practices can deploy AI today — without losing the human heart of care, the trust of patients, or the buy-in of staff.",
  },
  {
    title: "From Burnout to Buy-In: The Inside-Out Practice Transformation",
    duration: "45 min keynote · 90 min workshop available",
    audience: "Practice owners, managers, leadership teams",
    description: "Why every external patient experience problem is actually an internal staff experience leak — and the IMPACT System™ that fixes both at the same time.",
  },
  {
    title: "The Puzzle Pyramid™: Engage. Educate. Excel.",
    duration: "60 min keynote · half-day intensive available",
    audience: "Multi-site groups, healthcare associations, MGMA chapters",
    description: "Jennifer's signature framework for staff engagement, patient education, and operational excellence — taught with live case studies from real practices.",
  },
  {
    title: "Strategy Is the Real Self-Care",
    duration: "30–45 min keynote",
    audience: "Women in healthcare leadership, founder events",
    description: "An honest, sparkly, mic-drop talk on why burnout isn't a personal failure — it's a systems failure. And what to do about it on Monday morning.",
  },
];

const PAST_VENUES = [
  "MGMA Florida", "Healthcare AI Summit", "Women in Medicine Conference",
  "Independent Practice Alliance", "Florida Medical Association", "AAPC National",
  "Practice Management Institute", "Physicians Practice Pavilion", "AMA Practice Innovation Forum",
];

const ENGAGEMENT_TYPES = [
  { icon: Mic, title: "Keynote Speaking", desc: "30, 45, or 60-minute conference keynotes — virtual or in-person, anywhere in the U.S." },
  { icon: Users, title: "Workshops & Intensives", desc: "Half-day or full-day working sessions for leadership teams, multi-site groups, or member associations." },
  { icon: Calendar, title: "AI Blueprint Days™", desc: "Custom onsite or virtual deep-dives where Jennifer architects an AI roadmap for your specific practice in one day." },
  { icon: Award, title: "Panel & Podcast Guesting", desc: "AI-in-healthcare panels, founder roundtables, and podcast interviews — short-form to long-form." },
];

export default function Events() {
  useSEO({
    title: "AI Blueprint Day™ — Events & Speaking Engagements | PXC",
    description: "Book Jennifer Radu, fCAIOX, for keynotes, workshops, and AI Blueprint Day™ intensives on AI in healthcare and practice transformation.",
    canonical: "https://patientexperienceconsulting.com/events",
  });

  return (
    <div style={{ background: CHARCOAL, color: "#FFFFFF" }} data-testid="page-events">
      {/* HERO — Jennifer presenting bg + gold overlay */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b" style={{ borderColor: SILVER + "20" }}>
        {/* Background image with yellow-gold semi-transparent overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/assets/jen-presenting.png" alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${GOLD}cc 0%, ${GOLD}aa 50%, ${CHARCOAL}ee 100%)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${CHARCOAL}33 0%, ${CHARCOAL}99 100%)` }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single prominent logo */}
          <div className="flex justify-center mb-6">
            <motion.img
              src="/assets/ai-blueprint-day-dark.jpeg"
              alt="AI Blueprint Day by PXC"
              className="h-32 sm:h-40 w-auto rounded-2xl"
              style={{ boxShadow: `0 0 40px ${GOLD}66, 0 0 0 2px ${GOLD}` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              data-testid="events-hero-logo"
            />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-center max-w-4xl mx-auto">
            <Badge className="px-3 py-1 mb-5 font-bold tracking-wider" style={{ background: GOLD, color: CHARCOAL, borderColor: GOLD }} data-testid="events-eyebrow">
              <Mic className="h-3.5 w-3.5 mr-1.5" /> AI Blueprint Day™ · Speaking & Live Events
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-5" style={{ fontFamily: "Nunito, sans-serif", color: "#FFFFFF", textShadow: `0 4px 20px ${CHARCOAL}` }} data-testid="events-headline">
              Bring <span style={{ color: GOLD }}>AI Blueprint Day™</span> to your stage, boardroom, or team.
            </h1>
            <p className="text-lg leading-relaxed mb-7 max-w-2xl mx-auto" style={{ color: "#FFFFFF" }}>
              Healthcare leaders are tired of generic AI talks delivered by people who've never touched a patient chart. Jennifer Radu, fCAIOX, brings 21+ years of in-the-trenches practice leadership — packaged as keynotes, workshops, and signature AI Blueprint Day™ intensives.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="font-black px-7 py-6 transition-all duration-200 hover:-translate-y-1"
                style={{ background: GOLD, color: CHARCOAL, fontFamily: "Nunito, sans-serif", boxShadow: `0 0 24px ${GOLD}66` }}
                asChild
                data-testid="events-cta-book"
              >
                <Link to="/contact#book-speaking">Request Jennifer for Your Event <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="font-black px-7 py-6 hover:bg-white/10" style={{ borderColor: "#FFFFFF", color: "#FFFFFF", fontFamily: "Nunito, sans-serif" }} asChild data-testid="events-cta-topics">
                <a href="#talks">See Signature Talks</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BRING AI BLUEPRINT DAY TO YOUR ORGANIZATION — structural section after hero */}
      <section className="relative py-20 lg:py-24 overflow-hidden border-b" style={{ background: "#FFF", borderColor: GOLD + "60" }} aria-label="Bring AI Blueprint Day to Your Organization">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 20% 20%, ${GOLD}22, transparent 55%), radial-gradient(ellipse at 80% 80%, ${GOLD}22, transparent 55%)` }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Badge className="px-3 py-1 mb-4 font-bold tracking-wider" style={{ background: GOLD, color: CHARCOAL, borderColor: GOLD }} data-testid="events-bring-eyebrow">
                Bring AI Blueprint Day™ to Your Organization
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] mb-5" style={{ fontFamily: "Nunito, sans-serif", color: CHARCOAL }} data-testid="events-bring-headline">
                One day. Your entire leadership team. <span style={{ color: "#b87510" }}>One operational blueprint.</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: GREY }}>
                AI Blueprint Day™ is Jennifer Radu's signature on-site (or virtual) intensive — designed for healthcare associations, multi-site practice groups, and any organization ready to give its leaders one focused day of AI architecture, frameworks, and real-time playbook authoring.
              </p>
              <p className="text-sm leading-relaxed mb-7" style={{ color: GREY }}>
                Walk in with overwhelm and competing priorities. Walk out with a fully costed AI roadmap, a leadership rhythm calendar tuned to your team, and two priority workflows scaffolded for pilot the week after.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="font-black px-7 py-6 transition-all duration-200 hover:-translate-y-1"
                  style={{ background: CHARCOAL, color: GOLD, fontFamily: "Nunito, sans-serif", boxShadow: `0 0 24px ${GOLD}66` }}
                  asChild
                  data-testid="events-bring-cta-primary"
                >
                  <Link to="/contact#book-blueprint">Bring AI Blueprint Day to Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-black px-7 py-6"
                  style={{ borderColor: CHARCOAL, color: CHARCOAL, fontFamily: "Nunito, sans-serif" }}
                  asChild
                  data-testid="events-bring-cta-secondary"
                >
                  <Link to="/services/blueprint-workshops">See Full Workshops Details</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { n: "01", t: "Pre-Day Discovery", d: "30-min intake call to map your organization's specific friction points and goals before Jennifer arrives." },
                  { n: "02", t: "Morning · Architecture", d: "Half-day deep-dive into your operational landscape — frameworks taught, leadership rhythm modeled, AI readiness audited." },
                  { n: "03", t: "Afternoon · Authoring", d: "Working session where your team co-authors two priority workflows, with Jennifer hands-on in the room." },
                  { n: "04", t: "Day After Delivery", d: "Documented blueprint, costed roadmap, and 90-day implementation calendar — all in your team's hands by EOB the next day." },
                ].map((m) => (
                  <div key={m.n} className="rounded-xl p-5 border-2 transition-all duration-300 hover:-translate-y-1" style={{ background: CHARCOAL, borderColor: GOLD }} data-testid={`events-bring-step-${m.n}`}>
                    <div className="text-3xl font-black mb-2" style={{ color: GOLD, fontFamily: "Nunito, sans-serif" }}>{m.n}</div>
                    <h3 className="text-lg font-black text-white mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>{m.t}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: SILVER }}>{m.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl p-4" style={{ background: GOLD + "22", border: `1px solid ${GOLD}` }}>
                <p className="text-sm font-black mb-1" style={{ color: CHARCOAL, fontFamily: "Nunito, sans-serif" }}>Guarantee</p>
                <p className="text-xs leading-relaxed" style={{ color: CHARCOAL }}>
                  If your team doesn't walk away with a documented, actionable playbook ready to deploy the week after — Jennifer continues at no charge until they do.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE — past venues */}
      <section className="border-y py-6" style={{ background: CHARCOAL, borderColor: SILVER + "20" }}>
        <div className="text-center mb-3">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold" style={{ color: SILVER, fontFamily: "JetBrains Mono, monospace" }}>Trusted on stages including</span>
        </div>
        <div className="overflow-hidden">
          <div className="pxc-marquee-track">
            {[...PAST_VENUES, ...PAST_VENUES].map((v, i) => (
              <span key={i} className="mx-8 text-sm font-bold tracking-wider flex-shrink-0" style={{ color: GOLD, fontFamily: "Nunito, sans-serif" }} data-testid={`venue-${i}`}>
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE TALKS */}
      <section id="talks" className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-3 px-3 py-1 font-bold tracking-wider" style={{ background: GOLD + "20", color: GOLD, borderColor: GOLD + "60" }}>Signature Talks</Badge>
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ fontFamily: "Nunito, sans-serif", color: "#FFFFFF" }}>
              Four keynotes. <span style={{ color: GOLD }}>Zero generic AI fluff.</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: SILVER }}>
              Each talk is customized to your audience, venue, and time slot — but always delivered with the same in-the-trenches credibility that made Jennifer the AI authority for independent healthcare.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SIGNATURE_TALKS.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl p-6 border-2 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#000", borderColor: GOLD + "40", boxShadow: `0 0 0 1px ${GOLD}20` }}
                data-testid={`events-talk-${i}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold px-2 py-1 rounded" style={{ color: CHARCOAL, background: GOLD, fontFamily: "JetBrains Mono, monospace" }}>Talk {String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[11px] flex items-center gap-1" style={{ color: SILVER }}>
                    <Clock className="h-3 w-3" /> {t.duration}
                  </span>
                </div>
                <h3 className="text-xl font-black mb-3 leading-tight" style={{ fontFamily: "Nunito, sans-serif", color: "#FFFFFF" }}>{t.title}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "#FFFFFF" + "cc" }}>{t.description}</p>
                <div className="border-t pt-3 flex items-center gap-2" style={{ borderColor: SILVER + "30" }}>
                  <Users className="h-4 w-4" style={{ color: GOLD }} />
                  <span className="text-xs" style={{ color: SILVER }}>{t.audience}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT FORMATS */}
      <section className="relative py-20 border-y" style={{ background: "#000", borderColor: SILVER + "20" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: "Nunito, sans-serif", color: "#FFFFFF" }}>
              Four ways to bring <span style={{ color: GOLD }}>Jennifer in.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ENGAGEMENT_TYPES.map((e, i) => {
              const Icon = e.icon;
              return (
                <div
                  key={e.title}
                  className="rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1"
                  style={{ background: CHARCOAL, borderColor: SILVER + "30" }}
                  data-testid={`events-format-${i}`}
                >
                  <Icon className="h-7 w-7 mb-3" style={{ color: GOLD }} />
                  <h3 className="font-black text-lg mb-2" style={{ fontFamily: "Nunito, sans-serif", color: "#FFFFFF" }}>{e.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#FFFFFF" + "cc" }}>{e.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY JENNIFER */}
      <section className="relative py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-3 px-3 py-1 font-bold tracking-wider" style={{ background: GOLD + "20", color: GOLD, borderColor: GOLD + "60" }}>Why Jennifer</Badge>
              <h2 className="text-3xl sm:text-4xl font-black mb-5" style={{ fontFamily: "Nunito, sans-serif", color: "#FFFFFF" }}>
                Three perspectives. <span style={{ color: GOLD }}>One voice.</span>
              </h2>
              <ul className="space-y-3">
                {[
                  "Teacher — translates AI and operations into language clinical teams can act on Monday morning.",
                  "Practice leader — 21+ years inside independent practices, including running 8 urgent-care clinics simultaneously.",
                  "Complex-care patient — lived experience that reveals the exact moments practices either earn loyalty or quietly lose it.",
                ].map((line) => (
                  <li key={line} className="flex gap-3" style={{ color: "#FFFFFF" }} data-testid="events-perspective-item">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
                    <span className="text-sm leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-6 border" style={{ background: "#000", borderColor: GOLD + "40" }}>
              <Quote className="h-6 w-6 mb-3" style={{ color: GOLD }} />
              <p className="text-xl italic leading-snug mb-4" style={{ color: "#FFFFFF", fontFamily: "La Belle Aurore, cursive" }}>
                "Best healthcare AI keynote our chapter has ever booked. Jennifer doesn't just inform — she ignites. Half the room booked strategy sessions before lunch."
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: SILVER, fontFamily: "JetBrains Mono, monospace" }}>Conference Chair · MGMA Regional</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t" style={{ background: "#000", borderColor: GOLD + "30" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-10 w-10 mx-auto mb-4" style={{ color: GOLD }} />
          <h2 className="text-3xl sm:text-5xl font-black mb-4" style={{ fontFamily: "Nunito, sans-serif", color: "#FFFFFF" }}>
            Ready to book the most-talked-about session of your event?
          </h2>
          <p className="text-lg mb-8" style={{ color: SILVER }}>
            Tell us your audience, dates, and goals — we'll respond within one business day with a tailored proposal.
          </p>
          <Button
            size="lg"
            className="font-black px-8 py-6 transition-all duration-200 hover:-translate-y-1"
            style={{ background: GOLD, color: CHARCOAL, fontFamily: "Nunito, sans-serif", boxShadow: `0 0 24px ${GOLD}66` }}
            asChild
            data-testid="events-cta-bottom"
          >
            <Link to="/contact#book-speaking">Request a Speaking Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
