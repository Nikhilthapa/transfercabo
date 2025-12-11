'use client';

import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ana L",
      location: "Guadalajara",
      image: "/client/sarah.jpg",
      rating: 5,
      text: "Excellent experience! Clean car, smooth ride, and very professional driver. Stress-free airport transfer. I'll definitely book again."
    },
    {
      name: "Michael R",
      location: "San Diego",
      image: "/client/sarah.jpg",
      rating: 5,
      text: "Outstanding service from start to finish! The driver was punctual, friendly, and made our family feel safe and comfortable. Highly recommend for anyone visiting Cabo."
    },
    {
      name: "Sofia M",
      location: "Mexico City",
      image: "/client/sarah.jpg",
      rating: 5,
      text: "Best transportation service in Los Cabos! Very professional, clean vehicles, and reasonable prices. Made our vacation stress-free and enjoyable."
    },
    {
      name: "James K",
      location: "Los Angeles",
      image: "/client/sarah.jpg",
      rating: 5,
      text: "Amazing experience! The driver was knowledgeable about the area and gave us great recommendations. The vehicle was spotless and the service was top-notch."
    },
    {
      name: "Isabella P",
      location: "Phoenix",
      image: "/client/sarah.jpg",
      rating: 5,
      text: "Fantastic service! Booking was easy, communication was excellent, and the ride was comfortable. This is the only transfer service I'll use in Cabo from now on."
    }
  ];

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
    <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4">What Our Clients Say</h2>
        <p className="text-gray-700 text-base md:text-lg px-4">
          Genuine reviews from travelers who trusted us with their Cabo journey.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-8 md:px-0">
        {/* Previous Button */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
          aria-label="Previous testimonial"
        >
          <svg 
            className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12 relative">
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 md:mb-6 overflow-hidden border-4 border-blue-100">
            <Image
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 768px) 80px, 96px"
            />
          </div>
          
          <div className="flex justify-center gap-1 mb-4 md:mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 md:w-7 md:h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-gray-600 text-base md:text-xl italic text-center mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
            "{currentTestimonial.text}"
          </p>

          <p className="text-center font-bold text-lg md:text-xl text-black">{currentTestimonial.name}</p>
          <p className="text-center text-gray-500 text-base md:text-lg">{currentTestimonial.location}</p>
        </div>

        {/* Next Button */}
        <button
          onClick={nextTestimonial}
          className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
          aria-label="Next testimonial"
        >
          <svg 
            className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all ${
                index === currentIndex 
                  ? 'w-6 md:w-8 h-2.5 md:h-3 bg-blue-600' 
                  : 'w-2.5 md:w-3 h-2.5 md:h-3 bg-gray-300 hover:bg-gray-400'
              } rounded-full`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

