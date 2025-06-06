export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">
            Oportunidades
          </h1>
          <p className="font-montserrat max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            Únete a nuestro equipo y sé parte de la revolución de la moda
            sostenible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8">
                Trabaja con Nosotros
              </h2>
              <p className="font-montserrat text-gray-600 text-sm sm:text-base leading-relaxed">
                En AMNESIA, buscamos personas apasionadas que compartan nuestra
                visión de la moda sostenible y el diseño atemporal. Ofrecemos un
                ambiente de trabajo dinámico y creativo donde podrás desarrollar
                tu potencial.
              </p>
            </div>

            {/* Current Openings */}
            <div className="space-y-8">
              <h3 className="font-bodoni text-2xl sm:text-3xl mb-6">
                Posiciones Abiertas
              </h3>

              <div className="space-y-6">
                <div className="border border-gray-200 p-6 sm:p-8">
                  <h4 className="font-bodoni text-xl mb-2">
                    Diseñador/a Senior
                  </h4>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base mb-4">
                    Barcelona, España · Tiempo Completo
                  </p>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base mb-6">
                    Buscamos un diseñador senior con experiencia en moda
                    sostenible y lujo contemporáneo para liderar el desarrollo
                    de nuestras colecciones.
                  </p>
                  <a
                    href="mailto:careers@amnesia.com"
                    className="inline-block bg-black text-white px-6 py-3 font-montserrat text-sm hover:bg-gray-900 transition-colors"
                  >
                    Aplicar
                  </a>
                </div>

                <div className="border border-gray-200 p-6 sm:p-8">
                  <h4 className="font-bodoni text-xl mb-2">
                    Especialista en Sostenibilidad
                  </h4>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base mb-4">
                    Barcelona, España · Tiempo Completo
                  </p>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base mb-6">
                    Buscamos un especialista en sostenibilidad para supervisar y
                    mejorar nuestras prácticas ambientales y sociales.
                  </p>
                  <a
                    href="mailto:careers@amnesia.com"
                    className="inline-block bg-black text-white px-6 py-3 font-montserrat text-sm hover:bg-gray-900 transition-colors"
                  >
                    Aplicar
                  </a>
                </div>

                <div className="border border-gray-200 p-6 sm:p-8">
                  <h4 className="font-bodoni text-xl mb-2">
                    Visual Merchandiser
                  </h4>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base mb-4">
                    Barcelona, España · Tiempo Completo
                  </p>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base mb-6">
                    Buscamos un visual merchandiser creativo para mantener la
                    estética de nuestra marca en nuestras tiendas físicas.
                  </p>
                  <a
                    href="mailto:careers@amnesia.com"
                    className="inline-block bg-black text-white px-6 py-3 font-montserrat text-sm hover:bg-gray-900 transition-colors"
                  >
                    Aplicar
                  </a>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-16 sm:mt-20 lg:mt-24">
              <h3 className="font-bodoni text-2xl sm:text-3xl mb-8 text-center">
                Beneficios
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="font-bodoni text-lg mb-2">
                    Desarrollo Profesional
                  </h4>
                  <p className="font-montserrat text-gray-600 text-sm">
                    Oportunidades de crecimiento y formación continua.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-bodoni text-lg mb-2">
                    Ambiente Creativo
                  </h4>
                  <p className="font-montserrat text-gray-600 text-sm">
                    Espacio para innovar y expresar tu creatividad.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-bodoni text-lg mb-2">
                    Beneficios Competitivos
                  </h4>
                  <p className="font-montserrat text-gray-600 text-sm">
                    Salario competitivo y descuentos en productos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
