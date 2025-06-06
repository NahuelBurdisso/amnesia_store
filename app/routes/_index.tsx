import { FaArrowRight } from "react-icons/fa";

const featuredProducts = [
  {
    id: 1,
    name: "Camiseta Blanca Clásica",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "men",
    featured: true,
  },
  {
    id: 2,
    name: "Vestido de Verano",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "women",
  },
  {
    id: 3,
    name: "Chaqueta de Mezclilla",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "men",
  },
  {
    id: 4,
    name: "Zapatillas Casuales",
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
            Elegancia
            <br />
            Atemporal
          </h1>
          <div className="flex gap-8">
            <a
              href="/category/men"
              className="text-lg text-white hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              Comprar Hombre <FaArrowRight />
            </a>
            <a
              href="/category/women"
              className="text-lg text-white hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              Comprar Mujer <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products Section - Creative Magazine Layout */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
            <div>
              <h2 className="font-bodoni text-5xl md:text-6xl mb-4">
                Destacados
              </h2>
              <p className="font-montserrat text-gray-600 max-w-md">
                Piezas curadas que definen la estética de esta temporada
              </p>
            </div>
            <a
              href="/products"
              className="font-montserrat text-sm tracking-wide hover:text-gray-600 transition-colors mt-6 md:mt-0 group"
            >
              DESCUBRIR TODO
              <div className="w-12 h-px bg-black group-hover:w-16 transition-all duration-300 mt-1"></div>
            </a>
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Featured Product */}
            <div className="md:col-span-2 lg:row-span-2 group relative overflow-hidden aspect-[4/5] md:aspect-[3/4]">
              <img
                src={featuredProducts[0].image}
                alt={featuredProducts[0].name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="text-white">
                  <h3 className="font-bodoni text-3xl mb-2">
                    {featuredProducts[0].name}
                  </h3>
                  <p className="font-montserrat text-lg">
                    ${featuredProducts[0].price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            {/* Other Products */}
            {featuredProducts.slice(1).map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden aspect-[4/5]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-montserrat font-medium mb-1">
                    {product.name}
                  </h3>
                  <p className="font-montserrat text-sm">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section - Split Screen Design */}
      <section className="min-h-screen relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Men's Category */}
          <div className="relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Colección Hombre"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-500" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-12 text-white">
              <div className="flex justify-between items-start">
                <h3 className="font-bodoni text-6xl md:text-7xl leading-none">
                  Hombre
                </h3>
                <div className="w-16 h-px bg-white mt-8"></div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="font-montserrat text-sm tracking-widest mb-4 opacity-80">
                    ESENCIALES SOFISTICADOS
                  </p>
                  <p className="font-montserrat max-w-sm opacity-90">
                    Piezas atemporales diseñadas para el caballero moderno
                  </p>
                </div>
                <a
                  href="/category/men"
                  className="group/link font-montserrat text-sm tracking-wide hover:text-gray-200 transition-colors"
                >
                  EXPLORAR
                  <div className="w-8 h-px bg-white group-hover/link:w-12 transition-all duration-300 mt-1"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Women's Category */}
          <div className="relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Colección Mujer"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-500" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-12 text-white">
              <div className="flex justify-between items-start">
                <h3 className="font-bodoni text-6xl md:text-7xl leading-none">
                  Mujer
                </h3>
                <div className="w-16 h-px bg-white mt-8"></div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="font-montserrat text-sm tracking-widest mb-4 opacity-80">
                    ELEGANCIA REFINADA
                  </p>
                  <p className="font-montserrat max-w-sm opacity-90">
                    Diseños contemporáneos que celebran la gracia femenina
                  </p>
                </div>
                <a
                  href="/category/women"
                  className="group/link font-montserrat text-sm tracking-wide hover:text-gray-200 transition-colors"
                >
                  EXPLORAR
                  <div className="w-8 h-px bg-white group-hover/link:w-12 transition-all duration-300 mt-1"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
