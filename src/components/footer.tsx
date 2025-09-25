import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Send } from 'react-feather';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 playfair">Farbstatt</h3>
            <p className="text-gray-400">
              Ihre kreative Werkstatt für Keramikmalen in Zürich.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 playfair">Öffnungszeiten</h3>
            <p className="text-gray-400">Mo-Fr: 10:00 - 18:00</p>
            <p className="text-gray-400">Sa: 09:00 - 16:00</p>
            <p className="text-gray-400">So: Geschlossen</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 playfair">Kontakt</h3>
            <p className="text-gray-400 flex items-center">
              <MapPin className="mr-2" size={16} /> Musterstrasse 123, 8000 Zürich
            </p>
            <p className="text-gray-400 flex items-center mt-2">
              <Phone className="mr-2" size={16} /> +41 44 123 45 67
            </p>
            <p className="text-gray-400 flex items-center mt-2">
              <Mail className="mr-2" size={16} /> info@farbstatt.ch
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 playfair">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Bleiben Sie auf dem Laufenden über unsere Angebote und Workshops.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Ihre E-Mail"
                className="px-4 py-2 rounded-l-md w-full text-gray-900"
              />
              <button
                type="submit"
                className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-all"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Farbstatt. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}