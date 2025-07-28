"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      quote: "Skal AI transformed our business operations with their cutting-edge AI solutions. The automation they implemented saved us 40% in operational costs while improving our customer satisfaction dramatically.",
      name: "David Johnson",
      title: "CEO, TechInnovate Solutions",
      image: "/clients/client1.jpg",
      rating: 5
    },
    {
      quote: "Their AI chatbot integration was seamless and the results were immediate. Our customer support efficiency increased by 300% and our response time went from hours to seconds.",
      name: "Michael Chen",
      title: "Operations Director, GlobalTech Inc.",
      image: "/clients/client2.jpg",
      rating: 5
    },
    {
      quote: "The machine learning models they developed for our predictive analytics have been game-changing. We can now forecast market trends with 95% accuracy.",
      name: "Emily Rodriguez",
      title: "Data Science Lead, FutureVision Corp",
      image: "/clients/client3.jpg",
      rating: 5
    },
    {
      quote: "Exceptional work on our full-stack development project. The team delivered a robust, scalable solution that exceeded our expectations and timeline.",
      name: "Sara Thompson",
      title: "CTO, InnovateLab",
      image: "/clients/client4.jpg",
      rating: 5
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section 
      className="relative py-24 bg-gradient-to-br from-[#f8faff] via-white to-[#f0f7ff] dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden"
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {/* Static background gradients for depth */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#009bd7]/5 to-[#00E1FF]/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#00E1FF]/3 to-purple-300/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-300/2 to-pink-300/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Enhanced header */}
        <div className="text-center mb-20">
                      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <div className="w-2 h-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-full animate-ping"></div>
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">TESTIMONIALS</span>
            </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#009bd7] to-[#00E1FF] dark:from-white dark:via-[#009bd7] dark:to-[#00E1FF] mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Hear from our valued clients about their experience working with us and the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] font-bold">
              results we&apos;ve achieved
            </span>{' '}
            together
          </p>
        </div>

        {/* Enhanced testimonial card */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30 hover:border-[#009bd7] dark:hover:border-[#00E1FF] text-[#009bd7] dark:text-[#00E1FF] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30 hover:border-[#009bd7] dark:hover:border-[#00E1FF] text-[#009bd7] dark:text-[#00E1FF] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main testimonial card */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Profile image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-[#009bd7] to-[#00E1FF] p-1 bg-gradient-to-r from-[#009bd7] to-[#00E1FF]">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={128}
                    height={128}
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
              </div>

              {/* Testimonial content */}
              <div className="flex-1 text-center md:text-left">
                <StarRating rating={testimonials[currentIndex].rating} />
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>
                <div>
                  <h4 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[#009bd7] dark:text-[#00E1FF] font-medium">
                    {testimonials[currentIndex].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-[#009bd7] to-[#00E1FF] dark:from-[#00E1FF] dark:to-[#009bd7] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-500 dark:hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client logos section */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-8 font-medium">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-80 transition-opacity">
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-300">TechInnovate</div>
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-300">GlobalTech</div>
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-300">FutureVision</div>
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-300">InnovateLab</div>
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-300">DataFlow</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;