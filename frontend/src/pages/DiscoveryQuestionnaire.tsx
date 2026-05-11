import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Sparkles, ClipboardList, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { useSEO } from "@/lib/useSEO";

const SECTIONS = [
  {
    title: "About Your Practice",
    fields: [
      { name: "practiceName", label: "Practice Name", type: "text", required: true },
      { name: "specialty", label: "Primary Specialty", type: "select", options: ["Primary Care", "Internal Medicine", "Family Medicine", "Pediatrics", "OB-GYN", "Cardiology", "Urgent Care", "Specialty Surgery", "Concierge", "Multi-Specialty", "Other"], required: true },
      { name: "providers", label: "Number of Providers", type: "select", options: ["1", "2–4", "5–9", "10–19", "20+"], required: true },
      { name: "locations", label: "Number of Locations", type: "select", options: ["1", "2–3", "4–7", "8+"], required: true },
      { name: "state", label: "State", type: "text", required: true },
      { name: "yearsInBusiness", label: "Years in Operation", type: "select", options: ["Under 2", "2–5", "5–10", "10–20", "20+"], required: true },
    ],
  },
  {
    title: "Your Biggest Friction Points",
    fields: [
      { name: "topPainPoint", label: "Top pain point right now", type: "select", options: ["Staff turnover & burnout", "Patient retention & no-shows", "Front-desk chaos", "Documentation overload", "Owner has no time", "Inconsistent patient experience", "Revenue stagnation", "Other"], required: true },
      { name: "turnoverRate", label: "Annual staff turnover (best estimate)", type: "select", options: ["Under 15%", "15–30%", "30–50%", "50%+", "Not sure"], required: false },
      { name: "patientSat", label: "Average online review rating", type: "select", options: ["Under 3.5★", "3.5–4.0★", "4.0–4.5★", "4.5–5★", "Not tracked"], required: false },
      { name: "burnoutLevel", label: "Current owner/founder burnout (1–10)", type: "select", options: ["1–3 (manageable)", "4–6 (warning signs)", "7–8 (heavy)", "9–10 (critical)"], required: true },
    ],
  },
  {
    title: "Where You Want to Be in 12 Months",
    fields: [
      { name: "topGoal", label: "Top transformation goal", type: "select", options: ["Stabilize staff & culture", "Lift patient retention", "Implement practical AI workflows", "Buy back the owner's time", "Stay independent (avoid PE)", "Scale to new locations", "Increase profitability"], required: true },
      { name: "aiOpenness", label: "Openness to AI deployment", type: "select", options: ["Very open — already exploring", "Curious but cautious", "Skeptical but willing", "Resistant"], required: true },
      { name: "budget", label: "Realistic 12-month transformation budget", type: "select", options: ["Under $25K", "$25K–$75K", "$75K–$150K", "$150K+", "Need help defining"], required: true },
      { name: "timeline", label: "Ideal start timeline", type: "select", options: ["This week", "Within 30 days", "60–90 days", "Later this year"], required: true },
    ],
  },
  {
    title: "Your Contact Info",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "role", label: "Your Role", type: "select", options: ["Owner / Founder", "Physician-Owner", "Practice Manager / Administrator", "Operations Director", "Executive", "Other"], required: true },
      { name: "email", label: "Best Email", type: "email", required: true },
      { name: "phone", label: "Best Phone (mobile preferred)", type: "tel", required: true },
      { name: "openNotes", label: "Anything else we should know? (Optional)", type: "textarea", required: false },
    ],
  },
];

export default function DiscoveryQuestionnaire() {
  useSEO({
    title: "Discovery Questionnaire — Tell PXC About Your Practice | PXC",
    description: "Tell PXC about your practice in 4 quick sections. Jennifer Radu's team reviews every submission personally and responds within one business day.",
    canonical: "https://patientexperienceconsulting.com/discovery-questionnaire",
  });

  const [section, setSection] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-black text-white min-h-screen" data-testid="page-discovery-success">
        <section className="relative pt-20 pb-32 overflow-hidden">
          <AuroraBackdrop opacity={0.15} />
          <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
              <CheckCircle2 className="h-16 w-16 mx-auto mb-4 text-[#47d8ff]" />
              <h1 className="text-4xl font-black mb-3" style={{ fontFamily: "Nunito, sans-serif" }} data-testid="discovery-success-headline">
                You're in. <span className="text-[#47d8ff]">We've got it.</span>
              </h1>
              <p className="text-lg text-[#AEA1EA] mb-6">
                Jennifer's team personally reviews every Discovery submission. Expect a tailored response within one business day — usually faster.
              </p>
              <p className="font-quote text-[#FB0000] text-xl mb-8">Strategy is the real self-care.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="cta-bounce bg-[#FB0000] text-white font-black">
                  <Link to="/results">See Real Results <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="border-[#47d8ff] text-[#47d8ff]">
                  <Link to="/ai-readiness-score">Take AI Readiness Score™</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  const cur = SECTIONS[section];
  const progress = ((section + 1) / SECTIONS.length) * 100;

  return (
    <div className="bg-black text-white min-h-screen" data-testid="page-discovery">
      <section className="relative pt-16 pb-20 overflow-hidden">
        <AuroraBackdrop opacity={0.15} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {section === 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <Badge className="bg-[#AEA1EA]/15 text-[#AEA1EA] border border-[#AEA1EA]/40 mb-4">
                <ClipboardList className="h-3.5 w-3.5 mr-1.5" /> Discovery Questionnaire
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-black leading-[1.05] mb-3" style={{ fontFamily: "Nunito, sans-serif" }} data-testid="discovery-headline">
                Tell us about your <span className="text-[#FB0000]">practice.</span>
              </h1>
              <p className="text-[#AEA1EA] mb-1">
                Four short sections. Around 5 minutes. Jennifer's team reviews every submission personally.
              </p>
              <p className="font-quote text-[#47d8ff] text-xl">No pitch deck. No sales call ambush. Just signal.</p>
            </motion.div>
          )}

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-[#AEA1EA] mb-2">
              <span className="font-bold">{cur.title}</span>
              <span>Section {section + 1} of {SECTIONS.length}</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#47d8ff] via-[#AEA1EA] to-[#FB0000]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <motion.form
            key={section}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            onSubmit={(e) => {
              e.preventDefault();
              if (section < SECTIONS.length - 1) setSection(section + 1);
              else setSubmitted(true);
            }}
            data-ghl-form="discovery-questionnaire"
            className="space-y-5"
            data-testid={`discovery-section-${section}`}
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5" style={{ fontFamily: "Nunito, sans-serif" }}>
              {cur.title}
            </h2>

            {cur.fields.map((f) => (
              <div key={f.name}>
                <label className="block text-sm font-bold text-white mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  {f.label} {f.required && <span className="text-[#FB0000]">*</span>}
                </label>
                {f.type === "select" ? (
                  <select
                    name={f.name}
                    required={f.required}
                    className="w-full rounded-md bg-[#0F0F0F] border border-white/20 px-4 py-3 text-white focus:border-[#47d8ff] focus:outline-none"
                    data-testid={`discovery-input-${f.name}`}
                  >
                    <option value="">Select…</option>
                    {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : f.type === "textarea" ? (
                  <textarea
                    name={f.name}
                    required={f.required}
                    rows={4}
                    placeholder="Share anything that would help us prepare for our first conversation…"
                    className="w-full rounded-md bg-[#0F0F0F] border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#47d8ff] focus:outline-none"
                    data-testid={`discovery-input-${f.name}`}
                  />
                ) : (
                  <input
                    type={f.type}
                    name={f.name}
                    required={f.required}
                    className="w-full rounded-md bg-[#0F0F0F] border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#47d8ff] focus:outline-none"
                    data-testid={`discovery-input-${f.name}`}
                  />
                )}
              </div>
            ))}

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {section > 0 && (
                <Button type="button" variant="outline" onClick={() => setSection(section - 1)} className="border-white/30 text-white" data-testid="discovery-back">
                  Back
                </Button>
              )}
              <Button type="submit" className="cta-bounce bg-[#FB0000] text-white font-black flex-1" data-testid="discovery-next">
                {section < SECTIONS.length - 1 ? "Continue" : "Submit Discovery"} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.form>

          <div className="mt-10 rounded-xl border border-white/10 bg-[#0F0F0F] p-5 flex gap-3">
            <Sparkles className="h-5 w-5 text-[#47d8ff] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/80 leading-relaxed">
              Every Discovery Questionnaire is read by Jennifer Radu's team personally. You'll receive a tailored response — not an auto-sequence — within one business day. <strong className="text-[#47d8ff]">Self-Funding Guarantee — Contractual</strong> applies to every paid engagement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
