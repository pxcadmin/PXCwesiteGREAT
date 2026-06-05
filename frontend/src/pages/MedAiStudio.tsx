import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Mic, Headphones, Video, BookOpen, Sparkles, Brain, PlayCircle, Calendar, Tv, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { BeamCard } from "@/components/effects/BeamCard";
import { useSEO } from "@/lib/useSEO";

const SHOW_PILLARS = [
  { icon: PlayCircle, title: "Long-Form Episodes", schedule: "Tuesdays", desc: "30–50 minute conversations with physicians, practice owners, and AI builders working at the human-machine seam of healthcare." },
  { icon: Video, title: "Studio Cuts", schedule: "Thursdays", desc: "8–15 minute high-production episodes translating AI breakthroughs into practical Monday-morning playbooks for independent practices." },
  { icon: Headphones, title: "Audio Podcast", schedule: "Both drops, audio-first", desc: "Available wherever you listen — Spotify, Apple, Amazon Music, Overcast — for the commute, the walk, the in-between." },
  { icon: BookOpen, title: "Studio Field Notes", schedule: "Bi-weekly newsletter", desc: "Long-form essays from Jennifer's actual implementation notebook — what worked, what failed, and what surprised her." },
];

const FEATURED_EPISODES = [
  { n: "01", title: "The AI Conversation Medicine Deserves", duration: "42 min", tag: "Premiere", description: "Why every healthcare AI conversation has been wrong until now — and what the operators, owners, and clinicians actually need to hear.", thumbnail: "/assets/medai-thumb-1.png" },
  { n: "02", title: "Why 80% of Healthcare AI Pilots Quietly Die", duration: "38 min", tag: "Strategy", description: "An autopsy of the silent failures — and the three deployment patterns that survive past day 90.", thumbnail: null },
  { n: "03", title: "From Burnout to Buy-In in 90 Days", duration: "47 min", tag: "Case Study", description: "One independent practice's documented transformation — featuring the practice owner, in their own words.", thumbnail: null },
  { n: "04", title: "Building Your First AI Workflow Without an Engineer", duration: "36 min", tag: "Implementation", description: "The exact prompts, tools, and human-in-the-loop checkpoints to ship your first AI workflow this quarter.", thumbnail: null },
];

const TUNE_IN_REASONS = [
  { icon: Brain, title: "Practical over promotional", desc: "Every drop ships with a Monday-morning action — never an enterprise SaaS pitch in disguise." },
  { icon: Sparkles, title: "Independent-practice first", desc: "No hospital-system bias. No PE-rollup cheerleading. Built for the practices actually running medicine." },
  { icon: PlayCircle, title: "AI that serves humans", desc: "We never frame AI as a replacement for clinical judgment or human care. Tools serve teams, not the other way around." },
  { icon: Tv, title: "Receipts attached", desc: "When we share a metric, we show the source. When we run a case study, the practice owner tells it themselves." },
];

const PLATFORMS = [
  "YouTube", "Spotify", "Apple Podcasts", "Amazon Music", "Overcast", "RSS",
];

export default function MedAiStudio() {
  useSEO({
    title: "The MED-AI Studio | Florida's Healthcare AI Channel — Jennifer N. Radu",
    description: "PXC's media arm. Twice-weekly episodes, studio originals, and field notes — translating AI breakthroughs into practical playbooks for independent medical practices.",
    canonical: "https://patientexperienceconsulting.com/med-ai-studio",
  });

  return (
    <div className="bg-black text-white" data-testid="page-med-ai-studio">
      {/* HERO — banner image dominant + CTA */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-white/10">
        <AuroraBackdrop opacity={0.15} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="bg-[#FB0000]/15 text-[#FB0000] border border-[#FB0000]/40 px-3 py-1 mb-5" data-testid="medai-eyebrow">
              <Mic className="h-3.5 w-3.5 mr-1.5" /> A PXC Media Property
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-4" style={{ fontFamily: "Nunito, sans-serif" }} data-testid="medai-headline">
              The <span className="text-[#FB0000]">AI conversation</span> medicine <span className="text-[#47d8ff]">deserves.</span>
            </h1>
            <p className="text-lg text-[#AEA1EA] leading-relaxed mb-2">
              The MED-AI Studio is Florida's healthcare AI channel — hosted by Jennifer N. Radu, fCAIOX. Built for the operators, owners, and clinicians who refuse to be left behind by AI but refuse to lose the human heart of care doing it.
            </p>
            <p className="font-quote text-[#47d8ff] text-xl mt-3">Powered by AI. Driven by People. Designed for Impact.</p>
          </div>

          {/* Banner image — full bleed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-[#FB0000]/30"
            style={{ boxShadow: "0 0 50px rgba(251,0,0,0.25), 0 0 0 1px rgba(71,216,255,0.2)" }}
            data-testid="medai-banner"
          >
            <img src="/assets/medai-banner.png" alt="The MED-AI Studio — Jennifer Radu — New Videos Tuesdays & Thursdays" className="w-full h-auto" loading="eager" />
          </motion.div>

          {/* Schedule + CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#47d8ff]/40 bg-[#47d8ff]/10">
              <Calendar className="h-4 w-4 text-[#47d8ff]" />
              <span className="text-sm font-bold text-[#47d8ff]" style={{ fontFamily: "Nunito, sans-serif" }}>New Videos · Tuesdays & Thursdays</span>
            </div>
            <Button size="lg" className="cta-bounce bg-[#FB0000] text-white font-black px-7 py-6" style={{ fontFamily: "Nunito, sans-serif" }} asChild data-testid="medai-cta-subscribe">
              <a href="#subscribe">Subscribe & Get Notified <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button size="lg" variant="outline" className="border-[#47d8ff] text-[#47d8ff] hover:bg-[#47d8ff]/10 font-black px-7 py-6" asChild data-testid="medai-cta-watch">
              <a href="#episodes">Watch Episode 01</a>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY TUNE IN */}
      <section className="relative py-20 lg:py-24 border-b border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[#47d8ff]/15 text-[#47d8ff] border border-[#47d8ff]/40 mb-3">Why Tune In</Badge>
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              Four reasons this isn't <span className="text-[#FB0000]">another AI podcast.</span>
            </h2>
            <p className="text-[#AEA1EA] max-w-2xl mx-auto">
              The MED-AI Studio is the only channel built by — and for — independent medical practice operators. No Silicon Valley jargon. No fearmongering. Just signal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TUNE_IN_REASONS.map((r, i) => {
              const Icon = r.icon;
              const colors = ["#FB0000", "#47d8ff", "#AEA1EA", "#FB0000"];
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-xl border border-white/10 bg-[#0F0F0F] p-6 hover:border-white/30 transition-colors"
                  data-testid={`medai-reason-${i}`}
                >
                  <Icon className="h-7 w-7 mb-3" style={{ color: colors[i] }} />
                  <h3 className="font-black text-lg text-white mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>{r.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{r.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SHOW PILLARS */}
      <section className="relative py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: "Nunito, sans-serif" }}>
              Four formats. <span className="text-[#FB0000]">One signal.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SHOW_PILLARS.map((c, i) => {
              const Icon = c.icon;
              const colors = ["#FB0000", "#47d8ff", "#AEA1EA", "#FB0000"];
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
                      <Icon className="h-8 w-8" style={{ color: colors[i] }} />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">{c.schedule}</span>
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
            <Badge className="bg-[#FB0000]/15 text-[#FB0000] border border-[#FB0000]/40 mb-3">Now Streaming</Badge>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: "Nunito, sans-serif" }}>Start here.</h2>
          </div>

          {/* Hero episode */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6 mb-8 rounded-2xl overflow-hidden border-2 border-[#FB0000]/40 bg-[#0F0F0F]"
            style={{ boxShadow: "0 0 40px rgba(251,0,0,0.2)" }}
            data-testid="medai-featured-episode"
          >
            <div className="relative">
              <img src="/assets/medai-thumb-1.png" alt="Episode 01 — The AI Conversation Medicine Deserves" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur px-3 py-1.5 rounded-full border border-[#FB0000]/40">
                <PlayCircle className="h-4 w-4 text-[#FB0000]" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">Premiere · 42 min</span>
              </div>
            </div>
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <Badge className="bg-[#47d8ff]/15 text-[#47d8ff] border border-[#47d8ff]/40 w-fit mb-3">Episode 01</Badge>
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 leading-tight" style={{ fontFamily: "Nunito, sans-serif" }}>
                The <span className="text-[#47d8ff]">AI Conversation</span> <span className="text-[#FB0000]">Medicine</span> Deserves
              </h3>
              <p className="text-sm text-white/70 mb-5 leading-relaxed">
                Why every healthcare AI conversation has been wrong until now — and what the operators, owners, and clinicians actually need to hear. Featuring Jennifer Radu, fCAIOX, in studio.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="cta-bounce bg-[#FB0000] text-white font-black" data-testid="medai-watch-ep01">
                  <PlayCircle className="mr-2 h-4 w-4" /> Watch Now
                </Button>
                <Button variant="outline" className="border-[#47d8ff] text-[#47d8ff]" data-testid="medai-listen-ep01">
                  <Headphones className="mr-2 h-4 w-4" /> Listen
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-10">
            <p className="text-sm text-[#AEA1EA]">More episodes drop every Tuesday & Thursday — subscribe below to get every new release delivered the moment it goes live.</p>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="relative py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#AEA1EA] mb-5">Available everywhere</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {PLATFORMS.map((p) => (
              <span key={p} className="px-4 py-2 rounded-full bg-[#0F0F0F] border border-white/10 text-white text-sm font-bold" data-testid={`medai-platform-${p}`}>
                <Rss className="inline h-3 w-3 mr-1.5 text-[#47d8ff]" />{p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BRIGHT SPOTLIGHT — image-with-overlay (red→lilac) for MED-AI Studio */}
      <section className="relative py-20 lg:py-24 overflow-hidden" aria-label="MED-AI Spotlight">
        <div className="absolute inset-0 z-0">
          <img src="/assets/ai-doc.jpg" alt="" className="w-full h-full object-cover" loading="lazy" aria-hidden />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(251,0,0,0.74) 0%, rgba(174,161,234,0.78) 50%, rgba(251,0,0,0.74) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white text-[#0a0a0a] border border-white mb-4 font-bold tracking-wider px-3 py-1">Why MED-AI Studio Exists</Badge>
          <h2 className="text-3xl sm:text-5xl font-black mb-5 text-white" style={{ fontFamily: "Nunito, sans-serif", textShadow: "0 4px 16px rgba(0,0,0,0.5)" }}>
            The independent voice <span className="text-[#fff8dc]">medicine actually needs.</span>
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed mb-6 font-semibold" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
            Built by operators, for operators. No Silicon Valley jargon. No enterprise SaaS sales pitches. No AI fearmongering. Just signal — translated for the practices actually running medicine.
          </p>
          <p className="font-quote text-2xl text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>"AI that serves humans — never replaces them."</p>
        </div>
      </section>

      {/* SUBSCRIBE CTA */}
      <section id="subscribe" className="relative py-20 border-t border-white/10 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-10 w-10 text-[#47d8ff] mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl sm:text-5xl font-black mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>Get every drop.</h2>
          <p className="text-lg text-[#AEA1EA] mb-8">
            One email per week. Episode drops, studio field notes, and the occasional implementation cheat-sheet — straight from Jennifer's desk to yours.
          </p>
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
