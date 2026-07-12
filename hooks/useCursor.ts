"use client";

import { useEffect } from "react";

export function useCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLElement | null;

    if (!cursor) return;

    const dot = cursor.querySelector(".cursor__dot") as HTMLElement | null;
    const ring = cursor.querySelector(".cursor__ring") as HTMLElement | null;
    const label = cursor.querySelector(".cursor__label") as HTMLElement | null;

    if (!dot || !ring || !label) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let frameId = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      frameId = requestAnimationFrame(animate);
    };

    const targets = document.querySelectorAll("[data-cursor]");

    const enterHandlers = new Map<Element, EventListener>();
    const leaveHandlers = new Map<Element, EventListener>();

    targets.forEach((element) => {
      const enter = () => {
        label.textContent = element.getAttribute("data-cursor") || "";
        cursor.classList.add("is-active");
      };

      const leave = () => {
        label.textContent = "";
        cursor.classList.remove("is-active");
      };

      enterHandlers.set(element, enter);
      leaveHandlers.set(element, leave);

      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
    });

    document.addEventListener("mousemove", move);

    animate();

    return () => {
      document.removeEventListener("mousemove", move);

      cancelAnimationFrame(frameId);

      targets.forEach((element) => {
        element.removeEventListener("mouseenter", enterHandlers.get(element)!);
        element.removeEventListener("mouseleave", leaveHandlers.get(element)!);
      });
    };
  }, []);
}
