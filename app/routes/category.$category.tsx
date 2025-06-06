import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { FaFilter } from "react-icons/fa";

// Mock data - In a real app, this would come from a database
const products = {
  men: [
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
      name: "Denim Jacket",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "men",
    },
    // Add more men's products...
  ],
  women: [
    {
      id: 3,
      name: "Summer Dress",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "women",
    },
    {
      id: 4,
      name: "Casual Sneakers",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
  const category = params.category;
  if (!category || !(category in products)) {
    throw new Response("Category not found", { status: 404 });
  }

  return json({
    category,
    products: products[category as keyof typeof products],
  });
}

export default function Category() {
  const { category, products } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <h1 className="font-bodoni text-4xl capitalize">
          {category}&apos;s Collection
        </h1>
        <button className="flex items-center gap-2 hover:text-gray-600 transition-colors">
          <FaFilter className="text-sm" />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {products.map((product) => (
          <a key={product.id} href={`/product/${product.id}`} className="group">
            <div className="relative aspect-[3/4] mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 grayscale hover:grayscale-0"
              />
            </div>
            <h3 className="font-light mb-2">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
