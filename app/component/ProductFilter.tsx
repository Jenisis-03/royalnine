import React from "react";

interface ProductFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  onResetFilter: () => void;
}

const ProductFilter = ({ selectedFilter, onFilterChange, onResetFilter }: ProductFilterProps) => {
  const categories = ["Performance", "Performance Pro", "Royal Enfield Bike"];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Filter Products</h3>
      <select
        value={selectedFilter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="w-full p-2 mb-4 border rounded-lg"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        onClick={onResetFilter}
        className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Reset Filter
      </button>
    </div>
  );
};

export default ProductFilter;
