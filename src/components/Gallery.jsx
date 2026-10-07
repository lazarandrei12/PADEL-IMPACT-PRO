import { useState } from "react";
import courtCage from "../assets/HighresScreenshot00056.png";
import rallyLight from "../assets/SS_1.png";
import courtOverview from "../assets/HighresScreenshot00058.png";
import customizer from "../assets/Screenshot 2026-10-07 222800.png";

const SHOTS = [
  { src: courtCage, title: "Iconic Locations" },
  { src: rallyLight, title: "Split-Second Reflexes" },
  { src: courtOverview, title: "Packed Stands" },
  { src: customizer, title: "Create Your Pro" },
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

      <div className="flex gap-2.5 mt-3">
        {SHOTS.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Show ${s.title}`}
            onClick={() => setShot(i)}
            className={`flex-1 basis-0 min-w-0 max-w-[120px] h-[70px] rounded-lg overflow-hidden cursor-pointer transition-opacity duration-300 ${
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
