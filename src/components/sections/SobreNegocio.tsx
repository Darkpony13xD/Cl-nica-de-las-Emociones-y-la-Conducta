import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Sparkles, Users, X } from "lucide-react";

import { useState } from "react";

export default function SobreNegocio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const datos = [
    {
      icon: <Heart size={40} />,
      title: "Misión",
      desc: "Brindar servicios, éticos, científicos e integrales. Promoviendo la salud mental-emocional a nivel social e individual",
      color: "border-t-purple-500",
    },
    {
      icon: <Sparkles size={40} />,
      title: "Visión",
      desc: "Ser una clínica reconocida por su profesionalismo, innovación, sensibilidad y confianza, que aporte a la comunidad referentes dignos de atención psicológica y de transformación personal y colectiva.",
      color: "border-t-blue-500",
    },
    {
      icon: <Users size={40} />,
      title: "Valores",
      desc: (
        <ul className="text-left space-y-2 mt-2">
          <li><strong className="text-gray-900">Profesionalismo:</strong> Actuamos con ética, rigor científico y compromiso.</li>
          <li><strong className="text-gray-900">Innovación:</strong> Integramos herramientas terapéuticas actuales y efectivas.</li>
          <li><strong className="text-gray-900">Sensibilidad:</strong> Acompañamos con empatía y respeto profundo.</li>
          <li><strong className="text-gray-900">Confianza:</strong> Construimos un espacio seguro, confidencial y transparente.</li>
        </ul>
      ),
      color: "border-t-pink-500",
    },
  ];

  const galeria = [
    "/galeria/1.jpeg",
    "/galeria/2.png",
    "/galeria/3.png",
    "/galeria/4.png",
    "/galeria/5.png",
    "/galeria/6.png",
    "/galeria/7.jpeg",  
    "/galeria/8.jpeg",
    "/galeria/9.jpeg",
    "/galeria/10.jpeg",
    "/galeria/11.jpeg",
    "/galeria/12.jpeg",
    "/galeria/13.jpeg",
    "/galeria/14.jpeg",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galeria.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galeria.length) % galeria.length);
  };

  return (
    <section
      id="sobre-negocio"
      className="py-12 bg-gradient-to-b from-white via-purple-50 to-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-transparent blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-transparent blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 serif bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Sobre Nosotros
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Descubre nuestra misión, visión y el compromiso que nos define en el cuidado de tu bienestar emocional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {datos.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(181, 8, 176, 0.15)" }}
                className={`bg-white rounded-2xl p-8 border border-gray-100 border-t-4 ${item.color} shadow-md transition-all`}
              >
                <div className="text-purple-600 mb-6 bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 serif text-gray-900">{item.title}</h3>
                <div className="text-gray-600 leading-relaxed text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-12 items-start">
            {/* Columna Historia (Más ancha) */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4 serif text-gray-900">
                  Nuestra Historia
                </h3>
                <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8" />
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
                  <p>
                    La <span className="font-bold text-purple-600">Clínica de las Emociones y la Conducta</span> nace con el propósito de acompañar a las personas en el cuidado de su salud emocional y conductual, entendiendo que el bienestar mental es clave para una vida equilibrada y consciente.
                  </p>
                  <p>
                    Desde el inicio, hemos trabajado para construir un <span className="font-bold text-gray-900">espacio seguro, humano y confiable</span>, donde cada paciente se sienta escuchado, comprendido y acompañado en su proceso personal, sin juicios y con total respeto.
                  </p>
                  <p>
                    Nuestro modelo de atención ayuda a identificar y cambiar patrones de pensamiento y comportamiento negativos o poco útiles para manejar problemas específicos, conectando cómo piensas, sientes y actúas para reducir síntomas de depresión, ansiedad, estrés, trastornos alimentarios y dolor crónico, enseñando habilidades para enfrentar desafíos futuros y mejorar el bienestar general.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Columna Galería (Lateral) */}
            <div className="lg:col-span-6">
              <motion.h4
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3"
              >
                <span className="w-8 h-1 bg-purple-500 rounded-full inline-block"></span>
                Un espacio para ti
              </motion.h4>

              <div className="relative h-[500px]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={galeria[currentIndex]}
                      alt="Instalaciones Clínica"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-2xl shadow-md border border-gray-100 cursor-pointer"
                      onClick={() => setSelectedImage(galeria[currentIndex])}
                    />
                  </motion.div>
                </AnimatePresence>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-gray-900 rounded-full p-2 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-gray-900 rounded-full p-2 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              loading="lazy"
              alt="Galería ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
