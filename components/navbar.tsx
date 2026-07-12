"use client";

import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  revealed?: boolean;
}

export default function Navbar({ revealed = true }: NavbarProps) {
  return (
    <header id="menubar" className={`menubar ${revealed ? "is-in" : ""}`}>
      <div className="menubar__brand" data-cursor="MKM">
        <span className="menubar__badge">2S</span>
      </div>

      <nav className="menubar__menu">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} data-nav>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="menubar__status">
        <span className="dot dot--live" />
        <span>Available for freelance</span>
      </div>
    </header>
  );
}
