import Navigation from "./Navigation";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[120vh] overflow-visible">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* White gradient shadow at the top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none" />
        {/* White gradient shadow at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
        {/* Text overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Navigation */}
      <div className="relative z-[9999]">
        <Navigation />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 flex items-center h-[calc(100vh-100px)] min-h-[400px] md:min-h-[500px]">
        <div className="max-w-3xl">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-2 md:mb-3 lg:mb-4">
            Cheap Transfers Cabo
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 lg:mb-8 whitespace-nowrap">
            Your Journey Starts In Comfort
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-1 md:mb-2 lg:mb-2">
            Reliable • Comfortable • Affordable
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 md:mb-6 lg:mb-10">
            Start Your Cabo Getaway With Stress-Free Private Transportation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6">
            <Link href="/cabo/reservation" className="bg-blue-600 text-white px-6 md:px-8 lg:px-10 py-2.5 md:py-3 lg:py-4 rounded-md font-semibold text-sm md:text-base lg:text-lg hover:bg-blue-700 transition shadow-lg text-center">
              Book Your Ride Today
            </Link>
            <Link href="/activity" className="border-2 border-white text-white px-6 md:px-8 lg:px-10 py-2.5 md:py-3 lg:py-4 rounded-md font-semibold text-sm md:text-base lg:text-lg hover:bg-white/10 transition text-center">
              Explore Activities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

