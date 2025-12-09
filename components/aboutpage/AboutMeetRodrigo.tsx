import Image from "next/image";

export default function AboutMeetRodrigo() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 md:mb-8">
              Meet Rodrigo - Your Trusted Guide & Licensed Driver in Los Cabos
            </h2>
            <div className="space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Rodrigo is a certified tour guide and federal licensed driver with years of experience serving visitors to Los Cabos. He combines professional expertise with genuine hospitality, ensuring every ride is safe, comfortable, and tailored to your needs.
              </p>
              <p>
                Whether you need a reliable airport transfer, a comfortable hotel ride, or a personalized tour of Los Cabos, Rodrigo is committed to making your journey seamless and enjoyable. His deep knowledge of the area, combined with his friendly approach, makes him the perfect companion for your Cabo adventure.
              </p>
              <p>
                With a focus on customer satisfaction and safety, Rodrigo ensures that every passenger arrives at their destination feeling relaxed and ready to enjoy all that Los Cabos has to offer. Trust Rodrigo for your transportation needs and experience the difference that personalized service makes.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-64 md:h-96 lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden">
            <Image
              src="/aboutus/page/aboutus1.png"
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

