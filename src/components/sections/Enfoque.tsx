import { Brain, Sparkles, Users } from "lucide-react";

import { motion } from "framer-motion";

export default function Enfoque() {
  const points = [
    {
      icon: <Brain size={32} />,
      title: "Acompañamiento Integral",
      desc: "Trabajamos contigo para identificar lo que te duele, te preocupa o te limita, brindándote herramientas prácticas para afrontar los desafíos emocionales de tu día a día.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Procesos con Sentido",
      desc: "No solo atendemos síntomas, acompañamos procesos. Buscamos que desarrolles recursos emocionales que te permitan crecer, fortalecerte y avanzar a tu propio ritmo.",
    },
    {
      icon: <Users size={32} />,
      title: "Vínculo Terapéutico Seguro",
      desc: "Creemos que la confianza, la escucha y el respeto son la base de cualquier cambio profundo y duradero.",
    },
  ];

  return (
    <section id="enfoque" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 serif">
            Un enfoque centrado <span className="italic text-accent">en ti</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Entendemos la terapia como un proceso de acompañamiento consciente, donde caminamos contigo para ayudarte a comprender, ordenar y transformar tu mundo interno en un espacio seguro y profesional. Te enseña a reconocer pensamientos automáticos o distorsiones que te hacen sentir mal.
          </p>
        </div>

        {/* Sección: Ir a terapia es ordenar */}
        <div className="mb-12">
          <div className="bg-blue-50/50 rounded-[2.5rem] p-6 md:p-12 border border-blue-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 serif">Ir a terapia es ordenar:</h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
              <div className="flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-blue-100">
                <span className="text-2xl">🧠</span>
                <span className="font-bold text-gray-700">Lo que piensas</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-blue-100">
                <span className="text-2xl">❤️</span>
                <span className="font-bold text-gray-700">Lo que sientes</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-blue-100">
                <span className="text-2xl">🛋️</span>
                <span className="font-bold text-gray-700">Lo que haces</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {points.map((point, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-6 md:p-10 rounded-3xl bg-serene border-2 border-blue-400 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="text-accent mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 serif">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
      </div>
    </section>
  );
}
