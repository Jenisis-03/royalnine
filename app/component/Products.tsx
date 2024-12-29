"use client";

import React, { useState, useCallback } from "react";
import ProductFilter from "./ProductFilter"; // Adjust the path as necessary
import Blog from "./Blog"; // Import the Blog component

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

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white transition-transform transform hover:scale-105 duration-300 ease-in-out min-h-[200px] flex flex-col justify-between">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
    </div>
  );
};

const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  // Filter products based on the selected category
  const filteredProducts = selectedFilter
    ? productsData.filter((product) => product.category === selectedFilter)
    : productsData;

  // Reset the selected filter
  const handleResetFilter = useCallback(() => {
    setSelectedFilter(""); // Reset the filter to show all products
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
      {/* Header Section */}
      <header className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-6 rounded-lg shadow-md mb-2">
        <h1 className="text-3xl font-bold">Our Premium Products</h1>
        <p className="mt-2 text-lg">Explore our range of high-quality oils and lubricants.</p>
      </header>

      {/* Main Card Container */}
      <div className="w-full max-w-screen-xl bg-white rounded-lg shadow-lg p-4 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
        {/* Filters Section */}
        <div className="w-full mb-4 sm:w-1/4 sm:mb-0">
          <ProductFilter selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} onResetFilter={handleResetFilter} />
        </div>

        {/* Products Section */}
        <section className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No products found for the selected filter.
            </div>
          )}
        </section>
      </div>

      {/* Blog Section */}
      <Blog />
    </div>
  );
};

export default Products;
