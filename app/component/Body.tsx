"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";

interface CarouselApi {
  scrollNext: () => void;
  scrollTo: (index: number) => void;
}

const Body = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const slides = [
    {
      image: "/1.jpg",
      title: "Premium Engine Oils for Your Vehicle",
      description:
        "Our engine oils are designed to maximize performance, extend engine life, and improve fuel efficiency.",
      category: "Technology",
    },
    {
      image: "/2.jpg",
      title: "Committed to Sustainability",
      description:
        "Eco-friendly, biodegradable oils that reduce emissions and protect the environment.",
      category: "Development",
    },
    {
      image: "/3.jpg",
      title: "Engineered for Excellence",
      description:
        "Advanced oil formulations feature cutting-edge technology to meet the needs of modern engines.",
      category: "Development",
    },
    {
      image: "/4.jpg",
      title: "Comprehensive Product Line",
      description:
        "From synthetic to mineral oils, we have the right product for every engine type and application.",
      category: "Development",
    },
  ];

  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => {
      api.scrollNext();
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [api, slides.length]);

  const blogPosts = [
    {
      title:
        "Why Engine Oil is the Lifeblood of Your Car: Understanding Its Importance",
      desc: "Industry-leading formulation for superior performance.",
      fullDesc:
        "Engine oil serves multiple purposes: it lubricates engine parts, prevents corrosion, reduces friction, and helps cool the engine. Regular maintenance of oil is crucial for keeping your car's engine in peak condition.",
    },
    {
      title: "Choosing the Right Engine Oil: What You Need to Know",
      desc: "Advanced technology for modern engines.",
      fullDesc:
        "Choosing the right oil for your engine is vital for maximizing engine efficiency and performance. The right viscosity, additives, and type of oil (synthetic, semi-synthetic, or conventional) can extend the life of your engine.",
    },
    {
      title:
        "How Often Should You Change Your Engine Oil? Debunking Common Myths",
      desc: "Trusted by professionals worldwide.",
      fullDesc:
        "Many myths surround oil changes, such as changing oil every 3,000 miles. However, modern oils and engines allow for longer intervals between changes, depending on the manufacturer’s recommendations and your driving conditions.",
    },
    {
      title:
        "Synthetic vs. Conventional Oil: Which One is Best for Your Engine?",
      desc: "Optimized for maximum engine protection.",
      fullDesc:
        "Synthetic oil offers superior protection for your engine, especially in extreme temperatures. Conventional oil is a cost-effective option for older engines, but synthetic oil is better for newer models requiring higher performance.",
    },
  ];

  return (
    <section className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-green-600 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Royal 9 Engine Oil
          </h1>
          <p className="text-lg sm:text-xl font-semibold mt-2">
            Where Performance Meets Power
          </p>
        </div>
      </div>

      {/* Body Content */}
      <div className="pt-16 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
        {/* Carousel Section */}
        <div className="mt-6 sm:mt-10">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white space-y-2">
                      <span className="bg-green-600 px-3 py-1 text-sm rounded-full">
                        {slide.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold">
                        {slide.title}
                      </h3>
                      <p className="text-sm sm:text-base">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <Button
                  key={index}
                  className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-green-600" : "bg-gray-300"}`}
                  onClick={() => {
                    api?.scrollTo(index);
                    setActiveIndex(index);
                  }}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Blog Section with Read More/Read Less */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 sm:mt-12">
          {blogPosts.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:bg-gray-50 transition-all duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-gray-800 hover:text-green-600 transition-all duration-200 ease-in-out">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 truncate">{item.desc}</p>

              <div className="flex justify-between items-center mt-4">
                {/* Expandable Content */}
                {expandedIndex === index && (
                  <div className="mt-2 text-sm text-gray-700">
                    <p>{item.fullDesc}</p>
                  </div>
                )}

                {/* Read More Button */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expansion
                  }}
                  className="inline-block text-green-600 font-medium text-sm hover:text-green-700 transition duration-200 ease-in-out"
                >
                  {expandedIndex === index ? "Read Less ←" : "Read More →"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Body;
