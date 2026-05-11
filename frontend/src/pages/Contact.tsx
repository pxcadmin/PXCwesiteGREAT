import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Search,
  ClipboardList,
  Calendar,
  Mic,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  Sparkles,
  AlertTriangle,
  Shield,
  TrendingDown,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Link } from "wouter";
import { useSEO, breadcrumbJsonLd, faqJsonLd } from "@/lib/useSEO";
import { AnswerCapsule } from "@/components/effects/AnswerCapsule";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { SectionDivider } from "@/components/effects/SectionDivider";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const SCORECARD_QUESTIONS = [
  {
    domain: "Leadership",
    question: "How often do you feel like you're managing daily fires instead of actually leading?",
    options: [
      { label: "Almost never — I have time to lead strategically" },
      { label: "Rarely — mostly proactive with occasional fires" },
      { label: "Sometimes — roughly half my week is reactive" },
      { label: "Often — most days feel reactive and chaotic" },
      { label: "Every single day — I'm always in crisis mode" },
    ],
  },
  {
    domain: "Team Culture",
    question: "How would you describe your team's current engagement, morale, and satisfaction?",
    options: [
      { label: "Excellent — team is engaged, motivated, and happy" },
      { label: "Good — mostly positive with minor friction" },
      { label: "Mixed — some engaged, others checked out" },
      { label: "Poor — low morale, frequent complaints" },
      { label: "Critical / broken culture — serious dysfunction" },
    ],
  },
  {
    domain: "Patient Experience",
    question: "How consistent is the patient experience regardless of who's working?",
    options: [
      { label: "Very consistent — patients get the same experience every visit" },
      { label: "Mostly consistent — small variations that rarely matter" },
      { label: "Inconsistent — depends heavily on who's working" },
      { label: "Very inconsistent — patients frequently complain" },
      { label: "Chaotic / unpredictable — no reliable patient journey" },
    ],
  },
  {
    domain: "Systems & AI",
    question: "How well is your practice using systems and technology to reduce admin burden?",
    options: [
      { label: "Excellent automation — admin is mostly hands-off" },
      { label: "Good systems — some manual tasks remain" },
      { label: "Basic tools — significant manual work daily" },
      { label: "Minimal systems — mostly manual and reactive" },
      { label: "No systems at all — everything is done by hand" },
    ],
  },
  {
    domain: "Staff Retention",
    question: "How often do high-performing staff leave within 18 months?",
    options: [
      { label: "Rarely — we retain top performers year after year" },
      { label: "Occasionally — normal turnover, not a concern" },
      { label: "Sometimes — we lose a few good people each year" },
      { label: "Frequently — turnover is a recurring problem" },
      { label: "Constant revolving door — we can't keep good people" },
    ],
  },
];

type Stage = "Stability" | "Warning" | "Crisis";

function getStage(score: number): { stage: Stage; color: string; description: string } {
  if (score <= 10) {
    return {
      stage: "Stability",
      color: "#47d8ff",
      description: "Your practice is operating in a healthy zone. Focus on optimization and growth.",
    };
  }
  if (score <= 17) {
    return {
      stage: "Warning",
      color: "#AEA1EA",
      description: "Cracks are showing. Without intervention, friction will compound into crisis within 6–12 months.",
    };
  }
  return {
    stage: "Crisis",
    color: "#FB0000",
    description: "Your practice is in active crisis. Immediate strategic intervention is required.",
  };
}

function ScorecardQuiz() {
  const [stage, setStage] = useState<"intro" | "questions" | "email" | "results">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const totalScore = answers.reduce((sum, a) => sum + a, 0);
  const result = getStage(totalScore);
  const progress = ((currentQ + (answers.length > currentQ ? 1 : 0)) / SCORECARD_QUESTIONS.length) * 100;

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQ < SCORECARD_QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setStage("email");
    }
  };

  const handleBack = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && firstName) setStage("results");
  };

  const topDomain = (() => {
    if (answers.length < SCORECARD_QUESTIONS.length) return null;
    let maxIdx = 0;
    let maxVal = -1;
    answers.forEach((v, i) => {
      if (v > maxVal) {
        maxVal = v;
        maxIdx = i;
      }
    });
    return SCORECARD_QUESTIONS[maxIdx].domain;
  })();

  if (stage === "intro") {
    return (
      <div className="text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-[#FB0000]/10 border border-[#FB0000]/30 flex items-center justify-center">
          <Search className="h-10 w-10 text-[#FB0000]" />
        </div>
        <h3 className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
          Discover Your Practice Stability Score
        </h3>
        <p className="text-[#AEA1EA] max-w-xl mx-auto leading-relaxed">
          5 questions. 2 minutes. You'll get your Experience Instability Score (5–25), your stage (Stability / Warning / Crisis), and your #1 bottleneck — instantly.
        </p>
        <MagneticButton>
          <Button
            size="lg"
            className="cta-bounce bg-[#FB0000] text-white font-black text-base px-10 py-6"
            style={{ fontFamily: 'Nunito, sans-serif' }}
            onClick={() => setStage("questions")}
            data-testid="button-start-scorecard"
          >
            Start the Scorecard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </MagneticButton>
      </div>
    );
  }

  if (stage === "questions") {
    const q = SCORECARD_QUESTIONS[currentQ];
    const selected = answers[currentQ];

    return (
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-[#AEA1EA] uppercase tracking-widest">
              Question {currentQ + 1} of {SCORECARD_QUESTIONS.length}
            </span>
            <span className="text-xs font-mono text-[#47d8ff] font-bold">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#47d8ff] to-[#AEA1EA] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Badge className="bg-[#47d8ff]/10 text-[#47d8ff] border border-[#47d8ff]/30 font-mono text-[10px] tracking-widest uppercase">
          {q.domain}
        </Badge>

        <h4 className="text-xl sm:text-2xl font-black text-white leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
          {q.question}
        </h4>

        <div className="space-y-3">
          {q.options.map((opt, i) => {
            const value = i + 1;
            const isSelected = selected === value;
            return (
              <button
                key={i}
                onClick={() => handleAnswer(value)}
                data-testid={`scorecard-option-${currentQ}-${value}`}
                className={`w-full text-left flex items-start gap-4 p-4 rounded-xl border-2 transition-all hover-elevate ${
                  isSelected
                    ? "border-[#47d8ff] bg-[#47d8ff]/5"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 font-mono font-bold transition-all ${
                    isSelected
                      ? "bg-[#47d8ff] text-black"
                      : "bg-white/5 text-[#AEA1EA] border border-white/10"
                  }`}
                >
                  {value}
                </div>
                <p className={`text-sm leading-relaxed pt-1 ${isSelected ? "text-white" : "text-[#AEA1EA]"}`}>
                  {opt.label}
                </p>
              </button>
            );
          })}
        </div>

        <div className="flex gap-3 pt-2">
          {currentQ > 0 && (
            <Button
              variant="outline"
              size="lg"
              onClick={handleBack}
              className="cta-bounce-lilac border-white bg-[#AEA1EA]/20 text-white font-black"
              style={{ fontFamily: 'Nunito, sans-serif' }}
              data-testid="button-scorecard-back"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          )}
          <Button
            size="lg"
            className="flex-1 cta-bounce bg-[#FB0000] text-white font-black"
            style={{ fontFamily: 'Nunito, sans-serif' }}
            onClick={handleNext}
            disabled={!selected}
            data-testid="button-scorecard-next"
          >
            {currentQ === SCORECARD_QUESTIONS.length - 1 ? "See My Results" : "Next Question"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  }

  if (stage === "email") {
    return (
      <form onSubmit={handleEmailSubmit} className="space-y-6 text-center">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-[#AEA1EA]">Your Score Is Ready</p>
          <div className="text-7xl sm:text-8xl font-black leading-none" style={{ fontFamily: 'Nunito, sans-serif', color: result.color }}>
            {totalScore}
          </div>
          <p className="text-sm text-[#AEA1EA]">Out of 25</p>
          <div className="max-w-xs mx-auto h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-700"
              style={{ width: `${(totalScore / 25) * 100}%`, background: result.color }}
            />
          </div>
        </div>

        <div className="space-y-1">
          <h4 className="text-xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Enter your name and email to receive your full report
          </h4>
          <p className="text-sm text-[#AEA1EA]">No spam. HIPAA-aware handling. Unsubscribe anytime.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto">
          <Input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            data-testid="input-scorecard-firstname"
            className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
          />
          <Input
            type="email"
            placeholder="you@practice.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-testid="input-scorecard-email"
            className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="cta-bounce bg-[#FB0000] text-white font-black px-10 py-6"
          style={{ fontFamily: 'Nunito, sans-serif' }}
          data-testid="button-scorecard-view-results"
        >
          View My Full Report
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>
    );
  }

  // Results
  const StageIcon = result.stage === "Crisis" ? AlertTriangle : result.stage === "Warning" ? TrendingDown : Shield;

  return (
    <div className="space-y-8 text-center">
      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-[#AEA1EA]">Your Practice Stability Score</p>
        <div className="text-7xl sm:text-8xl font-black leading-none" style={{ fontFamily: 'Nunito, sans-serif', color: result.color }}>
          {totalScore}<span className="text-3xl text-white/40">/25</span>
        </div>
        <Badge
          className="text-base font-black px-4 py-2"
          style={{ background: `${result.color}1A`, color: result.color, border: `1px solid ${result.color}40` }}
        >
          <StageIcon className="h-4 w-4 mr-2" />
          {result.stage} Stage
        </Badge>
      </div>

      <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
        <CardContent className="p-6 text-left space-y-4">
          <p className="text-[#AEA1EA] leading-relaxed">{result.description}</p>
          {topDomain && (
            <div className="border-t border-white/10 pt-4">
              <p className="font-mono text-xs uppercase tracking-widest text-[#AEA1EA] mb-1">Your #1 Bottleneck</p>
              <p className="text-2xl font-black text-[#FB0000]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {topDomain}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="space-y-3">
        <p className="text-white font-bold">
          {firstName}, your full personalized PDF report is on its way to <span className="text-[#47d8ff]">{email}</span>.
        </p>
        <p className="text-sm text-[#AEA1EA]">
          Want Jennifer to walk you through your results? Book your free Strategy Session below.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <MagneticButton>
          <Button
            size="lg"
            className="cta-bounce bg-[#FB0000] text-white font-black px-8"
            style={{ fontFamily: 'Nunito, sans-serif' }}
            onClick={() => {
              const el = document.getElementById("contact-form");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="button-scorecard-book-session"
          >
            Book My Free Strategy Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </MagneticButton>
        <Button
          variant="outline"
          size="lg"
          className="cta-bounce-lilac border-white bg-[#AEA1EA]/20 text-white font-black px-8"
          style={{ fontFamily: 'Nunito, sans-serif' }}
          onClick={() => {
            setStage("intro");
            setCurrentQ(0);
            setAnswers([]);
            setEmail("");
            setFirstName("");
          }}
          data-testid="button-scorecard-retake"
        >
          Retake the Scorecard
        </Button>
      </div>
    </div>
  );
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useSEO({
    title: "Book Your Strategy Session | Patient eXperience Consulting (PXC) — Jennifer Radu, fCAIOX, Bradenton, FL",
    description: "Book your free 45-minute Strategy Session with Jennifer Radu, fCAIOX. Take the 2-minute Practice Stability Scorecard, complete the Discovery Questionnaire, or step into the Practice Clarity & AI Readiness Assessment™, PXC IMPACT Blueprint™, EXCEL Transformation Partnership™ (Self-Funding Guarantee — Contractual), Practice Professionals Playground™, or AI Blueprint Day™ workshop. Headquartered in Bradenton, FL — serving Sarasota, Manatee County, all 16 Central + Southern Florida counties, and nationwide.",
    path: "/contact",
    keywords: "book strategy session, medical practice consultation Florida, Jennifer Radu strategy call, Practice Clarity & AI Readiness Assessment, PXC IMPACT Blueprint, EXCEL Transformation Partnership, Practice Professionals Playground, AI Blueprint Day workshop, Self-Funding Guarantee Contractual, practice stability scorecard, healthcare consultant booking, PXC contact, Bradenton FL medical practice consulting, Sarasota healthcare consultant, Manatee County medical consulting",
    jsonLd: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
      faqJsonLd([
        {
          question: "Is the Strategy Session really free?",
          answer:
            "Yes, completely. No fees, no hidden costs. The Strategy Session with Jennifer is our way of ensuring we only work with practices we know we can help. It's not a sales call — it's a diagnostic conversation.",
        },
        {
          question: "What happens if I'm not ready to hire a consultant yet?",
          answer:
            "That's completely fine. The Strategy Session gives you value regardless of what you decide. Many people walk away with actionable insights they implement immediately on their own.",
        },
        {
          question: "How is PXC different from other healthcare consultants?",
          answer:
            "Jennifer Radu built PXC from 21+ years of actually running medical practices — not studying them. We integrate AI-powered tools with human-centered frameworks, implement alongside your team, and back it with the Self-Funding Guarantee — Contractual.",
        },
        {
          question: "Do you work with practices outside Florida?",
          answer:
            "Yes — we offer virtual consulting nationwide. On-site visits for EXCEL Transformation Partnership™ clients are included for Florida-based practices. Out-of-state travel is quoted separately.",
        },
        {
          question: "How soon can we start?",
          answer:
            "After the Strategy Session and Practice Clarity & AI Readiness Assessment™, implementation typically begins within 2–3 weeks of contract signing.",
        },
        {
          question: "Can I book Jennifer for a speaking engagement or workshop?",
          answer:
            "Yes — Jennifer is available for AI Blueprint Day™ workshops, speaking engagements, and leadership intensives for medical practices, associations, conferences, and hospital systems.",
        },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact PXC — Book Your Strategy Session",
        url: "https://patientexperienceconsulting.com/contact",
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://patientexperienceconsulting.com/about#jennifer-radu",
        name: "Jennifer Radu",
        givenName: "Jennifer",
        familyName: "Radu",
        honorificSuffix: "CPPM, fCAIOX",
        jobTitle: "Founder & Fractional Chief AI Experience Officer (fCAIOX)",
        worksFor: { "@id": "https://patientexperienceconsulting.com/#organization" },
        url: "https://patientexperienceconsulting.com/about",
        image: "https://patientexperienceconsulting.com/jennifer-radu.jpg",
        sameAs: [
          "https://www.linkedin.com/in/jenniferradu/",
          "https://patientexperienceconsulting.com/about",
        ],
        knowsAbout: [
          "Medical practice management",
          "Patient experience transformation",
          "AI integration for healthcare",
          "Healthcare leadership development",
          "Staff retention",
          "Fractional Chief AI Experience Officer",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Certified Physician Practice Manager (CPPM)",
            credentialCategory: "Professional Certification",
            recognizedBy: { "@type": "Organization", name: "American Academy of Professional Coders (AAPC)" },
          },
        ],
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "American Academy of Professional Coders (AAPC)",
            url: "https://www.aapc.com/",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          telephone: "+1-941-239-2309",
          email: "impact@patientexperienceconsulting.com",
          areaServed: "US",
          availableLanguage: ["English"],
        },
      },
    ],
  });

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      practiceName: "",
      message: "",
      inquiryType: "strategy-session",
    },
  });

  const onSubmit = async (data: InsertContactSubmission) => {
    console.log("Form data:", data);
    setIsSubmitted(true);
    form.reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const faqs = [
    {
      question: "Is the Strategy Session really free?",
      answer:
        "Yes, completely. No fees, no hidden costs. The Strategy Session with Jennifer is our way of ensuring we only work with practices we know we can help. It's not a sales call — it's a diagnostic conversation.",
    },
    {
      question: "What happens if I'm not ready to hire a consultant yet?",
      answer:
        "That's completely fine. The Strategy Session gives you value regardless of what you decide. Many people walk away with actionable insights they implement immediately on their own. When you are ready, we'll be here.",
    },
    {
      question: "How is PXC different from other healthcare consultants?",
      answer:
        "Jennifer Radu built PXC from 21+ years of actually running medical practices — not studying them. We integrate AI-powered tools with human-centered frameworks, implement alongside your team, and back it with the Self-Funding Guarantee — Contractual.",
    },
    {
      question: "What if I've tried consultants before and it didn't work?",
      answer:
        "That's actually the most common background of our best clients. Most consulting firms advise and leave. PXC embeds and implements. Our Self-Funding Guarantee — Contractual means we keep working until results are achieved.",
    },
    {
      question: "Do you work with practices outside Florida?",
      answer:
        "Yes — we offer virtual consulting nationwide. On-site visits for EXCEL Transformation Partnership™ clients are included for Florida-based practices. Out-of-state travel is quoted separately.",
    },
    {
      question: "How soon can we start?",
      answer:
        "After the Strategy Session and Practice Clarity & AI Readiness Assessment™, implementation typically begins within 2–3 weeks of contract signing. Jennifer keeps availability limited to ensure every client gets her full attention.",
    },
    {
      question: "Can I book Jennifer for a speaking engagement or workshop?",
      answer:
        "Yes — Jennifer is available for AI Blueprint Day™ workshops, speaking engagements, and leadership intensives for medical practices, associations, conferences, and hospital systems. Use the form below or email impact@patientexperienceconsulting.com with your event details.",
    },
  ];

  const paths = [
    {
      icon: Search,
      color: "#FB0000",
      badge: "2 Minutes · Free · Instant Results",
      title: "Discover Your Practice Stability Score",
      description:
        "Not sure where your practice stands? Take the 2-minute Practice Stability Scorecard. Get your Experience Instability Score and a free personalized action report — instantly.",
      bullets: [
        "Your score (5–25) + stage (Stability / Warning / Crisis)",
        "Personalized PDF action report",
        "Clarity on your #1 bottleneck",
      ],
      cta: "Take the Scorecard Now",
      anchor: "#scorecard",
      external: false,
      secondary: {
        text: "Or take the 10-domain AI Readiness Score™",
        href: "/ai-readiness-score",
        label: "Take the AI Readiness Score™ →",
      },
    },
    {
      icon: ClipboardList,
      color: "#47d8ff",
      badge: "2 Minutes · Helps Us Prepare",
      title: "Complete the Discovery Questionnaire",
      description:
        "Already know you want to talk? Complete the short Discovery Questionnaire below so Jennifer can review your situation before your Strategy Session — making every minute count.",
      bullets: [
        "A fully prepared Strategy Session",
        "Jennifer already knows your challenges",
        "More value in 45 minutes",
      ],
      cta: "Complete the Questionnaire",
      anchor: "#contact-form",
      external: false,
    },
    {
      icon: Calendar,
      color: "#AEA1EA",
      badge: "45 Minutes · Complimentary",
      title: "Book Your Strategy Session",
      description:
        "Ready to talk? Book your complimentary 45-minute Strategy Session directly. Jennifer identifies where your practice is leaking time, money, and energy — and maps your best path forward.",
      bullets: [
        "Your #1 bottleneck identified",
        "Quick wins you can implement this week",
        "A clear roadmap (no obligation)",
      ],
      cta: "Book My Strategy Session",
      anchor: "#contact-form",
      external: false,
    },
    {
      icon: Mic,
      color: "#FB0000",
      badge: "Workshops & Speaking",
      title: "Book the AI Blueprint Day™ Workshop",
      description:
        "Jennifer speaks and trains on AI integration, leadership development, culture transformation, and patient experience. Available for practices, associations, conferences, and hospital systems.",
      bullets: [
        "Customized AI integration workshops",
        "Leadership & culture training",
        "Available for associations & conferences",
      ],
      cta: "Book a Workshop",
      anchor: "#contact-form",
      external: false,
    },
  ];

  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section */}
      <section className="relative py-24 bg-black overflow-hidden" id="book-session">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-3xl bg-[#47d8ff]/10" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-3xl bg-[#FB0000]/10" />
        </div>
        <AuroraBackdrop opacity={0.1} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            className="mb-6 justify-center flex"
            items={[{ label: "Contact", href: "/contact" }]}
          />
          <div className="text-center">
            <p className="font-quote text-[#47d8ff] text-2xl sm:text-3xl mb-4" style={{ fontFamily: '"La Belle Aurore", cursive' }}>
              We're ready when you are
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Let's <span className="text-[#FB0000]">Restore</span> Your Practice.
            </h1>
            <p className="text-lg sm:text-xl text-[#AEA1EA] max-w-2xl mx-auto leading-relaxed">
              Choose the path that fits where you are right now — whether you're an independent medical practice in Bradenton, Sarasota, Manatee County, anywhere across Central + Southern Florida, or beyond. Every journey to a thriving practice starts with one step.
            </p>
          </div>

          {/* Direct Answer capsule (above the fold) */}
          <div className="mt-10 max-w-3xl mx-auto border-l-4 border-[#47d8ff] bg-[#47d8ff]/10 rounded-r-xl p-6">
            <p className="text-[#47d8ff] font-extrabold uppercase tracking-widest mb-3 text-xs">Direct Answer</p>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
              <strong className="text-white">What's the fastest way to start working with PXC?</strong>{" "}
              Pick one of three on-ramps: take the free 2-minute <strong className="text-[#47d8ff]">Practice Stability Scorecard</strong>, complete the <strong className="text-[#47d8ff]">Discovery Questionnaire</strong> below, or call <a href="tel:+19412392309" className="text-[#47d8ff] font-bold underline">(941) 239-2309</a> / email <a href="mailto:impact@patientexperienceconsulting.com" className="text-[#47d8ff] font-bold underline">impact@patientexperienceconsulting.com</a> to book your complimentary 45-minute Strategy Session with Jennifer Radu, fCAIOX. From there you can step into the <strong className="text-[#47d8ff]">Practice Clarity &amp; AI Readiness Assessment™</strong>, <strong className="text-[#47d8ff]">PXC IMPACT Blueprint™</strong>, <strong className="text-[#47d8ff]">EXCEL Transformation Partnership™</strong> (<strong className="text-white">Self-Funding Guarantee — Contractual</strong>), <strong className="text-[#47d8ff]">Practice Professionals Playground™</strong>, or an <strong className="text-[#47d8ff]">AI Blueprint Day™</strong> workshop. Available virtually anywhere — and in person across <strong className="text-white">Bradenton, Sarasota, Manatee County</strong>, and the 16 Central + Southern Florida counties PXC serves.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />
      {/* Path Cards */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paths.map((path, i) => {
              const Icon = path.icon;
              return (
                <Card
                  key={i}
                  className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate flex flex-col h-full transition-all duration-300"
                  data-testid={`path-card-${i}`}
                >
                  <CardContent className="p-6 flex flex-col gap-4 h-full">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${path.color}1A`, border: `1px solid ${path.color}40` }}
                    >
                      <Icon className="h-7 w-7" style={{ color: path.color }} />
                    </div>
                    <Badge
                      className="font-mono text-[10px] uppercase tracking-widest w-fit"
                      style={{
                        background: `${path.color}1A`,
                        color: path.color,
                        border: `1px solid ${path.color}40`,
                      }}
                    >
                      {path.badge}
                    </Badge>
                    <h3
                      className="text-xl font-black text-white leading-tight"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                      {path.title}
                    </h3>
                    <p className="text-sm text-[#AEA1EA] leading-relaxed flex-grow">{path.description}</p>
                    <ul className="space-y-2">
                      {path.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-white/70">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: path.color }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <MagneticButton className="w-full block mt-2">
                      <Button
                        className="w-full cta-bounce bg-[#FB0000] text-white font-black"
                        style={{ fontFamily: 'Nunito, sans-serif' }}
                        asChild
                        data-testid={`path-cta-${i}`}
                      >
                        <a href={path.anchor}>
                          {path.cta} <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    </MagneticButton>
                    {path.secondary && (
                      <div className="pt-2 border-t border-white/10 text-xs text-[#AEA1EA] space-y-2">
                        <p>{path.secondary.text}</p>
                        <Link
                          href={path.secondary.href}
                          className="text-[#47d8ff] font-bold hover:underline"
                          data-testid={`path-secondary-${i}`}
                        >
                          {path.secondary.label}
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practice Stability Scorecard */}
      <section
        id="scorecard"
        className="py-20 bg-gradient-to-b from-black via-[#0A0A0E] to-black border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-quote text-[#47d8ff] text-2xl mb-2" style={{ fontFamily: '"La Belle Aurore", cursive' }}>
              Find out where you stand
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-white mb-3"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Practice Stability <span className="text-[#FB0000]">Scorecard</span>
            </h2>
            <p className="text-[#AEA1EA]">5 questions · 2 minutes · Instant results</p>
          </div>

          <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
            <CardContent className="p-8 sm:p-10">
              <ScorecardQuiz />
            </CardContent>
          </Card>
        </div>
      </section>

      <SectionDivider color="#AEA1EA" />
      {/* What to Expect Process */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-quote text-[#AEA1EA] mb-2 text-[22px]" style={{ fontFamily: '"La Belle Aurore", cursive' }}>
              How it works
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-white"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              What Happens After You <span className="text-[#47d8ff]">Reach Out</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "We Review Your Discovery Questionnaire",
                body: "Jennifer personally reviews your answers before the call — so your session is focused, relevant, and genuinely useful from the first minute.",
                color: "#FB0000",
              },
              {
                step: "02",
                title: "45-Minute Strategy Session with Jennifer",
                body: "Jennifer identifies root causes, maps quick wins, and presents your options. This is a real diagnostic conversation — not a sales script.",
                color: "#47d8ff",
              },
              {
                step: "03",
                title: "You Leave with Clarity",
                body: "Your #1 bottleneck named, quick wins in hand, and a clear decision about next steps. No pressure. No obligation. Just clarity you can act on immediately.",
                color: "#AEA1EA",
              },
            ].map((s, i) => (
              <Card key={i} className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div
                    className="text-5xl font-black"
                    style={{ fontFamily: 'Nunito, sans-serif', color: s.color }}
                  >
                    {s.step}
                  </div>
                  <h3 className="text-xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#AEA1EA] leading-relaxed">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-[#AEA1EA] mt-10 text-sm">
            Completely free · Zero obligation · Tailored to your specific practice
          </p>
        </div>
      </section>

      {/* Direct Contact Form */}
      <SectionDivider color="#FB0000" />
      <section id="contact-form" className="py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-quote text-[#FB0000] mb-2 text-[22px]" style={{ fontFamily: '"La Belle Aurore", cursive' }}>
              Prefer a direct approach?
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-white mb-4"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Reach Out Directly <span className="text-[#47d8ff]">(Including Speaking Inquiries)</span>
            </h2>
            <p className="text-[#AEA1EA] max-w-2xl mx-auto">
              Send a message and Jennifer's team will respond within one business day. No automations, no bots — a real person reads every inquiry.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "(941) 239-2309",
                  href: "tel:+19412392309",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "impact@patientexperienceconsulting.com",
                  href: "mailto:impact@patientexperienceconsulting.com",
                },
                {
                  icon: MapPin,
                  label: "Office",
                  value: "7210 Manatee Ave W, Ste. 1261, Bradenton, FL 34209",
                  href: "https://maps.google.com/?q=7210+Manatee+Ave+W+Ste+1261+Bradenton+FL+34209",
                },
              ].map((info, i) => {
                const Icon = info.icon;
                return (
                  <a
                    key={i}
                    href={info.href}
                    target={info.label === "Office" ? "_blank" : undefined}
                    rel={info.label === "Office" ? "noopener noreferrer" : undefined}
                    className="block"
                    data-testid={`contact-info-${info.label.toLowerCase()}`}
                  >
                    <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
                      <CardContent className="p-5 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#FB0000]/10 border border-[#FB0000]/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-[#FB0000]" />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-[#AEA1EA] mb-1">
                            {info.label}
                          </p>
                          <p className="text-white font-bold break-all text-[13px]">{info.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
              <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#47d8ff]/10 border border-[#47d8ff]/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#47d8ff]" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#AEA1EA] mb-1">Hours</p>
                    <p className="text-white font-bold text-sm">Mon–Thu: 11AM–7PM EST | Fri: 10AM–5PM EST</p>
                    <p className="text-[#AEA1EA] text-xs mt-1">Responses within 1 business day</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#AEA1EA] font-mono text-[10px] uppercase tracking-widest">
                                Full Name *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Dr. Jane Smith"
                                  {...field}
                                  data-testid="input-name"
                                  className="bg-black/40 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[#47d8ff]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="practiceName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#AEA1EA] font-mono text-[10px] uppercase tracking-widest">
                                Practice Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Smith Family Medicine"
                                  {...field}
                                  value={field.value ?? ""}
                                  data-testid="input-practice"
                                  className="bg-black/40 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[#47d8ff]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#AEA1EA] font-mono text-[10px] uppercase tracking-widest">
                                Email Address *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="jane@practice.com"
                                  {...field}
                                  data-testid="input-email"
                                  className="bg-black/40 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[#47d8ff]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#AEA1EA] font-mono text-[10px] uppercase tracking-widest">
                                Phone (Optional)
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="(555) 123-4567"
                                  {...field}
                                  value={field.value ?? ""}
                                  data-testid="input-phone"
                                  className="bg-black/40 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[#47d8ff]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="inquiryType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#AEA1EA] font-mono text-[10px] uppercase tracking-widest">
                              How can Jennifer help?
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger
                                  data-testid="select-inquiry-type"
                                  className="bg-black/40 border-white/10 text-white"
                                >
                                  <SelectValue placeholder="Select inquiry type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-black border-white/10 text-white">
                                <SelectItem value="strategy-session">Book Strategy Session</SelectItem>
                                <SelectItem value="assessment">Practice Clarity &amp; AI Readiness Assessment™</SelectItem>
                                <SelectItem value="impact">IMPACT Blueprint™ (Tier 2)</SelectItem>
                                <SelectItem value="excel">EXCEL Transformation Partnership™</SelectItem>
                                <SelectItem value="playground">Practice Professionals Playground™</SelectItem>
                                <SelectItem value="blueprint-day">AI Blueprint Day™ Workshop / Speaking</SelectItem>
                                <SelectItem value="general">General Question</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#AEA1EA] font-mono text-[10px] uppercase tracking-widest">
                              Tell Us What's Going On *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="What's the biggest pain point in your practice right now? If this is a speaking inquiry, share your event details, audience, and dates."
                                className="min-h-[140px] bg-black/40 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[#47d8ff]"
                                {...field}
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {isSubmitted && (
                        <div className="bg-[#47d8ff]/10 border border-[#47d8ff]/30 rounded-xl p-5 flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-[#47d8ff] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-white font-bold mb-1">Message Received</p>
                            <p className="text-sm text-[#AEA1EA]">
                              Jennifer's team will review your message and respond within one business day.
                            </p>
                          </div>
                        </div>
                      )}

                      <MagneticButton className="w-full block">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full cta-bounce bg-[#FB0000] text-white font-black text-base py-6"
                          style={{ fontFamily: 'Nunito, sans-serif' }}
                          disabled={form.formState.isSubmitting}
                          data-testid="button-submit-contact"
                        >
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </Button>
                      </MagneticButton>

                      <p className="text-center text-xs text-[#AEA1EA]">
                        We respond within 1 business day. No spam. HIPAA-aware handling.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-quote text-[#AEA1EA] mb-2 text-[22px]" style={{ fontFamily: '"La Belle Aurore", cursive' }}>
              Frequently asked
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Common <span className="text-[#47d8ff]">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300 rounded-xl px-6"
              >
                <AccordionTrigger
                  className="text-left hover:no-underline text-white py-5"
                  data-testid={`accordion-faq-${i}`}
                >
                  <span className="font-bold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#AEA1EA] pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Second Direct Answer — moved here per content layout */}
      <section className="py-12 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnswerCapsule
            jsonLdId="contact-aeo"
            question="How do I book a free patient experience strategy session for my medical practice?"
            answer="Submit the contact form on this page (name, email, phone, practice name, inquiry type, and a short message), or call (941) 239-2309, or email impact@patientexperienceconsulting.com. Within one business day Jennifer Radu's team will reach out to schedule a 45-minute complimentary patient experience strategy session — no credit card, no pitch deck. On the call you'll get clarity on exactly what's costing your practice the most in patient retention and staff turnover and the precise next step. Sessions are available virtually or in person across Bradenton, Sarasota, Manatee County, and all 16 Central + Southern Florida counties PXC serves — plus nationwide. Every engagement is backed by the Self-Funding Guarantee — Contractual."
          />
        </div>
      </section>
    </div>
  );
}
