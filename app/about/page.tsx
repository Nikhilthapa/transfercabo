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
      />
      <AboutWelcome />
      <AboutMeetRodrigo />
      <AboutMissionVision />
      <AboutCallToAction />
      <Footer />
    </div>
  );
}

