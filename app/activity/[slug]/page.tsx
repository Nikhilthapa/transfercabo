import { notFound } from "next/navigation";
import activityData from "@/lib/data";
import { activityTestimonials } from "@/lib/testimonials";
import ActivityDetailContent from "@/components/ActivityDetailContent";

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

export default async function ActivityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: originalSlug } = await params;
  const slug = stugData[originalSlug];
  
  // Check if it's a detailed activity (has data in activityData)
  if (slug) {
    if (!activityData || !activityData[slug]) {
      notFound();
    }
    const activityDataForSlug = activityData[slug];
    const testimonials = activityTestimonials[originalSlug] || [];
    
    return (
      <ActivityDetailContent
        slug={slug}
        originalSlug={originalSlug}
        activityData={activityDataForSlug}
        activityTestimonials={testimonials}
      />
    );
  }
  
  // Default layout for other activities
  const activity = activities.find((a) => a.slug === originalSlug);
  if (!activity) {
    notFound();
  }
  
  const testimonials = activityTestimonials[originalSlug] || [];
  
  return (
    <ActivityDetailContent
      slug=""
      originalSlug={originalSlug}
      activityData={null}
      activityTestimonials={testimonials}
      defaultActivity={activity}
    />
  );
}
