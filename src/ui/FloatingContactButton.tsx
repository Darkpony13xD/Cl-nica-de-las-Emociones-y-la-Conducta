import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { MessageCircle } from "lucide-react";

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Número configurado para WhatsApp
  const WHATSAPP_NUMBER = "525512270630";
  const message = encodeURIComponent("Hola, quisiera más información sobre sus servicios.");

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          {/* Globo de texto (Rosita) */}
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.8 }}
            className="hidden md:block bg-pink-500 text-white px-4 py-2 rounded-2xl shadow-lg font-bold text-sm"
          >
            ¡Escríbenos!
          </motion.div>

          {/* Botón WhatsApp */}
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] flex items-center justify-center transition-shadow"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle size={32} fill="white" className="text-white" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}