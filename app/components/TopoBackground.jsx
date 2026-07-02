"use client";

import { useEffect } from "react";

const SVG_W = 1440;
const SVG_H = 8000;
const LINE_SPACING = 58;
const GVX = [180, 380, 580, 780, 980, 1180, 1360];

const MARKERS = [
  { x: 110,  y: 320,  lat: "48°12′03″S", lon: "72°45′12″W", elev: "1.600 m" },
  { x: 1090, y: 460,  lat: "50°01′08″S", lon: "72°52′30″W", elev: "2.800 m" },
  { x: 590,  y: 680,  lat: "49°05′22″S", lon: "73°18′40″W", elev: "3.405 m" },
  { x: 290,  y: 920,  lat: "47°55′46″S", lon: "73°05′18″W", elev: "890 m"   },
  { x: 1280, y: 800,  lat: "50°15′50″S", lon: "73°20′28″W", elev: "3.102 m" },
  { x: 930,  y: 1100, lat: "48°30′12″S", lon: "72°30′55″W", elev: "2.100 m" },
  { x: 180,  y: 1340, lat: "49°22′34″S", lon: "73°42′02″W", elev: "4.058 m" },
  { x: 1060, y: 1220, lat: "49°40′14″S", lon: "73°05′48″W", elev: "2.450 m" },
  { x: 770,  y: 1560, lat: "48°52′18″S", lon: "72°18′44″W", elev: "1.820 m" },
  { x: 430,  y: 1760, lat: "48°08′30″S", lon: "72°55′10″W", elev: "650 m"   },
  { x: 1260, y: 1900, lat: "50°28′58″S", lon: "72°15′04″W", elev: "5.000 m" },
  { x: 860,  y: 2060, lat: "49°55′42″S", lon: "73°30′22″W", elev: "1.200 m" },
  { x: 210,  y: 2220, lat: "47°50′06″S", lon: "72°40′36″W", elev: "3.800 m" },
  { x: 580,  y: 2440, lat: "48°35′28″S", lon: "73°50′16″W", elev: "920 m"   },
  { x: 1100, y: 2580, lat: "49°18′50″S", lon: "72°38′32″W", elev: "3.200 m" },
  { x: 130,  y: 2780, lat: "47°42′12″S", lon: "73°12′46″W", elev: "1.450 m" },
  { x: 780,  y: 2960, lat: "50°05′38″S", lon: "72°50′08″W", elev: "2.700 m" },
  { x: 1190, y: 3120, lat: "48°48′24″S", lon: "73°28′54″W", elev: "4.200 m" },
  { x: 360,  y: 3320, lat: "49°32′16″S", lon: "72°22′40″W", elev: "800 m"   },
  { x: 960,  y: 3500, lat: "50°38′02″S", lon: "73°15′20″W", elev: "3.600 m" },
  { x: 280,  y: 3700, lat: "48°22′44″S", lon: "73°38′06″W", elev: "1.100 m" },
  { x: 1050, y: 3880, lat: "49°48′30″S", lon: "72°28′52″W", elev: "2.900 m" },
  { x: 150,  y: 4100, lat: "47°38′16″S", lon: "73°02′34″W", elev: "1.750 m" },
  { x: 680,  y: 4280, lat: "48°56′44″S", lon: "73°58′02″W", elev: "680 m"   },
  { x: 1170, y: 4460, lat: "50°52′08″S", lon: "72°44′18″W", elev: "3.950 m" },
  { x: 480,  y: 4660, lat: "49°14′22″S", lon: "72°08′56″W", elev: "2.200 m" },
  { x: 920,  y: 4840, lat: "47°28′50″S", lon: "73°22′14″W", elev: "4.600 m" },
  { x: 240,  y: 5060, lat: "50°10′36″S", lon: "72°36′48″W", elev: "1.350 m" },
  { x: 1230, y: 5240, lat: "48°44′02″S", lon: "73°46′30″W", elev: "3.050 m" },
  { x: 560,  y: 5460, lat: "49°02′18″S", lon: "72°14′22″W", elev: "870 m"   },
  { x: 100,  y: 5660, lat: "47°56′44″S", lon: "73°28′08″W", elev: "2.550 m" },
  { x: 820,  y: 5860, lat: "50°24′12″S", lon: "72°56′36″W", elev: "4.800 m" },
  { x: 1300, y: 6060, lat: "48°16′28″S", lon: "73°14′50″W", elev: "1.900 m" },
  { x: 380,  y: 6260, lat: "49°38′54″S", lon: "72°32′16″W", elev: "3.300 m" },
  { x: 1000, y: 6460, lat: "47°48′08″S", lon: "73°50′42″W", elev: "720 m"   },
  { x: 200,  y: 6660, lat: "50°46′34″S", lon: "72°20′28″W", elev: "2.400 m" },
  { x: 720,  y: 6880, lat: "48°04′52″S", lon: "73°34′16″W", elev: "3.700 m" },
  { x: 1140, y: 7080, lat: "49°26′38″S", lon: "72°48′04″W", elev: "1.050 m" },
  { x: 450,  y: 7300, lat: "50°18′24″S", lon: "73°02′52″W", elev: "4.350 m" },
  { x: 950,  y: 7600, lat: "47°52′10″S", lon: "72°16′40″W", elev: "2.850 m" },
];

function buildSVG() {
  const numLines = Math.ceil(SVG_H / LINE_SPACING);

  const contours = Array.from({ length: numLines }, (_, i) => {
    const y = i * LINE_SPACING;
    const isIdx = i % 5 === 0;
    const amp = 6 + (i % 4) * 5;
    const shift = ((i * 137) % 220) - 110;
    const d = `M 0,${y} C ${SVG_W * 0.18},${y - amp + shift * 0.03} ${SVG_W * 0.38},${y + amp * 0.85} ${SVG_W * 0.56},${y - amp * 0.5 + shift * 0.02} S ${SVG_W * 0.84},${y + amp * 0.9} ${SVG_W},${y}`;
    return `<path d="${d}" stroke="rgba(28,18,48,${isIdx ? 0.15 : 0.07})" stroke-width="${isIdx ? 1 : 0.65}" fill="none"/>`;
  }).join("");

  const vlines = GVX.map(
    (x) => `<line x1="${x}" y1="0" x2="${x}" y2="${SVG_H}" stroke="rgba(28,18,48,0.06)" stroke-width="0.5" stroke-dasharray="3 14" fill="none"/>`
  ).join("");

  const numH = Math.ceil(SVG_H / 320);
  const hlines = Array.from({ length: numH }, (_, i) =>
    `<line x1="0" y1="${i * 320}" x2="${SVG_W}" y2="${i * 320}" stroke="rgba(28,18,48,0.04)" stroke-width="0.5" stroke-dasharray="2 22" fill="none"/>`
  ).join("");

  const crossPositions = [];
  for (let xi = 0; xi < 4; xi++) {
    for (let yi = 0; yi < Math.ceil(SVG_H / 460); yi++) {
      crossPositions.push([90 + xi * 360, 120 + yi * 460]);
    }
  }
  const crosses = crossPositions.map(
    ([x, y]) =>
      `<line x1="${x - 5}" y1="${y}" x2="${x + 5}" y2="${y}" stroke="rgba(28,18,48,0.18)" stroke-width="0.7" fill="none"/><line x1="${x}" y1="${y - 5}" x2="${x}" y2="${y + 5}" stroke="rgba(28,18,48,0.18)" stroke-width="0.7" fill="none"/>`
  ).join("");

  const labels = MARKERS.map(
    (m) =>
      `<line x1="${m.x - 8}" y1="${m.y}" x2="${m.x + 8}" y2="${m.y}" stroke="rgba(28,18,48,0.22)" stroke-width="0.7" fill="none"/>` +
      `<line x1="${m.x}" y1="${m.y - 8}" x2="${m.x}" y2="${m.y + 8}" stroke="rgba(28,18,48,0.22)" stroke-width="0.7" fill="none"/>` +
      `<circle cx="${m.x}" cy="${m.y}" r="1.5" fill="rgba(28,18,48,0.28)"/>` +
      `<text x="${m.x + 12}" y="${m.y - 3}" font-family="monospace" font-size="7" fill="rgba(28,18,48,0.28)" letter-spacing="0.6">${m.lat} / ${m.lon}</text>` +
      `<text x="${m.x + 12}" y="${m.y + 9}" font-family="monospace" font-size="6.5" fill="rgba(28,18,48,0.18)" letter-spacing="0.4">▲ ${m.elev}</text>`
  ).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SVG_W}" height="${SVG_H}" viewBox="0 0 ${SVG_W} ${SVG_H}">${vlines}${hlines}${contours}${crosses}${labels}</svg>`;
}

export default function TopoBackground() {
  useEffect(() => {
    const svg = buildSVG();
    const uri = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

    document.body.style.backgroundImage = uri;
    document.body.style.backgroundSize = `${SVG_W}px ${SVG_H}px`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center 0px";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      if (reduced) return;
      const y = window.scrollY;
      document.body.style.backgroundPosition = `center ${-y * 0.5}px`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundPosition = "";
    };
  }, []);

  return null;
}
