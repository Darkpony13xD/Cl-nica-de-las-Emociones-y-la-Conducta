import '../scrollbar.css';

import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
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
    { name: 'Sobre el Negocio', href: '#sobre-negocio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`no-particles fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#"
          aria-label="Inicio - Clínica de las Emociones y la Conducta"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-3xl md:text-4xl font-extrabold tracking-tight serif bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Clínica de las Emociones y la Conducta
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
              onClick={(e) => {
                // Scroll suave para todos los anchors del menú
                const id = link.href.startsWith('#') ? link.href.slice(1) : '';
                if (id) {
                  const el = document.getElementById(id);
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-accent p-2" aria-label="Abrir menú">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden glass border-t border-gray-100 overflow-hidden">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  const id = link.href.startsWith('#') ? link.href.slice(1) : '';
                  if (id) {
                    const el = document.getElementById(id);
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                  setIsOpen(false);
                }}
                className="text-xl font-medium text-gray-700 hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
