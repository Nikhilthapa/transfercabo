"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/homepage/Navigation";
import Footer from "@/components/homepage/Footer";
import { useI18n } from "@/lib/i18n";
import { activities } from "@/lib/activities";

export default function ActivityPage() {
  const { t } = useI18n();

  // Helper function to get translation key from slug
  const getActivityKey = (slug: string) => {
    const slugMap: { [key: string]: string } = {
      "la-paz": "laPaz",
      "atvs": "atvs",
      "art-walk": "artWalk",
      "horseback-riding": "horsebackRiding",
      "razors": "razors",
      "todos-santos": "todosSantos",
      "cerritos": "cerritos",
      "los-cabos": "losCabos",
      "hidden-towns": "hiddenTowns",
      "40-ft": "40ft",
      "My-dream-33-footer": "myDream33Footer",
    };
    return slugMap[slug] || slug;
  };

  // Get localized activities
  const localizedActivities = activities.map((activity) => {
    const key = getActivityKey(activity.slug);
    return {
      ...activity,
      name: t(`activity.data.${key}.name`),
      description: t(`activity.data.${key}.description`),
      duration: t(`activity.data.${key}.duration`),
      minPeople: t(`activity.data.${key}.minPeople`),
    };
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative mb-[40px] sm:mb-[50px] md:mb-[60px] lg:mb-[70px] mt-[20px] sm:mt-[30px] md:mt-[40px]" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span style={{ color: '#0446a1' }}>{t("activity.list.hero.line1")}</span>
                <br />
                <span className="text-gray-900">{t("activity.list.hero.line2")}</span>
              </h1>
              <p className="text-base md:text-xl text-gray-700">
                {t("activity.list.hero.text")}
              </p>
              <Link 
                href="#activities"
                className="inline-flex items-center gap-2 text-white font-semibold hover:opacity-90 transition text-sm md:text-base"
                style={{ 
                  backgroundColor: '#0446a1',
                  padding: '18px 28px',
                  borderRadius: '10px'
                }}
              >
                {t("activity.list.hero.cta")} <span className="ml-1">↓</span>
              </Link>
            </div>

            {/* Right Image Collage - 5 Image Layout */}
            <div className="relative grid grid-cols-3 gap-3 md:gap-4" style={{ gridTemplateColumns: 'minmax(0, 326fr) minmax(0, 186fr) minmax(0, 164fr)' }}>
              {/* Left Column */}
              <div className="flex flex-col gap-0.5 md:gap-0.5">
                {/* 1.png: W:326, H:343 */}
                <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden" style={{ aspectRatio: '326/343' }}>
                  <Image 
                    src="/thingstodoincabo/headers/1.png" 
                    alt="Art Walk" 
                    fill 
                    className="object-cover" 
                    quality={90}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority
                  />
                </div>
                {/* 2.png: W:326, H:326 */}
                <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden" style={{ aspectRatio: '1/1' }}>
                  <Image 
                    src="/thingstodoincabo/headers/2.png" 
                    alt="Beach Scene" 
                    fill 
                    className="object-cover" 
                    quality={90}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
              
              {/* Middle Column */}
              <div className="relative flex flex-col">
                {/* 3.png: W:186, H:333 */}
                <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden mb-0 -ml-2 md:-ml-3" style={{ aspectRatio: '186/333', marginTop: '8rem' }}>
                  <Image 
                    src="/thingstodoincabo/headers/3.png" 
                    alt="UTV Adventure" 
                    fill 
                    className="object-cover" 
                    quality={90}
                    sizes="(max-width: 768px) 30vw, 20vw"
                    priority
                  />
                </div>
                {/* 4.png: W:186, H:186 - Aligned with 2.png at bottom */}
                <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden -mt-18 md:-mt-20 -ml-2 md:-ml-3" style={{ aspectRatio: '1/1', marginTop: 'auto' }}>
                  <Image 
                    src="/thingstodoincabo/headers/4.png" 
                    alt="ATV Desert" 
                    fill 
                    className="object-cover" 
                    quality={90}
                    sizes="(max-width: 768px) 30vw, 20vw"
                    priority
                  />
                </div>
              </div>
              
              {/* Right Column - Single Tall Image */}
              <div className="relative flex flex-col">
                {/* 5.png: W:164, H:389 */}
                <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden -ml-3 md:-ml-5" style={{ aspectRatio: '164/389', marginTop: 'auto' }}>
                  <Image 
                    src="/thingstodoincabo/headers/5.png" 
                    alt="Sculpture" 
                    fill 
                    className="object-cover" 
                    quality={90}
                    sizes="(max-width: 768px) 20vw, 15vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-[50px] sm:mb-[60px] md:mb-[80px] lg:mb-[100px]" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-semibold text-gray-900 mb-[15px]">
            {t("activity.list.about.title")}
          </h2>
          <p className="text-base md:text-lg font-montserrat font-mixed text-gray-700 max-w-5xl mx-auto leading-relaxed">
            {t("activity.list.about.text")}
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section id="activities" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-center text-gray-900 mb-[10px]">
            {t("activity.list.grid.title")}
          </h2>
          <p className="text-center font-montserrat font-medium text-gray-600 mb-[70px] text-sm md:text-base">
            {t("activity.list.grid.subtitle")}
          </p>

          {/* Activity Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {localizedActivities.map((activity) => (
              <div 
                key={activity.slug} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Activity Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover"
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Activity Content */}
                <div className="p-4 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-gray-900 mb-2 md:mb-3">
                    {activity.name}
                  </h3>
                  <p className="text-gray-600 font-montserrat font-medium text-xs md:text-sm mb-3 md:mb-4">
                    {activity.description.split('/').map((part, index, array) => (
                      <span key={index}>
                        {part.trim()}
                        {index < array.length - 1 && <br />}
                      </span>
                    ))}
                  </p>

                  {/* Details and Buttons Container */}
                  <div className="mt-auto flex flex-col">
                    {/* Activity Details */}
                    <div className="flex items-center gap-2.5 text-[11px] md:text-sm text-gray-700 mb-4 md:mb-6 flex-wrap md:flex-nowrap">
                      <span className="font-montserrat font-semibold whitespace-nowrap">{activity.price}</span>
                      {/* <span className="text-gray-300">•</span> */}
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <svg className="w-3 h-3 md:w-4 md:h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="font-montserrat font-semibold">{activity.duration}</span>
                      </div>
                      {/* <span className="text-gray-300">•</span> */}
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <svg className="w-3 h-3 md:w-4 md:h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span className="font-montserrat font-semibold">{activity.minPeople}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 md:gap-3">
                    <Link 
                      href={`/activity/${activity.slug}`}
                      className="flex-1 text-center border-2 border-blue-600 text-blue-600 px-3 md:px-4 py-2 md:py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition font-medium text-xs md:text-sm flex items-center justify-center"
                    >
                      {t("activity.list.card.info")}
                    </Link>
                    <Link 
                      href="/activity/reservation#reservation-form"
                      className="flex-1 text-center text-white px-3 md:px-4 py-2 md:py-2.5 rounded-full transition font-medium hover:opacity-90 text-xs md:text-sm flex items-center justify-center"
                      style={{ backgroundColor: '#0446A1' }}
                    >
                      {t("activity.list.card.book")}
                    </Link>
                  </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-[50px] sm:mt-[60px] md:mt-[80px] lg:mt-[100px]">
      <Footer />
      </div>
    </div>
  );
}

