'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface CustomHeroProps {
  backgroundImagePath: string;
  title: string;
  subtitle: string;
  hideTopBar?: boolean;
  buttonLabel?: string;
  textPosition?: 'center' | 'bottom';
}

export default function CustomHero({
  backgroundImagePath,
  title,
  subtitle,
  hideTopBar = false,
  buttonLabel,
  textPosition = 'center',
}: CustomHeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden pb-28 md:pb-40">
      {/* Background Image Container - placed first so it shows through navigation */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src={backgroundImagePath}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Optional dark overlay for text readability - adjust opacity as needed */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>

      {/* Blue Top Border Bar */}
      {!hideTopBar && <div className="absolute top-0 left-0 right-0 h-1 bg-[#0446A1] z-30" />}

      {/* Transparent Navigation Bar */}
      <nav className="relative z-20 bg-transparent">
        <div className="container mx-auto px-4 md:px-8 py-4">
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
              <div className="flex items-center gap-1 cursor-pointer group">
                <Link 
                  href="/activity" 
                  className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition"
                >
                  ACTIVITIES
                </Link>
                <svg className="w-3.5 h-3.5 text-black group-hover:text-[#0446A1] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
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
                <Link 
                  href="/activity" 
                  className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ACTIVITIES
                </Link>
                <Link 
                  href="/contact" 
                  className="text-black font-semibold uppercase text-sm hover:text-[#0446A1] transition px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
                
                {/* Mobile Language Selector */}
                <div className="flex items-center gap-3 cursor-pointer px-2 py-2 w-fit">
                  <div className="w-10 h-6 relative">
                    <Image
                      src="/lan/eng.png"
                      alt="English"
                      fill
                      className="object-contain rounded-sm"
                    />
                  </div>
                  <span className="text-black text-sm font-semibold uppercase hover:text-[#0446A1] transition">English</span>
                  <svg className="w-3.5 h-3.5 text-black hover:text-[#0446A1] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content - Text Overlay on Lower Left */}
      <div className={`relative z-10 container mx-auto px-4 md:px-8 flex ${textPosition === 'bottom' ? 'items-end pb-16 md:pb-24' : 'items-center pt-6 md:pt-12'} min-h-[500px] md:min-h-[600px]`}>
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight whitespace-pre-line">
            {title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white font-medium">
            {subtitle}
          </p>
          {buttonLabel && (
            <div className="mt-6">
              <button
                className="px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-semibold text-base md:text-lg hover:opacity-90 transition shadow-md"
                style={{ backgroundColor: '#0446A1', color: '#fcfcfc' }}
              >
                {buttonLabel}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Top Fade to White */}
      <div className="absolute top-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-b from-white/30 via-white/15 to-transparent pointer-events-none z-[15]" />

      {/* Solid White Strip at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] md:h-[70px] bg-[#ffffff] pointer-events-none" />
      
      {/* Gradient Above White Strip */}
      <div className="absolute bottom-[60px] md:bottom-[70px] left-0 right-0 h-[40px] md:h-[50px] bg-gradient-to-t from-[#ffffff] via-white/80 to-transparent pointer-events-none" />
    </section>
  );
}

