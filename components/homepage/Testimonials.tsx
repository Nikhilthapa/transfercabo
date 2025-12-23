'use client';

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

// Helper function to safely get translation or fallback to original
function getTranslation(key: string, fallback: string, t: (key: string) => string): string {
  const translated = t(key);
  // If translation returns the key itself, it means translation is missing
  return translated !== key ? translated : fallback;
}

export default function Testimonials() {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Original testimonials data
  const originalTestimonials = [
    {
      name: "Laurie Mellace-Hengehold",
      location: "Phoenix, Arizona",
      rating: 5,
      text: "THE BEST!! Thank you for getting us to the airport this morning and for the wonderful conversations. Until next time—take care!!"
    },
    {
      name: "Ulises Fernando León",
      location: "Los Angeles, California",
      rating: 5,
      text: "100% recomendado, saludos mi buen amigo Rodrigo Rodríguez Sauceda. Awesome service, friendly, clean van, and we loved the touch of having water and beer onboard."
    },
    {
      name: "Yadira Diaz",
      location: "South San Diego, California",
      rating: 5,
      text: "I was just there and I highly recommend his service."
    },
    {
      name: "Steve Johnson",
      location: "Lynnwood, Washington",
      rating: 5,
      text: "This man is the best—always a great time and a nice, clean van!"
    },
    {
      name: "Charles Garfinkel",
      location: "Seattle, Washington",
      rating: 5,
      text: "Definitely recommend. If you sit in the front seat and enjoy local insights—regional info, history, political climate, and recommendations—Rodrigo shares incredible knowledge."
    },
    {
      name: "George Gonzalez",
      location: "Guadalajara, Mexico",
      rating: 5,
      text: "Simplemente el mejor. Bendiciones, carnal."
    },
    {
      name: "Leslie DuBois",
      location: "Portland, Oregon",
      rating: 5,
      text: "We did this last year and it was the highlight of our trip. Rodrigo is an absolutely amazing tour guide and an awesome friend."
    },
    {
      name: "Jenny McEvoy Sterpin",
      location: "Denver, Colorado",
      rating: 5,
      text: "Awesome service! This is our new go-to transportation. You will not be disappointed."
    },
    {
      name: "Linda Green-Lunde",
      location: "San Francisco, California",
      rating: 5,
      text: "If you need transportation or a tour, Rodrigo Rodríguez Sauceda is your guy! He is very knowledgeable, friendly, and affordable. 100% recommended."
    },
    {
      name: "Diane Whited-Mihalyi",
      location: "Washington",
      rating: 5,
      text: "Best ride we ever had.. we request Rodrigo every time!"
    }
  ];

  // Get localized testimonials
  const testimonials = originalTestimonials.map((testimonial, index) => ({
    ...testimonial,
    text: getTranslation(`testimonials.home.items.${index}.text`, testimonial.text, t)
  }));

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-bold text-black px-2" style={{ marginBottom: '10px' }}>{t("testimonials.section.title")}</h2>
        <p className="font-montserrat font-medium text-gray-700 text-sm md:text-base lg:text-lg px-4 max-w-3xl mx-auto" style={{ marginBottom: '50px' }}>
          {t("testimonials.section.subtitle")}
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        {/* Testimonial Card */}
        <div className="bg-[#FCFCFC] rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl relative p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-4 sm:-left-5 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex justify-center gap-0.5 sm:gap-1 mb-4 sm:mb-5 md:mb-6" style={{ marginBottom: '24px' }}>
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-montserrat italic text-center max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed mb-4 sm:mb-5 md:mb-6" style={{ marginBottom: '24px' }}>
            "{currentTestimonial.text}"
          </p>

          <p className="text-center font-bold text-base sm:text-lg md:text-xl text-black">{currentTestimonial.name}</p>
          <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg">{currentTestimonial.location}</p>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="absolute -right-4 sm:-right-5 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all rounded-full ${
                index === currentIndex 
                  ? 'w-5 sm:w-6 md:w-8 h-2 sm:h-2 md:h-2.3 bg-blue-800' 
                  : 'w-2 sm:w-2 md:w-2.3 h-2 sm:h-2 md:h-2.3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

