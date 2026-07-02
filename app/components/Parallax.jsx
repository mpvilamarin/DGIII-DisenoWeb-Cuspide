"use client";

import { useEffect, useRef } from "react";

// Envuelve una imagen de fondo (Image con `fill`) y la desplaza a menor
// velocidad que el scroll de la página, dando sensación de profundidad.
// El contenedor padre debe tener overflow-hidden + position relative.
export default function Parallax({ children, strength = 0.18, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight;
      // Desplazamiento proporcional a qué tan lejos está el centro del
      // elemento del centro de la ventana — 0 cuando está centrado.
      const offset = (rect.top + rect.height / 2 - vh / 2) * strength;
      el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.2)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`absolute inset-0 will-change-transform ${className}`}>
      {children}
    </div>
  );
}
