'use client';

import { useState } from "react";

export interface Testimonial {
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

interface ActivityTestimonialsProps {
  testimonials: Testimonial[];
}

export default function ActivityTestimonials({ testimonials }: ActivityTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Don't render if no testimonials provided
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

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
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-bold text-black px-2" style={{ marginBottom: '10px' }}>What Our Clients Say</h2>
        <p className="font-montserrat font-medium text-gray-700 text-sm md:text-base lg:text-lg px-4 max-w-3xl mx-auto" style={{ marginBottom: '10px' }}>
          Genuine reviews from travelers who trusted us with their Cabo journey.
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

