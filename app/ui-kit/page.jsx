import {
  BadgeCheck,
  ShieldCheck,
  Calendar,
  Clock,
  Mountain,
  Star,
  ArrowRight,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";

export const metadata = {
  title: "UI Kit — Cúspide",
  description: "Guía de estilo del sitio de Cúspide.",
};

const colors = [
  { name: "Ink", varName: "--color-ink", hex: "#18102B", className: "bg-ink", text: "text-bone", desc: "Fondo oscuro, texto principal, nav. Botón de itinerario." },
  { name: "Stone", varName: "--color-stone", hex: "#4B4D52", className: "bg-stone", text: "text-bone", desc: "Texto de cuerpo secundario, íconos inactivos." },
  { name: "Stone light", varName: "--color-stone-light", hex: "#8A8C91", className: "bg-stone-light", text: "text-ink", desc: "Placeholders, texto terciario." },
  { name: "Bone", varName: "--color-bone", hex: "#F7F8FC", className: "bg-bone border border-stone/15", text: "text-ink", desc: "Fondo general del sitio. Nunca blanco puro." },
  { name: "Teal", varName: "--color-teal", hex: "#05CDC2", className: "bg-teal", text: "text-ink", desc: "Acento interactivo — solo sobre fondos oscuros." },
  { name: "Teal dark", varName: "--color-teal-dark", hex: "#0F6E56", className: "bg-teal-dark", text: "text-bone", desc: "Turquesa oscuro, texto sobre fondo claro." },
  { name: "Violeta", varName: "--color-violet", hex: "#5B3894", className: "bg-violet", text: "text-bone", desc: "Color primario de acción. Botones, badges, superficies." },
  { name: "Violeta claro", varName: "--color-violet-light", hex: "#7A52B8", className: "bg-violet-light", text: "text-bone", desc: "Hover de violeta, bordes en fondo oscuro." },
  { name: "Violeta oscuro", varName: "--color-violet-dark", hex: "#3C2568", className: "bg-violet-dark", text: "text-bone", desc: "Hover de botón violeta, texto sobre fondo claro." },
  { name: "Risk", varName: "--color-risk", hex: "#E24B4A", className: "bg-risk", text: "text-bone", desc: "Reservado para peligro / protocolo. Declarado, sin uso actual en UI." },
];

const radii = [
  { label: "rounded-xs", cls: "rounded-xs", use: "Barras de dificultad" },
  { label: "rounded-sm", cls: "rounded-sm", use: "Cola de burbuja (reviews)" },
  { label: "rounded-md", cls: "rounded-md", use: "Botones CTA" },
  { label: "rounded-lg", cls: "rounded-lg", use: "Inputs, paneles chicos" },
  { label: "rounded-xl", cls: "rounded-xl", use: "Cards chicas, stat tiles" },
  { label: "rounded-2xl", cls: "rounded-2xl", use: "Cards principales" },
  { label: "rounded-full", cls: "rounded-full", use: "Chips de ícono, avatares, dots" },
];

const shadows = [
  { label: "shadow-sm", cls: "shadow-sm" },
  { label: "shadow-md", cls: "shadow-md" },
  { label: "shadow-lg", cls: "shadow-lg" },
  { label: "shadow-xl", cls: "shadow-xl" },
  { label: "card (arbitrary)", cls: "shadow-[0_4px_24px_rgba(0,0,0,0.08)]" },
  { label: "card hover (arbitrary)", cls: "shadow-[0_8px_32px_rgba(0,0,0,0.14)]" },
];

const sections = [
  ["color", "Color"],
  ["tipografia", "Tipografía"],
  ["botones", "Botones"],
  ["badges", "Badges & Pills"],
  ["cards", "Cards & Stats"],
  ["formularios", "Formularios"],
  ["iconos", "Íconos & Estados"],
  ["radios", "Radios & Sombras"],
];

function SectionHeader({ n, kicker, title, desc }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-dark">
        {n} — {kicker}
      </p>
      <h2 className="mt-2 font-display text-2xl uppercase text-ink sm:text-3xl">{title}</h2>
      {desc && <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone">{desc}</p>}
    </div>
  );
}

export default function UIKitPage() {
  return (
    <div className="bg-bone">
      {/* Hero oscuro — para que el navbar (texto bone) sea legible */}
      <section className="bg-ink px-6 pb-16 pt-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal">
            Sistema de diseño
          </p>
          <h1 className="mt-3 font-display text-4xl uppercase leading-none text-bone sm:text-5xl">
            UI Kit
            <br />
            Cúspide
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone/60">
            Guía de estilo extraída del sitio de Cúspide: paleta, tipografía, botones, badges,
            cards y componentes de formulario, listos para reutilizar en nuevas páginas.
          </p>
          <nav className="mt-8 flex flex-wrap gap-2">
            {sections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-md border border-bone/15 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-bone/70 transition hover:border-teal hover:text-teal"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-24 px-6 py-20 md:px-10 lg:px-16">
        {/* 01 — Color */}
        <section id="color" className="scroll-mt-24">
          <SectionHeader
            n="01"
            kicker="Color"
            title="Paleta"
            desc="Base ink + violeta como color primario de acción, con teal como único acento vivo. Fondo general en bone, nunca blanco puro."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {colors.map((c) => (
              <div key={c.name} className="overflow-hidden rounded-xl border border-stone/15 bg-white shadow-sm">
                <div className={`flex h-20 items-end p-3 ${c.className} ${c.text}`}>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em]">{c.hex}</span>
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-ink">{c.name}</p>
                  <p className="mt-0.5 font-mono text-[9px] text-stone-light">{c.varName}</p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-stone">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 02 — Tipografía */}
        <section id="tipografia" className="scroll-mt-24">
          <SectionHeader
            n="02"
            kicker="Type"
            title="Tipografía"
            desc="Tres familias con roles fijos: normalidad-ultraextended (display) para títulos de impacto, Inter para texto de lectura, JetBrains Mono para labels, nav y detalles técnicos."
          />
          <div className="divide-y divide-stone/10 rounded-2xl border border-stone/15 bg-white">
            <TypeRow label="Display / H1" sub="normalidad-ultraextended · uppercase">
              <p className="font-display text-3xl uppercase text-ink">Fitz Roy</p>
            </TypeRow>
            <TypeRow label="Display / H2" sub="normalidad-ultraextended · uppercase">
              <p className="font-display text-xl uppercase text-ink">La expedición</p>
            </TypeRow>
            <TypeRow label="Eyebrow" sub="font-mono · uppercase · tracking-[0.28em]">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-dark">
                Reservá tu cupo
              </p>
            </TypeRow>
            <TypeRow label="Lead / intro" sub="font-sans · text-base">
              <p className="text-base leading-relaxed text-ink">
                Con sus 3.405 metros, el Monte Fitz Roy es una de las montañas más difíciles y
                hermosas del mundo.
              </p>
            </TypeRow>
            <TypeRow label="Body" sub="font-sans · text-sm">
              <p className="text-sm leading-relaxed text-stone">
                Vas a estar acompañado en todo momento por guías certificados con años de
                experiencia en la zona.
              </p>
            </TypeRow>
            <TypeRow label="UI / label" sub="font-mono · uppercase · tracking-[0.18em]">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                Fecha preferida
              </p>
            </TypeRow>
          </div>
        </section>

        {/* 03 — Botones */}
        <section id="botones" className="scroll-mt-24">
          <SectionHeader
            n="03"
            kicker="Acciones"
            title="Botones"
            desc="El violeta se reserva para la acción principal. El resto usa contorno o texto simple."
          />
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-md bg-violet px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-bone transition hover:bg-violet-dark">
              Enviar solicitud
            </button>
            <button className="rounded-md border border-ink px-6 py-2.5 text-xs uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-bone">
              Ver más cimas
            </button>
            <button className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-stone transition hover:text-ink">
              Contacto <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl bg-ink p-6">
            <button className="rounded-md border border-white px-5 py-2 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-violet hover:text-bone">
              Descubrí la ruta
            </button>
            <button className="rounded-md bg-violet px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-bone transition hover:bg-bone hover:text-ink">
              Reservar mi lugar
            </button>
          </div>
        </section>

        {/* 04 — Badges & Pills */}
        <section id="badges" className="scroll-mt-24">
          <SectionHeader
            n="04"
            kicker="Etiquetas"
            title="Badges & Pills"
            desc="No hay un componente de pill de texto genérico en el sitio: los patrones reales son la cinta de 'Plan destacado', los chips circulares de ícono y las barras de dificultad."
          />
          <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-stone/15 bg-white p-6">
            <span className="flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-violet px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-bone shadow-md">
              Plan destacado
            </span>

            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet/10">
              <ShieldCheck className="h-5 w-5 text-violet-dark" />
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet/10 font-mono text-xs font-bold text-violet-dark ring-2 ring-bone">
              MF
            </span>

            <div className="flex items-end gap-0.5" aria-label="Dificultad">
              {[8, 12, 16, 20, 24].map((h, i) => (
                <span
                  key={h}
                  className={`w-1 rounded-xs ${i < 3 ? "bg-teal" : "bg-stone/15"}`}
                  style={{ height: h }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 05 — Cards & Stats */}
        <section id="cards" className="scroll-mt-24">
          <SectionHeader
            n="05"
            kicker="Componentes"
            title="Cards & Stats"
            desc="Stats en grilla sólida con ícono; cards de programa con imagen y gradiente; itinerario con número circular en ink."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Mountain, value: "3.405 m", label: "Altura" },
              { icon: Clock, value: "8 días", label: "Duración" },
              { icon: Star, value: "Extrema", label: "Dificultad" },
              { icon: BadgeCheck, value: "4 a 8", label: "Grupo" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col justify-between gap-3 rounded-xl border border-stone/10 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_6px_28px_rgba(5,205,194,0.14)]"
              >
                <s.icon className="h-4 w-4 text-teal-dark" />
                <div>
                  <p className="font-display text-sm uppercase text-ink">{s.value}</p>
                  <p className="mt-0.5 text-[11px] text-stone">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-ink shadow-[0_4px_24px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:shadow-[0_8px_36px_rgba(0,0,0,0.35)]">
              <div className="flex h-32 items-end bg-gradient-to-br from-violet-dark to-ink p-4">
                <p className="font-display text-lg uppercase text-bone">Fitz Roy</p>
              </div>
              <div className="flex flex-1 items-center justify-between p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone/50">
                  El Chaltén, Santa Cruz
                </p>
                <span className="rounded-md bg-teal px-2.5 py-1 font-mono text-[10px] font-semibold uppercase text-ink">
                  USD 2.400
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-stone/15 bg-white/70 p-6 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet/10 font-mono text-xs font-bold text-violet-dark">
                01
              </span>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-violet-dark">
                  Día 1
                </p>
                <p className="mt-1 font-display text-sm uppercase text-ink">
                  Llegada a El Chaltén
                </p>
                <p className="mt-2 text-xs leading-relaxed text-stone">
                  Recepción del grupo, revisión de equipo y briefing con los guías.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 06 — Formularios */}
        <section id="formularios" className="scroll-mt-24">
          <SectionHeader
            n="06"
            kicker="Inputs"
            title="Formularios"
            desc="Fondo bone con borde stone/15; foco en violeta. El sitio usa placeholders en vez de labels visibles."
          />
          <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Nombre y apellido"
                className="w-full rounded-lg border border-stone/15 bg-stone/5 px-4 py-3 text-sm text-ink placeholder:text-stone-light outline-none transition focus:border-violet focus:bg-white focus:ring-2 focus:ring-violet/15"
              />
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full rounded-lg border border-stone/15 bg-stone/5 px-4 py-3 text-sm text-ink placeholder:text-stone-light outline-none transition focus:border-violet focus:bg-white focus:ring-2 focus:ring-violet/15"
              />
            </div>
            <select
              defaultValue=""
              className="mt-4 w-full cursor-pointer appearance-none rounded-lg border border-stone/15 bg-stone/5 px-4 py-3 text-sm text-stone-light outline-none transition focus:border-violet focus:bg-white focus:ring-2 focus:ring-violet/15"
            >
              <option value="" disabled>
                Fecha preferida
              </option>
              <option>Noviembre 2026</option>
            </select>
            <button className="mt-5 w-full rounded-lg bg-violet py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-bone transition hover:bg-violet-dark sm:w-auto sm:px-8">
              Enviar solicitud
            </button>
          </div>
        </section>

        {/* 07 — Íconos & Estados */}
        <section id="iconos" className="scroll-mt-24">
          <SectionHeader
            n="07"
            kicker="Feedback"
            title="Íconos & Estados"
            desc="Biblioteca: lucide-react. El teal es el único acento 'positivo' del sitio — no hay un token de éxito en verde. El rojo (--color-risk) está declarado para peligro/protocolo pero sin uso actual en componentes."
          />
          <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-stone/15 bg-white p-6">
            {[BadgeCheck, ShieldCheck, Calendar, Clock, Mountain, Star, MapPin, Plus, Minus].map(
              (Icon, i) => (
                <span key={i} className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5">
                  <Icon className="h-4.5 w-4.5 text-ink" />
                </span>
              )
            )}
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet/10 text-violet-dark">
              ✓
            </span>
            <span className="rounded-md bg-risk px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bone">
              Riesgo · sin uso actual
            </span>
          </div>
        </section>

        {/* 08 — Radios & Sombras */}
        <section id="radios" className="scroll-mt-24">
          <SectionHeader
            n="08"
            kicker="Superficie"
            title="Radios & Sombras"
            desc="Esquinas siempre redondeadas (12–22px en componentes, pill en botones/badges). Sombras suaves con tinte navy, nunca negro puro."
          />
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {radii.map((r) => (
              <div key={r.label} className="text-center">
                <div className={`h-16 w-full bg-ink ${r.cls}`} />
                <p className="mt-2 font-mono text-[9px] uppercase text-stone">{r.label}</p>
                <p className="text-[10px] text-stone-light">{r.use}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {shadows.map((s) => (
              <div key={s.label} className="rounded-xl bg-bone p-6 text-center">
                <div className={`h-16 w-full rounded-xl bg-white ${s.cls}`} />
                <p className="mt-3 font-mono text-[9px] uppercase text-stone">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="border-t border-stone/15 bg-bone px-6 py-10 text-center md:px-10">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone-light">
          Cúspide — UI Kit generado a partir del código fuente del sitio
        </p>
      </div>
    </div>
  );
}

function TypeRow({ label, sub, children }) {
  return (
    <div className="grid gap-1 p-5 sm:grid-cols-[180px_1fr] sm:items-center sm:gap-6">
      <div>
        <p className="text-xs font-semibold text-ink">{label}</p>
        <p className="font-mono text-[10px] text-stone-light">{sub}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
