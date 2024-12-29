import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="p-8 mb-2 w-full">
      <h2 className="text-3xl font-semibold mb-4">Latest Blogs</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="p-6 border rounded-lg shadow-md bg-white transition-transform transform hover:scale-105"
          >
            <h3 className="font-semibold text-xl mb-2">Blog Post {i + 1}</h3>
            <p className="text-gray-600 mb-4">Excerpt of blog post {i + 1}...</p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
