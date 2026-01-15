"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesMarquee from "@/components/ServicesMarquee";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("[Home] Page mounted, initializing ScrollTrigger");
    
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("[Home] ScrollTrigger refreshed");
    }, 100);

    return () => {
      console.log("[Home] Cleaning up ScrollTrigger");
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-[#0a0a0a] text-white noise-overlay relative">
      <Header />
      <HeroSection />
      <ServicesMarquee direction="left" />
      <TeamSection />
      <StatsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
