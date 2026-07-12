import { plugins } from "../hooks/bootData";

interface Props {
  active: number;
}

export default function BootPlugins({ active }: Props) {
  return (
    <ul className="boot__plugins">
      {plugins.map((plugin, index) => (
        <li key={plugin} className={index <= active ? "is-on" : ""}>
          {plugin}
        </li>
      ))}
    </ul>
  );
}
