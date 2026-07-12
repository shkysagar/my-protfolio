import { useEffect, useState } from "react";
import { messages, plugins } from "./bootData";

export default function useBootLoader(onComplete: () => void) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(messages[0]);
  const [activePlugin, setActivePlugin] = useState(-1);

  useEffect(() => {
    let p = 0;
    let step = 0;

    const timer = setInterval(() => {
      p = Math.min(100, p + Math.random() * 14 + 4);

      setProgress(Math.round(p));

      setStatus(messages[Math.min(messages.length - 1, Math.floor(p / 22))]);

      while (step <= Math.floor(p / 25) - 1 && step < plugins.length) {
        step++;
      }

      setActivePlugin(step - 1);

      if (p >= 100) {
        clearInterval(timer);

        setTimeout(onComplete, 500);
      }
    }, 230);

    return () => clearInterval(timer);
  }, [onComplete]);

  return {
    progress,
    status,
    activePlugin,
  };
}
