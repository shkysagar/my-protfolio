import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main
      className="case is-open"
      style={
        {
          "--ink": project.accent,
        } as React.CSSProperties
      }
    >
      {/* Top Bar */}
      <div className="case__bar">
        <span className="case__doc">
          <i className="case__dot" style={{ background: project.accent }} />
          {project.slug}.fig
        </span>

        <span className="case__crumb">{project.cat}</span>

        <Link href="/#work" className="case__close">
          Close ✕
        </Link>
      </div>

      <div className="case__scroll">
        {/* Hero */}
        <header className="case__hero">
          <div className="case__idx" style={{ color: project.accent }}>
            Project {String(project.id).padStart(2, "0")}
          </div>

          <h1 className="case__title">{project.title}</h1>

          <p className="case__sub">{project.sub}</p>

          <p className="case__tag">{project.tagline}</p>

          <div className="case__facts">
            <div>
              <b>Role</b>
              <span>{project.role}</span>
            </div>

            <div>
              <b>Type</b>
              <span>{project.type}</span>
            </div>

            <div>
              <b>Discipline</b>
              <span>{project.cat}</span>
            </div>
          </div>
        </header>

        {/* Notes */}
        <section className="case__notes">
          <div className="note">
            <h4>The Brief</h4>
            <p>{project.brief}</p>
          </div>

          <div className="note">
            <h4>The Thinking</h4>
            <p>{project.thinking}</p>
          </div>

          <div className="note">
            <h4>My Role</h4>
            <p>{project.roleDescription}</p>
          </div>
        </section>

        {/* Gallery */}
        {project.gallery && (
          <section className="case__section">
            <div className="gallery">
              {project.gallery.map((image, index) => (
                <figure key={index} className="shot">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    width={1400}
                    height={900}
                  />

                  <figcaption>
                    <span className="shot__no">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="case__foot">
          {project.drive && (
            <a href={project.drive} target="_blank" className="btn btn--lg">
              View Full Project ↗
            </a>
          )}

          <Link href="/#work" className="btn btn--lg">
            Back to Projects
          </Link>
        </footer>
      </div>
    </main>
  );
}
