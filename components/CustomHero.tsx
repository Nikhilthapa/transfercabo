"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { activities } from "@/lib/activities";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

interface CustomHeroProps {
  backgroundImagePath: string;
  title: string;
  subtitle: string;
  hideTopBar?: boolean;
  buttonLabel?: string;
  textPosition?: 'center' | 'bottom';
  titleColor?: string;
  subtitleColor?: string;
}

export default function CustomHero({
  backgroundImagePath,
  title,
  subtitle,
  hideTopBar = false,
  buttonLabel,
  textPosition = 'center',
  titleColor = '#ffffff',
  subtitleColor = '#ffffff',
}: CustomHeroProps) {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activitiesDropdownOpen, setActivitiesDropdownOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);

  // Helper function to get translation key from slug
  const getActivityKey = (slug: string) => {
    const slugMap: { [key: string]: string } = {
      "la-paz": "laPaz",
      "atvs": "atvs",
      "art-walk": "artWalk",
      "horseback-riding": "horsebackRiding",
      "razors": "razors",
      "todos-santos": "todosSantos",
      "cerritos": "cerritos",
      "los-cabos": "losCabos",
      "hidden-towns": "hiddenTowns",
      "40-ft": "40ft",
      "My-dream-33-footer": "myDream33Footer",
    };
    return slugMap[slug] || slug;
  };

  // Get localized activities
  const localizedActivities = activities.map((activity) => {
    const key = getActivityKey(activity.slug);
    return {
      ...activity,
      name: t(`activity.data.${key}.name`),
    };
  });

  return (
    <section className="relative h-[80vh] md:h-[100vh] overflow-visible border-0 border-none outline-none" style={{ borderBottom: 'none', border: 'none' }}>
      {/* Background Image Container - placed first so it shows through navigation */}
      <div className="absolute inset-0 border-0 border-none">
        <div className="relative w-full h-full border-0 border-none">
          <Image
            src={backgroundImagePath}
            alt="Hero Background"
            fill
            className="object-cover border-0 border-none"
            priority
            quality={90}
            sizes="100vw"
            style={{ border: 'none', outline: 'none' }}
          />
          {/* Optional dark overlay for text readability - adjust opacity as needed */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>

      {/* Blue Top Border Bar */}
      {!hideTopBar && <div className="absolute top-0 left-0 right-0 h-1 bg-[#0446A1] z-30" />}

      {/* Transparent Navigation Bar */}
      <nav className="relative z-[9999] bg-transparent overflow-visible">
        <div className="container mx-auto px-4 md:px-8 py-4 overflow-visible">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex flex-col uppercase leading-tight">
                <h1 className="text-2xl font-bold text-black">CHEAP</h1>
                <p className="text-[10px] font-medium text-black tracking-wider">TRANSFERSCABO</p>
              </div>
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Cheap Transfers Cabo Logo"
                  fill
                  className="object-contain"
                  quality={90}
                  sizes="48px"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link 
                href="/" 
                className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition"
              >
                {t("nav.home")}
              </Link>
              
              {/* Activities with Dropdown */}
              <div 
                className="relative group overflow-visible"
                onMouseEnter={() => setActivitiesDropdownOpen(true)}
                onMouseLeave={() => setActivitiesDropdownOpen(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link 
                    href="/activity" 
                    className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition"
                  >
                    {t("nav.activities")}
                  </Link>
                  <svg className={`w-3.5 h-3.5 text-black transition hover:text-[#0446A1] ${activitiesDropdownOpen ? 'text-[#0446A1]' : 'group-hover:text-[#0446A1]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {/* Dropdown Menu - includes padding area to maintain hover */}
                <div className={`absolute top-full left-0 w-56 transition-all duration-200 z-[100] overflow-visible ${activitiesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <div className="pt-2 pb-2">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200">
                      <div className="py-2">
                        {localizedActivities.map((activity) => (
                          <Link
                            key={activity.slug}
                            href={`/activity/${activity.slug}`}
                            className="block px-4 py-2.5 text-sm text-black hover:bg-[#0446A1] hover:text-white transition cursor-pointer"
                          >
                            {activity.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link 
                href="/contact#get-in-touch" 
                className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition"
              >
                {t("nav.contact")}
              </Link>
              
              <Link 
                href="/about" 
                className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition"
              >
                {t("nav.about")}
              </Link>
              
              {/* Language Selector */}
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-black hover:text-[#0446A1] transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-black/20 pt-4 bg-white/95 backdrop-blur-sm">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.home")}
                </Link>
                <Link 
                  href="/about" 
                  className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.about")}
                </Link>
                {/* Mobile Activities accordion */}
                <button
                  className="flex items-center justify-between text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition px-2 py-2"
                  onClick={() => setMobileActivitiesOpen((prev) => !prev)}
                  aria-expanded={mobileActivitiesOpen}
                  aria-controls="mobile-activities-list"
                >
                  <span>{t("nav.activities")}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileActivitiesOpen ? 'rotate-180 text-[#0446A1]' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileActivitiesOpen && (
                  <div id="mobile-activities-list" className="ml-2 pl-2 border-l border-gray-200 space-y-1">
                    {localizedActivities.map((activity) => (
                      <Link
                        key={activity.slug}
                        href={`/activity/${activity.slug}`}
                        className="block text-black text-sm hover:text-[#0446A1] transition px-2 py-1"
                        onClick={() => {
                          setMobileActivitiesOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {activity.name}
                      </Link>
                    ))}
                  </div>
                )}
                <Link 
                  href="/contact#get-in-touch" 
                  className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.contact")}
                </Link>
                
                {/* Mobile Language Selector */}
                <LanguageSwitcher />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content - Text Overlay on Lower Left */}
      <div className={`relative z-10 container mx-auto px-4 md:px-8 flex ${textPosition === 'bottom' ? 'items-end pb-12 md:pb-16 lg:pb-24' : 'items-center pt-4 md:pt-6 lg:pt-12'} h-[calc(80vh-80px)] md:h-[calc(100vh-100px)] min-h-[350px] md:min-h-[500px]`}>
        <div className="max-w-3xl">
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 md:mb-3 lg:mb-4 leading-tight whitespace-pre-line"
            style={{ color: titleColor }}
          >
            {title}
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl font-medium"
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </p>
          {buttonLabel && (
            <div className="mt-4 md:mt-6">
              <Link href="/activity/reservation#reservation-form">
                <button
                  className="px-5 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-3.5 rounded-lg font-semibold text-sm md:text-base lg:text-lg hover:opacity-90 transition shadow-md"
                  style={{ backgroundColor: '#0446A1', color: '#fcfcfc' }}
                >
                  {buttonLabel}
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* White gradient shadow at the top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none z-[20]" />

      {/* White gradient shadow at the bottom - smooth transition overlapping image edge */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[20]"
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

      {/* White strip between image and next section - overlapping image edge to hide line */}
      <div 
        className="absolute -bottom-2 left-0 right-0 pointer-events-none z-[20]"
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

