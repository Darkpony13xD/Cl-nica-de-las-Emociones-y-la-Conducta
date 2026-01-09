import { motion } from "framer-motion";
import { Heart, Sparkles, Users } from "lucide-react";

export default function SobreNegocio() {
  const datos = [
    {
      icon: <Heart size={40} />,
      title: "Misión",
      desc: "Proporcionar psicoterapia de calidad que transforme vidas y fortalezca la salud mental integral.",
    },
    {
      icon: <Sparkles size={40} />,
      title: "Visión",
      desc: "Ser la clínica de referencia en psicoterapia humanista, reconocida por excelencia.",
    },
    {
      icon: <Users size={40} />,
      title: "Valores",
      desc: "Empatía, profesionalismo, confidencialidad y respeto mutuo en cada sesión.",
    },
  ];

  return (
    <section
      id="sobre-negocio"
      className="py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-transparent blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-transparent blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 serif bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Sobre Nosotros
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Descubre nuestra misión, visión y el compromiso que nos define en el cuidado de tu bienestar emocional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {datos.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(181, 8, 176, 0.15)" }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md transition-all hover:border-purple-200"
              >
                <div className="text-purple-600 mb-6 bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 serif text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-8 serif text-gray-900">Nuestra Historia</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  La{" "}
                  <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Clínica de las Emociones y la Conducta
                  </span>{" "}
                  fue fundada con la convicción de que la salud mental es fundamental para una vida plena y significativa.
                </p>
                <p>
                  Desde nuestros inicios, nos hemos dedicado a proporcionar un{" "}
                  <span className="font-bold">espacio seguro, acogedor y profesional</span>{" "}
                  donde cada persona pueda explorar sus emociones y fortalecer su bienestar.
                </p>
                <p>
                  Nuestro enfoque integrativo combina la{" "}
                  <span className="font-bold text-blue-600">calidez humanista</span>{" "}
                  con las técnicas más efectivas basadas en evidencia científica.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-200/50">
                <div className="space-y-4">
                  {[
                    { emoji: "🎯", t: "Profesionalidad", d: "Equipo altamente capacitado con experiencia en psicoterapia" },
                    { emoji: "💙", t: "Empatía", d: "Escucha activa y genuino interés en tu proceso" },
                    { emoji: "🔒", t: "Confidencialidad", d: "Tu privacidad es sagrada en cada sesión" },
                    { emoji: "🌱", t: "Crecimiento", d: "Apoyo integral para tu transformación personal" },
                  ].map((x) => (
                    <div key={x.t} className="flex items-start gap-4">
                      <div className="text-2xl">{x.emoji}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{x.t}</h4>
                        <p className="text-gray-600 text-sm">{x.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
