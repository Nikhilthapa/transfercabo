export default function AboutMissionVision() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-Montserrat font-bold text-black" style={{ marginBottom: '10px' }}>
            Our Mission & Vision
          </h2>
          <p className="font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg max-w-3xl mx-auto leading-relaxed" style={{ marginBottom: '70px' }}>
            Guided by passion, driven by service, and dedicated to delivering memorable Cabo experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Our Mission */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h3 className="text-2xl md:text-3xl font-Montserrat font-bold text-black" style={{ marginBottom: '10px' }}>
              Our Mission
            </h3>
            <p className="font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg leading-relaxed">
              Our mission is to provide trusted, professional, and heartfelt transportation and tour services to every guest who visits Los Cabos. We are committed to ensuring safety, comfort, and a welcoming experience that makes travelers feel at home from the moment they arrive. Through personalized attention, reliable service, and genuine care, we aim to be the first choice for airport transfers, hotel rides, and custom tours throughout Southern Baja.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h3 className="text-2xl md:text-3xl font-Montserrat font-bold text-black" style={{ marginBottom: '10px' }}>
              Our Vision
            </h3>
            <p className="font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg leading-relaxed">
              Our vision is to be the most reliable and guest-loved transportation service in Los Cabos, known for excellence, personal touch, and unforgettable experiences. We strive to expand our offerings while maintaining the family values and attention to detail that set us apart. We envision a future where every traveler to Los Cabos knows they can count on Cheap Transfers Cabo for a journey that's not just a ride, but a memorable part of their Cabo adventure—ensuring happy memories and a desire to return.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

