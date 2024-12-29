"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/over";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
}

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("normal");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Normal Oil 1",
      description: "Good for standard vehicles.",
      category: "normal",
    },
    {
      id: 2,
      name: "Normal Oil 2",
      description: "Economical oil option.",
      category: "normal",
    },
    {
      id: 3,
      name: "Premium Oil 1",
      description: "High performance for luxury cars.",
      category: "premium",
    },
    {
      id: 4,
      name: "Premium Oil 2",
      description: "Great for high-performance engines.",
      category: "premium",
    },
    {
      id: 5,
      name: "Bike Oil 1",
      description: "For motorcycles and scooters.",
      category: "bike",
    },
    {
      id: 6,
      name: "Bike Oil 2",
      description: "Special formulation for bikes.",
      category: "bike",
    },
  ];

  const handleCardClick = (product: Product) => {
    setSelectedProduct((prevProduct) =>
      prevProduct && prevProduct.id === product.id ? null : product
    );
  };

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="p-4 sm:p-8 w-full">
      {/* Updated Header Section */}
      <div className="bg-[#01411C] py-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Varity of Products to Unleash <br />
            The <Cover>Peformance & speed</Cover>
          </h1>
        </div>
      </div>

      {/* Category Buttons with added margin-top for spacing */}
      <div className="flex justify-start mb-8 space-x-8 flex-wrap mt-10">
        {" "}
        {/* Aligned buttons to left */}
        <Button
          variant={selectedCategory === "normal" ? "primary" : "secondary"}
          onClick={() => setSelectedCategory("normal")}
          className="transition-transform transform hover:scale-110 hover:bg-[#ff6f00] text-left px-6 py-3 rounded-md shadow-md focus:outline-none"
        >
          Normal Engine Oil
        </Button>
        <Button
          variant={selectedCategory === "premium" ? "primary" : "secondary"}
          onClick={() => setSelectedCategory("premium")}
          className="transition-transform transform hover:scale-110 hover:bg-[#ff6f00] text-left px-6 py-3 rounded-md shadow-md focus:outline-none"
        >
          Premium Engine Oil
        </Button>
        <Button
          variant={selectedCategory === "bike" ? "primary" : "secondary"}
          onClick={() => setSelectedCategory("bike")}
          className="transition-transform transform hover:scale-110 hover:bg-[#ff6f00] text-left px-6 py-3 rounded-md shadow-md focus:outline-none"
        >
          Bike Engine Oil
        </Button>
      </div>

      {/* Product Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => handleCardClick(product)}
          >
            <h3 className="font-semibold text-lg text-gray-800">
              {product.name}
            </h3>
            <p className="text-gray-600">{product.description}</p>

            {/* Product Details with Smooth Transition */}
            {selectedProduct && selectedProduct.id === product.id && (
              <div className="mt-4 opacity-0 transition-opacity duration-300 ease-in-out transform opacity-100">
                <h4 className="font-semibold text-gray-800">
                  Product Details:
                </h4>
                <p className="text-gray-700">{product.description}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
