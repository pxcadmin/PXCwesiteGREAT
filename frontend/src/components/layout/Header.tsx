import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/effects/MagneticButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import logoImage from "@assets/pxc-logo-new.png";

const FLORIDA_COUNTIES = [
  { name: "Orange County", slug: "orange", region: "Central FL" },
  { name: "Seminole County", slug: "seminole", region: "Central FL" },
  { name: "Lake County", slug: "lake", region: "Central FL" },
  { name: "Polk County", slug: "polk", region: "Central FL" },
  { name: "Volusia County", slug: "volusia", region: "Central FL" },
  { name: "Osceola County", slug: "osceola", region: "Central FL" },
  { name: "Miami-Dade County", slug: "miami-dade", region: "Southern FL" },
  { name: "Broward County", slug: "broward", region: "Southern FL" },
  { name: "Palm Beach County", slug: "palm-beach", region: "Southern FL" },
  { name: "Lee County", slug: "lee", region: "Southern FL" },
  { name: "Collier County", slug: "collier", region: "Southern FL" },
  { name: "Hillsborough County", slug: "hillsborough", region: "Southern FL" },
  { name: "Pinellas County", slug: "pinellas", region: "Southern FL" },
  { name: "Sarasota County", slug: "sarasota", region: "Southern FL" },
  { name: "Manatee County", slug: "manatee", region: "Southern FL" },
  { name: "Charlotte County", slug: "charlotte", region: "Southern FL" },
];

const STATE_LINKS = [
  { name: "Florida (Statewide)", slug: "florida" },
  { name: "North Carolina", slug: "north-carolina" },
  { name: "Georgia", slug: "georgia" },
  { name: "Nationwide (USA)", slug: "nationwide" },
];

const SERVICE_DETAIL_LINKS = [
  { name: "Puzzle Pyramid™ Strategy Session", slug: "puzzle-pyramid-strategy-session" },
  { name: "PX Fast Pass™", slug: "px-fast-pass" },
  { name: "PX Treatment Plan™", slug: "px-treatment-plan" },
  { name: "From Patients to Profits MasterCourse™", slug: "mastercourse" },
  { name: "Practice Professionals Playground™ (P3)", slug: "practice-professionals-playground" },
  { name: "The Puzzle Shop", slug: "puzzle-shop" },
  { name: "Leadership Development", slug: "leadership-development" },
];

const SCORING_TOOLS = [
  { name: "AI Readiness Score™", path: "/ai-readiness-score" },
  { name: "Practice Stability Scorecard™", path: "/practice-stability-scorecard" },
  { name: "Discovery Questionnaire", path: "/discovery-questionnaire" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // AI Blueprint Day palette swap on /events
  const eventsTheme = location === "/events";
  const accent = eventsTheme ? "#fca746" : "#47d8ff";
  const accentSoft = eventsTheme ? "#fca746" : "#AEA1EA";
  const ctaBg = eventsTheme ? "#fca746" : "#FB0000";
  const ctaText = eventsTheme ? "#1a1a1a" : "#FFFFFF";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/results", label: "Results" },
    { href: "/events", label: "Events" },
    { href: "/med-ai-studio", label: "MED-AI Studio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 transition-all duration-300 ${scrolled ? "shadow-[0_4px_24px_rgba(71,216,255,0.15)]" : ""}`}
      data-testid="site-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center transition-all duration-300 ease-out ${scrolled ? "h-16" : "h-24"}`}>
          {/* Logo */}
          <Link href="/" data-testid="link-home" className="mr-6 flex items-center">
            <img
              src={logoImage}
              alt="Patient eXperience Consulting — From Patients to Profits"
              className={`w-auto transition-all duration-300 ease-out ${scrolled ? "h-10" : "h-16"}`}
            />
          </Link>

          <div className="flex-1" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                const isActive = location === link.href || location.startsWith("/services/");
                return (
                  <DropdownMenu key={link.href}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`text-sm font-bold tracking-wide ${isActive ? "bg-white/5" : "hover:bg-white/5"}`}
                        style={{ fontFamily: "Nunito, sans-serif", color: isActive ? accent : accentSoft }}
                        data-testid="button-services-menu"
                      >
                        {link.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-72 max-h-[480px] overflow-y-auto bg-black border-white/10">
                      <DropdownMenuItem asChild className="text-white hover:text-[#47d8ff] hover:bg-white/5 focus:bg-white/5 focus:text-[#47d8ff]">
                        <Link href="/services" data-testid="link-services-overview">
                          <span className="font-semibold">Services Overview</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-white/10" />
                      <div className="px-2 py-1.5">
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#AEA1EA]">Free Interactive Tools</div>
                      </div>
                      {SCORING_TOOLS.map((t) => (
                        <DropdownMenuItem key={t.path} asChild className="text-white hover:text-[#FB0000] hover:bg-white/5 focus:bg-white/5 focus:text-[#FB0000]">
                          <Link href={t.path} data-testid={`link-tool-${t.path}`}>{t.name}</Link>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuSeparator className="bg-white/10" />
                      <div className="px-2 py-1.5">
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#AEA1EA]">Service Details</div>
                      </div>
                      {SERVICE_DETAIL_LINKS.map((s) => (
                        <DropdownMenuItem key={s.slug} asChild className="text-white hover:text-[#47d8ff] hover:bg-white/5 focus:bg-white/5 focus:text-[#47d8ff]">
                          <Link href={`/services/${s.slug}`} data-testid={`link-service-${s.slug}`}>{s.name}</Link>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuSeparator className="bg-white/10" />
                      <div className="px-2 py-1.5">
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#AEA1EA]">By Region — States</div>
                      </div>
                      {STATE_LINKS.map((s) => (
                        <DropdownMenuItem key={s.slug} asChild className="text-white hover:text-[#47d8ff] hover:bg-white/5 focus:bg-white/5 focus:text-[#47d8ff]">
                          <Link href={`/services/${s.slug}`} data-testid={`link-state-${s.slug}`}>
                            {s.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuSeparator className="bg-white/10" />
                      <div className="px-2 py-1.5">
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#AEA1EA]">Florida — Central</div>
                      </div>
                      {FLORIDA_COUNTIES.filter((c) => c.region === "Central FL").map((county) => (
                        <DropdownMenuItem key={county.slug} asChild className="text-white hover:text-[#47d8ff] hover:bg-white/5 focus:bg-white/5 focus:text-[#47d8ff]">
                          <Link href={`/services/${county.slug}`} data-testid={`link-county-${county.slug}`}>
                            {county.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuSeparator className="bg-white/10" />
                      <div className="px-2 py-1.5">
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#AEA1EA]">Florida — Southern</div>
                      </div>
                      {FLORIDA_COUNTIES.filter((c) => c.region === "Southern FL").map((county) => (
                        <DropdownMenuItem key={county.slug} asChild className="text-white hover:text-[#47d8ff] hover:bg-white/5 focus:bg-white/5 focus:text-[#47d8ff]">
                          <Link href={`/services/${county.slug}`} data-testid={`link-county-${county.slug}`}>
                            {county.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              const isActive = location === link.href;
              return (
                <Button
                  key={link.href}
                  variant="ghost"
                  className={`text-sm font-bold tracking-wide ${isActive ? "bg-white/5" : "hover:bg-white/5"}`}
                  style={{ fontFamily: "Nunito, sans-serif", color: isActive ? accent : accentSoft }}
                  asChild
                  data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center ml-4">
            <MagneticButton>
              <Button
                className="text-sm font-extrabold tracking-wide transition-all duration-200 hover:-translate-y-1 hover:scale-105"
                style={{
                  background: ctaBg,
                  color: ctaText,
                  boxShadow: `0 0 18px ${ctaBg}88`,
                  fontFamily: "Nunito, sans-serif",
                }}
                asChild
                data-testid="button-book-session"
              >
                <Link href="/contact#book-session">Book Strategy Session</Link>
              </Button>
            </MagneticButton>
          </div>

          {/* Mobile button */}
          <button
            className="lg:hidden p-2 rounded-md text-white ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-1 border-t border-white/10">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className="w-full justify-start text-[#AEA1EA] hover:text-[#47d8ff] hover:bg-white/5 text-base font-bold"
                style={{ fontFamily: "Nunito, sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
                asChild
                data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
            <Button
              className="w-full bg-[#FB0000] hover:bg-[#FB0000] text-white text-base font-bold mt-2"
              style={{ fontFamily: "Nunito, sans-serif" }}
              asChild
              onClick={() => setMobileMenuOpen(false)}
              data-testid="mobile-button-book-session"
            >
              <Link href="/contact#book-session">Book Strategy Session</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
