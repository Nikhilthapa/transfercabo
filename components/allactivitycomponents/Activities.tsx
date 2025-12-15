import { activities } from "@/app/activity/page";
import Image from "next/image";
import Link from "next/link";

export default function Activities() {
  let data=activities
  return (
    <section className="py-12 md:py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-8 mb-8 md:mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4">The Best Things to do in Cabo</h2>
          <p className="text-gray-700 text-base md:text-lg px-4">
            Enjoy ATV, Razor, horseback, and guided desert activities crafted for unforgettable memories.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="carousel-container">
          <div className="carousel-track">
            {/* First set of activities */}
            {data.map((activity, index) => (
              <div key={`first-${index}`} className="carousel-card">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 h-full">
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
                  <div className="p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-montserrat font-semibold mb-2 md:mb-3 text-black">{activity.name}</h3>
                    <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                      {activity.description.split('/').map((part, index, array) => (
                        <span key={index}>
                          {part.trim()}
                          {index < array.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    <div className="flex items-center gap-3 text-xs md:text-sm text-gray-600 mb-4 md:mb-6 flex-wrap md:flex-nowrap">
                      <span className="font-montserrat font-semibold whitespace-nowrap">{activity.price}</span>
                      <span className="text-gray-300">•</span>
                      <span className="flex items-center gap-1 whitespace-nowrap font-montserrat font-semibold">
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {activity.duration}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="flex items-center gap-1 whitespace-nowrap font-montserrat font-semibold">
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        {activity.minPeople}
                      </span>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <Link 
                        href={`/activity/${activity.slug}`}
                        className="border-2 border-blue-600 text-blue-600 px-4 md:px-6 py-2 md:py-2.5 rounded-full flex-1 hover:bg-blue-600 hover:text-white transition font-medium text-center text-xs md:text-sm flex items-center justify-center"
                      >
                        Info
                      </Link>
                      <Link 
                        href="/activity/reservation"
                        className="text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full flex-1 transition font-medium hover:opacity-90 text-center text-xs md:text-sm flex items-center justify-center"
                        style={{ backgroundColor: '#0446A1', transform: 'translateY(2px)' }}
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
                  <div className="p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-montserrat font-semibold mb-2 md:mb-3 text-black">{activity.name}</h3>
                    <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                      {activity.description.split('/').map((part, index, array) => (
                        <span key={index}>
                          {part.trim()}
                          {index < array.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    <div className="flex items-center gap-3 text-xs md:text-sm text-gray-600 mb-4 md:mb-6 flex-wrap md:flex-nowrap">
                      <span className="font-montserrat font-semibold whitespace-nowrap">{activity.price}</span>
                      <span className="text-gray-300">•</span>
                      <span className="flex items-center gap-1 whitespace-nowrap font-montserrat font-semibold">
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {activity.duration}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="flex items-center gap-1 whitespace-nowrap font-montserrat font-semibold">
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        {activity.minPeople}
                      </span>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <Link 
                        href={`/activity/${activity.slug}`}
                        className="border-2 border-blue-600 text-blue-600 px-4 md:px-6 py-2 md:py-2.5 rounded-full flex-1 hover:bg-blue-600 hover:text-white transition font-medium text-center text-xs md:text-sm flex items-center justify-center"
                      >
                        Info
                      </Link>
                      <Link 
                        href="/activity/reservation"
                        className="text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full flex-1 transition font-medium hover:opacity-90 text-center text-xs md:text-sm flex items-center justify-center"
                        style={{ backgroundColor: '#0446A1', transform: 'translateY(2px)' }}
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

