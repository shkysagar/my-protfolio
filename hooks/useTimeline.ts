"use client";

import { useEffect, useRef, useState } from "react";

const FPS = 24;

export function useTimeline() {
  const [timecode, setTimecode] = useState("00:00:00:00");

  const ticksRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const playheadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = ticksRef.current?.parentElement;

    if (!track) return;

    // Create timeline ticks
    const ticks = Array.from({ length: 120 }, (_, i) => {
      const tick = document.createElement("span");

      if (i % FPS === 0) {
        tick.classList.add("major");
      }

      return tick;
    });

    ticksRef.current!.replaceChildren(...ticks);

    const update = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }

      if (playheadRef.current) {
        playheadRef.current.style.left = `${progress * 100}%`;
      }

      const totalFrames = Math.floor(progress * 24 * 140);

      const hours = Math.floor(totalFrames / (FPS * 3600));
      const minutes = Math.floor((totalFrames % (FPS * 3600)) / (FPS * 60));
      const seconds = Math.floor((totalFrames % (FPS * 60)) / FPS);
      const frames = totalFrames % FPS;

      setTimecode(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
          2,
          "0",
        )}:${String(seconds).padStart(
          2,
          "0",
        )}:${String(frames).padStart(2, "0")}`,
      );
    };

    update();

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return {
    timecode,
    ticksRef,
    progressRef,
    playheadRef,
  };
}
