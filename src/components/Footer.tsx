import { Facebook, Heart, Instagram } from "lucide-react";

import React from "react";

const Footer: React.FC = () => {
  // ✅ Pon aquí tus links reales
  const SOCIAL_LINKS = {
    facebook: "https://www.facebook.com/profile.php?id=100067239251887",
    instagram: "https://www.facebook.com/profile.php?id=100067239251887",
  };

  return (
    <footer className="py-12 bg-gradient-to-b from-white to-purple-50 border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Nombre Clínica */}
          <div className="flex flex-col items-center text-center">
            <div className="text-2xl font-extrabold serif bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Clínica de las Emociones y la Conducta
            </div>
            <p className="text-gray-600 text-sm">
              Psicoterapia basada en evidencia e integrativa para tu bienestar emocional.
            </p>
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-bold text-gray-800 mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-gray-600 flex flex-col items-center">
              <p>
                📞{" "}
                <a
                  href="tel:+525512270630"
                  className="hover:text-blue-500 transition-colors"
                >
                  55 1227 0630
                </a>
              </p>
              <p>
                📧{" "}
                <a
                  href="mailto:serviciospsicologicosma@gmail.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  serviciospsicologicosma@gmail.com
                </a>
              </p>
              <p>📍 Av. Veracruz Norte #2 esq Jalisco, Villa Milpa Alta.</p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-bold text-gray-800 mb-4">Síguenos</h3>
            <div className="flex gap-4 justify-center">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-600 transition-colors p-2 bg-gray-200 rounded-lg hover:bg-blue-100"
              >
                <Facebook size={20} />
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-500 transition-colors p-2 bg-gray-200 rounded-lg hover:bg-pink-100"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-purple-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Clínica de las Emociones y la Conducta.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            Hecho con <Heart size={14} className="text-red-400 fill-red-400" /> para tu bienestar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
