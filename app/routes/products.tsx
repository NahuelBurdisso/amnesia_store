export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">
              Todos los Productos
            </h1>
            <p className="font-montserrat text-gray-600 max-w-md mx-auto text-sm sm:text-base">
              Explora nuestra colección completa de piezas atemporales
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {/* Products will be dynamically loaded here */}
          </div>
        </div>
      </section>
    </div>
  );
}
