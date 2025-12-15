import Image from "next/image";

export default function WhyTrustUs() {
  return (
    <section className="bg-stone-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-black mb-3 md:mb-4 px-4">Why Travelers Trust Cheap Transfers Cabo</h2>
          <p className="text-gray-700 font-montserrat font-medium text-base md:text-lg px-4">
            Experience safe, private, and reliable travel backed by licensed drivers and premium comfort.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          <div className="text-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center" style={{ backgroundColor: '#b0c4df' }}>
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image
                  src="/home/icons/private.png"
                  alt="Private Transportation"
                  fill
                  className="object-contain"
                  quality={85}
                  sizes="(max-width: 768px) 48px, 64px"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Private Transportation Only</h3>
            <p className="text-gray-700 text-sm md:text-base">
              We never offer shared or group transfers. Your ride is 100% private, direct, and tailored to your needs.
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center" style={{ backgroundColor: '#b0c4df' }}>
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image
                  src="/home/icons/professional.png"
                  alt="Professional Certified Drivers"
                  fill
                  className="object-contain"
                  quality={85}
                  sizes="(max-width: 768px) 48px, 64px"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Professional Certified Drivers</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Our drivers hold Federal Licenses and are certified by the Mexican Secretary of Tourism (NOM-08).
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center" style={{ backgroundColor: '#b0c4df' }}>
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image
                  src="/home/icons/vehicle.png"
                  alt="Well-Maintained Vehicles"
                  fill
                  className="object-contain"
                  quality={85}
                  sizes="(max-width: 768px) 48px, 64px"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Well-Maintained Vehicles</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Travel comfortably in clean, modern, air-conditioned vehicles that are regularly inspected for safety and performance.
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center" style={{ backgroundColor: '#b0c4df' }}>
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image
                  src="/home/icons/familyowned.png"
                  alt="Family-Owned & Trusted"
                  fill
                  className="object-contain"
                  quality={85}
                  sizes="(max-width: 768px) 48px, 64px"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Family-Owned & Trusted Since 2019</h3>
            <p className="text-gray-700 text-sm md:text-base">
              As a local family business, we treat every guest like part of our own family. Expect warm hospitality and exceptional service from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

