export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">
            Nuestra Historia
          </h1>
          <p className="font-montserrat max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            Desde 2010, AMNESIA ha sido sinónimo de elegancia atemporal y
            calidad excepcional en el mundo de la moda contemporánea.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="font-bodoni text-3xl sm:text-4xl lg:text-5xl">
                Una Visión de Excelencia
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="font-montserrat text-gray-600 leading-relaxed text-sm sm:text-base">
                  Fundada en Barcelona por los diseñadores Elena Martínez y
                  Carlos Valdés, AMNESIA nació de una visión compartida: crear
                  piezas que trascienden las tendencias pasajeras y se
                  convierten en elementos eternos del guardarropa moderno.
                </p>
                <p className="font-montserrat text-gray-600 leading-relaxed text-sm sm:text-base">
                  Nuestra filosofía se basa en la creencia de que la verdadera
                  moda no debe gritar para ser notada. En su lugar, susurra con
                  confianza, hablando a través de la calidad de los materiales,
                  la precisión del corte y la atemporalidad del diseño.
                </p>
                <p className="font-montserrat text-gray-600 leading-relaxed text-sm sm:text-base">
                  Cada pieza en nuestra colección es el resultado de meses de
                  investigación, desarrollo y refinamiento. Trabajamos
                  exclusivamente con artesanos locales y proveedores éticos,
                  asegurando que cada prenda no solo sea hermosa, sino también
                  responsablemente creada.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Atelier AMNESIA"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24">
            <div className="text-center sm:text-left">
              <h3 className="font-bodoni text-xl sm:text-2xl mb-3 sm:mb-4">
                Calidad Sin Compromiso
              </h3>
              <p className="font-montserrat text-gray-600 text-sm sm:text-base leading-relaxed">
                Utilizamos únicamente los mejores materiales, desde algodones
                orgánicos hasta sedas naturales, asegurando que cada prenda
                mantenga su belleza a través del tiempo.
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-bodoni text-xl sm:text-2xl mb-3 sm:mb-4">
                Sostenibilidad Consciente
              </h3>
              <p className="font-montserrat text-gray-600 text-sm sm:text-base leading-relaxed">
                Creemos en la moda responsable. Nuestros procesos de producción
                minimizan el impacto ambiental mientras apoyamos a comunidades
                artesanales locales.
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-bodoni text-xl sm:text-2xl mb-3 sm:mb-4">
                Diseño Atemporal
              </h3>
              <p className="font-montserrat text-gray-600 text-sm sm:text-base leading-relaxed">
                Nuestras creaciones están diseñadas para perdurar más allá de
                las estaciones, convirtiéndose en piezas fundamentales que nunca
                pasan de moda.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="font-bodoni text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12">
              El Equipo Creativo
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="aspect-[3/4] mb-4 sm:mb-6 overflow-hidden mx-auto max-w-sm">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616c666e2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Elena Martínez"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <h3 className="font-bodoni text-xl sm:text-2xl mb-2">
                  Elena Martínez
                </h3>
                <p className="font-montserrat text-gray-600 text-sm mb-3 sm:mb-4">
                  Directora Creativa y Co-fundadora
                </p>
                <p className="font-montserrat text-gray-600 text-sm leading-relaxed">
                  Con más de 15 años de experiencia en alta costura, Elena
                  aporta una visión única que combina tradición artesanal con
                  innovación contemporánea.
                </p>
              </div>

              <div className="text-center">
                <div className="aspect-[3/4] mb-4 sm:mb-6 overflow-hidden mx-auto max-w-sm">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Carlos Valdés"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <h3 className="font-bodoni text-xl sm:text-2xl mb-2">
                  Carlos Valdés
                </h3>
                <p className="font-montserrat text-gray-600 text-sm mb-3 sm:mb-4">
                  Director de Diseño y Co-fundador
                </p>
                <p className="font-montserrat text-gray-600 text-sm leading-relaxed">
                  Especialista en patrones y construcción, Carlos se enfoca en
                  la perfecta proporción y ajuste que caracterizan cada pieza de
                  AMNESIA.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className="text-center py-12 sm:py-16 lg:py-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <blockquote className="max-w-3xl mx-auto">
              <p className="font-bodoni text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 text-gray-800 leading-relaxed">
                &ldquo;La moda pasa, pero el estilo es eterno. Creamos piezas
                que hablan de la persona que las lleva, no de la temporada en la
                que fueron creadas.&rdquo;
              </p>
              <cite className="font-montserrat text-gray-600 text-sm sm:text-base">
                — Elena Martínez, Directora Creativa
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bodoni text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8">
            Conecta con Nosotros
          </h2>
          <p className="font-montserrat mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Nos encanta conocer a quienes aprecian la moda consciente. Visita
            nuestro atelier en Barcelona o contáctanos para descubrir más sobre
            nuestra filosofía de diseño.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12">
            <div>
              <h3 className="font-montserrat font-medium mb-2 text-sm sm:text-base">
                Atelier Barcelona
              </h3>
              <p className="font-montserrat text-gray-300 text-sm">
                Carrer de la Creativitat, 123
                <br />
                08001 Barcelona, España
              </p>
            </div>

            <div>
              <h3 className="font-montserrat font-medium mb-2 text-sm sm:text-base">
                Contacto
              </h3>
              <p className="font-montserrat text-gray-300 text-sm">
                Email: hola@amnesia.com
                <br />
                Teléfono: +34 93 123 4567
              </p>
            </div>

            <div>
              <h3 className="font-montserrat font-medium mb-2 text-sm sm:text-base">
                Horarios
              </h3>
              <p className="font-montserrat text-gray-300 text-sm">
                Lun - Vie: 10:00 - 19:00
                <br />
                Sáb: 10:00 - 15:00
              </p>
            </div>
          </div>

          <a
            href="mailto:hola@amnesia.com"
            className="inline-block border border-white px-6 sm:px-8 py-3 font-montserrat text-sm hover:bg-white hover:text-black transition-colors"
          >
            Envíanos un Mensaje
          </a>
        </div>
      </section>
    </div>
  );
}
