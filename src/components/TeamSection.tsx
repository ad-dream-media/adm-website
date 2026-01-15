"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const teamData = [
  {
    id: "team",
    number: "01",
    title: "Our Team",
    description: "Each team member is a professional in their field—marketers, developers, and technologists working in symbiosis. We build proprietary tools, custom platforms, and bespoke solutions. Nothing off-the-shelf. Everything crafted in-house.",
  },
  {
    id: "expertise",
    number: "02",
    title: "Our Technology",
    description: "Marketing and technology go hand in hand. We develop custom web platforms, proprietary analytics systems, and purpose-built marketing tech—all internal, all ours. Your solutions are built from scratch for YOUR challenges, not generic tools adjusted to fit.",
  },
  {
    id: "mission",
    number: "03",
    title: "Our Philosophy",
    description: "We reject the ordinary. Every client gets bespoke strategies and custom-engineered solutions designed specifically for their unique challenges. No templates. No compromises. Only exceptional results.",
  }
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      const title = sectionRef.current?.querySelector(".section-title");
      if (title) {
        gsap.fromTo(title,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
              toggleActions: "play none none none",
            }
          }
        );
      }

      const items = gsap.utils.toArray<HTMLElement>(".team-item");
      
      items.forEach((item, index) => {
        gsap.fromTo(item, 
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none none",
            }
          }
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] relative">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0"></div>
      
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="section-title mb-16 md:mb-20">
          <span className="text-[#F24B04] text-sm uppercase tracking-[0.2em] mb-4 block" style={{ fontFamily: "var(--font-mono)" }}>
            [ Who We Are ]
          </span>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            THE DREAM TEAM
          </h2>
        </div>

        <div className="space-y-6">
          {teamData.map((item) => (
            <div 
              key={item.id}
              id={item.id} 
              className="team-item glass-card p-8 md:p-12 cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                <span 
                  className="text-[#F24B04] text-sm font-mono"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.number}
                </span>
                <div className="flex-1">
                  <h3 
                    className="text-2xl md:text-3xl lg:text-4xl text-white mb-4 group-hover:text-[#F24B04] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title.toUpperCase()}
                  </h3>
                  <p 
                    className="text-[#888] text-base md:text-lg leading-relaxed max-w-3xl"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.description}
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 border border-white/10 group-hover:border-[#F24B04] group-hover:bg-[#F24B04]/10 transition-all duration-300">
                  <svg className="w-5 h-5 text-white/30 group-hover:text-[#F24B04] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}