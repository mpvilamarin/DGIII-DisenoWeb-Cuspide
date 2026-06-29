"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const team = [
  {
    name: "Martín Aguirre",
    initials: "MA",
    cert: "UIAGM / IFMGA",
    years: "16 años",
    specialty: "Rescate en grietas",
    detail: "Especialista en rescate glaciar, progresión en hielo y autorrescate.",
    image: "/images/fitzroy-approach.jpg",
  },
  {
    name: "Lucía Beltrán",
    initials: "LB",
    cert: "Wilderness First Responder",
    years: "11 años",
    specialty: "Medicina de montaña",
    detail: "Atención en zonas remotas, evaluación de riesgo y primeros auxilios.",
    image: "/images/ridge-walk.jpg",
  },
  {
    name: "Tomás Ferreyra",
    initials: "TF",
    cert: "UIAGM / IFMGA",
    years: "14 años",
    specialty: "Progresión en hielo",
    detail: "Técnica de crampones, cuerdas fijas y seguridad en terreno glaciario.",
    image: "/images/ice-couloir.jpg",
  },
  {
    name: "Ana Reyes",
    initials: "AR",
    cert: "AMGA Alpine Guide",
    years: "9 años",
    specialty: "Expediciones de alta montaña",
    detail: "Planificación, logística, meteorología y gestión de grupos en altura.",
    image: "/images/pinnacle-back.jpg",
  },
];

export default function Team() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="equipo-tecnico"
      className="border-t border-stone/15 bg-bone py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
            Equipo técnico
          </p>

          <span className="mt-4 block h-[2px] w-12 bg-gradient-to-r from-violet to-glacier" />

          <h2 className="mt-7 max-w-4xl font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
            <span className="bg-gradient-to-r from-violet via-violet-light to-glacier bg-clip-text text-transparent">
              Instructores,
            </span>
            <br />
            no anfitriones.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex h-[68vh] min-h-120 gap-2 md:gap-3">
            {team.map((member, i) => {
              const isActive = active === i;
              const [firstName, ...lastNameParts] = member.name.split(" ");
              const lastName = lastNameParts.join(" ");

              return (
                <div
                  key={member.name}
                  onMouseEnter={() => setActive(i)}
                  className={`group relative cursor-pointer overflow-hidden border border-bone/60 bg-ink transition-all duration-500 ease-in-out ${
                    isActive ? "flex-[4.4]" : "flex-[1]"
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className={`object-cover transition-all duration-700 ${
                      isActive
                        ? "scale-100 grayscale-0"
                        : "scale-105 grayscale brightness-[0.52]"
                    }`}
                  />

                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-t from-ink/88 via-ink/35 to-ink/10"
                        : "bg-ink/48"
                    }`}
                  />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(115,87,255,0.18),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_80%,rgba(156,238,255,0.12),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Cerrado */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-between px-5 py-7 transition-opacity duration-300 ${
                      isActive ? "pointer-events-none opacity-0" : "opacity-100"
                    }`}
                  >
                    <div>
                      <p className="font-display text-2xl text-violet-light">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <span className="mt-3 block h-px w-8 bg-gradient-to-r from-violet to-glacier" />
                    </div>

                    <p className="font-mono text-xs font-semibold uppercase leading-tight tracking-[0.18em] text-bone [writing-mode:vertical-rl] rotate-180">
                      {member.specialty}
                    </p>

                    <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone/70">
                      <p className="text-bone/45">Cert.</p>
                      <p className="mt-1 text-glacier">{member.cert.split(" / ")[0]}</p>
                      <p className="mt-4 text-bone/45">Exp.</p>
                      <p className="mt-1 text-glacier">{member.years}</p>
                    </div>
                  </div>

                  {/* Abierto */}
                  <div
                    className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-500 sm:p-8 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                    }`}
                  >
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-violet-light">
                      {String(i + 1).padStart(2, "0")} — {member.specialty}
                    </p>

                    <h3 className="mt-5 font-display text-4xl uppercase leading-[0.9] text-bone drop-shadow-[0_12px_34px_rgba(0,0,0,0.5)] sm:text-5xl">
                      {firstName}
                      <br />
                      {lastName}
                    </h3>

                    <span className="mt-5 block h-[2px] w-12 bg-gradient-to-r from-violet to-glacier" />

                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone/78">
                      {member.detail}
                    </p>

                    <div className="mt-7 grid max-w-md grid-cols-2 border-t border-bone/18 pt-5">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/45">
                          Certificación
                        </p>
                        <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-glacier">
                          {member.cert}
                        </p>
                      </div>

                      <div className="border-l border-bone/18 pl-6">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/45">
                          Experiencia
                        </p>
                        <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-glacier">
                          {member.years}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}