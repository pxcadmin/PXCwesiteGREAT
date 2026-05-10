import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, CheckCircle2, Star, X, Check, ChevronLeft, ChevronRight, Play,
  TrendingUp, Clock, Shield, BadgeCheck, Award, Users, Zap, Target, BookOpen, Brain,
  BarChart3, RefreshCw, Heart, Flame, AlertTriangle, Quote, ChevronDown,
  Activity, Cpu, TrendingDown, Frown, Phone, Mail, ChevronUp
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { Tilt3D } from "@/components/effects/Tilt3D";
import { SectionDivider } from "@/components/effects/SectionDivider";
import { useSEO, breadcrumbJsonLd, faqJsonLd } from "@/lib/useSEO";
import { AnswerCapsule } from "@/components/effects/AnswerCapsule";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { BeamCard } from "@/components/effects/BeamCard";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { MarqueeStrip } from "@/components/effects/MarqueeStrip";
import { LatestArticles } from "@/components/sections/LatestArticles";

import jenniferHeadshot from "@assets/red_blazer_1765984670936.png";
import unifiedPxcSystem from "@assets/unified_px_system_1765984964786.png";
import medStaffTable from "@assets/MED_STAFF_TALKING_AT_TABLE_1765985324650.jpg";
import threeStaffLaughing from "@assets/THREE_MED_STAFF_LAUGHNING_1765985348106.jpg";
import adminAndMa from "@assets/ADMIN_AND_MA_1765985324649.jpg";
import twoFemaleDocsImage from "@assets/TWO_FEMALE_DOCS_AT_TABLE_SMILING_AND_WORKING_1775066184335.jpg";
import lilGirlDocImage from "@assets/lil_girl_doc_1775152867914.jpg";
import bookPresentationImage from "@assets/Book_Presentation_1775146204288.png";
import stageSpeechImage from "@assets/giving_a_live_speech_with_logo_in_background_-_Edited_1775146204289.png";
import podcastImage from "@assets/podcast_interview_-_Edited_1775146204289.png";
import trainingImage from "@assets/px_pres_in_caf_1775146204290.png";
import speechImage from "@assets/speech_1775146204291.png";
import pxAwardImage from "@assets/Patient_experience_professional_1775065477601.png";


const carouselImages = [
  { src: bookPresentationImage, label: "Published Author — Book Presentation" },
  { src: stageSpeechImage, label: "Live Healthcare Conference Speaker" },
  { src: podcastImage, label: "Healthcare AI Podcast — Featured Guest" },
  { src: trainingImage, label: "Live Practice Training & Implementation" },
  { src: speechImage, label: "Patient Experience Leadership Summit" },
];

const faqData = [
  {
    q: "What is the Practice Clarity & AI Readiness Assessment™ — and what will I walk away with?",
    a: "The Practice Clarity & AI Readiness Assessment™ is a dual-purpose diagnostic — a full practice evaluation AND an AI readiness evaluation combined in one engagement. You receive a 10-domain AI Readiness Score™, a dollar-specific Lost Revenue & Wasted Time Report (your actual numbers), a custom AI Integration Opportunity Map with 10–15 AI use cases for your practice, and a Medical Practice AI Governance Starter Kit. Jennifer personally analyzes every finding. You leave with complete clarity about what is holding your practice back, how much it is costing you, and a precise plan to address it — or you receive a full refund."
  },
  {
    q: "We're a small independent practice. Is this really built for us, or is this designed for large hospital systems?",
    a: "This is built specifically for independent and small-to-mid-size medical practices — not large hospital systems. Jennifer spent 21+ years inside the trenches of independent clinics, urgent care centers, specialty offices, and private practices. Every framework in the Unified PXC System was designed, tested, and refined in the exact environment you operate in. If you have 1 provider or 50, this system was built for you."
  },
  {
    q: "How is this different from just hiring an HR firm or a general business consultant?",
    a: "HR firms focus on compliance and hiring processes. General business consultants focus on strategy decks they hand you and walk away from. PXC is the only firm in Florida — and one of the only firms nationally — that combines 21+ years of clinical operations experience, AI-powered tools, proprietary patient experience frameworks, and hands-on implementation — meaning we don't just tell you what to do, we do it with you. We are embedded partners, not drive-by advisors."
  },
  {
    q: "When will I start seeing measurable results?",
    a: "Most practices begin seeing measurable changes within the first 30–60 days of engagement — particularly in staff communication, patient interaction quality, and appointment flow. The Self-Funding Guarantee — Contractual means documented savings from reduced staff turnover, reclaimed physician hours, and operational efficiency WILL exceed your total investment within 6 months. If they don't, PXC continues working at no additional charge until they do. Every dollar is tracked, documented, and measured against the total investment."
  },
  {
    q: "I've tried consultants before and it didn't work. Why would this be different?",
    a: "Because most consultants hand you a 60-page PDF and disappear. Jennifer doesn't operate that way. As your Fractional Chief AI Experience Officer (fCAIOX), she is embedded in your practice's strategy — not a vendor you manage, not a report-writer who exits. Every engagement is customized — not templated. Every AI tool is built and deployed in your actual practice, with your actual team. The difference is contractual accountability, implementation support, and a Self-Funding Guarantee — Contractual that no traditional consultant offers."
  },
  {
    q: "Does this require AI tools or special technology we don't have?",
    a: "No. While PXC leverages AI-enhanced tools to accelerate your results, you don't need any prior technology setup or AI experience. We evaluate your current tech stack and identify the highest-ROI AI opportunities specific to your practice, then we guide implementation. You don't need to figure anything out on your own. AI is a tool in our toolbox — not a requirement for you."
  },
  {
    q: "How long does it take to see real results?",
    a: "Most clients begin seeing measurable changes within the first 30–60 days — particularly in staff communication, patient interaction quality, and appointment flow. Full transformation metrics — including patient satisfaction scores, online review volume, staff retention improvements, and revenue stabilization — are typically measurable by 90 days. The pace of results depends on your engagement level and the entry point you choose."
  },
  {
    q: "Is this covered by our practice budget, or do we need special approval?",
    a: "The Strategy Session is completely free — no credit card, no approval required. For full engagement tiers, the Unified PXC System is typically structured as an operational investment at the practice or clinic-owner level. Many of our clients fund their engagement through the recovered revenue that's currently leaking due to patient attrition, staff turnover, and operational inefficiency. One recovered revenue leak often covers the full investment and then some."
  },
  {
    q: "Can Jennifer work with practices outside of Florida?",
    a: "Absolutely. While Jennifer's deepest local market expertise is in Central and Southern Florida, PXC actively serves clients nationwide. Jennifer has worked regularly with practices in North Carolina, Georgia, and across the Southeast. Virtual engagements are available for any practice in the US. In-person intensive engagements are available nationally by arrangement — reach out to discuss what's right for your practice."
  },
  {
    q: "What makes the IMPACT Framework different from other practice management frameworks?",
    a: "The IMPACT Framework — Inspire, Motivate, Provide, Achieve, Communicate, Transform — is the only patient experience framework built simultaneously around clinical leadership development, AI-powered patient journey mapping, team culture engineering, and operational efficiency. It doesn't treat these as separate pillars — it integrates them into a single, sustainable cycle. No other framework on the market does all of this in a single, unified system designed for independent practices."
  },
];

export default function Home() {
  useSEO({
    title: "PXC | AI-Powered Medical Practice Transformation in Florida — Self-Funding Guarantee",
    description: "Patient eXperience Consulting (PXC) helps independent medical practices in Florida cut staff turnover, end burnout, and grow revenue with the AI-powered Unified PXC System™. Backed by a contractual Self-Funding Guarantee — your transformation pays for itself in 6 months, in writing. Founded by Jennifer Radu, CPPM, fCAIOX, in Bradenton, FL. Serving Sarasota, Manatee, Orange, Miami-Dade, Broward, Palm Beach, Hillsborough, Pinellas, Lee, Collier, and 6+ more Florida counties — and nationwide.",
    path: "/",
    keywords: "medical practice consulting Florida, patient experience consulting, AI for medical practices, Unified PXC System, Self-Funding Guarantee healthcare consulting, healthcare consultant Florida, fractional Chief AI Experience Officer, fCAIOX, Jennifer Radu CPPM, IMPACT Framework, Puzzle Pyramid, EXCEL Transformation Partnership, PXC IMPACT Blueprint, Practice Clarity AI Readiness Assessment, Bradenton healthcare consulting, Sarasota medical practice consultant, Manatee County medical consulting, independent medical practice transformation",
    jsonLd: [
      breadcrumbJsonLd([{ name: "Home", path: "/" }]),
      faqJsonLd(faqData.map((f) => ({ question: f.q, answer: f.a }))),
    ],
  });

  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());
  const toggleFaq = useCallback((i: number) => {
    setOpenFaqs(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }, []);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const touchStartX = useRef<number>(0);

  const nextSlide = useCallback(() => setCarouselIndex(i => (i + 1) % carouselImages.length), []);
  const prevSlide = useCallback(() => setCarouselIndex(i => (i - 1 + carouselImages.length) % carouselImages.length), []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4800);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* ===== SECTION 1: HERO ===== */}
      <section className="pxc-grain relative min-h-screen bg-black flex items-center overflow-hidden" aria-label="Hero">
        {/* AI-medical background with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/assets/ai-bg.png" alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black" />
        </div>
        <AuroraBackdrop opacity={0.12} />

        {/* Floating beating stethoscope (~2 inches at desktop) */}
        <motion.img
          src="/assets/stethoscope.gif"
          alt="Beating stethoscope"
          className="absolute hidden md:block w-[180px] h-auto pointer-events-none z-20 left-[2%] top-[18%] opacity-90 drop-shadow-[0_0_20px_rgba(251,0,0,0.4)]"
          animate={{ scale: [1, 1.06, 1], rotate: [0, -3, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          data-testid="hero-stethoscope"
        />

        {/* Floating ambient dots */}
        <motion.div className="absolute left-[6%] top-[60%] w-2 h-2 rounded-full bg-[#AEA1EA]/50 blur-sm pointer-events-none"
          animate={{ y: [0, -15, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <motion.div className="absolute right-[3%] top-[20%] w-3 h-3 rounded-full bg-[#47d8ff]/40 blur-sm pointer-events-none"
          animate={{ y: [0, -18, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />

        <div className="relative z-10 max-w-[1700px] mx-auto px-3 sm:px-4 lg:px-6 py-8 lg:py-14 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT: SEO/AEO/GEO-optimized copy — 3-second clarity */}
            <motion.div className="space-y-5"
              initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>

              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#FB0000]/15 text-[#FB0000] border border-[#FB0000]/30 text-xs font-semibold px-3 py-1" data-testid="badge-authority">
                  Florida's AI Healthcare Authority
                </Badge>
                <Badge className="bg-[#47d8ff]/15 text-[#47d8ff] border border-[#47d8ff]/30 text-xs font-semibold px-3 py-1" data-testid="badge-guarantee">
                  Self-Funding Guarantee
                </Badge>
                <Badge className="bg-[#AEA1EA]/15 text-[#AEA1EA] border border-[#AEA1EA]/30 text-xs font-semibold px-3 py-1" data-testid="badge-experience">
                  21+ Years In-Practice
                </Badge>
              </div>

              {/* H1 — under 12 words, 3-second clarity, who/what/why */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-black leading-[1.05] text-white" style={{ fontFamily: "Nunito, sans-serif" }} data-testid="hero-headline">
                Stop the Burnout.<br />
                <span className="text-[#FB0000]">Save Your Practice.</span><br />
                <span className="text-[#47d8ff]">Scale With AI.</span>
              </h1>

              {/* H2 — pain → solution in one breath, under 30 words */}
              <h2 className="text-lg sm:text-xl text-[#AEA1EA] font-semibold leading-snug" style={{ fontFamily: "Nunito, sans-serif" }} data-testid="hero-subheadline">
                The Unified PXC System™ — AI-fueled, people-powered transformation for independent medical practices that refuse to sell out, burn out, or back down.
              </h2>

              {/* EKG STATS CARD — beating stats */}
              <div className="relative rounded-xl border border-[#47d8ff]/40 bg-black/70 backdrop-blur p-4 overflow-hidden glow-stat-cyan" data-testid="hero-ekg-card">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-4 w-4 text-[#FB0000] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#47d8ff]">Live Practice Pulse</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { v: "326+", l: "Providers Supported", c: "#FB0000" },
                    { v: "38%", l: "Turnover Reduction", c: "#47d8ff" },
                    { v: "41%", l: "Patient Sat. Lift", c: "#AEA1EA" },
                  ].map((s, i) => (
                    <motion.div key={s.l} className="text-center"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                      data-testid={`hero-stat-${i}`}>
                      <div className="font-black text-2xl stat-glow" style={{ color: s.c, fontFamily: "Nunito, sans-serif" }}>{s.v}</div>
                      <div className="text-[10px] text-white/70 leading-tight">{s.l}</div>
                    </motion.div>
                  ))}
                </div>
                {/* EKG line drawing */}
                <svg viewBox="0 0 400 30" className="absolute bottom-0 left-0 w-full h-[14px] opacity-60">
                  <polyline
                    fill="none"
                    stroke="#FB0000"
                    strokeWidth="1.5"
                    points="0,15 60,15 75,15 85,5 95,25 105,15 200,15 215,15 225,2 235,28 245,15 400,15"
                    className="pxc-divider-path"
                  />
                </svg>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button
                  size="lg"
                  className="cta-bounce bg-[#FB0000] text-white font-black text-base px-7 py-6 rounded-md"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                  asChild
                  data-testid="hero-button-book-session"
                >
                  <Link href="/contact#book-session">
                    Book Free Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="cta-bounce-lilac border-[#AEA1EA] bg-[#AEA1EA]/10 text-white font-black text-base px-7 py-6"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                  asChild
                  data-testid="hero-button-quiz"
                >
                  <Link href="/services#assessment">Take AI Readiness Quiz</Link>
                </Button>
              </div>
              <p className="text-[#AEA1EA]/70 text-xs">
                Valued at $1,200 — Yours Free. No credit card. No obligation. 100% confidential.
              </p>

              <div className="flex items-center gap-2 pt-1">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-4 w-4 text-[#FFE600] fill-[#FFE600]" />
                  ))}
                </div>
                <span className="text-white font-bold text-sm">4.9/5</span>
                <span className="text-[#AEA1EA] text-xs">across 326+ transformed practitioners</span>
              </div>
            </motion.div>

            {/* RIGHT: Video placecard wrapped in LARGE rotating glowing rings */}
            <motion.div className="relative flex items-center justify-center min-h-[560px] sm:min-h-[640px]"
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>

              <div className="relative flex items-center justify-center">
                {/* Largest cyan ring */}
                <motion.div
                  className="absolute w-[560px] h-[480px] sm:w-[640px] sm:h-[540px] rounded-full pointer-events-none hero-orbit-cyan-lg"
                  style={{ zIndex: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  data-testid="hero-ring-cyan-lg"
                />
                {/* Violet ring (counter-rotation) */}
                <motion.div
                  className="absolute w-[460px] h-[400px] sm:w-[540px] sm:h-[460px] rounded-full pointer-events-none"
                  style={{ zIndex: 0, border: "3px solid rgba(174,161,234,0.55)", boxShadow: "0 0 32px rgba(174,161,234,0.45), 0 0 70px rgba(174,161,234,0.18)" }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  data-testid="hero-ring-violet"
                />
                {/* Cyan medium ring */}
                <motion.div
                  className="absolute w-[380px] h-[330px] sm:w-[450px] sm:h-[390px] rounded-full pointer-events-none hero-orbit-cyan-md"
                  style={{ zIndex: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                />
                {/* Red glowing rectangle around video */}
                <motion.div
                  className="absolute w-[360px] sm:w-[440px] h-[480px] sm:h-[560px] rounded-2xl pointer-events-none hero-orbit-red"
                  style={{ zIndex: 10 }}
                  animate={{ x: [0, 8, 8, -8, -8, 0], y: [-8, -8, 8, 8, -8, -8] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                />

                {/* VIDEO PLACECARD */}
                <div className="relative" style={{ zIndex: 20 }}>
                  <div
                    className="w-[300px] sm:w-[380px] h-[400px] sm:h-[500px] rounded-2xl overflow-hidden relative bg-black"
                    style={{ border: "2px solid rgba(251,0,0,0.45)", boxShadow: "0 0 40px rgba(251,0,0,0.35)" }}
                    data-testid="hero-video"
                  >
                    <video
                      src="/assets/heartbeat.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    {/* Cyan-violet overlay for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    {/* Floating play badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/70 backdrop-blur px-3 py-1.5 rounded-full border border-[#47d8ff]/40">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB0000] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FB0000]"></span>
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">Live</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-black text-base leading-tight" style={{ fontFamily: "Nunito, sans-serif" }}>
                        Inside <span className="text-[#FB0000]">The Unified PXC System™</span>
                      </p>
                      <p className="text-[#AEA1EA] text-xs mt-1">3-min walkthrough · Jennifer Radu, fCAIOX</p>
                    </div>
                  </div>

                  {/* Floating stat cards */}
                  <motion.div
                    className="absolute -right-6 -top-8 bg-black border border-[#47d8ff]/50 rounded-xl p-3 text-center glow-stat-cyan"
                    style={{ zIndex: 30 }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    data-testid="stat-card-326"
                  >
                    <p className="text-[#47d8ff] font-black text-xl" style={{ fontFamily: "Nunito, sans-serif" }}>326+</p>
                    <p className="text-white text-[10px]">Providers Supported</p>
                  </motion.div>
                  <motion.div
                    className="absolute -left-6 top-1/2 -translate-y-1/2 bg-black border border-[#FB0000]/50 rounded-xl p-3 text-center glow-stat-red"
                    style={{ zIndex: 30 }}
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                    data-testid="stat-card-21years"
                  >
                    <p className="text-[#FB0000] font-black text-xl" style={{ fontFamily: "Nunito, sans-serif" }}>21+</p>
                    <p className="text-white text-[10px]">Years In-Practice</p>
                  </motion.div>
                  <motion.div
                    className="absolute -right-4 -bottom-8 bg-black border border-[#AEA1EA]/50 rounded-xl px-4 py-2 text-center glow-stat-lilac"
                    style={{ zIndex: 30 }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    data-testid="stat-card-name"
                  >
                    <p className="text-white font-black text-xs" style={{ fontFamily: "Nunito, sans-serif" }}>Jennifer Radu, CPPM</p>
                    <p className="text-[#47d8ff] text-[9px]">fCAIOX · Founder</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Above-the-fold AEO Answer Capsule */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 lg:mt-14">
            <AnswerCapsule
              emitFaqJsonLd={false}
              question="How do independent medical practices in Florida fix patient retention and staff turnover without disrupting operations?"
              answer="Independent medical practices in Florida fix patient retention and staff turnover by deploying the Unified PXC System™ from Patient eXperience Consulting (PXC), led by Jennifer Radu, fCAIOX. The system combines three integrated frameworks — the Puzzle Pyramid™ deployment methodology, the IMPACT Framework™ strategic transformation, and the AI-Fueled, People-Powered PX Cycle™ sustainability model — implemented alongside your existing team in 90-day phases so daily operations are never disrupted. Engagements are backed by the Self-Funding Guarantee — Contractual: documented savings exceed your investment within 6 months, in writing."
            />
          </div>
        </div>

        {/* PULSATING HEARTBEAT DIVIDER — visible at bottom of hero without scroll */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none" data-testid="hero-heartbeat-divider">
          <div className="relative h-[60px] sm:h-[72px] w-full overflow-hidden">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="hbGrad" x1="0" x2="1">
                  <stop offset="0%" stopColor="#47d8ff" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#FB0000" stopOpacity="1" />
                  <stop offset="100%" stopColor="#AEA1EA" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <polyline
                fill="none"
                stroke="url(#hbGrad)"
                strokeWidth="2.5"
                points="0,40 200,40 240,40 260,15 280,65 300,40 500,40 540,40 560,5 580,75 600,40 800,40 840,40 860,15 880,65 900,40 1100,40 1140,40 1160,5 1180,75 1200,40 1440,40"
                style={{ filter: "drop-shadow(0 0 8px #FB0000)" }}
              />
            </svg>
            <motion.div
              className="absolute top-1/2 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#FB0000] to-transparent"
              style={{ filter: "drop-shadow(0 0 12px #FB0000)" }}
              animate={{ x: ["-30%", "100%"], width: ["20%", "20%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </section>
      {/* ===== SECTION 2: SOCIAL PROOF STRIP ===== */}
      <section className="relative py-20 overflow-hidden bg-white" aria-label="Social Proof">
        {/* Medical image overlay — subtle, white-washed, brand-appropriate */}
        <div className="absolute inset-0">
          <img src={adminAndMa} alt="" className="w-full h-full object-cover opacity-45" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/70" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#FB0000] text-sm font-bold uppercase tracking-widest mb-8">
            Trusted by Independent Practices Across Florida &amp; Nationwide
          </p>
          <div className="mb-12">
            <MarqueeStrip
              items={["Bradenton", "Sarasota", "Orlando", "Tampa", "Miami", "Fort Lauderdale", "Naples", "Fort Myers", "Jacksonville", "Palm Beach"].map(city => (
                <Badge key={city} className="bg-black text-white border border-black/20 text-sm px-4 py-1.5">
                  {city}
                </Badge>
              ))}
            />
          </div>
          <div className="max-w-3xl mx-auto bg-[#00e1ff14]">
            <Quote className="h-10 w-10 text-[#AEA1EA] mx-auto mb-6 opacity-60" />
            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-black font-bold leading-relaxed italic" style={{ fontFamily: 'Nunito, sans-serif' }}>
              "Jennifer didn't just transform our patient experience —{" "}
              <span className="text-[#FB0000]">she transformed our entire practice culture.</span> We went from a 38% patient return rate to over 74% in less than six months."
            </blockquote>
            <p className="text-[#AEA1EA] mt-6 font-semibold">— Dr. M. Alvarez, Family Practice, Orange County FL</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            {[
              { num: "326+", label: "Practitioners Transformed" },
              { num: "1,000+", label: "Healthcare Professionals Trained" },
              { num: "21+", label: "Years in Clinical Operations & Management" },
              { num: "0", label: "Failed Implementations" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-[#FB0000]" style={{ fontFamily: 'Nunito, sans-serif' }}>{num}</div>
                <div className="text-black/70 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== SECTION 3: PROBLEM IDENTIFICATION ===== */}
      <section className="relative py-24 overflow-hidden" aria-label="The Problem" id="problem">
        <div className="absolute inset-0">
          <img src={medStaffTable} alt="" className="w-full h-full object-cover opacity-40" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-br from-black/88 via-black/80 to-black/90" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-[#AEA1EA] uppercase tracking-widest mb-4 font-black text-[25px]">The Root Problem</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
              What Is the{" "}
              <span className="text-[#47d8ff]">Experience Instability Trap™</span>
              {" "}— and Is It Destroying Your Practice Right Now?
            </h2>
          </motion.div>

          {/* AEO Answer Capsule */}
          <div className="border-l-4 border-[#47d8ff] bg-[#47d8ff]/8 rounded-r-xl p-6 mb-12 max-w-4xl mx-auto">
            <p className="text-[#47d8ff] uppercase tracking-widest mb-3 font-extrabold text-[19px]">Direct Answer</p>
            <p className="text-white font-light text-[19px]">
              The <strong>Experience Instability Trap™</strong> is the silent cycle that destroys independent medical practices: inconsistent patient experiences create poor retention, poor retention drives negative online reviews, negative reviews kill new patient acquisition, and depleted revenue forces staff cuts — which creates worse patient experiences. Without a structured intervention, it compounds every single quarter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto bg-[#00eaff26]">
            <div className="text-center">
              <div className="text-7xl sm:text-8xl font-black text-[#FB0000] stat-glow" style={{ fontFamily: 'Nunito, sans-serif' }}>
                $82K–<br />$140K
              </div>
              <p className="text-white text-lg font-semibold mt-4">
                The average annual cost of a single patient experience failure in a mid-size independent practice.
              </p>
              <p className="text-[#AEA1EA] text-sm mt-2">(Source: MGMA / Press Ganey, 2024)</p>
            </div>
            <div className="space-y-4">
              <p className="text-white/90 text-base leading-relaxed">
                This isn't just about bad reviews or unhappy patients. It's the invisible financial hemorrhage happening in your practice every single day:
              </p>
              <ul className="space-y-3">
                {[
                  "No-show rates silently draining your schedule efficiency",
                  "Staff turnover costing $15K–$22K per replacement hire",
                  "Patient churn creating revenue instability that compounds quarterly",
                  "Burnout-driven errors increasing liability exposure",
                  "Operational chaos making AI or growth tools impossible to implement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-[#FB0000] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#AEA1EA] mt-4 font-black">
                The trap is real. The escape is structured. And it doesn't have to take years.
              </p>
              <p className="text-white/85 text-sm leading-relaxed mt-3">
                Every PXC engagement is backed by our <span className="text-[#47d8ff] font-bold">Self-Funding Guarantee — Contractual</span>: documented savings from staff retention, reclaimed physician hours, and operational efficiency exceed your investment within 6 months — in writing — or PXC keeps working at no additional charge until they do.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />
      {/* ===== SECTION 4: PAIN POINTS ===== */}
      <section className="py-24 bg-black" aria-label="Pain Points" id="pain-points">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-[#AEA1EA] text-sm font-bold uppercase tracking-widest mb-4">Sound Familiar?</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Does This Sound Like Your{" "}
              <span className="text-[#FB0000]">Monday Morning?</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Frown, title: "Your patients are leaving and you don't know why", body: "You're doing everything right clinically, but they're not coming back — and they're leaving 3-star reviews that are crushing your new patient pipeline." },
              { icon: Users, title: "Your staff turnover is destroying morale — and your revenue", body: "You've replaced your front desk team twice in 18 months. Training costs, culture damage, and service gaps are bleeding you dry." },
              { icon: TrendingDown, title: "Your schedule is full but your bank account isn't", body: "No-shows, last-minute cancellations, and billing inefficiencies are eating your revenue before it ever reaches your bottom line." },
              { icon: AlertTriangle, title: "You've tried systems and scripts — nothing sticks", body: "You've implemented EHR upgrades, training programs, and scripts. Two weeks later, everything's back to the way it was. The system breaks without someone holding it." },
              { icon: Clock, title: "You're spending your evenings doing admin work instead of living", body: "You built this practice for freedom and financial security. Instead, you're working 60-hour weeks and still falling behind." },
              { icon: Brain, title: "You know AI could help — but implementation feels impossible", body: "Everyone's talking about AI in healthcare. You know it's coming. But figuring out where to start, what to trust, and how to deploy it feels overwhelming." },
            ].map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="card-glow-lilac bg-black border border-[#AEA1EA]/20 h-full hover-elevate transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FB0000]/10 flex items-center justify-center mb-3 border border-[#FB0000]/25">
                      <Icon className="h-6 w-6 text-[#FB0000]" />
                    </div>
                    <CardTitle className="text-white text-base font-bold leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/65 text-sm leading-relaxed">{body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="border border-[#AEA1EA]/30 rounded-2xl p-8 text-[26px] bg-[#aea1ea1f]">
              <p className="font-quote text-xl text-[#AEA1EA] font-bold leading-relaxed">
                "None of this is your fault. You were trained to be an exceptional clinician — not a systems architect, a culture engineer, and an AI strategist simultaneously. That's what we're here for."
              </p>
              <p className="text-[#47d8ff] font-semibold mt-4 text-sm">— Jennifer Radu, Founder & CPPM</p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== SECTIONS 5+6: SOLUTION (CONDENSED) ===== */}
      <section className="relative py-24 bg-black border-t border-white/5 overflow-hidden" aria-label="The Solution" id="solution">
        <AuroraBackdrop opacity={0.08} colors={["#47d8ff", "#AEA1EA", "#47d8ff"]} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <p className="text-[#AEA1EA] text-sm font-bold uppercase tracking-widest mb-4">The Solution</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
              What Is the{" "}
              <span className="text-[#47d8ff]">Unified PXC System™</span>
              {" "}— and How Does It Transform Independent Medical Practices?
            </h2>
          </motion.div>

          {/* AEO Capsule */}
          <div className="border-l-4 border-[#47d8ff] bg-[#47d8ff]/8 rounded-r-xl p-6 mb-14 max-w-4xl mx-auto">
            <p className="text-[#47d8ff] font-bold uppercase tracking-widest mb-3 text-[18px]">Direct Answer</p>
            <p className="text-white text-[19px]">
              The <strong>Unified PXC System™</strong> is a three-framework proprietary methodology that transforms independent medical practices by simultaneously engineering patient experience, building high-performance team culture, and implementing AI-powered operational systems — all in one integrated, results-driven engagement with measurable wins inside the first 30–60 days. It is not a course, a playbook, or a template. It is a full-scale implementation partnership built for independent clinics — and every engagement is backed by the <strong className="text-[#47d8ff]">Self-Funding Guarantee — Contractual</strong>: documented ROI within 6 months, in writing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { icon: Target, label: "Framework 1", title: "The Puzzle Pyramid™", tagline: "Engage → Educate → Excel", desc: "The deployment architecture that takes your practice from reactive chaos to proactive mastery in three structured phases — each building on the last.", metric: "Avg. 47% improvement in patient satisfaction in Phase 1", color: "#47d8ff" },
              { icon: BarChart3, label: "Framework 2", title: "The IMPACT Framework™", tagline: "Inspire · Motivate · Provide · Achieve · Communicate · Transform", desc: "The strategic engine that aligns leadership, staff culture, patient communication, and operational efficiency into a single, integrated transformation system.", metric: "Avg. 31% reduction in staff turnover within 90 days", color: "#AEA1EA" },
              { icon: Cpu, label: "Framework 3", title: "AI-Fueled People Powered PX Cycle™", tagline: "The Sustainability Engine", desc: "The continuous improvement system that ensures your transformation doesn't stall after the engagement ends — using AI tools layered on a strong human culture foundation.", metric: "Avg. 68% improvement in long-term retention sustainability", color: "#FB0000" },
            ].map(({ icon: Icon, label, title, tagline, desc, metric, color }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <CursorGlow className="h-full block">
                <BeamCard accent={color} className="h-full">
                <Card className="bg-black border-0 h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center border"
                        style={{ backgroundColor: `${color}15`, borderColor: `${color}30` }}>
                        <Icon className="h-5 w-5" style={{ color }} />
                      </div>
                      <Badge className="text-xs" style={{ backgroundColor: `${color}15`, color, border: `1px solid ${color}30` }}>
                        {label}
                      </Badge>
                    </div>
                    <CardTitle className="text-white font-black text-lg" style={{ fontFamily: 'Nunito, sans-serif' }}>{title}</CardTitle>
                    <p className="text-xs font-bold" style={{ color }}>{tagline}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
                    <div className="pt-3 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs font-bold" style={{ color }}>Proven Result: {metric}</p>
                    </div>
                  </CardContent>
                </Card>
                </BeamCard>
                </CursorGlow>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mb-12">
            <div className="max-w-2xl w-full rounded-2xl overflow-hidden border border-[#AEA1EA]/20 card-glow-lilac">
              <img src={unifiedPxcSystem} alt="The Unified PXC System — Patient eXperience Consulting" className="w-full h-auto" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-[#AEA1EA] mb-6 text-lg">Ready to see exactly which framework your practice needs first?</p>
            <Button
              size="lg"
              className="cta-bounce bg-[#FB0000] text-white font-black text-base px-10 py-6"
              style={{ fontFamily: 'Nunito, sans-serif' }}
              asChild
              data-testid="solution-button-book-session"
            >
              <a href="#book-session">
                Book Your Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      <SectionDivider />
      {/* ===== SECTION 7: ANIMATED STATS ===== */}
      <section className="py-24 bg-black border-t border-white/5" aria-label="Proven Results" id="results">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#AEA1EA] text-sm font-bold uppercase tracking-widest mb-4">The Numbers Don't Lie</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Proven Results Across{" "}
              <span className="text-[#47d8ff]">326+ Practitioners</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { target: 47, suffix: "%", label: "Average improvement in patient satisfaction scores (Phase 1)", color: "#47d8ff" },
              { target: 31, suffix: "%", label: "Average reduction in staff turnover within 90 days", color: "#AEA1EA" },
              { target: 68, suffix: "%", label: "Improvement in long-term patient retention sustainability", color: "#47d8ff" },
              { target: 326, suffix: "+", label: "Practitioners transformed across Central & Southern Florida", color: "#FB0000" },
              { target: 1000, suffix: "+", label: "Healthcare professionals trained in the IMPACT Framework", color: "#AEA1EA" },
              { target: 6, suffix: " Mo", label: "Self-Funding payback window — contractual ROI, in writing", color: "#FB0000" },
            ].map(({ target, suffix, label, color }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-glow-lilac bg-black border border-white/10 rounded-2xl p-6 text-center hover-elevate"
                data-testid={`stat-card-${i}`}
              >
                <div className="text-5xl sm:text-6xl font-black stat-glow mb-3" style={{ color, fontFamily: 'Nunito, sans-serif' }}>
                  <AnimatedCounter target={target} suffix={suffix} />
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{label}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[#AEA1EA]/50 text-xs mt-10">
            Data sourced from internal PXC client outcomes. Results may vary by practice size, specialty, and engagement level.
          </p>
        </div>
      </section>
      <SectionDivider />
      {/* ===== SECTION 8: BEFORE / AFTER ===== */}
      <section className="relative py-24 overflow-hidden" aria-label="Before and After Transformation" id="before-after">
        <div className="absolute inset-0">
          <img src={twoFemaleDocsImage} alt="" className="w-full h-full object-cover opacity-35" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#AEA1EA] text-sm font-bold uppercase tracking-widest mb-4">The Transformation</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
              What Your Practice Looks Like{" "}
              <span className="text-[#47d8ff]">Before and After</span>{" "}
              the Unified PXC System™
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/15 glow-cyan">
            <table className="w-full min-w-[700px] text-sm" data-testid="before-after-table">
              <thead>
                <tr className="bg-black border-b border-white/10">
                  <th className="text-left p-4 text-[#AEA1EA] font-bold text-base w-1/3">Area</th>
                  <th className="text-center p-4 text-[#FB0000] font-bold text-base w-1/3">Before PXC</th>
                  <th className="text-center p-4 text-[#47d8ff] font-bold text-base w-1/3">After PXC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { area: "Patient Satisfaction", before: "Inconsistent, unpredictable, complaint-driven", after: "Systematically high, reproducible, review-generating" },
                  { area: "Staff Retention", before: "Revolving door, constant training drain, low morale", after: "Culture-anchored teams with 31% avg. lower turnover" },
                  { area: "No-Show & Cancellation Rate", before: "15–28% no-show rates killing schedule efficiency", after: "Reduced to under 8% with engagement-based protocols" },
                  { area: "Online Reputation", before: "3.2–3.8 star average, negative reviews unchecked", after: "4.6–4.9 star average with active 5-star generation system" },
                  { area: "Revenue Stability", before: "Month-to-month uncertainty, Q4 panic every year", after: "Predictable revenue with retention-based growth model" },
                  { area: "AI & Technology Use", before: "Underutilized or zero AI integration, outdated tools", after: "AI-optimized workflows saving 8–12 hours per week" },
                  { area: "Leadership Clarity", before: "Reactive management, team misalignment, unclear vision", after: "IMPACT-aligned leadership with accountability systems" },
                  { area: "Your Time Freedom", before: "60-hour weeks, evenings in admin work, zero boundaries", after: "Systems running without you — reclaim your life" },
                ].map(({ area, before, after }, i) => (
                  <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-black/40" : "bg-black/40"}`}>
                    <td className="p-4 text-white font-semibold">{area}</td>
                    <td className="p-4 text-center text-[#FB0000]/80">{before}</td>
                    <td className="p-4 text-center text-[#47d8ff]/90 font-medium">{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* ===== SECTION 9: TESTIMONIALS ===== */}
      <section className="py-24 bg-black" aria-label="Client Testimonials" id="testimonials">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#AEA1EA] text-sm font-bold uppercase tracking-widest mb-4">Client Success Stories</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Real Practices. Real Results.{" "}
              <span className="text-[#47d8ff]">Real Transformation.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { quote: "We were losing 3–4 patients a week to a competitor and had no idea why. Jennifer came in, spent two weeks in our practice, and within 60 days we had a 52% improvement in our patient satisfaction scores and a staff team that actually communicated with each other. I wish I had called her two years earlier.", name: "Dr. T. Washington", role: "Internal Medicine, Hillsborough County", stars: 5 },
              { quote: "Jennifer's approach is nothing like any consultant I've worked with. She doesn't hand you a deck and disappear. She's in it with you — training your team, fixing the workflows, and making sure everything sticks. Our no-show rate dropped from 22% to under 7% in 90 days.", name: "Office Manager", role: "Multi-Provider Family Practice, Sarasota", stars: 5 },
              { quote: "The AI tools Jennifer introduced have saved our administrative team almost 10 hours a week. But more than that, the culture shift has been profound. My staff is proud of where they work now. That's something no EHR upgrade can give you.", name: "Dr. C. Rivera", role: "Pediatric Practice, Miami-Dade County", stars: 5 },
              { quote: "I was skeptical about another consulting engagement after two previous failures. But Jennifer's Unified PXC System is different — it's built for real practices with real constraints. Six months later, we've retained 94% of our staff and our Google rating went from 3.6 to 4.8. The ROI has been extraordinary.", name: "Practice Administrator", role: "Specialty Clinic, Palm Beach County", stars: 5, featured: true },
            ].map(({ quote, name, role, stars }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <BeamCard cyan className="h-full">
                  <Card
                    className="h-full border-0 bg-black"
                    data-testid={`testimonial-card-${i}`}
                  >
                    <CardContent className="pt-6 h-full flex flex-col">
                      <div className="flex gap-0.5 mb-4">
                        {Array.from({ length: stars }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 text-[#FB0000] fill-[#FB0000]" />
                        ))}
                      </div>
                      <Quote className="h-6 w-6 text-[#AEA1EA]/40 mb-3" />
                      <p className="text-white/85 text-sm leading-relaxed flex-grow italic">{quote}</p>
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <p className="text-white font-bold text-sm">{name}</p>
                        <p className="text-[#AEA1EA] text-xs">{role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </BeamCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== SECTION 10: INDUSTRY AUTHORITY ===== */}
      <section className="py-24 bg-black border-t border-white/5" aria-label="Industry Authority" id="authority">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#AEA1EA] text-sm font-bold uppercase tracking-widest mb-4">The Industry Agrees</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
              The Crisis in Independent Healthcare Is{" "}
              <span className="text-[#FB0000]">Not Optional to Ignore.</span>
            </h2>
            <p className="text-[#AEA1EA] mt-6 text-base max-w-3xl mx-auto leading-relaxed">
              Every major healthcare research organization is reporting the same truth: patient experience failures are the leading cause of independent practice closures. The data is undeniable. The window for action is narrowing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              { stat: "68%", desc: "of patients cite poor communication as the #1 reason for switching providers", source: "Press Ganey, 2024", color: "#FB0000" },
              { stat: "$15K+", desc: "average cost to replace one clinical or administrative team member", source: "MGMA Staff Compensation Report, 2024", color: "#47d8ff" },
              { stat: "4.2×", desc: "higher revenue growth in practices with high patient experience scores", source: "Deloitte Center for Health Solutions", color: "#AEA1EA" },
              { stat: "73%", desc: "of independent practices report burnout as their #1 operational threat", source: "AMA Physician Practice Benchmark Survey, 2024", color: "#FB0000" },
            ].map(({ stat, desc, source, color }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="card-glow-lilac bg-black border border-white/10 h-full text-center p-6 hover-elevate">
                  <div className="text-4xl font-black mb-3 stat-glow" style={{ color, fontFamily: 'Nunito, sans-serif' }}>{stat}</div>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{desc}</p>
                  <p className="text-[#AEA1EA]/60 text-xs font-semibold">{source}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white text-lg font-semibold mb-6 max-w-2xl mx-auto">
              The research confirms what you already feel. The question isn't whether to act. The question is whether to act{" "}
              <span className="text-[#47d8ff]">before or after the next revenue hit.</span>
            </p>
            <Button
              size="lg"
              className="cta-bounce bg-[#FB0000] text-white font-black px-10 py-6 text-base"
              style={{ fontFamily: 'Nunito, sans-serif' }}
              asChild
              data-testid="authority-button-book"
            >
              <a href="#book-session">
                Book My Free Strategy Session with Jennifer
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      {/* ===== SECTION 11: WHY PXC IS DIFFERENT ===== */}
      <section className="py-24 bg-black border-t border-white/5" aria-label="Why PXC Is Different" id="why-different">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <p className="text-[#AEA1EA] text-sm font-bold uppercase tracking-widest mb-4">Why PXC Stands Apart</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Why Patient eXperience Consulting Is{" "}
              <span className="text-[#47d8ff]">Different From Everything You've Tried Before</span>
            </h2>
          </motion.div>

          {/* AEO Capsule */}
          <div className="border-l-4 border-[#AEA1EA] rounded-r-xl p-6 mb-10 max-w-4xl mx-auto bg-[#a46bff29]">
            <p className="text-[#AEA1EA] font-bold uppercase tracking-widest mb-3 text-[19px]">Direct Answer</p>
            <p className="text-white text-[19px]">
              PXC is the <strong>only consulting firm in Florida</strong> that combines 21+ years of hands-on independent practice leadership experience, proprietary three-framework AI-enhanced transformation methodology, founder-led implementation (not junior associates), and a commitment to measurable results starting at 90 days — specifically built for independent and small-to-mid-size medical practices.
            </p>
          </div>

          {/* Personal story */}
          <div className="max-w-4xl mx-auto mb-14">
            <div className="border border-[#AEA1EA]/20 rounded-2xl p-8 card-glow-lilac bg-[#00bbff26]">
              <p className="text-white/90 text-base leading-relaxed mb-4">
                Here's what most consultants won't tell you: they've never actually run a clinic. They've studied one. They've consulted from the outside. And when you ask them to stay late because your front desk coordinator just quit the night before your son's soccer practice,{" "}
                <span className="text-[#AEA1EA] font-semibold">they go home.</span>
              </p>
              <p className="text-white/90 text-base leading-relaxed">
                Jennifer Radu has <em>been</em> that coordinator. She's been that practice manager. She's been the one holding the team together while the physician is running behind, the EHR is down, and three patients are in the waiting room. She didn't become a consultant by observing practices from conference rooms.{" "}
                <span className="text-[#47d8ff] font-bold">She earned her expertise from inside the walls of every type of practice this system is built to transform.</span>
              </p>
            </div>
          </div>

          {/* Answer capsule for guarantee */}
          <div className="border-l-4 border-[#FB0000] rounded-r-xl p-6 mb-14 max-w-4xl mx-auto bg-[#ff000017]">
            <p className="text-[#FB0000] text-xs font-bold uppercase tracking-widest mb-3">On The Self-Funding Guarantee — Contractual</p>
            <p className="text-white text-base leading-relaxed">
              The Self-Funding Guarantee is not a marketing promise. Documented savings from reduced staff turnover, reclaimed physician hours, and operational efficiency gains WILL exceed your total investment within 6 months — or PXC continues at no additional charge until they do. Every dollar is tracked, documented, and measured against the total investment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Award, title: "Founder-Led, Every Single Engagement", body: "Jennifer leads every client relationship personally. You don't get handed off to a junior associate or a generalist coach. You get the founder — with 21+ years of direct clinical experience." },
              { icon: RefreshCw, title: "Implementation Partner, Not Advice-Giver", body: "PXC doesn't hand you a strategy deck and disappear. We implement alongside your team — building the skills, systems, and habits that make transformation permanent." },
              { icon: Cpu, title: "AI-Enhanced + People-First (Not Either/Or)", body: "Every AI tool we deploy is paired with a human culture layer. Technology without culture breaks. Culture without technology stalls. We engineer both simultaneously." },
              { icon: Shield, title: "Self-Funding Guarantee — Contractual", body: "Documented savings WILL exceed your investment within 6 months — or PXC continues at no additional charge until they do. This is a contractual commitment backed by our zero failed implementation track record." },
              { icon: Heart, title: "Built Exclusively for Independent Practices", body: "Our systems aren't adapted from hospital frameworks. They were designed from the ground up for the operational realities of independent and small-to-mid-size medical practices." },
              { icon: BookOpen, title: "Published Author & Nationally Recognized CPPM", body: "Jennifer is a Certified Physician Practice Manager (CPPM) and published author. Her frameworks are grounded in both real-world clinical leadership and academic rigor." },
            ].map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="card-glow-lilac bg-black border border-[#AEA1EA]/20 h-full hover-elevate transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 border border-[#AEA1EA]/25 bg-[#aea1ea29]">
                      <Icon className="h-5 w-5 text-[#AEA1EA]" />
                    </div>
                    <CardTitle className="text-[#AEA1EA] font-bold text-base leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/65 text-sm leading-relaxed">{body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== SECTION 12: COMPARISON TABLE ===== */}
      <section className="relative py-24 overflow-hidden" aria-label="Comparison" id="comparison">
        <div className="absolute inset-0">
          <img src={lilGirlDocImage} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%] w-auto opacity-35 object-contain" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#FB0000]/15 to-black/80" />
          <div className="absolute inset-0 bg-[#FB0000]/10" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="uppercase tracking-widest mb-4 text-[#47d8ff] font-extrabold text-[20px]">The Honest Comparison</p>
            <h2 className="sm:text-4xl lg:text-5xl text-[#aea1ea] text-[76px] font-bold" style={{ fontFamily: 'Nunito, sans-serif' }}>
              How Does PXC Compare to Every Other Option?
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/15 card-glow-lilac">
            <table className="w-full min-w-[750px] text-sm" data-testid="comparison-table">
              <thead>
                <tr className="bg-black border-b border-white/10">
                  <th className="text-left p-4 text-[#AEA1EA] font-bold text-sm w-[30%]">Criteria</th>
                  <th className="text-center p-4 text-[#47d8ff] bg-[#47d8ff]/5 text-[28px] font-semibold">
                    <div className="flex flex-col items-center gap-1">
                      <span>PXC</span>
                      <Badge className="bg-[#47d8ff]/20 text-[#47d8ff] border border-[#47d8ff]/30 text-xs">Recommended</Badge>
                    </div>
                  </th>
                  <th className="text-center p-4 text-[#aea1ea] font-extrabold text-[17px]">Big Box Consultants</th>
                  <th className="text-center p-4 text-[#aea1ea] font-extrabold text-[17px]">DIY Courses</th>
                  <th className="text-center p-4 text-[#aea1ea] font-extrabold text-[17px]">In-House Only</th>
                  <th className="text-center p-4 text-[17px] font-extrabold text-[#aea1ea]">HR Firms</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criteria: "21+ Years Running Clinics", pxc: true, bigBox: false, diy: false, inHouse: false, hr: false },
                  { criteria: "Founder-Led, Hands-On", pxc: true, bigBox: false, diy: false, inHouse: null, hr: false },
                  { criteria: "AI + People-First Solutions", pxc: true, bigBox: "sometimes", diy: "rarely", inHouse: false, hr: true },
                  { criteria: "Implements WITH You", pxc: true, bigBox: false, diy: false, inHouse: true, hr: false },
                  { criteria: "Self-Funding Guarantee — Contractual", pxc: true, bigBox: false, diy: false, inHouse: false, hr: false },
                  { criteria: "Built for Independent Clinics", pxc: true, bigBox: false, diy: "generic", inHouse: null, hr: false },
                  { criteria: "Custom, Not Cookie-Cutter", pxc: true, bigBox: "rarely", diy: false, inHouse: "varies", hr: false },
                  { criteria: "Verified Outcomes (326+ Practitioners)", pxc: true, bigBox: "rarely", diy: false, inHouse: "internal", hr: false },
                ].map(({ criteria, pxc, bigBox, diy, inHouse, hr }, i) => {
                  const renderCell = (val: boolean | string | null) => {
                    if (val === true) return <Check className="h-[22px] w-[22px] text-[#47d8ff] mx-auto" strokeWidth={3.5} />;
                    if (val === false) return <X className="h-[22px] w-[22px] text-[#FB0000] mx-auto" strokeWidth={3.5} />;
                    const text = typeof val === "string" ? val : "—";
                    return <span className="text-[#AEA1EA] capitalize font-bold text-[17px]">{text}</span>;
                  };
                  return (
                    <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-black/30" : "bg-black/30"}`}>
                      <td className="p-4 font-semibold text-[#00eeffe6]">{criteria}</td>
                      <td className="p-4 text-center bg-[#47d8ff]/3">{renderCell(pxc)}</td>
                      <td className="p-4 text-center">{renderCell(bigBox)}</td>
                      <td className="p-4 text-center">{renderCell(diy)}</td>
                      <td className="p-4 text-center">{renderCell(inHouse)}</td>
                      <td className="p-4 text-center">{renderCell(hr)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[
              { q: "Is PXC right for my practice?", a: "If you're an independent or small-to-mid-size medical practice — in Florida or anywhere nationwide — experiencing patient retention issues, staff turnover, revenue instability, or operational chaos — yes." },
              { q: "What if I've tried consultants and failed?", a: "Most consultants give advice. PXC implements. The difference in outcomes is the difference between a strategy deck and an embedded partner." },
              { q: "Is the free session really free?", a: "100%. No credit card. No pitch hidden inside. Genuine diagnostic value. Many practices implement their first quick win before ever paying a dollar." },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-black border border-white/10 rounded-xl p-5 text-left">
                <p className="text-[#47d8ff] mb-2 font-extrabold text-[17px]">{q}</p>
                <p className="text-xs leading-relaxed text-[#aea1ea]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />
      {/* ===== SECTION 13: MEET JENNIFER (CAROUSEL) ===== */}
      <section className="py-24 bg-black" aria-label="Meet Jennifer Radu" id="jennifer">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#AEA1EA] font-bold uppercase tracking-widest mb-4 text-[20px]">Meet Your Partner</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Meet Jennifer Radu, CPPM —{" "}
              <span className="text-[#47d8ff]">Florida's Patient Experience Authority</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* LEFT: Carousel */}
            <div className="space-y-4">
              <div
                className="relative rounded-2xl overflow-hidden border border-[#AEA1EA]/30 card-glow-lilac aspect-[4/3] cursor-pointer"
                onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
                onTouchEnd={(e) => {
                  const diff = touchStartX.current - e.changedTouches[0].clientX;
                  if (Math.abs(diff) > 50) { diff > 0 ? nextSlide() : prevSlide(); }
                }}
              >
                {carouselImages.map((img, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ opacity: i === carouselIndex ? 1 : 0, zIndex: i === carouselIndex ? 2 : 1 }}
                  >
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-black/70 text-[#47d8ff] border border-[#47d8ff]/30 text-xs backdrop-blur-sm">
                        {img.label}
                      </Badge>
                    </div>
                  </div>
                ))}

                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/70 rounded-full flex items-center justify-center border border-white/20 transition-all duration-200 z-10 hover:bg-black"
                  style={{ zIndex: 10 }}
                  aria-label="Previous image" data-testid="carousel-prev"
                >
                  <ChevronLeft className="h-4 w-4 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/70 rounded-full flex items-center justify-center border border-white/20 transition-all duration-200 z-10 hover:bg-black"
                  style={{ zIndex: 10 }}
                  aria-label="Next image" data-testid="carousel-next"
                >
                  <ChevronRight className="h-4 w-4 text-white" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === carouselIndex ? "bg-[#47d8ff] w-6" : "bg-white/30 w-2"}`}
                    aria-label={`Go to slide ${i + 1}`}
                    data-testid={`carousel-dot-${i}`}
                  />
                ))}
              </div>

              {/* Award */}
              <div className="flex justify-center">
                <div className="flex items-center gap-4 bg-black border border-[#AEA1EA]/20 rounded-xl p-4 card-glow-lilac max-w-sm w-full">
                  <img src={pxAwardImage} alt="Patient Experience Professional Award — Jennifer Radu" className="h-14 w-14 object-contain rounded-lg flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold text-sm">Award-Winning Authority</p>
                    <p className="text-[#AEA1EA] text-xs">Certified Physician Practice Manager (CPPM)</p>
                    <p className="text-[#AEA1EA] text-xs">Published Author · National Speaker</p>
                  </div>
                </div>
              </div>

              {/* Quote box */}
              <div className="border-l-4 border-[#AEA1EA] pl-6 py-3 rounded-r-xl bg-[#aea1ea1f]">
                <p className="font-quote text-[#AEA1EA] text-lg leading-relaxed">
                  "I built the system I wish existed when I was on the other side of the desk — overwhelmed, under-resourced, and searching for a partner who actually understood what running a practice feels like from the inside."
                </p>
                <p className="text-sm mt-3 font-medium text-[#ffffff]">— Jennifer Radu, Founder & CPPM</p>
              </div>
            </div>

            {/* RIGHT: Bio */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#AEA1EA]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Teacher. Operator. Patient Experience Architect.
                </h3>
                <p className="text-white/85 text-base leading-relaxed">
                  Jennifer Radu isn't a theorist. She's a practitioner who spent 21+ years embedded inside independent medical practices — as a medical assistant, administrative leader, practice manager, and patient experience director — before founding PXC.
                </p>
                <p className="text-white/85 text-base leading-relaxed">
                  She's built front-desk systems from scratch. She's rebuilt team culture after mass turnover events. She's implemented AI tools in practices that still use paper scheduling. She has seen — and solved — every version of the problem you're facing right now.
                </p>
              </div>

              <div>
                <p className="text-[#47d8ff] font-bold text-sm mb-4 uppercase tracking-wide">Credentials & Expertise</p>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Certified Physician Practice Manager (CPPM)",
                    "Published Author — Patient Experience Leadership",
                    "National Healthcare Conference Speaker",
                    "21+ Years Independent Practice Operations",
                    "AI Healthcare Implementation Specialist",
                    "Creator of the Unified PXC System™",
                    "Podcast Guest — AI in Healthcare Series",
                    "Florida & National Healthcare Leadership Recognized Authority",
                  ].map((cred, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#47d8ff] flex-shrink-0" />
                      <span className="text-white/80 text-sm">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                className="cta-bounce bg-[#FB0000] text-white font-black px-8 py-5"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                asChild
                data-testid="jennifer-button-session"
              >
                <a href="#book-session">
                  Work With Jennifer — Book Your Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* ===== SECTION 14: PRICING (CONDENSED) ===== */}
      <section className="py-24 bg-black border-t border-white/5" aria-label="Engagement Tiers" id="pricing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#AEA1EA] text-sm font-bold uppercase tracking-widest mb-4">Choose Your Path</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Three Tiers of Transformation —{" "}
              <span className="text-[#47d8ff]">Built for Where Your Practice Is Today</span>
            </h2>
            <p className="text-[#AEA1EA] mt-6 text-base max-w-3xl mx-auto">
              Every engagement begins with the Practice Clarity &amp; AI Readiness Assessment™. We'll identify which tier is the right fit for your practice's current challenges, goals, and budget — before you invest a single dollar in transformation. Need a fast intensive instead of a full engagement? Ask about the <strong className="text-[#47d8ff]">AI Blueprint Day™</strong>, our one-day on-site sprint that delivers a custom AI implementation roadmap for your Florida practice in under 8 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { tier: "Entry", name: "Practice Clarity & AI Readiness Assessment™", tagline: "Diagnosis + AI Readiness", synopsis: "A dual-purpose assessment that tells you exactly where your practice is losing time, money, and AI opportunity. You receive an AI Readiness Score™, a dollar-specific Lost Revenue Report, a custom AI Opportunity Map, and an AI Governance Starter Kit. Jennifer personally analyzes every finding.", highlight: "From $997 · Clarity Guarantee or Full Refund", color: "#47d8ff", badge: "Start Here" },
              { tier: "Tier 2", name: "PXC IMPACT Blueprint™", tagline: "Fractional fCAIOX · 3–4 Months", synopsis: "Jennifer Radu embedded as your Fractional Chief AI Experience Officer for 3–4 months. 2–3 custom AI builds, AI Governance Framework, AI Champions Program, leadership development, culture redesign, and a Self-Funding Guarantee — Contractual.", highlight: "$8,500–$12,500/mo · Self-Funding Guarantee", color: "#AEA1EA", badge: "Most Popular" },
              { tier: "Tier 3", name: "EXCEL Transformation Partnership™", tagline: "Fractional fCAIOX · 12 Months", synopsis: "The full 12-month embedded transformation — Jennifer as your fCAIOX building the PXC AI Experience OS, 4–6 custom AI builds, full AI governance management, quarterly on-site visits, and compounding ROI documented every quarter. Most practices extend.", highlight: "$13,500–$17,500/mo · Self-Funding Guarantee", color: "#FB0000", badge: "Maximum Results" },
            ].map(({ tier, name, tagline, synopsis, highlight, color, badge }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="card-glow-lilac hover-elevate bg-black h-full flex flex-col transition-all duration-300"
                  style={{ border: `1px solid ${color}30` }}
                  data-testid={`pricing-card-${i}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <Badge className="text-xs font-bold px-3 py-1" style={{ backgroundColor: `${color}20`, color, border: `1px solid ${color}40` }}>
                        {tier}
                      </Badge>
                      <Badge className="bg-white/10 text-white text-xs px-3 py-1">{badge}</Badge>
                    </div>
                    <CardTitle className="text-white font-black text-lg leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>{name}</CardTitle>
                    <p className="font-bold text-sm" style={{ color }}>{tagline}</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col gap-4">
                    <p className="text-white/70 text-sm leading-relaxed">{synopsis}</p>
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color }} />
                        <p className="text-xs font-bold" style={{ color }}>{highlight}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mb-10">
            <Card className="card-glow-lilac hover-elevate transition-all duration-300 bg-black border border-[#AEA1EA]/30">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#AEA1EA]/10 flex items-center justify-center border border-[#AEA1EA]/30">
                    <Users className="h-7 w-7 text-[#AEA1EA]" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-white font-black text-base" style={{ fontFamily: 'Nunito, sans-serif' }}>The Practice Professionals Playground™</h3>
                      <Badge className="bg-[#AEA1EA]/20 text-[#AEA1EA] border border-[#AEA1EA]/30 text-xs">Community Add-On</Badge>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      An exclusive online community for continuous improvement, peer collaboration, monthly group coaching, tools, templates, and ongoing support — designed to sustain and accelerate the results from any tier engagement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-[#AEA1EA] mb-6 text-sm">Not sure which tier is right for you? Start with the Assessment and we'll tell you exactly.</p>
            <Button
              size="lg"
              className="cta-bounce bg-[#FB0000] text-white font-black px-10 py-6 text-base"
              style={{ fontFamily: 'Nunito, sans-serif' }}
              asChild
              data-testid="pricing-button-session"
            >
              <Link href="/contact">
                Book My Free Strategy Session with Jennifer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <SectionDivider />
      {/* ===== SECTION 15: 3-STEP PROCESS ===== */}
      <section className="relative py-24 overflow-hidden" aria-label="How It Works" id="process">
        <div className="absolute inset-0">
          <img src={threeStaffLaughing} alt="" className="w-full h-full object-cover opacity-30" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-br from-black/92 via-black/85 to-black/92" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#AEA1EA] text-sm font-bold uppercase tracking-widest mb-4">Your Transformation Roadmap</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
              How the{" "}
              <span className="text-[#47d8ff]">Unified PXC System™</span>{" "}
              Works in 3 Phases
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[3.5rem] left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-0.5 bg-gradient-to-r from-[#47d8ff]/50 via-[#AEA1EA]/50 to-[#FB0000]/50 z-0" />

            {[
              { step: "01", phase: "Engage", title: "Practice Clarity & AI Readiness Assessment™", desc: "We start with a comprehensive diagnostic of your practice AND your AI readiness. You walk away with an AI Readiness Score™, a dollar-specific Lost Revenue Report, a custom AI Opportunity Map, and a precise transformation plan. The Clarity Guarantee applies — full refund if it doesn't deliver clarity.", color: "#47d8ff", icon: Target },
              { step: "02", phase: "Educate", title: "Practice Diagnosis + System Deployment", desc: "We go deep. Full practice assessment, team training, IMPACT Framework integration, workflow redesign, and the first wave of AI tool deployment — all implemented alongside your existing team with zero disruption.", color: "#AEA1EA", icon: BookOpen },
              { step: "03", phase: "Excel", title: "Transformation, Accountability & Results", desc: "The metrics come in. Patient satisfaction scores rise. Staff turnover drops. No-shows decline. Revenue stabilizes. And the AI-Fueled PX Cycle ensures it doesn't stop — building momentum long after the engagement ends.", color: "#FB0000", icon: TrendingUp },
            ].map(({ step, phase, title, desc, color, icon: Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative z-10"
              >
                <Card className="card-glow-lilac hover-elevate bg-black border border-white/10 h-full text-center transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border-2"
                      style={{ backgroundColor: `${color}15`, borderColor: color }}>
                      <Icon className="h-6 w-6" style={{ color }} />
                    </div>
                    <div className="text-xs font-black mb-1" style={{ color }}>PHASE {step} — {phase.toUpperCase()}</div>
                    <CardTitle className="text-white font-black text-base leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="cta-bounce bg-[#FB0000] text-white font-black px-10 py-6 text-base"
              style={{ fontFamily: 'Nunito, sans-serif' }}
              asChild
              data-testid="process-button-start"
            >
              <a href="#book-session">
                Start Phase 1 — Book Your Free Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      {/* ===== SECTION 16: STRATEGY SESSION CTA + YOUTUBE PLACEHOLDER ===== */}
      <section className="py-24 bg-black border-t border-white/5" aria-label="Book Your Strategy Session" id="book-session">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#AEA1EA] text-sm font-bold uppercase tracking-widest mb-4">Your Next Step</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Your Free Strategy Session with Jennifer —{" "}
              <span className="text-[#FB0000]">Zero Obligation. 100% Strategic Value.</span>
            </h2>
            <p className="text-[#AEA1EA] mt-6 text-base max-w-3xl mx-auto leading-relaxed">
              45 minutes. Zero sales pressure. 100% clinical strategy focus. This is a genuine working session — not a discovery call with a hidden pitch at the end.
            </p>
          </div>

          {/* YouTube Video Placeholder */}
          <div className="mb-14 max-w-3xl mx-auto">
            <div className="relative w-full aspect-video bg-black rounded-2xl border border-[#47d8ff]/25 overflow-hidden group glow-cyan cursor-pointer">
              <img src={jenniferHeadshot} alt="Watch: Your Free Strategy Session with Jennifer Explained" className="w-full h-full object-cover object-top opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#FB0000] rounded-full flex items-center justify-center glow-red-intense group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FB0000] rounded-full flex items-center justify-center flex-shrink-0">
                    <Play className="h-3 w-3 text-white ml-0.5" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-white font-bold text-sm truncate">Your Free Strategy Session with Jennifer — What to Expect</p>
                    <p className="text-[#AEA1EA] text-xs">Jennifer Radu, CPPM · Patient eXperience Consulting</p>
                  </div>
                  <Badge className="bg-[#AEA1EA]/20 text-[#AEA1EA] border border-[#AEA1EA]/30 text-xs flex-shrink-0">
                    Video — Coming Soon
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: What You Get */}
            <div className="space-y-5">
              <h3 className="text-xl font-black text-[#AEA1EA]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                In Your Free Strategy Session, You Will Get:
              </h3>
              <div className="space-y-3">
                {[
                  "A crystal-clear picture of where your practice is losing patients, staff, and revenue right now",
                  "Your top 3 quick wins — specific, implementable actions you can take immediately",
                  "A visual map of your Experience Instability Trap™ and how to escape it",
                  "An honest assessment of whether PXC is the right fit for your practice",
                  "A custom next-step plan with zero obligation to continue",
                  "Tangible strategic value — whether you hire us or not",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#47d8ff] flex-shrink-0 mt-0.5" />
                    <span className="text-white/85 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#FB0000]/10 border border-[#FB0000]/30 rounded-xl p-4 mt-6">
                <div className="flex items-start gap-3">
                  <Flame className="h-5 w-5 text-[#FB0000] flex-shrink-0 mt-0.5" />
                  <p className="text-white/85 text-sm leading-relaxed">
                    <strong className="text-[#FB0000]">Limited availability.</strong> Jennifer personally leads every Strategy Session. She accepts a limited number of engagements per month. Spots are filled on a first-come, first-served basis.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: CTAs */}
            <div className="space-y-6">
              <div className="bg-black border border-[#AEA1EA]/25 rounded-2xl p-8 card-glow-lilac space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-[#47d8ff] mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>Free</div>
                  <p className="text-white/60 text-sm line-through">Valued at $1,200</p>
                  <p className="text-white font-bold mt-1">45-Minute Strategy Session with Jennifer</p>
                </div>

                <Button
                  size="lg"
                  className="w-full cta-bounce bg-[#FB0000] text-white font-black text-base py-6"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                  asChild
                  data-testid="cta-button-book-main"
                >
                  <Link href="/contact">
                    Claim My Free Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <div className="flex flex-col gap-2 text-center">
                  <p className="text-[#AEA1EA]/70 text-xs">No credit card. No obligation. 100% confidential.</p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <Shield className="h-3 w-3 text-[#47d8ff]" />
                      <span className="text-[#47d8ff] text-xs">HIPAA Compliant</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="h-3 w-3 text-[#47d8ff]" />
                      <span className="text-[#47d8ff] text-xs">CPPM Certified</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a href="mailto:impact@patientexperienceconsulting.com"
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3 hover-elevate transition-all duration-200 text-white/80 text-xs"
                  data-testid="contact-email-link">
                  <Mail className="h-4 w-4 text-[#AEA1EA] flex-shrink-0" />
                  <span>Email Jennifer</span>
                </a>
                <a
                  href="tel:+19412392309"
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3 hover-elevate transition-all duration-200 text-white/80 text-xs"
                  data-testid="contact-phone-link">
                  <Phone className="h-4 w-4 text-[#AEA1EA] flex-shrink-0" />
                  <span>(941) 239-2309</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== SECTION 17: FAQ ===== */}
      <section className="py-24 bg-black border-t border-white/5" aria-label="Frequently Asked Questions" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#AEA1EA] text-sm font-bold uppercase tracking-widest mb-4">You Have Questions</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Frequently Asked{" "}
              <span className="text-[#47d8ff]">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqData.map(({ q, a }, i) => {
              const isOpen = openFaqs.has(i);
              return (
                <div
                  key={i}
                  className="card-glow-lilac bg-black border border-white/10 rounded-xl overflow-hidden hover:border-[#AEA1EA]/30 transition-all duration-300"
                  data-testid={`faq-item-${i}`}
                >
                  <button
                    id={`faq-toggle-${i}`}
                    className="w-full flex items-start justify-between gap-4 p-5 text-left"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    data-testid={`faq-toggle-${i}`}
                  >
                    <span className="text-white font-bold text-sm leading-relaxed flex-grow">{q}</span>
                    <div className="flex-shrink-0 mt-0.5">
                      {isOpen
                        ? <ChevronUp className="h-5 w-5 text-[#47d8ff]" />
                        : <ChevronDown className="h-5 w-5 text-[#AEA1EA]" />
                      }
                    </div>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-toggle-${i}`}
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] border-t border-white/5" : "grid-rows-[0fr]"}`}
                    data-testid={`faq-answer-${i}`}
                  >
                    <div className="overflow-hidden">
                      <p className={`text-white/75 text-sm leading-relaxed px-5 ${isOpen ? "pt-4 pb-5" : ""}`}>{a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#AEA1EA] mb-4 text-sm">Still have questions? We'll answer them all in your free Strategy Session.</p>
            <Button
              size="lg"
              className="cta-bounce bg-[#FB0000] text-white font-black px-10 py-6 text-base"
              style={{ fontFamily: 'Nunito, sans-serif' }}
              asChild
              data-testid="faq-button-session"
            >
              <Link href="/contact">
                Book My Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <SectionDivider />
      {/* ===== SECTION 18: EMOTIONAL CLOSE ===== */}
      <section className="py-24 bg-black border-t border-white/5" aria-label="Envision Your Transformed Practice" id="vision">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}
          >
            <p className="text-[#AEA1EA] font-bold uppercase tracking-widest mb-6 text-[20px]">Imagine This</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-10" style={{ fontFamily: 'Nunito, sans-serif' }}>
              What Does Your Practice Look Like{" "}
              <span className="text-[#47d8ff]">Six Months From Now?</span>
            </h2>

            <div className="space-y-4 mb-12 text-left max-w-3xl mx-auto">
              {[
                { text: "You walk in Monday morning and your front desk team is energized, aligned, and handling the day before you even hang up your coat.", icon: Zap },
                { text: "Your patient satisfaction scores are climbing — and your phone is ringing with new patient referrals generated by your growing 5-star reputation.", icon: Star },
                { text: "Your no-show rate is under 8%. Your schedule is full. Your revenue is predictable.", icon: BarChart3 },
                { text: "Your staff has been here for over a year. They know the systems. They believe in the culture. They're staying because they're proud of where they work.", icon: Heart },
                { text: "You're no longer in the parking lot at 7am dreading your day. You're walking in with purpose — because the machine runs, and you built it that way.", icon: Target },
                { text: "You leave at 5pm. You're present at your son's soccer practice. You remember why you went into medicine in the first place.", icon: Activity },
              ].map(({ text, icon: Icon }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-black border border-[#AEA1EA]/15 rounded-xl p-4 card-glow-lilac"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#47d8ff]/10 flex items-center justify-center flex-shrink-0 border border-[#47d8ff]/25">
                    <Icon className="h-5 w-5 text-[#47d8ff]" />
                  </div>
                  <p className="text-white/85 text-sm leading-relaxed pt-1.5">{text}</p>
                </motion.div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="border-l-4 border-[#FB0000] rounded-r-2xl p-8 text-[29px] font-bold bg-[#fb00001a]">
                <p className="font-quote text-xl leading-relaxed text-[#00d9ff]">
                  "This is not a dream. This is the documented outcome of the Unified PXC System™ — deployed across 326+ practitioners, verified by metrics, guaranteed by contract."
                </p>
                <p className="text-[#AEA1EA] mt-4 font-semibold text-sm">— Jennifer Radu, Founder & CPPM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ===== SECTION 19: FINAL CTA ===== */}
      <section className="relative py-24 bg-black border-t border-white/5 overflow-hidden" aria-label="Final Call to Action" id="final-cta">
        <AuroraBackdrop opacity={0.1} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeamCard className="rounded-3xl">
          <div className="relative rounded-3xl overflow-hidden border border-[#AEA1EA]/30 card-glow-lilac">
            <div className="absolute inset-0 bg-gradient-to-br from-[#AEA1EA]/10 via-black to-[#47d8ff]/8" />
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-[#47d8ff]/15 animate-pulse" />
            <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full border border-[#AEA1EA]/10 animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 p-10 sm:p-16 text-center">
              <Badge className="bg-[#FB0000]/20 text-[#FB0000] border border-[#FB0000]/40 text-sm px-4 py-1 mb-6">
                The Decision That Changes Everything
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
                The Only Question Left Is:{" "}
                <span className="text-[#FB0000]">How Long Will You Wait?</span>
              </h2>

              <p className="text-[#AEA1EA] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Every week you wait is another week of revenue leaking through operational gaps, patients walking out your door, and your team burning out. The Unified PXC System™ has a 100% implementation success rate.{" "}
                <span className="text-white font-bold">The only risk is not starting.</span>
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
                {[
                  { label: "Completely Free Session", icon: CheckCircle2 },
                  { label: "No Credit Card Required", icon: Shield },
                  { label: "Self-Funding Guarantee — Contractual", icon: Award },
                ].map(({ label, icon: Icon }, i) => (
                  <div key={i} className="flex items-center justify-center gap-2 bg-white/5 rounded-xl p-3 border border-white/10">
                    <Icon className="h-4 w-4 text-[#47d8ff]" />
                    <span className="text-white text-sm font-semibold">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="cta-bounce bg-[#FB0000] text-white font-black text-lg px-12 py-7"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                  asChild
                  data-testid="final-cta-button-book"
                >
                  <Link href="/contact">
                    Apply For My Complimentary Strategy Session with Jennifer
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm flex-wrap">
                <a
                  href="mailto:impact@patientexperienceconsulting.com"
                  className="flex items-center gap-2 text-[#AEA1EA] hover:text-white transition-colors"
                  data-testid="final-email-link"
                >
                  <Mail className="h-4 w-4" />
                  impact@patientexperienceconsulting.com
                </a>
                <div className="w-px h-4 bg-white/20 hidden sm:block" />
                <a
                  href="tel:+19412392309"
                  className="flex items-center gap-2 text-[#AEA1EA] hover:text-white transition-colors"
                  data-testid="final-phone-link"
                >
                  <Phone className="h-4 w-4" />
                  (941) 239-2309
                </a>
              </div>

              <p className="text-white/40 text-xs mt-8">
                Serving Independent Medical Practices in Central & Southern Florida & Nationwide · HIPAA-Compliant Systems · CPPM Certified
              </p>
            </div>
          </div>
          </BeamCard>
        </div>
      </section>

      <LatestArticles />
    </div>
  );
}
