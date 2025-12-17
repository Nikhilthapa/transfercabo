import Image from "next/image";

export default function AboutMeetRodrigo() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-Montserrat font-bold text-black" style={{ marginBottom: '10px' }}>
              Meet Rodrigo - Your Trusted Guide & Licensed Driver in Los Cabos
            </h2>
            <div className="space-y-2 md:space-y-0 font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg leading-relaxed">
              <p>
              Rodrigo has been taking such great care of guests for many years as a Certified Tour Guide in different Tourist Attractions in Los Cabos Area.
              </p>
              <p>Now, as a Federal Licensed Driver is adding to his agenda, Airport Transfer in The South most part of the Baja California Peninsula.</p>
              <p>Grin Faces and Happy Memories is just a small portion of what people have to share and mention.</p>
              <p>Wait no Longer and Get Rodrigo to do your Round Trip Airport-Hotel-Airport Ride for you!</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full max-w-[704px] h-[386px] rounded-xl md:rounded-2xl overflow-hidden mx-auto">
            <Image
              src="/aboutus/page/about1.jpg"
              alt="Rodrigo with van"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

