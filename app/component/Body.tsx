"use client";

import { cn } from "../../lib/utils"; // Assuming the `cn` function is located in the `utils` folder.
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import React, { useState } from "react";

const Body = () => {
  const data = [
    {
      title: "Premium Engine Oils for Your Vehicle",
      src: "/1.jpg",
      content: (
        <div className="p-8 bg-white rounded-xl">
          <p className="text-gray-700 text-base md:text-lg">
            Our engine oils are designed to maximize performance, extend engine
            life, and improve fuel efficiency.
          </p>
          <Image
            src="/1.jpg"
            alt="Premium engine oil for high-performance vehicles"
            height={300}
            width={300}
            className="w-full h-auto rounded-lg mt-4"
          />
        </div>
      ),
    },
    {
      title: "Committed to Sustainability",
      src: "/2.jpg",
      content: (
        <div className="p-8 bg-white rounded-xl">
          <p className="text-gray-700 text-base md:text-lg">
            Eco-friendly, biodegradable oils that reduce emissions and protect
            the environment.
          </p>
          <Image
            src="/2.jpg"
            alt="Sustainable engine oils"
            height={300}
            width={300}
            className="w-full h-auto rounded-lg mt-4"
          />
        </div>
      ),
    },
    {
      title: "Engineered for Excellence",
      src: "/3.jpg",
      content: (
        <div className="p-8 bg-white rounded-xl">
          <p className="text-gray-700 text-base md:text-lg">
            Advanced oil formulations feature cutting-edge technology to meet
            the needs of modern engines.
          </p>
          <Image
            src="/3.jpg"
            alt="Engine excellence through advanced oil technology"
            height={300}
            width={300}
            className="w-full h-auto rounded-lg mt-4"
          />
        </div>
      ),
    },
    {
      title: "Comprehensive Product Line",
      src: "/4.jpeg",
      content: (
        <div className="p-8 bg-white rounded-xl">
          <p className="text-gray-700 text-base md:text-lg">
            From synthetic to mineral oils, we have the right product for every
            engine type and application.
          </p>
          <Image
            src="/4.jpeg"
            alt="Complete range of engine oils"
            height={300}
            width={300}
            className="w-full h-auto rounded-lg mt-4"
          />
        </div>
      ),
    },
  ];
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className={cn("min-h-screen", "bg-white")}>
      {/* Header Section */}
      <div className={cn("bg-[#01411C]", "py-10")}>
        <div
          className={cn(
            "max-w-6xl",
            "mx-auto",
            "px-4",
            "text-left", // Align header text to the left
            "text-white"
          )}
        >
          <h1
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl",
              "font-bold",
              "leading-tight"
            )}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span>
              Royal <span className="text-[#ffc400]">9</span>
            </span>
            <br className="sm:hidden" />
            <em
              className={cn(
                "bg-clip-text",
                "text-transparent",
                "bg-gradient-to-r",
                "from-[#ff6f00]",
                "to-[#bcfd49]",
                "italic",
                "sm:ml-2"
              )}
            >
              Engine Oil
            </em>
          </h1>
          <p
            className={cn(
              "text-sm sm:text-2lg md:text-2xl",
              "font-semibold",
              "mt-5"
            )}
            style={{
              fontFamily: "'Merriweather', serif",
            }}
          >
            Where Performance Meets Power
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full py-0 px-4 sm:px-6 md:px-8">
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default Body;
