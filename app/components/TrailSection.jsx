"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const TRAIL_PATH =
  "M 155 735 C 250 700 360 660 455 600 C 545 545 625 510 710 472 C 800 432 880 398 960 360 C 1030 325 1085 294 1135 258 C 1195 218 1248 182 1305 155";

// Pin tip at (0,0), body extends upward — transform positions the tip on the path
const PIN_BODY = "M 0,0 C -7,-5 -14,-12 -14,-22 A 14,14 0 1 1 14,-22 C 14,-12 7,-5 0,0 Z";
// Simple mountain icon centered at (0,-22) inside pin head
const MOUNTAIN_ICON = "M -6,-15 L -2,-24 L 2,-24 L 6,-15 Z M -2,-24 L 0,-28 L 2,-24 Z";

const STOPS = [
  {
    id: 1,
    nombre: "Portal de Ingreso",
    km: "0 km",
    tipo: "inicio",
    label: "Partida",
    descripcion:
      "Registro obligatorio en guardaparques antes de iniciar. Sin habilitación no se puede continuar la marcha. Control de clima y estado de la ruta.",
    tiempo: "Inicio",
    altitud: "400 m",
    cx: 155,
    cy: 735,
  },
  {
    id: 2,
    nombre: "Puente Río Blanco",
    km: "4 km",
    tipo: "hidratacion",
    label: "Hidratación",
    descripcion:
      "El Río Blanco es potable sin filtro. Última fuente de agua accesible antes de la subida final. Recargar reserva mínima de 2 litros.",
    tiempo: "1h 30min",
    altitud: "620 m",
    cx: 455,
    cy: 600,
  },
  {
    id: 3,
    nombre: "Camp. Polacos",
    km: "7 km",
    tipo: "descanso",
    label: "Descanso",
    descripcion:
      "Zona de reagrupamiento con refugio de emergencia. Evaluación de condición física y equipo antes de ingresar al sector técnico.",
    tiempo: "2h 45min",
    altitud: "800 m",
    cx: 710,
    cy: 472,
  },
  {
    id: 4,
    nombre: "Mirador del Valle",
    km: "8.5 km",
    tipo: "vista",
    label: "Panorámica",
    descripcion:
      "Primera línea de visión directa al macizo del Fitz Roy. El viento patagónico puede ser extremo. Ajustá capas antes de detenerte.",
    tiempo: "3h 30min",
    altitud: "1.100 m",
    cx: 960,
    cy: 360,
  },
  {
    id: 5,
    nombre: "Subida Final",
    km: "9 km",
    tipo: "tecnico",
    label: "Sector técnico",
    descripcion:
      "400 m de desnivel en 1 km. Terreno suelto y pedregal expuesto. Ritmo lento, pasos cortos. No existe ruta alternativa de acceso.",
    tiempo: "4h",
    altitud: "1.200 m",
    cx: 1135,
    cy: 258,
  },
  {
    id: 6,
    nombre: "Laguna de los Tres",
    km: "10 km",
    tipo: "destino",
    label: "Destino",
    descripcion:
      "Aguas glaciares a la base del Fitz Roy. 1.600 m s.n.m. Total: 20 km ida y vuelta, 8 a 9 horas. La ruta más icónica de la Patagonia argentina.",
    tiempo: "4h 30min",
    altitud: "1.600 m",
    cx: 1305,
    cy: 155,
  },
];

// Pin fill per type (default vs active)
function getPinColors(tipo, isActive) {
  if (isActive) return { body: "#7A52B8", icon: "#18102b", shadow: "rgba(122,82,184,0.45)" };
  if (tipo === "tecnico") return { body: "#18102b", icon: "#05CDC2", shadow: "rgba(0,0,0,0.5)" };
  if (tipo === "destino") return { body: "#5B3894", icon: "#05CDC2", shadow: "rgba(91,56,148,0.5)" };
  return { body: "#18102b", icon: "rgba(247,248,252,0.85)", shadow: "rgba(0,0,0,0.5)" };
}

export default function TrailSection() {
  const sectionRef = useRef(null);
  const pathRef    = useRef(null);

  const [pathLength,   setPathLength]   = useState(2000);
  const [progress,     setProgress]     = useState(0);
  const [activeStop,   setActiveStop]   = useState(STOPS[STOPS.length - 1]); // destino como default
  const [isMobile,     setIsMobile]     = useState(false);
  const [motionOk,     setMotionOk]     = useState(true);

  useEffect(() => {
    const hoverMQ  = window.matchMedia("(hover: hover)");
    const motionMQ = window.matchMedia("(prefers-reduced-motion: reduce)");

    setIsMobile(!hoverMQ.matches);
    setMotionOk(!motionMQ.matches);

    const onHover = (e) => setIsMobile(!e.matches);
    hoverMQ.addEventListener("change", onHover);

    if (motionMQ.matches) {
      setProgress(1);
      return () => hoverMQ.removeEventListener("change", onHover);
    }

    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      if (len) setPathLength(len);
    }

    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect  = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      const p = Math.max(0, Math.min(1, (viewH * 0.82 - rect.top) / (rect.height + viewH * 0.35)));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      hoverMQ.removeEventListener("change", onHover);
    };
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      if (len && len !== pathLength) setPathLength(len);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dashOffset = pathLength * (1 - progress);

  const handlePin = (stop) => {
    setActiveStop(activeStop?.id === stop.id ? null : stop);
  };

  return (
    <section
      ref={sectionRef}
      id="recorridos"
      className="relative overflow-hidden bg-ink"
      style={{ minHeight: "clamp(480px, 82vh, 720px)" }}
      aria-label="Recorrido interactivo: Laguna de los Tres"
    >
      {/* Foto de fondo */}
      <Image
        src="/images/Recorrido-01.png"
        alt="Ruta Laguna de los Tres, Fitz Roy, El Chaltén"
        fill
        sizes="100vw"
        quality={90}
        className="object-cover object-center opacity-60"
      />

      {/* Degradados de oscurecimiento */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(24,16,43,0.6) 0%, rgba(24,16,43,0.1) 50%, rgba(24,16,43,0.55) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(24,16,43,0.55) 0%, rgba(24,16,43,0) 40%)",
        }}
      />
      <div className="grain absolute inset-0 opacity-50" />

      {/* Header top-left */}
      <div className="absolute left-6 top-8 z-20 md:left-10 lg:left-16">
        <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-violet-light">
          Recorrido 01 · El Chaltén, Patagonia
        </p>
        <h2 className="mt-2 font-display text-[1.75rem] uppercase leading-[0.95] text-bone sm:text-3xl md:text-4xl">
          Laguna de los Tres
        </h2>
        <div className="mt-3 hidden flex-wrap gap-x-5 gap-y-1 sm:flex">
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-bone/50">20 km · ida y vuelta</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-bone/50">8–9 horas</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-bone/50">↑ 1.200 m desnivel</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-violet-light">Subida final exigente</span>
        </div>
      </div>

      {/* SVG: path + pin markers */}
      <svg
        viewBox="0 0 1600 900"
        fill="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          {/* Máscara que "dibuja" el path */}
          <mask id="trail-reveal">
            <path
              d={TRAIL_PATH}
              stroke="white"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={pathLength}
              strokeDashoffset={dashOffset}
            />
          </mask>

          {/* Sombra suave para los pins */}
          <filter id="pin-shadow" x="-40%" y="-20%" width="180%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="rgba(0,0,0,0.6)" />
          </filter>
          <filter id="pin-shadow-active" x="-50%" y="-25%" width="200%" height="180%">
            <feDropShadow dx="0" dy="4" stdDeviation="7" floodColor="rgba(122,82,184,0.55)" />
          </filter>
        </defs>

        {/* Path fantasma */}
        <path
          d={TRAIL_PATH}
          stroke="rgba(247,248,252,0.09)"
          strokeWidth="2.5"
          strokeDasharray="8 10"
        />

        {/* Path animado con máscara */}
        <path
          ref={pathRef}
          d={TRAIL_PATH}
          stroke="rgba(247,248,252,0.75)"
          strokeWidth="2.5"
          strokeDasharray="8 10"
          strokeLinecap="round"
          mask="url(#trail-reveal)"
        />

        {/* Pin markers */}
        {STOPS.map((stop, i) => {
          const stopProgress = i / (STOPS.length - 1);
          const isReached = progress >= stopProgress - 0.03;
          const isActive  = activeStop?.id === stop.id;
          const colors    = getPinColors(stop.tipo, isActive);
          const scale     = isActive ? 1.25 : 1;

          return (
            <g
              key={stop.id}
              style={{
                opacity: isReached ? 1 : 0,
                transition: "opacity 0.45s ease",
                cursor: "pointer",
                transformOrigin: `${stop.cx}px ${stop.cy}px`,
                transform: `scale(${scale})`,
                transitionProperty: "opacity, transform",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease",
              }}
              onClick={() => handlePin(stop)}
              onMouseEnter={() => !isMobile && setActiveStop(stop)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), handlePin(stop))}
              role="button"
              tabIndex={isReached ? 0 : -1}
              aria-label={`${stop.nombre} — ${stop.km}`}
              aria-pressed={isActive}
            >
              {/* Pin body */}
              <path
                d={PIN_BODY}
                fill={colors.body}
                stroke={stop.tipo === "tecnico" && !isActive ? "#7A52B8" : "rgba(247,248,252,0.3)"}
                strokeWidth="1"
                transform={`translate(${stop.cx}, ${stop.cy})`}
                filter={isActive ? "url(#pin-shadow-active)" : "url(#pin-shadow)"}
                style={{ transition: "fill 0.25s ease" }}
              />

              {/* Ícono montaña dentro del pin */}
              <path
                d={MOUNTAIN_ICON}
                fill={colors.icon}
                transform={`translate(${stop.cx}, ${stop.cy})`}
                style={{ pointerEvents: "none", transition: "fill 0.25s ease" }}
              />

              {/* Halo pulsante en destino */}
              {stop.tipo === "destino" && motionOk && (
                <ellipse
                  cx={stop.cx}
                  cy={stop.cy - 22}
                  rx="20"
                  ry="20"
                  fill="none"
                  stroke="rgba(122,82,184,0.4)"
                  strokeWidth="1.5"
                >
                  <animate attributeName="rx" values="20;34;20" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="ry" values="20;34;20" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
                </ellipse>
              )}

              {/* Etiqueta del número debajo del pin */}
              <text
                x={stop.cx}
                y={stop.cy + 14}
                textAnchor="middle"
                fill="rgba(247,248,252,0.5)"
                fontSize="8"
                fontFamily="monospace"
                fontWeight="bold"
                style={{ userSelect: "none", pointerEvents: "none" }}
              >
                {String(stop.id).padStart(2, "0")}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Info card — esquina inferior derecha */}
      {activeStop && (
        <div
          key={activeStop.id}
          className="absolute bottom-6 right-6 z-30 w-72 border border-bone/12 bg-ink/92 backdrop-blur-sm sm:bottom-8 sm:right-8 sm:w-80 md:w-88"
        >
          {/* Franja de color superior según tipo */}
          <div
            className="h-1 w-full"
            style={{
              background:
                activeStop.tipo === "tecnico" || activeStop.tipo === "destino"
                  ? "#7A52B8"
                  : "rgba(247,248,252,0.15)",
            }}
          />

          <div className="p-5">
            {/* Tipo + km */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-violet-light">
                {activeStop.label}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-bone/35">
                {activeStop.km}
              </span>
            </div>

            {/* Nombre */}
            <h3 className="mt-2 font-display text-[1.7rem] uppercase leading-tight text-bone sm:text-3xl">
              {activeStop.nombre}
            </h3>

            <span className="mt-4 block h-px bg-bone/8" />

            {/* Descripción */}
            <p className="mt-4 font-mono text-[11px] leading-relaxed text-bone/60">
              {activeStop.descripcion}
            </p>

            {/* Meta: tiempo + altitud */}
            <div className="mt-5 flex items-center gap-6">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-bone/30">
                  Tiempo acumulado
                </p>
                <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-bone/75">
                  {activeStop.tiempo}
                </p>
              </div>
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-bone/30">
                  Altitud
                </p>
                <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-bone/75">
                  {activeStop.altitud}
                </p>
              </div>
            </div>
          </div>

          {/* Corner accents */}
          <span className="absolute left-0 top-0 block h-4 w-px bg-violet-light" />
          <span className="absolute left-0 top-0 block h-px w-4 bg-violet-light" />
          <span className="absolute bottom-0 right-0 block h-4 w-px bg-violet-light" />
          <span className="absolute bottom-0 right-0 block h-px w-4 bg-violet-light" />
        </div>
      )}

      {/* Hint bottom-left */}
      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 md:left-10 lg:left-16">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-light" />
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-bone/35">
          {isMobile ? "Tocá los puntos del recorrido" : "Hover sobre cada parada"}
        </p>
      </div>
    </section>
  );
}
