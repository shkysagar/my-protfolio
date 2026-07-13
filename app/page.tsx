"use client";

import { useState } from "react";

import BootLoader from "@/components/BootLoader";
import Cursor from "@/components/Cursor";
import GridTrail from "@/components/GridTrail";
import Navbar from "@/components/navbar";
import ToolRail from "@/components/ToolRail";
import Timeline from "@/components/Timeline";

import Hero from "@/sections/Hero";
import About from "@/sections/About";

import useReveal from "@/hooks/useReveal";
import Work from "@/sections/Work";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Always call hooks in the same order
  useReveal(!loading);

  return (
    <>
      {loading ? (
        <BootLoader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Cursor />
          <GridTrail accent="99,102,241" />

          <Navbar />
          <ToolRail />

          <main>
            <Hero />

            <About />
            <Work />

            <section id="work">
              <h2>Work</h2>
            </section>

            <section id="experience">
              <h2>Experience</h2>
            </section>

            <section id="toolkit">
              <h2>Toolkit</h2>
            </section>

            <section id="contact">
              <h2>Contact</h2>
            </section>
          </main>

          <Timeline />
        </>
      )}
    </>
  );
}
