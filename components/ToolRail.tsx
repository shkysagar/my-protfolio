import ToolButton from "./ToolButton";
import { tools } from "../hooks/tools";

interface ToolRailProps {
  revealed?: boolean;
}

export default function ToolRail({ revealed = true }: ToolRailProps) {
  return (
    <aside
      id="toolrail"
      aria-label="Tools"
      className={`toolrail ${revealed ? "is-in" : ""}`}
    >
      {tools.map((tool) => (
        <ToolButton key={tool.id} {...tool} />
      ))}

      <span className="toolrail__div" />

      <button
        id="swatchTool"
        type="button"
        className="tool tool--swatch"
        data-cursor="Color"
        aria-label="Choose accent colour"
        aria-haspopup="true"
      />
    </aside>
  );
}
