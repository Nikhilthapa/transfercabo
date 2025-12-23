"use client";

import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import LoadingOverlay from "./LoadingOverlay";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isEnglish = locale === "en";

  const handleLanguageChange = (newLocale: "en" | "es-MX") => {
    setIsLoading(true);
    setLocale(newLocale);
    if (typeof window !== "undefined") {
      // Remove hash from URL to prevent scrolling to anchor on reload
      const urlWithoutHash = window.location.href.split('#')[0];
      window.history.replaceState(null, '', urlWithoutHash);
      window.location.reload();
    }
    setOpen(false);
  };

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      <div className="relative inline-block text-left">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#0446A1] transition"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          {isEnglish ? (
            <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/lan/eng.png"
                alt={t("common.language.english")}
                width={24}
                height={24}
                className="object-cover w-full h-full"
                quality={85}
                sizes="24px"
              />
            </div>
          ) : (
            <div className="w-6 h-6 rounded overflow-hidden flex-shrink-0 border border-gray-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-full h-full"
              >
                <rect width="8" height="24" fill="#006847" />
                <rect x="8" width="8" height="24" fill="#FFFFFF" />
                <rect x="16" width="8" height="24" fill="#CE1126" />
                <circle cx="12" cy="12" r="3" fill="#006847" />
              </svg>
            </div>
          )}
          <span>
            {isEnglish
              ? t("common.language.english")
              : t("common.language.spanish")}
          </span>
        <svg
          className={`w-3.5 h-3.5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black/5 z-[2000]">
          <ul className="py-1 text-sm" role="listbox">
            <li>
              <button
                type="button"
                className={`flex w-full items-center gap-2 px-3 py-2 hover:bg-gray-100 ${
                  isEnglish ? "text-[#0446A1] font-semibold" : "text-gray-800"
                }`}
                onClick={() => {
                  handleLanguageChange("en");
                }}
              >
                <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/lan/eng.png"
                    alt={t("common.language.english")}
                    width={20}
                    height={20}
                    className="object-cover w-full h-full"
                    quality={85}
                    sizes="20px"
                  />
                </div>
                <span>{t("common.language.english")}</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`flex w-full items-center gap-2 px-3 py-2 hover:bg-gray-100 ${
                  !isEnglish ? "text-[#0446A1] font-semibold" : "text-gray-800"
                }`}
                onClick={() => {
                  handleLanguageChange("es-MX");
                }}
              >
                <div className="w-5 h-5 rounded overflow-hidden flex-shrink-0 border border-gray-200">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                  >
                    <rect width="8" height="24" fill="#006847" />
                    <rect x="8" width="8" height="24" fill="#FFFFFF" />
                    <rect x="16" width="8" height="24" fill="#CE1126" />
                    <circle cx="12" cy="12" r="3" fill="#006847" />
                  </svg>
                </div>
                <span>{t("common.language.spanish")}</span>
              </button>
            </li>
          </ul>
        </div>
      )}
      </div>
    </>
  );
}


