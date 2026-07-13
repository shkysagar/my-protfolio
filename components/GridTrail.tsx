"use client";

import { useEffect, useRef } from "react";

interface GridTrailProps {
  accent?: string;
  cell?: number;
  gap?: number;
  maxTrail?: number;
}

export default function GridTrail({
  accent = "255,255,255",
  cell = 44,
  gap = 3,
  maxTrail = 6,
}: GridTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    if (window.matchMedia("(max-width:860px)").matches) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const FALLOFF = 0.62;
    const TAU = 0.34;

    let dpr = 1;

    const trail: {
      c: number;
      r: number;
      t: number;
    }[] = [];

    let lastX: number | null = null;
    let lastY: number | null = null;

    let animationFrame = 0;

    function resize() {
      const currentCanvas = canvasRef.current;

      if (!currentCanvas) return;

      dpr = Math.min(2, window.devicePixelRatio || 1);

      currentCanvas.width = window.innerWidth * dpr;
      currentCanvas.height = window.innerHeight * dpr;

      currentCanvas.style.width = `${window.innerWidth}px`;
      currentCanvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function addCell(c: number, r: number, now: number) {
      const last = trail[trail.length - 1];

      if (last && last.c === c && last.r === r) {
        last.t = now;
        return;
      }

      const existing = trail.findIndex((x) => x.c === c && x.r === r);

      if (existing >= 0) {
        trail.splice(existing, 1);
      }

      trail.push({
        c,
        r,
        t: now,
      });

      if (trail.length > maxTrail) {
        trail.shift();
      }
    }

    function mouseMove(e: MouseEvent) {
      const now = performance.now();

      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;

      if (lastX === null) {
        lastX = x;
        lastY = y;
      }

      const distance = Math.hypot(x - lastX, y - (lastY ?? y));

      const steps = Math.max(1, Math.round(distance / (cell * 0.6)));

      for (let i = 1; i <= steps; i++) {
        const px = lastX + ((x - lastX) * i) / steps;

        const py = (lastY ?? y) + ((y - (lastY ?? y)) * i) / steps;

        addCell(Math.floor(px / cell), Math.floor(py / cell), now);
      }

      lastX = x;
      lastY = y;
    }

    function draw(time: number) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const sx = window.scrollX;
      const sy = window.scrollY;

      ctx.lineWidth = 1;

      const n = trail.length;

      for (let i = 0; i < n; i++) {
        const t = trail[i];

        const spatial = Math.pow(FALLOFF, n - 1 - i);

        const age = (time - t.t) / 1000;

        const intensity = spatial * Math.exp(-age / TAU);

        if (intensity < 0.01) continue;

        const x = t.c * cell + gap - sx;
        const y = t.r * cell + gap - sy;

        const s = cell - gap * 2;

        if (
          x < -cell ||
          y < -cell ||
          x > window.innerWidth ||
          y > window.innerHeight
        ) {
          continue;
        }

        ctx.fillStyle = `rgba(${accent},${intensity * 0.06})`;

        ctx.fillRect(x, y, s, s);

        ctx.strokeStyle = `rgba(${accent},${intensity * 0.36})`;

        ctx.strokeRect(x + 0.5, y + 0.5, s - 1, s - 1);
      }

      while (trail.length && (time - trail[0].t) / 1000 > TAU * 7) {
        trail.shift();
      }

      animationFrame = requestAnimationFrame(draw);
    }

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", mouseMove);

    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [accent, cell, gap, maxTrail]);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="canvas-grid" aria-hidden="true" />

      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-10 grid-trail"
        aria-hidden="true"
      />
    </>
  );
}
