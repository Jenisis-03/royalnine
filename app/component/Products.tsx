// components/Products.tsx
"use client";

import React, { useState } from "react";
import ProductFilter from "./ProductFilter"; // Adjust the path as necessary

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
}

const productsData: Product[] = [
  { id: 1, name: "Performance Oil", description: "Optimized for high performance.", category: "Performance" },
  { id: 2, name: "Performance Pro Oil", description: "Superior formulation for advanced engines.", category: "Performance Pro" },
  { id: 3, name: "Royal Enfield Engine Oil", description: "Specially designed for Royal Enfield bikes.", category: "Royal Enfield Bike" },
];

const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const filteredProducts = selectedFilter ? productsData.filter((product) => product.category === selectedFilter) : productsData;

  return (
    <div className="px-4 sm:px-6 md:px-8 w-full min-h-screen flex flex-col items-center">
      <header className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-6 rounded-lg shadow-md mb-4">
        <h1 className="text-3xl font-bold">Our Premium Products</h1>
        <p className="mt-2 text-lg">Explore our range of high-quality oils and lubricants.</p>
      </header>

      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="flex-shrink-0 w-full sm:w-1/3">
          <ProductFilter selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
        </div>

        <section className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-6 shadow-md bg-white transition-transform transform hover:scale-[1.02] duration-300 ease-in-out h-[300px] flex flex-col justify-between">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Products;
