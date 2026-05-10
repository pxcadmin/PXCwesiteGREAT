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
import Blog from "@/pages/Blog";
import CountyPage from "@/pages/CountyPage";
import StatePage from "@/pages/StatePage";
import Results from "@/pages/Results";
import Events from "@/pages/Events";
import MedAiStudio from "@/pages/MedAiStudio";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
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
          <Route path="/services/florida" component={StatePage} />
          <Route path="/services/north-carolina" component={StatePage} />
          <Route path="/services/georgia" component={StatePage} />
          <Route path="/services/nationwide" component={StatePage} />
          <Route path="/services/:county" component={CountyPage} />
          <Route path="/results" component={Results} />
          <Route path="/events" component={Events} />
          <Route path="/med-ai-studio" component={MedAiStudio} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={Blog} />
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
