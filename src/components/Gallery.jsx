import { useState } from "react";
import venice from "../assets/POZA8.png";
import rally from "../assets/POZA2.png";
import sunsetPro from "../assets/POZA1.png";
import arenaCourt from "../assets/POZA5.png";
import customizer from "../assets/poza9.png";
import netSunset from "../assets/POZA6.png";
import rooftop from "../assets/POZA7.png";
import cityCourt from "../assets/HighresScreenshot00071.png";
import arenaNight from "../assets/HighresScreenshot00066.png";
import arenaLights from "../assets/HighresScreenshot00065.png";
import arenaStands from "../assets/HighresScreenshot00068.png";

const SHOTS = [
  { src: venice, title: "Clay in the Piazza" },
  { src: rally, title: "Split-Second Reflexes" },
  { src: sunsetPro, title: "Golden Hour" },
  { src: arenaCourt, title: "Center Court" },
  { src: customizer, title: "Create Your Pro" },
  { src: arenaNight, title: "Arena Nights" },
  { src: rooftop, title: "Rooftop Court" },
  { src: arenaStands, title: "Packed Stands" },
  { src: netSunset, title: "Under the Lights" },
  { src: arenaLights, title: "Lights Down" },
  { src: cityCourt, title: "Street Courts" },
];

const ARROW =
  "absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/45 flex items-center justify-center text-[28px] leading-none cursor-pointer hover:bg-[#D2FF42] hover:text-[#0b1a33]";

// Body of the "Screenshots" panel
export default function Gallery() {
  const [shot, setShot] = useState(0);
  const go = (d) => setShot((s) => (s + d + SHOTS.length) % SHOTS.length);
  const current = SHOTS[shot];

  return (
    <>
      <div className="flex-1 min-h-0 relative rounded-xl overflow-hidden bg-[#0a2f6b] sm:flex-none sm:aspect-video min-[980px]:flex-1 min-[980px]:aspect-auto">
        <img
          src={current.src}
          alt={current.title}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <button type="button" aria-label="Previous screenshot" onClick={() => go(-1)} className={`${ARROW} left-3`}>‹</button>
        <button type="button" aria-label="Next screenshot" onClick={() => go(1)} className={`${ARROW} right-3`}>›</button>
      </div>

      <div className="flex gap-2.5 mt-3 p-1 overflow-x-auto">
        {SHOTS.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Show ${s.title}`}
            onClick={() => setShot(i)}
            className={`shrink-0 w-[96px] h-[54px] sm:w-[120px] sm:h-[68px] rounded-lg overflow-hidden cursor-pointer transition-opacity duration-300 ${
              shot === i ? "opacity-100 outline outline-2 outline-[#D2FF42] outline-offset-2" : "opacity-55"
            }`}
          >
            <img src={s.src} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </>
  );
}
