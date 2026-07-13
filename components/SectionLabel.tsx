interface Props {
  number: string;
  title: string;
}

export default function SectionLabel({ number, title }: Props) {
  return (
    <div className="section__label">
      <span>{number}</span>
      {title}
    </div>
  );
}
