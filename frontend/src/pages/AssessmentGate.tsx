import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Mail, User, Building2, CheckCircle2, Sparkles, Brain, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { useSEO } from "@/lib/useSEO";

export default function AssessmentGate() {
  useSEO({
    title: "Take the Practice Clarity & AI Readiness Assessment | PXC",
    description: "Get your personalized Practice Clarity & AI Readiness report. Two fields, ten minutes, one precise next move.",
    canonical: "https://patientexperienceconsulting.com/assessment",
  });

  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center" data-testid="page-assessment-success">
        <section className="relative w-full py-20 overflow-hidden">
          <AuroraBackdrop opacity={0.18} />
          <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
              <div className="relative inline-block mb-4">
                <CheckCircle2 className="h-16 w-16 text-[#47d8ff]" />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ boxShadow: "0 0 40px #47d8ff" }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <h1 className="text-4xl sm:text-5xl font-black mb-3" style={{ fontFamily: "Nunito, sans-serif" }} data-testid="assessment-success-headline">
                Check your <span className="text-[#47d8ff]">inbox.</span>
              </h1>
              <p className="text-lg text-[#AEA1EA] mb-6 leading-relaxed">
                Your private assessment link is on its way. It typically arrives in under 60 seconds. The full assessment takes about 10 minutes and your personalized report lands in your inbox the moment you finish.
              </p>
              <p className="font-quote text-2xl text-[#FB0000] mb-8">Strategy is the real self-care.</p>
              <div className="rounded-xl border border-white/10 bg-[#0F0F0F] p-6 mb-8">
                <p className="text-sm text-white/85 mb-3">
                  <strong className="text-white">While you wait — book your free 45-minute Puzzle Pyramid Strategy Session.</strong>
                </p>
                <p className="text-xs text-[#AEA1EA] leading-relaxed">
                  Members who complete the assessment AND book a Strategy Session in the same week get a tailored Pathway recommendation on the call. No upsell pressure — ever.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="cta-bounce bg-[#FB0000] text-white font-black" data-testid="assessment-success-cta-book">
                  <Link to="/contact#book-session">Book Strategy Session <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="border-[#47d8ff] text-[#47d8ff] hover:bg-[#47d8ff]/10">
                  <Link to="/results">See Real Results</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen" data-testid="page-assessment-gate">
      <section className="relative pt-16 pb-20 overflow-hidden">
        <AuroraBackdrop opacity={0.15} />
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/assets/ai-bg.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-center mb-8">
              <Badge className="bg-[#47d8ff]/15 text-[#47d8ff] border border-[#47d8ff]/40 px-3 py-1 mb-4" data-testid="assessment-eyebrow">
                <Brain className="h-3.5 w-3.5 mr-1.5" /> Practice Clarity & AI Readiness Assessment
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-black leading-[1.05] mb-4" style={{ fontFamily: "Nunito, sans-serif" }} data-testid="assessment-headline">
                Two fields. <span className="text-[#47d8ff]">One precise next move.</span>
              </h1>
              <p className="text-lg text-[#AEA1EA] leading-relaxed max-w-xl mx-auto">
                The assessment takes about 10 minutes. Your personalized report — including tier match and recommended Pathway — lands in your inbox the moment you finish.
              </p>
            </div>

            {/* GHL-wired form */}
            <form
              className="rounded-2xl border border-[#47d8ff]/40 bg-[#0F0F0F] p-7 mb-6"
              data-ghl-form="practice-clarity-assessment-gate"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              data-testid="assessment-gate-form"
              style={{ boxShadow: "0 0 40px rgba(71,216,255,0.15)" }}
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-black text-white mb-2 uppercase tracking-wider" style={{ fontFamily: "Nunito, sans-serif" }}>
                    First Name <span className="text-[#FB0000]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#AEA1EA]" />
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Jennifer"
                      className="w-full rounded-md bg-black border border-white/20 pl-10 pr-4 py-3 text-white placeholder:text-white/40 focus:border-[#47d8ff] focus:outline-none transition-colors"
                      data-testid="assessment-firstname"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-white mb-2 uppercase tracking-wider" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Work Email <span className="text-[#FB0000]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#AEA1EA]" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jennifer@yourpractice.com"
                      className="w-full rounded-md bg-black border border-white/20 pl-10 pr-4 py-3 text-white placeholder:text-white/40 focus:border-[#47d8ff] focus:outline-none transition-colors"
                      data-testid="assessment-email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-white mb-2 uppercase tracking-wider" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Practice Name <span className="text-white/40">(optional)</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#AEA1EA]" />
                    <input
                      type="text"
                      name="practiceName"
                      placeholder="Your practice"
                      className="w-full rounded-md bg-black border border-white/20 pl-10 pr-4 py-3 text-white placeholder:text-white/40 focus:border-[#47d8ff] focus:outline-none transition-colors"
                      data-testid="assessment-practicename"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="cta-bounce w-full bg-[#FB0000] text-white font-black text-base py-6"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                  data-testid="assessment-submit"
                >
                  Send Me the Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>

            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { icon: Lock, t: "Zero spam", d: "Unsubscribe in one click" },
                { icon: Sparkles, t: "Instant link", d: "Delivered in under 60 sec" },
                { icon: CheckCircle2, t: "Tier match", d: "Personalized to your stage" },
              ].map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.t} className="rounded-lg border border-white/10 bg-[#0F0F0F] p-3 flex items-start gap-2.5" data-testid={`assessment-benefit-${b.t}`}>
                    <Icon className="h-4 w-4 text-[#47d8ff] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-black text-white" style={{ fontFamily: "Nunito, sans-serif" }}>{b.t}</div>
                      <div className="text-[10px] text-[#AEA1EA]">{b.d}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
