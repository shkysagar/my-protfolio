"use client";

import { useCursor } from "../hooks/useCursor";

export default function Cursor() {
  useCursor();

  return (
    <div className="cursor" aria-hidden="true">
      <div className="cursor__dot" />
      <div className="cursor__ring" />
      <span className="cursor__label" />
    </div>
  );
}
