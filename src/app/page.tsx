import BankingFeatures from "@/components/BankingFeatures";
import { GlobeDemo } from "@/components/Globe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import UpcomingFacilities from "@/components/UpcomingFacilities";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <div className="relative w-full flex items-center justify-center">
        <Navbar />
      </div>
      <HeroSection />
      <BankingFeatures />
      <Testimonials />
      <GlobeDemo />
      <UpcomingFacilities />
    </main>
  );
}
