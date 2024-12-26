"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";

// Define the interface for the `api` object
interface CarouselApi {
  scrollNext: () => void;
  scrollTo: (index: number) => void;
}

const Body = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);

  const slides = [
    {
      image: "/1.jpg",
      title: "Innovative Solutions",
      description:
        "Transforming ideas into reality through cutting-edge technology and creative excellence. Our approach combines strategic thinking with precise execution.",
      category: "Technology",
    },
    {
      image: "/2.jpg",
      title: "Expert Craftsmanship",
      description:
        "Every project is handled with meticulous attention to detail, ensuring outstanding quality and performance that exceeds expectations.",
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

  return (
    <section className="min-h-screen relative bg-white">
      <style jsx>{`
        .animated-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #111827, #1f2937);
          z-index: -1;
        }

        .animated-bg::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            #22c55e05 0%,
            transparent 50%
          );
          animation: pulse 8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.2;
          }
        }

        .split-heading {
          font-size: clamp(1.5rem, 4vw, 4em);
          color: transparent;
          text-transform: uppercase;
          font-family: "Inter", sans-serif;
          text-align: center;
          padding: 0.5em 0;
          letter-spacing: 0.05em;
          font-style: italic;
          position: relative;
        }

        .split-text {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: #006a4e;
          transition: 0.5s ease-out;
          font-weight: 700;
          font-style: italic;
        }

        .split-text-top {
          clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        }

        .split-text-bottom {
          clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
        }

        .split-subtext {
          position: absolute;
          top: 30%;
          left: 0;
          transform: translateY(-50%) scaleY(0);
          width: 100%;
          color: #ffc400;
          font-size: clamp(0.4em, 1.5vw, 0.2em);
          font-weight: 700;
          letter-spacing: 0.5em;
          padding-left: 0.6em;
          transition: 0.2s ease-out;
          text-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
          font-style: normal;
        }

        @media (max-width: 640px) {
          .split-subtext {
            letter-spacing: 0.2em;
            padding-left: 0.3em;
          }
        }

        .split-heading:hover .split-text-top {
          transform: translateY(-15px);
        }

        .split-heading:hover .split-text-bottom {
          transform: translateY(15px);
        }

        .split-heading:hover .split-subtext {
          transform: translateY(-50%) scaleY(1);
        }

        .carousel-bg {
          background: #ffffff;
        }
      `}</style>

      <div className="animated-bg"></div>

      <div className="relative z-10 pt-12 sm:pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="split-heading"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Royal 9 Engine Oil
            <span
              className="split-text split-text-top"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Royal 9 Engine Oil
            </span>
            <span
              className="split-text split-text-bottom"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Royal 9 Engine Oil
            </span>
            <span
              className="split-subtext"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              WHERE POWER MEETS PERFORMANCE
            </span>
          </h2>
        </div>

        {/* Carousel Section */}
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-8 sm:py-16 carousel-bg">
          <Carousel
            className="relative w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="group relative px-2 sm:px-4">
                    <div className="aspect-[16/9] overflow-hidden rounded-lg sm:rounded-2xl bg-gray-900/50 shadow-lg sm:shadow-2xl backdrop-blur-sm">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                      <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                        <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-[#006A4E]/90 text-white">
                          {slide.category}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-6 px-2 sm:px-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2 sm:mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Slide Indicators */}
            <div className="absolute -bottom-4 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-[#006A4E] w-3 sm:w-4" : "bg-gray-400"
                  }`}
                  onClick={() => {
                    api?.scrollTo(index);
                    setActiveIndex(index);
                  }}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Grid Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Premium Quality", desc: "Industry-leading formulation for superior performance" },
              { title: "Innovation", desc: "Advanced technology for modern engines" },
              { title: "Reliability", desc: "Trusted by professionals worldwide" },
              { title: "Efficiency", desc: "Optimized for maximum engine protection" },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gray-900/30 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 group-hover:text-[#006A4E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-800">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
