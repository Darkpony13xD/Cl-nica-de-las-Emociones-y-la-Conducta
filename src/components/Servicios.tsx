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
    tag: "niñas y niños de 3 a 10 años",
    desc:
      (
        <div className="space-y-8 text-base">
          <div className="relative overflow-hidden rounded-3xl bg-purple-50/50 p-6 md:p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-purple-600">
                <span className="text-2xl">🗣️</span>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xl">Terapia de Lenguaje</h5>
                <p className="text-sm text-purple-600 font-medium mt-1">Niñas y niños de 3 a 10 años</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-gray-600">
              La terapia de lenguaje ayuda a mejorar el habla, el lenguaje y la comunicación de los niños y niñas. Y prevenir complicaciones futuras en el aprendizaje, la socialización y el bienestar emocional.
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              Recuerda que el lenguaje es una de las habilidades más importantes que los niños y niñas adquieren durante sus primeros años de vida, por lo que una atención temprana es esencial para su desarrollo pleno.
            </p>
            <div>
              <p className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                La terapia de lenguaje puede ayudar a su hijo en las siguientes áreas:
              </p>
              <ul className="grid md:grid-cols-1 gap-4 text-gray-600 text-sm">
                {["Estimulación del lenguaje desde etapas preverbales hasta la adquisición del lenguaje.", "Atención a niños y niñas con retraso en el habla y en el desarrollo del lenguaje.", "Problemas de articulación y pronunciación del habla."].map((item, i) => (
                  <li key={i} className="bg-white/60 p-3 rounded-xl border border-purple-100/50 flex items-center gap-3"><span className="text-purple-500"></span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    bullets: ["Estimulación del lenguaje", "Retraso en el habla", "Problemas de articulación"],
    image:
      "/servicios/lengua.png",
  },
  {
    id: "infantil",
    title: "Terapia infantojuvenil",
    tag: "de 5 a 18 años",
    desc:
      (
        <div className="space-y-8 text-base">
          <div className="relative overflow-hidden rounded-3xl bg-blue-50/50 p-6 md:p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
                <span className="text-2xl">🧸</span>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xl">Terapia infantojuvenil</h5>
                <p className="text-sm text-blue-600 font-medium mt-1">de 5 a 18 años</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-gray-600">
              La terapia infantojuvenil es un proceso terapéutico diseñado para ayudar a niños y adolescentes a superar desafíos emocionales, conductuales y sociales.
            </p>
            <div>
              <p className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Algunos de los beneficios de la terapia infantojuvenil incluyen:
              </p>
              <ul className="grid md:grid-cols-1 gap-4 text-gray-600 text-sm">
                {["- Mejora en la autoestima y la confianza", "- Desarrollo de habilidades sociales y emocionales", "- Manejo del estrés y la ansiedad", "- Resolución de conflictos y problemas", "- Fortalecimiento de las relaciones familiares"].map((item, i) => (
                  <li key={i} className="bg-white/60 p-3 rounded-xl border border-blue-100/50 flex items-center gap-3">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    bullets: ["Autoestima y confianza", "Habilidades sociales", "Manejo del estrés"],
    image:
      "/servicios/juvenil.jpeg",
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
    tag: "hombres de +21 años",
    desc:
      (
        <div className="space-y-8 text-base">
          <div className="relative overflow-hidden rounded-3xl bg-blue-50/50 p-6 md:p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xl">Grupo de reflexión para hombres</h5>
                <p className="text-sm text-blue-600 font-medium mt-1">Hombres de +21 años</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-gray-600">
              Te invitamos a asistir al grupo exclusivo para hombres. Te invitamos a un espacio seguro, confidencial y profesional, comprometido a mejorar el bienestar emocional de los hombres. El objetivo es transformar de forma más sana nuestras sus relaciones personales.
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              Es un grupo abierto, en el momento que decidas podrás integrarte, en cada sesión conectarás, fortalecerás y repensaras sobre aquellas áreas de tu vida que se encuentren en conflicto. ¡Asiste a una sesión y cambia tu enfoque!
            </p>
            <div>
              <p className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Temáticas:
              </p>
              <ul className="grid md:grid-cols-1 gap-4 text-gray-600 text-sm">
                {["Conflictos en la pareja", "separación", "celos", "paternidad", "familia", "hijos", "economía", "gestión de los estados de ánimo y conflictos", "entrenamiento en habilidades de afrontamiento, etc."].map((item, i) => (
                  <li key={i} className="bg-white/60 p-3 rounded-xl border border-blue-100/50 flex items-center gap-3">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    bullets: ["Conflictos en la pareja", "Paternidad", "Gestión de los estados de ánimo"],
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
                  loading="lazy"
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
                  loading="lazy"
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
                    Enfoque en el aquí y el ahora
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
