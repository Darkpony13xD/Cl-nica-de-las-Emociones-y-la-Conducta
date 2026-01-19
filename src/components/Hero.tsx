import { ArrowRight, Brain, Heart, Sparkles, Users } from 'lucide-react';

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-height-screen flex items-center pt-36 md:pt-20 overflow-hidden bg-serene min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="hidden md:inline-block px-4 py-1.5 mb-6 text-xs font-semibold text-accent bg-purple-50 rounded-full border border-purple-200">
            Psicoterapia basada en evidencia
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-gray-900 serif">
            Encuentra equilibrio emocional en un espacio <span className="text-accent italic">seguro para ti</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Conecta pensamientos, emociones y conductas. Ayuda a entender cómo tus ideas influyen en tus sentimientos y acciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-accent text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-xl"
            >
              Comienza tu proceso <ArrowRight size={20} />
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
  src="/logo.png"
  alt="Clínica de las Emociones y la Conducta"
  className="w-full h-full object-contain p-10"
 />

            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply"></div>
          </div>
          
          {/* Decorative floating card */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block absolute -bottom-6 -left-12 glass p-6 rounded-2xl shadow-xl max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-accent">
                <Heart size={20} />
              </div>
              <span className="text-sm font-bold serif">Bienestar Real</span>
            </div>
            <p className="text-xs text-gray-500">Sesiones presenciales y online adaptadas a tu ritmo.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-purple-200 to-pink-200 blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-blue-300 to-blue-100 blur-[100px] opacity-60"></div>
    </section>
  );
};

export default Hero;