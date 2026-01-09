import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const Servicios: React.FC = () => {
  const items = [
    { title: "Terapia Individual", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800", price: "Sesión 50 min", desc: "Sesiones individuales de 50 minutos enfocadas en acompañamiento personalizado. Trabajo con herramientas de psicoterapia humanista e integrativa para apoyar cambios sostenibles." },
    { title: "Terapia de Pareja", image: "https://images.unsplash.com/photo-1516584566738-4f480e7f4498?auto=format&fit=crop&q=80&w=800", price: "Sesión 80 min", desc: "Acompañamiento para parejas con sesiones más extensas (80 min) centradas en comunicación, resolución de conflictos y reconexión emocional." },
    { title: "Ansiedad y Estrés", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", price: "Especialidad", desc: "Intervenciones basadas en evidencia para gestión de ansiedad y estrés: técnicas de regulación emocional, psicoeducación y herramientas prácticas para la vida diaria." },
  ];

  const [selected, setSelected] = React.useState<any | null>(null);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  React.useEffect(() => {
    if (selected) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [selected]);

  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 serif">Servicios <span className="text-accent">Especializados</span></h2>
            <p className="text-gray-600 text-lg">Brindo acompañamiento en diversas áreas, adaptando cada intervención a tus necesidades específicas.</p>
          </div>
          <button className="text-blue-40000 font-bold flex items-center gap-2 hover:underline">
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
                <p className="text-pink-300 font-medium text-sm mb-2 uppercase tracking-widest">{item.price}</p>
                <h3 className="text-2xl font-bold text-white serif mb-4">{item.title}</h3>
                <button onClick={() => setSelected(item)} className="bg-white/20 backdrop-blur-md text-white border border-blue-300 py-2 rounded-full text-sm font-medium hover:bg-blue-400 hover:text-white transition-all">
                  Saber más
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-overlay fixed inset-0 z-70 flex items-center justify-center px-6" onClick={() => setSelected(null)} role="dialog" aria-modal="true">
          <div className="modal max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold serif mb-2">{selected.title}</h3>
                    <p className="text-sm text-pink-300 font-medium uppercase tracking-widest mb-4">{selected.price}</p>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700 ml-4" onClick={() => setSelected(null)} aria-label="Cerrar diálogo"><X size={22} /></button>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{selected.desc}</p>
                <ul className="list-disc ml-5 text-gray-700 mb-6">
                  <li>Sesiones personalizadas</li>
                  <li>Protocolos basados en evidencia</li>
                  <li>Enfoque cálido y humano</li>
                </ul>
                <div className="flex gap-3">
                  <a href="#contacto" className="bg-accent text-white px-5 py-3 rounded-lg shadow-md">Reservar Cita</a>
                  <button onClick={() => setSelected(null)} className="border px-4 py-3 rounded-lg">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Servicios;