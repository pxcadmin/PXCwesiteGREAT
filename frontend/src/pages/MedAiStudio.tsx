import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Mic, Headphones, Video, BookOpen, Sparkles, Brain, Cpu, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { BeamCard } from "@/components/effects/BeamCard";
import { useSEO } from "@/lib/useSEO";

const CONTENT_PILLARS = [
  { icon: Mic, title: "MED-AI Podcast", count: "Weekly", desc: "Honest conversations with physicians, practice owners, and AI builders working at the human-machine seam of healthcare.", color: "#FB0000" },
  { icon: Video, title: "Studio Originals", count: "Monthly", desc: "Short-form, high-production videos translating AI breakthroughs into practical Monday-morning playbooks for independent practices.", color: "#47d8ff" },
  { icon: BookOpen, title: "AI Field Notes", count: "Bi-weekly", desc: "Long-form essays from Jennifer's actual implementation notebook — what worked, what failed, and what surprised her.", color: "#AEA1EA" },
  { icon: Headphones, title: "Audio Briefings", count: "Daily", desc: "10-minute morning briefings on the single most important AI-in-healthcare update — distilled to action.", color: "#FB0000" },
];

const FEATURED_EPISODES = [
  {
    n: "01",
    title: "Why 80% of Healthcare AI Pilots Quietly Die — and How to Save Yours",
    guest: "Featuring Jennifer Radu, fCAIOX",
    duration: "42 min",
    tag: "Strategy",
    color: "#FB0000",
  },
  {
    n: "02",
    title: "From Burnout to Buy-In: One Practice's 90-Day AI Transformation",
    guest: "With Practice Owner — Internal Medicine, Sarasota",
    duration: "38 min",
    tag: "Case Study",
    color: "#47d8ff",
  },
  {
    n: "03",
    title: "The Truth About Patient-Facing AI: Where It Helps, Where It Hurts",
    guest: "With Dr. M. Chen, Cardiology",
    duration: "47 min",
    tag: "Patient Experience",
    color: "#AEA1EA",
  },
  {
    n: "04",
    title: "Building Your First AI Workflow Without Hiring a Single Engineer",
    guest: "Featuring Jennifer Radu, fCAIOX",
    duration: "36 min",
    tag: "Implementation",
    color: "#FB0000",
  },
];

const STUDIO_PROMISE = [
  "Practical over promotional — every piece ships with a Monday-morning action.",
  "Independent-practice-first — no hospital-system bias, no enterprise SaaS sales pitch.",
  "AI that serves humans — never frames AI as replacement for clinical judgment or human care.",
  "Receipts attached — when we share metrics, we show the source.",
];

export default function MedAiStudio() {
  useSEO({
    title: "MED-AI Studio | PXC Media — AI in Healthcare, Decoded",
    description: "PXC's media arm. Weekly podcast, studio originals, field notes, and daily briefings — translating AI breakthroughs into practical playbooks for independent medical practices.",
    canonical: "https://patientexperienceconsulting.com/med-ai-studio",
  });

  return (
    <div className="bg-black text-white" data-testid="page-med-ai-studio">
      {/* HERO */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-white/10">
        <AuroraBackdrop opacity={0.18} />
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="/assets/ai-doc.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[#FB0000]/15 text-[#FB0000] border border-[#FB0000]/40 px-3 py-1 mb-5">
              <Cpu className="h-3.5 w-3.5 mr-1.5" /> A PXC Media Property
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] mb-5" style={{ fontFamily: "Nunito, sans-serif" }} data-testid="med-ai-headline">
              <span className="text-[#47d8ff]">MED-</span><span className="text-[#FB0000]">AI</span>
              <br />
              <span className="text-white">Studio</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#AEA1EA] leading-relaxed mb-8 max-w-3xl mx-auto">
              The independent voice translating healthcare AI for the practices actually running medicine. No enterprise jargon. No fearmongering. Just signal — for the operators, owners, and clinicians building the next decade of care.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="cta-bounce bg-[#FB0000] text-white font-black px-7 py-6" style={{ fontFamily: "Nunito, sans-serif" }} asChild data-testid="medai-cta-subscribe">
                <a href="#subscribe">Subscribe & Get Notified <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button size="lg" variant="outline" className="border-[#47d8ff] text-[#47d8ff] hover:bg-[#47d8ff]/10 font-black px-7 py-6" asChild data-testid="medai-cta-listen">
                <a href="#episodes">Browse Episodes</a>
              </Button>
            </div>
          </motion.div>

          {/* Decorative animated AI brain visualization */}
          <div className="relative max-w-4xl mx-auto mt-16">
            <div className="relative aspect-[16/6] rounded-2xl border border-[#47d8ff]/30 bg-[#0F0F0F]/80 backdrop-blur overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center gap-12">
                {[Brain, Cpu, Activity, Brain, Cpu].map((Icon, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  >
                    <Icon className="h-12 w-12" style={{ color: i % 2 ? "#47d8ff" : "#FB0000" }} />
                  </motion.div>
                ))}
              </div>
              {/* Animated connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 240" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="medaiLine" x1="0" x2="1">
                    <stop offset="0%" stopColor="#47d8ff" />
                    <stop offset="50%" stopColor="#FB0000" />
                    <stop offset="100%" stopColor="#AEA1EA" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0,120 Q200,40 400,120 T800,120"
                  fill="none"
                  stroke="url(#medaiLine)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
              </svg>
              <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.3em] font-bold text-[#AEA1EA]">
                AI · Practice · Patient · Outcome
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT PILLARS */}
      <section className="relative py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>Four formats. <span className="text-[#FB0000]">One signal.</span></h2>
            <p className="text-[#AEA1EA] max-w-2xl mx-auto">Whatever your commute, your inbox, or your attention span looks like — there's a way to plug into the studio.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTENT_PILLARS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  data-testid={`medai-pillar-${i}`}
                >
                  <div className="rounded-xl border border-white/10 bg-[#0F0F0F] p-6 h-full hover:border-white/30 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="h-8 w-8" style={{ color: c.color }} />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">{c.count}</span>
                    </div>
                    <h3 className="font-black text-xl text-white mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>{c.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED EPISODES */}
      <section id="episodes" className="relative py-20 border-y border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[#47d8ff]/15 text-[#47d8ff] border border-[#47d8ff]/40 mb-3">Featured Episodes</Badge>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: "Nunito, sans-serif" }}>Start here.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {FEATURED_EPISODES.map((ep, i) => (
              <motion.div
                key={ep.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`medai-episode-${i}`}
              >
                <BeamCard className={i % 2 === 0 ? "" : "pxc-beam-cyan"}>
                  <div className="bg-[#0F0F0F] rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="font-black text-3xl" style={{ color: ep.color, fontFamily: "Nunito, sans-serif" }}>{ep.n}</div>
                      <div className="flex-1">
                        <Badge className="text-[10px] uppercase tracking-[0.18em]" style={{ background: `${ep.color}20`, color: ep.color, borderColor: `${ep.color}50` }}>{ep.tag}</Badge>
                        <span className="text-[10px] text-white/50 ml-2">· {ep.duration}</span>
                      </div>
                    </div>
                    <h3 className="font-black text-lg text-white mb-2 leading-tight" style={{ fontFamily: "Nunito, sans-serif" }}>{ep.title}</h3>
                    <p className="text-xs text-[#AEA1EA] mb-4">{ep.guest}</p>
                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10" data-testid={`medai-listen-${i}`}>
                      Listen / Watch <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </div>
                </BeamCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL PROMISE */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-[#AEA1EA]/15 text-[#AEA1EA] border border-[#AEA1EA]/40 mb-3">Editorial Promise</Badge>
          <h2 className="text-3xl sm:text-4xl font-black mb-7" style={{ fontFamily: "Nunito, sans-serif" }}>
            Four rules we don't break.
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {STUDIO_PROMISE.map((p, i) => (
              <div key={p} className="flex gap-3 rounded-xl border border-white/10 bg-[#0F0F0F] p-5" data-testid={`medai-promise-${i}`}>
                <Sparkles className="h-5 w-5 text-[#FB0000] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/85 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE CTA */}
      <section id="subscribe" className="relative py-20 border-t border-white/10 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-10 w-10 text-[#47d8ff] mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl sm:text-5xl font-black mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>Get every drop.</h2>
          <p className="text-lg text-[#AEA1EA] mb-8">One email per week. Episode drops, field notes, and the occasional implementation cheat-sheet — straight from Jennifer's desk to yours.</p>
          {/* GHL placeholder form */}
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" data-ghl-form="medai-subscribe" onSubmit={(e) => e.preventDefault()} data-testid="medai-subscribe-form">
            <input
              type="email"
              required
              placeholder="you@yourpractice.com"
              className="flex-1 rounded-md bg-black border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#47d8ff] focus:outline-none"
              data-testid="medai-subscribe-email"
            />
            <Button type="submit" className="cta-bounce bg-[#FB0000] text-white font-black px-7 py-3" data-testid="medai-subscribe-submit">
              Subscribe
            </Button>
          </form>
          <p className="text-[10px] text-white/40 mt-3">No spam. Unsubscribe in one click. We respect inboxes.</p>
        </div>
      </section>
    </div>
  );
}
