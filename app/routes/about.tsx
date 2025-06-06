import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Amnesia</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We are a premium fashion retailer dedicated to bringing you the latest
          trends and timeless classics at affordable prices.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At Amnesia, we believe that fashion should be accessible to
            everyone. Our mission is to provide high-quality clothing that
            combines style, comfort, and sustainability at prices that
            won&apos;t break the bank.
          </p>
          <p className="text-gray-600">
            We work directly with manufacturers to ensure fair labor practices
            and sustainable production methods, while maintaining the highest
            standards of quality in our products.
          </p>
        </div>
        <div className="relative aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Our store"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Quality</h3>
            <p className="text-gray-600">
              We never compromise on the quality of our products, ensuring that
              each item meets our high standards.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We are committed to reducing our environmental impact through
              sustainable practices and materials.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Customer Focus</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority. We strive to provide
              exceptional service and support at every step.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <FaEnvelope className="w-8 h-8 mb-4 text-gray-600" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-gray-600">info@amnesia.com</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaPhone className="w-8 h-8 mb-4 text-gray-600" />
            <h3 className="font-bold mb-2">Phone</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaMapMarkerAlt className="w-8 h-8 mb-4 text-gray-600" />
            <h3 className="font-bold mb-2">Address</h3>
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
