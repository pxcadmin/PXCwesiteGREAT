import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useSEO, breadcrumbJsonLd, howToJsonLd, SITE_URL } from "@/lib/useSEO";
import { AnswerCapsule } from "@/components/effects/AnswerCapsule";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { BeamCard } from "@/components/effects/BeamCard";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { SectionDivider } from "@/components/effects/SectionDivider";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  CheckCircle2, ArrowRight, Star, Check, X, ChevronDown, ChevronUp,
  Shield, Award, Brain, Users, Target, Zap, Clock, TrendingUp,
  BookOpen, Cpu, MessageSquare, BarChart3, Flame, Heart, RefreshCw,
  Lock, Phone, Mail, Play, Calendar, Mic, Building2, Layers,
  FileText, Search, Lightbulb, Workflow, GraduationCap, Bot, Sparkles
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import twoFemaleDocs from "@assets/TWO_FEMALE_DOCS_AT_TABLE_SMILING_AND_WORKING_1775066184335.jpg";
import jenniferHeadshot from "@assets/red_blazer_1765984670936.png";
import stageSpeechImage from "@assets/giving_a_live_speech_with_logo_in_background_1775065364094.png";
import threeStaffLaughing from "@assets/THREE_MED_STAFF_LAUGHNING_1765985348106.jpg";

const NAV_ITEMS = [
  { id: "overview", label: "01 Overview" },
  { id: "assessment", label: "02 Assessment" },
  { id: "impact", label: "03 IMPACT Blueprint" },
  { id: "excel", label: "04 EXCEL Partnership" },
  { id: "playground", label: "05 Playground" },
  { id: "blueprint-day", label: "06 AI Blueprint Day™" },
];

const faqData = [
  {
    q: "What exactly is the fCAIOX role — and why does it matter?",
    a: "fCAIOX stands for Fractional Chief AI Experience Officer. Jennifer Radu serves as an outsourced C-suite partner embedded in your practice's strategy — not a vendor you manage, not a consultant who hands you a report. She holds executive-level accountability for transformation outcomes and does not exit until results are documented. Most practices cannot afford a full-time Chief AI Officer. The fCAIOX model gives you that level of expertise and accountability at a fraction of the cost."
  },
  {
    q: "What is the Self-Funding Guarantee and is it real?",
    a: "It is contractual — not a marketing promise. Documented savings from reduced staff turnover, reclaimed billable physician hours, and operational efficiency gains WILL exceed your total investment within 6 months of the IMPACT Blueprint™ or EXCEL Partnership™ engagement. If documented savings do not exceed the fee, PXC continues working at no additional charge until they do. Every dollar is tracked, documented, and measured against the total investment."
  },
  {
    q: "What does the Practice Clarity & AI Readiness Assessment™ include?",
    a: "The Assessment is a dual-purpose diagnostic — a full practice evaluation AND an AI readiness evaluation in one engagement. You receive a 10-domain AI Readiness Score™, a dollar-specific Lost Revenue & Wasted Time Report (your actual numbers, not industry averages), a custom AI Integration Opportunity Map with 10–15 specific use cases for your practice, and a Medical Practice AI Governance Starter Kit. Jennifer personally analyzes every finding. You leave with complete clarity — or you receive a full refund."
  },
  {
    q: "Do we have to start with the Assessment before the IMPACT Blueprint™ or EXCEL Partnership™?",
    a: "The Assessment is included in both the IMPACT Blueprint™ and EXCEL Partnership™ engagements — it is completed before the engagement formally begins. Starting with the standalone Assessment is ideal if you want complete clarity before committing to a larger engagement. Either path ensures you never enter a transformation engagement without a documented diagnostic foundation."
  },
  {
    q: "How is PXC different from hiring an AI vendor or a traditional consultant?",
    a: "Traditional consultants know culture but don't build AI. AI vendors build tools but don't understand how a medical practice actually runs. PXC is the only firm that brings both — 21+ years of human-centered healthcare expertise combined with custom AI builds, governance frameworks, and contractual accountability. There is no other engagement model that does all of this in a single engagement with a single point of accountability."
  },
  {
    q: "What AI tools does PXC actually build — and who owns them?",
    a: "AI builds are always custom to your Diagnosis findings — not off-the-shelf software. Examples include AI ambient documentation setup, intelligent call triage systems, no-show recovery automation, morning huddle generators, patient communication hubs, and custom GPTs for your specific workflows. Your practice owns everything built during the engagement. PXC builds it, trains your team on it, and ensures governance compliance — you keep it permanently."
  },
  {
    q: "Does PXC work with practices outside of Florida?",
    a: "Yes — PXC serves clients nationwide. The Assessment and IMPACT Blueprint™ are fully available virtually for any US-based practice. EXCEL Partnership™ includes quarterly on-site visits and is available nationally by arrangement. The AI Blueprint Day™ Workshop is available for associations, hospital systems, and conferences nationwide."
  },
  {
    q: "What is the Practice Professionals Playground™ and who is it for?",
    a: "The Playground is a private monthly membership community for practice managers, office managers, physician owners, and healthcare team leads who want to stay ahead on AI — without the cost of a full engagement. Members get early access to every AI tool and GPT Jennifer builds, monthly AI office hours, done-for-you templates, community of peers, monthly training, and hot seat coaching. The founding member rate is $99/month (locked permanently) vs the standard $197/month."
  },
  {
    q: "What is the AI Blueprint Day™ and how is it different from a keynote?",
    a: "The AI Blueprint Day™ is a hands-on, customized working session — not a generic AI keynote. Participants leave with an actionable AI roadmap, a custom AI Integration Opportunity Map for the group, and a 90-Day Implementation Roadmap. Jennifer brings 21+ years of practice management, her patient perspective (6 surgeries, extended hospitalizations), and her educator background to a session where organizations leave with a plan, not just inspiration."
  },
];

const tierItemBase =
  "flex-1 h-auto py-2 px-3 rounded-lg text-sm font-bold border bg-white/5 text-white/70 border-white/10 hover:bg-white/5 hover:text-white/70 toggle-elevate data-[state=on]:toggle-elevated";

const tierItemCyan = `${tierItemBase} data-[state=on]:bg-[#47d8ff] data-[state=on]:text-black data-[state=on]:border-[#47d8ff]`;

const tierItemRed = `${tierItemBase} data-[state=on]:bg-[#FB0000] data-[state=on]:text-white data-[state=on]:border-[#FB0000]`;

const tierGroupClass = "flex w-full justify-stretch gap-3";

function ImpactCalculator() {
  const [monthlyRate, setMonthlyRate] = useState(8500);
  const [duration, setDuration] = useState(3);
  const [option, setOption] = useState<"A" | "B">("A");

  const total = monthlyRate * duration;
  const deposit = option === "A" ? total * 0.5 : total;
  const remaining = option === "A" ? total * 0.5 : 0;
  const remainingMonths = duration - 1;
  const monthlyPayment = remainingMonths > 0 ? remaining / remainingMonths : 0;
  const discountedTotal = option === "B" ? Math.round(total * 0.85) : total;

  return (
    <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
      <CardContent className="p-6">
      <p className="text-[#47d8ff] text-xs font-bold uppercase tracking-widest mb-5">Payment Calculator — IMPACT Blueprint™</p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-white/70 text-xs font-semibold mb-2 block">Monthly Rate</label>
          <ToggleGroup
            type="single"
            value={String(monthlyRate)}
            onValueChange={(v) => v && setMonthlyRate(Number(v))}
            className={tierGroupClass}
          >
            {[8500, 10500, 12500].map(rate => (
              <ToggleGroupItem
                key={rate}
                value={String(rate)}
                aria-label={`Monthly rate $${rate.toLocaleString()}`}
                className={tierItemCyan}
                data-testid={`calc-rate-${rate}`}
              >
                ${rate.toLocaleString()}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div>
          <label className="text-white/70 text-xs font-semibold mb-2 block">Duration</label>
          <ToggleGroup
            type="single"
            value={String(duration)}
            onValueChange={(v) => v && setDuration(Number(v))}
            className={tierGroupClass}
          >
            {[3, 4].map(d => (
              <ToggleGroupItem
                key={d}
                value={String(d)}
                aria-label={`${d} months`}
                className={tierItemCyan}
                data-testid={`calc-duration-${d}`}
              >
                {d} months
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div>
          <label className="text-white/70 text-xs font-semibold mb-2 block">Payment Option</label>
          <ToggleGroup
            type="single"
            value={option}
            onValueChange={(v) => v && setOption(v as "A" | "B")}
            className={tierGroupClass}
          >
            <ToggleGroupItem
              value="A"
              aria-label="Option A — Monthly"
              className={tierItemCyan}
              data-testid="calc-option-a"
            >
              Option A — Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="B"
              aria-label="Option B — Full Pay"
              className={tierItemCyan}
              data-testid="calc-option-b"
            >
              Option B — Full Pay
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-5 space-y-3 border border-white/10">
        <div className="flex justify-between text-sm">
          <span className="text-white/60">Monthly Rate</span>
          <span className="text-white font-bold">${monthlyRate.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-white/60">Duration</span>
          <span className="text-white font-bold">{duration} months</span>
        </div>
        {option === "A" ? (
          <>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Deposit at Signing (50%)</span>
              <span className="text-[#47d8ff] font-bold">${deposit.toLocaleString()}</span>
            </div>
            {remainingMonths > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Remaining Monthly ({remainingMonths})</span>
                <span className="text-[#47d8ff] font-bold">${Math.round(monthlyPayment).toLocaleString()}/mo</span>
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-between text-sm">
            <span className="text-white/60">15% Discount Applied</span>
            <span className="text-[#47d8ff] font-bold">-${Math.round(total * 0.15).toLocaleString()}</span>
          </div>
        )}
        <div className="border-t border-white/10 pt-3 flex justify-between">
          <span className="text-white font-bold">Total Investment</span>
          <span className="text-white font-black text-lg">${(option === "B" ? discountedTotal : total).toLocaleString()}</span>
        </div>
      </div>
      <p className="text-white/30 text-xs mt-3 text-center">Extension months available at 30% off original rate.</p>
      </CardContent>
    </Card>
  );
}

function ExcelCalculator() {
  const [monthlyRate, setMonthlyRate] = useState(13500);
  const [option, setOption] = useState<"A" | "B">("A");

  const duration = 12;
  const total = monthlyRate * duration;
  const deposit = option === "A" ? total * 0.5 : total;
  const remaining = option === "A" ? total * 0.5 : 0;
  const remainingMonths = duration - 1;
  const monthlyPayment = remainingMonths > 0 ? remaining / remainingMonths : 0;
  const discountPct = option === "B" ? 0.175 : 0;
  const discountedTotal = option === "B" ? Math.round(total * (1 - discountPct)) : total;

  return (
    <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
      <CardContent className="p-6">
      <p className="text-[#FB0000] text-xs font-bold uppercase tracking-widest mb-5">Payment Calculator — EXCEL Partnership™</p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-white/70 text-xs font-semibold mb-2 block">Monthly Rate</label>
          <ToggleGroup
            type="single"
            value={String(monthlyRate)}
            onValueChange={(v) => v && setMonthlyRate(Number(v))}
            className={tierGroupClass}
          >
            {[13500, 15500, 17500].map(rate => (
              <ToggleGroupItem
                key={rate}
                value={String(rate)}
                aria-label={`Monthly rate $${rate.toLocaleString()}`}
                className={tierItemRed}
                data-testid={`excel-rate-${rate}`}
              >
                ${rate.toLocaleString()}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div>
          <label className="text-white/70 text-xs font-semibold mb-2 block">Duration</label>
          <div className={tierGroupClass}>
            <div
              data-testid="excel-duration-12mo"
              aria-label="Duration 12 months"
              className="flex-1 py-2 px-3 rounded-lg text-sm font-bold border bg-[#FB0000] text-white border-[#FB0000] text-center toggle-elevate toggle-elevated"
            >
              12 months
            </div>
          </div>
        </div>

        <div>
          <label className="text-white/70 text-xs font-semibold mb-2 block">Payment Option</label>
          <ToggleGroup
            type="single"
            value={option}
            onValueChange={(v) => v && setOption(v as "A" | "B")}
            className={tierGroupClass}
          >
            <ToggleGroupItem
              value="A"
              aria-label="Option A — Monthly"
              className={tierItemRed}
              data-testid="excel-option-a"
            >
              Option A — Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="B"
              aria-label="Option B — Full Pay"
              className={tierItemRed}
              data-testid="excel-option-b"
            >
              Option B — Full Pay
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-5 space-y-3 border border-white/10">
        <div className="flex justify-between text-sm">
          <span className="text-white/60">Monthly Rate</span>
          <span className="text-white font-bold">${monthlyRate.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-white/60">Duration</span>
          <span className="text-white font-bold">12 months</span>
        </div>
        {option === "A" ? (
          <>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Deposit at Signing (50%)</span>
              <span className="text-[#FB0000] font-bold">${deposit.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Remaining Monthly ({remainingMonths})</span>
              <span className="text-[#FB0000] font-bold">${Math.round(monthlyPayment).toLocaleString()}/mo</span>
            </div>
          </>
        ) : (
          <div className="flex justify-between text-sm">
            <span className="text-white/60">15–20% Discount Applied</span>
            <span className="text-[#FB0000] font-bold">-${Math.round(total * discountPct).toLocaleString()}</span>
          </div>
        )}
        <div className="border-t border-white/10 pt-3 flex justify-between">
          <span className="text-white font-bold">Total Investment</span>
          <span className="text-white font-black text-lg">${(option === "B" ? discountedTotal : total).toLocaleString()}</span>
        </div>
      </div>
      <p className="text-white/30 text-xs mt-3 text-center">Extension months available at 30% off. Most practices renew.</p>
      </CardContent>
    </Card>
  );
}

export default function Services() {
  useSEO({
    title: "Services & Offer Stack | Patient eXperience Consulting (PXC) — AI-Powered Medical Practice Solutions in Bradenton, FL",
    description: "Explore PXC's full offer stack: Practice Clarity & AI Readiness Assessment™, PXC IMPACT Blueprint™, EXCEL Transformation Partnership™, Practice Professionals Playground™, and AI Blueprint Day™. AI-powered medical practice consulting backed by the Self-Funding Guarantee — Contractual: documented savings exceed your investment within 6 months, in writing. Founded by Jennifer Radu, fCAIOX, in Bradenton, FL. Serving Sarasota, Manatee County, all 16 Central + Southern Florida counties — and nationwide.",
    path: "/services",
    ogImage: `${SITE_URL}/og/services.jpg`,
    keywords: "medical practice consulting services, Practice Clarity & AI Readiness Assessment, PXC IMPACT Blueprint, EXCEL Transformation Partnership, Practice Professionals Playground, AI Blueprint Day, Self-Funding Guarantee Contractual, healthcare AI integration, medical practice management Florida, patient experience services, Bradenton FL medical practice consulting, Sarasota healthcare consultant, Manatee County medical practice AI, Central Florida medical consulting, Southern Florida healthcare consulting, Jennifer Radu fCAIOX",
    jsonLd: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
      howToJsonLd(
        "How to Transform an Independent Medical Practice with the Unified PXC System™",
        "The five-step PXC engagement journey — Diagnosis, IMPACT Blueprint™, EXCEL Partnership™, Practice Professionals Playground™, and AI Blueprint Day™ — that takes an independent medical practice from reactive operations to AI-powered, people-led excellence. Led by Jennifer Radu, fCAIOX, and backed by the Self-Funding Guarantee — Contractual.",
        [
          {
            name: "Diagnosis — Practice Clarity & AI Readiness Assessment™",
            text: "Begin with a dual-purpose diagnostic that evaluates your practice operations AND your AI readiness in one engagement. You receive a 10-domain AI Readiness Score™, a dollar-specific Lost Revenue & Wasted Time Report based on your actual numbers, a custom AI Integration Opportunity Map with 10–15 use cases for your practice, and a Medical Practice AI Governance Starter Kit. Available 1- or 2-day virtual or 1- to 3-day onsite, with a Clarity Guarantee — full refund if it does not deliver clarity.",
            url: "/services#assessment",
          },
          {
            name: "IMPACT Blueprint™ — 3–4 Month Fractional Chief AI Experience Officer Engagement",
            text: "Engage Jennifer Radu as your Fractional Chief AI Experience Officer (fCAIOX) for 3–4 months at $8,500–$12,500/month. The engagement includes 2–3 custom AI tool / GPT / automation builds tailored to Diagnosis findings, an AI Champions Program, an AI Governance Framework setup, a Monthly AI Experience Scorecard, and core transformation deliverables across leadership, culture, and operations. Backed by the Self-Funding Guarantee — Contractual: documented savings exceed your investment within 6 months, in writing.",
            url: "/services#impact",
          },
          {
            name: "EXCEL Transformation Partnership™ — 12-Month Embedded Transformation",
            text: "Continue with the full 12-month embedded engagement at $13,500–$17,500/month. Jennifer deploys the PXC AI Experience OS into your practice's existing tools (EHR, Slack/Teams, scheduling), builds the AI orchestration layer for your specific workflows, and serves as your accountable C-suite partner for the full year. Includes quarterly on-site visits and is backed by the same Self-Funding Guarantee — Contractual.",
            url: "/services#excel",
          },
          {
            name: "Practice Professionals Playground™ — Ongoing Monthly Membership",
            text: "Sustain the transformation with a private monthly community for practice managers, office managers, physician owners, and team leads. Members get early access to every AI tool and GPT Jennifer builds, monthly AI office hours, done-for-you templates, monthly training, and hot seat coaching. Founding member rate $99/month (locked permanently) vs. $197/month standard.",
            url: "/services#playground",
          },
          {
            name: "AI Blueprint Day™ — Hands-On Workshop for Groups & Associations",
            text: "Bring the methodology to your association, hospital system, or conference with a customized one-day working session. Participants leave with a custom AI Integration Opportunity Map for the group and a 90-Day Implementation Roadmap — not a generic AI keynote. Available nationwide.",
            url: "/services#blueprint-day",
          },
        ]
      ),
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "PXC Offer Stack",
        itemListElement: [
          { "@type": "Service", name: "Practice Clarity & AI Readiness Assessment™", provider: { "@id": `${SITE_URL}/#organization` }, serviceType: "Medical Practice Diagnostic + AI Readiness Evaluation" },
          { "@type": "Service", name: "PXC IMPACT Blueprint™", provider: { "@id": `${SITE_URL}/#organization` }, serviceType: "Fractional fCAIOX Strategic Transformation" },
          { "@type": "Service", name: "EXCEL Transformation Partnership™", provider: { "@id": `${SITE_URL}/#organization` }, serviceType: "Comprehensive Practice Overhaul with Self-Funding Guarantee" },
          { "@type": "Service", name: "Practice Professionals Playground™", provider: { "@id": `${SITE_URL}/#organization` }, serviceType: "Healthcare Professional Community" },
          { "@type": "Service", name: "AI Blueprint Day™", provider: { "@id": `${SITE_URL}/#organization` }, serviceType: "AI Integration Workshop" },
        ],
      },
    ],
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex flex-col overflow-x-hidden">

      {/* ===== HERO ===== */}
      <section className="relative min-h-[72vh] bg-black flex items-center overflow-hidden" aria-label="Services Hero">
        <div className="absolute inset-0">
          <img src={twoFemaleDocs} alt="" className="w-full h-full object-cover opacity-55" aria-hidden loading="eager" fetchPriority="high" />
          {/* Dark gradient stays on the LEFT for copy legibility; image shows through on the RIGHT */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 35%, rgba(0,0,0,0.30) 65%, rgba(0,0,0,0.05) 100%)" }} />
        </div>
        <AuroraBackdrop opacity={0.1} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Breadcrumbs
              className="mb-5"
              items={[{ label: "Services", href: "/services" }]}
            />
            <Badge className="bg-[#FB0000]/15 text-[#FB0000] border border-[#FB0000]/30 text-xs font-bold px-4 py-1.5 mb-6">
              PXC Offer Stack — The Complete System
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Traditional consulting meets{" "}
              <span className="text-[#47d8ff]">custom AI builds.</span>
            </h1>
            <p className="text-xl text-[#AEA1EA] leading-relaxed mb-4 max-w-2xl font-semibold" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Leadership development meets governance frameworks.
            </p>
            <p className="text-base text-white/70 leading-relaxed mb-6 max-w-2xl">
              This is the only complete solution for independent medical practices in Bradenton, Sarasota, Manatee County, and across Central + Southern Florida — and nationwide — that want to transform culture, operations, and patient experience while compounding those gains with AI.
            </p>

            {/* Direct Answer capsule (above the fold) */}
            <div className="border-l-4 border-[#47d8ff] bg-[#47d8ff]/10 rounded-r-xl p-5 mb-6 max-w-2xl">
              <p className="text-[#47d8ff] font-extrabold uppercase tracking-widest mb-2 text-xs">Direct Answer</p>
              <p className="text-white/85 text-sm leading-relaxed">
                <strong className="text-white">What's included in PXC's complete medical practice transformation system?</strong>{" "}
                Five integrated offerings led by Jennifer Radu, fCAIOX: the <strong className="text-[#47d8ff]">Practice Clarity &amp; AI Readiness Assessment™</strong> (diagnostic + 10-domain AI Readiness Score™), the <strong className="text-[#47d8ff]">PXC IMPACT Blueprint™</strong> (3–4 month fractional Chief AI Experience Officer engagement), the <strong className="text-[#47d8ff]">EXCEL Transformation Partnership™</strong> (12 months, backed by the Self-Funding Guarantee — Contractual), the <strong className="text-[#47d8ff]">Practice Professionals Playground™</strong> ($99/mo founding-member community), and the <strong className="text-[#47d8ff]">AI Blueprint Day™</strong> workshop. Built for independent practices in Bradenton, Sarasota, Manatee County, and the 16 Central + Southern Florida counties PXC serves — plus nationwide.
              </p>
            </div>

            {/* Self-Funding Guarantee banner removed per content decision */}

            <div className="flex flex-wrap gap-4">
              <MagneticButton>
                <Button
                  className="cta-bounce bg-[#FB0000] text-white font-black text-base px-8 py-6"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                  asChild
                  data-testid="hero-cta-assessment"
                >
                  <Link href="/contact">
                    Start With the Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <Button
                variant="outline"
                size="lg"
                className="cta-bounce-lilac border-white bg-[#AEA1EA]/20 text-white font-black text-base px-8 py-6"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                onClick={() => scrollTo("overview")}
                data-testid="hero-cta-overview"
              >
                See the Full System
              </Button>
            </div>
            <p className="text-white/35 text-xs mt-4">Jennifer Radu — Fractional Chief AI Experience Officer (fCAIOX)</p>

            <div className="mt-10 max-w-2xl">
              <AnswerCapsule
                jsonLdId="services-aeo"
                question="How much does patient experience consulting for medical practices cost — and what's included?"
                answer="Patient eXperience Consulting (PXC) offers a full offer stack across five tiers with transparent pricing: (1) Practice Clarity & AI Readiness Assessment™ — a paid diagnostic + AI readiness evaluation; (2) PXC IMPACT Blueprint™ — fractional Chief AI Experience Officer (fCAIOX) strategic transformation over 6 months ($2K–$5K total); (3) EXCEL Transformation Partnership™ — comprehensive practice overhaul ($5K–$15K/month) backed by the Self-Funding Guarantee — Contractual: documented savings exceed your investment within 6 months, in writing; (4) Practice Professionals Playground™ community ($197/mo); and (5) AI Blueprint Day™ — a one-day AI integration workshop. Every engagement is led by Jennifer Radu, fCAIOX, and serves independent medical practices in Central & Southern Florida and nationwide."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== STICKY OFFER NAVIGATION ===== */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur border-b border-white/10" aria-label="Offer Navigation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide gap-0">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`flex-shrink-0 px-4 py-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${activeSection === id ? "border-[#47d8ff] text-[#47d8ff]" : "border-transparent text-white/50 hover:text-white/80"}`}
                data-testid={`nav-${id}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== OVERVIEW SECTION ===== */}
      <section id="overview" className="py-20 bg-black border-b border-white/5" aria-label="The Complete Journey">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#47d8ff] text-sm font-bold uppercase tracking-widest mb-3">The Journey</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Five Offerings. One Complete System.
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Each offering is valuable on its own. Together, they form the only end-to-end AI + culture transformation system built specifically for medical practices.
            </p>
          </div>

          {/* Journey flow */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-14">
            {[
              { step: "01", label: "Diagnosis", sub: "Assessment", color: "#47d8ff", icon: Search, anchor: "assessment" },
              { step: "02", label: "IMPACT", sub: "3–4 months", color: "#AEA1EA", icon: Zap, anchor: "impact" },
              { step: "03", label: "EXCEL", sub: "12 months", color: "#FB0000", icon: TrendingUp, anchor: "excel" },
              { step: "04", label: "Playground", sub: "Ongoing", color: "#47d8ff", icon: Users, anchor: "playground" },
              { step: "05", label: "AI Blueprint Day", sub: "Entry / Event", color: "#AEA1EA", icon: Mic, anchor: "blueprint-day" },
            ].map(({ step, label, sub, color, icon: Icon, anchor }, i) => (
              <div key={step} className="relative">
                <CursorGlow className="h-full block">
                <BeamCard cyan={color !== "#FB0000"} className="h-full">
                  <button
                    onClick={() => scrollTo(anchor)}
                    className="w-full h-full flex flex-col items-center p-5 rounded-xl bg-black/85 hover-elevate transition-all text-center"
                    data-testid={`journey-step-${step}`}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${color}20`, border: `1.5px solid ${color}50` }}>
                      <Icon className="h-5 w-5" style={{ color }} />
                    </div>
                    <div className="text-white/40 text-xs font-bold mb-0.5">STEP {step}</div>
                    <div className="font-black text-white text-sm mb-0.5" style={{ fontFamily: 'Nunito, sans-serif' }}>{label}</div>
                    <div className="text-xs" style={{ color }}>{sub}</div>
                  </button>
                </BeamCard>
                </CursorGlow>
                {i < 4 && (
                  <div className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-white/25 text-xl font-bold">→</div>
                )}
              </div>
            ))}
          </div>

          {/* Self-Funding Guarantee callout */}
          <BeamCard cyan>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="pxc-halo-pulse"
          >
            <Card className="bg-black border border-[#AEA1EA]/30 card-glow-lilac hover-elevate transition-all duration-300">
              <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#47d8ff]/15 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#47d8ff]/25">
                <Shield className="h-6 w-6 text-[#47d8ff]" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>The Self-Funding Guarantee</h3>
                  <Badge className="bg-[#47d8ff] text-black text-xs font-black">Contractual</Badge>
                </div>
                <p className="text-white/80 leading-relaxed mb-3">
                  Documented savings WILL exceed your investment within 6 months — or PXC continues at no additional charge until they do.
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  This is not a marketing promise. Every dollar in reduced turnover costs, reclaimed billable physician hours, and operational efficiency gains is tracked, documented, and measured against the total investment.
                </p>
              </div>
            </div>
              </CardContent>
            </Card>
          </motion.div>
          </BeamCard>
        </div>
      </section>
      <SectionDivider />

      {/* ===== ASSESSMENT SECTION ===== */}
      <section id="assessment" className="py-24 bg-black border-b border-white/5" aria-label="Practice Clarity and AI Readiness Assessment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-5">
              <Badge className="bg-[#47d8ff]/15 text-[#47d8ff] border border-[#47d8ff]/30 text-xs font-bold">Entry · Offering 1</Badge>
              <Badge className="bg-white/8 text-white/60 border border-white/10 text-xs">Diagnosis + AI Readiness</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Practice Clarity &amp; AI Readiness Assessment™
            </h2>
            <p className="text-[#AEA1EA] text-lg font-semibold mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              "Before we tell you what to fix, we map exactly where your practice is losing time, money, and AI opportunity."
            </p>
            <p className="text-white/70 max-w-3xl leading-relaxed">
              This is both a comprehensive practice assessment AND an AI readiness evaluation — the first and only diagnostic tool in healthcare consulting that tells you where your practice is struggling AND where AI can immediately start recovering time and revenue.
            </p>
          </motion.div>

          {/* Pricing table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">Pricing Options</h3>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <table className="w-full" role="table">
                <thead>
                  <tr className="bg-white/5">
                    <th className="text-left px-6 py-3 text-white/60 text-xs font-bold uppercase tracking-wider">Format</th>
                    <th className="text-right px-6 py-3 text-white/60 text-xs font-bold uppercase tracking-wider">Investment</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { format: "1-Day Virtual", price: "$997" },
                    { format: "2-Day Virtual", price: "$1,497" },
                    { format: "1-Day Onsite", price: "$2,497 + travel & expenses" },
                    { format: "2-Day Onsite", price: "$3,997 + travel & expenses" },
                    { format: "3-Day Onsite", price: "$5,497 + travel & expenses" },
                  ].map(({ format, price }, i) => (
                    <tr key={format} className={`border-t border-white/5 ${i === 0 ? "bg-[#47d8ff]/5" : ""}`}>
                      <td className="px-6 py-4 text-white font-semibold text-sm">{format}</td>
                      <td className="px-6 py-4 text-right">
                        <span className={`font-black text-sm ${i === 0 ? "text-[#47d8ff]" : "text-white"}`}>{price}</span>
                        {i === 0 && <Badge className="ml-2 bg-[#47d8ff] text-black text-xs">Start Here</Badge>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* AI Components Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* AI Readiness Score */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300 h-full">
                <CardContent className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#47d8ff]/10 rounded-lg flex items-center justify-center border border-[#47d8ff]/20">
                  <BarChart3 className="h-5 w-5 text-[#47d8ff]" />
                </div>
                <div>
                  <h4 className="text-white font-black text-base" style={{ fontFamily: 'Nunito, sans-serif' }}>AI Readiness Score™</h4>
                  <Badge className="bg-[#47d8ff]/10 text-[#47d8ff] border border-[#47d8ff]/20 text-xs">10-Domain Evaluation</Badge>
                </div>
              </div>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">A 10-domain evaluation that quantifies exactly where your practice is ready for AI — and where it isn't.</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Documentation Burden", "Phone / Communication Overload",
                  "No-Show Rates", "Staff AI Literacy",
                  "EHR Friction", "Scheduling Gaps",
                  "Billing Efficiency", "Patient Communication",
                  "Reputation Management", "Leadership AI Adoption Capacity",
                ].map(domain => (
                  <div key={domain} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#47d8ff] flex-shrink-0" />
                    <span className="text-white/65 text-xs">{domain}</span>
                  </div>
                ))}
              </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Lost Revenue Report */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300 h-full">
                <CardContent className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#AEA1EA]/10 rounded-lg flex items-center justify-center border border-[#AEA1EA]/20">
                  <TrendingUp className="h-5 w-5 text-[#AEA1EA]" />
                </div>
                <div>
                  <h4 className="text-white font-black text-base" style={{ fontFamily: 'Nunito, sans-serif' }}>Lost Revenue &amp; Wasted Time Report</h4>
                  <Badge className="bg-[#AEA1EA]/10 text-[#AEA1EA] border border-[#AEA1EA]/20 text-xs">Dollar-Specific</Badge>
                </div>
              </div>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Your actual numbers — not estimates, not industry averages. A personalized findings report showing exactly how much your practice is losing.</p>
              {[
                "Revenue lost to no-shows (your rate)",
                "Physician hours consumed by documentation",
                "Staff time in phone tag and manual tasks",
                "Turnover cost calculations",
                "Total recoverable revenue estimate",
              ].map(item => (
                <div key={item} className="flex items-start gap-3 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-[#AEA1EA] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Integration Opportunity Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300 h-full">
                <CardContent className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#47d8ff]/10 rounded-lg flex items-center justify-center border border-[#47d8ff]/20">
                  <Lightbulb className="h-5 w-5 text-[#47d8ff]" />
                </div>
                <div>
                  <h4 className="text-white font-black text-base" style={{ fontFamily: 'Nunito, sans-serif' }}>AI Integration Opportunity Map</h4>
                  <Badge className="bg-[#47d8ff]/10 text-[#47d8ff] border border-[#47d8ff]/20 text-xs">10–15 Specific Use Cases</Badge>
                </div>
              </div>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Prioritized by ROI and implementability — not a generic list, but a roadmap built from your Diagnosis findings.</p>
              {[
                "AI ambient documentation setup",
                "Call triage automation",
                "No-show recovery systems",
                "Morning huddle generator",
                "Patient communication hub",
                "And others specific to your workflows",
              ].map(item => (
                <div key={item} className="flex items-start gap-3 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-[#47d8ff] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Governance Starter Kit */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300 h-full">
                <CardContent className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#AEA1EA]/10 rounded-lg flex items-center justify-center border border-[#AEA1EA]/20">
                  <Shield className="h-5 w-5 text-[#AEA1EA]" />
                </div>
                <div>
                  <h4 className="text-white font-black text-base" style={{ fontFamily: 'Nunito, sans-serif' }}>Medical Practice AI Governance Starter Kit</h4>
                  <Badge className="bg-[#AEA1EA]/10 text-[#AEA1EA] border border-[#AEA1EA]/20 text-xs">HIPAA-Ready</Badge>
                </div>
              </div>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">The guardrails your practice needs before implementing any AI tool — written for your specific practice, not copied from a generic template.</p>
              {[
                "HIPAA compliance guardrails for AI",
                "What AI can and cannot do safely in your practice",
                "Compliance starting points and next steps",
              ].map(item => (
                <div key={item} className="flex items-start gap-3 mb-2">
                  <Shield className="h-4 w-4 text-[#AEA1EA] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Assessment Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <BeamCard accent="#47d8ff" className="rounded-3xl">
            <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
              <CardContent className="p-8">
            <h3 className="text-lg font-black text-white mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>How the Assessment Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  phase: "Before the Assessment",
                  color: "#47d8ff",
                  items: [
                    "Comprehensive Triage Form sent to practice prior",
                    "Pre-assessment discovery call with Jennifer",
                    "Custom assessment design based on your practice type",
                  ]
                },
                {
                  phase: "During the Assessment",
                  color: "#AEA1EA",
                  items: [
                    "Staff interviews (frontline through leadership)",
                    "Workflow observation and documentation",
                    "Patient experience touchpoint audit",
                    "Technology and EHR utilization audit",
                    "AI readiness evaluation across all 10 domains",
                  ]
                },
                {
                  phase: "Final Deliverables",
                  color: "#FB0000",
                  items: [
                    "Jennifer personally analyzes every finding",
                    "Written Diagnosis Report",
                    "Written Treatment Plan / Plan of Care",
                    "Full proposal slide deck",
                    "30–45 min Diagnosis Presentation Call with Jennifer",
                  ]
                }
              ].map(({ phase, color, items }) => (
                <div key={phase}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color }}>{phase}</p>
                  <div className="space-y-2">
                    {items.map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color }} />
                        <span className="text-white/65 text-xs leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
              </CardContent>
            </Card>
            </BeamCard>
          </motion.div>

          {/* Clarity Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-[#47d8ff]/6 border border-[#47d8ff]/30 rounded-2xl p-7 mb-10"
          >
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-[#47d8ff] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[#47d8ff] font-black text-base mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>The Clarity Guarantee</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  You will leave the Diagnosis Presentation Call with complete clarity about what is holding your practice back, exactly how much it is costing you, and a precise plan to address it. If the Assessment does not deliver that level of clarity, say so on the call — and you will receive a full refund. No questions asked.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <MagneticButton>
              <Button
                className="cta-bounce bg-[#FB0000] text-white font-black px-8 py-6 text-base"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                asChild
                data-testid="assessment-cta"
              >
                <Link href="/contact">
                  Start My Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MagneticButton>
            <Button
              variant="outline"
              className="cta-bounce-lilac border-white bg-[#AEA1EA]/20 text-white font-black px-8 py-6 text-base"
              style={{ fontFamily: 'Nunito, sans-serif' }}
              asChild
              data-testid="assessment-cta-call"
            >
              <a href="tel:+19412392309">
                <Phone className="mr-2 h-4 w-4" />
                (941) 239-2309
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== IMPACT BLUEPRINT SECTION ===== */}
      <section id="impact" className="py-24 bg-black border-b border-white/5" aria-label="PXC IMPACT Blueprint">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Badge className="bg-[#AEA1EA]/15 text-[#AEA1EA] border border-[#AEA1EA]/30 text-xs font-bold">Tier 2 · Offering 2</Badge>
              <Badge className="bg-white/8 text-white/60 border border-white/10 text-xs">fCAIOX Engagement · Assessment Included</Badge>
              <Badge className="bg-[#47d8ff]/10 text-[#47d8ff] border border-[#47d8ff]/20 text-xs">$8,500–$12,500/mo · 3–4 months</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              PXC IMPACT Blueprint™
            </h2>
            <p className="text-white/70 max-w-3xl leading-relaxed">
              A 3–4 month intensive transformation engagement with Jennifer Radu serving as your Fractional Chief AI Experience Officer — your outsourced C-suite partner accountable for measurable ROI.
            </p>
          </motion.div>

          {/* fCAIOX Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-[#AEA1EA]/6 border border-[#AEA1EA]/25 rounded-2xl p-7 mb-10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#AEA1EA]/15 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#AEA1EA]/25">
                <Award className="h-6 w-6 text-[#AEA1EA]" />
              </div>
              <div>
                <p className="text-[#AEA1EA] text-xs font-bold uppercase tracking-widest mb-1">Jennifer Radu · Your fCAIOX</p>
                <h3 className="text-white font-black text-lg mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>Fractional Chief AI Experience Officer</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  As your Fractional Chief AI Experience Officer, Jennifer serves as an outsourced C-suite partner accountable for measurable ROI — not a vendor, not a traditional consultant. She is embedded in your practice's strategy, holds accountability at the executive level, and does not exit until the outcomes are documented.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Self-Funding Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-[#47d8ff]/6 border border-[#47d8ff]/25 rounded-2xl p-6 mb-12"
          >
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-[#47d8ff] flex-shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-[#47d8ff] font-black text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>The Self-Funding Guarantee</span>
                  <Badge className="bg-[#47d8ff] text-black text-xs font-black">Contractual</Badge>
                </div>
                <p className="text-white/75 text-sm leading-relaxed">Documented savings from reduced staff turnover costs, reclaimed billable physician hours, and operational efficiency gains WILL exceed your total investment by the end of this engagement. If they don't, PXC continues working at no additional charge until they do.</p>
              </div>
            </div>
          </motion.div>

          {/* AI Deliverables */}
          <div className="mb-12">
            <p className="text-[#AEA1EA] text-xs font-bold uppercase tracking-widest mb-6">New AI Deliverables — Included in This Engagement</p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  icon: Bot,
                  color: "#AEA1EA",
                  title: "2–3 Custom AI Tool / GPT / Automation Builds",
                  desc: "Tailored to your Diagnosis findings — not generic AI tools, but systems built for your practice's specific bottlenecks.",
                  items: ["AI ambient documentation setup", "Call triage automation", "No-show recovery system", "Morning huddle generator", "Patient communication hub", "Custom GPT for your specific workflows"]
                },
                {
                  icon: GraduationCap,
                  color: "#47d8ff",
                  title: '"AI Champions" Program',
                  desc: "Jennifer identifies and coaches 1 internal staff member to become your practice's AI lead — ensuring adoption continues after the engagement ends.",
                  items: ["AI champion identification and selection", "Personalized coaching curriculum", "Tools and templates for ongoing leadership", "Handoff plan for sustained adoption"]
                },
                {
                  icon: Shield,
                  color: "#AEA1EA",
                  title: "AI Governance Framework Setup",
                  desc: "HIPAA-compliant, practice-specific AI governance — not a vendor's boilerplate, but a framework built for your specific tools, team, and risk profile.",
                  items: ["What AI tools staff can use", "How they can use them (and how they can't)", "Safeguards and monitoring protocols", "Staff acknowledgment and training records"]
                },
                {
                  icon: BarChart3,
                  color: "#47d8ff",
                  title: "Monthly AI Experience Scorecard",
                  desc: "An executive-level monthly report — the only report that combines operational results with AI ROI tracking in a single view.",
                  items: ["Hours reclaimed (documented)", "FTEs avoided / turnover savings", "Patient satisfaction trends", "AI ROI tracking vs. investment", "Role-specific AI micro-trainings (15-min monthly modules)"]
                },
              ].map(({ icon: Icon, color, title, desc, items }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5 }}
                >
                  <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300 h-full">
                    <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}>
                      <Icon className="h-4 w-4" style={{ color }} />
                    </div>
                    <h4 className="text-white font-black text-sm leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>{title}</h4>
                  </div>
                  <p className="text-white/55 text-xs leading-relaxed mb-3">{desc}</p>
                  <div className="space-y-1.5">
                    {items.map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color }} />
                        <span className="text-white/65 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Transformation Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
              <CardContent className="p-8">
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6">Core Transformation Deliverables — Also Included</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { cat: "Assessment & Diagnosis", items: ["Full Practice Clarity & AI Readiness Assessment™ included", "All AI readiness components delivered before engagement begins"] },
                { cat: "Leadership Development", items: ["1:1 executive coaching with Jennifer", "Leadership communication frameworks", "Accountability structure implementation", "Conflict resolution and culture alignment"] },
                { cat: "Culture Redesign", items: ["Team culture assessment and gap analysis", "Core values operationalization", "Staff engagement frameworks", "Retention strategy development"] },
                { cat: "Operational Transformation", items: ["3–5 custom SOPs written and implemented", "Workflow redesign across priority bottlenecks", "Patient experience touchpoint redesign", "Communication protocol redesign"] },
                { cat: "Ongoing Support", items: ["Bi-weekly strategy calls with Jennifer", "Monthly KPI and performance reports", "Slack/email async support throughout", "Final Results Report documenting ROI", "Sustainability Guide for the team"] },
              ].map(({ cat, items }) => (
                <div key={cat}>
                  <p className="text-[#AEA1EA] text-xs font-bold mb-3">{cat}</p>
                  <div className="space-y-1.5">
                    {items.map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#AEA1EA] flex-shrink-0 mt-0.5" />
                        <span className="text-white/65 text-xs leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Payment Calculator + CTA */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <BeamCard accent="#AEA1EA" className="rounded-3xl">
              <ImpactCalculator />
            </BeamCard>
            <div className="flex flex-col gap-6">
              <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                <h4 className="text-white font-black text-base mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>Payment Structure</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#47d8ff] text-xs font-bold mb-1">Option A — Monthly</p>
                    <p className="text-white/60 text-xs">50% due at signing · Remaining balance in monthly installments · Standard rate applies</p>
                  </div>
                  <div className="border-t border-white/8 pt-3">
                    <p className="text-[#AEA1EA] text-xs font-bold mb-1">Option B — Full Payment</p>
                    <p className="text-white/60 text-xs">15% discount on total investment · Full amount due at signing · Best value for the engagement</p>
                  </div>
                  <div className="border-t border-white/8 pt-3">
                    <p className="text-white/40 text-xs font-bold mb-1">Extension Clause</p>
                    <p className="text-white/50 text-xs">Additional months available at 30% off original monthly rate. An amended Treatment Plan is provided at the start of each extension period.</p>
                  </div>
                </div>
                </CardContent>
              </Card>
              <Button
                variant="outline"
                className="cta-bounce-lilac border-white bg-[#AEA1EA]/20 text-white font-black px-8 py-6 text-base w-full"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                asChild
                data-testid="impact-cta"
              >
                <Link href="/contact">
                  Apply for the IMPACT Blueprint™
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-white/35 text-xs text-center">Assessment is included and completed before the engagement begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXCEL PARTNERSHIP SECTION ===== */}
      <section id="excel" className="py-24 bg-black border-b border-white/5" aria-label="EXCEL Transformation Partnership">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Badge className="bg-[#FB0000]/15 text-[#FB0000] border border-[#FB0000]/30 text-xs font-bold">Tier 3 · Offering 3</Badge>
              <Badge className="bg-white/8 text-white/60 border border-white/10 text-xs">Fractional Chief AI Experience Officer — 12 Months</Badge>
              <Badge className="bg-[#FB0000]/10 text-[#FB0000] border border-[#FB0000]/20 text-xs">$13,500–$17,500/mo</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              EXCEL Transformation Partnership™
            </h2>
            <p className="text-white/70 max-w-3xl leading-relaxed">
              The full 12-month embedded transformation — Jennifer Radu as your Fractional Chief AI Experience Officer, building the AI operating system and cultural infrastructure your practice needs to lead its market.
            </p>
          </motion.div>

          {/* fCAIOX Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-[#FB0000]/6 border border-[#FB0000]/20 rounded-2xl p-7 mb-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FB0000]/15 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#FB0000]/25">
                <Award className="h-6 w-6 text-[#FB0000]" />
              </div>
              <div>
                <p className="text-[#FB0000] text-xs font-bold uppercase tracking-widest mb-1">Jennifer Radu · Your fCAIOX</p>
                <h3 className="text-white font-black text-lg mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>Fractional Chief AI Experience Officer — 12 Months</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  For 12 months, Jennifer serves as your Fractional Chief AI Experience Officer — your outsourced C-suite AI and transformation partner, embedded in your practice and accountable for results. She is not a consultant you manage. She is the executive responsible for transformation outcomes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Self-Funding Guarantee with MGMA math */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-[#47d8ff]/6 border border-[#47d8ff]/25 rounded-2xl p-7 mb-12"
          >
            <div className="flex items-start gap-3 mb-4">
              <Shield className="h-5 w-5 text-[#47d8ff] flex-shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-[#47d8ff] font-black text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>The Self-Funding Guarantee — Contractual</span>
                  <Badge className="bg-[#47d8ff] text-black text-xs font-black">6-Month Documented</Badge>
                </div>
                <p className="text-white/75 text-sm leading-relaxed mb-3">Documented savings from reduced staff turnover, reclaimed physician charting hours, revenue recovery, and operational efficiency WILL exceed your total retainer investment within the first 6 months. If documented savings do not exceed our fee by month 6, PXC will continue as your fCAIOX at NO ADDITIONAL CHARGE until they do.</p>
              </div>
            </div>
            <div className="bg-black/40 border border-white/8 rounded-xl p-5">
              <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">The Math — Before We Even Start</p>
              <p className="text-white/70 text-sm leading-relaxed">Based on MGMA data, a single year of reducing staff turnover from 40% to 20% in a 5-physician practice saves <span className="text-[#47d8ff] font-bold">$164,000–$280,000</span>. Our investment for 12 months: <span className="text-white font-bold">$162,000–$210,000</span>. The savings from turnover reduction alone can match or exceed the fee — and that does not include reclaimed physician hours, revenue recovery, or operational efficiency gains.</p>
            </div>
          </motion.div>

          {/* AI Experience OS */}
          <div className="mb-12">
            <p className="text-[#FB0000] text-xs font-bold uppercase tracking-widest mb-6">The AI Experience OS — New in This Tier</p>
            <div className="grid md:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="col-span-full"
              >
                <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
                  <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#FB0000]/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#FB0000]/20">
                    <Cpu className="h-4 w-4 text-[#FB0000]" />
                  </div>
                  <h4 className="text-white font-black text-base" style={{ fontFamily: 'Nunito, sans-serif' }}>PXC AI Experience OS Deployment</h4>
                </div>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">An embedded AI operating system built into the practice's existing tools (EHR, Slack/Teams, scheduling software). This is not a software subscription — it is a custom AI orchestration layer built specifically for how your practice operates.</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {["Patient communication automation", "Intelligent call triage", "Automated recall campaigns", "Documentation assistance workflows"].map(item => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FB0000] flex-shrink-0 mt-0.5" />
                      <span className="text-white/65 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                  </CardContent>
                </Card>
              </motion.div>

              {[
                {
                  icon: Bot,
                  color: "#FB0000",
                  title: "4–6 Custom AI Builds Over 12 Months",
                  desc: "Builds determined by the Diagnosis and reviewed quarterly. As the practice evolves, the AI roadmap evolves with it.",
                  items: ["Quarterly roadmap reviews", "Builds prioritized by ROI", "All builds HIPAA-compliant", "Staff trained on each build"]
                },
                {
                  icon: Shield,
                  color: "#AEA1EA",
                  title: "Full AI Governance Management",
                  desc: "Jennifer manages your AI governance for the full 12 months — not a set-and-forget document, but a living framework.",
                  items: ["Quarterly HIPAA compliance reviews", "BAA oversight and management", "Policy updates as AI landscape evolves", "Staff accountability monitoring"]
                },
                {
                  icon: BarChart3,
                  color: "#47d8ff",
                  title: "Advanced Monthly AI Experience Scorecard",
                  desc: "Executive-level reporting that tracks compounding ROI over 12 months — hours saved, FTEs avoided, patient satisfaction trends, AI ROI vs. investment.",
                  items: ["Hours saved (cumulative)", "FTEs avoided", "No-show rate changes", "Revenue impact tracking"]
                },
                {
                  icon: TrendingUp,
                  color: "#AEA1EA",
                  title: "Quarterly Lost Revenue Report Updates",
                  desc: "ROI compounds over 12 months. Each quarter, Jennifer updates the Lost Revenue Report to show cumulative savings — the document that anchors the Self-Funding Guarantee.",
                  items: ["Compounding ROI documentation", "Self-Funding Guarantee anchoring", "Role-Specific AI Training Curriculum for your team"]
                },
              ].map(({ icon: Icon, color, title, desc, items }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5 }}
                >
                  <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300 h-full">
                    <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}>
                      <Icon className="h-4 w-4" style={{ color }} />
                    </div>
                    <h4 className="text-white font-black text-sm leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>{title}</h4>
                  </div>
                  <p className="text-white/55 text-xs leading-relaxed mb-3">{desc}</p>
                  <div className="space-y-1.5">
                    {items.map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color }} />
                        <span className="text-white/65 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core deliverables + payment calculator */}
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-10">
            <BeamCard accent="#FB0000" className="rounded-3xl">
              <ExcelCalculator />
            </BeamCard>
            <div className="flex flex-col gap-5">
              <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Core Transformation Deliverables Also Included</p>
                <div className="space-y-4">
                  {[
                    { cat: "On-Site Presence", items: ["Quarterly on-site visits (up to 4/year)", "Team observations and live coaching", "In-person leadership intensives"] },
                    { cat: "Executive Coaching", items: ["Weekly/bi-weekly 1:1 with physician/owner", "Practice leadership team development", "Decision-making and vision alignment"] },
                    { cat: "Systems & Infrastructure", items: ["Complete SOP library (10–20+ documents)", "Hiring and onboarding redesign", "Compensation and performance systems"] },
                    { cat: "Analytics & Results", items: ["AI analytics dashboard setup", "Monthly KPI reporting", "12-Month Results Guarantee Report", "Sustainability Guide"] },
                  ].map(({ cat, items }) => (
                    <div key={cat}>
                      <p className="text-[#FB0000] text-xs font-bold mb-2">{cat}</p>
                      <div className="space-y-1">
                        {items.map(item => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#FB0000] flex-shrink-0 mt-0.5" />
                            <span className="text-white/60 text-xs">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                </CardContent>
              </Card>
              <MagneticButton className="w-full block">
                <Button
                  className="cta-bounce bg-[#FB0000] text-white font-black px-8 py-6 text-base w-full"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                  asChild
                  data-testid="excel-cta"
                >
                  <Link href="/contact">
                    Apply for the EXCEL Partnership™
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <p className="text-white/35 text-xs text-center">Assessment included · Quarterly on-site visits included · Most practices extend.</p>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider color="#FB0000" />

      {/* ===== PLAYGROUND SECTION ===== */}
      {/* ===== PRACTICE PROFESSIONALS PLAYGROUND SECTION — purple/white/black overview ===== */}
      <section id="playground" className="py-16 border-b border-white/5" aria-label="Practice Professionals Playground" style={{ background: "linear-gradient(135deg, #1a0d2e 0%, #2a1748 50%, #1a0d2e 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Badge className="bg-white text-[#5B4B9C] text-xs font-bold border border-[#AEA1EA]" data-testid="playground-overview-badge">Community Overview</Badge>
              <Badge className="bg-[#AEA1EA]/30 text-white border border-[#AEA1EA]/50 text-xs">Monthly Membership · See full page for details</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Practice Professionals Playground
            </h2>
            <p className="text-white/85 max-w-3xl leading-relaxed text-sm sm:text-base">
              The private community where Florida's best practice leaders, managers, and administrators come together to learn, share, and implement — with Jennifer in the room and AI tools arriving first.
            </p>
          </motion.div>

          {/* Compact founding member callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ border: "2px solid #AEA1EA" }}
          >
            <div className="flex items-center gap-4">
              <Badge className="bg-[#5B4B9C] text-white font-black text-xs">Founding Member · 50% Off</Badge>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black" style={{ color: "#1a1a1a", fontFamily: 'Nunito, sans-serif' }}>$99</span>
                <span className="text-sm" style={{ color: "#4a4a4a" }}>/mo</span>
                <span className="text-lg line-through" style={{ color: "#a0a0a0" }}>$197</span>
              </div>
            </div>
            <Button asChild className="font-black text-sm px-5 py-3" style={{ background: "#5B4B9C", color: "#fff" }} data-testid="playground-cta">
              <Link href="/services/practice-professionals-playground">See Full Page <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>

          {/* 6 Feature cards — 4 per line, compact */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {[
              { icon: Bot, title: "AI Updates First", desc: "Every new AI tool, workflow, and GPT — to members first." },
              { icon: Mic, title: "Monthly AI Q&A", desc: "AI-specific office hours with Jennifer — your practice, not generic advice." },
              { icon: FileText, title: "Templates & SOPs", desc: "Done-for-you templates ready to deploy without starting from scratch." },
              { icon: Users, title: "Community of Peers", desc: "Private community of practice managers dealing with what you're dealing with." },
              { icon: GraduationCap, title: "Monthly Training", desc: "Practical, actionable monthly workshops voted on by the community." },
              { icon: Flame, title: "Hot Seat Coaching", desc: "Real-time coaching slots for your specific challenge — with the group + Jennifer." },
              { icon: Sparkles, title: "AI Field Notes", desc: "Bi-weekly newsletter — Jennifer's implementation notebook, straight to inbox." },
              { icon: ArrowRight, title: "Quarterly 1:1", desc: "Private 45-min office hours slot — one per quarter for every active member." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4 }}
              >
                <div className="rounded-xl p-4 h-full bg-white border-2 border-[#AEA1EA] transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: "0 0 0 1px rgba(174,161,234,0.3)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: "#AEA1EA20", border: "1px solid #AEA1EA60" }}>
                    <Icon className="h-4 w-4" style={{ color: "#5B4B9C" }} />
                  </div>
                  <h4 className="font-black text-sm mb-1" style={{ fontFamily: 'Nunito, sans-serif', color: "#1a1a1a" }}>{title}</h4>
                  <p className="text-xs leading-snug" style={{ color: "#4a4a4a" }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compact who/what summary */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl p-5 bg-white" style={{ border: "2px solid #AEA1EA" }}>
              <p className="text-[#5B4B9C] text-[10px] font-black uppercase tracking-widest mb-3">Who the Playground Is For</p>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>
                Practice managers, administrators, physician-owners, office managers, and anyone who wants to learn AI before their competitors do.
              </p>
            </div>
            <div className="rounded-xl p-5 bg-[#5B4B9C]" style={{ border: "2px solid #AEA1EA" }}>
              <p className="text-[#AEA1EA] text-[10px] font-black uppercase tracking-widest mb-3">What You'll Walk Away With</p>
              <p className="text-sm leading-relaxed text-white">
                One new AI tool tested · One live training · Answers to your specific questions · A community solving the same problems · Early access to everything PXC builds.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="font-black px-8 py-5 text-base" style={{ background: "#fff", color: "#1a1a1a", border: "2px solid #AEA1EA" }} data-testid="playground-fullpage-cta">
              <Link href="/services/practice-professionals-playground">
                See Full Playground Details <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== BLUEPRINT WORKSHOPS / AI BLUEPRINT DAY SECTION — yellow/charcoal/white compact overview ===== */}
      <section id="blueprint-day" className="py-16 border-b border-white/5" aria-label="Blueprint Workshops Overview" style={{ background: "linear-gradient(135deg, #fca74633 0%, #2a2008 50%, #fca74633 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Badge className="text-xs font-bold" style={{ background: "#fca746", color: "#1a1a1a", border: "1px solid #fca746" }}>Workshops Overview</Badge>
              <Badge className="text-xs" style={{ background: "rgba(252,167,70,0.15)", color: "#fca746", border: "1px solid rgba(252,167,70,0.4)" }}>Florida + Nationwide · See full page</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ fontFamily: 'Nunito, sans-serif', color: "#fca746" }}>
              Blueprint Workshops
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-3xl leading-relaxed">
              Custom on-site (or virtual) training intensives Jennifer brings directly to your practice — focused on AI deployment, patient experience, and practice-leadership development.
            </p>
          </motion.div>

          {/* 4 compact workshop type cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {[
              { title: "AI Blueprint Day", desc: "Full-day AI + ops blueprint architected for your practice." },
              { title: "Leadership Recalibration", desc: "Half- or full-day intensive for managers stepping into executive roles." },
              { title: "Patient Experience Intensive", desc: "Full IMPACT™ Framework applied to YOUR patient journey." },
              { title: "Custom Multi-Day", desc: "Combine workshop types into a 2- or 3-day tailored intensive." },
            ].map(({ title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4 }}
              >
                <div className="rounded-xl p-4 h-full transition-all duration-300 hover:-translate-y-1" style={{ background: "#fff", border: "2px solid #fca746", boxShadow: "0 0 0 1px rgba(252,167,70,0.2)" }}>
                  <h4 className="font-black text-sm mb-1" style={{ fontFamily: 'Nunito, sans-serif', color: "#1a1a1a" }}>{title}</h4>
                  <p className="text-xs leading-snug" style={{ color: "#4a4a4a" }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="font-black px-8 py-5 text-base" style={{ background: "#fca746", color: "#1a1a1a" }} data-testid="blueprint-fullpage-cta">
              <Link href="/services/blueprint-workshops">See Full Workshops Details <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section id="compare" className="py-20 bg-black border-b border-white/5" aria-label="Why PXC is the Only Complete Solution">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#FB0000] text-sm font-bold uppercase tracking-widest mb-3">Why PXC Is the Only Complete Solution</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              No one else in healthcare consulting brings both sides of the equation.
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">Traditional consultants know culture. AI vendors know technology. Neither knows how to make them work together in a medical practice. PXC does — because Jennifer Radu has spent 21+ years inside practices AND has built the AI systems herself.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]" role="table">
              <thead>
                <tr>
                  <th className="text-left px-4 py-4 text-white/40 text-xs font-bold uppercase tracking-wider w-2/5"></th>
                  <th className="text-center px-4 py-4 text-white/60 text-xs font-bold uppercase tracking-wider">Traditional Consultants</th>
                  <th className="text-center px-4 py-4 text-white/60 text-xs font-bold uppercase tracking-wider">AI Vendors</th>
                  <th className="text-center px-4 py-4 bg-[#FB0000]/10 rounded-t-xl border-x border-t border-[#FB0000]/25">
                    <div className="text-[#FB0000] text-xs font-black uppercase tracking-wider">PXC</div>
                    <div className="text-white/40 text-xs">Only Complete Solution</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cap: "Culture & Change Management", trad: true, ai: false, pxc: true },
                  { cap: "Leadership Development", trad: true, ai: false, pxc: true },
                  { cap: "Workflow & Operations Redesign", trad: true, ai: "partial", pxc: true },
                  { cap: "Custom AI Tool Builds", trad: false, ai: true, pxc: true },
                  { cap: "AI Governance & HIPAA Compliance", trad: false, ai: "varies", pxc: true },
                  { cap: "Patient Experience Frameworks", trad: "generic", ai: false, pxc: "✓ (20 yrs + patient perspective)" },
                  { cap: "Internal AI Champion Coaching", trad: false, ai: false, pxc: true },
                  { cap: "Documented ROI Guarantee", trad: false, ai: false, pxc: "Contractual" },
                  { cap: "Embedded C-Suite Accountability", trad: false, ai: false, pxc: "fCAIOX Role" },
                ].map(({ cap, trad, ai, pxc }, i) => {
                  const renderCell = (val: boolean | string) => {
                    if (val === true) return <Check className="h-4 w-4 text-white/60 mx-auto" />;
                    if (val === false) return <X className="h-4 w-4 text-white/25 mx-auto" />;
                    return <span className="text-white/40 text-xs text-center block">{val}</span>;
                  };
                  const renderPxc = (val: boolean | string) => {
                    if (val === true) return <Check className="h-5 w-5 text-[#FB0000] mx-auto" />;
                    if (val === false) return <X className="h-4 w-4 text-white/25 mx-auto" />;
                    return <span className="text-[#FB0000] font-bold text-xs text-center block">{val}</span>;
                  };
                  return (
                    <tr key={cap} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/1" : ""}`}>
                      <td className="px-4 py-4 text-white/75 text-sm">{cap}</td>
                      <td className="px-4 py-4 text-center">{renderCell(trad)}</td>
                      <td className="px-4 py-4 text-center">{renderCell(ai)}</td>
                      <td className="px-4 py-4 bg-[#FB0000]/5 border-x border-[#FB0000]/15">{renderPxc(pxc)}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={3}></td>
                  <td className="px-4 py-4 bg-[#FB0000]/10 rounded-b-xl border-x border-b border-[#FB0000]/25">
                    <MagneticButton className="w-full block">
                      <Button
                        className="cta-bounce bg-[#FB0000] text-white font-black w-full px-8 py-5"
                        asChild
                        data-testid="compare-cta"
                      >
                        <Link href="/contact">Begin →</Link>
                      </Button>
                    </MagneticButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-white/40 text-sm italic">PXC's moat: 21+ years of human-centered healthcare expertise + custom AI builds + governance + contractual accountability — combined in a single engagement, with a single point of accountability.</p>
          </div>
        </div>
      </section>

      <SectionDivider />
      {/* ===== FAQ ===== */}
      <section className="py-20 bg-black" aria-label="FAQ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#47d8ff] text-sm font-bold uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Everything You Need to Know
            </h2>
          </div>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
                  <CardContent className="p-0">
                    <button
                      className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      data-testid={`faq-${i}`}
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-white font-semibold text-sm leading-relaxed">{faq.q}</span>
                      {openFaq === i
                        ? <ChevronUp className="h-4 w-4 text-[#47d8ff] flex-shrink-0 mt-0.5" />
                        : <ChevronDown className="h-4 w-4 text-white/40 flex-shrink-0 mt-0.5" />
                      }
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5">
                        <p className="text-white/65 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-14 text-center">
            <p className="text-[#FB0000] text-sm font-bold uppercase tracking-widest mb-4">Ready to Begin?</p>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Start with the Assessment or book a conversation with Jennifer directly.
            </h3>
            <p className="text-white/55 mb-8">The Assessment is the fastest path to clarity — and clarity is the first step to transformation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton>
                <Button
                  className="cta-bounce bg-[#FB0000] text-white font-black px-10 py-6 text-base"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                  asChild
                  data-testid="final-cta-assessment"
                >
                  <Link href="/contact">
                    Start My Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <Button
                variant="outline"
                className="cta-bounce-lilac border-white bg-[#AEA1EA]/20 text-white font-black px-8 py-6"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                asChild
                data-testid="final-cta-phone"
              >
                <a href="tel:+19412392309">
                  <Phone className="mr-2 h-4 w-4" />
                  (941) 239-2309
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
