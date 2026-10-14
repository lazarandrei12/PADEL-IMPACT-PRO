import { useRef, useState } from "react";
import { Picture } from "./Primitives";

// Every image in assets/screenshots/ shows up here, sorted by file name.
// Name them like "05-night-match.png": the number sets the order and the
// rest becomes the caption ("Night Match"). Sizes are optimized at build time.
const files = import.meta.glob("../assets/screenshots/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
  query: "?responsive",
});

const SHOTS = Object.keys(files)
  .sort()
  .map((path) => ({
    pic: files[path],
    title: path
      .split("/").pop()
      .replace(/\.\w+$/, "")
      .replace(/^\d+[-_ ]*/, "")
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()),
  }));

const ARROW =
  "absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/45 flex items-center justify-center text-[28px] leading-none cursor-pointer hover:bg-[#D2FF42] hover:text-[#0b1a33]";

// Body of the "Screenshots" panel
export default function Gallery({ open }) {
  const [shot, setShot] = useState(0);
  // Don't download any screenshot until the panel has been opened once
  const [seen, setSeen] = useState(open);
  if (open && !seen) setSeen(true);

  const touchX = useRef(null);
  const go = (d) => setShot((s) => (s + d + SHOTS.length) % SHOTS.length);
  const current = SHOTS[shot];

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  return (
    <>
      <div
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={onTouchEnd}
        className="relative rounded-xl overflow-hidden bg-[#0a2f6b] aspect-video max-h-[62svh] min-h-0 min-[980px]:flex-1 min-[980px]:aspect-auto min-[980px]:max-h-none"
      >
        {seen && (
          <Picture
            key={current.title}
            pic={current.pic}
            sizes="(min-width: 980px) 80vw, 100vw"
            alt={current.title}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        )}
        <button type="button" aria-label="Previous screenshot" onClick={() => go(-1)} className={`${ARROW} left-3`}>‹</button>
        <button type="button" aria-label="Next screenshot" onClick={() => go(1)} className={`${ARROW} right-3`}>›</button>
      </div>

      <div className="flex items-baseline justify-between gap-3 mt-3 text-[13px] min-[980px]:hidden">
        <span className="font-semibold uppercase tracking-[0.12em] truncate">{current.title}</span>
        <span className="text-white/70 tabular-nums">{shot + 1} / {SHOTS.length}</span>
      </div>

      <div className="flex gap-2.5 mt-2 p-1 -mx-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SHOTS.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Show ${s.title}`}
            onClick={() => setShot(i)}
            className={`shrink-0 w-[96px] h-[56px] sm:w-[120px] sm:h-[70px] rounded-lg overflow-hidden cursor-pointer transition-opacity duration-300 ${
              shot === i ? "opacity-100 outline outline-2 outline-[#D2FF42] outline-offset-2" : "opacity-55"
            }`}
          >
            {seen && <Picture pic={s.pic} sizes="120px" className="w-full h-full object-cover" />}
          </button>
        ))}
      </div>
    </>
  );
}
