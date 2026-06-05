import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/effects/ScrollProgressBar";
import { StickyBookCTA } from "@/components/effects/StickyBookCTA";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import CountyPage from "@/pages/CountyPage";
import StatePage from "@/pages/StatePage";
import Results from "@/pages/Results";
import Events from "@/pages/Events";
import MedAiStudio from "@/pages/MedAiStudio";
import ServiceDetail from "@/pages/ServiceDetail";
import AssessmentGate from "@/pages/AssessmentGate";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

// Current canonical service detail slugs (new offer hierarchy)
const SERVICE_DETAIL_SLUGS = new Set([
  "puzzle-pyramid-strategy-session",
  "practice-clarity-assessment",
  "four-pathways-to-practice-freedom",
  "specialized-expertise",
  "leadership-development",
  "ai-consulting",
  "staff-patient-experience",
  "from-patients-to-profits",
  "practice-professionals-playground",
  "blueprint-workshops",
]);

// State slugs
const STATE_SLUGS = new Set(["florida", "north-carolina", "georgia", "nationwide"]);

function ServicesRouter() {
  const [location] = useLocation();
  const slug = location.split("/").filter(Boolean).pop() || "";
  if (SERVICE_DETAIL_SLUGS.has(slug)) return <ServiceDetail />;
  if (STATE_SLUGS.has(slug)) return <StatePage />;
  return <CountyPage />;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <ScrollProgressBar />
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/services/:slug" component={ServicesRouter} />
          <Route path="/results" component={Results} />
          <Route path="/events" component={Events} />
          <Route path="/med-ai-studio" component={MedAiStudio} />
          <Route path="/assessment" component={AssessmentGate} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <StickyBookCTA />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
