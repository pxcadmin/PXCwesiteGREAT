import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Sparkles, Heart, Activity, AlertTriangle, ShieldCheck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { useSEO } from "@/lib/useSEO";

interface Q {
  id: string;
  domain: string;
  question: string;
  options: { label: string; score: number }[];
}

const QUESTIONS: Q[] = [
  { id: "s1", domain: "Staff Retention", question: "How would you describe your staff turnover over the last 12 months?", options: [
    { label: "Constant — we're always rehiring", score: 0 },
    { label: "Frequent — 2+ key roles turned over", score: 1 },
    { label: "Occasional — one or two losses", score: 2 },
    { label: "Stable — zero key losses", score: 3 },
  ]},
  { id: "s2", domain: "Patient Retention", question: "What percentage of patients return after their first visit?", options: [
    { label: "Under 50%", score: 0 },
    { label: "50–69%", score: 1 },
    { label: "70–84%", score: 2 },
    { label: "85%+", score: 3 },
  ]},
  { id: "s3", domain: "Front Desk Load", question: "How often does your front desk feel completely overwhelmed?", options: [
    { label: "Every single day", score: 0 },
    { label: "Most days", score: 1 },
    { label: "Some days", score: 2 },
    { label: "Rarely", score: 3 },
  ]},
  { id: "s4", domain: "Leadership Alignment", question: "How aligned is your leadership team on the practice's top 3 priorities?", options: [
    { label: "We can't even name 3 priorities", score: 0 },
    { label: "We disagree often", score: 1 },
    { label: "We mostly align with friction", score: 2 },
    { label: "Tightly aligned and reviewed monthly", score: 3 },
  ]},
  { id: "s5", domain: "Review & Reputation", question: "What's your average online review rating right now?", options: [
    { label: "Under 3.5★", score: 0 },
    { label: "3.5–4.0★", score: 1 },
    { label: "4.0–4.5★", score: 2 },
    { label: "4.5★+", score: 3 },
  ]},
  { id: "s6", domain: "Operational Clarity", question: "How clear is each role's daily/weekly/monthly cadence?", options: [
    { label: "Improvised every day", score: 0 },
    { label: "Some structure, mostly ad-hoc", score: 1 },
    { label: "Documented but loosely followed", score: 2 },
    { label: "Crystal clear and consistently run", score: 3 },
  ]},
  { id: "s7", domain: "Financial Visibility", question: "How often do owner/lead-physician see real financial dashboards?", options: [
    { label: "Yearly at tax time", score: 0 },
    { label: "Quarterly", score: 1 },
    { label: "Monthly", score: 2 },
    { label: "Weekly with KPIs", score: 3 },
  ]},
  { id: "s8", domain: "Burnout Signal", question: "On a typical week, how many staff openly complain about workload?", options: [
    { label: "Most of the team", score: 0 },
    { label: "Half the team", score: 1 },
    { label: "A few people", score: 2 },
    { label: "Almost no one", score: 3 },
  ]},
  { id: "s9", domain: "Patient Experience", question: "When was your last documented patient-experience audit?", options: [
    { label: "Never", score: 0 },
    { label: "Years ago", score: 1 },
    { label: "Within the last year", score: 2 },
    { label: "Quarterly or more often", score: 3 },
  ]},
  { id: "s10", domain: "Owner Time", question: "How many hours per week does the owner spend on tasks only they can do?", options: [
    { label: "Under 5 hrs — buried in admin", score: 0 },
    { label: "5–15 hrs", score: 1 },
    { label: "15–25 hrs", score: 2 },
    { label: "25+ hrs", score: 3 },
  ]},
];

const TIERS = [
  { min: 0, max: 10, label: "Practice in Crisis", color: "#FB0000", icon: AlertTriangle, desc: "You're firefighting. The fastest path out is the free Puzzle Pyramid™ Strategy Session — we'll identify the one fire to put out first this week." },
  { min: 11, max: 20, label: "Practice Under Strain", color: "#AEA1EA", icon: Activity, desc: "Real cracks are showing. The PX Fast Pass™ 30-day sprint or PXC IMPACT Blueprint™ moves the most painful domain inside a quarter." },
  { min: 21, max: 30, label: "Practice on Solid Ground", color: "#47d8ff", icon: ShieldCheck, desc: "You're stable — and that's exactly when most practices stall. The EXCEL Transformation Partnership™ takes stable into scaling." },
];

export default function PracticeStabilityScorecard() {
  useSEO({
    title: "Practice Stability Scorecard™ — Free Diagnostic | PXC",
    description: "Free 3-minute Practice Stability Scorecard™ — 10 questions across 10 operational domains. See exactly where your independent medical practice stands and what to fix first.",
    canonical: "https://patientexperienceconsulting.com/practice-stability-scorecard",
  });

  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const tier = TIERS.find((t) => totalScore >= t.min && totalScore <= t.max) || TIERS[0];
  const percent = Math.round((totalScore / 30) * 100);

  const onAnswer = (q: Q, score: number) => {
    const next = { ...answers, [q.id]: score };
    setAnswers(next);
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else setStep(QUESTIONS.length);
  };

  const reset = () => { setAnswers({}); setStep(-1); };

  const TierIcon = tier.icon;

  return (
    <div className="bg-black text-white min-h-screen" data-testid="page-practice-stability">
      <section className="relative pt-16 pb-20 overflow-hidden">
        <AuroraBackdrop opacity={0.15} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {step === -1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} data-testid="stability-intro">
              <Badge className="bg-[#47d8ff]/15 text-[#47d8ff] border border-[#47d8ff]/40 mb-4">
                <Heart className="h-3.5 w-3.5 mr-1.5" /> Free 3-Minute Diagnostic
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-4" style={{ fontFamily: "Nunito, sans-serif" }} data-testid="stability-headline">
                The <span className="text-[#47d8ff]">Practice Stability Scorecard™</span>
              </h1>
              <p className="text-lg text-[#AEA1EA] mb-2 leading-relaxed">
                10 questions across the 10 operational domains that quietly make or break independent medical practices.
              </p>
              <p className="font-quote text-[#FB0000] text-2xl mb-8">Strategy is the real self-care.</p>

              <div className="grid sm:grid-cols-3 gap-3 mb-8">
                {["Staff Retention","Patient Retention","Front Desk Load","Leadership Alignment","Reviews","Operational Clarity","Financial Visibility","Burnout","Patient Experience","Owner Time"].map((d) => (
                  <div key={d} className="text-xs text-white/70 px-3 py-2 rounded-md border border-white/10 bg-[#0F0F0F]" data-testid={`stability-domain-${d}`}>{d}</div>
                ))}
              </div>

              <Button size="lg" className="cta-bounce bg-[#FB0000] text-white font-black px-8 py-6 text-lg" style={{ fontFamily: "Nunito, sans-serif" }} onClick={() => setStep(0)} data-testid="stability-start">
                Start the Scorecard <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {step >= 0 && step < QUESTIONS.length && (
              <motion.div key={`sq-${step}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }} data-testid={`stability-q-${step}`}>
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-[#AEA1EA] mb-2">
                    <span className="font-bold">{QUESTIONS[step].domain}</span>
                    <span>{step + 1} / {QUESTIONS.length}</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#FB0000] via-[#AEA1EA] to-[#47d8ff]"
                      initial={{ width: 0 }}
                      animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "Nunito, sans-serif" }}>{QUESTIONS[step].question}</h2>
                <div className="space-y-3 mb-6">
                  {QUESTIONS[step].options.map((opt, i) => (
                    <button
                      key={opt.label}
                      onClick={() => onAnswer(QUESTIONS[step], opt.score)}
                      className="w-full text-left rounded-xl border-2 border-white/15 bg-[#0F0F0F] hover:border-[#FB0000] hover:bg-[#FB0000]/5 transition-all duration-200 px-5 py-4 group"
                      data-testid={`stability-option-${step}-${i}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold text-base" style={{ fontFamily: "Nunito, sans-serif" }}>{opt.label}</span>
                        <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-[#FB0000] group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <Button variant="ghost" onClick={() => setStep(step - 1)} className="text-[#AEA1EA] hover:text-white" data-testid="stability-back">
                    <ArrowLeft className="mr-1.5 h-4 w-4" /> Back
                  </Button>
                )}
              </motion.div>
            )}

            {step >= QUESTIONS.length && (
              <motion.div key="sresult" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} data-testid="stability-result">
                <Badge className="mb-4" style={{ background: `${tier.color}25`, color: tier.color, borderColor: `${tier.color}60` }}>
                  <Sparkles className="h-3.5 w-3.5 mr-1.5" /> Your Practice Stability Score
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  <TierIcon className="inline-block mr-2 h-7 w-7" style={{ color: tier.color }} />
                  <span style={{ color: tier.color }}>{tier.label}</span>
                </h2>
                <p className="text-[#AEA1EA] mb-6">Total Score: <span className="font-black text-white">{totalScore} / 30</span> ({percent}%)</p>

                <div className="relative w-48 h-48 mx-auto mb-8" data-testid="stability-gauge">
                  <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                    <circle cx="100" cy="100" r="85" stroke="#1a1a1a" strokeWidth="14" fill="none" />
                    <motion.circle
                      cx="100" cy="100" r="85"
                      stroke={tier.color}
                      strokeWidth="14"
                      strokeLinecap="round"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 85}
                      initial={{ strokeDashoffset: 2 * Math.PI * 85 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 85 * (1 - percent / 100) }}
                      transition={{ duration: 1.4, ease: "easeOut" }}
                      style={{ filter: `drop-shadow(0 0 12px ${tier.color})` }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-black text-5xl" style={{ color: tier.color, fontFamily: "Nunito, sans-serif" }}>{percent}%</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#AEA1EA]">Stability</span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0F0F0F] p-6 mb-6">
                  <h3 className="font-black text-lg text-white mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>Your Recommended Next Step</h3>
                  <p className="text-white/85 leading-relaxed">{tier.desc}</p>
                </div>

                <form className="rounded-xl border border-[#47d8ff]/40 bg-[#0F0F0F] p-5 mb-4" data-ghl-form="stability-result" onSubmit={(e) => e.preventDefault()} data-testid="stability-capture">
                  <p className="text-white font-bold mb-2 text-sm">Want the 10-domain breakdown emailed to you?</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input type="email" placeholder="you@yourpractice.com" className="flex-1 rounded-md bg-black border border-white/20 px-4 py-2 text-white placeholder:text-white/40 focus:border-[#47d8ff] focus:outline-none" data-testid="stability-email" />
                    <Button type="submit" className="bg-[#FB0000] text-white font-bold" data-testid="stability-email-submit">Email Me My Report</Button>
                  </div>
                </form>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="cta-bounce bg-[#FB0000] text-white font-black flex-1" data-testid="stability-cta-book">
                    <Link to="/contact#book-session">Book Free Strategy Session <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button variant="outline" onClick={reset} className="border-white/30 text-white" data-testid="stability-reset">
                    <RotateCcw className="mr-2 h-4 w-4" /> Retake
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
