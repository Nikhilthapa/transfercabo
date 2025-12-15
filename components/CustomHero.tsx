'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { activities } from "@/app/activity/page";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activitiesDropdownOpen, setActivitiesDropdownOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);
  return (
    <section className="relative min-h-[400px] md:min-h-[600px] lg:min-h-[700px] overflow-visible pb-20 md:pb-28 lg:pb-40 border-0 border-none outline-none" style={{ borderBottom: 'none', border: 'none' }}>
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
                HOME
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
                    ACTIVITIES
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
                        {activities.map((activity) => (
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
                href="/contact" 
                className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition"
              >
                CONTACT
              </Link>
              
              <Link 
                href="/about" 
                className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition"
              >
                ABOUT
              </Link>
              
              {/* Language Selector */}
              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/lan/eng.png"
                    alt="English"
                    width={24}
                    height={24}
                    className="object-cover w-full h-full"
                    quality={85}
                    sizes="24px"
                  />
                </div>
                <span className="text-black text-sm font-semibold group-hover:text-[#0446A1] transition">English</span>
                <svg className="w-3.5 h-3.5 text-black group-hover:text-[#0446A1] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
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
                  HOME
                </Link>
                <Link 
                  href="/about" 
                  className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                {/* Mobile Activities accordion */}
                <button
                  className="flex items-center justify-between text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition px-2 py-2"
                  onClick={() => setMobileActivitiesOpen((prev) => !prev)}
                  aria-expanded={mobileActivitiesOpen}
                  aria-controls="mobile-activities-list"
                >
                  <span>ACTIVITIES</span>
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
                    {activities.map((activity) => (
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
                  href="/contact" 
                  className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
                
                {/* Mobile Language Selector */}
                <div className="flex items-center gap-3 px-2 py-2 w-fit">
                  <div className="relative w-10 h-6 flex-shrink-0">
                    <Image
                      src="/lan/eng.png"
                      alt="English"
                      fill
                      className="object-contain rounded-sm"
                      sizes="40px"
                      quality={85}
                    />
                  </div>
                  <span className="text-black text-sm font-semibold uppercase">English</span>
                  <svg className="w-3.5 h-3.5 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content - Text Overlay on Lower Left */}
      <div className={`relative z-10 container mx-auto px-4 md:px-8 flex ${textPosition === 'bottom' ? 'items-end pb-12 md:pb-16 lg:pb-24' : 'items-center pt-4 md:pt-6 lg:pt-12'} min-h-[400px] md:min-h-[500px] lg:min-h-[600px]`}>
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
              <Link href="/activity/reservation">
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

      {/* Top Fade to White */}
      <div className="absolute top-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-b from-white/70 via-white/25 to-transparent pointer-events-none z-[20]" />

      {/* Smooth gradient transition at bottom - single gradient for seamless blend */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] md:h-[120px] bg-gradient-to-t from-[#ffffff] via-[#ffffff] via-[#ffffff]/95 via-[#ffffff]/70 via-[#ffffff]/40 to-transparent pointer-events-none border-0 border-none outline-none" style={{ border: 'none', borderTop: 'none', borderBottom: 'none', outline: 'none', boxShadow: 'none' }} />
    </section>
  );
}

