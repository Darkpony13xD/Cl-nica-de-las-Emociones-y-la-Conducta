import { motion } from "framer-motion";
import { Brain, Sparkles, Users } from "lucide-react";

export default function Enfoque() {
  const points = [
    {
      icon: <Brain size={32} />,
      title: "Ciencia y Empatía",
      desc: "Baso mi práctica en evidencia científica pero siempre desde la calidez humana.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Crecimiento Personal",
      desc: "No solo tratamos síntomas, buscamos que florezcas como persona.",
    },
    {
      icon: <Users size={32} />,
      title: "Vínculo Terapéutico",
      desc: "La relación entre nosotros es la base fundamental del cambio duradero.",
    },
  ];

  return (
    <section id="enfoque" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 serif">
            Un enfoque centrado <span className="italic text-accent">en ti</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Entiendo la terapia como un viaje compartido de autodescubrimiento,
            donde mi rol es brindarte las herramientas y el espacio seguro para sanar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-serene border-2 border-blue-400 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="text-accent mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 serif">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
