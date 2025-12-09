import Image from "next/image";
import Link from "next/link";

export default function Activities() {
  const activities = [
    {
      name: "La Paz",
      slug:'la-paz',
      description: "Visit the beautiful capital city of Baja California Sur. Explore the malecón, local markets, and pristine beaches.",
      price: "$125.00 USD",
      duration: "10 Hours",
      minPeople: "Minimum 4 People",
      image: "/thingstodoincabo/laPaz.png"
    },
    {
      name: "ATV's",
      slug:'atvs',
      description: "Tackle on Trails of Migriño's Desert, Feel the Rush, Witness the Baja's Nature and the Most Beautiful Views (Cactus and Wildlife), and the Most Beautiful Views of The Pacific Ocean.",
      price: "$130.00 USD",
      duration: "2 Hours",
      minPeople: "Minimum 1 People",
      image: "/thingstodoincabo/Atv.png"
    },
    {
      name: "Art Walk",
      slug:'art-walk',
      description: "Walk around the historic district of San Jose del cabo while enjoying a wonderful atmosphere, full of art main garden and outstanding, Art Walk.",
      price: "$85.00 USD",
      duration: "10 Hours",
      minPeople: "Minimum 4 People",
      image: "/thingstodoincabo/Artwalk.png"
    },
    {
      name: "Horseback Riding",
      slug:'horseback-riding',
      description: "Experience the beauty of Cabo's beaches and desert landscapes on horseback. Perfect for all skill levels with professional guides.",
      price: "$95.00 USD",
      duration: "3 Hours",
      minPeople: "Minimum 2 People",
      image: "/thingstodoincabo/laPaz.png"
    },
    {
      name: "Snorkeling Tour",
      slug:'hidden-towns',
      description: "Discover the underwater world of the Sea of Cortez. See colorful fish, sea lions, and coral reefs in crystal clear waters.",
      price: "$110.00 USD",
      duration: "4 Hours",
      minPeople: "Minimum 2 People",
      image: "/thingstodoincabo/Atv.png"
    },
    {
      name: "Desert Safari",
      slug:'razors',
      description: "Explore Cabo's stunning desert terrain in a 4x4 vehicle. Visit hidden beaches, canyons, and traditional Mexican villages.",
      price: "$145.00 USD",
      duration: "6 Hours",
      minPeople: "Minimum 3 People",
      image: "/thingstodoincabo/Artwalk.png"
    }
  ];

  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-8 mb-12">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-black mb-4">The Best Things to do in Cabo</h2>
          <p className="text-gray-700 text-lg">
            Enjoy ATV, Razor, horseback, and guided desert activities crafted for unforgettable memories.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="carousel-container">
          <div className="carousel-track">
            {/* First set of activities */}
            {activities.map((activity, index) => (
              <div key={`first-${index}`} className="carousel-card">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 h-full">
                  <div className="relative w-full h-64">
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-black">{activity.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {activity.description}
                    </p>
                    <div className="flex gap-3 text-sm text-gray-600 mb-6 flex-wrap">
                      <span className="font-semibold text-black">{activity.price}</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {activity.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        {activity.minPeople}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Link 
                        href={`/activity/${activity.slug}`}
                        className="border-2 border-blue-600 text-blue-600 px-6 py-2.5 rounded-full flex-1 hover:bg-blue-600 hover:text-white transition font-medium text-center"
                      >
                        Info
                      </Link>
                      <Link 
                        href="/activity/reservation"
                        className="text-white px-6 py-2.5 rounded-full flex-1 transition font-medium hover:opacity-90 text-center"
                        style={{ backgroundColor: '#0446A1' }}
                      >
                        Book Activities
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {activities.map((activity, index) => (
              <div key={`second-${index}`} className="carousel-card">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 h-full">
                  <div className="relative w-full h-64">
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-black">{activity.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {activity.description}
                    </p>
                    <div className="flex gap-3 text-sm text-gray-600 mb-6 flex-wrap">
                      <span className="font-semibold text-black">{activity.price}</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {activity.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        {activity.minPeople}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Link 
                        href={`/activity/${activity.slug}`}
                        className="border-2 border-blue-600 text-blue-600 px-6 py-2.5 rounded-full flex-1 hover:bg-blue-600 hover:text-white transition font-medium text-center"
                      >
                        Info
                      </Link>
                      <Link 
                        href="/activity/reservation"
                        className="text-white px-6 py-2.5 rounded-full flex-1 transition font-medium hover:opacity-90 text-center"
                        style={{ backgroundColor: '#0446A1' }}
                      >
                        Book Activities
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

