"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { contactConfig } from "@/lib/contact";

export default function StickyContactButtons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(contactConfig.whatsapp.message);
    const url = `https://wa.me/${contactConfig.whatsapp.number.replace(/[^0-9]/g, "")}?text=${message}`;
    window.open(url, "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactConfig.phone.number}`;
  };

  const buttonsContent = (
    <div 
      className="sticky-contact-buttons"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9998,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        pointerEvents: 'none',
      }}
    >
      {/* Phone Button - Above WhatsApp */}
      <div
        style={{
          animation: 'float 3s ease-in-out infinite',
          animationDelay: '0s',
          pointerEvents: 'auto',
        }}
        className="transition-transform duration-300 hover:scale-110"
      >
        <button
          onClick={handlePhoneClick}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0446A1] hover:bg-[#033a8a] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95"
          aria-label="Call us"
          style={{
            boxShadow: '0 8px 20px rgba(4, 70, 161, 0.4)',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {/* WhatsApp Button - Below Phone */}
      <div
        style={{
          animation: 'float 3s ease-in-out infinite',
          animationDelay: '0.5s',
          pointerEvents: 'auto',
        }}
        className="transition-transform duration-300 hover:scale-110"
      >
        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95"
          aria-label="Contact us on WhatsApp"
          style={{
            boxShadow: '0 8px 20px rgba(37, 211, 102, 0.4)',
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  if (!mounted) return null;

  // Use portal to render directly to body to escape html transform context
  // This ensures buttons stay truly fixed on desktop
  if (typeof window !== "undefined") {
    return createPortal(buttonsContent, document.body);
  }

  return null;
}
