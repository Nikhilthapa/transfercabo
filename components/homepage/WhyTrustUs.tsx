import Image from "next/image";

export default function WhyTrustUs() {
  return (
    <section className="bg-stone-50" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-bold text-black px-4" style={{ marginBottom: '10px' }}>Why Travelers Trust Cheap Transfers Cabo</h2>
          <p className="text-gray-700 font-montserrat font-medium text-sm md:text-base lg:text-lg px-3 max-w-3xl mx-auto" style={{ marginBottom: '50px' }}>
            Experience safe, private, and reliable travel backed by licensed drivers and premium comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          <div className="text-center px-2">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: '#b0c4df', marginBottom: '25px' }}>
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/home/icons/private.png"
                  alt="Private Transportation"
                  fill
                  className="object-contain"
                  quality={85}
                  sizes="(max-width: 768px) 32px, 40px"
                />
              </div>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-montserrat font-semibold mb-2 md:mb-3" style={{ marginBottom: '10px' }}>Private Transportation Only</h3>
            <p className="font-montserrat font-medium text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed">
              We never offer shared or group transfers. Your ride is 100% private, direct, and tailored to your needs.
            </p>
          </div>

          <div className="text-center px-2">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: '#b0c4df', marginBottom: '25px' }}>
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/home/icons/professional.png"
                  alt="Professional Certified Drivers"
                  fill
                  className="object-contain"
                  quality={85}
                  sizes="(max-width: 768px) 32px, 40px"
                />
              </div>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-montserrat font-semibold mb-2 md:mb-3" style={{ marginBottom: '10px' }}>Professional Certified Drivers</h3>
            <p className="font-montserrat font-medium text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed">
              Our drivers hold Federal Licenses and are certified by the Mexican Secretary of Tourism (NOM-08).
            </p>
          </div>

          <div className="text-center px-2">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: '#b0c4df', marginBottom: '25px' }}>
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/home/icons/vehicle.png"
                  alt="Well-Maintained Vehicles"
                  fill
                  className="object-contain"
                  quality={85}
                  sizes="(max-width: 768px) 32px, 40px"
                />
              </div>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-montserrat font-semibold mb-2 md:mb-3" style={{ marginBottom: '10px' }}>Well-Maintained Vehicles</h3>
            <p className="font-montserrat font-medium text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed">
              Travel comfortably in clean, modern, air-conditioned vehicles that are regularly inspected for safety and performance.
            </p>
          </div>

          <div className="text-center px-2">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: '#b0c4df', marginBottom: '25px' }}>
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/home/icons/familyowned.png"
                  alt="Family-Owned & Trusted"
                  fill
                  className="object-contain"
                  quality={85}
                  sizes="(max-width: 768px) 32px, 40px"
                />
              </div>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-montserrat font-semibold mb-2 md:mb-3" style={{ marginBottom: '10px' }}>Family-Owned & Trusted Since 2019</h3>
            <p className="font-montserrat font-medium text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed">
              As a local family business, we treat every guest like part of our own family. Expect warm hospitality and exceptional service from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

