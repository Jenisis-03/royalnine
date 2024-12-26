// app/page.tsx
//import Header from './component/Header';
import Body from './component/Body';
import Products from './component/Products';
import Blog from './component/Blog';
import Footer from './component/Footer';

export default function HomePage() {
  return (
    <div>
      {/* Header Section */}
      

      {/* Body Section */}
      <Body />

      {/* Product Section */}
      <Products />

      {/* Blog Section */}
      <Blog />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
