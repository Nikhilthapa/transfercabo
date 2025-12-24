"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="text-white pt-10 md:pt-16 pb-0" style={{ backgroundColor: "#0446A1" }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/logo.png"
                  alt={t("footer.logoAlt")}
                  fill
                  className="object-contain"
                  quality={90}
                  sizes="(max-width: 768px) 40px, 48px"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <h4 className="text-xl md:text-2xl font-bold uppercase">CHEAP</h4>
                <p className="text-[10px] md:text-xs uppercase tracking-wide">TRANSFERSCABO</p>
              </div>
            </div>
            <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="https://www.cheaptransferscabo.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition">
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
              <a href="https://m.facebook.com/rodrigo.rodriguezsauceda/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <p className="text-white text-xs mt-4 md:mt-5 whitespace-nowrap font-semibold">
              {t("footer.designedBy")}{" "}
              <a 
                href="https://sparixglobal.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-white/80 transition"
              >
                {t("footer.designedByCompany")}
              </a>
            </p>
          </div>

          <div>
            <h5 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
              {t("footer.company.title")}
            </h5>
            <ul className="space-y-2 md:space-y-3 text-white/90 text-xs md:text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  {t("footer.company.home")}
                </Link>
              </li>
              <li>
                <Link href="/activity" className="hover:text-white transition">
                  {t("footer.company.exploreCabo")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  {t("footer.company.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/contact#get-in-touch" className="hover:text-white transition">
                  {t("footer.company.contactUs")}
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-white transition">
                  {t("footer.company.privacyPolicy")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
              {t("footer.activity.title")}
            </h5>
            <ul className="space-y-2 md:space-y-3 text-white/90 text-xs md:text-sm">
              <li>
                <Link href="/activity/la-paz" className="hover:text-white transition">
                  {t("footer.activity.laPaz")}
                </Link>
              </li>
              <li>
                <Link href="/activity/todos-santos" className="hover:text-white transition">
                  {t("footer.activity.todosSantos")}
                </Link>
              </li>
              <li>
                <Link href="/activity/cerritos" className="hover:text-white transition">
                  {t("footer.activity.cerritos")}
                </Link>
              </li>
              <li>
                <Link href="/activity/los-cabos" className="hover:text-white transition">
                  {t("footer.activity.losCabos")}
                </Link>
              </li>
              <li>
                <Link href="/activity" className="hover:text-white transition">
                  {t("footer.activity.more")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h5 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
              {t("footer.contact.title")}
            </h5>
            <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
              <div className="flex items-start gap-2 md:gap-3">
                <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <div>
                  <p className="font-bold text-white mb-1">
                    {t("footer.contact.phone")}
                  </p>
                  <p className="text-white/90">+52 ( 624 ) 182 0525</p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <div>
                  <p className="font-bold text-white mb-1">
                    {t("footer.contact.email")}
                  </p>
                  <p className="text-white/90 break-all">bookingcheaptransferscabo <br />@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="font-bold text-white mb-1">
                    {t("footer.contact.location")}
                  </p>
                  <p className="text-white/90">{t("footer.contact.city")}</p>
                  <p className="text-white/90">{t("footer.contact.region")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 flex items-center py-4 md:py-6">
          <p className="text-left text-gray-300 text-xs md:text-sm">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

