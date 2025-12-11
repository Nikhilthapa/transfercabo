import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4">About Us</h2>
        <p className="text-gray-700 text-base md:text-lg px-4">
          A locally trusted team dedicated to stress-free airport rides and unforgettable Cabo adventures.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-5">
          <div className="relative h-40 sm:h-60 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
              src="/aboutus/image2.png"
              alt="Cabo Architecture"
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="relative h-40 sm:h-60 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
              src="/aboutus/image1.png"
              alt="Our Team"
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="relative h-40 sm:h-60 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
              src="/aboutus/image3.png"
              alt="Local Attractions"
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="relative h-40 sm:h-60 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
              src="/aboutus/image4.png"
              alt="Group Tours"
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-0 md:mt-12">
          <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
            Welcome to Cheap Transfers Cabo — your friendly, family-run transportation service in Los Cabos. Since 2019, we've been offering reliable, private airport transfers and personalized city tours throughout Southern Baja.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
            Our Story & Mission Cheap Transfers Cabo began when our family realized how many travelers arrive in Los Cabos hoping for a smooth, stress-free ride — and often finding only crowded shuttles, confusing pickup lines, or shared rides with strangers. We decided there had to be a better way: one where guests ride privately, with trust, comfort, and care.
          </p>
          <Link 
            href="/about"
            className="inline-block text-white px-8 md:px-10 py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:opacity-90 w-full sm:w-auto text-center"
            style={{ backgroundColor: '#0446A1' }}
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

