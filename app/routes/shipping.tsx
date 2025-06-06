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
            Todo lo que necesitas saber sobre nuestros servicios de envío
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Shipping Options */}
            <div className="mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8">
                Opciones de Envío
              </h2>
              <div className="space-y-6">
                <div className="border border-gray-200 p-6">
                  <h3 className="font-bodoni text-xl mb-3">Envío Estándar</h3>
                  <p className="font-montserrat text-gray-600 mb-2 text-sm sm:text-base">
                    3-5 días laborables
                  </p>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    5€ (Gratis en pedidos superiores a 75€)
                  </p>
                </div>

                <div className="border border-gray-200 p-6">
                  <h3 className="font-bodoni text-xl mb-3">Envío Express</h3>
                  <p className="font-montserrat text-gray-600 mb-2 text-sm sm:text-base">
                    1-2 días laborables
                  </p>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    10€
                  </p>
                </div>
              </div>
            </div>

            {/* Tracking */}
            <div className="mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-4">
                Seguimiento de Pedidos
              </h2>
              <p className="font-montserrat text-gray-600 mb-6 text-sm sm:text-base">
                Una vez que tu pedido haya sido enviado, recibirás un email con
                el número de seguimiento para rastrear tu paquete en tiempo
                real.
              </p>
            </div>

            {/* Shipping Areas */}
            <div className="mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-4">
                Áreas de Envío
              </h2>
              <p className="font-montserrat text-gray-600 mb-6 text-sm sm:text-base">
                Actualmente realizamos envíos a:
              </p>
              <ul className="font-montserrat text-gray-600 space-y-2 text-sm sm:text-base">
                <li>• España Peninsular</li>
                <li>• Islas Baleares</li>
                <li>• Islas Canarias</li>
                <li>• Portugal</li>
                <li>• Francia</li>
                <li>• Italia</li>
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8">
                Preguntas Frecuentes
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bodoni text-xl mb-2">
                    ¿Cuándo recibiré mi pedido?
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Los tiempos de entrega varían según el método de envío
                    seleccionado. El envío estándar tarda entre 3-5 días
                    laborables, mientras que el envío express tarda 1-2 días
                    laborables.
                  </p>
                </div>

                <div>
                  <h3 className="font-bodoni text-xl mb-2">
                    ¿Cómo puedo hacer seguimiento de mi pedido?
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Recibirás un email con el número de seguimiento una vez que
                    tu pedido haya sido enviado. También puedes acceder a esta
                    información desde tu cuenta.
                  </p>
                </div>

                <div>
                  <h3 className="font-bodoni text-xl mb-2">
                    ¿Qué pasa si no estoy en casa cuando llegue mi pedido?
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    El transportista intentará la entrega hasta tres veces. Si
                    no es posible realizar la entrega, el paquete se dejará en
                    el punto de recogida más cercano.
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
