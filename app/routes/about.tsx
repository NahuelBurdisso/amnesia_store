import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Acerca de Amnesia</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Somos una boutique de moda premium dedicada a ofrecerte las últimas
          tendencias y clásicos atemporales a precios accesibles.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
          <p className="text-gray-600 mb-4">
            En Amnesia, creemos que la moda debe ser accesible para todos.
            Nuestra misión es ofrecer ropa de alta calidad que combine estilo,
            comodidad y sostenibilidad a precios que no comprometan tu
            presupuesto.
          </p>
          <p className="text-gray-600">
            Trabajamos directamente con fabricantes para garantizar prácticas
            laborales justas y métodos de producción sostenibles, mientras
            mantenemos los más altos estándares de calidad en nuestros
            productos.
          </p>
        </div>
        <div className="relative aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Nuestra tienda"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Nuestros Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Calidad</h3>
            <p className="text-gray-600">
              Nunca comprometemos la calidad de nuestros productos,
              asegurándonos de que cada artículo cumpla con nuestros altos
              estándares.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Sostenibilidad</h3>
            <p className="text-gray-600">
              Estamos comprometidos a reducir nuestro impacto ambiental a través
              de prácticas y materiales sostenibles.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Enfoque en el Cliente</h3>
            <p className="text-gray-600">
              Tu satisfacción es nuestra prioridad. Nos esforzamos por brindar
              un servicio excepcional y soporte en cada paso.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <FaEnvelope className="w-8 h-8 mb-4 text-gray-600" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-gray-600">info@amnesia.com</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaPhone className="w-8 h-8 mb-4 text-gray-600" />
            <h3 className="font-bold mb-2">Teléfono</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaMapMarkerAlt className="w-8 h-8 mb-4 text-gray-600" />
            <h3 className="font-bold mb-2">Dirección</h3>
            <p className="text-gray-600">
              123 Fashion Street
              <br />
              Style City, SC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
