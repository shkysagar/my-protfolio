import { ToolItem } from "../hooks/tools";

export default function ToolButton({
  id,
  cursor,
  active = false,
  svg,
}: ToolItem) {
  return (
    <button
      type="button"
      className={`tool ${active ? "is-active" : ""}`}
      data-tool={id}
      data-cursor={cursor}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
