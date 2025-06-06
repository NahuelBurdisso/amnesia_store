export default function Shipping() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">
            Información de Envío
          </h1>
          <p className="font-montserrat max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            Todo lo que necesitas saber sobre nuestros servicios de envío y
            entrega.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Shipping Methods */}
            <div className="mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8 text-center">
                Métodos de Envío
              </h2>
              <div className="space-y-8">
                <div className="border border-gray-200 p-6 sm:p-8">
                  <h3 className="font-bodoni text-xl mb-4">Envío Estándar</h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base mb-2">
                    3-5 días hábiles
                  </p>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Gratuito para pedidos superiores a 150€
                  </p>
                  <p className="font-montserrat text-sm sm:text-base mt-4">
                    5€ para pedidos inferiores a 150€
                  </p>
                </div>

                <div className="border border-gray-200 p-6 sm:p-8">
                  <h3 className="font-bodoni text-xl mb-4">Envío Express</h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base mb-2">
                    1-2 días hábiles
                  </p>
                  <p className="font-montserrat text-sm sm:text-base">
                    15€ para todos los pedidos
                  </p>
                </div>

                <div className="border border-gray-200 p-6 sm:p-8">
                  <h3 className="font-bodoni text-xl mb-4">
                    Recogida en Tienda
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base mb-2">
                    Disponible en 24 horas
                  </p>
                  <p className="font-montserrat text-sm sm:text-base">
                    Gratuito para todos los pedidos
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="space-y-8 mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8 text-center">
                Información Adicional
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bodoni text-xl mb-3">Áreas de Envío</h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Realizamos envíos a toda España peninsular, Islas Baleares,
                    Islas Canarias, Ceuta y Melilla. Para envíos
                    internacionales, por favor contacta con nuestro servicio de
                    atención al cliente.
                  </p>
                </div>

                <div>
                  <h3 className="font-bodoni text-xl mb-3">
                    Seguimiento de Pedidos
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Una vez realizado tu pedido, recibirás un correo electrónico
                    con el número de seguimiento para rastrear tu envío en
                    tiempo real.
                  </p>
                </div>

                <div>
                  <h3 className="font-bodoni text-xl mb-3">Embalaje</h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Todos nuestros productos se envían en embalajes sostenibles
                    y reciclables, cuidadosamente preparados para proteger tus
                    prendas.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h2 className="font-bodoni text-2xl sm:text-3xl mb-4">
                ¿Necesitas Ayuda?
              </h2>
              <p className="font-montserrat text-gray-600 text-sm sm:text-base mb-6">
                Nuestro equipo de atención al cliente está disponible para
                ayudarte con cualquier consulta sobre envíos.
              </p>
              <a
                href="mailto:shipping@amnesia.com"
                className="inline-block bg-black text-white px-6 py-3 font-montserrat text-sm hover:bg-gray-900 transition-colors"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
