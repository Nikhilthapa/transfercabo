import Hero from "@/components/homepage/Hero";
import IntroText from "@/components/homepage/IntroText";
import OurServices from "@/components/homepage/OurServices";
import WhyTrustUs from "@/components/homepage/WhyTrustUs";
import AboutUs from "@/components/homepage/AboutUs";
import Activities from "@/components/allactivitycomponents/Activities";
import Testimonials from "@/components/homepage/Testimonials";
import Contact from "@/components/homepage/Contact";
import Footer from "@/components/homepage/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <IntroText />
      <OurServices />
      <WhyTrustUs />
      <AboutUs />
      <Activities />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

