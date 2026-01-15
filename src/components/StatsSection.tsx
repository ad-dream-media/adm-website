"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StatItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const statsData: StatItem[] = [
  {
    id: 1,
    value: 150,
    suffix: "+",
    label: "Clients Served",
    description: "Businesses transformed",
  },
  {
    id: 2,
    value: 500,
    suffix: "%",
    label: "Avg. Growth",
    description: "In organic traffic",
  },
  {
    id: 3,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "In digital marketing",
  },
  {
    id: 4,
    value: 24,
    suffix: "/7",
    label: "Support",
    description: "Always available",
  },
];

function AnimatedCounter({ value, suffix, trigger }: { value: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    const duration = 2000;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOut * value);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [trigger, value]);

  return <span>{count}{suffix}</span>;
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => setIsVisible(true),
      });

      const stats = gsap.utils.toArray<HTMLElement>(".stat-item");
      stats.forEach((stat, index) => {
        gsap.fromTo(stat,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stat,
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
      ref={sectionRef} 
      className="py-24 md:py-32 px-6 lg:px-12 bg-[#111] relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F24B04]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F24B04]/30 to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat) => (
            <div 
              key={stat.id}
              className="stat-item text-center group"
            >
              <div 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F24B04] mb-4 group-hover:glow transition-all duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} trigger={isVisible} />
              </div>
              <h3 
                className="text-white text-lg md:text-xl font-semibold mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {stat.label}
              </h3>
              <p 
                className="text-[#666] text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}