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
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="font-bodoni text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 text-white max-w-4xl">
            Elegancia
            <br />
            Atemporal
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a
              href="/category/men"
              className="text-base sm:text-lg text-white hover:text-gray-300 transition-colors flex items-center justify-center sm:justify-start gap-2 py-2"
            >
              Comprar Hombre <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
            <a
              href="/category/women"
              className="text-base sm:text-lg text-white hover:text-gray-300 transition-colors flex items-center justify-center sm:justify-start gap-2 py-2"
            >
              Comprar Mujer <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 lg:mb-20">
            <div className="mb-6 lg:mb-0">
              <h2 className="font-bodoni text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4">
                Destacados
              </h2>
              <p className="font-montserrat text-gray-600 max-w-md text-sm sm:text-base">
                Piezas curadas que definen la estética de esta temporada
              </p>
            </div>
            <a
              href="/products"
              className="font-montserrat text-xs sm:text-sm tracking-wide hover:text-gray-600 transition-colors group"
            >
              DESCUBRIR TODO
              <div className="w-12 h-px bg-black group-hover:w-16 transition-all duration-300 mt-1"></div>
            </a>
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {/* Large Featured Product */}
            <div className="sm:col-span-2 lg:col-span-2 xl:col-span-2 lg:row-span-2 group relative overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
              <img
                src={featuredProducts[0].image}
                alt={featuredProducts[0].name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 lg:p-8">
                <div className="text-white">
                  <h3 className="font-bodoni text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2">
                    {featuredProducts[0].name}
                  </h3>
                  <p className="font-montserrat text-sm sm:text-base lg:text-lg">
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
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="font-montserrat font-medium mb-1 text-sm sm:text-base">
                    {product.name}
                  </h3>
                  <p className="font-montserrat text-xs sm:text-sm">
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
          <div className="relative group overflow-hidden min-h-[60vh] lg:min-h-screen">
            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Colección Hombre"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-500" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-12 text-white">
              <div className="flex justify-between items-start">
                <h3 className="font-bodoni text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none">
                  Hombre
                </h3>
                <div className="w-12 sm:w-16 h-px bg-white mt-6 sm:mt-8"></div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
                <div>
                  <p className="font-montserrat text-xs sm:text-sm tracking-widest mb-3 sm:mb-4 opacity-80">
                    ESENCIALES SOFISTICADOS
                  </p>
                  <p className="font-montserrat max-w-sm text-sm sm:text-base opacity-90">
                    Piezas atemporales diseñadas para el caballero moderno
                  </p>
                </div>
                <a
                  href="/category/men"
                  className="group/link font-montserrat text-xs sm:text-sm tracking-wide hover:text-gray-200 transition-colors"
                >
                  EXPLORAR
                  <div className="w-6 sm:w-8 h-px bg-white group-hover/link:w-8 sm:group-hover/link:w-12 transition-all duration-300 mt-1"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Women's Category */}
          <div className="relative group overflow-hidden min-h-[60vh] lg:min-h-screen">
            <img
              src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Colección Mujer"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-500" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-12 text-white">
              <div className="flex justify-between items-start">
                <h3 className="font-bodoni text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none">
                  Mujer
                </h3>
                <div className="w-12 sm:w-16 h-px bg-white mt-6 sm:mt-8"></div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
                <div>
                  <p className="font-montserrat text-xs sm:text-sm tracking-widest mb-3 sm:mb-4 opacity-80">
                    ELEGANCIA REFINADA
                  </p>
                  <p className="font-montserrat max-w-sm text-sm sm:text-base opacity-90">
                    Diseños contemporáneos que celebran la gracia femenina
                  </p>
                </div>
                <a
                  href="/category/women"
                  className="group/link font-montserrat text-xs sm:text-sm tracking-wide hover:text-gray-200 transition-colors"
                >
                  EXPLORAR
                  <div className="w-6 sm:w-8 h-px bg-white group-hover/link:w-8 sm:group-hover/link:w-12 transition-all duration-300 mt-1"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
