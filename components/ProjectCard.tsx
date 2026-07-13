"use client";

import Link from "next/link";
import Image from "next/image";

import { Project } from "@/types/portfolio";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article
      // href={`/work/${project.slug}`}
      className={`card reveal ${project.tall ? "card--tall" : ""}`}
      data-cursor="Open"
      style={
        {
          "--ink": project.accent,
          gridColumn: `span ${project.span}`,
        } as React.CSSProperties
      }
    >
      {/* Background */}

      <div className="card__media">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="card__image"
            priority={project.featured}
          />
        ) : (
          <div
            className="card__placeholder"
            style={{
              background: `linear-gradient(135deg, ${project.accent}25, #111 80%)`,
            }}
          >
            <span>Coming Soon</span>
          </div>
        )}
      </div>

      {/* Overlay */}

      <div className="card__overlay" />

      {/* Category */}

      <span
        className="card__category"
        style={{
          background: project.accent,
        }}
      >
        {project.cat}
      </span>

      {/* Content */}

      <div className="card__content">
        <span className="card__index">
          {String(project.id).padStart(2, "0")}
        </span>

        <h3>{project.title}</h3>

        <p>{project.sub}</p>

        <div className="card__footer">
          <span>View Case Study</span>

          <span className="card__arrow">↗</span>
        </div>
      </div>
    </article>
  );
}
