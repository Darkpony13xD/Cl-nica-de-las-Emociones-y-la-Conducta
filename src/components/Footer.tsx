import React from 'react';
import { Facebook, MessageSquare, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Nombre Clínica */}
          <div>
            <div className="text-2xl font-extrabold serif bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">Clínica de las Emociones y la Conducta</div>
            <p className="text-gray-600 text-sm">Psicoterapia humanista e integrativa para tu bienestar emocional.</p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>📞 <a href="tel:+34600000000" className="hover:text-blue-500 transition-colors">+34 600 000 000</a></p>
              <p>📧 <a href="mailto:hola@serenamente.com" className="hover:text-blue-500 transition-colors">hola@serenamente.com</a></p>
              <p>📍 Madrid, España</p>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Enlaces</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors block">Privacidad</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors block">Cookies</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors block">Términos</a>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors p-2 bg-gray-200 rounded-lg hover:bg-blue-100"><Facebook size={20} /></a>
              <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors p-2 bg-gray-200 rounded-lg hover:bg-green-100"><MessageSquare size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors p-2 bg-gray-200 rounded-lg hover:bg-pink-100"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors p-2 bg-gray-200 rounded-lg hover:bg-blue-100"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-300 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Clínica de las Emociones y la Conducta. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
