import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/homepage/Navigation";
import Footer from "@/components/homepage/Footer";

const activities = [
  {
    slug: "la-paz",
    name: "La Paz",
    description: "Visit the beautiful capital city of Baja California Sur. Explore the malecón, local markets, and pristine beaches.",
    price: "$125.00 USD",
    duration: "10 Hours",
    minPeople: "Minimum 4 People",
    image: "/thingstodoincabo/laPaz.png"
  },
  {
    slug: "atvs",
    name: "ATV's",
    description: "Tackle on Trails of Migriño's Desert, Feel the Rush, Witness the Baja's Nature and the Most Beautiful Views (Cactus and Wildlife), and the Most Beautiful Views of The Pacific Ocean.",
    price: "$130.00 USD",
    duration: "2 Hours",
    minPeople: "Minimum 1 People",
    image: "/thingstodoincabo/Atv.png"
  },
  {
    slug: "art-walk",
    name: "Art Walk",
    description: "Walk around the historic district of San Jose del cabo while enjoying a wonderful atmosphere, full of art main garden and outstanding Art Walk.",
    price: "$85.00 USD",
    duration: "10 Hours",
    minPeople: "Minimum 4 People",
    image: "/thingstodoincabo/Artwalk.png"
  },
  {
    slug: "horseback-riding",
    name: "Horse Back Riding",
    description: "Enjoy a very relaxing Tour on a beach, Guided, Gentle Horses. Also We offer a 2 Hour Mexican Outback Horseback Riding Vacations; This is a complete adventure.",
    price: "$95.00 USD",
    duration: "2 Hours",
    minPeople: "Minimum 1 People",
    image: "/thingstodoincabo/laPaz.png"
  },
  {
    slug: "razors",
    name: "Razors",
    description: "Tackle on Trails of Migriño's Desert, Feel the Rush, Witness the Baja's Nature and the Most Beautiful Views (Cactus and Wildlife), and the Pacific Ocean.",
    price: "$295.00 USD",
    duration: "2 Hours",
    minPeople: "Minimum 1 People",
    image: "/thingstodoincabo/Atv.png"
  },
  {
    slug: "todos-santos",
    name: "Todos Santos",
    description: "Todos Santos, a charming Magical Town in Baja California Sur, blends artistic culture with natural beauty and rich history along the Pacific Coast.",
    price: "$125.00 USD",
    duration: "7 Hours",
    minPeople: "Minimum 4 People",
    image: "/thingstodoincabo/Artwalk.png"
  },
  {
    slug: "cerritos",
    name: "Cerritos",
    description: "Cerritos Beach, a world-class surf spot, is known for its consistent waves and laid-back atmosphere, perfect for all skill levels along the stunning coastline.",
    price: "$125.00 USD",
    duration: "7 Hours",
    minPeople: "Minimum 4 People",
    image: "/thingstodoincabo/laPaz.png"
  },
  {
    slug: "los-cabos",
    name: "Los Cabos",
    description: "Discover Vibrant Culture And Charming Los Cabos at the Famous San Jose del Cabo, This wonderful tour will provide the opportunity to explore Cabo San Lucas.",
    price: "$85.00 USD",
    duration: "10 Hours",
    minPeople: "Minimum 4 People",
    image: "/thingstodoincabo/Atv.png"
  },
  {
    slug: "hidden-towns",
    name: "Hidden Towns",
    description: "This tour is a complete adventure, offering history, culture, ecology, charm, mountain, and many answer, it's one the best ways to spend a day in Cabo.",
    price: "$95.00 USD",
    duration: "7 Hours",
    minPeople: "Minimum 4 People",
    image: "/thingstodoincabo/Artwalk.png"
  }
];

export default function ActivityPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Cabo's Best<br />
                Adventure Activities
              </h1>
              <p className="text-xl text-gray-700">
                Thrilling ATV Rides, Razor Adventures, Horseback Tours, And Scenic Experiences Crafted For Every Traveler.
              </p>
              <Link 
                href="#activities"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Explore All Activities →
              </Link>
            </div>

            {/* Right Image Collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image src="/thingstodoincabo/Artwalk.png" alt="Art Walk" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image src="/thingstodoincabo/laPaz.png" alt="La Paz" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image src="/thingstodoincabo/Atv.png" alt="ATV Adventure" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image src="/thingstodoincabo/headers/1.png" alt="Adventure" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            YOUR ADVENTURE IN CABO STARTS HERE
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover the most unforgettable adventures of Los Cabos with <span className="font-semibold">Cheap Transfers Cabo</span>, where every activity is crafted to help you explore Baja's breathtaking landscapes—desert dunes, crystal-blue beaches, dramatic cliffs, and vibrant local culture. From thrilling ATV and Razor rides to peaceful horseback journeys and scenic day tours, we bring you closer to the heart of Cabo with comfort, safety, and a touch of authentic local hospitality.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section id="activities" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Explore Our Cabo Adventures
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Exciting tours designed to make your Cabo trip unforgettable.
          </p>

          {/* Activity Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div 
                key={activity.slug} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Activity Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Activity Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {activity.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {activity.description}
                  </p>

                  {/* Activity Details */}
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg text-gray-900">{activity.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span>{activity.minPeople}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link 
                      href={`/activity/${activity.slug}`}
                      className="flex-1 text-center border-2 border-blue-600 text-blue-600 px-4 py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition font-medium"
                    >
                      Info
                    </Link>
                    <button 
                      className="flex-1 text-white px-4 py-2.5 rounded-full transition font-medium hover:opacity-90"
                      style={{ backgroundColor: '#0446A1' }}
                    >
                      Book Activities
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

