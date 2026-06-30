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
      className="relative overflow-hidden bg-[#F5F3EF] px-6 py-14 text-center md:px-10 md:py-20"
    >
      {/* Línea decorativa */}
      <span
        data-bar
        className="quote-bar mx-auto block h-0.5 w-24 bg-linear-to-r from-violet via-violet-light to-glacier"
      />

      {/* Texto principal — cada línea en su propia máscara */}
      <h3 className="mx-auto mt-8 max-w-4xl font-display text-xl uppercase leading-[1.15] tracking-tight sm:text-3xl md:text-[2.75rem]">
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden py-[0.06em]">
            <span
              data-line
              className={`quote-line ${
                line.gradient
                  ? "bg-linear-to-r text-gradient-purple"
                  : "text-ink"
              }`}
            >
              {line.text}
            </span>
          </span>
        ))}
      </h3>

      {/* Label */}
      <p
        data-label
        className="quote-line mt-7 font-mono text-[15px] uppercase tracking-[0.42em] text-glacier"
      >
        Metodología Cúspide
      </p>
    </section>
  );
}
