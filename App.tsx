
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Heart, 
  Brain, 
  Sparkles, 
  Users, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone,
  ChevronDown,
  Facebook,
  MessageSquare
} from 'lucide-react';
import AnimatedBackground from './src/components/AnimatedBackground';
import Navbar from './src/components/Navbar';
import Servicios from './src/components/Servicios';
import Hero from './src/components/Hero';

// --- Components ---

// Toggle this to false to disable animated background for debugging/performance
const SHOW_BACKGROUND = true;



// Hero moved to src/components/Hero.tsx

const Enfoque = () => {
  const points = [
    { icon: <Brain size={32} />, title: "Ciencia y Empatía", desc: "Baso mi práctica en evidencia científica pero siempre desde la calidez humana." },
    { icon: <Sparkles size={32} />, title: "Crecimiento Personal", desc: "No solo tratamos síntomas, buscamos que florezcas como persona." },
    { icon: <Users size={32} />, title: "Vínculo Terapéutico", desc: "La relación entre nosotros es la base fundamental del cambio duradero." },
  ];

  return (
    <section id="enfoque" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 serif">Un enfoque centrado <span className="italic text-accent">en ti</span></h2>
          <p className="text-gray-600 text-lg">Entiendo la terapia como un viaje compartido de autodescubrimiento, donde mi rol es brindarte las herramientas y el espacio seguro para sanar.</p>
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
};

// Servicios moved to src/components/Servicios.tsx

const SobreNegocio = () => {
  const datos = [
    { icon: <Heart size={40} />, title: "Misión", desc: "Proporcionar psicoterapia de calidad que transforme vidas y fortalezca la salud mental integral." },
    { icon: <Sparkles size={40} />, title: "Visión", desc: "Ser la clínica de referencia en psicoterapia humanista, reconocida por excelencia." },
    { icon: <Users size={40} />, title: "Valores", desc: "Empatía, profesionalismo, confidencialidad y respeto mutuo en cada sesión." },
  ];

  return (
    <section id="sobre-negocio" className="py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-transparent blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-transparent blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 serif bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Sobre Nosotros</h2>
            <p className="text-gray-600 text-lg leading-relaxed">Descubre nuestra misión, visión y el compromiso que nos define en el cuidado de tu bienestar emocional.</p>
          </div>

          {/* Misión, Visión, Valores */}
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

          {/* Historia - Lado a lado */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-8 serif text-gray-900">Nuestra Historia</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  La <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Clínica de las Emociones y la Conducta</span> fue fundada con la convicción de que la salud mental es fundamental para una vida plena y significativa.
                </p>
                <p>
                  Desde nuestros inicios, nos hemos dedicado a proporcionar un <span className="font-bold">espacio seguro, acogedor y profesional</span> donde cada persona pueda explorar sus emociones y fortalecer su bienestar.
                </p>
                <p>
                  Nuestro enfoque integrativo combina la <span className="font-bold text-blue-600">calidez humanista</span> con las técnicas más efectivas basadas en evidencia científica, permitiendo que cada paciente encuentre su propio camino hacia el equilibrio emocional.
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
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Profesionalidad</h4>
                      <p className="text-gray-600 text-sm">Equipo altamente capacitado con experiencia en psicoterapia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">💙</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Empatía</h4>
                      <p className="text-gray-600 text-sm">Escucha activa y genuino interés en tu proceso</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🔒</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Confidencialidad</h4>
                      <p className="text-gray-600 text-sm">Tu privacidad es sagrada en cada sesión</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🌱</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Crecimiento</h4>
                      <p className="text-gray-600 text-sm">Apoyo integral para tu transformación personal</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonios = () => {
  return (
    <section className="py-24 bg-accent text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 serif">Voces de cambio</h2>
            <div className="space-y-8">
              {[1, 2].map((_, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 italic">
                  <p className="text-lg mb-6 leading-relaxed">
                    "Encontrar a alguien que realmente escuchara sin juzgar cambió mi perspectiva de la vida. Las herramientas que aprendí aquí me acompañan cada día."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20"></div>
                    <div>
                      <p className="font-bold">Ana García</p>
                      <p className="text-xs text-white/60">Paciente desde 2023</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] bg-white/10 flex items-center justify-center p-12">
              <MessageCircle size={120} className="text-white/20" />
            </div>
            {/* Abstract motion dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                className={`absolute w-4 h-4 rounded-full bg-white/20`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/40 to-purple-900/40 blur-[100px] rounded-full"></div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-serene">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3.5rem] shadow-2xl overflow-hidden grid md:grid-cols-2 border border-gray-100">
          <div className="p-12 md:p-16 lg:p-20 bg-accent text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 serif">¿Hablamos?</h2>
              <p className="text-white/80 text-lg mb-12">Da el primer paso hacia una vida más plena. Estoy aquí para escucharte.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400"><Mail size={24} /></div>
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <p className="font-medium">hola@serenamente.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400"><Phone size={24} /></div>
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
                  <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Apellido</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50" placeholder="Tu apellido" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50" placeholder="correo@ejemplo.com" />
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
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-blue-50/50" placeholder="Cuéntame brevemente cómo puedo ayudarte..."></textarea>
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
};

// Footer moved to src/components/Footer.tsx

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="selection:bg-accent/20 selection:text-accent">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      {SHOW_BACKGROUND && <AnimatedBackground />}
      <Navbar />
      <main>
        <Hero />
        <Enfoque />
        <Servicios />
        <SobreNegocio />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Action Button for Mobile / Quick Contact */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-40 md:hidden"
      >
        <button className="w-14 h-14 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-2xl">
          <MessageCircle size={30} />
        </button>
      </motion.div>
    </div>
  );
}
