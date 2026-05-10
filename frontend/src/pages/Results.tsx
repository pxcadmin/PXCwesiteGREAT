import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Heart, Zap, Award, CheckCircle2, Activity, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { BeamCard } from "@/components/effects/BeamCard";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { useSEO } from "@/lib/useSEO";

const HEADLINE_STATS = [
  { value: 326, suffix: "+", label: "Providers Supported", color: "#FB0000", icon: Users },
  { value: 38, suffix: "%", label: "Avg. Turnover Reduction", color: "#47d8ff", icon: TrendingUp },
  { value: 41, suffix: "%", label: "Patient Satisfaction Lift", color: "#AEA1EA", icon: Heart },
  { value: 21, suffix: "+", label: "Years In-Practice", color: "#FB0000", icon: Award },
];

const CASE_STUDIES = [
  {
    practice: "Multi-Site Urgent Care Group",
    region: "Central Florida · 8 clinics",
    before: "82% staff turnover · 2.1★ patient reviews · $480K annual rehiring spend",
    after: "29% turnover · 4.7★ reviews · $312K reclaimed in year one",
    metric: "153% revenue lift",
    color: "#FB0000",
    quote: "Jennifer didn't hand us a binder and disappear. She was in our break room, on our phones, and in every staff meeting. Our team finally believes in something again.",
    person: "Practice Owner · Family Medicine + Urgent Care",
  },
  {
    practice: "Independent Specialty Practice",
    region: "Sarasota County, FL",
    before: "Front desk burnout · 11-day appointment lag · No-show rate 22%",
    after: "AI-supported intake · 2-day average lag · No-show rate 6%",
    metric: "$214K saved",
    color: "#47d8ff",
    quote: "We were two months from closing the practice. The Unified PXC System™ literally saved us — and our patients felt it within weeks.",
    person: "Physician-Owner · Cardiology",
  },
  {
    practice: "Boutique Pediatric Group",
    region: "Hillsborough County, FL",
    before: "Manual scheduling chaos · Staff working unpaid OT · 3.4★ reviews",
    after: "AI-assisted workflows · 0 unpaid OT · 4.9★ reviews",
    metric: "67% time reclaimed",
    color: "#AEA1EA",
    quote: "I got my evenings back. My team got their dignity back. And our families noticed before our metrics did.",
    person: "Practice Manager · Pediatrics",
  },
  {
    practice: "Multi-Provider Internal Medicine",
    region: "Palm Beach County, FL",
    before: "Patient retention 58% · Two providers considering selling to PE",
    after: "Patient retention 89% · Practice independent and scaling",
    metric: "Practice saved",
    color: "#FB0000",
    quote: "We almost sold to private equity. Jennifer showed us a third path — and it worked. We're independent, profitable, and proud.",
    person: "Physician-Owner · Internal Medicine",
  },
  {
    practice: "Concierge OB-GYN Practice",
    region: "Broward County, FL",
    before: "Inconsistent patient experience · Manual chart prep eating 2 hrs/day",
    after: "Standardized PX rhythms · AI chart prep · 22 hrs/week reclaimed",
    metric: "$184K profit unlock",
    color: "#47d8ff",
    quote: "The IMPACT™ Framework gave my team language to talk about patient experience like clinicians talk about medicine. It changed everything.",
    person: "Founding Physician · OB-GYN",
  },
  {
    practice: "Multi-Specialty Group",
    region: "Orange County, FL",
    before: "Leadership misalignment · Three department heads quit in one quarter",
    after: "Unified leadership rhythm · Zero department-head churn for 18 months",
    metric: "Stability restored",
    color: "#AEA1EA",
    quote: "Our leadership team finally rows in the same direction. That alone is worth the entire engagement.",
    person: "CEO · Multi-Specialty Group",
  },
];

export default function Results() {
  useSEO({
    title: "Results — Real Practice Transformation Outcomes | PXC",
    description: "Documented turnover reduction, patient satisfaction lift, and revenue recovery across 326+ providers. See the before/after metrics from independent medical practices that deployed the Unified PXC System™.",
    canonical: "https://patientexperienceconsulting.com/results",
  });

  return (
    <div className="bg-black text-white" data-testid="page-results">
      {/* HERO */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-white/10">
        <AuroraBackdrop opacity={0.15} />
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/assets/ai-bg.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="bg-[#47d8ff]/15 text-[#47d8ff] border border-[#47d8ff]/40 px-3 py-1 mb-5" data-testid="badge-results-eyebrow">
              <Activity className="h-3.5 w-3.5 mr-1.5" /> The Receipts
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] max-w-4xl mb-5" style={{ fontFamily: "Nunito, sans-serif" }} data-testid="results-headline">
              Numbers Don't Lie. <span className="text-[#FB0000]">Neither Do Our Practices.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#AEA1EA] max-w-3xl leading-relaxed mb-8">
              Every transformation is documented, measured, and contractually backed by our Self-Funding Guarantee. Here's what happens when independent practices deploy the Unified PXC System™ — pulled directly from real engagements.
            </p>
          </motion.div>

          {/* Headline stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {HEADLINE_STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative rounded-xl border border-white/10 bg-[#0F0F0F] p-5 overflow-hidden"
                  data-testid={`results-headline-stat-${i}`}
                >
                  <Icon className="h-5 w-5 mb-3" style={{ color: s.color }} />
                  <div className="font-black text-4xl stat-glow" style={{ color: s.color, fontFamily: "Nunito, sans-serif" }}>
                    <AnimatedCounter target={s.value} />{s.suffix}
                  </div>
                  <div className="text-xs text-white/70 mt-1">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
              Documented Practice Transformations
            </h2>
            <p className="text-[#AEA1EA] max-w-2xl mx-auto">
              Names anonymized for client confidentiality. Metrics verified from accounting, HRIS, and patient experience platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <motion.div
                key={cs.practice}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`results-case-${i}`}
              >
                <BeamCard className={i % 2 === 1 ? "pxc-beam-cyan" : ""}>
                  <div className="bg-[#0F0F0F] rounded-xl p-6 h-full">
                    <Badge className="text-[10px] uppercase tracking-[0.18em] font-bold mb-3" style={{ background: `${cs.color}20`, color: cs.color, borderColor: `${cs.color}50` }}>
                      {cs.metric}
                    </Badge>
                    <h3 className="text-xl font-black text-white mb-1" style={{ fontFamily: "Nunito, sans-serif" }}>{cs.practice}</h3>
                    <p className="text-xs text-[#AEA1EA] mb-4">{cs.region}</p>
                    <div className="space-y-3 mb-5">
                      <div className="rounded-md bg-black/60 border border-white/10 p-3">
                        <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#FB0000] mb-1">Before</div>
                        <p className="text-sm text-white/80">{cs.before}</p>
                      </div>
                      <div className="rounded-md bg-black/60 border border-[#47d8ff]/20 p-3">
                        <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#47d8ff] mb-1">After</div>
                        <p className="text-sm text-white/80">{cs.after}</p>
                      </div>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <Quote className="h-4 w-4 mb-2" style={{ color: cs.color }} />
                      <p className="font-quote text-base text-white/90 italic leading-snug mb-2">"{cs.quote}"</p>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#AEA1EA] font-bold">{cs.person}</p>
                    </div>
                  </div>
                </BeamCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — what makes results repeatable */}
      <section className="relative py-20 lg:py-24 border-y border-white/10 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[#FB0000]/15 text-[#FB0000] border border-[#FB0000]/40 mb-3">Why Results Repeat</Badge>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: "Nunito, sans-serif" }}>
              The Self-Funding Guarantee — <span className="text-[#FB0000]">Contractual.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "Track every dollar", d: "Documented savings from turnover, reclaimed physician hours, and operational efficiency are tracked from day one." },
              { t: "Six-month threshold", d: "If documented savings don't exceed your investment within 6 months — we keep working at no charge until they do." },
              { t: "In writing, every time", d: "Every engagement contract includes the guarantee. Every metric is third-party verifiable. Zero exceptions." },
            ].map((p) => (
              <div key={p.t} className="rounded-xl border border-white/10 bg-[#0F0F0F] p-6" data-testid={`results-guarantee-${p.t}`}>
                <CheckCircle2 className="h-6 w-6 text-[#47d8ff] mb-3" />
                <h3 className="font-black text-lg text-white mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>{p.t}</h3>
                <p className="text-sm text-white/70">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="h-10 w-10 text-[#FB0000] mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl sm:text-5xl font-black mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>
            Your numbers are next.
          </h2>
          <p className="text-lg text-[#AEA1EA] mb-8">
            Book a free Puzzle Pyramid™ Strategy Session. We'll show you the exact dollars your practice is leaking — and the precise next step to recover them.
          </p>
          <Button size="lg" className="cta-bounce bg-[#FB0000] text-white font-black text-base px-8 py-6 rounded-md" style={{ fontFamily: "Nunito, sans-serif" }} asChild data-testid="results-cta-book">
            <Link href="/contact#book-session">Book My Free Strategy Session <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
