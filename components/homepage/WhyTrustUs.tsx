"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function WhyTrustUs() {
  const { t } = useI18n();
  return (
    <section className="bg-stone-50" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-bold text-black px-4" style={{ marginBottom: '10px' }}>{t("whyTrustUs.title")}</h2>
          <p className="text-gray-700 font-montserrat font-medium text-sm md:text-base lg:text-lg px-3 max-w-3xl mx-auto" style={{ marginBottom: '50px' }}>
            {t("whyTrustUs.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          <div className="text-center px-2 flex flex-col">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#b0c4df', marginBottom: '25px' }}>
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/home/icons/private.png"
                  alt={t("whyTrustUs.feature1.alt")}
                  fill
                  className="object-contain"
                  quality={85}
                  sizes="(max-width: 768px) 32px, 40px"
                />
              </div>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-montserrat font-semibold mb-2 md:mb-3 min-h-0" style={{ marginBottom: '10px' }}>{t("whyTrustUs.feature1.title")}</h3>
            <p className="font-montserrat font-medium text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed line-clamp-4 overflow-hidden">
              {t("whyTrustUs.feature1.description")}
            </p>
          </div>

          <div className="text-center px-2 flex flex-col">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#b0c4df', marginBottom: '25px' }}>
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/home/icons/professional.png"
                  alt={t("whyTrustUs.feature2.alt")}
                  fill
                  className="object-contain"
                  quality={85}
                  sizes="(max-width: 768px) 32px, 40px"
                />
              </div>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-montserrat font-semibold mb-2 md:mb-3 min-h-0" style={{ marginBottom: '10px' }}>{t("whyTrustUs.feature2.title")}</h3>
            <p className="font-montserrat font-medium text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed line-clamp-4 overflow-hidden">
              {t("whyTrustUs.feature2.description")}
            </p>
          </div>

          <div className="text-center px-2 flex flex-col">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#b0c4df', marginBottom: '25px' }}>
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/home/icons/vehicle.png"
                  alt={t("whyTrustUs.feature3.alt")}
                  fill
                  className="object-contain"
                  quality={85}
                  sizes="(max-width: 768px) 32px, 40px"
                />
              </div>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-montserrat font-semibold mb-2 md:mb-3 min-h-0" style={{ marginBottom: '10px' }}>{t("whyTrustUs.feature3.title")}</h3>
            <p className="font-montserrat font-medium text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed line-clamp-4 overflow-hidden">
              {t("whyTrustUs.feature3.description")}
            </p>
          </div>

          <div className="text-center px-2 flex flex-col">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#b0c4df', marginBottom: '25px' }}>
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/home/icons/familyowned.png"
                  alt={t("whyTrustUs.feature4.alt")}
                  fill
                  className="object-contain"
                  quality={85}
                  sizes="(max-width: 768px) 32px, 40px"
                />
              </div>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-montserrat font-semibold mb-2 md:mb-3 min-h-0" style={{ marginBottom: '10px' }}>{t("whyTrustUs.feature4.title")}</h3>
            <p className="font-montserrat font-medium text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed line-clamp-4 overflow-hidden">
              {t("whyTrustUs.feature4.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

