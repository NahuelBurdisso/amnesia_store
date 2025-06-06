import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import "./tailwind.css";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => [
  { title: "Amnesia Store | Elegancia Atemporal" },
  {
    name: "description",
    content:
      "Descubre la moda atemporal en Amnesia Store. Explora nuestra colección curada de ropa y accesorios elegantes.",
  },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  { charSet: "utf-8" },
];

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,700&family=Montserrat:wght@300;400;500&display=swap",
  },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <header
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-md"
              : isHomePage
              ? "bg-transparent"
              : "bg-white"
          }`}
        >
          <nav className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-12">
                <a
                  href="/"
                  className={`text-3xl font-bodoni transition-colors ${
                    isScrolled || !isHomePage ? "text-black" : "text-white"
                  }`}
                >
                  AMNESIA
                </a>
                <div className="hidden md:flex space-x-8">
                  <a
                    href="/category/men"
                    className={`transition-colors ${
                      isScrolled || !isHomePage
                        ? "text-black hover:text-gray-600"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    Hombre
                  </a>
                  <a
                    href="/category/women"
                    className={`transition-colors ${
                      isScrolled || !isHomePage
                        ? "text-black hover:text-gray-600"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    Mujer
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <button
                  className={`transition-colors ${
                    isScrolled || !isHomePage
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <FaSearch className="w-5 h-5" />
                </button>
                <button
                  className={`transition-colors ${
                    isScrolled || !isHomePage
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <FaUser className="w-5 h-5" />
                </button>
                <button
                  className={`transition-colors ${
                    isScrolled || !isHomePage
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <FaShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          <Outlet />
        </main>

        <footer className="py-24 mt-auto border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-16">
              <a href="/" className="text-4xl font-bodoni mb-4">
                AMNESIA
              </a>
              <p className="font-montserrat text-gray-600 max-w-md text-sm tracking-wide">
                Curando elegancia atemporal a través de piezas cuidadosamente
                seleccionadas que trascienden temporadas y definen la
                sofisticación moderna.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
              <div className="text-center md:text-left">
                <h3 className="font-bodoni text-lg mb-6">Nosotros</h3>
                <ul className="space-y-4 font-montserrat text-sm">
                  <li>
                    <a
                      href="/about"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Nuestra Historia
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sustainability"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Sostenibilidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Oportunidades
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-bodoni text-lg mb-6">
                  Atención al Cliente
                </h3>
                <ul className="space-y-4 font-montserrat text-sm">
                  <li>
                    <a
                      href="/shipping"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Información de Envío
                    </a>
                  </li>
                  <li>
                    <a
                      href="/returns"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Devoluciones e Intercambios
                    </a>
                  </li>
                  <li>
                    <a
                      href="/size-guide"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Guía de Tallas
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-bodoni text-lg mb-6">Categorías</h3>
                <ul className="space-y-4 font-montserrat text-sm">
                  <li>
                    <a
                      href="/category/men"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Colección Hombre
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/women"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Colección Mujer
                    </a>
                  </li>
                  <li>
                    <a
                      href="/new-arrivals"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Nuevas Llegadas
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-bodoni text-lg mb-6">Contacto</h3>
                <ul className="space-y-4 font-montserrat text-sm">
                  <li className="text-gray-600">
                    <span className="block font-medium text-black mb-1">
                      Email
                    </span>
                    contact@amnesia.com
                  </li>
                  <li className="text-gray-600">
                    <span className="block font-medium text-black mb-1">
                      Teléfono
                    </span>
                    +1 (555) 123-4567
                  </li>
                  <li className="text-gray-600">
                    <span className="block font-medium text-black mb-1">
                      Ubicación
                    </span>
                    123 Fashion Street
                    <br />
                    Style City, SC 12345
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center font-montserrat text-xs text-gray-500 pt-8 border-t border-gray-100">
              <p>
                &copy; {new Date().getFullYear()} AMNESIA. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </footer>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
