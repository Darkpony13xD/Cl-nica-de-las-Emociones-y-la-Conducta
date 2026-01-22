import { ChevronDown, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import React, { useMemo, useState } from "react";

export default function ContactSection() {
  // ✅ Cambia este número por el WhatsApp real (formato internacional SIN +, SIN espacios).
  // México suele ser: 521 + 10 dígitos. Ej: 5215512345678
  const WHATSAPP_NUMBER = "525512270630";

  // ✅ Cambia tus links aquí
  const INSTAGRAM_URL = "https://www.instagram.com/emociones5976262 ";
  const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100067239251887";

  const motives = useMemo(
    () => [
      "Selecciona un motivo",
      "Terapia infantojuvenil",
      "Terapia de Lenguaje",
      "Terapia para Adolescentes",
      "Terapia para Adultos",
      "Grupos de contención para mujeres",
      "Grupo de Reflexión para Hombres",
      "Área de atención a la comunidad",
    ],
    []
  );

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    motivo: motives[0],
    mensaje: "",
  });

  const onChange =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nombre.trim()) return alert("Por favor escribe tu nombre.");
    if (!form.apellido.trim()) return alert("Por favor escribe tu apellido.");
    if (!form.email.trim()) return alert("Por favor escribe tu email.");
    if (form.motivo === motives[0])
      return alert("Por favor selecciona un motivo de consulta.");
    if (!form.mensaje.trim()) return alert("Por favor escribe tu mensaje.");

    const texto = `Hola, me gustaría agendar una cita.

Nombre: ${form.nombre} ${form.apellido}
Email: ${form.email}
Motivo: ${form.motivo}

Mensaje:
${form.mensaje}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      texto
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="py-12 bg-serene scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl md:rounded-[3.5rem] shadow-2xl overflow-hidden grid md:grid-cols-2 border border-gray-100">
          <div className="p-6 md:p-16 lg:p-20 bg-accent text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 serif text-center">
                ¿Hablamos?
              </h2>
              <p className="text-white/80 text-lg mb-8 md:mb-12 text-center">
                Da el primer paso hacia una vida más plena. Estoy aquí para
                escucharte.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-white/60">Email</p>
                    <p className="font-medium break-all">serviciospsicologicosma@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Teléfono / WhatsApp</p>
                    <p className="font-medium">55 1227 0630</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-white/60">Dirección</p>
                    <p className="font-medium mb-3">Av. Veracruz Norte #2 esq Jalisco, Villa Milpa Alta.</p>
                    
                    <div className="w-full h-48 rounded-xl overflow-hidden border-2 border-white/50 shadow-lg bg-white/5 mb-4">
                      <iframe
                        title="Ubicación"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        src="https://maps.google.com/maps?q=Av.%20Veracruz%20Norte%20%232%20esq%20Jalisco%2C%20Villa%20Milpa%20Alta&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      />
                    </div>

                    <a
                      href="https://maps.app.goo.gl/75n9vmnETkB4b5pA8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold text-sm px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-all hover:scale-105 w-full md:w-auto"
                    >
                      Cómo llegar 📍
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Social Icons con links en nueva pestaña */}
            <div className="flex gap-6 mt-12 justify-center md:justify-start">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-300 transition-colors"
              >
                <Instagram className="cursor-pointer" />
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-pink-300 transition-colors"
              >
                <Facebook className="cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="p-6 md:p-16 lg:p-20">
            <form className="no-particles space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Nombre
                  </label>
                  <input
                    value={form.nombre}
                    onChange={onChange("nombre")}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Apellido
                  </label>
                  <input
                    value={form.apellido}
                    onChange={onChange("apellido")}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  value={form.email}
                  onChange={onChange("email")}
                  type="email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Motivo de consulta
                </label>

                <div className="relative">
                  <select
                    value={form.motivo}
                    onChange={onChange("motivo")}
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50 appearance-none pr-12"
                  >
                    {motives.map((m) => (
                      <option key={m} value={m} disabled={m === motives[0]}>
                        {m}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-500"
                    size={22}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Mensaje
                </label>
                <textarea
                  value={form.mensaje}
                  onChange={onChange("mensaje")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50"
                  placeholder="Cuéntame brevemente cómo puedo ayudarte..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                Enviar mensaje
              </button>

              <p className="text-xs text-gray-500">
                Al enviar, se abrirá WhatsApp con tu mensaje listo para enviarse.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
