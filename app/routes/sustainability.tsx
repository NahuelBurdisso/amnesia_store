export default function Sustainability() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">
            Sostenibilidad
          </h1>
          <p className="font-montserrat max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            Nuestro compromiso con un futuro más sostenible a través de la moda
            consciente.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="font-bodoni text-3xl sm:text-4xl lg:text-5xl">
                Moda Responsable
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="font-montserrat text-gray-600 leading-relaxed text-sm sm:text-base">
                  En AMNESIA, la sostenibilidad no es una tendencia, es un
                  compromiso. Cada decisión que tomamos está guiada por nuestro
                  deseo de minimizar nuestro impacto ambiental mientras creamos
                  piezas que perduran.
                </p>
                <p className="font-montserrat text-gray-600 leading-relaxed text-sm sm:text-base">
                  Trabajamos exclusivamente con proveedores que comparten
                  nuestros valores y estándares éticos, asegurando que cada
                  prenda sea producida de manera responsable y justa.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Sostenibilidad en AMNESIA"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center sm:text-left">
              <h3 className="font-bodoni text-xl sm:text-2xl mb-3 sm:mb-4">
                Materiales Sostenibles
              </h3>
              <p className="font-montserrat text-gray-600 text-sm sm:text-base leading-relaxed">
                Utilizamos materiales orgánicos, reciclados y de bajo impacto
                ambiental en todas nuestras colecciones.
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-bodoni text-xl sm:text-2xl mb-3 sm:mb-4">
                Producción Local
              </h3>
              <p className="font-montserrat text-gray-600 text-sm sm:text-base leading-relaxed">
                Colaboramos con talleres locales para reducir nuestra huella de
                carbono y apoyar a las comunidades artesanales.
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-bodoni text-xl sm:text-2xl mb-3 sm:mb-4">
                Embalaje Eco
              </h3>
              <p className="font-montserrat text-gray-600 text-sm sm:text-base leading-relaxed">
                Todos nuestros embalajes son reciclables y están fabricados con
                materiales sostenibles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
