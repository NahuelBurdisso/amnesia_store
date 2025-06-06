export default function SizeGuide() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">
            Guía de Tallas
          </h1>
          <p className="font-montserrat max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            Encuentra tu talla perfecta con nuestra guía detallada de medidas
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* How to Measure */}
            <div className="mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8">
                Cómo Tomar tus Medidas
              </h2>
              <div className="space-y-6">
                <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                  Para garantizar el mejor ajuste, te recomendamos tomar tus
                  medidas siguiendo estas instrucciones:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border border-gray-200 p-6">
                    <h3 className="font-bodoni text-xl mb-4">Pecho</h3>
                    <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                      Mide alrededor de la parte más ancha del pecho,
                      manteniendo la cinta métrica horizontal.
                    </p>
                  </div>
                  <div className="border border-gray-200 p-6">
                    <h3 className="font-bodoni text-xl mb-4">Cintura</h3>
                    <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                      Mide alrededor de la parte más estrecha de tu cintura
                      natural.
                    </p>
                  </div>
                  <div className="border border-gray-200 p-6">
                    <h3 className="font-bodoni text-xl mb-4">Cadera</h3>
                    <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                      Mide alrededor de la parte más ancha de tus caderas.
                    </p>
                  </div>
                  <div className="border border-gray-200 p-6">
                    <h3 className="font-bodoni text-xl mb-4">Largo</h3>
                    <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                      Mide desde el hombro hasta donde deseas que llegue la
                      prenda.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Size Charts */}
            <div className="mb-16 sm:mb-20">
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8">
                Tablas de Medidas
              </h2>

              {/* Women's Sizes */}
              <div className="mb-12">
                <h3 className="font-bodoni text-2xl mb-6">Mujer</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="font-montserrat font-medium text-left py-4 px-4">
                          Talla
                        </th>
                        <th className="font-montserrat font-medium text-left py-4 px-4">
                          Pecho (cm)
                        </th>
                        <th className="font-montserrat font-medium text-left py-4 px-4">
                          Cintura (cm)
                        </th>
                        <th className="font-montserrat font-medium text-left py-4 px-4">
                          Cadera (cm)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="font-montserrat text-gray-600 text-sm sm:text-base">
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4">XS</td>
                        <td className="py-4 px-4">82-86</td>
                        <td className="py-4 px-4">64-68</td>
                        <td className="py-4 px-4">88-92</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4">S</td>
                        <td className="py-4 px-4">86-90</td>
                        <td className="py-4 px-4">68-72</td>
                        <td className="py-4 px-4">92-96</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4">M</td>
                        <td className="py-4 px-4">90-94</td>
                        <td className="py-4 px-4">72-76</td>
                        <td className="py-4 px-4">96-100</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4">L</td>
                        <td className="py-4 px-4">94-98</td>
                        <td className="py-4 px-4">76-80</td>
                        <td className="py-4 px-4">100-104</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4">XL</td>
                        <td className="py-4 px-4">98-102</td>
                        <td className="py-4 px-4">80-84</td>
                        <td className="py-4 px-4">104-108</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Men's Sizes */}
              <div>
                <h3 className="font-bodoni text-2xl mb-6">Hombre</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="font-montserrat font-medium text-left py-4 px-4">
                          Talla
                        </th>
                        <th className="font-montserrat font-medium text-left py-4 px-4">
                          Pecho (cm)
                        </th>
                        <th className="font-montserrat font-medium text-left py-4 px-4">
                          Cintura (cm)
                        </th>
                        <th className="font-montserrat font-medium text-left py-4 px-4">
                          Cadera (cm)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="font-montserrat text-gray-600 text-sm sm:text-base">
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4">XS</td>
                        <td className="py-4 px-4">86-90</td>
                        <td className="py-4 px-4">72-76</td>
                        <td className="py-4 px-4">88-92</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4">S</td>
                        <td className="py-4 px-4">90-94</td>
                        <td className="py-4 px-4">76-80</td>
                        <td className="py-4 px-4">92-96</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4">M</td>
                        <td className="py-4 px-4">94-98</td>
                        <td className="py-4 px-4">80-84</td>
                        <td className="py-4 px-4">96-100</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4">L</td>
                        <td className="py-4 px-4">98-102</td>
                        <td className="py-4 px-4">84-88</td>
                        <td className="py-4 px-4">100-104</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4">XL</td>
                        <td className="py-4 px-4">102-106</td>
                        <td className="py-4 px-4">88-92</td>
                        <td className="py-4 px-4">104-108</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div>
              <h2 className="font-bodoni text-3xl sm:text-4xl mb-8">
                Consejos para Elegir tu Talla
              </h2>
              <div className="space-y-6">
                <div className="border border-gray-200 p-6">
                  <h3 className="font-bodoni text-xl mb-4">Entre Dos Tallas</h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Si te encuentras entre dos tallas, recomendamos elegir la
                    talla más grande para un ajuste más cómodo.
                  </p>
                </div>
                <div className="border border-gray-200 p-6">
                  <h3 className="font-bodoni text-xl mb-4">Ajuste Deseado</h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Ten en cuenta el ajuste que deseas: más ajustado o más
                    holgado. Algunas prendas están diseñadas para un ajuste
                    específico.
                  </p>
                </div>
                <div className="border border-gray-200 p-6">
                  <h3 className="font-bodoni text-xl mb-4">Materiales</h3>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base">
                    Considera que algunos materiales pueden tener más o menos
                    elasticidad. Esta información se proporciona en la
                    descripción de cada prenda.
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
