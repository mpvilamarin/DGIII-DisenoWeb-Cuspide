export default function TopoPattern({ className = "" }) {
  const lines = [
    "M0,40 Q150,10 300,40 T600,40 T900,40",
    "M0,90 Q150,55 300,90 T600,90 T900,90",
    "M0,140 Q150,100 300,140 T600,140 T900,140",
    "M0,195 Q150,150 300,195 T600,195 T900,195",
    "M0,255 Q150,205 300,255 T600,255 T900,255",
    "M0,320 Q150,265 300,320 T600,320 T900,320",
    "M0,390 Q150,330 300,390 T600,390 T900,390",
    "M0,465 Q150,400 300,465 T600,465 T900,465",
    "M0,545 Q150,475 300,545 T600,545 T900,545",
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 900 600"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      {lines.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth="1"
          opacity={0.5 - i * 0.03}
        />
      ))}
    </svg>
  );
}
