"use client";

import { activities } from "@/lib/activities";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function Activities() {
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
  
  const data = localizedActivities;
  return (
    <section className="overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-8 mb-8 md:mb-12">
        <div className="text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-black"
            style={{ marginBottom: "10px" }}
          >
            {t("home.activitiesCarousel.title")}
          </h2>
          <p className="font-montserrat font-medium text-gray-700 text-base md:text-lg px-4">
            {t("home.activitiesCarousel.subtitle")}
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="carousel-container">
          <div className="carousel-track">
            {/* First set of activities */}
            {data.map((activity, index) => (
              <div key={`first-${index}`} className="carousel-card">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 h-full flex flex-col">
                  <div className="relative w-full h-60">
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      fill
                      className="object-cover"
                      quality={85}
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex-1 flex flex-col min-h-0">
                    <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-black" style={{ marginBottom: '10px' }}>{activity.name}</h3>
                    <p className="font-montserrat font-medium text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3 overflow-hidden">
                      {activity.description.split('/').map((part, index, array) => (
                        <span key={index}>
                          {part.trim()}
                          {index < array.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    <div className="mt-auto flex flex-col">
                      <div className="flex items-center gap-1 md:gap-1.5 text-xs md:text-sm text-gray-600 mb-4 md:mb-6 min-w-0">
                        <span className="font-montserrat font-semibold whitespace-nowrap flex-shrink-0">{activity.price}</span>
                        <span className="text-gray-300 flex-shrink-0">•</span>
                        <span className="flex items-center gap-0.5 font-montserrat font-semibold flex-shrink-0">
                          <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span className="whitespace-nowrap">{activity.duration}</span>
                        </span>
                        <span className="text-gray-300 flex-shrink-0">•</span>
                        <span className="flex items-center gap-0.5 font-montserrat font-semibold min-w-0">
                          <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                          <span className="whitespace-nowrap">{activity.minPeople}</span>
                        </span>
                      </div>
                      <div className="flex gap-2 md:gap-3">
                      <Link 
                        href={`/activity/${activity.slug}`}
                        className="border-2 border-blue-600 text-blue-600 px-3 md:px-4 py-2 md:py-2.5 rounded-full flex-1 hover:bg-blue-600 hover:text-white transition font-medium text-center text-[10px] md:text-xs flex items-center justify-center min-w-0"
                      >
                        <span className="truncate">{t("activity.list.card.info")}</span>
                      </Link>
                      <Link 
                        href="/activity/reservation#reservation-form"
                        className="text-white px-3 md:px-4 py-2 md:py-2.5 rounded-full flex-1 transition font-medium hover:opacity-90 text-center text-[10px] md:text-xs flex items-center justify-center border-2 border-transparent min-w-0"
                        style={{ backgroundColor: '#0446A1' }}
                      >
                        <span className="truncate">{t("activity.list.card.book")}</span>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {localizedActivities.map((activity, index) => (
              <div key={`second-${index}`} className="carousel-card">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 h-full flex flex-col">
                  <div className="relative w-full h-60">
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      fill
                      className="object-cover"
                      quality={85}
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex-1 flex flex-col min-h-0">
                    <h3 className="text-xl md:text-2xl font-montserrat font-semibold mb-2 md:mb-3 text-black">{activity.name}</h3>
                    <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3 overflow-hidden">
                      {activity.description.split('/').map((part, index, array) => (
                        <span key={index}>
                          {part.trim()}
                          {index < array.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    <div className="mt-auto flex flex-col">
                      <div className="flex items-center gap-1 md:gap-1.5 text-xs md:text-sm text-gray-600 mb-4 md:mb-6 min-w-0">
                        <span className="font-montserrat font-semibold whitespace-nowrap flex-shrink-0">{activity.price}</span>
                        <span className="text-gray-300 flex-shrink-0">•</span>
                        <span className="flex items-center gap-0.5 font-montserrat font-semibold flex-shrink-0">
                          <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span className="whitespace-nowrap">{activity.duration}</span>
                        </span>
                        <span className="text-gray-300 flex-shrink-0">•</span>
                        <span className="flex items-center gap-0.5 font-montserrat font-semibold min-w-0">
                          <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                          <span className="whitespace-nowrap">{activity.minPeople}</span>
                        </span>
                      </div>
                      <div className="flex gap-2 md:gap-3">
                      <Link 
                        href={`/activity/${activity.slug}`}
                        className="border-2 border-blue-600 text-blue-600 px-3 md:px-4 py-2 md:py-2.5 rounded-full flex-1 hover:bg-blue-600 hover:text-white transition font-medium text-center text-[10px] md:text-xs flex items-center justify-center min-w-0"
                      >
                        <span className="truncate">{t("activity.list.card.info")}</span>
                      </Link>
                      <Link 
                        href="/activity/reservation#reservation-form"
                        className="text-white px-3 md:px-4 py-2 md:py-2.5 rounded-full flex-1 transition font-medium hover:opacity-90 text-center text-[10px] md:text-xs flex items-center justify-center border-2 border-transparent min-w-0"
                        style={{ backgroundColor: '#0446A1' }}
                      >
                        <span className="truncate">{t("activity.list.card.book")}</span>
                      </Link>
                      </div>
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

