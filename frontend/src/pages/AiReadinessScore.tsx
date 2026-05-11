import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle2, Brain, Cpu, Zap, RotateCcw } from "lucide-react";
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
  {
    id: "q1",
    domain: "AI Awareness",
    question: "Where does your leadership team currently land on AI in healthcare?",
    options: [
      { label: "We've never seriously discussed it", score: 0 },
      { label: "We've talked about it but no concrete plans", score: 1 },
      { label: "We've identified 1–2 use cases", score: 2 },
      { label: "We have an active roadmap in motion", score: 3 },
    ],
  },
  {
    id: "q2",
    domain: "Workflow Documentation",
    question: "How well documented are your current clinical & front-office workflows?",
    options: [
      { label: "Mostly in people's heads", score: 0 },
      { label: "Some SOPs, often outdated", score: 1 },
      { label: "Documented but inconsistently followed", score: 2 },
      { label: "Documented, current, and consistently followed", score: 3 },
    ],
  },
  {
    id: "q3",
    domain: "Data Hygiene",
    question: "How clean is the data inside your EHR/PMS for the last 12 months?",
    options: [
      { label: "Painfully inconsistent", score: 0 },
      { label: "Some clean fields, lots of gaps", score: 1 },
      { label: "Mostly clean with known issues", score: 2 },
      { label: "Audited and reliable", score: 3 },
    ],
  },
  {
    id: "q4",
    domain: "Staff Buy-In",
    question: "If we introduced AI tools next month, your staff would…",
    options: [
      { label: "Revolt or quietly resist", score: 0 },
      { label: "Be skeptical but willing to try", score: 1 },
      { label: "Be cautiously curious", score: 2 },
      { label: "Be excited and ready to test", score: 3 },
    ],
  },
  {
    id: "q5",
    domain: "Top Pain Point",
    question: "Which problem is bleeding the most dollars right now?",
    options: [
      { label: "Staff turnover & rehiring costs", score: 2 },
      { label: "Patient no-shows & retention drop", score: 2 },
      { label: "Front-desk overload & wait times", score: 2 },
      { label: "Documentation & charting backlog", score: 2 },
    ],
  },
  {
    id: "q6",
    domain: "Tech Stack",
    question: "What does your current tech stack look like?",
    options: [
      { label: "Just an EHR + spreadsheets", score: 0 },
      { label: "EHR + a couple add-ons", score: 1 },
      { label: "Integrated stack, room to grow", score: 2 },
      { label: "Modern, well-integrated stack", score: 3 },
    ],
  },
  {
    id: "q7",
    domain: "Leadership Time",
    question: "How many hours per week does your owner/lead-physician spend in admin work?",
    options: [
      { label: "20+ hrs/week", score: 0 },
      { label: "10–20 hrs/week", score: 1 },
      { label: "5–10 hrs/week", score: 2 },
      { label: "Under 5 hrs/week", score: 3 },
    ],
  },
  {
    id: "q8",
    domain: "Budget Reality",
    question: "What's your realistic 12-month transformation budget?",
    options: [
      { label: "Under $25K", score: 1 },
      { label: "$25K–$75K", score: 2 },
      { label: "$75K–$150K", score: 3 },
      { label: "$150K+", score: 3 },
    ],
  },
];

const TIERS = [
  { min: 0, max: 8, label: "AI Curious", color: "#AEA1EA", desc: "You're early — and that's a strategic advantage. The right next move is the free Puzzle Pyramid™ Strategy Session to map the lowest-risk first step." },
  { min: 9, max: 16, label: "AI Ready", color: "#47d8ff", desc: "You're sitting on real opportunity. The PX Fast Pass™ or PXC IMPACT Blueprint™ will likely move your top pain point in 30–90 days." },
  { min: 17, max: 24, label: "AI Accelerator", color: "#FB0000", desc: "You're ready to scale. The EXCEL Transformation Partnership™ — backed by the Self-Funding Guarantee — Contractual — is built for practices in your tier." },
];

export default function AiReadinessScore() {
  useSEO({
    title: "AI Readiness Score™ — Free Healthcare AI Assessment | PXC",
    description: "Take the free 2-minute AI Readiness Score™ assessment. 8 quick questions reveal exactly where your independent medical practice stands on AI deployment — and the precise next step.",
    canonical: "https://patientexperienceconsulting.com/ai-readiness-score",
  });

  const [step, setStep] = useState(-1); // -1 = intro, 0..7 = questions, 8 = result
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [email, setEmail] = useState("");

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const tier = TIERS.find((t) => totalScore >= t.min && totalScore <= t.max) || TIERS[0];
  const percent = Math.round((totalScore / 24) * 100);

  const onAnswer = (q: Q, score: number) => {
    const next = { ...answers, [q.id]: score };
    setAnswers(next);
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else setStep(QUESTIONS.length); // jump to result
  };

  const reset = () => { setAnswers({}); setStep(-1); };

  return (
    <div className="bg-black text-white min-h-screen" data-testid="page-ai-readiness">
      <section className="relative pt-16 pb-20 overflow-hidden">
        <AuroraBackdrop opacity={0.15} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* INTRO */}
          {step === -1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} data-testid="aireadiness-intro">
              <Badge className="bg-[#FB0000]/15 text-[#FB0000] border border-[#FB0000]/40 mb-4">
                <Brain className="h-3.5 w-3.5 mr-1.5" /> Free 2-Minute Assessment
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-4" style={{ fontFamily: "Nunito, sans-serif" }} data-testid="aireadiness-headline">
                The <span className="text-[#FB0000]">AI Readiness Score™</span>
              </h1>
              <p className="text-lg text-[#AEA1EA] mb-2 leading-relaxed">
                8 quick questions. 120 seconds. One precise next step for your independent medical practice.
              </p>
              <p className="font-quote text-[#47d8ff] text-2xl mb-8">No fluff. No funnel sequence. Just signal.</p>

              <div className="grid sm:grid-cols-3 gap-3 mb-8">
                {[
                  { icon: Zap, t: "Instant Score", d: "See your tier the moment you finish" },
                  { icon: Cpu, t: "Custom Next Step", d: "Tailored to your exact tier" },
                  { icon: CheckCircle2, t: "Zero Spam", d: "Score-first. Email later (your choice)." },
                ].map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.t} className="rounded-xl border border-white/10 bg-[#0F0F0F] p-4">
                      <Icon className="h-5 w-5 text-[#47d8ff] mb-2" />
                      <h3 className="font-black text-sm text-white mb-1" style={{ fontFamily: "Nunito, sans-serif" }}>{b.t}</h3>
                      <p className="text-xs text-white/70">{b.d}</p>
                    </div>
                  );
                })}
              </div>

              <Button size="lg" className="cta-bounce bg-[#FB0000] text-white font-black px-8 py-6 text-lg" style={{ fontFamily: "Nunito, sans-serif" }} onClick={() => setStep(0)} data-testid="aireadiness-start">
                Start the Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          )}

          {/* QUESTIONS */}
          <AnimatePresence mode="wait">
            {step >= 0 && step < QUESTIONS.length && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                data-testid={`aireadiness-question-${step}`}
              >
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-[#AEA1EA] mb-2">
                    <span className="font-bold">{QUESTIONS[step].domain}</span>
                    <span>{step + 1} / {QUESTIONS.length}</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#47d8ff] via-[#AEA1EA] to-[#FB0000]"
                      initial={{ width: 0 }}
                      animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "Nunito, sans-serif" }} data-testid={`aireadiness-q-text-${step}`}>
                  {QUESTIONS[step].question}
                </h2>

                <div className="space-y-3 mb-6">
                  {QUESTIONS[step].options.map((opt, i) => (
                    <button
                      key={opt.label}
                      onClick={() => onAnswer(QUESTIONS[step], opt.score)}
                      className="w-full text-left rounded-xl border-2 border-white/15 bg-[#0F0F0F] hover:border-[#47d8ff] hover:bg-[#47d8ff]/5 transition-all duration-200 px-5 py-4 group"
                      data-testid={`aireadiness-option-${step}-${i}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold text-base" style={{ fontFamily: "Nunito, sans-serif" }}>{opt.label}</span>
                        <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-[#47d8ff] group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  ))}
                </div>

                {step > 0 && (
                  <Button variant="ghost" onClick={() => setStep(step - 1)} className="text-[#AEA1EA] hover:text-white" data-testid="aireadiness-back">
                    <ArrowLeft className="mr-1.5 h-4 w-4" /> Back
                  </Button>
                )}
              </motion.div>
            )}

            {/* RESULT */}
            {step >= QUESTIONS.length && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                data-testid="aireadiness-result"
              >
                <Badge className="mb-4" style={{ background: `${tier.color}25`, color: tier.color, borderColor: `${tier.color}60` }}>
                  <Sparkles className="h-3.5 w-3.5 mr-1.5" /> Your AI Readiness Score
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  You're <span style={{ color: tier.color }}>{tier.label}</span>.
                </h2>
                <p className="text-[#AEA1EA] mb-6">Total Score: <span className="font-black text-white">{totalScore} / 24</span> ({percent}%)</p>

                {/* Animated radial gauge */}
                <div className="relative w-48 h-48 mx-auto mb-8" data-testid="aireadiness-gauge">
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
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#AEA1EA]">Readiness</span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0F0F0F] p-6 mb-6">
                  <h3 className="font-black text-lg text-white mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>Your Recommended Next Step</h3>
                  <p className="text-white/85 leading-relaxed">{tier.desc}</p>
                </div>

                {/* GHL email capture placecard */}
                <form className="rounded-xl border border-[#47d8ff]/40 bg-[#0F0F0F] p-5 mb-4" data-ghl-form="ai-readiness-result" onSubmit={(e) => e.preventDefault()} data-testid="aireadiness-capture">
                  <p className="text-white font-bold mb-2 text-sm">Want your full domain-by-domain breakdown emailed to you?</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="you@yourpractice.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 rounded-md bg-black border border-white/20 px-4 py-2 text-white placeholder:text-white/40 focus:border-[#47d8ff] focus:outline-none"
                      data-testid="aireadiness-email"
                    />
                    <Button type="submit" className="bg-[#FB0000] text-white font-bold" data-testid="aireadiness-email-submit">Email Me My Report</Button>
                  </div>
                </form>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="cta-bounce bg-[#FB0000] text-white font-black flex-1" data-testid="aireadiness-cta-book">
                    <Link to="/contact#book-session">Book Free Strategy Session <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button variant="outline" onClick={reset} className="border-white/30 text-white" data-testid="aireadiness-reset">
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
