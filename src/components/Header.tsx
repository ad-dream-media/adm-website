"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      if (logoRef.current) {
        tl.fromTo(logoRef.current, 
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      }

      if (navRef.current) {
        tl.fromTo(navRef.current.children, 
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out" },
          "-=0.4"
        );
      }
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy", isPage: true },
    { href: "/terms-and-conditions", label: "Terms", isPage: true },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div ref={logoRef} className="relative z-10">
            <Link href="/" className="flex items-center group">
              <Image 
                src="/logo.png" 
                alt="Ad Dream Media" 
                width={280} 
                height={160}
                className="h-32 md:h-40 lg:h-48 w-auto transition-transform duration-300 group-hover:scale-105 -my-8"
                priority
              />
            </Link>
          </div>

          <nav ref={navRef} className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-[#888] text-sm uppercase tracking-wider hover:text-[#F24B04] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a 
                  key={link.href}
                  href={link.href}
                  className="text-[#888] text-sm uppercase tracking-wider hover:text-[#F24B04] transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            ))}
            <a href="#contact" className="btn-primary text-sm">
              Get Started
            </a>
          </nav>

          <button 
            className="md:hidden text-white p-2 relative w-10 h-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}></span>
            <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}></span>
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#111]/95 backdrop-blur-xl border-t border-white/5">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-white text-lg font-medium py-3 border-b border-white/10 hover:text-[#F24B04] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a 
                  key={link.href}
                  href={link.href}
                  className="text-white text-lg font-medium py-3 border-b border-white/10 hover:text-[#F24B04] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
            <a 
              href="#contact"
              className="btn-primary text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}