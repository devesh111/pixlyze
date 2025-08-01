"use client"

import FeaturesSection from '@/components/features';
import HeroSection from "@/components/hero";
import InteractiveStats from "@/components/interactive-stats";
import PricingSection from "@/components/pricing";
import CTA from "@/components/cta";
import Footer from "@/components/Footer";
import { useEffect } from 'react';

const Home = () => {
  return (
    <div className="pt-30">
      <HeroSection />
      <InteractiveStats />
      <FeaturesSection />
      <PricingSection />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;