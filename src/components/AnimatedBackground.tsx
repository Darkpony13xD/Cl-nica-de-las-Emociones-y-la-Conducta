import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain } from 'lucide-react';

const AnimatedBackground: React.FC = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  // Force motion on by default
  const [forceMotion] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduceMotion(mq.matches);
      const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
      mq.addEventListener?.('change', handler);
      return () => mq.removeEventListener?.('change', handler);
    }
  }, []);

  const useMotion = !reduceMotion || forceMotion;

  // SVG mask ref + updater to respect elements with .no-particles
  const svgRef = React.useRef<SVGSVGElement | null>(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    let raf = 0 as number | null;
    let timer = 0 as number | null;

    const perform = () => {
      const svg = svgRef.current;
      if (!svg) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      try { svg.setAttribute('width', String(w)); svg.setAttribute('height', String(h)); svg.setAttribute('viewBox', `0 0 ${w} ${h}`); } catch {}
      const mask = svg.querySelector('mask');
      if (!mask) return;
      let inner = `<rect x="0" y="0" width="${w}" height="${h}" fill="white"/>`;
      const pad = 12;
      document.querySelectorAll('.no-particles').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) {
          const left = Math.max(0, Math.floor(r.left) + pad);
          const top = Math.max(0, Math.floor(r.top) + pad);
          const width = Math.max(0, Math.ceil(r.width) - pad * 2);
          const height = Math.max(0, Math.ceil(r.height) - pad * 2);
          if (width > 24 && height > 24) {
            inner += `<rect x="${left}" y="${top}" width="${width}" height="${height}" fill="black"/>`;
          }
        }
      });
      try { mask.innerHTML = inner; } catch (e) { /* ignore */ }
    };

    const updateMask = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(perform) as any;
      if (timer) clearTimeout(timer);
      timer = window.setTimeout(() => { if (raf) cancelAnimationFrame(raf); perform(); }, 200);
    };

    updateMask();
    const onResize = updateMask;
    const onScroll = () => updateMask();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    const mo = new MutationObserver(() => updateMask());
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { window.removeEventListener('resize', onResize); window.removeEventListener('scroll', onScroll); mo.disconnect(); if (raf) cancelAnimationFrame(raf); if (timer) clearTimeout(timer); };
  }, []);

  const particles = React.useMemo(() => {
    const particleCount = 20;
    return Array.from({ length: particleCount }).map((_, i) => {
      const type = Math.random() > 0.55 ? 'heart' : 'brain';
      const left = Math.round(Math.random() * 100);
      const drift = Math.round((Math.random() * 40) - 20);
      const delay = (Math.random() * -6).toFixed(2);
      const dur = (12 + Math.random() * 28).toFixed(2);
      const baseSize = Math.round(10 + Math.random() * 24);
      const size = type === 'brain' ? Math.round(baseSize * 1.2) : baseSize;
      return {
        id: i,
        type,
        left,
        drift: `${drift}px`,
        delay,
        dur,
        size
      };
    });
  }, []);

  return (
    <>
      {/* Background layer */}
      <div aria-hidden className={`fixed inset-0 -z-20 ${useMotion ? '' : 'reduced'}`}>
        <div className="absolute inset-0 gradient-animate opacity-100" />
        <div
          className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-purple-300/40 via-pink-200/30 to-blue-300/40"
          style={{ mixBlendMode: 'overlay', opacity: 0.6 }}
          aria-hidden
        />

        <div className="absolute w-[560px] h-[560px] rounded-full blur-2xl bg-gradient-to-br from-purple-400/55 to-blue-400/45 opacity-70" style={{ left: '-14%', top: '4%' }} aria-hidden />
        <div className="absolute w-[420px] h-[420px] rounded-full blur-[36px] bg-gradient-to-br from-pink-300/45 to-purple-300/35 opacity-65" style={{ right: '3%', bottom: '4%' }} aria-hidden />
      </div>

      {/* Particle layer */}
      <div aria-hidden className={`fixed inset-0 pointer-events-none z-10 ${useMotion ? '' : 'reduced'}`}>
        <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="particles-mask" maskUnits="userSpaceOnUse">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
            </mask>
          </defs>
        </svg>
        <div className="bg-particles absolute inset-0 pointer-events-none" style={{ mask: 'url(#particles-mask)', WebkitMask: 'url(#particles-mask)', mixBlendMode: 'overlay', opacity: 0.72 }} aria-hidden>
          {particles.map((p) => (
            <div
              key={p.id}
              className={`bg-particle ${p.type}`}
              style={{ left: `${p.left}%`, ['--d' as any]: `${p.dur}s`, ['--delay' as any]: `${p.delay}s`, ['--drift' as any]: `${p.drift}`, width: p.size, height: p.size, opacity: 0.72 }}
              aria-hidden
            >
              {p.type === 'heart' ? <Heart size={p.size} /> : <Brain size={p.size} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnimatedBackground;
