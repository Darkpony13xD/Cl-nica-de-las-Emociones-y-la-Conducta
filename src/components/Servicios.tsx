import { Calendar, Clock, ShieldCheck, Sparkles } from "lucide-react";

import Modal from "../ui/Modal";
import React from "react";
import { motion } from "framer-motion";

type Servicio = {
  id: string;
  title: string;
  tag: string;
  desc: React.ReactNode;
  bullets: string[];
  image: string;
};

const SERVICIOS: Servicio[] = [
  {
    id: "lenguaje",
    title: "Terapia de Lenguaje",
    tag: "Infantil (3-11 años)",
    desc:
      (
        <div className="space-y-8 text-base">
          <div className="relative overflow-hidden rounded-3xl bg-purple-50/50 p-6 md:p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-purple-600">
                <span className="text-2xl">🗣️</span>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xl">Rehabilitación del Lenguaje</h5>
                <p className="text-sm text-purple-600 font-medium mt-1">Infantil (3-11 años)</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-gray-600">
              Dirigidos a niños y niñas de 3 hasta los 11 años. Tiene como objetivo la rehabilitación de las alteraciones o dificultades del Lenguaje.
            </p>
            <div>
              <p className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Áreas de atención:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600 text-sm">
                {["Rehabilitación del lenguaje", "Dificultades del habla", "Atención personalizada", "Estimulación y desarrollo"].map((item, i) => (
                  <li key={i} className="bg-white/60 p-3 rounded-xl border border-purple-100/50 flex items-center gap-3"><span className="text-purple-500">▪</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    bullets: ["Rehabilitación del lenguaje", "Dificultades del habla", "Atención personalizada"],
    image:
      "/servicios/lengua.png",
  },
  {
    id: "infantil",
    title: "Terapia infantojuvenil",
    tag: "Infantil y Adolescentes",
    desc:
      (
        <div className="space-y-8 text-base">
          <div className="relative overflow-hidden rounded-3xl bg-blue-50/50 p-6 md:p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
                <span className="text-2xl">🧸</span>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xl">Terapia de Juego</h5>
                <p className="text-sm text-blue-600 font-medium mt-1">Infantil y Adolescentes</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-gray-600">
              Terapia donde la niña o el niño tiene la posibilidad de expresar a través de juego su mundo interno, incluyendo sus miedos, preocupaciones y recursos.
            </p>
            <div>
              <p className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Enfoque:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600 text-sm">
                {["Expresión emocional", "Procesamiento de traumas", "Manejo de ansiedad", "Problemas de conducta"].map((item, i) => (
                  <li key={i} className="bg-white/60 p-3 rounded-xl border border-blue-100/50 flex items-center gap-3"><span className="text-blue-500">▪</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    bullets: ["Manejo de ansiedad", "Problemas de conducta", "Regulación emocional"],
    image:
      "/servicios/juvenil.png",
  },
  {
    id: "adolescentes",
    title: "Terapia para Adolescentes",
    tag: "Adolescentes",
    desc:
      (
        <div className="space-y-8 text-base">
          <div className="relative overflow-hidden rounded-3xl bg-purple-50/50 p-6 md:p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-purple-600">
                <span className="text-2xl">🎧</span>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xl">Acompañamiento Adolescente</h5>
                <p className="text-sm text-purple-600 font-medium mt-1">Identidad y Crecimiento</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-gray-600">
              Espacio para adolescentes donde trabajamos identidad, autoestima, manejo de emociones, relaciones sociales y familiares.
            </p>
            <div>
              <p className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Temas clave:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600 text-sm">
                {["Identidad y Autoestima", "Manejo emocional", "Relaciones sociales", "Dinámica familiar"].map((item, i) => (
                  <li key={i} className="bg-white/60 p-3 rounded-xl border border-purple-100/50 flex items-center gap-3"><span className="text-purple-500">▪</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    bullets: ["Identidad y Autoestima", "Manejo emocional", "Relaciones sociales"],
    image:
      "/servicios/terapia_adolescentes.jpeg",
  },
  {
    id: "adultos",
    title: "Terapia para Adultos",
    tag: "Adultos",
    desc:
      (
        <div className="space-y-8 text-base">
          <div className="relative overflow-hidden rounded-3xl bg-blue-50/50 p-6 md:p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
                <span className="text-2xl">🌱</span>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xl">Psicoterapia Individual</h5>
                <p className="text-sm text-blue-600 font-medium mt-1">Bienestar y Autoconocimiento</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-gray-600">
              El objetivo es promover la salud mental en un ambiente de confianza. Desarrollando habilidades para afrontar problemáticas de la vida cotidiana.
            </p>
            <div>
              <p className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Abordaje:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600 text-sm">
                {["Ansiedad y Depresión", "Autoestima y Duelo", "Conflictos de pareja", "Gestión del estrés"].map((item, i) => (
                  <li key={i} className="bg-white/60 p-3 rounded-xl border border-blue-100/50 flex items-center gap-3"><span className="text-blue-500">▪</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    bullets: ["Ansiedad y Depresión", "Autoestima y Duelo", "Conflictos de pareja"],
    image:
      "/servicios/terapia_adultos.jpeg",
  },
  {
    id: "mujeres",
    title: "Grupos de contención para mujeres",
    tag: "Mujeres",
    desc:
      (
        <div className="space-y-8 text-base">
          <div className="relative overflow-hidden rounded-3xl bg-purple-50/50 p-6 md:p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-purple-600">
                <span className="text-2xl">🌸</span>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xl">Círculo de Mujeres</h5>
                <p className="text-sm text-purple-600 font-medium mt-1">Sororidad y Apoyo</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-gray-600">
              Espacio seguro de escucha y apoyo mutuo entre mujeres, guiado por profesionales para compartir experiencias y fortalecer redes.
            </p>
            <div>
              <p className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Beneficios:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600 text-sm">
                {["Espacio seguro y confidencial", "Red de apoyo", "Crecimiento compartido", "Empoderamiento"].map((item, i) => (
                  <li key={i} className="bg-white/60 p-3 rounded-xl border border-purple-100/50 flex items-center gap-3"><span className="text-purple-500">▪</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    bullets: ["Espacio seguro", "Red de apoyo", "Crecimiento compartido"],
    image:
      "/servicios/grupo_mujeres.jpeg",
  },
  {
    id: "hombres",
    title: "Grupo de Reflexión para Hombres",
    tag: "Adultos (+21 años)",
    desc:
      (
        <div className="space-y-8 text-base">
          <div className="relative overflow-hidden rounded-3xl bg-blue-50/50 p-6 md:p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xl">Círculo de Reflexión</h5>
                <p className="text-sm text-blue-600 font-medium mt-1">Masculinidades y Vínculos</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-gray-600">
              Dirigido a hombres a partir de los 21 años. Objetivo: transformar relaciones, cambiar creencias limitantes y mejorar la autoestima.
            </p>
            <div>
              <p className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Objetivos:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600 text-sm">
                {["Relaciones sanas", "Creencias limitantes", "Autoestima", "Nuevas masculinidades"].map((item, i) => (
                  <li key={i} className="bg-white/60 p-3 rounded-xl border border-blue-100/50 flex items-center gap-3"><span className="text-blue-500">▪</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    bullets: ["Relaciones sanas", "Creencias limitantes", "Espacio seguro"],
    image:
      "/servicios/grupo_hombres.jpeg",
  },
  {
    id: "comunidad",
    title: "Área de atención a la comunidad",
    tag: "Pláticas y Talleres",
    desc:
      (
        <div className="space-y-8 text-base">
          {/* Pláticas */}
          <div className="relative overflow-hidden rounded-3xl bg-purple-50/50 p-6 md:p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-purple-600">
                <span className="text-2xl">🗣️</span>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xl">Pláticas Psicoeducativas</h5>
                <p className="text-sm text-purple-600 font-medium mt-1">
                  Sensibilización y bienestar
                </p>
              </div>
            </div>
            
            <p className="mb-6 leading-relaxed text-gray-600">
              Diseñadas para contextos escolares y centros comunitarios. Su finalidad es sensibilizar en temas de bienestar emocional.
              <span className="block mt-3 text-sm text-gray-500 bg-white/60 p-3 rounded-xl border border-purple-100">
                ⏱️ Duración: 1-2 horas | 📍 Modalidad: Presencial o Virtual
              </span>
            </p>
            <div>
              <p className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Temas disponibles:
              </p>
              <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3 text-gray-600 text-sm">
                {[
                  "Prevención de conductas de riesgo",
                  "Educación emocional",
                  "Crianza positiva",
                  "Habilidades socioemocionales",
                  "Prevención de abuso sexual",
                  "Violencia familiar y maltrato",
                  "Bullying y acoso escolar",
                  "Límites e inteligencia emocional"
                ].map((item, i) => (
                  <li key={i} className="bg-white/60 p-3 rounded-xl border border-purple-100/50 flex items-center gap-3">
                    <span className="text-purple-500">▪</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Talleres */}
          <div className="relative overflow-hidden rounded-3xl bg-blue-50/50 p-6 md:p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xl">Talleres Vivenciales</h5>
                <p className="text-sm text-blue-600 font-medium mt-1">
                  Transformación profunda
                </p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-gray-600">
              Experiencias inmersivas de 1 a 2 sesiones para generar cambios reales en la forma de pensar y actuar.
            </p>
            <div>
              <p className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Temas principales:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600 text-sm">
                {[
                  "Autoestima positiva (Mujeres)",
                  "Dependencia emocional",
                  "Regulación emocional",
                  "Sanando la relación con mamá"
                ].map((item, i) => (
                  <li key={i} className="bg-white p-3 rounded-xl border border-blue-100 shadow-sm flex items-center gap-3">
                    <span className="text-blue-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    bullets: ["Talleres preventivos", "Salud comunitaria", "Bienestar social"],
    image:
      "/servicios/atencion.jpeg",
  },
];

export default function Servicios() {
  const [selected, setSelected] = React.useState<Servicio | null>(null);

  const duration = "Previa Cita";

  return (
    <section id="servicios" className="py-12 bg-white relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
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
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 gap-8 lg:gap-12 items-start">
              {/* Imagen con overlay + marca */}
              <div className="relative rounded-3xl overflow-hidden bg-gray-100 shadow-lg h-64 md:h-80 w-full">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover absolute inset-0"
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
                    <p className="text-white/80 text-xs">Agendamiento</p>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="flex flex-col gap-6">
                {/* Chips */}
                <div className="flex flex-wrap gap-3">
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

                <div>
                  <p className="text-gray-900 text-xl md:text-2xl font-bold serif">
                    ¿Qué trabajaremos?
                  </p>

                  <div className="text-gray-700 leading-relaxed mt-3 text-lg">
                    {selected.desc}
                  </div>
                </div>

                {/* Bloque premium */}
                <div className="rounded-3xl p-6 border"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(181,8,176,0.06), rgba(83,162,254,0.06))",
                    borderColor: "rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-xl">🧠</div>
                    <div>
                      <p className="font-bold text-gray-900">Psicoterapia basada en evidencia científica</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Para cambios sostenibles.
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
                <div className="pt-2">
                  <a
                    href="#contacto"
                    onClick={() => setSelected(null)}
                    className="w-full inline-flex items-center justify-center rounded-2xl text-white font-bold px-6 py-4 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(90deg, #B508B0, #E05087, #53A2FE)",
                    }}
                  >
                    <Calendar className="mr-2" size={20} />
                    Agendar ahora
                  </a>
                </div>

                <p className="text-xs text-gray-500">
                  * Si tienes dudas, envíanos un mensaje y te orientamos con el servicio ideal para ti.
                </p>
              </div>
            </div>

            {/* Bullets Section (Full Width) */}
            <div className="bg-gray-50/50 rounded-[2rem] p-6 md:p-8 border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6 serif">
                Puntos clave del tratamiento
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {selected.bullets.map((b, idx) => {
                  const accent =
                    idx % 3 === 0 ? "#B508B0" : idx % 3 === 1 ? "#53A2FE" : "#E05087";

                  return (
                    <div
                      key={b}
                      className="rounded-2xl bg-white shadow-sm p-5 flex gap-4 border border-gray-100 transition-transform hover:scale-[1.02]"
                    >
                      <div
                        className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center font-bold text-white"
                        style={{
                          background: `linear-gradient(135deg, ${accent}, rgba(0,0,0,0))`,
                          backgroundColor: accent,
                        }}
                      >
                        ✓
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900">{b}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Herramientas prácticas para tu proceso.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
