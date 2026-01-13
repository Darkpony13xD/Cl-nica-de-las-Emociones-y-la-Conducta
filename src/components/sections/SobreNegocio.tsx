import { Heart, Sparkles, Users } from "lucide-react";

import { motion } from "framer-motion";

export default function SobreNegocio() {
  const datos = [
    {
      icon: <Heart size={40} />,
      title: "Misión",
      desc: "Brindar atención psicológica integral y ética, ayudando a las personas a comprender, regular y fortalecer sus emociones y conductas para mejorar su calidad de vida.",
      color: "border-t-purple-500",
    },
    {
      icon: <Sparkles size={40} />,
      title: "Visión",
      desc: "Ser una clínica reconocida por su calidez humana, profesionalismo y resultados positivos en el bienestar emocional de nuestros pacientes.",
      color: "border-t-blue-500",
    },
    {
      icon: <Users size={40} />,
      title: "Valores",
      desc: (
        <ul className="text-left space-y-2 mt-2">
          <li><strong className="text-gray-900">Empatía:</strong> Escuchamos y comprendemos sin juzgar.</li>
          <li><strong className="text-gray-900">Respeto:</strong> Valoramos la dignidad y diversidad de cada persona.</li>
          <li><strong className="text-gray-900">Profesionalismo:</strong> Actuamos con ética y compromiso.</li>
          <li><strong className="text-gray-900">Confidencialidad:</strong> Protegemos la privacidad y confianza.</li>
        </ul>
      ),
      color: "border-t-pink-500",
    },
  ];

  const principios = [
    { emoji: "🎯", t: "Compromiso profesional", d: "Atención responsable, ética y enfocada en el bienestar del paciente.", bg: "bg-red-50" },
    { emoji: "🤍", t: "Sensibilidad y empatía", d: "Acompañamiento cercano, respetando emociones, tiempos y procesos.", bg: "bg-blue-50" },
    { emoji: "🔒", t: "Confianza y confidencialidad", d: "Cuidamos la privacidad como base fundamental de cada terapia.", bg: "bg-yellow-50" },
    { emoji: "🌱", t: "Desarrollo personal", d: "Impulsamos el crecimiento emocional y conductual de manera integral.", bg: "bg-green-50" },
  ];

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

          <div className="mt-16 grid lg:grid-cols-12 gap-12 items-start">
            {/* Columna Historia (Más ancha) */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4 serif text-gray-900">
                  Nuestra Historia
                </h3>
                <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8" />
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    La <span className="font-bold text-purple-600">Clínica de las Emociones y la Conducta</span> nace con el propósito de acompañar a las personas en el cuidado de su salud emocional y conductual, entendiendo que el bienestar mental es clave para una vida equilibrada y consciente.
                  </p>
                  <p>
                    Desde el inicio, hemos trabajado para construir un <span className="font-bold text-gray-900">espacio seguro, humano y confiable</span>, donde cada paciente se sienta escuchado, comprendido y acompañado en su proceso personal, sin juicios y con total respeto.
                  </p>
                  <p>
                    Nuestro modelo de atención se basa en una visión integral, combinando el <span className="font-bold text-blue-600">trato humano y cercano</span> con herramientas terapéuticas actualizadas, enfocadas en generar cambios reales y sostenibles en la vida de quienes confían en nosotros.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Columna Principios (Lateral) */}
            <div className="lg:col-span-5 space-y-6">
              <motion.h4 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3"
              >
                <span className="w-8 h-1 bg-purple-500 rounded-full inline-block"></span>
                Nuestros Principios
              </motion.h4>

              <div className="space-y-4">
                {principios.map((p, i) => (
                  <motion.div
                    key={p.t}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex gap-4 items-start"
                  >
                    <div className={`text-2xl shrink-0 ${p.bg} w-10 h-10 flex items-center justify-center rounded-lg`}>
                      {p.emoji}
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-sm">{p.t}</h5>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{p.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
