"use client";

import CustomHero from "@/components/CustomHero";
import Footer from "@/components/homepage/Footer";
import { useI18n } from "@/lib/i18n";

export default function PolicyPage() {
  const { t } = useI18n();

  return (
    <div className="bg-white min-h-screen">
      <CustomHero
        backgroundImagePath="/privacy-policy.jpg"
        title={t("policy.hero.title")}
        subtitle={t("policy.hero.subtitle")}
        hideTopBar={true}
        titleColor="#fcfcfc"
        subtitleColor="#fafaf9"
      />
      
      {/* Main Content Area */}
      <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Privacy Policy Title */}
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-black text-center mb-8 md:mb-10">
            {t("policy.title")}
          </h2>
          
          {/* Introductory Paragraph */}
          <p className="font-montserrat font-medium text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-left mb-8 md:mb-8">
            {t("policy.intro")}
          </p>
          
          {/* Privacy Policy Sections */}
          <div className="space-y-6 md:space-y-8">
            {/* Section 1: What information do we collect? */}
            <div>
              <h3 className="font-montserrat font-bold text-base md:text-lg mb-3 md:mb-4 text-left">
                {t("policy.section1.title")}
              </h3>
              <p className="font-montserrat font-medium text-base md:text-lg leading-relaxed max-w-3xl text-left">
                {t("policy.section1.text")}
              </p>
            </div>
            
            {/* Section 2: How do we collect information? */}
            <div>
              <h3 className="font-montserrat font-bold text-base md:text-lg mb-3 md:mb-4 text-left">
                {t("policy.section2.title")}
              </h3>
              <p className="font-montserrat font-medium text-base md:text-lg leading-relaxed max-w-3xl text-left">
                {t("policy.section2.text")}
              </p>
            </div>
            
            {/* Section 3: Why do we collect this information? */}
            <div>
              <h3 className="font-montserrat font-bold text-base md:text-lg mb-3 md:mb-4 text-left">
                {t("policy.section3.title")}
              </h3>
              <p className="font-montserrat font-medium text-base md:text-lg leading-relaxed max-w-3xl text-left">
                {t("policy.section3.text")}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

