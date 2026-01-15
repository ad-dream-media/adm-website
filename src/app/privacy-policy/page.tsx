"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export default function PrivacyPolicy() {
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
          <span className="text-[#1a1a1a]">Privacy </span>
          <span className="text-[#ff6b35]">Policy</span>
        </h1>
        
        <div 
          className="space-y-8 text-[#666] leading-relaxed"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          <p className="text-[#888]">Last updated: January 15, 2026</p>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-space)' }}>Introduction</h2>
            <p>
              Ad Dream Media LTD (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website ad-dream-media.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-space)' }}>Information We Collect</h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-[#1a1a1a]">Personal Data:</strong> Name, email address, phone number, and company information you provide when contacting us.</li>
              <li><strong className="text-[#1a1a1a]">Derivative Data:</strong> Information our servers automatically collect, such as IP address, browser type, and access times.</li>
              <li><strong className="text-[#1a1a1a]">Financial Data:</strong> Payment information when applicable for our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-space)' }}>Use of Your Information</h2>
            <p className="mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, 
              and customized experience. We may use information collected about you to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deliver targeted advertising and marketing communications</li>
              <li>Assist in the creation of business accounts</li>
              <li>Improve our website and services</li>
              <li>Process transactions and send related information</li>
              <li>Respond to customer service requests</li>
              <li>Monitor and analyze usage and trends</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-space)' }}>Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information 
              may be disclosed as follows: by law or to protect rights, third-party service providers, 
              marketing communications, and business transfers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-space)' }}>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your 
              personal information. While we have taken reasonable steps to secure the information you 
              provide to us, please be aware that no security measures are perfect or impenetrable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-space)' }}>Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at 
              Ad Dream Media LTD.
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
