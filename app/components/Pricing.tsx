'use client';
import { useEffect } from "react";
import { useCart } from "../context/CartContext";

declare global {
  interface Window {
    gtag?: (command: string, action: string, params: Record<string, unknown>) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const Pricing = () => {
  const { addItem } = useCart();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.gtag) {
        window.gtag("event", "view_pricing_section", {
          event_category: "engagement",
        });
      } else if (window.dataLayer) {
        window.dataLayer.push({
          event: "view_pricing_section",
          event_category: "engagement",
        });
      }
    }
  }, []);

  const handleAddToCart = (role: string, experience: string, priceType: 'fullTime' | 'hourly' | 'partTime', price: number) => {
    // Log GA event
    if (typeof window !== "undefined") {
      if (window.gtag) {
        window.gtag("event", "pricing_intent", {
          event_category: "engagement",
          role,
          experience,
          price_type: priceType,
          price,
        });
      } else if (window.dataLayer) {
        window.dataLayer.push({
          event: "pricing_intent",
          event_category: "engagement",
          role,
          experience,
          price_type: priceType,
          price,
        });
      }
    }
    
    // Add to cart
    const id = `${role}-${experience}-${priceType}`;
    addItem({
      id,
      role,
      experience,
      priceType,
      price,
    });
  };

  const pricingData = [
    {
      role: "Frontend Web Developer",
      pricing: [
        { experience: "2 TO 3.5 YEARS", fullTime: 2500, hourly: 15, partTime: 1300 },
        { experience: "3.5 TO 5 YEARS", fullTime: 3600, hourly: 22, partTime: 1800 },
        { experience: "5+ YEARS", fullTime: 4600, hourly: 30, partTime: 2300 },
      ]
    },
    {
      role: "Backend Web Developer",
      pricing: [
        { experience: "2 TO 3.5 YEARS", fullTime: 2500, hourly: 15, partTime: 1300 },
        { experience: "3.5 TO 5 YEARS", fullTime: 3600, hourly: 22, partTime: 1800 },
        { experience: "5+ YEARS", fullTime: 4600, hourly: 30, partTime: 2300 },
      ]
    },
    {
      role: "Full-Stack Developer",
      pricing: [
        { experience: "2 TO 3.5 YEARS", fullTime: 3600, hourly: 22, partTime: 1800 },
        { experience: "3.5 TO 5 YEARS", fullTime: 4100, hourly: 25, partTime: 2000 },
        { experience: "5+ YEARS", fullTime: 4600, hourly: 30, partTime: 2300 },
      ]
    },
    {
      role: "Mobile Developer (Android/iOS/Cross-Platform)",
      pricing: [
        { experience: "2 TO 3.5 YEARS", fullTime: 2500, hourly: 15, partTime: 1300 },
        { experience: "3.5 TO 5 YEARS", fullTime: 3600, hourly: 22, partTime: 1800 },
        { experience: "5+ YEARS", fullTime: 4600, hourly: 30, partTime: 2300 },
      ]
    },
    {
      role: "Quality Assurance Engineer (Manual/Automation)",
      pricing: [
        { experience: "2 TO 3.5 YEARS", fullTime: 2500, hourly: 15, partTime: 1300 },
        { experience: "3.5 TO 5 YEARS", fullTime: 3600, hourly: 22, partTime: 1800 },
        { experience: "5+ YEARS", fullTime: 4600, hourly: 30, partTime: 2300 },
      ]
    },
    {
      role: "DevOps",
      pricing: [
        { experience: "2 TO 3.5 YEARS", fullTime: 3000, hourly: 20, partTime: 1500 },
        { experience: "3.5 TO 5 YEARS", fullTime: 3600, hourly: 22, partTime: 1800 },
        { experience: "5+ YEARS", fullTime: 4600, hourly: 30, partTime: 2300 },
      ]
    },
    {
      role: "Data Scientist",
      pricing: [
        { experience: "2 TO 3.5 YEARS", fullTime: 3600, hourly: 22, partTime: 1800 },
        { experience: "3.5 TO 5 YEARS", fullTime: 4100, hourly: 25, partTime: 2000 },
        { experience: "5+ YEARS", fullTime: 5000, hourly: 30, partTime: 2500 },
      ]
    },
    {
      role: "AI/ML Engineer",
      pricing: [
        { experience: "2 TO 3.5 YEARS", fullTime: 3600, hourly: 22, partTime: 1800 },
        { experience: "3.5 TO 5 YEARS", fullTime: 4100, hourly: 25, partTime: 2000 },
        { experience: "5+ YEARS", fullTime: 5000, hourly: 30, partTime: 2500 },
      ]
    },
    {
      role: "Generative AI Engineer",
      pricing: [
        { experience: "2 TO 3.5 YEARS", fullTime: 3600, hourly: 22, partTime: 1800 },
        { experience: "3.5 TO 5 YEARS", fullTime: 4100, hourly: 25, partTime: 2000 },
        { experience: "5+ YEARS", fullTime: 5000, hourly: 30, partTime: 2500 },
      ]
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#f8faff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#009bd7] text-sm font-medium uppercase tracking-wider">PRICING</span>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mt-4 mb-4">Staff Augumentation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our engineers delivering innovative solutions across AI, Data Science, and Full Stack Development
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr>
                <th className="bg-[#606060] text-white p-4 text-center">
                  DEVELOPERS/<br/>ENGINEERS
                </th>
                <th className="bg-[#f4d03f] p-4 text-center">
                  2 TO 3.5 YEARS<br/>EXPERIENCE
                </th>
                <th className="bg-[#e9a467] p-4 text-center">
                  3.5 TO 5 YEARS<br/>EXPERIENCE
                </th>
                <th className="bg-[#c0392b] text-white p-4 text-center">
                  5+ YEARS<br/>EXPERIENCE
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-4 font-medium text-center border">{item.role}</td>
                  {item.pricing.map((price, i) => (
                    <td key={i} className="p-4 text-center border">
                      <div className="flex items-center justify-between mb-3">
                        <span>${price.fullTime}/month (Full time)</span>
                        <button 
                          onClick={() => handleAddToCart(item.role, price.experience, 'fullTime', price.fullTime)}
                          className="w-8 h-8 flex items-center justify-center text-[#009bd7] hover:text-[#00E1FF] transition-transform hover:scale-125 ml-2"
                          title="Add to Selection"
                        >
                          <span className="text-xl">+</span>
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <span>${price.hourly}/hr (hourly)</span>
                        <button 
                          onClick={() => handleAddToCart(item.role, price.experience, 'hourly', price.hourly)}
                          className="w-8 h-8 flex items-center justify-center text-[#009bd7] hover:text-[#00E1FF] transition-transform hover:scale-125 ml-2"
                          title="Add to Selection"
                        >
                          <span className="text-xl">+</span>
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span>${price.partTime}/month (Part-time)</span>
                        <button 
                          onClick={() => handleAddToCart(item.role, price.experience, 'partTime', price.partTime)}
                          className="w-8 h-8 flex items-center justify-center text-[#009bd7] hover:text-[#00E1FF] transition-transform hover:scale-125 ml-2"
                          title="Add to Selection"
                        >
                          <span className="text-xl">+</span>
                        </button>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>*Elixir, Go, RoR prices may vary depending on the availability of developers.</p>
          <p>CTO, Architect (10+ years of experience) also available.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 