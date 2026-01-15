"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const COOKIE_NAME = "adm_popup_dismissed";
const COOKIE_EXPIRY_HOURS = 24;

export default function ComingSoonPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if cookie exists
    const cookies = document.cookie.split(";");
    const dismissed = cookies.some((cookie) =>
      cookie.trim().startsWith(`${COOKIE_NAME}=`)
    );

    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && overlayRef.current && modalRef.current) {
      // Animate in
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.7)", delay: 0.1 }
      );
    }
  }, [isVisible]);

  const handleDismiss = () => {
    // Animate out
    if (overlayRef.current && modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 20,
        duration: 0.2,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        ease: "power2.in",
        onComplete: () => {
          // Set cookie with 24-hour expiry
          const expiryDate = new Date();
          expiryDate.setTime(expiryDate.getTime() + COOKIE_EXPIRY_HOURS * 60 * 60 * 1000);
          document.cookie = `${COOKIE_NAME}=true; expires=${expiryDate.toUTCString()}; path=/`;
          setIsVisible(false);
        },
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={handleDismiss}
    >
      <div
        ref={modalRef}
        className="relative max-w-lg w-full bg-[#111] border border-white/10 p-8 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[#666] hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F24B04]/10 border border-[#F24B04]/20 px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#F24B04] rounded-full animate-pulse"></span>
            <span
              className="text-[#F24B04] text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Under Construction
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            SOMETHING BIG IS COMING
          </h2>

          <p
            className="text-[#888] text-base md:text-lg leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We&apos;re crafting a brand new digital experience from the ground up. 
            Our new website is being custom-built with the same precision and 
            excellence we bring to every client project. Stay tuned.
          </p>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#F24B04]/30 to-transparent mb-8"></div>

          <button
            onClick={handleDismiss}
            className="btn-primary text-base"
          >
            Explore Current Site
          </button>
        </div>
      </div>
    </div>
  );
}
