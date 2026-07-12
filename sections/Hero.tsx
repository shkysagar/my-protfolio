"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
  });

  const [displayInfo, setDisplayInfo] = useState({
    gamut: "sRGB",
    dpr: "1.0",
  });

  useEffect(() => {
    const updateInfo = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      let gamut = "sRGB";

      if (window.matchMedia("(color-gamut: rec2020)").matches) {
        gamut = "Rec.2020";
      } else if (window.matchMedia("(color-gamut: p3)").matches) {
        gamut = "Display-P3";
      }

      setDisplayInfo({
        gamut,
        dpr: window.devicePixelRatio.toFixed(1),
      });
    };

    updateInfo();

    window.addEventListener("resize", updateInfo);

    return () => {
      window.removeEventListener("resize", updateInfo);
    };
  }, []);

  return (
    <section id="hero" className="hero" data-layer="Cover">
      <div className="hero__meta">
        <span className="tag">Senior Product Designer</span>
        <span className="tag">UI/UX · Design Systems</span>
        <span className="tag">Kathmandu, Nepal</span>
      </div>

      <h1 className="hero__title" data-cursor="Type">
        <span className="glitch" data-text="SAGAR">
          SAGAR
        </span>

        <span className="glitch" data-text="SHAKYA">
          SHAKYA
        </span>
      </h1>

      <p className="hero__tagline">
        I design intuitive digital products and build scalable design systems
        that transform complex problems into seamless user experiences.
      </p>

      <div className="hero__cta">
        <Link
          href="#work"
          className="btn btn--primary"
          data-nav
          data-cursor="Open"
        >
          View Selected Work
        </Link>

        <Link href="#contact" className="btn" data-nav data-cursor="Send">
          Get in touch
        </Link>
      </div>

      <div className="hero__scrollhint">
        <span>Scroll to scrub the timeline</span>

        <div className="scrollhint__line">
          <span />
        </div>
      </div>

      <div className="hero__corner hero__corner--tl">
        {viewport.width} × {viewport.height} px
      </div>

      <div className="hero__corner hero__corner--tr">
        {displayInfo.gamut} · DPR {displayInfo.dpr}
      </div>

      <div className="hero__corner hero__corner--bl">Layer 0 · Cover</div>

      <div className="hero__corner hero__corner--br">@shkysagar</div>
    </section>
  );
}
