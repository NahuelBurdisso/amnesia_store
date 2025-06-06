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
            Política de devoluciones simple y transparente para tu tranquilidad
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Returns Policy */}
            <div className="mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8">
                Política de Devoluciones
              </h2>
              <div className="space-y-6">
                <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                  En AMNESIA, queremos que estés completamente satisfecho con tu
                  compra. Aceptamos devoluciones dentro de los 30 días
                  posteriores a la recepción de tu pedido.
                </p>
                <div className="border border-gray-200 p-6">
                  <h3 className="font-bodoni text-xl mb-4">Condiciones</h3>
                  <ul className="font-montserrat text-gray-600 space-y-2 text-sm sm:text-base">
                    <li>
                      • Las prendas deben estar sin usar y con todas las
                      etiquetas originales
                    </li>
                    <li>• El embalaje original debe estar intacto</li>
                    <li>• Debes incluir el recibo o comprobante de compra</li>
                    <li>
                      • Los artículos en rebajas solo pueden ser devueltos por
                      defectos de fabricación
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Exchange Process */}
            <div className="mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8">
                Proceso de Intercambio
              </h2>
              <div className="space-y-6">
                <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                  Si necesitas un tamaño o color diferente, estaremos encantados
                  de ayudarte con el intercambio.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border border-gray-200 p-6">
                    <h3 className="font-bodoni text-xl mb-4">Online</h3>
                    <ol className="font-montserrat text-gray-600 space-y-2 text-sm sm:text-base">
                      <li>1. Accede a tu cuenta</li>
                      <li>2. Selecciona el pedido</li>
                      <li>3. Elige &quot;Solicitar Intercambio&quot;</li>
                      <li>4. Sigue las instrucciones</li>
                    </ol>
                  </div>
                  <div className="border border-gray-200 p-6">
                    <h3 className="font-bodoni text-xl mb-4">En Tienda</h3>
                    <ol className="font-montserrat text-gray-600 space-y-2 text-sm sm:text-base">
                      <li>1. Visita cualquier tienda</li>
                      <li>2. Presenta el recibo</li>
                      <li>3. Selecciona el nuevo artículo</li>
                      <li>4. Realiza el intercambio</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Information */}
            <div className="mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8">
                Información de Reembolso
              </h2>
              <div className="space-y-6">
                <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                  Los reembolsos se procesarán utilizando el mismo método de
                  pago de la compra original.
                </p>
                <div className="border border-gray-200 p-6">
                  <h3 className="font-bodoni text-xl mb-4">
                    Plazos de Reembolso
                  </h3>
                  <ul className="font-montserrat text-gray-600 space-y-2 text-sm sm:text-base">
                    <li>• Tarjeta de crédito: 5-7 días hábiles</li>
                    <li>• PayPal: 2-3 días hábiles</li>
                    <li>• Transferencia bancaria: 5-7 días hábiles</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8">
                Preguntas Frecuentes
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bodoni text-xl mb-2">
                    ¿Cuánto tiempo tengo para devolver un artículo?
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Tienes 30 días desde la recepción de tu pedido para realizar
                    la devolución.
                  </p>
                </div>

                <div>
                  <h3 className="font-bodoni text-xl mb-2">
                    ¿La devolución tiene algún costo?
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Las devoluciones son gratuitas cuando utilizas nuestra
                    etiqueta de devolución prepagada o las realizas en tienda.
                  </p>
                </div>

                <div>
                  <h3 className="font-bodoni text-xl mb-2">
                    ¿Qué pasa si recibo un artículo defectuoso?
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Si recibes un artículo defectuoso, contáctanos
                    inmediatamente. Cubriremos los gastos de envío y te
                    enviaremos un reemplazo o realizaremos un reembolso
                    completo.
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
