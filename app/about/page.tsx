"use client";

import CustomHero from "@/components/CustomHero";
import AboutWelcome from "@/components/aboutpage/AboutWelcome";
import AboutMeetRodrigo from "@/components/aboutpage/AboutMeetRodrigo";
import AboutMissionVision from "@/components/aboutpage/AboutMissionVision";
import AboutCallToAction from "@/components/aboutpage/AboutCallToAction";
import Footer from "@/components/homepage/Footer";
import { useI18n } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="bg-white min-h-screen">
      <CustomHero
        backgroundImagePath="/aboutus/page/aboutusbackground.jpg"
        title={t("about.hero.title")}
        subtitle={t("about.hero.subtitle")}
        hideTopBar={true}
        titleColor="#fcfcfc"
        subtitleColor="#fafaf9"
      />
      <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-10">
        <AboutWelcome />
      </div>
      <div className="flex flex-col gap-[50px] sm:gap-[60px] md:gap-[80px] lg:gap-[100px] mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[70px]">
        <AboutMeetRodrigo />
        <AboutMissionVision />
        <AboutCallToAction />
        <Footer />
      </div>

    </div>
  );
}

