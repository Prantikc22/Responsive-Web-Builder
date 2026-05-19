import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import HealthTips from "@/pages/HealthTips";
import ArticlePage from "@/pages/ArticlePage";
import BookAppointment from "@/pages/BookAppointment";
import Contact from "@/pages/Contact";
import BenefitsOfHomeopathy from "@/pages/BenefitsOfHomeopathy";
import Disclaimer from "@/pages/Disclaimer";
import SideEffectsOfHomeopathy from "@/pages/SideEffectsOfHomeopathy";
import ScientificBasisOfHomeopathy from "@/pages/ScientificBasisOfHomeopathy";
import CriticismOfHomeopathy from "@/pages/CriticismOfHomeopathy";
import PatientResults from "@/pages/PatientResults";
import MythsAndFactsDiet from "@/pages/MythsAndFactsDiet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/health-tips" component={HealthTips} />
          <Route path="/health-tips/:slug" component={ArticlePage} />
          <Route path="/book" component={BookAppointment} />
          <Route path="/contact" component={Contact} />
          <Route path="/benefits-of-homeopathy" component={BenefitsOfHomeopathy} />
          <Route path="/disclaimer" component={Disclaimer} />
          <Route path="/side-effects-of-homeopathy" component={SideEffectsOfHomeopathy} />
          <Route path="/scientific-basis-of-homeopathy" component={ScientificBasisOfHomeopathy} />
          <Route path="/criticism-of-homeopathy" component={CriticismOfHomeopathy} />
          <Route path="/patient-results" component={PatientResults} />
          <Route path="/myths-and-facts-about-diet" component={MythsAndFactsDiet} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
