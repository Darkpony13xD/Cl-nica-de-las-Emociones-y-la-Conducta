
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
  ChevronDown
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Enfoque', href: '#enfoque' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tight text-accent serif"
        >
          Clinica de las emociones y la conducta
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-700 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Reservar Cita
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-accent p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-accent text-white px-6 py-3 rounded-xl w-full text-center">
                Reservar Cita
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-height-screen flex items-center pt-20 overflow-hidden bg-serene min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-accent uppercase bg-green-50 rounded-full border border-green-100">
            Psicoterapia Humanista & Integrativa
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-gray-900 serif">
            Encuentra tu paz en un espacio de <span className="text-accent italic">escucha profunda.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Acompañamiento profesional diseñado para redescubrir tu equilibrio emocional y fortalecer tu salud mental con un enfoque cálido y humano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-accent text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-xl"
            >
              Comienza tu proceso <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-semibold"
            >
              Conoce mi método
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" 
              alt="Psychologist session" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply"></div>
          </div>
          
          {/* Decorative floating card */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:-left-12 glass p-6 rounded-2xl shadow-xl max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-accent">
                <Heart size={20} />
              </div>
              <span className="text-sm font-bold serif">Bienestar Real</span>
            </div>
            <p className="text-xs text-gray-500">Sesiones presenciales y online adaptadas a tu ritmo.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-green-50 blur-[100px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-amber-50 blur-[100px] opacity-40"></div>
    </section>
  );
};

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
              className="p-10 rounded-3xl bg-serene border border-gray-100 shadow-sm transition-all"
            >
              <div className="text-accent mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-md">
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

const Servicios = () => {
  const items = [
    { title: "Terapia Individual", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800", price: "Sesión 50 min" },
    { title: "Terapia de Pareja", image: "https://images.unsplash.com/photo-1516584566738-4f480e7f4498?auto=format&fit=crop&q=80&w=800", price: "Sesión 80 min" },
    { title: "Ansiedad y Estrés", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", price: "Especialidad" },
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 serif">Servicios <span className="text-accent">Especializados</span></h2>
            <p className="text-gray-600 text-lg">Brindo acompañamiento en diversas áreas, adaptando cada intervención a tus necesidades específicas.</p>
          </div>
          <button className="text-accent font-bold flex items-center gap-2 hover:underline">
            Ver todos los servicios <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-lg"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <p className="text-green-400 font-medium text-sm mb-2 uppercase tracking-widest">{item.price}</p>
                <h3 className="text-2xl font-bold text-white serif mb-4">{item.title}</h3>
                <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-accent transition-all">
                  Saber más
                </button>
              </div>
            </motion.div>
          ))}
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/40 blur-[100px] rounded-full"></div>
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
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center"><Mail size={24} /></div>
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <p className="font-medium">hola@serenamente.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center"><Phone size={24} /></div>
                  <div>
                    <p className="text-sm text-white/60">Teléfono / WhatsApp</p>
                    <p className="font-medium">+34 600 000 000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-12">
              <Instagram className="cursor-pointer hover:text-green-300 transition-colors" />
              <Linkedin className="cursor-pointer hover:text-green-300 transition-colors" />
            </div>
          </div>

          <div className="p-12 md:p-16 lg:p-20">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-gray-50" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Apellido</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-gray-50" placeholder="Tu apellido" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-gray-50" placeholder="correo@ejemplo.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Motivo de consulta</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-gray-50 appearance-none">
                  <option>Terapia Individual</option>
                  <option>Terapia de Pareja</option>
                  <option>Ansiedad</option>
                  <option>Otros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-gray-50" placeholder="Cuéntame brevemente cómo puedo ayudarte..."></textarea>
              </div>
              <button className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-bold text-accent serif">Serenamente</div>
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-accent">Privacidad</a>
          <a href="#" className="hover:text-accent">Cookies</a>
          <a href="#" className="hover:text-accent">Términos</a>
        </div>
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Serenamente Psicología. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

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
      
      <Navbar />
      <main>
        <Hero />
        <Enfoque />
        <Servicios />
        <Testimonios />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Action Button for Mobile / Quick Contact */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-40 md:hidden"
      >
        <button className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl">
          <MessageCircle size={30} />
        </button>
      </motion.div>
    </div>
  );
}
