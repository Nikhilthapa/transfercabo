'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AboutNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-10">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col uppercase leading-tight">
              <h1 className="text-2xl font-bold text-white">CHEAP</h1>
              <p className="text-[10px] font-medium text-white tracking-wider">TRANSFERSCABO</p>
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
              className="text-[#87CEEB] font-semibold uppercase text-sm hover:text-white transition"
            >
              HOME
            </Link>
            
            {/* Activities with Dropdown */}
            <div className="flex items-center gap-1 cursor-pointer group">
              <Link 
                href="/activity" 
                className="text-[#87CEEB] font-semibold uppercase text-sm hover:text-white transition"
              >
                ACTIVITIES
              </Link>
              <svg className="w-3.5 h-3.5 text-[#87CEEB] group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <Link 
              href="/contact#get-in-touch" 
              className="text-[#87CEEB] font-semibold uppercase text-sm hover:text-white transition"
            >
              CONTACT
            </Link>
            
            <Link 
              href="/about" 
              className="text-[#87CEEB] font-semibold uppercase text-sm hover:text-white transition"
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
              <span className="text-[#87CEEB] text-sm font-semibold group-hover:text-white transition">English</span>
              <svg className="w-3.5 h-3.5 text-[#87CEEB] group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#87CEEB] transition"
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
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white font-semibold uppercase text-sm hover:text-[#87CEEB] transition px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/about" 
                className="text-white font-semibold uppercase text-sm hover:text-[#87CEEB] transition px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                href="/activity" 
                className="text-white font-semibold uppercase text-sm hover:text-[#87CEEB] transition px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ACTIVITIES
              </Link>
              <Link 
                href="/contact#get-in-touch" 
                className="text-white font-semibold uppercase text-sm hover:text-[#87CEEB] transition px-2 py-2"
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
                <span className="text-white text-sm font-semibold uppercase hover:text-[#87CEEB] transition">English</span>
                <svg className="w-3.5 h-3.5 text-white hover:text-[#87CEEB] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

