// components/Products.tsx
"use client";

import React, { useState } from "react";
import ProductFilter from "./ProductFilter"; // Adjust the path as necessary
import { Cover } from "@/components/ui/over";

// Define a Product interface for type safety
interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
}

// Sample product data
const productsData: Product[] = [
  { id: 1, name: "Performance Oil", description: "Optimized for high performance.", category: "Performance" },
  { id: 2, name: "Performance Pro Oil", description: "Superior formulation for advanced engines.", category: "Performance Pro" },
  { id: 3, name: "Royal Enfield Engine Oil", description: "Specially designed for Royal Enfield bikes.", category: "Royal Enfield Bike" },
];

const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  // Filter products based on the selected category
  const filteredProducts = selectedFilter
    ? productsData.filter((product) => product.category === selectedFilter)
    : productsData;

  return (
    <div className="px-4 sm:px-6 md:px-8 w-full min-h-screen flex justify-center items-start">
      {/* Main Card Container */}
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        
        {/* Filters Section */}
        <div className="flex-shrink-0 w-full sm:w-1/3">
          <ProductFilter selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
        </div>

        {/* Products Section */}
        <section className="flex-grow">
          <h2 className="text-xl font-semibold mb-4">Available Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-md bg-white transition-transform transform hover:scale-[1.02] duration-300 ease-in-out"
                role="button"
                aria-label={`View details for ${product.name}`}
              >
                <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">{product.name}</h3>
                <p className="text-sm sm:text-base text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
