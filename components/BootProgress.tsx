interface Props {
  progress: number;
  status: string;
}

export default function BootProgress({
  progress,
  status,
}: Props) {
  return (
    <>
      <div className="boot__bar">
        <span
          className="boot__fill"
          style={{ width: `${progress}%` }}
        />
      </div>


      

      <div className="boot__status">
        <span>{status}</span>
        <span>{progress}%</span>
      </div>
    </>
  );
}