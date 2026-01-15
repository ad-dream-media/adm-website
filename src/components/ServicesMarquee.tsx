"use client";

const services = [
  "SEO",
  "REPUTATION", 
  "YOUTUBE",
  "GOOGLE ADS",
  "SOCIAL MEDIA",
  "ANALYTICS",
];

interface ServicesMarqueeProps {
  direction?: "left" | "right";
}

export default function ServicesMarquee({ direction = "left" }: ServicesMarqueeProps) {
  return (
    <div className="py-6 bg-[#111] border-y border-white/5 overflow-hidden">
      <div className="relative">
        <div className={`flex whitespace-nowrap ${direction === "left" ? "animate-marquee" : "animate-marquee-reverse"}`}>
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex">
              {services.map((service, index) => (
                <span
                  key={`${setIndex}-${index}`}
                  className="inline-flex items-center text-2xl md:text-3xl lg:text-4xl font-normal text-white/20 hover:text-[#F24B04] transition-colors duration-300 cursor-default"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
                >
                  <span className="mx-6 md:mx-10 text-[#F24B04]/30">◆</span>
                  {service}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}