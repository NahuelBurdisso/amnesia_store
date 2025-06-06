import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

// Mock data - En una aplicación real, esto vendría de una base de datos
const products = [
  {
    id: "1",
    name: "Camiseta Blanca Clásica",
    price: 29.99,
    description:
      "Una camiseta blanca atemporal hecha de 100% algodón orgánico. Perfecta para el uso diario, esta pieza esencial cuenta con un ajuste cómodo y excelente durabilidad.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanco", "Negro", "Gris"],
  },
  {
    id: "2",
    name: "Vestido de Verano",
    price: 49.99,
    description:
      "Un hermoso vestido de verano perfecto para días cálidos. Hecho de tela ligera y transpirable con una silueta favorecedora.",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Azul", "Rosa", "Blanco"],
  },
];

export async function loader({ params }: LoaderFunctionArgs) {
  const productId = params.productId;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    throw new Response("Producto no encontrado", { status: 404 });
  }

  return json({ product });
}

export default function Product() {
  const { product } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen del Producto */}
        <div className="relative aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Información del Producto */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-6">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-gray-600 mb-8">{product.description}</p>

          {/* Selección de Talla */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Talla</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-md hover:border-black transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Selección de Color */}
          <div className="mb-8">
            <h3 className="font-medium mb-3">Color</h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="px-4 py-2 border rounded-md hover:border-black transition"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              <FaShoppingCart />
              Agregar al Carrito
            </button>
            <button className="p-3 border rounded-md hover:bg-gray-50 transition">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
