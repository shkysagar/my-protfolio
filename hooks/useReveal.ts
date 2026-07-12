"use client";

import { useEffect } from "react";

export default function useReveal(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [enabled]);
}
