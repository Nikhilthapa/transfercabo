"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/homepage/Footer";
import CustomHero from "@/components/CustomHero";
import ActivityTestimonials from "@/components/ActivityTestimonials";
import { useI18n } from "@/lib/i18n";

// Helper function to map activity data key to translation key
function getActivityDetailKey(activityDataKey: string): string {
  const keyMap: { [key: string]: string } = {
    "La Paz": "laPaz",
    "Todos Santos": "todosSantos",
    "Cerritos Beach": "cerritos",
    "Los Cabos": "losCabos",
    "Art Walk": "artWalk",
    "Horseback Riding": "horsebackRiding",
    "Snorkeling Tour": "hiddenTowns",
    "Desert Safari": "razors",
    "ATV's": "atvs",
    "40 ft sport fishing boat": "40ft",
    "My dream 33 footer boat": "myDream33Footer",
  };
  return keyMap[activityDataKey] || activityDataKey.toLowerCase().replace(/\s+/g, "");
}

// Helper function to safely get translation or fallback to original
function getTranslation(key: string, fallback: string, t: (key: string) => string): string {
  const translated = t(key);
  // If translation returns the key itself, it means translation is missing
  return translated !== key ? translated : fallback;
}

// Helper function to get localized activity data
function getLocalizedActivityData(activityDataKey: string, t: (key: string) => string, originalData: any) {
  const detailKey = getActivityDetailKey(activityDataKey);
  const prefix = `activity.detail.${detailKey}`;
  
  return {
    ...originalData,
    title: getTranslation(`${prefix}.title`, originalData.title, t),
    description: getTranslation(`${prefix}.description`, originalData.description, t),
    welcome: getTranslation(`${prefix}.welcome`, originalData.welcome, t),
    welcomeDes: getTranslation(`${prefix}.welcomeDes`, originalData.welcomeDes, t),
    sub1: getTranslation(`${prefix}.sub1`, originalData.sub1, t),
    sub1Des: getTranslation(`${prefix}.sub1Des`, originalData.sub1Des, t),
    footerText: getTranslation(`${prefix}.footerText`, originalData.footerText, t),
    icons: originalData.icons ? Object.entries(originalData.icons).reduce((acc: any, [iconKey, iconValue]: [string, any]) => {
      // Map icon key names to translation keys
      const iconKeyMap: { [key: string]: string } = {
        "Cost": "cost",
        "Pickup Time": "pickupTime",
        "Tour Duration": "tourDuration",
        "Tours Departure": "toursDeparture",
        "Boat capacity": "boatCapacity",
        "Meeting point": "meetingPoint",
      };
      const iconKeyNormalized = iconKeyMap[iconKey] || iconKey.toLowerCase().replace(/\s+/g, "");
      const iconPrefix = `${prefix}.icons.${iconKeyNormalized}`;
      const translatedIconKey = getTranslation(`${iconPrefix}`, iconKey, t);
      
      // Find the data object (cost1, time1, duration, etc.)
      const dataKey = Object.keys(iconValue).find(k => k !== 'iconsPath' && k !== 'iconPath' && typeof iconValue[k] === 'object');
      const dataObject = dataKey ? iconValue[dataKey] : null;
      
      if (dataObject && dataKey) {
        const translatedDataObject: any = {};
        Object.entries(dataObject).forEach(([key, value]: [string, any]) => {
          const translatedValue = getTranslation(`${iconPrefix}.${key}`, value as string, t);
          translatedDataObject[key] = translatedValue;
        });
        acc[translatedIconKey] = {
          ...iconValue,
          [dataKey]: translatedDataObject,
        };
      } else {
        acc[translatedIconKey] = iconValue;
      }
      
      return acc;
    }, {}) : originalData.icons,
    data: originalData.data ? originalData.data.map((dataItem: any, index: number) => {
      if (index === 0) {
        // What to Expect section
        return {
          ...dataItem,
          title: dataItem.title || "",
          points: dataItem.points ? Object.entries(dataItem.points).reduce((acc: any, [key, value]: [string, any]) => {
            acc[key] = getTranslation(`${prefix}.data.expect.points.${key}`, value as string, t);
            return acc;
          }, {}) : dataItem.points,
        };
      } else if (index === 1) {
        // What's Included
        return {
          ...dataItem,
          title: getTranslation(`${prefix}.data.included.title`, dataItem.title, t),
          points: dataItem.points ? Object.entries(dataItem.points).reduce((acc: any, [key, value]: [string, any]) => {
            acc[key] = getTranslation(`${prefix}.data.included.points.${key}`, value as string, t);
            return acc;
          }, {}) : dataItem.points,
        };
      } else if (index === 2) {
        // What's Not Included
        return {
          ...dataItem,
          title: getTranslation(`${prefix}.data.notIncluded.title`, dataItem.title || t("activity.detail.common.whatToExpect"), t),
          points: dataItem.points ? Object.entries(dataItem.points).reduce((acc: any, [key, value]: [string, any]) => {
            acc[key] = getTranslation(`${prefix}.data.notIncluded.points.${key}`, value as string, t);
            return acc;
          }, {}) : dataItem.points,
        };
      } else if (index === 3) {
        // Our Recommendations
        return {
          ...dataItem,
          title: getTranslation(`${prefix}.data.recommendations.title`, dataItem.title, t),
          points: dataItem.points ? Object.entries(dataItem.points).reduce((acc: any, [key, value]: [string, any]) => {
            acc[key] = getTranslation(`${prefix}.data.recommendations.points.${key}`, value as string, t);
            return acc;
          }, {}) : dataItem.points,
        };
      } else if (index === 4) {
        // Considerations
        return {
          ...dataItem,
          title: getTranslation(`${prefix}.data.considerations.title`, dataItem.title, t),
          points: dataItem.points ? Object.entries(dataItem.points).reduce((acc: any, [key, value]: [string, any]) => {
            acc[key] = getTranslation(`${prefix}.data.considerations.points.${key}`, value as string, t);
            return acc;
          }, {}) : dataItem.points,
        };
      }
      return dataItem;
    }) : originalData.data,
  };
}

// Bold the text between the first two single quotes and drop the quotes
function formatWelcomeDescription(text: string) {
  const firstQuote = text.indexOf("'");
  const secondQuote = text.indexOf("'", firstQuote + 1);

  if (firstQuote === -1 || secondQuote === -1) return text;

  const before = text.slice(0, firstQuote);
  const between = text.slice(firstQuote + 1, secondQuote);
  const after = text.slice(secondQuote + 1);

  return (
    <>
      {before}
      <strong>{between}</strong>
      {after}
    </>
  );
}

interface ActivityDetailContentProps {
  slug: string;
  originalSlug: string;
  activityData: any;
  activityTestimonials: any;
  defaultActivity?: any;
}

export default function ActivityDetailContent({
  slug,
  originalSlug,
  activityData: originalData,
  activityTestimonials,
  defaultActivity,
}: ActivityDetailContentProps) {
  const { t, locale } = useI18n();

  // Check if it's a detailed activity (has data in activityData)
  if (slug && originalData) {
    const laPazData = getLocalizedActivityData(slug, t, originalData);
    const heroTitle = laPazData.title?.replace(/\s*\/\s*/g, "\n");
    
    return (
      <div className="bg-white min-h-screen">
        {/* Custom Hero Section */}
        <CustomHero
          backgroundImagePath={laPazData.backgroundImage}
          title={heroTitle || laPazData.title}
          subtitle={laPazData.description}
          hideTopBar
          buttonLabel={t("activity.detail.common.bookActivity")}
          titleColor="#fcfcfc"
          subtitleColor="#fafaf9"
        />

        {/* Welcome Section */}
        <section className="mt-[30px] px-4 bg-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] font-montserrat font-semibold text-black mb-[15px] px-4">
              {laPazData.welcome}
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-montserrat font-medium text-gray-700 max-w-5xl mx-auto leading-relaxed mb-[60px] md:mb-[80px] lg:mb-[100px] px-4">
              {formatWelcomeDescription(laPazData.welcomeDes)}
            </p>
          </div>
        </section>

        {/* Key Details Section */}
        <section className=" px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-montserrat font-bold text-black text-center mb-[10px] px-4 sm:px-8 md:px-16 lg:px-32">
              {laPazData.sub1}
            </h2>
            <p className="text-center font-montserrat font-medium text-gray-600 mb-[30px] px-4 text-xs sm:text-sm md:text-base">
              {laPazData.sub1Des}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {Object.entries(laPazData.icons).map(([key, value]: [string, any]) => {
                // Find the nested object (cost1, time1, duration, etc.)
                const dataKey = Object.keys(value).find(k => k !== 'iconsPath' && k !== 'iconPath' && typeof value[k] === 'object');
                const dataObject = dataKey ? value[dataKey] : null;
                
                return (
                  <div key={key} className="p-3 sm:p-4 md:p-5 lg:p-6 text-center">
                    <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#b4c8e3' }}>
                        <Image
                          src={value.iconsPath || value.iconPath}
                          alt={key}
                          width={40}
                          height={40}
                          className="object-contain w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-12 lg:h-12"
                          quality={85}
                          sizes="(max-width: 640px) 24px, (max-width: 768px) 28px, (max-width: 1024px) 40px, 48px"
                        />
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2 sm:mb-2.5 md:mb-3">{key}</h3>
                    {dataObject && (
                      <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                        {Object.values(dataObject).map((item: any, index: number) => (
                          <li key={index} className="font-montserrat font-medium text-gray-700 text-xs sm:text-sm md:text-base break-words">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        {laPazData.data[0] && (
          <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-black text-center mb-[10px] px-4">
                {t("activity.detail.common.whatToExpect")}
              </h2>
              <p className="text-center font-montserrat font-medium text-gray-600 mb-[70px] px-4 text-xs sm:text-sm md:text-base">
                {t("activity.detail.common.whatToExpectDesc")} <span className="font-montserrat font-bold text-[#0d0d0d]">Cheap Transfers Cabo</span>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
                {/* Image */}
                {laPazData.data[0].image && (
                  <div className="relative w-full aspect-square rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[24px] overflow-hidden" >
                    <Image
                      src={`/${laPazData.data[0].image}`}
                      alt={laPazData.data[0].title}
                      fill
                      className="object-cover"
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                
                {/* Points */}
                <div className="w-full flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    {laPazData.data[0].title }
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                    {laPazData.data[0].points && Object.values(laPazData.data[0].points).map((point: any, index: number) => (
                     <li key={index} className="flex items-start font-montserrat font-medium text-[#404040] text-xs sm:text-sm md:text-base break-words">
                     <span className="mr-2 flex-shrink-0">•</span>
                     <span>{point}</span>
                   </li>
                    ))}
                  </ul>
                  <Link href="/activity/reservation#reservation-form" className="inline-block">
                    <button 
                      className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 w-full sm:w-auto sm:min-w-[200px] md:min-w-[240px] bg-[#0446A1] text-white px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:opacity-90 transition whitespace-nowrap"
                    >
                      {t("activity.detail.common.bookActivity")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Information Cards Section */}
        <section className=" px-4 bg-white mb-[70px]">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {/* What's Included */}
              {laPazData.data[1] && (
                <div className="rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mb-[15px]" style={{ backgroundColor: '#fafaf9' }}>
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="w-3 h-full rounded-full flex-shrink-0 min-h-[40px] sm:min-h-[35px] -ml-3 sm:-ml-4 md:-ml-7" style={{ background: 'linear-gradient(to right, #fafaf9 30%, #0446A1 25%)' }}></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold text-black mb-2 sm:mb-3 md:mb-4">
                        {laPazData.data[1].title}
                      </h3>
                      <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                        {Object.values(laPazData.data[1].points).map((point: any, index: number) => (
                          <li key={index} className="flex items-start font-montserrat font-medium text-[#404040] text-xs sm:text-sm md:text-base break-words">
                            <span className="mr-2 flex-shrink-0">•</span>
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
                <div className="rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mb-[15px]" style={{ backgroundColor: '#fafaf9' }}>
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="w-3 h-full rounded-full flex-shrink-0 min-h-[40px] sm:min-h-[35px] -ml-3 sm:-ml-4 md:-ml-7" style={{ background: 'linear-gradient(to right, #fafaf9 30%, #0446A1 25%)' }}></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold text-black mb-2 sm:mb-3 md:mb-4">
                        {laPazData.data[2].title || t("activity.detail.common.whatToExpect")}
                      </h3>
                      <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                        {Object.values(laPazData.data[2].points).map((point: any, index: number) => (
                          <li key={index} className="flex items-start font-montserrat font-medium text-[#404040] text-xs sm:text-sm md:text-base break-words">
                            <span className="mr-2 flex-shrink-0">•</span>
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
                <div className="rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mb-[15px]" style={{ backgroundColor: '#fafaf9' }}>
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="w-3 h-full rounded-full flex-shrink-0 min-h-[40px] sm:min-h-[35px] -ml-3 sm:-ml-4 md:-ml-7" style={{ background: 'linear-gradient(to right, #fafaf9 30%, #0446A1 25%)' }}></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold text-black mb-2 sm:mb-3 md:mb-4">
                        {laPazData.data[3].title}
                      </h3>
                      <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                        {Object.values(laPazData.data[3].points).map((point: any, index: number) => (
                          <li key={index} className="flex items-start font-montserrat font-medium text-[#404040] text-xs sm:text-sm md:text-base break-words">
                            <span className="mr-2 flex-shrink-0">•</span>
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
                <div className="rounded-lg p-3 sm:p-4 md:p-5 lg:p-6" style={{ backgroundColor: '#fafaf9' }}>
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="w-3 h-full rounded-full flex-shrink-0 min-h-[40px] sm:min-h-[35px] -ml-3 sm:-ml-4 md:-ml-7" style={{ background: 'linear-gradient(to right, #fafaf9 30%, #0446A1 25%)' }}></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold text-black mb-2 sm:mb-3 md:mb-4">
                        {laPazData.data[4].title}
                      </h3>
                      <p className="font-montserrat font-medium text-[#404040] text-xs sm:text-sm md:text-base break-words">
                        {Object.values(laPazData.data[4].points)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {activityTestimonials && activityTestimonials.length > 0 && (
          <ActivityTestimonials testimonials={activityTestimonials} activitySlug={originalSlug} />
        )}

        {/* Call to Action */}
        <section className="mb-[100px] px-4 bg-white mt-[70px]">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-black mb-[10px] px-4">
            {laPazData.footerText}
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-montserrat font-medium mb-[30px] max-w-4xl mx-auto px-4 sm:px-6 md:px-7">
              {t("activity.detail.common.ctaText")}
            </p>
            <Link href="/activity/reservation#reservation-form" className="inline-block">
              <button 
                className="w-full sm:w-auto sm:min-w-[200px] md:min-w-[240px] bg-[#0446A1] text-white px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:opacity-90 transition whitespace-nowrap"
              >
                {t("activity.detail.common.bookActivity")}
              </button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Default layout for other activities
  if (!defaultActivity) {
    return null;
  }

  // Get localized activity data for default layout
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
      "snorkeling-tour": "snorkelingTour",
      "desert-safari": "desertSafari",
      "40-ft": "40ft",
      "My-dream-33-footer": "myDream33Footer",
    };
    return slugMap[slug] || slug;
  };
  
  const key = getActivityKey(originalSlug);
  const localizedActivity = {
    ...defaultActivity,
    name: getTranslation(`activity.data.${key}.name`, defaultActivity.name, t),
    fullDescription: getTranslation(`activity.data.${key}.fullDescription`, defaultActivity.fullDescription, t),
    price: defaultActivity.price,
    duration: getTranslation(`activity.data.${key}.duration`, defaultActivity.duration, t),
    minPeople: getTranslation(`activity.data.${key}.minPeople`, defaultActivity.minPeople, t),
    highlights: defaultActivity.highlights ? defaultActivity.highlights.map((highlight: string, index: number) => 
      getTranslation(`activity.data.${key}.highlights.${index}`, highlight, t)
    ) : defaultActivity.highlights,
  };

  return (
    <div className="bg-white min-h-screen">
      <nav className="relative z-10 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 py-3 md:py-4">
          <Link href="/" className="text-black font-semibold text-sm md:text-base">
            {t("activity.detail.common.backToActivities")}
          </Link>
        </div>
      </nav>
      
      <main className="pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-96 rounded-xl md:rounded-2xl overflow-hidden mb-6 md:mb-8">
            <Image
              src={localizedActivity.image}
              alt={localizedActivity.name}
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4">{localizedActivity.name}</h1>
              <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">{localizedActivity.fullDescription}</p>

              {/* Highlights */}
              {localizedActivity.highlights && localizedActivity.highlights.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-black mb-3 md:mb-4">{t("activity.detail.common.tourHighlights")}</h2>
                  <ul className="space-y-2">
                    {localizedActivity.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Booking Card */}
            <div className="md:col-span-1">
              <div className="bg-white border-2 border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-6 md:sticky md:top-24">
                <div className="mb-4 md:mb-6">
                  <div className="text-2xl md:text-3xl font-bold text-black mb-3 md:mb-4">{localizedActivity.price}</div>
                  
                  <div className="space-y-2 md:space-y-3 text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm md:text-base">{localizedActivity.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className="text-sm md:text-base">{localizedActivity.minPeople}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <button 
                    className="w-full text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full transition font-semibold hover:opacity-90 text-sm md:text-base"
                    style={{ backgroundColor: '#0446A1' }}
                  >
                    {t("activity.detail.common.bookNow")}
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 px-4 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-blue-600 hover:text-white transition font-semibold text-sm md:text-base">
                    {t("activity.detail.common.contactUs")}
                  </button>
                </div>

                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600 text-center">
                    {t("activity.detail.common.questionsCall")} <br />
                    <span className="font-semibold text-black">+52 624 123 4567</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      {activityTestimonials && activityTestimonials.length > 0 && (
        <ActivityTestimonials testimonials={activityTestimonials} activitySlug={originalSlug} />
      )}

      <Footer />
    </div>
  );
}

