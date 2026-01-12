import { AnimatePresence, motion } from 'framer-motion';
import { Brain, Cog, Heart } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const AnimatedBackground: React.FC = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [forceMotion] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);

  const useMotion = !reduceMotion || forceMotion;

  /* ================= MASK ================= */
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const update = () => {
      const svg = svgRef.current;
      if (!svg) return;

      const w = window.innerWidth;
      const h = window.innerHeight;

      svg.setAttribute('width', `${w}`);
      svg.setAttribute('height', `${h}`);
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

      const mask = svg.querySelector('mask');
      if (!mask) return;

      let inner = `<rect x="0" y="0" width="${w}" height="${h}" fill="white" />`;
      const pad = 12;

      document.querySelectorAll('.no-particles').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width && r.height) {
          inner += `
            <rect
              x="${Math.max(0, r.left + pad)}"
              y="${Math.max(0, r.top + pad)}"
              width="${Math.max(0, r.width - pad * 2)}"
              height="${Math.max(0, r.height - pad * 2)}"
              fill="black"
            />
          `;
        }
      });

      mask.innerHTML = inner;
    };

    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, { passive: true });

    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update);
    };
  }, []);

  /* ================= PARTICLES ================= */
  const generateParticle = (id: number, isInitial = false) => {
    const r = Math.random();
    const type = r > 0.66 ? 'heart' : r > 0.33 ? 'brain' : 'gear';

    const baseSize = 14 + Math.random() * 20;
    const size = type === 'gear' ? baseSize * 1.4 : baseSize;

    return {
      id,
      type,
      left: Math.random() * 100,
      drift: `${Math.random() * 40 - 20}px`,
      delay: isInitial ? `${Math.random() * -30}s` : '0s',
      dur: `${14 + Math.random() * 24}s`,
      size,
    };
  };

  const [particles, setParticles] = useState(() => {
    return Array.from({ length: 20 }).map((_, i) => generateParticle(i, true));
  });

  const playPopSound = () => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  };

  const removeParticle = (id: number) => {
    playPopSound();
    setParticles((prev) => prev.filter((p) => p.id !== id));
    // Reaparecer una nueva partícula después de 1 segundo
    setTimeout(() => {
      setParticles((prev) => [...prev, generateParticle(Date.now() + Math.random())]);
    }, 1000);
  };

  return (
    <>
      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 gradient-animate" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-300/40 via-pink-200/30 to-blue-300/40"
          style={{ mixBlendMode: 'overlay', opacity: 0.6 }}
        />
      </div>

      {/* ================= PARTICLES ================= */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id="particles-mask" maskUnits="userSpaceOnUse">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
            </mask>
          </defs>
        </svg>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
          style={{
            mask: 'url(#particles-mask)',
            WebkitMask: 'url(#particles-mask)',
          }}
        >
          <AnimatePresence>
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className={`absolute bg-particle ${p.type} cursor-pointer pointer-events-auto`}
                onClick={() => removeParticle(p.id)}
                exit={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  left: `${p.left}%`,
                  ['--d' as any]: p.dur,
                  ['--delay' as any]: p.delay,
                  ['--drift' as any]: p.drift,
                  width: p.size,
                  height: p.size,
                  opacity: p.type === 'gear' ? 1 : 0.6,
                }}
              >
                {p.type === 'heart' && <Heart size={p.size} />}
                {p.type === 'brain' && <Brain size={p.size} />}

                {/* ===== ENGRANE NORMAL, PERO VISIBLE ===== */}
                {p.type === 'gear' && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <Cog
                      size={p.size}
                      strokeWidth={2.5}
                      className="text-[#9333ea]"
                      style={{ stroke: '#9333ea' }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default AnimatedBackground;
