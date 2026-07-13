"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Parallax from "./Parallax";

const team = [
  {
    name: "Martín Aguirre",
    initials: "MA",
    cert: "UIAGM / IFMGA",
    years: "16 años",
    specialty: "Rescate en grietas",
    detail: "Especialista en rescate glaciar, progresión en hielo y autorrescate.",
    image: "/images/Martin-Aguirre.png",
  },
  {
    name: "Lucía Beltrán",
    initials: "LB",
    cert: "Wilderness First Responder",
    years: "11 años",
    specialty: "Medicina de montaña",
    detail: "Atención en zonas remotas, evaluación de riesgo y primeros auxilios.",
    image: "/images/Lucia-Beltran.png",
  },
  {
    name: "Tomás Ferreyra",
    initials: "TF",
    cert: "UIAGM / IFMGA",
    years: "14 años",
    specialty: "Progresión en hielo",
    detail: "Técnica de crampones, cuerdas fijas y seguridad en terreno glaciario.",
    image: "/images/Martin-Ferreyraa.png",
  },
  {
    name: "Ana Reyes",
    initials: "AR",
    cert: "AMGA Alpine Guide",
    years: "9 años",
    specialty: "Expediciones de alta montaña",
    detail: "Planificación, logística, meteorología y gestión de grupos en altura.",
    image: "/images/Ana-Reeyes.png",
  },
];

export default function Team() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="equipo-tecnico"
      className="flex min-h-screen flex-col justify-center border-t border-white/10 bg-ink py-10 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.32em] text-violet-light sm:text-left">
            Equipo técnico
          </p>

          <span className="mx-auto mt-3 block h-[2px] w-12 bg-violet-light sm:mx-0" />

          <h2 className="mx-auto mt-4 max-w-4xl wrap-break-word text-center font-display text-2xl uppercase leading-[0.95] text-bone sm:mx-0 sm:text-left sm:text-3xl md:text-4xl">
            <span className="bg-gradient-to-r text-gradient-cool">
              Instructores,
            </span>
            <br />
            no anfitriones.
          </h2>
        </Reveal>

        <div className="mt-6 flex h-[50vh] min-h-96 flex-col gap-2 sm:h-[52vh] sm:min-h-100 sm:flex-row md:gap-3">
          {team.map((member, i) => {
            const isActive = active === i;
            const [firstName, ...lastNameParts] = member.name.split(" ");
            const lastName = lastNameParts.join(" ");

            return (
              <div
                key={member.name}
                className={`transition-all duration-500 ease-in-out ${
                  isActive ? "flex-[4.4]" : "flex-1"
                }`}
              >
                <Reveal delay={100 + i * 90} className="h-full">
                  <div
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group relative h-full cursor-pointer overflow-hidden border border-bone/60 bg-ink"
                  >
                  <Parallax strength={0.08}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      quality={90}
                      className={`object-cover object-[center_15%] transition-all duration-700 ${
                        isActive
                          ? "scale-100 grayscale-0"
                          : "scale-105 grayscale brightness-[0.52]"
                      }`}
                    />
                  </Parallax>

                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-t from-ink/88 via-ink/35 to-ink/10"
                        : "bg-ink/48"
                    }`}
                  />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(122,82,184,0.12),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_80%,rgba(122,82,184,0.06),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Cerrado */}
                  <div
                    className={`absolute inset-0 flex flex-row items-center justify-between gap-4 px-5 py-4 transition-opacity duration-300 sm:flex-col sm:items-stretch sm:py-7 ${
                      isActive ? "pointer-events-none opacity-0" : "opacity-100"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:block">
                      <p className="font-display text-2xl text-bone/40">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <span className="hidden h-px w-8 bg-violet-light sm:mt-3 sm:block" />
                    </div>

                    <p className="font-mono text-xs font-semibold uppercase leading-tight tracking-[0.18em] text-bone sm:[writing-mode:vertical-rl] sm:rotate-180">
                      {member.specialty}
                    </p>

                    <div className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-bone/70 sm:block">
                      <p className="text-bone/45">Cert.</p>
                      <p className="mt-1 text-bone/90">{member.cert.split(" / ")[0]}</p>
                      <p className="mt-4 text-bone/45">Exp.</p>
                      <p className="mt-1 text-bone/90">{member.years}</p>
                    </div>
                  </div>

                  {/* Abierto — número/especialidad, alineado arriba (solo desktop, hay lugar de sobra) */}
                  <div
                    className={`absolute inset-x-0 top-0 hidden p-5 transition-all duration-500 sm:block sm:p-7 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    <p className="font-mono text-sm font-semibold uppercase tracking-[0.24em] text-violet-dark">
                      {String(i + 1).padStart(2, "0")} — {member.specialty}
                    </p>
                  </div>

                  {/* Abierto */}
                  <div
                    className={`absolute inset-x-0 bottom-0 p-5 transition-all duration-500 sm:p-6 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                    }`}
                  >
                    {/* En mobile no hay lugar para el bloque de arriba, así que el número/especialidad va acá */}
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-violet-light sm:hidden">
                      {String(i + 1).padStart(2, "0")} — {member.specialty}
                    </p>

                    <h3 className="mt-1 font-display text-2xl uppercase leading-[0.9] text-bone drop-shadow-[0_12px_34px_rgba(0,0,0,0.5)] sm:mt-0 sm:text-3xl md:text-4xl">
                      {firstName}
                      <br />
                      {lastName}
                    </h3>

                    <span className="mt-3 block h-[2px] w-12 bg-violet-light" />

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-bone/78">
                      {member.detail}
                    </p>

                    <div className="mt-4 grid max-w-md grid-cols-2 border-t border-bone/18 pt-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/45">
                          Certificación
                        </p>
                        <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-bone">
                          {member.cert}
                        </p>
                      </div>

                      <div className="border-l border-bone/18 pl-6">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/45">
                          Experiencia
                        </p>
                        <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-bone">
                          {member.years}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
