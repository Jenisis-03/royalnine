"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";

const Body = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen relative">
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
          font-size: clamp(2rem, 5vw, 5em);
          color: transparent;
          text-transform: uppercase;
          font-family: "Inter", sans-serif;
          text-align: center;
          padding: 0.5em 0;
          letter-spacing: 0.05em;
          font-style: italic;
          margin-left: em;
          position: relative;
        }

        .split-text {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: #bcfd49;
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
          font-size: 0.2em;
          font-weight: 700;
          letter-spacing: 1em;
          padding-left: 1.2em;
          transition: 0.2s ease-out;
          text-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
          font-style: normal;
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
      `}</style>

      <div className="animated-bg"></div>

      <div className="relative z-10 pt-20">
        <div className="max-w-6xl mx-auto px-4">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Carousel className="relative">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="group relative">
                    <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-900/50 shadow-2xl backdrop-blur-sm">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-600/90 text-white">
                          {slide.category}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 px-4">
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute left-2 sm:-left-16 top-1/3 transform -translate-y-1/2">
              <CarouselPrevious className="bg-green-600/10 hover:bg-green-600/20 backdrop-blur-sm text-white border-0 transition duration-300" />
            </div>
            <div className="absolute right-2 sm:-right-16 top-1/3 transform -translate-y-1/2">
              <CarouselNext className="bg-green-600/10 hover:bg-green-600/20 backdrop-blur-sm text-white border-0 transition duration-300" />
            </div>
          </Carousel>
        </div>

        {/* Grid Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Premium Quality",
                desc: "Industry-leading formulation for superior performance",
              },
              {
                title: "Innovation",
                desc: "Advanced technology for modern engines",
              },
              {
                title: "Reliability",
                desc: "Trusted by professionals worldwide",
              },
              {
                title: "Efficiency",
                desc: "Optimized for maximum engine protection",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
