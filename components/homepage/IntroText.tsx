"use client";

import { useI18n } from "@/lib/i18n";

export default function IntroText() {
  const { t } = useI18n();
  
  return (
    <section className="container mx-auto px-4 md:px-8 text-center max-w-5xl pt-10">
      <h3 className=" text-2xl md:text-3xl lg:text-3xl font-montserrat font-semibold tracking-wide" style={{ marginBottom: '15px' }}>
        {t("introText.title")}
      </h3>
      <p className="font-montserrat font-medium text-gray-700 text-base md:text-lg leading-relaxed">
        {t("introText.description")}
      </p>
    </section>
  );
}

