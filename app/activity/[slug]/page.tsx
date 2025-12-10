import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/homepage/Footer";
import CustomHero from "@/components/CustomHero";
import { notFound } from "next/navigation";
import activityData from "@/lib/data";

const activities = [
  {
    slug: "la-paz",
    name: "La Paz",
    description: "Visit the beautiful capital city of Baja California Sur. Explore the malecón, local markets, and pristine beaches.",
    fullDescription: "Experience the charm of La Paz, the capital city of Baja California Sur. This full-day tour takes you through the vibrant malecón, bustling local markets, and pristine beaches. Discover the rich culture, taste authentic local cuisine, and enjoy the stunning views of the Sea of Cortez. Perfect for those looking to experience authentic Mexican culture away from the tourist crowds.",
    price: "$125.00 USD",
    duration: "10 Hours",
    minPeople: "Minimum 4 People",
    image: "/thingstodoincabo/laPaz.png",
    highlights: [
      "Visit the famous malecón waterfront",
      "Explore local markets and shops",
      "Relax on pristine beaches",
      "Authentic Mexican lunch included",
      "Professional bilingual guide"
    ]
  },
  {
    slug: "atvs",
    name: "ATV's",
    description: "Tackle on Trails of Migriño's Desert, Feel the Rush, Witness the Baja's Nature and the Most Beautiful Views (Cactus and Wildlife), and the Most Beautiful Views of The Pacific Ocean.",
    fullDescription: "Get your adrenaline pumping on this exciting ATV adventure through Migriño's Desert. Navigate through challenging trails, witness stunning desert landscapes filled with unique cacti and wildlife, and culminate your journey with breathtaking views of the Pacific Ocean. This tour is perfect for adventure seekers looking to experience Baja's natural beauty from a thrilling perspective.",
    price: "$130.00 USD",
    duration: "2 Hours",
    minPeople: "Minimum 1 People",
    image: "/thingstodoincabo/Atv.png",
    highlights: [
      "Professional ATV instruction",
      "Migriño's Desert trails",
      "Pacific Ocean viewpoints",
      "Desert wildlife spotting",
      "Safety equipment included"
    ]
  },
  {
    slug: "art-walk",
    name: "Art Walk",
    description: "Walk around the historic district of San Jose del cabo while enjoying a wonderful atmosphere, full of art main garden and outstanding, Art Walk.",
    fullDescription: "Immerse yourself in the vibrant art scene of San Jose del Cabo's historic district. Stroll through charming streets filled with galleries, local artisans, and beautiful gardens. Experience the Thursday night Art Walk tradition where galleries open their doors, artists showcase their work, and the streets come alive with culture and creativity. Perfect for art lovers and culture enthusiasts.",
    price: "$85.00 USD",
    duration: "10 Hours",
    minPeople: "Minimum 4 People",
    image: "/thingstodoincabo/Artwalk.png",
    highlights: [
      "Historic district walking tour",
      "Multiple art galleries",
      "Meet local artists",
      "Beautiful colonial architecture",
      "Traditional Mexican refreshments"
    ]
  },
  {
    slug: "horseback-riding",
    name: "Horseback Riding",
    description: "Experience the beauty of Cabo's beaches and desert landscapes on horseback. Perfect for all skill levels with professional guides.",
    fullDescription: "Saddle up for an unforgettable horseback riding adventure along Cabo's stunning coastline and desert trails. Whether you're a beginner or experienced rider, our professional guides will ensure a safe and memorable experience. Ride through scenic beaches, desert paths, and enjoy panoramic ocean views. This tour offers the perfect blend of adventure and natural beauty.",
    price: "$95.00 USD",
    duration: "3 Hours",
    minPeople: "Minimum 2 People",
    image: "/thingstodoincabo/laPaz.png",
    highlights: [
      "Beach and desert riding",
      "Professional guides",
      "All skill levels welcome",
      "Well-trained horses",
      "Photo opportunities"
    ]
  },
  {
    slug: "snorkeling-tour",
    name: "Snorkeling Tour",
    description: "Discover the underwater world of the Sea of Cortez. See colorful fish, sea lions, and coral reefs in crystal clear waters.",
    fullDescription: "Dive into the crystal-clear waters of the Sea of Cortez, often called the 'Aquarium of the World' by Jacques Cousteau. This snorkeling adventure takes you to the best spots to see vibrant tropical fish, playful sea lions, and beautiful coral reefs. Perfect for families and water enthusiasts, this tour includes all equipment and expert guides to ensure a safe and unforgettable underwater experience.",
    price: "$110.00 USD",
    duration: "4 Hours",
    minPeople: "Minimum 2 People",
    image: "/thingstodoincabo/Atv.png",
    highlights: [
      "Sea of Cortez exploration",
      "Encounter with sea lions",
      "Colorful coral reefs",
      "All snorkeling equipment included",
      "Expert snorkel guides"
    ]
  },
  {
    slug: "desert-safari",
    name: "Desert Safari",
    description: "Explore Cabo's stunning desert terrain in a 4x4 vehicle. Visit hidden beaches, canyons, and traditional Mexican villages.",
    fullDescription: "Embark on an exciting 4x4 desert safari adventure through Baja's rugged terrain. Discover hidden beaches, explore dramatic canyons, and visit traditional Mexican villages where time seems to stand still. This off-road adventure offers a unique perspective of Cabo's diverse landscapes, from desert vistas to secluded coastal areas. Experience authentic local culture and breathtaking natural beauty on this unforgettable journey.",
    price: "$145.00 USD",
    duration: "6 Hours",
    minPeople: "Minimum 3 People",
    image: "/thingstodoincabo/Artwalk.png",
    highlights: [
      "4x4 off-road adventure",
      "Hidden beaches access",
      "Traditional villages visit",
      "Canyon exploration",
      "Authentic Mexican lunch"
    ]
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
];
const stugData:any={
  'la-paz':"La Paz",
  'todos-santos':"Todos Santos",
  'cerritos':"Cerritos Beach",
  'los-cabos':"Los Cabos",
  'art-walk':"Art Walk",
  'horseback-riding':"Horseback Riding",
  'hidden-towns':"Snorkeling Tour",
  'razors':"Desert Safari",
  'atvs':"ATV's",
  '40-ft':'40 ft sport fishing boat',
  'My-dream-33-footer':'My dream 33 footer boat'
}

export async function generateStaticParams() {
  return activities.map((activity) => ({
    slug: activity.slug,
  }));
}

export default async function ActivityDetailPage({ params }: { params: { slug: string } }) {
  let  { slug } = await  params;
  // console.log('this is slug',slug)
  slug=stugData[slug]
  // Check if it's La Paz and use special design
  if (slug) {
    if (!activityData || !activityData[slug]) {
      notFound();
    }
    const laPazData = activityData[slug];
    const heroTitle = laPazData.title?.replace(/\s*\/\s*/g, "\n");
    
    return (
      <div className="bg-white min-h-screen">
        {/* Custom Hero Section */}
        <CustomHero
          backgroundImagePath={laPazData.backgroundImage}
          title={heroTitle || laPazData.title}
          subtitle={laPazData.description}
          hideTopBar
          buttonLabel="Book This Activity"
        />

        {/* Welcome Section */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6 px-4">
              {laPazData.welcome}
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
              {laPazData.welcomeDes}
            </p>
          </div>
        </section>

        {/* Key Details Section */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-2 md:mb-3 px-4">
              {laPazData.sub1}
            </h2>
            <p className="text-center text-gray-600 mb-8 md:mb-12 px-4 text-sm md:text-base">
              {laPazData.sub1Des}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {Object.entries(laPazData.icons).map(([key, value]: [string, any]) => (
                <div key={key} className="p-4 md:p-6 text-center">
                  <div className="flex justify-center mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <Image
                        src={value.iconsPath || value.iconPath}
                        alt={key}
                        width={40}
                        height={40}
                        className="object-contain w-8 h-8 md:w-10 md:h-10"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">{key}</h3>
                  <p className="text-gray-700 mb-1 text-sm md:text-base">{value.cost1}</p>
                  {value.cost2 && (
                    <p className="text-gray-700 text-sm md:text-base">{value.cost2}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        {laPazData.data[0] && (
          <section className="py-12 md:py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-2 md:mb-3 px-4">
                What to Expect
              </h2>
              <p className="text-center text-gray-600 mb-8 md:mb-12 px-4 text-sm md:text-base">
                Experience culture, coastline, and comfort with a full-day guided La Paz adventure by <span className="font-semibold">Cheap Transfers Cabo</span>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image */}
                {laPazData.data[0].image && (
                  <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden" >
                    <Image
                      src={`/${laPazData.data[0].image}`}
                      alt={laPazData.data[0].title || "La Paz Experience"}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                {/* Points */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6">
                    {laPazData.data[0].title }
                  </h3>
                  <ul className="space-y-3 md:space-y-4">
                    {laPazData.data[0].points && Object.values(laPazData.data[0].points).map((point: any, index: number) => (
                     <li key={index} className="text-gray-700 text-sm md:text-base">
                     <span className="mr-2">•</span>
                     <span>{point}</span>
                   </li>
                    ))}
                  </ul>
                  <button 
                    className="mt-6 md:mt-8 w-full bg-[#0446A1] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:opacity-90 transition"
                  >
                    Book This Activity
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Information Cards Section */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 md:gap-6">
              {/* What's Included */}
              {laPazData.data[1] && (
                <div className="rounded-lg p-4 md:p-6" style={{ backgroundColor: '#fafaf9' }}>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-2 h-full bg-[#0446A1] rounded-full flex-shrink-0 min-h-[40px] md:min-h-[60px]"></div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">
                        {laPazData.data[1].title || "What's Included"}
                      </h3>
                      <ul className="space-y-2 md:space-y-2.5">
                        {Object.values(laPazData.data[1].points).map((point: any, index: number) => (
                          <li key={index} className="text-gray-700 text-sm md:text-base">
                            <span className="mr-2">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* What's Not Included */}
              {laPazData.data[2] && (
                <div className="rounded-lg p-4 md:p-6" style={{ backgroundColor: '#fafaf9' }}>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-2 h-full bg-[#0446A1] rounded-full flex-shrink-0 min-h-[40px] md:min-h-[60px]"></div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">
                        {laPazData.data[2].title || "What's Not Included"}
                      </h3>
                      <ul className="space-y-2 md:space-y-2.5">
                        {Object.values(laPazData.data[2].points).map((point: any, index: number) => (
                          <li key={index} className="text-gray-700 text-sm md:text-base">
                            <span className="mr-2">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Our Recommendations */}
              {laPazData.data[3] && (
                <div className="rounded-lg p-4 md:p-6" style={{ backgroundColor: '#fafaf9' }}>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-2 h-full bg-[#0446A1] rounded-full flex-shrink-0 min-h-[40px] md:min-h-[60px]"></div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">
                        {laPazData.data[3].title || "Our Recommendations"}
                      </h3>
                      <ul className="space-y-2 md:space-y-2.5">
                        {Object.values(laPazData.data[3].points).map((point: any, index: number) => (
                          <li key={index} className="text-gray-700 text-sm md:text-base">
                            <span className="mr-2">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Considerations */}
              {laPazData.data[4] && (
                <div className="rounded-lg p-4 md:p-6" style={{ backgroundColor: '#fafaf9' }}>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-2 h-full bg-[#0446A1] rounded-full flex-shrink-0 min-h-[40px] md:min-h-[60px]"></div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">
                        {laPazData.data[4].title || "Considerations"}
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base">
                        {Object.values(laPazData.data[4].points)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 px-4">
            {laPazData.footerText}
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Secure your booking with Cheap Transfers Cabo and experience culture, beaches, and guided comfort in one day.
            </p>
            <button 
              className="bg-[#0446A1] text-white px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:opacity-90 transition"
            >
              Book This Activity
            </button>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Default layout for other activities
  const activity = activities.find((a) => a.slug === params.slug);
  console.log('this is activity',activity)
  if (!activity) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <nav className="relative z-10 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 py-3 md:py-4">
          <Link href="/" className="text-black font-semibold text-sm md:text-base">
            ← Back to Activities
          </Link>
        </div>
      </nav>
      
      <main className="pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-96 rounded-xl md:rounded-2xl overflow-hidden mb-6 md:mb-8">
            <Image
              src={activity.image}
              alt={activity.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4">{activity.name}</h1>
              <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">{activity.fullDescription}</p>

              {/* Highlights */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-3 md:mb-4">Tour Highlights</h2>
                {/* <ul className="space-y-3">
                  {activity.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>

            {/* Booking Card */}
            <div className="md:col-span-1">
              <div className="bg-white border-2 border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-6 md:sticky md:top-24">
                <div className="mb-4 md:mb-6">
                  <div className="text-2xl md:text-3xl font-bold text-black mb-3 md:mb-4">{activity.price}</div>
                  
                  <div className="space-y-2 md:space-y-3 text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm md:text-base">{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className="text-sm md:text-base">{activity.minPeople}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <button 
                    className="w-full text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full transition font-semibold hover:opacity-90 text-sm md:text-base"
                    style={{ backgroundColor: '#0446A1' }}
                  >
                    Book Now
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 px-4 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-blue-600 hover:text-white transition font-semibold text-sm md:text-base">
                    Contact Us
                  </button>
                </div>

                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600 text-center">
                    Questions? Call us at <br />
                    <span className="font-semibold text-black">+52 624 123 4567</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
