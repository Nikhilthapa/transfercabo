import CustomHero from "@/components/CustomHero";
import AboutWelcome from "@/components/aboutpage/AboutWelcome";
import AboutMeetRodrigo from "@/components/aboutpage/AboutMeetRodrigo";
import AboutMissionVision from "@/components/aboutpage/AboutMissionVision";
import AboutCallToAction from "@/components/aboutpage/AboutCallToAction";
import Footer from "@/components/homepage/Footer";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <CustomHero
        backgroundImagePath="/aboutus/page/aboutusbackground.jpg"
        title="Experience Comfort And Care With Cheap Transfers Cabo"
        subtitle="Trusted Private Transfers & Unforgettable Cabo Experiences."
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

