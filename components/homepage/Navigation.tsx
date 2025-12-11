'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { activities } from "@/app/activity/page";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activitiesDropdownOpen, setActivitiesDropdownOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);

  return (
    <nav className="relative z-[9999] overflow-visible">
      <div className="container mx-auto px-4 md:px-8 py-4 overflow-visible">
        <div className="flex justify-between items-center relative">
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
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
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
  );
}

