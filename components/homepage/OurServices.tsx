import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    <section style={{ paddingTop: '15px' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-black px-4" style={{ marginBottom: '10px' }}>Our Services</h2>
          <p className="font-montserrat font-medium text-gray-600 text-base md:text-lg px-4" style={{ marginBottom: '50px' }}>
            Private transfers, guided tours, and adventure experiences made for every kind of traveler.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Service Card 1 - Airport & Hotel Transfers */}
          <div className="rounded-xl md:rounded-2xl shadow-lg overflow-hidden flex flex-col h-full" style={{ backgroundColor: '#ffffff' }}>
            <div className="relative w-full h-48 md:h-[320px]">
              <Image
                src="/ourservice/group transport.jpg"
                alt="Airport & Hotel Transfers"
                fill
                className="object-cover"
                quality={85}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-5 md:p-8 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-black" style={{ marginBottom: '10px' }}>Airport & Hotel Transfers</h3>
              <p className="font-montserrat font-medium text-gray-600 leading-relaxed text-sm md:text-base" style={{ marginBottom: '50px' }}>
                Private, safe & on-time rides between Airport, Hotels, Resorts, Airbnb & Villas.
              </p>
              <Link href="/cabo/reservation#reservation-form" className="border-2 border-blue-600 text-blue-600 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition w-full block text-center text-sm md:text-base mt-auto">
                More Info
              </Link>
            </div>
          </div>

          {/* Service Card 2 - Group & Family Transfers */}
          <div className="rounded-xl md:rounded-2xl shadow-lg overflow-hidden flex flex-col h-full" style={{ backgroundColor: '#ffffff' }}>
            <div className="relative w-full h-48 md:h-[320px]">
              <Image
                src="/ourservice/group.jpg"
                alt="Group & Family Transfers"
                fill
                className="object-cover"
                quality={85}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-5 md:p-8 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-black" style={{ marginBottom: '10px' }}>Group & Family Transfers</h3>
              <p className="font-montserrat font-medium text-gray-600 leading-relaxed text-sm md:text-base" style={{ marginBottom: '50px' }}>
                Spacious, comfortable vans and SUVs ideal for groups, families, and large travel parties.
              </p>
              <Link href="/cabo/reservation#reservation-form" className="border-2 border-blue-600 text-blue-600 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition w-full block text-center text-sm md:text-base mt-auto">
                More Info
              </Link>
            </div>
          </div>

          {/* Service Card 3 - Adventure Activities */}
          <div className="rounded-xl md:rounded-2xl shadow-lg overflow-hidden sm:col-span-2 md:col-span-1 flex flex-col h-full" style={{ backgroundColor: '#ffffff' }}>
            <div className="relative w-full h-48 md:h-[320px]">
              <Image
                src="/ourservice/activity.jpg"
                alt="Adventure Activities"
                fill
                className="object-cover"
                quality={85}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-5 md:p-8 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-black" style={{ marginBottom: '10px' }}>Adventure Activities</h3>
              <p className="font-montserrat font-medium text-gray-600 leading-relaxed text-sm md:text-base" style={{ marginBottom: '50px' }}>
                Discover Cabo's desert beauty with action-packed ATV, Razor, and horseback riding adventures.
              </p>
              <Link href="/activity/reservation#reservation-form" className="border-2 border-blue-600 text-blue-600 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition w-full block text-center text-sm md:text-base mt-auto">
                More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

