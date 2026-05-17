import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Lightbulb, Shield, Users, Rocket, Award, HandHeart, Target } from "lucide-react";
import { Link } from "wouter";
import { useSEO, breadcrumbJsonLd, SITE_URL } from "@/lib/useSEO";
import { AnswerCapsule } from "@/components/effects/AnswerCapsule";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { BeamCard } from "@/components/effects/BeamCard";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { SectionDivider } from "@/components/effects/SectionDivider";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

import jenniferBlue from "@assets/lower_size_blue_pretty_1765984670933.png";
import jenniferSpeaking from "@assets/speech_1765984670936.png";
import podcastInterview from "@assets/podcast_interview_-_Edited_1765984670935.png";
import awardImage from "@assets/Patient_experience_professional_square_winner_1765984964784.png";
import medStaffTable from "@assets/MED_STAFF_TALKING_AT_TABLE_1765985324650.jpg";

import px_pres_in_caf from "@assets/px pres in caf.png";

export default function About() {
  useSEO({
    title: "About Jennifer Radu, fCAIOX | Founder of Patient eXperience Consulting (PXC) — Bradenton, FL",
    description: "Meet Jennifer Radu, Founder & Fractional Chief AI Experience Officer (fCAIOX) of Patient eXperience Consulting in Bradenton, FL. 21+ years rebuilding medical practices through the Triple Perspective lens (Educator, Operator, Patient — 6 surgeries) and the AI-powered Unified PXC System™. Creator of the Practice Clarity & AI Readiness Assessment™, PXC IMPACT Blueprint™, EXCEL Transformation Partnership™, and Practice Professionals Playground™. Backed by the Self-Funding Guarantee — Contractual. Serving Sarasota, Manatee County, and all 16 Central + Southern Florida counties — plus nationwide.",
    path: "/about",
    ogImage: `${SITE_URL}/og/about.jpg`,
    keywords: "Jennifer Radu, fCAIOX, fractional Chief AI Experience Officer, Patient eXperience Consulting founder, healthcare consultant Florida, medical practice management expert, Triple Perspective, CPPM, Bradenton FL healthcare consultant, Sarasota medical practice consultant, Manatee County healthcare consulting, Self-Funding Guarantee Contractual, Practice Clarity & AI Readiness Assessment, PXC IMPACT Blueprint, EXCEL Transformation Partnership, Practice Professionals Playground, Unified PXC System, Central Florida medical consulting, Southern Florida healthcare consulting",
    jsonLd: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE_URL}/about#jennifer-radu`,
        name: "Jennifer Radu",
        givenName: "Jennifer",
        familyName: "Radu",
        honorificSuffix: "CPPM, fCAIOX",
        jobTitle: "Founder & Fractional Chief AI Experience Officer (fCAIOX)",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/about`,
        image: `${SITE_URL}/jennifer-radu.jpg`,
        sameAs: [
          "https://www.linkedin.com/in/jenniferradu/",
          `${SITE_URL}/about`,
        ],
        description: "Healthcare insider turned AI-integration strategist with 21+ years of hands-on medical practice management experience. Founder of Patient eXperience Consulting and creator of the Unified PX System™.",
        knowsAbout: [
          "Medical practice management",
          "Patient experience transformation",
          "AI integration for healthcare",
          "Healthcare leadership development",
          "Staff retention",
          "Practice operations",
          "Fractional Chief AI Experience Officer",
          "Unified PX System",
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
        award: [
          "Patient Experience Professional Workshop Winner 2020",
        ],
      },
    ],
  });

  const brandValues = [
    { icon: Heart, title: "Compassion", desc: "Prioritizing the human element in healthcare for patients and staff" },
    { icon: Lightbulb, title: "Innovation", desc: "Leveraging cutting-edge AI and modern strategies for transformative solutions" },
    { icon: Shield, title: "Integrity", desc: "Delivering measurable results with transparency and accountability" },
    { icon: Users, title: "Collaboration", desc: "Partnering with practices to build tailored, sustainable success" },
    { icon: Award, title: "Excellence", desc: "Striving for the highest standards in patient care and staff well-being" },
    { icon: Rocket, title: "Empowerment", desc: "Equipping leaders and teams with the tools and knowledge to thrive" },
    { icon: HandHeart, title: "Respect", desc: "Fostering environments where every individual feels valued and heard" },
    { icon: Target, title: "Results", desc: "Focused on measurable outcomes that drive sustainable practice growth" },
  ];

  const edgeCards = [
    { title: "People-First, AI-Powered", body: "We use AI not to replace human connection, but to free it—eliminating bottlenecks and giving staff more time to care." },
    { title: "Hands-On Transformation", body: "We don't hand you binders and disappear. We roll up our sleeves and implement alongside your team." },
    { title: "Rooted in Lived Experience", body: "Founded by Jennifer Radu, with over 21+ years of hands-on medical practice management experience. We've lived the chaos firsthand—and we've built systems to replace it with clarity and growth." },
    { title: "Sustainable Excellence", body: "Our frameworks are designed to evolve with your practice, so improvements last. We build systems that run without you constantly managing them." },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section — Jennifer training image bg with low-opacity red overlay */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/jen-presenting.png" alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(251,0,0,0.60) 0%, rgba(20,0,0,0.78) 100%)" }} />
        </div>
        <AuroraBackdrop opacity={0.05} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            className="mb-6 justify-center flex"
            items={[{ label: "About", href: "/about" }]}
          />
          <div className="text-center">
            <p className="text-lg text-white font-bold uppercase tracking-wider mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              People First. AI Empowered. Results That Sustain.
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Built by <span className="text-[#47d8ff]">Insiders</span>, Powered by <span className="text-white">Transformation</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              From our home base in Bradenton, FL, we guide overwhelmed independent medical practice owners across Sarasota, Manatee County, the 16 Central + Southern Florida counties we serve — and nationwide — from burnout and breakdown to people-first, high-performing practices where staff stay, patients return, and the business runs without you.
            </p>
          </div>

          {/* Direct Answer capsule (above the fold) */}
          <div className="mt-10 max-w-3xl mx-auto border-l-4 border-[#47d8ff] bg-black/65 backdrop-blur rounded-r-xl p-6">
            <p className="text-[#47d8ff] font-extrabold uppercase tracking-widest mb-3 text-xs">Direct Answer</p>
            <p className="text-white text-sm sm:text-base leading-relaxed">
              <strong className="text-white">Why do Florida's independent medical practices choose Jennifer Radu and PXC?</strong>{" "}
              Because no other firm combines 21+ years of hands-on medical practice management with custom AI builds, the Triple Perspective lens (Educator, Operator, Patient — 6 surgeries), and a <strong className="text-[#47d8ff]">Self-Funding Guarantee — Contractual</strong> that documents ROI in writing within 6 months. Jennifer Radu, CPPM, fCAIOX, founded Patient eXperience Consulting in <strong className="text-white">Bradenton, FL</strong>, and serves independent practices across Sarasota, Manatee County, and the 16 Central + Southern Florida counties PXC supports — plus nationwide — through the <strong className="text-[#47d8ff]">Practice Clarity &amp; AI Readiness Assessment</strong>, the <strong className="text-[#47d8ff]">Puzzle Pyramid Strategy Session</strong>, <strong className="text-[#47d8ff]">From Patients to Profits</strong>, <strong className="text-[#47d8ff]">Practice Professionals Playground</strong>, and <strong className="text-[#47d8ff]">Blueprint Workshops</strong>.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />
      {/* Origin Story - WHITE background with image */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black">
                Origin Story: From Front Lines to <span className="text-[#FB0000]">Future-Forward</span>
              </h2>

              <div className="prose prose-lg max-w-none text-black/70 space-y-4">
                <p className="text-lg leading-relaxed">
                  <strong className="text-black">Patient eXperience Consulting (PXC)</strong> was born from two decades of direct experience within the demanding world of healthcare. Our founder, <strong className="text-black">Jennifer Radu</strong>, didn't just study the challenges; she lived them.
                </p>
                <p className="text-lg leading-relaxed">
                  Having navigated the complexities of medical practices firsthand, she understood the deep-seated frustrations: the relentless staff turnover, the disheartening dip in patient satisfaction, the administrative overwhelm that steals precious time from patient care, and the pervasive threat of burnout.
                </p>
                <p className="text-lg leading-relaxed">
                  This intimate understanding fueled a singular vision: <strong className="text-black">to transform these pain points into pathways for unparalleled success.</strong> PXC emerged as a beacon for practices seeking not just solutions, but a revolution in patient and staff experience, grounded in real-world insight and forward-thinking innovation.
                </p>
              </div>
            </div>

            {/* Jennifer Speaking Image */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden border border-[#FB0000]/30 glow-red">
                <img
                  src={jenniferSpeaking}
                  alt="Jennifer Radu speaking at a healthcare conference"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-black border border-[#47d8ff]/40 text-white p-4 rounded-lg glow-cyan">
                <p className="font-bold text-[#47d8ff]">21+ Years</p>
                <p className="text-sm text-[#AEA1EA]">Clinical Operations & Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Purpose - BLACK background with background image */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={medStaffTable} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                <span className="text-[#47d8ff]">Reclaiming Passion,</span> Redefining Practice
              </h2>
              <div className="space-y-4 text-[#AEA1EA]">
                <p className="text-lg">
                  PXC exists to empower medical practice owners, managers, and decision-making physicians to <strong className="text-[#47d8ff]">reclaim the passion</strong> that first drew them to healthcare.
                </p>
                <p className="text-lg">
                  Our purpose is to eradicate the cycle of inefficiency and dissatisfaction, replacing it with a thriving ecosystem where patients feel valued, staff feel supported, and leaders feel in control.
                </p>
                <p className="text-lg">
                  We believe that exceptional patient care and a flourishing practice are not mutually exclusive; <strong className="text-[#47d8ff]">they are intrinsically linked.</strong>
                </p>
              </div>
            </div>
            <Card className="bg-black border border-[#FB0000]/30 card-glow-lilac hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-[#FB0000]">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-[#AEA1EA]">
                <p>
                  To empower healthcare practices to elevate their patient experience by delivering expert consulting services, focusing on analyzing and implementing best practices in patient care, ensuring a compassionate and seamless healthcare journey for every individual.
                </p>
                <p className="text-white">
                  We are dedicated to transforming overwhelmed and retention-challenged practices into <strong className="text-[#47d8ff]">thriving, patient and staff-centric powerhouses.</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Jennifer Radu - WHITE background */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
              Meet <span className="text-[#FB0000]">Jennifer Radu</span>
            </h2>
            <p className="text-lg text-black/60">
              Visionary Founder with 21+ Years in Clinical Operations & Management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Images */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-[#47d8ff]/30 glow-cyan">
                <img
                  src={jenniferBlue}
                  alt="Jennifer Radu - CEO & Founder"
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden border border-[#AEA1EA]/30 card-glow-lilac">
                  <img
                    src={px_pres_in_caf}
                    alt="Jennifer Radu on stage"
                    className="w-full h-32 object-contain rounded-lg"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border border-[#AEA1EA]/30 card-glow-lilac">
                  <img
                    src={podcastInterview}
                    alt="Jennifer Radu podcast interview"
                    className="w-full h-32 object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300 mb-6">
                <CardContent className="p-6 pt-6">
                  <div className="space-y-6">
                    <p className="text-lg text-white">
                      Jennifer Radu is a healthcare insider turned AI-integration strategist with over <strong className="text-[#FB0000]">two decades of hands-on medical practice management experience.</strong>
                    </p>
                    <div className="border border-[#47d8ff]/40 bg-[#47d8ff]/10 p-6 rounded-lg">
                      <p className="text-lg italic text-white mb-4">
                        "I started PXC after watching brilliant doctors burn out, talented staff walk out, and clinics lose heart."
                      </p>
                      <p className="text-white/70">"With my 21+ years in medicine—the last decade spent rebuilding practices as a C.P.P.M. and turnaround strategist—I've made it my mission to give practice owners the real roadmap they never got in medical school. You deserve more than tools. You deserve a partner, a proven system, and a transformation that lasts."</p>
                      <p className="text-sm mt-4 text-[#FB0000] font-semibold">
                        — Jennifer Radu, Founder & CEO
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { stat: "21+", label: "Years in Clinical Operations & Management" },
                  { stat: "1,000+", label: "Healthcare Professionals Trained" },
                  { stat: "326+", label: "Practitioners Transformed" },
                ].map(({ stat, label }) => (
                  <div key={label} className="text-center p-4 rounded-lg border border-[#AEA1EA]/30 bg-black card-glow-lilac">
                    <div className="text-3xl font-bold text-[#FB0000] mb-2 stat-glow">{stat}</div>
                    <div className="text-sm text-[#AEA1EA]">{label}</div>
                  </div>
                ))}
              </div>

              {/* Award */}
              <div className="mt-6 flex justify-center">
                <div className="rounded-lg overflow-hidden border border-[#AEA1EA]/30 card-glow-lilac">
                  <img
                    src={awardImage}
                    alt="Patient Experience Professional Workshop Winner 2020"
                    className="w-48 h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values - BLACK background */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Our Core <span className="text-[#47d8ff]">Values</span>
            </h2>
            <p className="text-lg text-[#AEA1EA] max-w-3xl mx-auto">
              These principles guide every decision we make and every partnership we build
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandValues.map((value, i) => (
              <BeamCard key={i} accent="#AEA1EA" className="h-full">
                <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300 h-full">
                  <CardHeader>
                    <value.icon className="h-12 w-12 text-[#FB0000] mb-4" />
                    <CardTitle className="text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#AEA1EA]">{value.desc}</p>
                  </CardContent>
                </Card>
              </BeamCard>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="#AEA1EA" />
      {/* What Makes Us Different - WHITE background */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-black">
            The <span className="text-[#FB0000]">PXC Edge</span>: AI-Fueled, People-Powered, Proven
          </h2>

          <div className="space-y-6">
            {edgeCards.map((card, i) => (
              <BeamCard key={i} accent="#AEA1EA">
                <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-[#FB0000]">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/70">
                    {card.body}
                  </CardContent>
                </Card>
              </BeamCard>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="#FB0000" />
      {/* CTA Section - BLACK background */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Ready to Go From <span className="text-[#FB0000]">Burnout</span> to <span className="text-[#47d8ff]">Breakthrough</span>?
          </h2>
          <p className="text-lg text-[#AEA1EA] mb-8 max-w-2xl mx-auto">
            Join the growing community of medical practices that have discovered the power of The Unified PXC System.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton>
              <Button
                size="lg"
                className="cta-bounce bg-[#FB0000] text-white font-black text-base px-8 py-5"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                asChild
                data-testid="button-book-session-about"
              >
                <Link href="/contact">
                  Book Your Free Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MagneticButton>
            <Button
              size="lg"
              variant="outline"
              className="cta-bounce-lilac border-white bg-[#AEA1EA]/20 text-white font-black text-base px-8 py-5"
              style={{ fontFamily: 'Nunito, sans-serif' }}
              asChild
              data-testid="button-learn-services"
            >
              <Link href="/services">
                Learn About Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Second Direct Answer — moved here per content layout */}
      <section className="py-12 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnswerCapsule
            jsonLdId="about-aeo"
            question="Who is the top patient experience consultant for independent medical practices in Florida?"
            answer="Jennifer Radu, fCAIOX, is the founder of Patient eXperience Consulting (PXC) and the leading patient experience consultant for independent medical practices in Florida. She is a Certified Physician Practice Manager (CPPM) with 21+ years of hands-on medical practice management experience and a 2020 Patient Experience Professional Workshop Winner. Jennifer brings a unique Triple Perspective — Educator, Operator, and Patient (6 surgeries and extended hospitalizations) — and is the creator of the Unified PXC System™ along with the Practice Clarity & AI Readiness Assessment™, PXC IMPACT Blueprint™, EXCEL Transformation Partnership™, and Practice Professionals Playground™. PXC is headquartered in Bradenton, FL and serves practices across Sarasota, Manatee County, all 16 Central + Southern Florida counties — and nationwide — backed by the Self-Funding Guarantee — Contractual."
          />
        </div>
      </section>
    </div>
  );
}
