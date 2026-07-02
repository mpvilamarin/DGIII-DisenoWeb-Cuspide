"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

const SVG_H = 240;
const PAD_X_DESKTOP = 56;
const PAD_X_MOBILE = 36;
const PAD_Y = 28;
const LABEL_H = 60; // reserved at bottom for day / altitude labels

export default function AscentRoute({ itinerario, galeria = [], mainImage }) {
  const pathRef = useRef(null);
  const sectionRef = useRef(null);
  const [pathLength, setPathLength] = useState(2000);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const photos = galeria.length ? galeria : [mainImage].filter(Boolean);

  // Wider canvas the more days there are, so the chart reads as a real elevation profile.
  // En mobile angostamos el lienzo para que entre sin scroll horizontal, cuidando
  // no achatar tanto el ancho como para que la relación de aspecto se vuelva
  // demasiado alta (lo que empujaría la tarjeta de hover contra el texto de arriba).
  const SVG_W = isMobile
    ? Math.max(500, itinerario.length * 110)
    : Math.max(900, itinerario.length * 150);
  const PAD_X = isMobile ? PAD_X_MOBILE : PAD_X_DESKTOP;

  const minAlt = Math.min(...itinerario.map((w) => w.altitudM));
  const maxAlt = Math.max(...itinerario.map((w) => w.altitudM));
  const normalize = (alt) => (maxAlt === minAlt ? 0.5 : (alt - minAlt) / (maxAlt - minAlt));

  const innerW = SVG_W - PAD_X * 2;
  const innerH = SVG_H - PAD_Y - LABEL_H;
  const baseY = PAD_Y + innerH;

  const points = itinerario.map((day, i) => ({
    ...day,
    dayShort: day.dia.replace(/^Días?\s*/i, ""),
    x: PAD_X + (i / (itinerario.length - 1)) * innerW,
    y: PAD_Y + (1 - normalize(day.altitudM)) * innerH,
  }));

  const buildPath = (pts) => {
    if (pts.length < 2) return "";
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const cpx = (prev.x + curr.x) / 2;
      d += ` C ${cpx} ${prev.y}, ${cpx} ${curr.y}, ${curr.x} ${curr.y}`;
    }
    return d;
  };

  const pathData = buildPath(points);
  const areaData = `${pathData} L ${points[points.length - 1].x} ${baseY} L ${points[0].x} ${baseY} Z`;

  // Measure the real path length before paint, so the very first frame already
  // shows the fully-hidden line — no flash while it recalibrates from a guess.
  useLayoutEffect(() => {
    const measured = pathRef.current?.getTotalLength();
    if (measured) setPathLength(measured);
  }, [pathData]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setProgress(1);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    // Reveal once the chart is meaningfully in view, then animate to completion
    // on a fixed timer — not tied to further scrolling, so it never finishes off-screen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(1);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const dashOffset = pathLength * (1 - progress);
  const activePoint = active !== null ? points[active] : null;

  return (
    <section
      ref={sectionRef}
      className="flex min-h-[80vh] flex-col justify-center border-t border-stone/15 bg-bone px-6 py-10 md:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-center gap-3 sm:justify-start">
          <span className="block h-5 w-px bg-violet" />
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-dark">
            Ruta de ascenso
          </p>
        </div>
        <h2 className="mt-3 text-center font-display text-2xl uppercase text-ink sm:text-left sm:text-3xl">
          Perfil de la expedición
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-stone sm:mx-0 sm:text-left">
          Altitud día a día. Pasá el cursor sobre cada parada para ver el detalle de la jornada.
        </p>

        {/* El wrapper exterior no recorta nada (para que la tarjeta de hover nunca
            quede cortada); el scroll horizontal del gráfico vive solo en el div interno. */}
        <div className="relative mt-10 w-full">
          <div className="sm:overflow-x-auto">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            fill="none"
            className="w-full sm:min-w-180"
            role="img"
            aria-label="Gráfico de altitud por día del itinerario"
          >
            <defs>
              <linearGradient id="ascent-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-violet-dark)" />
                <stop offset="100%" stopColor="var(--color-violet-light)" />
              </linearGradient>
              <linearGradient id="ascent-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-violet)" stopOpacity="0.22" />
                <stop offset="100%" stopColor="var(--color-violet)" stopOpacity="0" />
              </linearGradient>
              <filter id="point-glow" x="-150%" y="-150%" width="400%" height="400%">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>

            {/* Grid horizontal de altitud */}
            {[0, 0.25, 0.5, 0.75, 1].map((frac) => {
              const y = PAD_Y + (1 - frac) * innerH;
              const alt = Math.round(minAlt + frac * (maxAlt - minAlt));
              return (
                <g key={frac}>
                  <line
                    x1={PAD_X}
                    y1={y}
                    x2={SVG_W - PAD_X}
                    y2={y}
                    stroke="rgba(24,16,43,0.08)"
                    strokeWidth="1"
                  />
                  <text
                    x={PAD_X - 10}
                    y={y + 4}
                    textAnchor="end"
                    fill="rgba(24,16,43,0.35)"
                    fontSize="10"
                    fontFamily="monospace"
                  >
                    {alt.toLocaleString("es")}m
                  </text>
                </g>
              );
            })}

            {/* Área bajo la curva — se desvanece junto con el trazo, no antes */}
            <path
              d={areaData}
              fill="url(#ascent-area)"
              style={{ opacity: progress, transition: "opacity 2.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
            />

            {/* Trazo fantasma (guía estructural) */}
            <path d={pathData} stroke="rgba(24,16,43,0.08)" strokeWidth="2" />

            {/* Trazo animado por scroll */}
            <path
              ref={pathRef}
              d={pathData}
              stroke="url(#ascent-line)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={dashOffset}
              style={{ transition: "stroke-dashoffset 2.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
            />

            {/* Días */}
            {points.map((pt, i) => {
              const isVisible = progress === 1;
              const isActive = active === i;
              const isFirst = i === 0;
              const isLast = i === points.length - 1;
              const delay = (i / Math.max(1, points.length - 1)) * 2.3;

              return (
                <g
                  key={i}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.4s ease ${delay}s`,
                  }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive((curr) => (curr === i ? null : curr))}
                  onClick={() => setActive((curr) => (curr === i ? null : i))}
                  className="cursor-pointer"
                >
                  {/* Área de hit invisible, más generosa que el marcador visible */}
                  <circle cx={pt.x} cy={pt.y} r={isMobile ? 26 : 20} fill="transparent" />

                  {/* Anillo punteado pulsante — señala que el punto es tocable */}
                  {!isActive && (
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={(isFirst || isLast ? (isMobile ? 7 : 5) : isMobile ? 5.5 : 3.5) + 3}
                      fill="none"
                      stroke="#5B3894"
                      strokeWidth="1"
                      strokeDasharray="1.5 2.5"
                      className="pulse-halo-svg pointer-events-none"
                    />
                  )}

                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={
                      isActive
                        ? isFirst || isLast
                          ? isMobile ? 9 : 7
                          : isMobile ? 7.5 : 5.5
                        : isFirst || isLast
                          ? isMobile ? 7 : 5
                          : isMobile ? 5.5 : 3.5
                    }
                    fill={isActive || isFirst || isLast ? "#5B3894" : "#f7f8fc"}
                    stroke="#5B3894"
                    strokeWidth="1.5"
                    style={{ transition: "r 0.2s ease, fill 0.2s ease" }}
                  />

                  {/* Línea vertical punteada hacia label */}
                  <line
                    x1={pt.x}
                    y1={pt.y + 7}
                    x2={pt.x}
                    y2={baseY + 12}
                    stroke="rgba(91,56,148,0.2)"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                  />

                  {/* Día */}
                  <text
                    x={pt.x}
                    y={baseY + 26}
                    textAnchor="middle"
                    fill="rgba(24,16,43,0.7)"
                    fontSize="9"
                    fontWeight="bold"
                    fontFamily="monospace"
                    letterSpacing="0.6"
                  >
                    DÍA {pt.dayShort}
                  </text>

                  {/* Altitud */}
                  <text
                    x={pt.x}
                    y={baseY + 40}
                    textAnchor="middle"
                    fill="var(--color-violet-dark)"
                    fontSize="8"
                    fontFamily="monospace"
                    letterSpacing="0.6"
                  >
                    {pt.altitud}
                  </text>
                </g>
              );
            })}
          </svg>
          </div>

          {/* Tarjeta con la jornada del día — aparece junto al punto activo */}
          {activePoint && (() => {
            // Flip below the point when it sits too high for the card to fit above it.
            // En mobile el gráfico es más bajo, así que siempre mostramos la tarjeta abajo
            // para no superponerla con el título de la sección.
            const below = isMobile || activePoint.y / SVG_H < 0.4;
            // Clamp horizontal anchor cerca de los bordes para que la tarjeta nunca quede cortada.
            const xPct = activePoint.x / SVG_W;
            const xAnchor = xPct < 0.22 ? "0%" : xPct > 0.78 ? "-100%" : "-50%";
            return (
              <div
                className="pointer-events-none absolute z-20 w-52 border border-ink/10 bg-bone shadow-lg sm:w-72"
                style={{
                  left: `${xPct * 100}%`,
                  top: `${(activePoint.y / SVG_H) * 100}%`,
                  transform: below
                    ? `translate(${xAnchor}, 0%) translateY(14px)`
                    : `translate(${xAnchor}, -100%) translateY(-14px)`,
                }}
              >
                {photos.length > 0 && (
                  <div className="relative h-28 w-full overflow-hidden sm:h-32">
                    <Image
                      src={photos[active % photos.length]}
                      alt={activePoint.titulo}
                      fill
                      sizes="288px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-3.5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-violet-dark">
                    {activePoint.dia} · {activePoint.altitud}
                  </p>
                  <p className="mt-1.5 font-display text-sm uppercase leading-tight text-ink">
                    {activePoint.titulo}
                  </p>
                  <p className="mt-2 font-mono text-[10px] leading-relaxed text-stone">
                    {activePoint.descripcion}
                  </p>
                </div>
                <span
                  className={`absolute h-3 w-3 rotate-45 bg-bone ${
                    below ? "-top-1.5 border-l border-t border-ink/10" : "-bottom-1.5 border-b border-r border-ink/10"
                  } ${
                    xAnchor === "0%"
                      ? "left-5"
                      : xAnchor === "-100%"
                        ? "right-5"
                        : "left-1/2 -translate-x-1/2"
                  }`}
                />
              </div>
            );
          })()}
        </div>

        <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-stone-light lg:hidden">
          Tocá los puntos del recorrido
        </p>
      </div>
    </section>
  );
}
