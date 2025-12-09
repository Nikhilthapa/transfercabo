export default function WhyTrustUs() {
  return (
    <section className="bg-stone-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4 px-4">Why Travelers Trust Cheap Transfers Cabo</h2>
          <p className="text-gray-700 text-base md:text-lg px-4">
            Experience safe, private, and reliable travel backed by licensed drivers and premium comfort.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center">
            <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-5xl">🚗</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Private Transportation Only</h3>
            <p className="text-gray-700">
              We never offer shared or group transfers. Your ride is 100% private, direct, and tailored to your needs.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-5xl">👨‍✈️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Professional Certified Drivers</h3>
            <p className="text-gray-700">
              Our drivers hold Federal Licenses and are certified by the Mexican Secretary of Tourism (NOM-08).
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-5xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Well-Maintained Vehicles</h3>
            <p className="text-gray-700">
              Travel comfortably in clean, modern, air-conditioned vehicles that are regularly inspected for safety and performance.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-5xl">❤️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Family-Owned & Trusted Since 2019</h3>
            <p className="text-gray-700">
              As a local family business, we treat every guest like part of our own family. Expect warm hospitality and exceptional service from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

