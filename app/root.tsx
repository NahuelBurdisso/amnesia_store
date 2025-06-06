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

export const meta: MetaFunction = () => {
  return [
    { title: "Amnesia Store | Timeless Elegance" },
    {
      name: "description",
      content:
        "Discover timeless fashion at Amnesia Store. Shop our curated collection of elegant clothing and accessories.",
    },
  ];
};

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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                    Men
                  </a>
                  <a
                    href="/category/women"
                    className={`transition-colors ${
                      isScrolled || !isHomePage
                        ? "text-black hover:text-gray-600"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    Women
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
                Curating timeless elegance through carefully selected pieces
                that transcend seasons and define modern sophistication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
              <div className="text-center md:text-left">
                <h3 className="font-bodoni text-lg mb-6">About</h3>
                <ul className="space-y-4 font-montserrat text-sm">
                  <li>
                    <a
                      href="/about"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sustainability"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-bodoni text-lg mb-6">Customer Care</h3>
                <ul className="space-y-4 font-montserrat text-sm">
                  <li>
                    <a
                      href="/shipping"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Shipping Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="/returns"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Returns & Exchanges
                    </a>
                  </li>
                  <li>
                    <a
                      href="/size-guide"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Size Guide
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-bodoni text-lg mb-6">Categories</h3>
                <ul className="space-y-4 font-montserrat text-sm">
                  <li>
                    <a
                      href="/category/men"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Men&apos;s Collection
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/women"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Women&apos;s Collection
                    </a>
                  </li>
                  <li>
                    <a
                      href="/new-arrivals"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-bodoni text-lg mb-6">Contact</h3>
                <ul className="space-y-4 font-montserrat text-sm">
                  <li className="text-gray-600">
                    <span className="block font-medium text-black mb-1">
                      Email
                    </span>
                    contact@amnesia.com
                  </li>
                  <li className="text-gray-600">
                    <span className="block font-medium text-black mb-1">
                      Phone
                    </span>
                    +1 (555) 123-4567
                  </li>
                  <li className="text-gray-600">
                    <span className="block font-medium text-black mb-1">
                      Location
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
                &copy; {new Date().getFullYear()} AMNESIA. All rights reserved.
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
