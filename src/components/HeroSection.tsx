"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ delay: 0.5 });

      // Animate badge
      const badge = heroRef.current?.querySelector(".hero-badge");
      if (badge) {
        timeline.fromTo(badge, 
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        );
      }

      // Animate title words
      const words = titleRef.current?.querySelectorAll(".word");
      if (words && words.length > 0) {
        timeline.fromTo(words, 
          { y: 100, opacity: 0, rotateX: -90 },
          { 
            y: 0, 
            opacity: 1, 
            rotateX: 0,
            duration: 1, 
            stagger: 0.1, 
            ease: "power4.out" 
          },
          "-=0.3"
        );
      }

      // Animate subtitle
      if (subtitleRef.current) {
        timeline.fromTo(subtitleRef.current, 
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        );
      }

      // Animate CTA
      if (ctaRef.current) {
        timeline.fromTo(ctaRef.current, 
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
      }

      // Parallax on scroll
      gsap.to(titleRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleCTAClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#F24B04]/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff6b35]/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#F24B04]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 text-center max-w-6xl relative z-10">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-[#F24B04] rounded-full animate-pulse"></span>
          <span className="text-[#888] text-sm uppercase tracking-widest">Marketing Experts</span>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal mb-8 tracking-tight"
          style={{ 
            fontFamily: "var(--font-display)",
            lineHeight: "0.95",
            perspective: "1000px",
          }}
        >
          <span className="word inline-block text-white">A&nbsp;</span>
          <span className="word inline-block text-white">ONCE-IN-A-</span>
          <br className="hidden sm:block" />
          <span className="word inline-block text-[#F24B04] glow">MILLENNIUM&nbsp;</span>
          <span className="word inline-block text-white">SQUAD</span>
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-[#666] max-w-3xl mx-auto leading-relaxed mb-12"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Premium-grade marketing & proprietary web technologies.{" "}
          <span className="text-[#F24B04] font-semibold">100% custom-built.</span>{" "}
          Nothing generic. Only exceptional.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleCTAClick}
            className="btn-primary text-base group"
          >
            <span className="inline-flex items-center gap-3">
              Let&apos;s Talk
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <a 
            href="#services" 
            className="btn-outline"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[#666] text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#F24B04] to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}