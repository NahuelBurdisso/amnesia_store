import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { ProductFilters } from "~/components/ProductFilters";
import { SortAsc } from "lucide-react";

interface FilterState {
  category?: string;
  size?: string;
  color?: string;
  priceRange?: string;
  brand?: string[];
}

// Mock data - En una aplicación real, esto vendría de una base de datos
const products = {
  men: [
    {
      id: 1,
      name: "Camiseta Blanca Clásica",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "men",
    },
    {
      id: 2,
      name: "Chaqueta de Mezclilla",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "men",
    },
    {
      id: 3,
      name: "Pantalones Chinos",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "men",
    },
    {
      id: 4,
      name: "Suéter de Lana",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "men",
    },
    {
      id: 5,
      name: "Camisa Oxford",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "men",
    },
    {
      id: 6,
      name: "Zapatillas Deportivas",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "men",
    },
    // Add more men's products...
  ],
  women: [
    {
      id: 7,
      name: "Vestido de Verano",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "women",
    },
    {
      id: 8,
      name: "Blusa de Seda",
      price: 69.99,
      image:
        "https://images.unsplash.com/photo-1564257577-b7d7e4c1b8d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "women",
    },
    {
      id: 9,
      name: "Falda Midi",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "women",
    },
    {
      id: 10,
      name: "Chaqueta Blazer",
      price: 119.99,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "women",
    },
    {
      id: 11,
      name: "Pantalones de Talle Alto",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "women",
    },
    {
      id: 12,
      name: "Zapatos de Tacón",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "women",
    },
    // Add more women's products...
  ],
  kids: [
    {
      id: 5,
      name: "Kids T-Shirt",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "kids",
    },
    // Add more kids' products...
  ],
};

export async function loader({ params }: LoaderFunctionArgs) {
  const category = params.category as keyof typeof products;

  if (!category || !products[category]) {
    throw new Response("Categoría no encontrada", { status: 404 });
  }

  return json({
    category,
    products: products[category],
    categoryName: category === "men" ? "Hombre" : "Mujer",
  });
}

export default function Category() {
  const { category, products, categoryName } = useLoaderData<typeof loader>();
  const [filters, setFilters] = useState<FilterState>({});
  const [sortBy, setSortBy] = useState<string>("default");

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    // Here you would typically filter the products based on the new filters
    console.log("Category filters changed:", newFilters);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    // Here you would typically sort the products
    console.log("Sort changed:", value);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">
              Colección {categoryName}
            </h1>
            <p className="font-montserrat text-gray-600 max-w-md mx-auto text-sm sm:text-base">
              {category === "men"
                ? "Esenciales sofisticados para el caballero contemporáneo"
                : "Piezas elegantes que celebran la feminidad moderna"}
            </p>
          </div>
        </div>
      </section>

      {/* Product Filters */}
      <ProductFilters onFiltersChange={handleFiltersChange} />

      {/* Products Count and Sort */}
      <section className="py-4 sm:py-6 bg-gray-50/30 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="font-montserrat text-sm text-gray-600">
              {products.length} productos encontrados
              {Object.keys(filters).length > 0 && " (filtrados)"}
            </p>

            <div className="flex items-center gap-2">
              <SortAsc className="w-4 h-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-3 py-2 font-montserrat text-sm border border-gray-200 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded-md"
              >
                <option value="default">Ordenar por</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="name-asc">Nombre: A-Z</option>
                <option value="name-desc">Nombre: Z-A</option>
                <option value="newest">Más Recientes</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden mb-3 sm:mb-4 aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />

                  {/* Quick actions overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="flex gap-2 sm:gap-3">
                      <button className="px-3 sm:px-4 py-2 bg-white text-black font-montserrat text-xs sm:text-sm hover:bg-gray-100 transition-colors">
                        Ver Detalles
                      </button>
                      <button className="px-3 sm:px-4 py-2 bg-black text-white font-montserrat text-xs sm:text-sm hover:bg-gray-800 transition-colors">
                        Añadir al Carrito
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-montserrat font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                    {product.name}
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bodoni text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
            Mantente al Día
          </h2>
          <p className="font-montserrat text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Recibe las últimas tendencias y ofertas exclusivas
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-0">
            <input
              type="email"
              placeholder="Tu dirección de email"
              className="flex-1 px-4 py-3 font-montserrat text-sm border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
            />
            <button className="px-6 sm:px-8 py-3 bg-black text-white font-montserrat text-sm hover:bg-gray-800 transition-colors whitespace-nowrap">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
