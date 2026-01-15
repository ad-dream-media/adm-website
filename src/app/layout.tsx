import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AD Dream Media | Online Marketing, Done Right.",
  description: "Transform your business with AD Dream Media effective marketing solutions. Connect with us to elevate your digital presence today. A once-in-a-millennium squad with collective capabilities equal to tactical nukes in marketing and reputation.",
  keywords: ["marketing", "seo", "reputation management", "youtube", "google ads", "social media", "digital marketing", "online marketing"],
  openGraph: {
    title: "AD Dream Media | Online Marketing, Done Right.",
    description: "Transform your business with AD Dream Media effective marketing solutions. Connect with us to elevate your digital presence today.",
    url: "https://ad-dream-media.com",
    siteName: "AD Dream Media LTD",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AD Dream Media | Online Marketing, Done Right.",
    description: "Transform your business with AD Dream Media effective marketing solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
