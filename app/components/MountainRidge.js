export default function MountainRidge({ className = "", tone = "light" }) {
  const fill = tone === "light" ? "#f4f1ec" : "#14151a";
  return (
    <svg
      className={className}
      viewBox="0 0 1440 420"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill={fill}
        opacity="0.16"
        d="M0 420 L0 260 L120 180 L210 240 L320 90 L430 210 L520 140 L640 260 L760 60 L880 200 L990 130 L1100 250 L1220 110 L1320 220 L1440 150 L1440 420 Z"
      />
      <path
        fill={fill}
        opacity="0.32"
        d="M0 420 L0 320 L150 230 L260 290 L380 170 L470 260 L600 200 L700 320 L820 150 L940 270 L1050 200 L1170 310 L1280 220 L1390 300 L1440 260 L1440 420 Z"
      />
      <path
        fill={fill}
        opacity="0.6"
        d="M0 420 L0 360 L100 320 L230 370 L340 290 L460 350 L590 300 L690 380 L810 290 L920 360 L1040 310 L1160 380 L1280 320 L1380 370 L1440 340 L1440 420 Z"
      />
    </svg>
  );
}
