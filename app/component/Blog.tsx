const Blog = () => {
    return (
      <section id="blog" className="p-8">
        <h2 className="text-3xl font-semibold mb-4">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-4 border rounded-lg shadow-md">
              <h3 className="font-semibold">Blog Post {i + 1}</h3>
              <p className="text-gray-600">Excerpt of blog post {i + 1}...</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Blog;