"use client";

import { useEffect } from "react";
import Image from "next/image";
import CustomHero from "@/components/CustomHero";
import Contact from "@/components/homepage/Contact";
import Footer from "@/components/homepage/Footer";
import { useI18n } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useI18n();
  useEffect(() => {
    // Handle scroll to get-in-touch section when page loads with hash
    if (window.location.hash === '#get-in-touch') {
      setTimeout(() => {
        const element = document.getElementById('get-in-touch');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <CustomHero
        backgroundImagePath="/contactus.jpeg"
        title={t("contact.hero.title")}
        subtitle={t("contact.hero.subtitle")}
        textPosition="bottom"
        hideTopBar={true}
        titleColor="#fcfcfc"
        subtitleColor="#f2f1f0"
      />
      
      {/* Welcome Section */}
      <section className="bg-white pt-4 sm:pt-6 md:pt-8 lg:pt-10">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-Montserrat font-semibold text-black px-4 mb-[12px] sm:mb-[15px]">
            {t("contact.welcome.title")}
          </h2>
          <p className="font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg max-w-4xl mx-auto px-4 mb-[40px] sm:mb-[50px] md:mb-[60px] lg:mb-[70px]">
            {t("contact.welcome.text")}
          </p>
        </div>
      </section>

      {/* Talk to Our Team Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-Montserrat font-bold text-black lg:mb-4 px-4">
              {t("contact.team.title")}
            </h2>
            <p className="font-Montserrat font-medium text-[#6f6f6f] text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-4">
              {t("contact.team.text")}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {/* Phone/WhatsApp Card */}
            <div className="border border-gray-200 rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] p-6 md:p-8 text-center" style={{ backgroundColor: '#FAFAF9' }}>
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="bg-blue-100 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 relative">
                    <Image
                      src="/contact/phone.png"
                      alt="Phone"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-black text-base md:text-lg mb-1 md:mb-2">
                {t("contact.cards.phoneTitle")}
              </h3>
              <p className="text-black text-sm md:text-base">+52 (624) 182 0525</p>
            </div>

            {/* Email Card */}
            <div className="border border-gray-200 rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] p-6 md:p-8 text-center" style={{ backgroundColor: '#FAFAF9' }}>
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="bg-blue-100 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 relative">
                    <Image
                      src="/contact/message.png"
                      alt="Email"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-black text-base md:text-lg mb-1 md:mb-2">
                {t("contact.cards.emailTitle")}
              </h3>
              <p className="text-black text-sm md:text-base break-all">bookingcheaptransferscabo <br /> @gmail.com</p>
            </div>

            {/* Location Card */}
            <div className="border border-gray-200 rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] p-6 md:p-8 text-center sm:col-span-2 md:col-span-1" style={{ backgroundColor: '#FAFAF9' }}>
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="bg-blue-100 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 relative">
                    <Image
                      src="/contact/location.png"
                      alt="Location"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-black text-base md:text-lg mb-1 md:mb-2">
                {t("contact.cards.locationTitle")}
              </h3>
              <p className="text-black text-sm md:text-base">
                {t("contact.cards.locationText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <div className="pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[100px] pb-[50px] sm:pb-[60px] md:pb-[80px] lg:pb-[100px]">
        <Contact />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

