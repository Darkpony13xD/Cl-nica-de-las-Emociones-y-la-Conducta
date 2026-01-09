import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-serene">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3.5rem] shadow-2xl overflow-hidden grid md:grid-cols-2 border border-gray-100">
          <div className="p-12 md:p-16 lg:p-20 bg-accent text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 serif">¿Hablamos?</h2>
              <p className="text-white/80 text-lg mb-12">
                Da el primer paso hacia una vida más plena. Estoy aquí para escucharte.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <p className="font-medium">hola@serenamente.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Teléfono / WhatsApp</p>
                    <p className="font-medium">+34 600 000 000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-12">
              <Instagram className="cursor-pointer hover:text-pink-300 transition-colors" />
              <Linkedin className="cursor-pointer hover:text-pink-300 transition-colors" />
            </div>
          </div>

          <div className="p-12 md:p-16 lg:p-20">
            <form className="no-particles space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Apellido</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Motivo de consulta</label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50 appearance-none">
                  <option>Terapia Individual</option>
                  <option>Terapia de Pareja</option>
                  <option>Ansiedad</option>
                  <option>Otros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50"
                  placeholder="Cuéntame brevemente cómo puedo ayudarte..."
                />
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transition-all">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
