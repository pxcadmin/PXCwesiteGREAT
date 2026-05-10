import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Mic, Calendar, MapPin, Users, Sparkles, Award, Play, Quote, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { BeamCard } from "@/components/effects/BeamCard";
import { MarqueeStrip } from "@/components/effects/MarqueeStrip";
import { useSEO } from "@/lib/useSEO";

const SIGNATURE_TALKS = [
  {
    title: "AI in Healthcare: Replace the Friction, Not the Humans",
    duration: "45–60 min keynote",
    audience: "Physician owners, practice leaders, healthcare executives",
    description: "A practical, no-fear walkthrough of how independent practices can deploy AI today — without losing the human heart of care, the trust of patients, or the buy-in of staff.",
    color: "#FB0000",
  },
  {
    title: "From Burnout to Buy-In: The Inside-Out Practice Transformation",
    duration: "45 min keynote · 90 min workshop available",
    audience: "Practice owners, managers, leadership teams",
    description: "Why every external patient experience problem is actually an internal staff experience leak — and the IMPACT Framework™ that fixes both at the same time.",
    color: "#47d8ff",
  },
  {
    title: "The Puzzle Pyramid™: Engage. Educate. Excel.",
    duration: "60 min keynote · half-day intensive available",
    audience: "Multi-site groups, healthcare associations, MGMA chapters",
    description: "Jennifer's signature framework for staff engagement, patient education, and operational excellence — taught with live case studies from real practices.",
    color: "#AEA1EA",
  },
  {
    title: "Strategy Is the Real Self-Care",
    duration: "30–45 min keynote",
    audience: "Women in healthcare leadership, founder events",
    description: "An honest, sparkly, mic-drop talk on why burnout isn't a personal failure — it's a systems failure. And what to do about it on Monday morning.",
    color: "#FB0000",
  },
];

const PAST_VENUES = [
  "MGMA Florida",
  "Healthcare AI Summit",
  "Women in Medicine Conference",
  "Independent Practice Alliance",
  "Florida Medical Association",
  "AAPC National",
  "Practice Management Institute",
  "Physicians Practice Pavilion",
  "AMA Practice Innovation Forum",
];

const ENGAGEMENT_TYPES = [
  { icon: Mic, title: "Keynote Speaking", desc: "30, 45, or 60-minute conference keynotes — virtual or in-person, anywhere in the U.S.", color: "#FB0000" },
  { icon: Users, title: "Workshops & Intensives", desc: "Half-day or full-day working sessions for leadership teams, multi-site groups, or member associations.", color: "#47d8ff" },
  { icon: Calendar, title: "AI Blueprint Days", desc: "Custom onsite or virtual deep-dives where Jennifer architects an AI roadmap for your specific practice in one day.", color: "#AEA1EA" },
  { icon: Award, title: "Panel & Podcast Guesting", desc: "AI-in-healthcare panels, founder roundtables, and podcast interviews — short-form to long-form.", color: "#FB0000" },
];

export default function Events() {
  useSEO({
    title: "Events & Speaking Engagements | PXC — Jennifer Radu, fCAIOX",
    description: "Book Jennifer Radu, fCAIOX, for keynotes, workshops, and AI Blueprint Days on AI in healthcare, practice transformation, and the Unified PXC System™.",
    canonical: "https://patientexperienceconsulting.com/events",
  });

  return (
    <div className="bg-black text-white" data-testid="page-events">
      {/* HERO */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-white/10">
        <AuroraBackdrop opacity={0.18} />
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/assets/ai-bg.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-5">
                <img src="/assets/ai-blueprint-day-dark.jpeg" alt="AI Blueprint Day by PXC" className="h-14 w-14 rounded-md object-cover border border-[#FB0000]/30" data-testid="events-logo" />
                <div>
                  <Badge className="bg-[#FB0000]/15 text-[#FB0000] border border-[#FB0000]/40 px-3 py-1" data-testid="badge-events-eyebrow">
                    <Mic className="h-3.5 w-3.5 mr-1.5" /> AI Blueprint Day™ · Speaking & Live Events
                  </Badge>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#AEA1EA] mt-1">by Patient eXperience Consulting</p>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-5" style={{ fontFamily: "Nunito, sans-serif" }} data-testid="events-headline">
                Bring <span className="text-[#FB0000]">AI Blueprint Day™</span> to your <span className="text-[#47d8ff]">stage</span> or <span className="text-[#AEA1EA]">team.</span>
              </h1>
              <p className="text-lg text-[#AEA1EA] max-w-xl leading-relaxed mb-7">
                Healthcare leaders are tired of generic AI talks delivered by people who've never touched a patient chart. Jennifer Radu, fCAIOX, brings 21+ years of in-the-trenches practice leadership and a sparkly, mic-drop delivery — packaged as keynotes, workshops, and signature AI Blueprint Day™ intensives.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="cta-bounce bg-[#FB0000] text-white font-black px-7 py-6" style={{ fontFamily: "Nunito, sans-serif" }} asChild data-testid="events-cta-book">
                  <Link href="/contact#book-speaking">Request Jennifer for Your Event <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#47d8ff] text-[#47d8ff] hover:bg-[#47d8ff]/10 font-black px-7 py-6" asChild data-testid="events-cta-topics">
                  <a href="#talks">See Signature Talks</a>
                </Button>
              </div>
            </motion.div>

            {/* Hero card with rotating glowing rings + AI Blueprint Day logo */}
            <motion.div className="relative flex items-center justify-center min-h-[480px]" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
              <motion.div
                className="absolute w-[420px] h-[360px] rounded-full pointer-events-none hero-orbit-cyan-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[330px] h-[280px] rounded-full pointer-events-none"
                style={{ border: "3px solid rgba(174,161,234,0.55)", boxShadow: "0 0 32px rgba(174,161,234,0.45)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[280px] h-[400px] rounded-2xl pointer-events-none hero-orbit-red"
                animate={{ x: [0, 8, 8, -8, -8, 0], y: [-8, -8, 8, 8, -8, -8] }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative z-10 w-[260px] h-[360px] rounded-2xl overflow-hidden bg-black flex items-center justify-center" style={{ border: "2px solid rgba(251,0,0,0.45)", boxShadow: "0 0 40px rgba(251,0,0,0.35)" }}>
                <img src="/assets/ai-blueprint-day-dark.jpeg" alt="AI Blueprint Day by PXC" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/70 backdrop-blur px-3 py-1.5 rounded-full border border-[#47d8ff]/40">
                  <Play className="h-3 w-3 text-[#FB0000]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">Speaker Reel</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE — past venues */}
      <section className="border-y border-white/10 bg-[#050505] py-6">
        <div className="text-center mb-3">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#AEA1EA]">Trusted on stages including</span>
        </div>
        <MarqueeStrip
          items={PAST_VENUES.map((v, i) => (
            <span key={i} className="text-white/70 text-sm font-bold tracking-wider" data-testid={`venue-${i}`}>{v}</span>
          ))}
        />
      </section>

      {/* SIGNATURE TALKS */}
      <section id="talks" className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-[#47d8ff]/15 text-[#47d8ff] border border-[#47d8ff]/40 mb-3">Signature Talks</Badge>
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              Four keynotes. Zero generic AI fluff.
            </h2>
            <p className="text-[#AEA1EA] max-w-2xl mx-auto">
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
                data-testid={`events-talk-${i}`}
              >
                <BeamCard className={i % 2 === 0 ? "" : "pxc-beam-cyan"}>
                  <div className="bg-[#0F0F0F] rounded-xl p-6 h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: t.color }}>Talk #{i + 1}</span>
                      <span className="text-[10px] text-white/50">·</span>
                      <span className="text-[10px] text-white/70">{t.duration}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 leading-tight" style={{ fontFamily: "Nunito, sans-serif" }}>{t.title}</h3>
                    <p className="text-sm text-white/70 mb-4 leading-relaxed">{t.description}</p>
                    <div className="border-t border-white/10 pt-3 flex items-center gap-2">
                      <Users className="h-4 w-4" style={{ color: t.color }} />
                      <span className="text-xs text-[#AEA1EA]">{t.audience}</span>
                    </div>
                  </div>
                </BeamCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT FORMATS */}
      <section className="relative py-20 border-y border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: "Nunito, sans-serif" }}>
              Four ways to bring Jennifer in.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ENGAGEMENT_TYPES.map((e, i) => {
              const Icon = e.icon;
              return (
                <div key={e.title} className="rounded-xl border border-white/10 bg-[#0F0F0F] p-6 hover:border-white/30 transition-colors" data-testid={`events-format-${i}`}>
                  <Icon className="h-7 w-7 mb-3" style={{ color: e.color }} />
                  <h3 className="font-black text-lg text-white mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>{e.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{e.desc}</p>
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
              <Badge className="bg-[#AEA1EA]/15 text-[#AEA1EA] border border-[#AEA1EA]/40 mb-3">Why Jennifer</Badge>
              <h2 className="text-3xl sm:text-4xl font-black mb-5" style={{ fontFamily: "Nunito, sans-serif" }}>
                Three perspectives. <span className="text-[#FB0000]">One voice.</span>
              </h2>
              <ul className="space-y-3">
                {[
                  "Teacher — translates AI and operations into language clinical teams can act on Monday morning.",
                  "Practice leader — 21+ years inside independent practices, including running 8 urgent-care clinics simultaneously.",
                  "Complex-care patient — lived experience that reveals the exact moments practices either earn loyalty or quietly lose it.",
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-white/85" data-testid="events-perspective-item">
                    <CheckCircle2 className="h-5 w-5 text-[#47d8ff] flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0F0F0F] p-6">
              <Quote className="h-6 w-6 text-[#FB0000] mb-3" />
              <p className="font-quote text-xl text-white/90 italic leading-snug mb-4">
                "Best healthcare AI keynote our chapter has ever booked. Jennifer doesn't just inform — she ignites. Half the room booked strategy sessions before lunch."
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#AEA1EA]">Conference Chair · MGMA Regional</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-10 w-10 text-[#FB0000] mx-auto mb-4" />
          <h2 className="text-3xl sm:text-5xl font-black mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>Ready to book the most-talked-about session of your event?</h2>
          <p className="text-lg text-[#AEA1EA] mb-8">Tell us your audience, dates, and goals — we'll respond within one business day with a tailored proposal.</p>
          <Button size="lg" className="cta-bounce bg-[#FB0000] text-white font-black text-base px-8 py-6 rounded-md" style={{ fontFamily: "Nunito, sans-serif" }} asChild data-testid="events-cta-bottom">
            <Link href="/contact#book-speaking">Request a Speaking Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
