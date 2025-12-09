import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Private transfers, guided tours, and adventure experiences made for every kind of traveler.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Service Card 1 - Airport & Hotel Transfers */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative w-full h-[320px]">
              <Image
                src="/ourservice/group transport.png"
                alt="Airport & Hotel Transfers"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">Airport & Hotel Transfers</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Private, safe & on-time rides between Airport, Hotels, Resorts, Airbnb & Villas.
              </p>
              <Link href="/cabo/reservation" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition w-full block text-center">
                More Info
              </Link>
            </div>
          </div>

          {/* Service Card 2 - Group & Family Transfers */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative w-full h-[320px]">
              <Image
                src="/ourservice/group.png"
                alt="Group & Family Transfers"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">Group & Family Transfers</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Spacious, comfortable vans and SUVs ideal for groups, families, and large travel parties.
              </p>
              <Link href="/cabo/reservation" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition w-full block text-center">
                More Info
              </Link>
            </div>
          </div>

          {/* Service Card 3 - Adventure Activities */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative w-full h-[320px]">
              <Image
                src="/ourservice/activity.png"
                alt="Adventure Activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">Adventure Activities</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover Cabo's desert beauty with action-packed ATV, Razor, and horseback riding adventures.
              </p>
              <Link href="/activity/reservation" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition w-full block text-center">
                More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

