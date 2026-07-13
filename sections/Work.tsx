"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Work() {
  return (
    <section id="work" className="section work" data-layer="Selected Work">
      <div className="section__label">
        <span>02</span>
        Work
      </div>

      <header className="work__head reveal">
        <h2>Selected Work</h2>

        <p>Selected product design, UX, and frontend projects.</p>
      </header>

      <div className="work__grid">
        {projects.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>
    </section>
  );
}
