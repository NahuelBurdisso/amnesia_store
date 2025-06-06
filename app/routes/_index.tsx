import type { MetaFunction } from "@remix-run/node";
import { FaArrowRight } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const featuredProducts = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "men",
  },
  {
    id: 2,
    name: "Summer Dress",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "women",
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "men",
  },
  {
    id: 4,
    name: "Casual Sneakers",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "women",
  },
];

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-gradient.jpg')",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="font-bodoni text-7xl md:text-8xl mb-8 text-white max-w-3xl">
            Timeless
            <br />
            Elegance
          </h1>
          <div className="flex gap-8">
            <a
              href="/category/men"
              className="text-lg text-white hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              Shop Men <FaArrowRight />
            </a>
            <a
              href="/category/women"
              className="text-lg text-white hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              Shop Women <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-bodoni text-3xl">Featured Products</h2>
            <a
              href="/products"
              className="flex items-center gap-2 hover:text-gray-600 transition-colors"
            >
              View All <FaArrowRight className="text-sm" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 grayscale hover:grayscale-0"
                  />
                </div>
                <h3 className="font-light mb-2">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-bodoni text-3xl mb-12 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <a href="/category/men" className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Men's Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-bodoni text-3xl">Men</h3>
                </div>
              </div>
            </a>
            <a href="/category/women" className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Women's Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-bodoni text-3xl">Women</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
