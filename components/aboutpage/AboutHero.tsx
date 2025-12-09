import AboutNavigation from "@/components/aboutpage/AboutNavigation";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/aboutus/page/aboutusbackground.jpg"
          alt="Cabo Architecture Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation */}
      <AboutNavigation />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 flex items-center h-[calc(100vh-100px)] min-h-[500px]">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            Experience Comfort And Care
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            With Cheap Transfers Cabo
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-medium">
            Trusted Private Transfers & Unforgettable Cabo Experiences.
          </p>
        </div>
      </div>

      {/* Blue Horizontal Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0446A1]" />
    </section>
  );
}

