"use client";

import { useEffect, useRef } from "react";

const lines = [
  { text: "No te llevamos a la montaña.", gradient: false },
  { text: "Te preparamos para", gradient: true },
  { text: "merecerla.", gradient: true },
];

export default function Quote() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const bar = section.querySelector("[data-bar]");
    const textLines = section.querySelectorAll("[data-line]");
    const label = section.querySelector("[data-label]");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // 1. Línea decorativa
        bar?.classList.add("in-view");

        // 2. Líneas de texto escalonadas
        textLines.forEach((el, i) => {
          setTimeout(() => el.classList.add("in-view"), 120 + i * 130);
        });

        // 3. Label al final
        setTimeout(() => label?.classList.add("in-view"), 120 + textLines.length * 130 + 80);

        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink px-2 py-10 text-center sm:py-10 md:px-6 md:py-8"
    >
      {/* Línea decorativa */}
      <span
        data-bar
        className="quote-bar mx-auto block h-0.5 w-24 bg-violet-light"
      />

      {/* Texto principal — cada línea en su propia máscara */}
      <h3 className="mx-auto mt-4 max-w-4xl font-display text-xl uppercase leading-[1.15] tracking-tight sm:mt-8 sm:text-2xl md:text-[2.5rem]">
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden py-[0.06em]">
            <span
              data-line
              className={`quote-line ${
                line.gradient
                  ? "bg-linear-to-r text-gradient-cool"
                  : "text-bone"
              }`}
            >
              {line.text}
            </span>
          </span>
        ))}
      </h3>
    </section>
  );
}
