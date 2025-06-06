import { FaMinus, FaPlus, FaTrash, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
  color: string;
}

const mockCartItems: CartItem[] = [
  {
    id: 1,
    name: "Camiseta Blanca Clásica",
    price: 29.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    size: "M",
    color: "Blanco",
  },
  {
    id: 2,
    name: "Vestido de Verano",
    price: 49.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    size: "S",
    color: "Azul",
  },
  {
    id: 3,
    name: "Chaqueta Blazer",
    price: 119.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    size: "L",
    color: "Negro",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const updateQuantity = (id: number, increment: boolean) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = increment
            ? item.quantity + 1
            : Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15.0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <FaShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h1 className="font-bodoni text-2xl sm:text-3xl mb-2">
            Tu carrito está vacío
          </h1>
          <p className="font-montserrat text-gray-600 mb-6 text-sm sm:text-base">
            Descubre nuestras colecciones y encuentra tu próxima pieza favorita
          </p>
          <a
            href="/"
            className="inline-block bg-black text-white px-6 sm:px-8 py-3 font-montserrat text-sm hover:bg-gray-800 transition-colors"
          >
            Continuar Comprando
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="mb-8 sm:mb-12">
          <h1 className="font-bodoni text-3xl sm:text-4xl md:text-5xl mb-2">
            Carrito de Compras
          </h1>
          <p className="font-montserrat text-gray-600 text-sm sm:text-base">
            {cartItems.length}{" "}
            {cartItems.length === 1 ? "artículo" : "artículos"} en tu carrito
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                {/* Product Image */}
                <div className="w-full sm:w-32 lg:w-40 aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h3 className="font-montserrat font-medium text-base sm:text-lg">
                        {item.name}
                      </h3>
                      <div className="flex gap-4 mt-1 text-sm text-gray-600">
                        <span>Talla: {item.size}</span>
                        <span>Color: {item.color}</span>
                      </div>
                    </div>
                    <p className="font-montserrat text-lg sm:text-xl">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                    <div className="flex items-center border border-gray-300">
                      <button
                        onClick={() => updateQuantity(item.id, false)}
                        className="p-2 hover:bg-gray-50 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus className="w-3 h-3" />
                      </button>
                      <span className="px-4 py-2 font-montserrat text-sm min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, true)}
                        className="p-2 hover:bg-gray-50 transition-colors"
                      >
                        <FaPlus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-montserrat font-medium text-sm sm:text-base">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 sm:p-8 sticky top-24">
              <h2 className="font-bodoni text-xl sm:text-2xl mb-6">
                Resumen del Pedido
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between font-montserrat text-sm sm:text-base">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-montserrat text-sm sm:text-base">
                  <span>Envío</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-montserrat font-medium text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-black text-white py-3 sm:py-4 font-montserrat text-sm sm:text-base hover:bg-gray-800 transition-colors">
                  Proceder al Checkout
                </button>
                <button className="w-full border border-gray-300 py-3 sm:py-4 font-montserrat text-sm sm:text-base hover:bg-gray-50 transition-colors">
                  Continuar Comprando
                </button>
              </div>

              {/* Shipping Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <h4 className="font-medium text-black mb-1">
                      Envío Gratuito
                    </h4>
                    <p>En pedidos superiores a $75</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-black mb-1">
                      Devoluciones
                    </h4>
                    <p>30 días para devoluciones gratuitas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-montserrat text-sm hover:text-gray-600 transition-colors"
          >
            ← Continuar Comprando
          </a>
        </div>
      </div>
    </div>
  );
}
