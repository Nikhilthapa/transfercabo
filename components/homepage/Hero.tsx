"use client";

import Navigation from "./Navigation";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const { t } = useI18n();
  const firstButtonRef = useRef<HTMLAnchorElement>(null);
  const secondButtonRef = useRef<HTMLAnchorElement>(null);
  const [buttonWidth, setButtonWidth] = useState<string>("max-content");

  useEffect(() => {
    const updateButtonWidth = () => {
      if (firstButtonRef.current) {
        const width = firstButtonRef.current.offsetWidth;
        setButtonWidth(`${width}px`);
      }
    };

    updateButtonWidth();
    window.addEventListener('resize', updateButtonWidth);
    
    return () => {
      window.removeEventListener('resize', updateButtonWidth);
    };
  }, [t]);
  return (
    <section className="relative h-[80vh] md:h-[100vh] overflow-visible">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* White gradient shadow at the top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none" />
        {/* White gradient shadow at the bottom - smooth transition overlapping video edge */}
        <div 
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '150px',
            background: `linear-gradient(to top, 
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 0.99) 5%,
              rgba(255, 255, 255, 0.97) 10%,
              rgba(255, 255, 255, 0.94) 15%,
              rgba(255, 255, 255, 0.90) 20%,
              rgba(255, 255, 255, 0.85) 25%,
              rgba(255, 255, 255, 0.78) 30%,
              rgba(255, 255, 255, 0.70) 35%,
              rgba(255, 255, 255, 0.60) 42%,
              rgba(255, 255, 255, 0.50) 50%,
              rgba(255, 255, 255, 0.40) 58%,
              rgba(255, 255, 255, 0.30) 65%,
              rgba(255, 255, 255, 0.22) 72%,
              rgba(255, 255, 255, 0.15) 78%,
              rgba(255, 255, 255, 0.10) 84%,
              rgba(255, 255, 255, 0.06) 90%,
              rgba(255, 255, 255, 0.03) 95%,
              rgba(255, 255, 255, 0.01) 98%,
              rgba(255, 255, 255, 0) 100%
            )`
          }}
        />
      </div>

      {/* Navigation */}
      <div className="relative z-[9999]">
        <Navigation />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 flex items-center h-[calc(80vh-80px)] md:h-[calc(100vh-100px)] min-h-[350px] md:min-h-[500px]">
        <div className="max-w-3xl">
          <h2 className="text-[#0446A1] text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 lg:mb-4">
            Cheap Transfers Cabo
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-Montserrat font-bold text-white mb-[10px] whitespace-nowrap">
            {t("hero.title")}
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
            {t("hero.tagline")}
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 md:mb-6 lg:mb-10">
            {t("hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 items-start">
            <Link ref={firstButtonRef} href="/cabo/reservation#reservation-form" className="w-max bg-[#0446a1] hover:bg-[#033a8a] text-white px-6 md:px-8 lg:px-10 py-2.5 md:py-3 lg:py-4 rounded-md font-semibold text-sm md:text-base lg:text-lg transition shadow-lg text-center flex items-center justify-center border-2 border-transparent">
              {t("hero.button.bookRide")}
            </Link>
            <Link ref={secondButtonRef} href="/activity" className="border-2 border-white text-white px-6 md:px-8 lg:px-10 py-2.5 md:py-3 lg:py-4 rounded-md font-semibold text-sm md:text-base lg:text-lg hover:bg-white/10 transition text-center flex items-center justify-center" style={{ width: buttonWidth }}>
              {t("hero.button.exploreActivities")}
            </Link>
          </div>
        </div>
      </div>

      {/* White strip between video and next section - overlapping video edge to hide line */}
      <div 
        className="absolute -bottom-2 left-0 right-0 pointer-events-none z-[50]"
        style={{
          height: '120px',
          background: `linear-gradient(to bottom, 
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.02) 5%,
            rgba(255, 255, 255, 0.05) 10%,
            rgba(255, 255, 255, 0.10) 18%,
            rgba(255, 255, 255, 0.18) 28%,
            rgba(255, 255, 255, 0.28) 38%,
            rgba(255, 255, 255, 0.40) 48%,
            rgba(255, 255, 255, 0.52) 58%,
            rgba(255, 255, 255, 0.64) 68%,
            rgba(255, 255, 255, 0.75) 78%,
            rgba(255, 255, 255, 0.84) 86%,
            rgba(255, 255, 255, 0.91) 92%,
            rgba(255, 255, 255, 0.96) 96%,
            rgba(255, 255, 255, 0.99) 98%,
            rgba(255, 255, 255, 1) 100%
          )`
        }}
      />
    </section>
  );
}

