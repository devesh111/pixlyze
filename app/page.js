"use client"

import FeaturesSection from '@/components/features';
import HeroSection from "@/components/hero";
import InteractiveStats from "@/components/interactive-stats";
import PricingSection from "@/components/pricing";
import CTA from "@/components/cta";
import Footer from "@/components/Footer";
import { useEffect, useState } from 'react';
import { useMousePosition } from "@/hooks/use-mouse-position";
import CustomCursor from '@/components/custom-cursor';
import Contact from '@/components/contact';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mousePosition = useMousePosition();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  },[]);

  return (
    <div className="pt-30">
      {!isMobile && <CustomCursor mousePosition={mousePosition} />}
      <HeroSection />
      <InteractiveStats />
      <FeaturesSection />
      <PricingSection />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;