import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CTABand from "../components/CTABand";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import ScrollingTicker from "../components/ScrollingTicker";
import SignCategories from "../components/SignCategories";
import StatsBar from "../components/StatsBar";
import WhyUs from "../components/WhyUs";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;
    const timer = window.setTimeout(() => {
      const el = document.getElementById(scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => window.clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Hero />
      <ScrollingTicker />
      <StatsBar />
      <SignCategories />
      <Pricing />
      <WhyUs />
      <CTABand />
    </>
  );
}
