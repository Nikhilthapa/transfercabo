"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function AboutUs() {
  const { t } = useI18n();
  return (
    <section className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-black" style={{ marginBottom: '10px' }}>{t("aboutUs.title")}</h2>
        <p className="font-montserrat font-medium text-gray-700 text-base md:text-lg px-4">
          {t("aboutUs.subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {/* Top-left: image2.png */}
          <div className="relative h-40 sm:h-60 md:h-[340px] rounded-2xl md:rounded-3xl overflow-hidden w-[102%] mt-[15px] md:mt-[30px]">
            <Image
              src="/aboutus/image2.png"
              alt={t("aboutUs.image1.alt")}
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          {/* Top-right: image1.png */}
          <div className="relative h-40 sm:h-60 md:h-[340px] rounded-2xl md:rounded-3xl overflow-hidden mt-[15px] md:mt-[30px]">
            <Image
              src="/aboutus/image1.png"
              alt={t("aboutUs.image2.alt")}
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          {/* Bottom-left: image3.png */}
          <div className="relative h-40 sm:h-60 md:h-[340px] rounded-2xl md:rounded-3xl overflow-hidden w-[82%]">
            <Image
              src="/aboutus/image3.png"
              alt={t("aboutUs.image3.alt")}
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          {/* Bottom-right: image4.png */}
          <div className="relative h-40 sm:h-60 md:h-[340px] rounded-2xl md:rounded-3xl overflow-hidden w-[120%] -ml-[20%]">
            <Image
              src="/aboutus/image4.png"
              alt={t("aboutUs.image4.alt")}
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-0 md:mt-44 lg:mt-48">
          <p className="text-base md:text-lg font-montserrat font-medium text-gray-700 leading-relaxed" style={{ marginBottom: '10px' }}>
            {t("aboutUs.paragraph1")}
          </p>
          <p className="text-base md:text-lg font-montserrat font-medium text-gray-700 leading-relaxed" style={{ marginBottom: '50px' }}>
            {t("aboutUs.paragraph2")}
          </p>
          <Link 
            href="/about"
            className="inline-block text-white px-8 md:px-10 py-3 rounded-lg font-montserrat font-semibold text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:opacity-90 w-full sm:w-auto text-center"
            style={{ backgroundColor: '#0446A1' }}
          >
            {t("aboutUs.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}

