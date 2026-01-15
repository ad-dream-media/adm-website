"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faBolt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = sectionRef.current?.querySelector(".contact-title");
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

      const form = sectionRef.current?.querySelector(".contact-form");
      if (form) {
        gsap.fromTo(form,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: form,
              start: "top 88%",
              toggleActions: "play none none none",
            }
          }
        );
      }

      const infoCards = gsap.utils.toArray<HTMLElement>(".info-card");
      infoCards.forEach((card, index) => {
        gsap.fromTo(card,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.3 + index * 0.1,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-24 md:py-32 px-6 lg:px-12 bg-[#111] relative"
    >
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="contact-title mb-16 md:mb-20">
          <span className="text-[#F24B04] text-sm uppercase tracking-[0.2em] mb-4 block" style={{ fontFamily: "var(--font-mono)" }}>
            [ Let&apos;s Connect ]
          </span>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            GET IN TOUCH
          </h2>
          <p 
            className="text-[#888] text-lg md:text-xl max-w-2xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ready to transform your digital presence? Let&apos;s talk about your goals and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 md:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="info-card glass-card p-6 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F24B04]/10 border border-[#F24B04]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#F24B04] text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-body)" }}>
                    Email Us
                  </h3>
                  <p className="text-[#888] text-sm" style={{ fontFamily: "var(--font-mono)" }}>
                    contact@ad-dream-media.com
                  </p>
                </div>
              </div>
            </div>

            <div className="info-card glass-card p-6 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F24B04]/10 border border-[#F24B04]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#F24B04] text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-body)" }}>
                    Location
                  </h3>
                  <p className="text-[#888] text-sm" style={{ fontFamily: "var(--font-mono)" }}>
                    Worldwide Remote Team
                  </p>
                </div>
              </div>
            </div>

            <div className="info-card glass-card p-6 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F24B04]/10 border border-[#F24B04]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faBolt} className="text-[#F24B04] text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-body)" }}>
                    Response Time
                  </h3>
                  <p className="text-[#888] text-sm" style={{ fontFamily: "var(--font-mono)" }}>
                    Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="contact-form lg:col-span-2 glass-card p-8 md:p-12"
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-[#F24B04] flex items-center justify-center mx-auto mb-8">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-white" />
                </div>
                <h3 
                  className="text-3xl text-white mb-4" 
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  MESSAGE SENT!
                </h3>
                <p className="text-[#888] text-lg" style={{ fontFamily: "var(--font-body)" }}>
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label 
                      className="block text-white text-sm mb-3 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-[#666] focus:border-[#F24B04] transition-all"
                      placeholder="Your name"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-white text-sm mb-3 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-[#666] focus:border-[#F24B04] transition-all"
                      placeholder="your@email.com"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label 
                    className="block text-white text-sm mb-3 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-[#666] focus:border-[#F24B04] transition-all"
                    placeholder="Your company name"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <div className="mb-8">
                  <label 
                    className="block text-white text-sm mb-3 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-[#666] focus:border-[#F24B04] transition-all resize-none"
                    placeholder="Tell us about your project or challenge..."
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-base disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      Send Message
                      <svg 
                        className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}