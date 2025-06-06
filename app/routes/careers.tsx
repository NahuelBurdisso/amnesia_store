export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">
            Únete a Nuestro Equipo
          </h1>
          <p className="font-montserrat max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            Buscamos personas apasionadas que compartan nuestra visión de la
            moda atemporal y el diseño sostenible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bodoni text-3xl sm:text-4xl mb-8 sm:mb-12">
              Posiciones Abiertas
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {/* Position */}
              <div className="border border-gray-200 p-6 sm:p-8">
                <h3 className="font-bodoni text-xl sm:text-2xl mb-3">
                  Diseñador/a Senior
                </h3>
                <p className="font-montserrat text-gray-600 mb-4 text-sm sm:text-base">
                  Barcelona, España · Tiempo Completo
                </p>
                <p className="font-montserrat text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                  Buscamos un diseñador senior con experiencia en moda de lujo y
                  una fuerte visión creativa. El candidato ideal combinará
                  habilidades técnicas excepcionales con un profundo
                  entendimiento de la sostenibilidad en la moda.
                </p>
                <button className="font-montserrat text-sm sm:text-base px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors">
                  Aplicar Ahora
                </button>
              </div>

              {/* Position */}
              <div className="border border-gray-200 p-6 sm:p-8">
                <h3 className="font-bodoni text-xl sm:text-2xl mb-3">
                  Visual Merchandiser
                </h3>
                <p className="font-montserrat text-gray-600 mb-4 text-sm sm:text-base">
                  Barcelona, España · Tiempo Completo
                </p>
                <p className="font-montserrat text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                  Buscamos un visual merchandiser creativo para supervisar la
                  presentación de productos en nuestra tienda insignia. El
                  candidato ideal tendrá experiencia en retail de lujo y un ojo
                  excepcional para el detalle.
                </p>
                <button className="font-montserrat text-sm sm:text-base px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors">
                  Aplicar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bodoni text-3xl sm:text-4xl text-center mb-12 sm:mb-16">
            Nuestros Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <h3 className="font-bodoni text-xl sm:text-2xl mb-4">
                Creatividad
              </h3>
              <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                Fomentamos un ambiente donde las ideas innovadoras florecen y la
                creatividad no tiene límites.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bodoni text-xl sm:text-2xl mb-4">
                Sostenibilidad
              </h3>
              <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                Nos comprometemos con prácticas sostenibles en cada aspecto de
                nuestro negocio.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bodoni text-xl sm:text-2xl mb-4">
                Excelencia
              </h3>
              <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                Buscamos la excelencia en todo lo que hacemos, desde el diseño
                hasta el servicio al cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
