"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Clients = () => {
  const testimonials = [
    {
      image: "/clients/client1.jpg",
      quote: "SKAL has been instrumental in transforming our data infrastructure. Their AI solutions have significantly improved our decision-making process.",
      name: "Sarah Johnson",
      title: "CTO, TechCorp"
    },
    {
      image: "/clients/client2.jpg",
      quote: "The team's expertise in both AI and full-stack development helped us create a seamless, intelligent platform that our users love.",
      name: "Michael Chen",
      title: "CEO, InnovateTech"
    },
    {
      image: "/clients/client3.jpg",
      quote: "Working with SKAL has been a game-changer. Their data science solutions have helped us achieve unprecedented growth.",
      name: "Emily Rodriguez",
      title: "Director of Innovation, DataFlow"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#009bd7] text-sm font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mt-4 mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our valued clients about their experience working with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevTestimonial}
            className="absolute left-[-64px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#009bd7]/20 hover:border-[#009bd7] text-[#009bd7] flex items-center justify-center transition-all"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className="bg-[#f8faff] p-8 md:p-12 rounded-lg border border-[#009bd7]/10">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-6 relative rounded-full overflow-hidden">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600 italic mb-6 relative">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              <h3 className="text-[#1a1a1a] font-bold">{testimonials[currentIndex].name}</h3>
              <p className="text-[#009bd7]">{testimonials[currentIndex].title}</p>
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="absolute right-[-64px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#009bd7]/20 hover:border-[#009bd7] text-[#009bd7] flex items-center justify-center transition-all"
            aria-label="Next testimonial"
          >
            →
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-[#009bd7]' : 'w-2 bg-[#009bd7]/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients; 