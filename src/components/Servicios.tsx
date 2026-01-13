import { Calendar, Clock, ShieldCheck, Sparkles, X } from "lucide-react";

import Modal from "../ui/Modal";
import React from "react";
import { motion } from "framer-motion";

type Servicio = {
  id: string;
  title: string;
  tag: string;
  desc: string;
  bullets: string[];
  image: string;
};

const SERVICIOS: Servicio[] = [
  {
    id: "sesion50",
    title: "Terapia Psicologica Individual",
    tag: "Individual",
    desc:
      "Sesiones individuales de 50 minutos enfocadas en acompañamiento personalizado. Trabajo con herramientas de psicoterapia humanista e integrativa para apoyar cambios sostenibles.",
    bullets: ["Sesiones personalizadas", "Protocolos basados en evidencia"],
    image:
      "/logo_2.png",
  },
  {
    id: "pareja",
    title: "Terapia Ocupacional",
    tag: "Individual",
    desc:
      "Espacio para mejorar comunicación, acuerdos y manejo de conflictos. Enfoque práctico y humano para reconectar y avanzar.",
    bullets: ["Comunicación efectiva", "Herramientas para acuerdos"],
    image:
      "/logo_2.png",
  },
  {
    id: "estres",
    title: "Grupo de reflexion para hombres",
    tag: "Individual",
    desc:
      "Intervenciones basadas en evidencia para regular ansiedad/estrés: psicoeducación, estrategias de respiración y herramientas para tu día a día.",
    bullets: ["Regulación emocional", "Rutinas y estrategias prácticas"],
    image:
      "/logo_2.png",
  },
  {
    id: "familiar",
    title: "Terapia de Lenguaje",
    tag: "Individual",
    desc:
      "Espacio seguro para abordar dinámicas familiares, mejorar la convivencia y fortalecer los vínculos afectivos entre los miembros.",
    bullets: ["Resolución de conflictos", "Fortalecimiento de lazos"],
    image:
      "/logo_2.png",
  },
  {
    id: "online",
    title: "Terapia Infantil",
    tag: "Individual",
    desc:
      "Recibe apoyo psicológico profesional desde la comodidad de tu hogar, con la misma efectividad y cercanía que la terapia presencial.",
    bullets: ["Flexibilidad horaria", "Plataforma segura"],
    image:
      "/logo_2.png",
  },
];

export default function Servicios() {
  const [selected, setSelected] = React.useState<Servicio | null>(null);

  const durationById: Record<string, string> = {
    sesion50: "50 min",
    pareja: "80 min",
    estres: "50 min",
    familiar: "80 min",
    online: "50 min",
  };

  const duration = selected ? durationById[selected.id] ?? "Sesión" : "Sesión";

  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 serif">
            Servicios <span className="text-accent">Especializados</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Acompañamiento personalizado según tus necesidades.
          </p>
        </div>

        {/* TARJETAS */}
        <div className="flex flex-wrap justify-center gap-8">
          {SERVICIOS.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 group w-full md:w-[calc((100%_-_4rem)_/_3)]"
            >
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <p className="text-pink-300 font-medium text-xs uppercase tracking-widest mb-2">
                  {s.tag}
                </p>
                <h3 className="text-2xl font-bold text-white serif mb-3">
                  {s.title}
                </h3>

                <button
                  type="button"
                  onClick={() => setSelected(s)}
                  className="w-fit px-6 py-2 rounded-full text-sm font-semibold bg-white/20 text-white border border-white/30 hover:bg-[#53A2FE] hover:border-[#53A2FE] transition"
                >
                  Saber más
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <Modal
        open={!!selected}
        title={selected?.title}
        onClose={() => setSelected(null)}
      >
        {selected && (
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Imagen con overlay + marca */}
            <div className="relative rounded-3xl overflow-hidden bg-gray-100 shadow-lg">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-72 lg:h-[520px] object-cover"
              />

              {/* overlay: púrpura + azul + rosa */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#B508B0]/25 via-transparent to-[#53A2FE]/20" />

              {/* Badge inferior */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-white/80 text-xs uppercase tracking-[0.2em]">
                    {selected.tag}
                  </p>
                  <h4 className="text-white text-2xl md:text-3xl font-bold serif leading-tight truncate">
                    {selected.title}
                  </h4>
                </div>

                <div className="shrink-0 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2">
                  <div className="flex items-center gap-2 text-white">
                    <Clock size={16} />
                    <p className="text-sm font-semibold">{duration}</p>
                  </div>
                  <p className="text-white/80 text-xs">Duración estimada</p>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div>
              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border text-sm font-semibold"
                  style={{
                    backgroundColor: "rgba(83,162,254,0.12)",
                    borderColor: "rgba(83,162,254,0.22)",
                    color: "#2A6FD6",
                  }}
                >
                  <Sparkles size={16} />
                  Atención personalizada
                </span>

                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border text-sm font-semibold"
                  style={{
                    backgroundColor: "rgba(181,8,176,0.10)",
                    borderColor: "rgba(181,8,176,0.22)",
                    color: "#8B0A89",
                  }}
                >
                  <ShieldCheck size={16} />
                  Confidencialidad
                </span>

                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border text-sm font-semibold"
                  style={{
                    backgroundColor: "rgba(224,80,135,0.10)",
                    borderColor: "rgba(224,80,135,0.22)",
                    color: "#C13A71",
                  }}
                >
                  <span className="text-base">💗</span>
                  Enfoque humano
                </span>
              </div>

              <p className="text-gray-900 text-xl md:text-2xl font-bold serif mt-5">
                ¿Qué trabajaremos?
              </p>

              <p className="text-gray-700 leading-relaxed mt-3">
                {selected.desc}
              </p>

              {/* Bullets como cards con tu paleta */}
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {selected.bullets.map((b, idx) => {
                  const accent =
                    idx % 3 === 0 ? "#B508B0" : idx % 3 === 1 ? "#53A2FE" : "#E05087";

                  return (
                    <div
                      key={b}
                      className="rounded-2xl border border-gray-100 bg-white shadow-sm p-4 flex gap-3"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
                        style={{
                          background: `linear-gradient(135deg, ${accent}, rgba(0,0,0,0))`,
                          backgroundColor: accent,
                        }}
                      >
                        ✓
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900">{b}</p>
                        <p className="text-sm text-gray-600">
                          Herramientas prácticas para tu proceso.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bloque premium */}
              <div className="mt-6 rounded-3xl p-5 border"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(181,8,176,0.06), rgba(83,162,254,0.06))",
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="text-xl">🧠</div>
                  <div>
                    <p className="font-bold text-gray-900">Enfoque integrativo</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Psicoterapia humanista + herramientas basadas en evidencia para cambios sostenibles.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gray-200/70 my-4" />

                <div className="flex items-start gap-3">
                  <div className="text-xl">🔒</div>
                  <div>
                    <p className="font-bold text-gray-900">Privacidad y cuidado</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Un espacio seguro, respetuoso y profesional para hablar con libertad.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contacto"
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center justify-center rounded-2xl text-white font-bold px-6 py-4 shadow-lg hover:shadow-xl transition"
                  style={{
                    background: "linear-gradient(90deg, #B508B0, #E05087, #53A2FE)",
                  }}
                >
                  <Calendar className="mr-2" size={18} />
                  Agendar ahora
                </a>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white font-bold px-6 py-4 hover:bg-gray-50 transition"
                >
                  <X className="mr-2" size={18} />
                  Cerrar
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                * Si tienes dudas, envíanos un mensaje y te orientamos con el servicio ideal para ti.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
