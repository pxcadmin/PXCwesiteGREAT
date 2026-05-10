import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Briefcase, BookOpen, User, Brain } from "lucide-react";
import { useSEO } from "@/lib/useSEO";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { BeamCard } from "@/components/effects/BeamCard";

export default function NotFound() {
  useSEO({
    title: "Page Not Found (404) | Patient eXperience Consulting",
    description:
      "The page you're looking for doesn't exist. Explore PXC's services, take the free AI Readiness Quiz, read the blog, or book your free strategy session with Jennifer Radu, fCAIOX.",
    path: "/404",
    noindex: true,
  });

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 bg-black overflow-hidden">
      <AuroraBackdrop opacity={0.12} />

      <div className="relative z-10 text-center space-y-8 max-w-3xl w-full">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[#FB0000] font-bold">
            Lost in the system
          </p>
          <div
            className="text-[8rem] sm:text-[11rem] font-black leading-none text-[#47d8ff]"
            style={{
              fontFamily: "Nunito, sans-serif",
              textShadow:
                "0 0 24px rgba(71,216,255,0.45), 0 0 60px rgba(251,0,0,0.55), 0 0 110px rgba(251,0,0,0.35)",
            }}
            data-testid="text-404"
          >
            404
          </div>
        </div>

        <div className="space-y-4">
          <h1
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            This page took a wrong turn —{" "}
            <span className="text-[#FB0000]">let's get you back to growing your practice.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#AEA1EA] max-w-xl mx-auto">
            The page you tried to reach isn't here, but your next step is.
            Pick one of the recovery paths below.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Button
            size="lg"
            className="bg-[#FB0000] hover:bg-[#FB0000] text-white font-extrabold cta-bounce shadow-[0_0_18px_rgba(251,0,0,0.55)] hover:shadow-[0_8px_30px_rgba(251,0,0,0.85)] transition-shadow"
            asChild
            data-testid="button-book-strategy-session"
          >
            <Link href="/contact">Book Free Strategy Session</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="cta-bounce-lilac border-white bg-[#AEA1EA]/20 text-white font-black px-8 py-5"
            style={{ fontFamily: 'Nunito, sans-serif' }}
            asChild
            data-testid="button-browse-services"
          >
            <Link href="/services">Browse Services</Link>
          </Button>
        </div>

        <BeamCard cyan className="mt-10 text-left">
          <div className="bg-black/85 rounded-xl p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-[#47d8ff] font-bold mb-4">
              Or jump straight to one of these
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: Briefcase, label: "Services & Offers", href: "/services" },
                { icon: User, label: "About Jennifer Radu", href: "/about" },
                { icon: Brain, label: "Free AI Readiness Quiz", href: "/contact#ai-quiz" },
                { icon: BookOpen, label: "PXC Insights Blog", href: "/blog" },
              ].map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  data-testid={`link-suggestion-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                >
                  <span className="flex items-center gap-3 p-3 rounded-md bg-white/5 hover-elevate text-sm text-white">
                    <Icon className="h-4 w-4 text-[#47d8ff] flex-shrink-0" />
                    <span className="font-medium">{label}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </BeamCard>
      </div>
    </div>
  );
}
