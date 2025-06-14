import { useState } from "react";
import { ProductFilters } from "~/components/ProductFilters";

interface FilterState {
  category?: string;
  size?: string;
  color?: string;
  priceRange?: string;
  brand?: string[];
}

export default function Products() {
  const [filters, setFilters] = useState<FilterState>({});

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    // Here you would typically fetch filtered products from your API
    console.log("Filters changed:", newFilters);
  };

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

      {/* Product Filters */}
      <ProductFilters onFiltersChange={handleFiltersChange} />

      {/* Products Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {/* Products will be dynamically loaded here */}
            {Object.keys(filters).length > 0 && (
              <div className="col-span-full text-center text-gray-500 font-montserrat">
                Aplicando filtros... {JSON.stringify(filters, null, 2)}
              </div>
            )}
            {/* You can now use the filters state to fetch and display filtered products */}
          </div>
        </div>
      </section>
    </div>
  );
}
