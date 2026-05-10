import { Link } from "wouter";
import { Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeamCard } from "@/components/effects/BeamCard";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { MagneticButton } from "@/components/effects/MagneticButton";

import _75_75_lOGO from "@assets/75 75 lOGO.png";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-auto">
      {/* ===== Final Decisive Moment — mega CTA ===== */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-white/10">
        <AuroraBackdrop opacity={0.16} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeamCard>
            <div className="bg-black/85 rounded-xl p-8 sm:p-12 text-center">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-[#47d8ff]/40 bg-[#47d8ff]/10">
                <Sparkles className="h-3.5 w-3.5 text-[#47d8ff]" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#47d8ff]">
                  Final Decisive Moment
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                The Practice You Wish You Had Is{" "}
                <span className="text-[#FB0000]">One Conversation Away.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#AEA1EA] max-w-2xl mx-auto mb-8 leading-relaxed">
                30 free minutes with Jennifer Radu, fCAIOX. No pitch deck. No
                sales pressure. Just clarity on exactly what's costing you the
                most — and the precise next step to fix it. Backed by the{" "}
                <span className="text-[#47d8ff] font-semibold">
                  Self-Funding Guarantee — Contractual.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <MagneticButton>
                  <Button
                    size="lg"
                    className="bg-[#FB0000] hover:bg-[#FB0000] text-white text-base font-extrabold shadow-[0_0_24px_rgba(251,0,0,0.55)] hover:shadow-[0_8px_36px_rgba(251,0,0,0.8)] transition-all duration-200"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                    asChild
                    data-testid="footer-cta-book-session"
                  >
                    <Link href="/contact">
                      Book My Free Strategy Session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </MagneticButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#47d8ff] text-[#47d8ff] hover:bg-[#47d8ff]/10"
                  asChild
                  data-testid="footer-cta-explore-services"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </BeamCard>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={_75_75_lOGO}
              alt="Patient Experience Consulting"
              className="h-16 w-auto"
            />
            <p className="text-sm text-[#AEA1EA]">
              Transforming medical practices through AI-powered patient experience, proven leadership systems, and scalable growth frameworks.
            </p>
            <div className="flex items-center space-x-2 text-sm text-[#AEA1EA]">
              <MapPin className="h-4 w-4 text-[#FB0000]" />
              <span className="text-[#FB0000]">Serving Central &amp; Southern Florida &amp; Nationwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-[#AEA1EA] hover:text-[#47d8ff] transition-colors" data-testid="footer-link-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[#AEA1EA] hover:text-[#47d8ff] transition-colors" data-testid="footer-link-about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-[#AEA1EA] hover:text-[#47d8ff] transition-colors" data-testid="footer-link-services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-sm text-[#AEA1EA] hover:text-[#47d8ff] transition-colors" data-testid="footer-link-results">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-[#AEA1EA] hover:text-[#47d8ff] transition-colors" data-testid="footer-link-events">
                  Events & Speaking
                </Link>
              </li>
              <li>
                <Link href="/med-ai-studio" className="text-sm text-[#AEA1EA] hover:text-[#47d8ff] transition-colors" data-testid="footer-link-medai">
                  MED-AI Studio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-[#AEA1EA] hover:text-[#47d8ff] transition-colors" data-testid="footer-link-blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#AEA1EA] hover:text-[#47d8ff] transition-colors" data-testid="footer-link-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Our Offer Stack</h3>
            <ul className="space-y-2 text-sm text-[#AEA1EA]">
              <li>
                <Link href="/services#assessment" className="hover:text-[#47d8ff] transition-colors" data-testid="footer-link-assessment">
                  Practice Clarity & AI Readiness Assessment™
                </Link>
              </li>
              <li>
                <Link href="/services#impact" className="hover:text-[#47d8ff] transition-colors" data-testid="footer-link-impact">
                  PXC IMPACT Blueprint™
                </Link>
              </li>
              <li>
                <Link href="/services#excel" className="hover:text-[#47d8ff] transition-colors" data-testid="footer-link-excel">
                  EXCEL Transformation Partnership™
                </Link>
              </li>
              <li>
                <Link href="/services#playground" className="hover:text-[#47d8ff] transition-colors" data-testid="footer-link-playground">
                  Practice Professionals Playground™
                </Link>
              </li>
              <li>
                <Link href="/services#blueprint-day" className="hover:text-[#47d8ff] transition-colors" data-testid="footer-link-blueprint-day">
                  AI Blueprint Day™
                </Link>
              </li>
              <li>
                <Link href="/ai-readiness-score" className="hover:text-[#47d8ff] transition-colors" data-testid="footer-link-readiness">
                  AI Readiness Score™
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 text-[#FB0000]" />
                <a
                  href="mailto:impact@patientexperienceconsulting.com"
                  className="text-sm text-[#AEA1EA] hover:text-[#47d8ff] transition-colors"
                  data-testid="footer-link-email"
                >
                  impact@patientexperienceconsulting.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 text-[#FB0000]" />
                <a href="tel:+19412392309" className="text-sm text-[#AEA1EA] hover:text-white transition-colors" data-testid="footer-link-phone">
                  (941) 239-2309
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm">
            <div>
              <div className="font-semibold text-white">21+ Years</div>
              <div className="text-[#AEA1EA]">Clinical Operations & Management</div>
            </div>
            <div>
              <div className="font-semibold text-white">1,000+</div>
              <div className="text-[#AEA1EA]">Healthcare Professionals Trained</div>
            </div>
            <div>
              <div className="font-semibold text-white">Proven</div>
              <div className="text-[#AEA1EA]">Transformation Metrics</div>
            </div>
            <div>
              <div className="font-semibold text-white">Proprietary</div>
              <div className="text-[#AEA1EA]">3-Framework System</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="font-semibold text-white">Hands-On</div>
              <div className="text-[#AEA1EA]">Implementation Partner</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#AEA1EA]">
            {new Date().getFullYear()} Patient eXperience Consulting. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-[#AEA1EA]">
            <a href="#" className="hover:text-[#47d8ff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#47d8ff] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#47d8ff] transition-colors">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
