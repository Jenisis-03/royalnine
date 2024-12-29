// components/ProductFilter.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ProductFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ selectedFilter, onFilterChange }) => {
  const filters = ["Performance", "Performance Pro", "Royal Enfield Bike"];

  return (
    <div className="flex flex-col space-y-4 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">Filters</h2>
      <div className="flex flex-col space-y-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={selectedFilter === filter ? "secondary" : "outline"} // Use valid variants
            onClick={() => onFilterChange(filter)}
            className="w-full transition-transform transform hover:scale-105 rounded-md"
          >
            {filter}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
