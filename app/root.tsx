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
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        <header className="fixed w-full z-50 top-0">
          <div
            className={`absolute inset-0 ${
              isScrolled
                ? "bg-white/50 shadow-sm"
                : isHomePage
                ? "bg-transparent"
                : "bg-white/50"
            } ${
              isScrolled || !isHomePage ? "opacity-100" : "opacity-0"
            } transition-opacity duration-700`}
          />
          <div
            className={`absolute inset-0 backdrop-blur-sm ${
              isScrolled ? "opacity-50" : "opacity-0"
            } transition-opacity duration-700`}
          />
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <div className="flex-shrink-0">
                <a
                  href="/"
                  className={`text-2xl sm:text-3xl font-bodoni transition-colors ${
                    isScrolled || !isHomePage ? "text-black" : "text-white"
                  }`}
                >
                  AMNESIA
                </a>
              </div>

              <div className="hidden lg:flex items-center space-x-8">
                <a
                  href="/category/men"
                  className={`font-bodoni text-sm xl:text-base transition-colors ${
                    isScrolled || !isHomePage
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  Hombre
                </a>
                <a
                  href="/category/women"
                  className={`font-bodoni text-sm xl:text-base transition-colors ${
                    isScrolled || !isHomePage
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  Mujer
                </a>
              </div>

              <div className="hidden sm:flex items-center space-x-4 lg:space-x-6">
                <button
                  className={`p-2 transition-colors ${
                    isScrolled || !isHomePage
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <Search className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                </button>
                <button
                  className={`p-2 transition-colors ${
                    isScrolled || !isHomePage
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <User className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                </button>
                <button
                  className={`p-2 transition-colors ${
                    isScrolled || !isHomePage
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                </button>
              </div>

              <div className="flex items-center space-x-3 sm:hidden">
                <button
                  className={`p-2 transition-colors ${
                    isScrolled || !isHomePage
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2 transition-colors ${
                    isScrolled || !isHomePage
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 stroke-[1.5]" />
                  ) : (
                    <Menu className="w-5 h-5 stroke-[1.5]" />
                  )}
                </button>
              </div>
            </div>

            {isMobileMenuOpen && (
              <div className="lg:hidden relative z-10">
                <div className="relative">
                  <div
                    className={`absolute inset-0 ${
                      isHomePage && !isScrolled
                        ? "bg-gradient-to-b from-black to-[#121213]/90"
                        : "bg-white"
                    } opacity-100 transition-opacity duration-700`}
                  />
                  <div
                    className={`px-2 pt-2 pb-6 space-y-4 border-t relative ${
                      isHomePage && !isScrolled
                        ? "border-white/20"
                        : "border-gray-100"
                    } transition-colors duration-700`}
                  >
                    <div className="relative z-10 flex flex-col space-y-4">
                      <a
                        href="/category/men"
                        className={`block px-3 py-2 text-base font-bodoni font-medium transition-colors ${
                          isHomePage && !isScrolled
                            ? "text-white hover:text-gray-200"
                            : "text-black hover:text-gray-600"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Hombre
                      </a>
                      <a
                        href="/category/women"
                        className={`block px-3 py-2 text-base font-bodoni font-medium transition-colors ${
                          isHomePage && !isScrolled
                            ? "text-white hover:text-gray-200"
                            : "text-black hover:text-gray-600"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Mujer
                      </a>
                      <div
                        className={`flex items-center space-x-6 px-3 pt-4 border-t ${
                          isHomePage && !isScrolled
                            ? "border-white/20"
                            : "border-gray-100"
                        }`}
                      >
                        <button
                          className={`transition-colors ${
                            isHomePage && !isScrolled
                              ? "text-white hover:text-gray-200"
                              : "text-black hover:text-gray-600"
                          }`}
                        >
                          <Search className="w-5 h-5 stroke-[1.5]" />
                        </button>
                        <button
                          className={`transition-colors ${
                            isHomePage && !isScrolled
                              ? "text-white hover:text-gray-200"
                              : "text-black hover:text-gray-600"
                          }`}
                        >
                          <User className="w-5 h-5 stroke-[1.5]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </header>

        <main className="flex-grow">
          <Outlet />
        </main>

        <footer className="py-12 sm:py-16 lg:py-24 mt-auto border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-8 sm:mb-12 lg:mb-16">
              <a href="/" className="text-3xl sm:text-4xl font-bodoni mb-4">
                AMNESIA
              </a>
              <p className="font-montserrat text-gray-600 max-w-md text-sm sm:text-base tracking-wide px-4">
                Curando elegancia atemporal a través de piezas cuidadosamente
                seleccionadas que trascienden temporadas y definen la
                sofisticación moderna.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
              <div className="text-center lg:text-left">
                <h3 className="font-bodoni text-lg mb-4 sm:mb-6">Nosotros</h3>
                <ul className="space-y-3 sm:space-y-4 font-montserrat text-sm">
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

              <div className="text-center lg:text-left">
                <h3 className="font-bodoni text-lg mb-4 sm:mb-6">
                  Atención al Cliente
                </h3>
                <ul className="space-y-3 sm:space-y-4 font-montserrat text-sm">
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

              <div className="text-center lg:text-left">
                <h3 className="font-bodoni text-lg mb-4 sm:mb-6">Categorías</h3>
                <ul className="space-y-3 sm:space-y-4 font-montserrat text-sm">
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

              <div className="text-center lg:text-left">
                <h3 className="font-bodoni text-lg mb-4 sm:mb-6">Contacto</h3>
                <ul className="space-y-3 sm:space-y-4 font-montserrat text-sm">
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

            <div className="text-center font-montserrat text-xs text-gray-500 pt-6 sm:pt-8 border-t border-gray-100">
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
