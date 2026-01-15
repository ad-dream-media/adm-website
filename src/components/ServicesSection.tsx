"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faStar, faBullseye, faCode, faCogs } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceItem {
  id: number;
  icon: IconDefinition;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    icon: faSearch,
    title: "SEO",
    description: "Deep algorithmic understanding meets proprietary optimization tools. We don't follow formulas—we engineer new ones through constant experimentation.",
  },
  {
    id: 2,
    icon: faCode,
    title: "Web Development",
    description: "Premium-grade, custom-built web platforms. No templates, no page builders. Pure bespoke development engineered specifically for your business needs.",
  },
  {
    id: 3,
    icon: faYoutube,
    title: "YouTube",
    description: "Video dominance through custom analytics, proprietary optimization strategies, and in-house production capabilities that maximize visibility and engagement.",
  },
  {
    id: 4,
    icon: faBullseye,
    title: "Google Ads",
    description: "Strategic paid advertising powered by our proprietary tracking and optimization systems. Every campaign is custom-engineered for your specific goals.",
  },
  {
    id: 5,
    icon: faCogs,
    title: "MarTech Solutions",
    description: "In-house marketing technology built from scratch. Custom CRMs, analytics dashboards, automation tools—all proprietary, all yours.",
  },
  {
    id: 6,
    icon: faStar,
    title: "Reputation",
    description: "Brand authority through strategic positioning and custom monitoring systems. We build reputations that dominate markets.",
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      const title = sectionRef.current?.querySelector(".services-title");
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

      // Cards staggered animation
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
      
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] relative"
    >
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="services-title mb-16 md:mb-20">
          <span className="text-[#F24B04] text-sm uppercase tracking-[0.2em] mb-4 block" style={{ fontFamily: "var(--font-mono)" }}>
            [ What We Do ]
          </span>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            OUR SERVICES
          </h2>
          <p 
            className="text-[#888] text-lg md:text-xl max-w-2xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Proprietary technology meets premium marketing. Every solution is custom-built in-house—no generic tools, only exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-card glass-card p-8 md:p-10 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#F24B04]/10 border border-[#F24B04]/20 flex items-center justify-center mb-6 group-hover:bg-[#F24B04]/20 transition-all duration-300">
                <FontAwesomeIcon icon={service.icon} className="text-[#F24B04] text-2xl" />
              </div>
              <h3 
                className="text-2xl md:text-3xl text-white mb-4 group-hover:text-[#F24B04] transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title.toUpperCase()}
              </h3>
              <p 
                className="text-[#888] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#F24B04] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>Learn more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}