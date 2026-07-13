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
  title: "Kit de interfaz — Cúspides",
  description: "Referencia interna de estilos y componentes del sitio de Cúspides.",
};

const colors = [
  { name: "Ink", varName: "--color-ink", hex: "#18102B", className: "bg-ink", desc: "Fondo oscuro, texto principal, nav. Botón de itinerario." },
  { name: "Stone", varName: "--color-stone", hex: "#4B4D52", className: "bg-stone", desc: "Texto de cuerpo secundario, íconos inactivos." },
  { name: "Stone light", varName: "--color-stone-light", hex: "#8A8C91", className: "bg-stone-light", desc: "Placeholders, texto terciario." },
  { name: "Bone", varName: "--color-bone", hex: "#F7F8FC", className: "bg-bone border border-stone/20", desc: "Fondo general del sitio. Nunca blanco puro." },
  { name: "Violeta", varName: "--color-violet", hex: "#5B3894", className: "bg-violet", desc: "Color primario de acción. Botones, badges, superficies." },
  { name: "Violeta claro", varName: "--color-violet-light", hex: "#7A52B8", className: "bg-violet-light", desc: "Hover de violeta, bordes en fondo oscuro." },
  { name: "Violeta oscuro", varName: "--color-violet-dark", hex: "#3C2568", className: "bg-violet-dark", desc: "Hover de botón violeta, texto sobre fondo claro." },
  { name: "Turquesa", varName: "--color-teal", hex: "#05CDC2", className: "bg-teal", desc: "Acento interactivo — solo sobre fondos oscuros (protocolos de seguridad, itinerario)." },
  { name: "Turquesa oscuro", varName: "--color-teal-dark", hex: "#0F6E56", className: "bg-teal-dark", desc: "Variante de turquesa para texto sobre fondo claro." },
  { name: "Riesgo", varName: "--color-risk", hex: "#E24B4A", className: "bg-(--color-risk)", desc: "Reservado para peligro/protocolo. Declarado en globals.css, sin uso activo todavía." },
];

const surface = [
  { label: "xs", cls: "rounded-xs", note: "Barras de nivel" },
  { label: "sm", cls: "rounded-sm", note: "Cola de burbuja" },
  { label: "md", cls: "rounded-md", note: "Botones" },
  { label: "lg", cls: "rounded-lg", note: "Inputs, paneles chicos" },
  { label: "xl", cls: "rounded-xl", note: "Cards chicas, stat tiles" },
  { label: "2xl", cls: "rounded-2xl", note: "Cards principales" },
  { label: "full", cls: "rounded-full", note: "Chips, avatares, dots" },
];

const depth = [
  { label: "sm", cls: "shadow-sm" },
  { label: "md", cls: "shadow-md" },
  { label: "lg", cls: "shadow-lg" },
  { label: "xl", cls: "shadow-xl" },
  { label: "card", cls: "shadow-[0_4px_24px_rgba(0,0,0,0.08)]" },
  { label: "card · hover", cls: "shadow-[0_8px_32px_rgba(0,0,0,0.14)]" },
];

const groups = [
  {
    label: "Base",
    items: [
      ["color", "Paleta"],
      ["tipografia", "Tipografía"],
      ["superficie", "Radios y sombras"],
    ],
  },
  {
    label: "Interacción",
    items: [
      ["botones", "Botones"],
      ["estados", "Chips y estados"],
    ],
  },
  {
    label: "Contenido",
    items: [
      ["contenedores", "Tarjetas y métricas"],
      ["protocolos", "Sección sobre fondo oscuro"],
      ["formularios", "Formularios"],
    ],
  },
  {
    label: "Utilidades",
    items: [["utilidades", "Fondos y formas"]],
  },
];

function Block({ id, eyebrow, title, desc, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-stone/15 pt-14 first:border-t-0 first:pt-0">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-violet">{eyebrow}</p>
      <h2 className="mt-2 font-display text-2xl uppercase text-ink sm:text-[28px]">{title}</h2>
      {desc && <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone">{desc}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function UIKitPage() {
  return (
    <div className="bg-bone">
      <section className="relative overflow-hidden bg-ink px-6 pb-14 pt-32 md:px-10 lg:px-16">
        <div className="map-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-violet-light">
            Documentación interna
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl uppercase leading-tight text-bone sm:text-4xl">
            Piezas visuales del sitio de Cúspides
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone/60">
            Relevamiento de los estilos ya construidos en el sitio — color, tipografía, botones
            y componentes — para usar como referencia antes de armar una pantalla nueva.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[200px_1fr] lg:gap-16 lg:px-16">
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-8">
            {groups.map((g) => (
              <div key={g.label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-light">
                  {g.label}
                </p>
                <ul className="mt-3 space-y-2">
                  {g.items.map(([id, label]) => (
                    <li key={id}>
                      <a href={`#${id}`} className="text-xs text-stone transition hover:text-violet-dark">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        <div className="space-y-14">
          <Block
            id="color"
            eyebrow="Base"
            title="Paleta"
            desc="Base ink como texto y superficies oscuras, violeta como único color de acción. Fondo general en bone, nunca blanco puro."
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {colors.map((c) => (
                <div key={c.name} className="flex items-center gap-3 rounded-lg border border-stone/15 bg-white p-3">
                  <span className={`h-10 w-10 shrink-0 rounded-md ${c.className}`} />
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-ink">{c.name}</p>
                    <p className="font-mono text-[9px] text-stone-light">{c.hex}</p>
                  </div>
                </div>
              ))}
            </div>
            <ul className="mt-5 space-y-1.5">
              {colors.map((c) => (
                <li key={c.name} className="text-[11px] leading-relaxed text-stone">
                  <span className="font-semibold text-ink">{c.name}</span> — {c.desc}
                </li>
              ))}
            </ul>
          </Block>

          <Block
            id="tipografia"
            eyebrow="Base"
            title="Tipografía"
            desc="normalidad-ultraextended queda reservada a títulos, Inter resuelve toda la lectura larga y JetBrains Mono marca lo técnico: labels, navegación y datos."
          >
            <div className="space-y-6 rounded-2xl border border-stone/15 bg-white p-6 sm:p-8">
              <div>
                <p className="font-display text-4xl uppercase leading-none text-ink">Cúspides</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-stone-light">
                  Display / H1
                </p>
              </div>
              <div>
                <p className="font-display text-xl uppercase text-ink">El recorrido</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-stone-light">
                  Display / H2
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-dark">
                  Próxima salida
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-stone-light">
                  Eyebrow
                </p>
              </div>
              <div>
                <p className="max-w-md text-base leading-relaxed text-ink">
                  Cada tramo del recorrido combina preparación técnica con acompañamiento
                  constante del equipo de guías.
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-stone-light">
                  Lead / intro
                </p>
              </div>
              <div>
                <p className="max-w-md text-sm leading-relaxed text-stone">
                  El interlineado generoso y el contraste moderado sobre bone priorizan la
                  lectura de textos largos.
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-stone-light">
                  Body
                </p>
              </div>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                  Tipo de recorrido
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-stone-light">
                  UI / label
                </p>
              </div>
            </div>
          </Block>

          <Block
            id="superficie"
            eyebrow="Base"
            title="Radios y sombras"
            desc="Nada de esquinas vivas: el radio crece con el tamaño del componente hasta llegar a pill en botones y chips. Las sombras usan un tinte suave, nunca negro puro."
          >
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
              {surface.map((r) => (
                <div key={r.label} className="text-center">
                  <div className={`h-14 bg-ink ${r.cls} ${r.label === "full" ? "aspect-square" : ""}`} />
                  <p className="mt-2 text-[10px] font-semibold text-ink">{r.label}</p>
                  <p className="text-[9px] text-stone-light">{r.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {depth.map((s) => (
                <div key={s.label} className="rounded-lg bg-bone p-4 text-center">
                  <div className={`h-12 w-full rounded-lg bg-white ${s.cls}`} />
                  <p className="mt-2 text-[9px] uppercase text-stone">{s.label}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block
            id="botones"
            eyebrow="Interacción"
            title="Botones"
            desc="Un único botón sólido por pantalla. Las acciones secundarias van con borde o como texto simple con flecha."
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-md bg-violet px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-bone transition hover:bg-violet-dark">
                  Confirmar reserva
                </button>
                <button className="rounded-md border border-ink px-6 py-2.5 text-xs uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-bone">
                  Ver todos los programas
                </button>
                <button className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-stone transition hover:text-ink">
                  Hablar con un guía <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-ink p-6">
                <button className="rounded-md border border-white px-5 py-2 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-violet hover:text-bone">
                  Explorar el recorrido
                </button>
                <button className="rounded-md bg-violet px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-bone transition hover:bg-bone hover:text-ink">
                  Confirmar cupo
                </button>
              </div>
            </div>
          </Block>

          <Block
            id="estados"
            eyebrow="Interacción"
            title="Chips y estados"
            desc="No hay un pill de texto genérico en el sitio: los patrones reales son la cinta de estado destacado, los chips circulares de ícono, las barras de nivel y los íconos de feedback."
          >
            <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-stone/15 bg-white p-6">
              <span className="flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-violet px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-bone shadow-md">
                Cupos abiertos
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet/10">
                <ShieldCheck className="h-5 w-5 text-violet-dark" />
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet/10 font-mono text-xs font-bold text-violet-dark ring-2 ring-bone">
                CE
              </span>

              <div className="flex items-end gap-0.5" aria-label="Nivel">
                {[8, 12, 16, 20, 24].map((h, i) => (
                  <span
                    key={h}
                    className={`w-1 rounded-xs ${i < 3 ? "bg-violet" : "bg-stone/15"}`}
                    style={{ height: h }}
                  />
                ))}
              </div>

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet/10 text-violet-dark">
                ✓
              </span>

              {[BadgeCheck, Calendar, MapPin].map((Icon, i) => (
                <span key={i} className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5">
                  <Icon className="h-4.5 w-4.5 text-ink" />
                </span>
              ))}
            </div>
          </Block>

          <Block
            id="contenedores"
            eyebrow="Contenido"
            title="Tarjetas y métricas"
            desc="Tres formatos conviven: la grilla de stats con ícono, la card con imagen y degradado, y el bloque de itinerario numerado."
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Mountain, value: "3.405 m", label: "Altura" },
                { icon: Clock, value: "8 días", label: "Duración" },
                { icon: Star, value: "Extrema", label: "Dificultad" },
                { icon: BadgeCheck, value: "4 a 8", label: "Grupo" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col justify-between gap-3 rounded-xl border border-stone/10 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_6px_28px_rgba(91,56,148,0.14)]"
                >
                  <s.icon className="h-4 w-4 text-violet-dark" />
                  <div>
                    <p className="font-display text-sm uppercase text-ink">{s.value}</p>
                    <p className="mt-0.5 text-[11px] text-stone">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-ink shadow-[0_4px_24px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:shadow-[0_8px_36px_rgba(0,0,0,0.35)]">
                <div className="flex h-32 items-end bg-linear-to-br from-violet-dark to-ink p-4">
                  <p className="font-display text-lg uppercase text-bone">Cúspides</p>
                </div>
                <div className="flex flex-1 items-center justify-between p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone/50">
                    Variante de card oscura
                  </p>
                  <span className="rounded-md bg-violet px-2.5 py-1 font-mono text-[10px] font-semibold uppercase text-bone">
                    Desde USD 1.950
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-stone/15 bg-white/70 p-6 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet/10 font-mono text-xs font-bold text-violet-dark">
                  01
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-violet-dark">
                    Paso 1
                  </p>
                  <p className="mt-1 font-display text-sm uppercase text-ink">Nombre del paso</p>
                  <p className="mt-2 text-xs leading-relaxed text-stone">
                    Descripción breve de apoyo para este paso del recorrido.
                  </p>
                </div>
              </div>
            </div>
          </Block>

          <Block
            id="protocolos"
            eyebrow="Contenido"
            title="Sección sobre fondo oscuro"
            desc="Patrón de bloque destacado en fondo ink: el turquesa reemplaza al violeta como acento cuando la superficie es oscura, con textura de grilla de mapa y punto parpadeante de estado."
          >
            <div className="relative overflow-hidden rounded-2xl bg-ink">
              <div className="map-grid pointer-events-none absolute inset-0" />
              <div className="relative grid grid-cols-1 sm:grid-cols-[1fr_2fr]">
                <div className="flex flex-col justify-center border-b border-teal/15 px-6 py-8 sm:border-b-0 sm:border-r sm:px-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal/50">
                    Eyebrow sobre fondo oscuro
                  </p>
                  <p className="mt-3 font-display text-xl uppercase leading-[0.95] text-bone">
                    Con acento{" "}
                    <span className="bg-linear-to-r text-gradient-cool">turquesa.</span>
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  {["01", "02"].map((n) => (
                    <div
                      key={n}
                      className="group relative border-b border-bone/6 px-6 py-6 transition-colors duration-300 last:border-b-0 hover:bg-teal/[0.04] sm:border-r sm:border-b-0 sm:last:border-r-0"
                    >
                      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-teal transition-transform duration-400 ease-out group-hover:scale-x-100" />
                      <div className="mb-3 flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-[0.1em] text-teal">{n}</span>
                        <span className="animate-blink-dot h-[5px] w-[5px] rounded-full bg-teal" />
                      </div>
                      <p className="font-display text-sm uppercase text-bone/60 transition-colors duration-300 group-hover:text-bone">
                        Título de la tarjeta
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Block>

          <Block
            id="formularios"
            eyebrow="Contenido"
            title="Formularios"
            desc="Los campos no llevan label visible: el placeholder cumple esa función hasta que el usuario escribe."
          >
            <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full rounded-lg border border-stone/15 bg-stone/5 px-4 py-3 text-sm text-ink placeholder:text-stone-light outline-none transition focus:border-violet focus:bg-white focus:ring-2 focus:ring-violet/15"
                />
                <input
                  type="tel"
                  placeholder="Teléfono de contacto"
                  className="w-full rounded-lg border border-stone/15 bg-stone/5 px-4 py-3 text-sm text-ink placeholder:text-stone-light outline-none transition focus:border-violet focus:bg-white focus:ring-2 focus:ring-violet/15"
                />
              </div>
              <select
                defaultValue=""
                className="mt-4 w-full cursor-pointer appearance-none rounded-lg border border-stone/15 bg-stone/5 px-4 py-3 text-sm text-stone-light outline-none transition focus:border-violet focus:bg-white focus:ring-2 focus:ring-violet/15"
              >
                <option value="" disabled>
                  Seleccioná un recorrido
                </option>
                <option>Disponibilidad 2026</option>
              </select>
              <button className="mt-5 w-full rounded-lg bg-violet py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-bone transition hover:bg-violet-dark sm:w-auto sm:px-8">
                Enviar formulario
              </button>

              <select
                defaultValue=""
                className="custom-select mt-4 w-full cursor-pointer appearance-none rounded-lg border border-stone/15 bg-stone/5 px-4 py-3 text-sm text-stone-light outline-none transition focus:border-violet focus:bg-white focus:ring-2 focus:ring-violet/15"
              >
                <option value="" disabled>
                  Select custom (Nivel de experiencia)
                </option>
                <option>Principiante</option>
                <option>Intermedio</option>
                <option>Avanzado</option>
              </select>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-stone-light">
                .custom-select — popup con estilos de marca en navegadores compatibles
              </p>
            </div>
          </Block>

          <Block
            id="utilidades"
            eyebrow="Utilidades"
            title="Fondos y formas"
            desc="Clases de apoyo usadas para dar textura y quiebre geométrico a secciones enteras, más allá de componentes puntuales."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex h-28 items-center justify-center rounded-2xl bg-ink px-4">
                <p className="bg-linear-to-r text-gradient-cool font-display text-lg uppercase">
                  Degradado violeta → turquesa
                </p>
              </div>

              <div className="flex h-28 items-center justify-center rounded-2xl bg-violet/10">
                <span className="blob h-16 w-16 bg-violet/60" />
                <p className="ml-4 font-mono text-[10px] uppercase tracking-[0.16em] text-stone">
                  .blob — forma orgánica
                </p>
              </div>

              <div className="diagonal-top h-24 bg-ink px-4 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/60">
                  .diagonal-top
                </p>
              </div>

              <div className="diagonal-bottom h-24 bg-ink px-4 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/60">
                  .diagonal-bottom
                </p>
              </div>
            </div>
          </Block>
        </div>
      </div>

      <div className="border-t border-stone/15 bg-bone px-6 py-10 text-center md:px-10">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone-light">
          Cúspides — Referencia interna de interfaz
        </p>
      </div>
    </div>
  );
}
