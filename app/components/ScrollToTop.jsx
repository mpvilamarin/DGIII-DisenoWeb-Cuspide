"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className={`fixed right-0 bottom-10 z-40 flex h-11 w-11 items-center justify-center rounded-l-md bg-violet-dark text-bone shadow-lg transition-all duration-300 hover:bg-violet ${
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-4.5 w-4.5" strokeWidth={1.8} />
    </button>
  );
}
