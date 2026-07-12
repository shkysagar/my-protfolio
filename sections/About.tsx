"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section about" data-layer="About">
      <div className="section__label">
        <span>01</span>
        About
      </div>

      <div className="about__grid">
        <figure className="origin reveal" data-cursor="Layer 1">
          <div className="origin__float">
            <div className="origin__frame">
              <span className="origin__marquee" />

              <img
                src="public/images/profile.png"
                alt="Sagar Shakya"
                width={520}
                height={720}
                className="origin__image"
              />

              <i className="origin__h origin__h--tl" />
              <i className="origin__h origin__h--tr" />
              <i className="origin__h origin__h--bl" />
              <i className="origin__h origin__h--br" />
            </div>
          </div>

          <figcaption>
            <span className="origin__tab">
              <i className="origin__eye" />
              sagar-shakya.png
            </span>

            <span className="origin__bubble">
              Designing digital experiences since 2017 ✨
            </span>
          </figcaption>
        </figure>

        <div className="about__text reveal" data-delay="1">
          <h2>
            I don't just design interfaces.
            <br />I design <span className="grad">experiences.</span>
          </h2>

          <p>
            I'm a Senior UI/UX & Product Designer with 8+ years of experience
            creating intuitive digital products across enterprise platforms,
            SaaS applications, HRMS, travel, healthcare, and e-commerce.
          </p>

          <p>
            My expertise spans UX research, interaction design, design systems,
            rapid prototyping, and collaborating closely with developers to
            deliver production-ready experiences.
          </p>

          <p>
            I leverage AI to accelerate research, ideation, and execution while
            ensuring that strategy, empathy, and human-centered thinking remain
            at the core of every design decision.
          </p>

          <div className="about__stats">
            <div className="stat reveal" data-delay="2">
              <strong>8+</strong>
              <span>Years Experience</span>
            </div>

            <div className="stat reveal" data-delay="3">
              <strong>50+</strong>
              <span>Projects Delivered</span>
            </div>

            <div className="stat reveal" data-delay="4">
              <strong>15+</strong>
              <span>Design Systems</span>
            </div>

            <div className="stat reveal" data-delay="4">
              <strong>100%</strong>
              <span>Pixel Perfect</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
