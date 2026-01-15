"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (footerRef.current) {
        gsap.fromTo(footerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 95%",
              toggleActions: "play none none none",
            }
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);
  
  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
    { href: "/terms-and-conditions", label: "Terms", isPage: true },
    { href: "/privacy-policy", label: "Privacy", isPage: true },
  ];

  const socialLinks: { label: string; href: string; icon: IconDefinition }[] = [
    { label: "LinkedIn", href: "#", icon: faLinkedinIn },
    { label: "Twitter", href: "#", icon: faTwitter },
    { label: "Instagram", href: "#", icon: faInstagram },
  ];

  return (
    <footer 
      ref={footerRef}
      className="py-16 md:py-24 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/5"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#F24B04] flex items-center justify-center">
                <span className="text-black font-bold text-xl" style={{ fontFamily: "var(--font-display)" }}>A</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                AD DREAM<span className="text-[#F24B04]">.</span>
              </span>
            </Link>
            <p 
              className="text-[#666] text-base leading-relaxed max-w-md mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              A Mothership of Brilliant Marketing Brands. We transform businesses through strategic digital marketing solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#888] hover:text-[#F24B04] hover:border-[#F24B04] transition-all duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-white text-sm uppercase tracking-[0.2em] mb-6"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.isPage ? (
                    <Link 
                      href={link.href}
                      className="text-[#666] hover:text-[#F24B04] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-[#666] hover:text-[#F24B04] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 
              className="text-white text-sm uppercase tracking-[0.2em] mb-6"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {["SEO", "Reputation", "YouTube", "Google Ads", "Social Media", "Analytics"].map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-[#666] hover:text-[#F24B04] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-[#666] text-sm"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © 2020-{new Date().getFullYear()} Ad Dream Media LTD. All rights reserved.
          </p>
          <p 
            className="text-[#666] text-sm"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Crafted with <span className="text-[#F24B04]">◆</span> precision
          </p>
        </div>
      </div>
    </footer>
  );
}