import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowRight, MapPin, Building2, Sparkles, CheckCircle2, Phone, Mail, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { useSEO } from "@/lib/useSEO";

const STATE_DATA: Record<string, {
  name: string;
  slug: string;
  blurb: string;
  highlights: string[];
  metros: string[];
  why: string;
  geo: { region: string; coords: string };
}> = {
  florida: {
    name: "Florida",
    slug: "florida",
    blurb: "Florida is PXC's home market — and where the Unified PXC System™ was forged across 21+ years of in-the-trenches independent-practice leadership. We support providers from the Panhandle to the Keys.",
    highlights: [
      "16+ Florida counties actively served — including Sarasota, Manatee, Orange, Miami-Dade, Broward, Palm Beach, Hillsborough, Pinellas",
      "Local in-person engagements available throughout Central & Southern Florida",
      "Florida-specific compliance, payer mix, and snowbird patient flow strategies built into every engagement",
    ],
    metros: ["Miami-Dade", "Broward", "Palm Beach", "Orange", "Hillsborough", "Pinellas", "Sarasota", "Manatee", "Lee", "Collier"],
    why: "Florida medicine is unique — high volume, complex payer mix, seasonal demographics, and tight talent markets. PXC was built inside this exact environment.",
    geo: { region: "US-FL", coords: "27.498928;-82.574821" },
  },
  "north-carolina": {
    name: "North Carolina",
    slug: "north-carolina",
    blurb: "PXC supports independent practices across North Carolina — from the Research Triangle to the Charlotte metro and the western mountain communities.",
    highlights: [
      "Virtual and on-site engagements available across Mecklenburg, Wake, Durham, Guilford, and Buncombe counties",
      "Specialty focus on Raleigh-Durham research-corridor practices and Charlotte multi-site groups",
      "AI implementation playbooks tuned to NC payer mix and growing patient demographics",
    ],
    metros: ["Charlotte", "Raleigh", "Durham", "Greensboro", "Winston-Salem", "Asheville", "Wilmington", "Cary"],
    why: "North Carolina's independent-practice ecosystem is one of the fastest-growing in the Southeast — and most vulnerable to PE roll-ups. PXC helps NC practices scale and stay independent.",
    geo: { region: "US-NC", coords: "35.7596;-79.0193" },
  },
  georgia: {
    name: "Georgia",
    slug: "georgia",
    blurb: "From Atlanta metro to Savannah, Augusta, and the rural medical deserts in between — PXC partners with Georgia practices that refuse to sell out.",
    highlights: [
      "Active engagements across Fulton, DeKalb, Cobb, Gwinnett, and Chatham counties",
      "Specialty focus on Atlanta-area multi-site groups and rural community practices",
      "AI workflow tooling tuned for under-resourced staffing realities common in Georgia",
    ],
    metros: ["Atlanta", "Savannah", "Augusta", "Athens", "Columbus", "Macon", "Sandy Springs", "Roswell"],
    why: "Georgia practices face a unique squeeze: metro-area PE pressure on one side, rural staffing crisis on the other. PXC's frameworks scale across both.",
    geo: { region: "US-GA", coords: "32.1656;-82.9001" },
  },
  nationwide: {
    name: "Nationwide (USA)",
    slug: "nationwide",
    blurb: "While Florida is home, the Unified PXC System™ travels. PXC supports independent medical practices across all 50 states with virtual-first engagements and selective on-site intensives.",
    highlights: [
      "Active clients in 20+ states across primary care, specialty, urgent care, and concierge models",
      "Virtual-first engagement model with optional onsite AI Blueprint Days™",
      "All frameworks designed to be deployable regardless of state-specific scope-of-practice or payer mix",
    ],
    metros: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "Dallas", "Boston", "Seattle", "Denver"],
    why: "Independent practice is under siege everywhere. PXC's frameworks transfer across geography because they target the universal levers — culture, communication, clarity, and AI-supported workflow.",
    geo: { region: "US", coords: "39.8283;-98.5795" },
  },
};

export default function StatePage() {
  const [location] = useLocation();
  const slug = location.split("/").filter(Boolean).pop() || "florida";
  const state = STATE_DATA[slug] || STATE_DATA.florida;

  useSEO({
    title: `Medical Practice Consulting in ${state.name} | PXC`,
    description: `${state.blurb} — Patient eXperience Consulting. Book a free Puzzle Pyramid™ Strategy Session.`,
    canonical: `https://patientexperienceconsulting.com/services/${state.slug}`,
  });

  return (
    <div className="bg-black text-white" data-testid={`page-state-${state.slug}`}>
      {/* HERO */}
      <section className="relative pt-20 pb-20 overflow-hidden border-b border-white/10">
        <AuroraBackdrop opacity={0.15} />
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/assets/ai-bg.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="bg-[#47d8ff]/15 text-[#47d8ff] border border-[#47d8ff]/40 mb-4">
              <MapPin className="h-3.5 w-3.5 mr-1.5" /> Serving {state.name}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-5 max-w-4xl" style={{ fontFamily: "Nunito, sans-serif" }} data-testid="state-headline">
              AI-Powered Practice Transformation in <span className="text-[#FB0000]">{state.name}</span>
            </h1>
            <p className="text-lg text-[#AEA1EA] max-w-3xl leading-relaxed mb-7">{state.blurb}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="cta-bounce bg-[#FB0000] text-white font-black px-7 py-6" style={{ fontFamily: "Nunito, sans-serif" }} asChild data-testid="state-cta-book">
                <Link href="/contact#book-session">Book Free {state.name} Strategy Session <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-[#47d8ff] text-[#47d8ff] hover:bg-[#47d8ff]/10 font-black px-7 py-6" asChild data-testid="state-cta-services">
                <Link href="/services">See All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY THIS STATE */}
      <section className="relative py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="bg-[#FB0000]/15 text-[#FB0000] border border-[#FB0000]/40 mb-3">Why {state.name}</Badge>
              <h2 className="text-3xl sm:text-4xl font-black mb-5" style={{ fontFamily: "Nunito, sans-serif" }}>The {state.name} practice market is unique. <span className="text-[#FB0000]">So is our approach.</span></h2>
              <p className="text-white/85 leading-relaxed mb-5">{state.why}</p>
              <ul className="space-y-3">
                {state.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-white/85" data-testid="state-highlight-item">
                    <CheckCircle2 className="h-5 w-5 text-[#47d8ff] flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-xl border border-white/10 bg-[#0F0F0F] p-6">
              <Activity className="h-6 w-6 text-[#FB0000] mb-3" />
              <h3 className="font-black text-xl text-white mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>{state.name} Coverage Map</h3>
              <p className="text-xs text-[#AEA1EA] mb-4">Active and welcomed metro areas</p>
              <div className="flex flex-wrap gap-2">
                {state.metros.map((m) => (
                  <span key={m} className="text-xs px-3 py-1.5 rounded-full bg-black border border-[#47d8ff]/30 text-white/85" data-testid={`state-metro-${m}`}>
                    {m}
                  </span>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4 mt-5 grid grid-cols-2 gap-3">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#AEA1EA]">Region</div>
                  <div className="text-white text-sm font-bold">{state.geo.region}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#AEA1EA]">Format</div>
                  <div className="text-white text-sm font-bold">Virtual + Onsite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-white/10 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-10 w-10 text-[#FB0000] mx-auto mb-4" />
          <h2 className="text-3xl sm:text-5xl font-black mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>
            Ready to map your {state.name} practice's transformation?
          </h2>
          <p className="text-lg text-[#AEA1EA] mb-8">30 free minutes with Jennifer Radu, fCAIOX. Backed by the Self-Funding Guarantee — Contractual.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="cta-bounce bg-[#FB0000] text-white font-black px-8 py-6" style={{ fontFamily: "Nunito, sans-serif" }} asChild data-testid="state-cta-bottom-book">
              <Link href="/contact#book-session">Book My Free Strategy Session <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[#47d8ff] text-[#47d8ff] font-black px-8 py-6" asChild data-testid="state-cta-bottom-call">
              <a href="tel:+19412392309"><Phone className="mr-2 h-5 w-5" /> (941) 239-2309</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
