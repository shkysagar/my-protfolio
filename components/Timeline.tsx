"use client";

import { useTimeline } from "../hooks/useTimeline";

interface TimelineProps {
  revealed?: boolean;
}

export default function Timeline({ revealed = true }: TimelineProps) {
  const { timecode, ticksRef, progressRef, playheadRef } = useTimeline();

  return (
    <div
      id="scrubber"
      className={`scrubber ${revealed ? "is-in" : ""}`}
      aria-hidden="true"
    >
      <div className="scrubber__tc">{timecode}</div>

      <div className="scrubber__track">
        <div ref={ticksRef} className="scrubber__ticks" />

        <div ref={progressRef} className="scrubber__progress" />

        <div ref={playheadRef} className="scrubber__playhead" />
      </div>

      <div className="scrubber__fps">24 fps</div>
    </div>
  );
}
