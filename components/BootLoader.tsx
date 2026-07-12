import BootLogo from "./BootLogo";
import BootPlugins from "./BootPlugins";
import BootProgress from "./BootProgress";
import useBootLoader from "../hooks/useBootLoader";

export default function BootLoader({ onComplete }: { onComplete: () => void }) {
  const loader = useBootLoader(onComplete);

  return (
    <div className="boot">
      <div className="boot__card">
        <BootLogo />

        <BootProgress progress={loader.progress} status={loader.status} />

        <BootPlugins active={loader.activePlugin} />
      </div>
    </div>
  );
}
