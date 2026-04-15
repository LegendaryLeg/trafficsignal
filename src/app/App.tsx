import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ScrollingTicker from "./components/ScrollingTicker";
import StatsBar from "./components/StatsBar";
import SignCategories from "./components/SignCategories";
import Pricing from "./components/Pricing";
import WhyUs from "./components/WhyUs";
import CTABand from "./components/CTABand";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Navigation />
      <main>
        <Hero />
        <ScrollingTicker />
        <StatsBar />
        <SignCategories />
        <Pricing />
        <WhyUs />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}

