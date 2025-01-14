"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Achievements() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const awards = [
    {
      image: "/awards/award1.svg",
      title: "Best Tech Solutions Provider 2023",
      organization: "Tech Excellence Awards"
    },
    {
      image: "/awards/award2.svg",
      title: "Top AI Development Company",
      organization: "Global Business Awards"
    },
    {
      image: "/awards/award3.svg",
      title: "Innovation in Digital Transformation",
      organization: "Digital Impact Awards"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % awards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [awards.length]);

  return (
    <section className="py-16 bg-[#2E2E2E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Achievements & Awards</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition of our commitment to excellence and innovation in technology
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center space-x-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 ${
                  index === currentSlide
                    ? 'scale-100 opacity-100'
                    : 'scale-90 opacity-50'
                }`}
              >
                <div className="bg-[#1a1a1a] p-8 rounded-lg text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <Image
                      src={award.image}
                      alt={award.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                  <p className="text-gray-400">{award.organization}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-[#00E1FF]'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 