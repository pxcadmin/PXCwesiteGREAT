import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

export function StickyBookCTA() {
  const [scrolled, setScrolled] = useState(false);
  const [contactInView, setContactInView] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    setContactInView(false);

    let intersectionObserver: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let observedTarget: Element | null = null;

    const findTarget = () =>
      document.querySelector("#contact-form") ||
      document.querySelector("[data-contact-form]") ||
      document.querySelector("form");

    const attach = (target: Element) => {
      if (observedTarget === target) return;
      intersectionObserver?.disconnect();
      observedTarget = target;
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) setContactInView(entry.isIntersecting);
        },
        { rootMargin: "0px", threshold: 0.15 }
      );
      intersectionObserver.observe(target);
    };

    const initial = findTarget();
    if (initial) {
      attach(initial);
    } else {
      mutationObserver = new MutationObserver(() => {
        const t = findTarget();
        if (t) {
          attach(t);
          mutationObserver?.disconnect();
          mutationObserver = null;
        }
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      intersectionObserver?.disconnect();
      mutationObserver?.disconnect();
    };
  }, [location]);

  const onContactRoute = location.startsWith("/contact");
  const visible = scrolled && !contactInView && !onContactRoute;

  if (!visible) return null;

  return (
    <Link
      href="/contact"
      className="pxc-sticky-cta-in fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#FB0000] text-white text-sm font-extrabold px-5 py-3 shadow-[0_8px_30px_rgba(251,0,0,0.55)] hover:shadow-[0_12px_40px_rgba(251,0,0,0.75)] transition-shadow"
      style={{ fontFamily: "Nunito, sans-serif" }}
      data-testid="sticky-book-cta"
    >
      Book Strategy Session
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
