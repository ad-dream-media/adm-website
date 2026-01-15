"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export default function TermsAndConditions() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#e3dfde] text-[#1a1a1a]">
      {/* Header */}
      <header className="border-b border-[#ccc] py-6 px-6 md:px-12">
        <nav className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Ad Dream Media" 
              width={100} 
              height={60}
              className="h-auto w-auto max-w-[80px]"
            />
          </Link>
          <Link 
            href="/" 
            className="btn-outline text-sm"
          >
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main ref={contentRef} className="container mx-auto px-6 md:px-12 py-16 max-w-4xl">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
          style={{ fontFamily: 'var(--font-space)' }}
        >
          <span className="text-[#1a1a1a]">Terms & </span>
          <span className="text-[#ff6b35]">Conditions</span>
        </h1>
        
        <div 
          className="space-y-8 text-[#666] leading-relaxed"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          <p className="text-[#888]">Last updated: January 15, 2026</p>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-space)' }}>Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, 
              whether personally or on behalf of an entity (&ldquo;you&rdquo;) and Ad Dream Media LTD (&ldquo;we,&rdquo; &ldquo;us&rdquo; 
              or &ldquo;our&rdquo;), concerning your access to and use of the ad-dream-media.com website as well 
              as any other media form, media channel, mobile website or mobile application related, 
              linked, or otherwise connected thereto.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-space)' }}>Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the site is our proprietary property and all source code, 
              databases, functionality, software, website designs, audio, video, text, photographs, 
              and graphics on the site are owned or controlled by us or licensed to us, and are 
              protected by copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-space)' }}>User Representations</h2>
            <p className="mb-4">
              By using the site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All registration information you submit will be true, accurate, current, and complete</li>
              <li>You will maintain the accuracy of such information and promptly update as necessary</li>
              <li>You have the legal capacity and agree to comply with these Terms and Conditions</li>
              <li>You will not access the site through automated or non-human means</li>
              <li>You will not use the site for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-space)' }}>Services</h2>
            <p>
              Ad Dream Media LTD provides comprehensive marketing and reputation management services 
              including SEO, social media management, YouTube optimization, Google advertising, and 
              reputation management. All services are subject to availability and our standard 
              business practices. Specific terms for services will be outlined in individual 
              service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-space)' }}>Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any 
              third party for any direct, indirect, consequential, exemplary, incidental, special, 
              or punitive damages arising from your use of the site, even if we have been advised 
              of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-space)' }}>Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws applicable to 
              Ad Dream Media LTD. Ad Dream Media LTD and yourself irrevocably consent that the 
              courts shall have exclusive jurisdiction to resolve any dispute which may arise 
              in connection with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-space)' }}>Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the site or to receive further information 
              regarding use of the site, please contact Ad Dream Media LTD through our website 
              contact form or other available channels.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link 
            href="/" 
            className="inline-block btn-primary rounded-lg"
            style={{ fontFamily: 'var(--font-space)' }}
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
