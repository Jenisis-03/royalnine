const Products = () => {
    return (
      <section id="products" className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-4 shadow-md">
            <h3 className="font-semibold">Product {i + 1}</h3>
            <p className="text-gray-600">Description of product {i + 1}.</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default Products;