import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { FaMinus, FaPlus, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

// Mock product data
const mockProduct = {
  id: 1,
  name: "Camiseta Blanca Clásica",
  price: 29.99,
  description:
    "Una camiseta blanca clásica confeccionada en algodón 100% premium. El diseño atemporal y la silueta perfecta la convierten en una pieza esencial para cualquier guardarropa sofisticado.",
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: [
    { name: "Blanco", value: "#FFFFFF" },
    { name: "Negro", value: "#000000" },
    { name: "Gris", value: "#9CA3AF" },
  ],
  details: [
    "Algodón 100% premium",
    "Corte clásico",
    "Cuello redondo",
    "Hecho en España",
    "Cuidado: Lavado a máquina en agua fría",
  ],
  category: "men",
};

export async function loader({ params }: LoaderFunctionArgs) {
  const productId = params.productId;

  if (!productId) {
    throw new Response("Producto no encontrado", { status: 404 });
  }

  return json({ product: mockProduct });
}

export default function Product() {
  const { product } = useLoaderData<typeof loader>();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleQuantityChange = (increment: boolean) => {
    if (increment) {
      setQuantity((prev) => prev + 1);
    } else if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-16 sm:w-20 aspect-[3/4] overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6 lg:space-y-8">
            {/* Title and Price */}
            <div>
              <h1 className="font-bodoni text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4">
                {product.name}
              </h1>
              <p className="font-montserrat text-xl sm:text-2xl text-gray-800">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <div>
              <p className="font-montserrat text-gray-600 leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-montserrat font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                Color: {selectedColor.name}
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-colors ${
                      selectedColor.name === color.name
                        ? "border-black"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-montserrat font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                Talla
              </h3>
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 sm:py-3 px-2 sm:px-4 font-montserrat text-sm sm:text-base border transition-colors ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              {/* Quantity */}
              <div>
                <h3 className="font-montserrat font-medium mb-3 text-sm sm:text-base">
                  Cantidad
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300">
                    <button
                      onClick={() => handleQuantityChange(false)}
                      className="p-2 sm:p-3 hover:bg-gray-50 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <FaMinus className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <span className="px-3 sm:px-4 py-2 sm:py-3 font-montserrat text-sm sm:text-base min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(true)}
                      className="p-2 sm:p-3 hover:bg-gray-50 transition-colors"
                    >
                      <FaPlus className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="flex-1 bg-black text-white py-3 sm:py-4 px-6 sm:px-8 font-montserrat text-sm sm:text-base hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <FaShoppingCart className="w-4 h-4" />
                  Añadir al Carrito
                </button>
                <button className="flex-shrink-0 border border-gray-300 p-3 sm:p-4 hover:bg-gray-50 transition-colors">
                  <FaHeart className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-6 lg:pt-8">
              <h3 className="font-montserrat font-medium mb-4 text-sm sm:text-base">
                Detalles del Producto
              </h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li
                    key={index}
                    className="font-montserrat text-gray-600 text-sm sm:text-base"
                  >
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Guide */}
            <div className="border-t border-gray-200 pt-6 lg:pt-8">
              <button className="font-montserrat text-sm sm:text-base hover:text-gray-600 transition-colors underline">
                Guía de Tallas
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bodoni text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 text-center">
            También Te Puede Gustar
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Mock related products */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-2 sm:mb-3">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      1521572163474 + item
                    }?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80`}
                    alt={`Producto relacionado ${item}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-montserrat font-medium mb-1 text-xs sm:text-sm">
                    Producto {item}
                  </h3>
                  <p className="font-montserrat text-gray-600 text-xs sm:text-sm">
                    ${(29.99 + item * 10).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
