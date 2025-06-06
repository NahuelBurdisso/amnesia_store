export default function Returns() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">
            Devoluciones e Intercambios
          </h1>
          <p className="font-montserrat max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            Política de devoluciones simple y transparente para tu tranquilidad.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Returns Policy */}
            <div className="mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8 text-center">
                Nuestra Política
              </h2>
              <div className="space-y-6">
                <p className="font-montserrat text-gray-600 text-sm sm:text-base leading-relaxed">
                  En AMNESIA, queremos que estés completamente satisfecho con tu
                  compra. Aceptamos devoluciones dentro de los 30 días
                  posteriores a la recepción de tu pedido. Los artículos deben
                  estar sin usar, con todas las etiquetas originales y en su
                  embalaje original.
                </p>
                <p className="font-montserrat text-gray-600 text-sm sm:text-base leading-relaxed">
                  Para los intercambios, ofrecemos un proceso simple que te
                  permite seleccionar un tamaño o color diferente del mismo
                  artículo sin costo adicional.
                </p>
              </div>
            </div>

            {/* Process Steps */}
            <div className="mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8 text-center">
                Proceso de Devolución
              </h2>
              <div className="space-y-8">
                <div className="border border-gray-200 p-6 sm:p-8">
                  <h3 className="font-bodoni text-xl mb-4">
                    1. Inicia tu Devolución
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Accede a tu cuenta y selecciona el pedido que deseas
                    devolver. También puedes contactar con nuestro servicio de
                    atención al cliente para iniciar el proceso.
                  </p>
                </div>

                <div className="border border-gray-200 p-6 sm:p-8">
                  <h3 className="font-bodoni text-xl mb-4">
                    2. Empaqueta tu Artículo
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Coloca el artículo en su embalaje original con todas las
                    etiquetas intactas. Incluye el formulario de devolución que
                    recibiste con tu pedido.
                  </p>
                </div>

                <div className="border border-gray-200 p-6 sm:p-8">
                  <h3 className="font-bodoni text-xl mb-4">
                    3. Envía el Paquete
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Utiliza la etiqueta de devolución prepagada que te
                    proporcionamos y envía el paquete a través de nuestro
                    servicio de mensajería asociado.
                  </p>
                </div>

                <div className="border border-gray-200 p-6 sm:p-8">
                  <h3 className="font-bodoni text-xl mb-4">4. Reembolso</h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Una vez recibida y procesada tu devolución, recibirás el
                    reembolso en tu método de pago original en un plazo de 5-7
                    días hábiles.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-8 mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8 text-center">
                Información Importante
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bodoni text-xl mb-3">
                    Artículos en Rebajas
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Los artículos comprados durante el período de rebajas pueden
                    ser devueltos siguiendo nuestra política estándar.
                  </p>
                </div>
                <div>
                  <h3 className="font-bodoni text-xl mb-3">Ropa Interior</h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Por razones de higiene, no aceptamos devoluciones de ropa
                    interior o trajes de baño sin el protector higiénico.
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
                ayudarte con cualquier consulta sobre devoluciones o
                intercambios.
              </p>
              <a
                href="mailto:returns@amnesia.com"
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
