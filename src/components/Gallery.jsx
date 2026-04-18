import { useState, useEffect, useRef } from "react";
import imgTeam1 from "../assets/TEAM 1.png";
import img32 from "../assets/HighresScreenshot00032.png";
import img10 from "../assets/HighresScreenshot00010.png";
import img07 from "../assets/HighresScreenshot00007.png";
import img17 from "../assets/HighresScreenshot00017.png";
import img12 from "../assets/HighresScreenshot00012.png";
import img15 from "../assets/HighresScreenshot00015.png";

import img23 from "../assets/HighresScreenshot00023.png";
import img26 from "../assets/HighresScreenshot00026.png";
import { Eyebrow, H2 } from "./Primitives";

const SCREENSHOTS = [
  { src: imgTeam1, caption: "The Team",             sub: "The people behind Padel Impact Pro" },
  { src: img32,    caption: "On Court",             sub: "Step inside the arena" },
  { src: img10, caption: "Iconic Locations",      sub: "Play in stunning real-world inspired courts" },
  { src: img07, caption: "Precision Gameplay",    sub: "Feel every shot, every serve, every smash" },
  { src: img17, caption: "Intense Rallies",        sub: "2v2 multiplayer — dominate with your partner" },
  { src: img12, caption: "Dynamic Action",         sub: "Experience fast-paced padel gameplay" },
  { src: img15, caption: "Competitive Spirit",     sub: "Challenge opponents and climb the ranks" },

  { src: img23, caption: "Total Focus",            sub: "Get in the zone before the first serve" },
  { src: img26, caption: "Split-Second Reflexes",  sub: "Master low returns and defensive plays" },
];

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !inView) return;
    const id = setInterval(() => setActive(a => (a + 1) % SCREENSHOTS.length), 5000);
    return () => clearInterval(id);
  }, [playing, inView]);

  const prev = () => setActive(a => (a - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
  const next = () => setActive(a => (a + 1) % SCREENSHOTS.length);
  const s = SCREENSHOTS[active];

  return (
    <section id="screenshots" ref={sectionRef} className="relative py-24 md:py-32 px-6 md:px-20 bg-[#0a101f]">
      <div className="max-w-6xl mx-auto mb-16 flex items-end justify-between gap-6 reveal">
        <div>
          <Eyebrow>Gallery</Eyebrow>
          <H2>Screenshots</H2>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-white/40" style={{ fontFamily: "'Barlow', sans-serif" }}>
          <button
            onClick={() => setPlaying(p => !p)}
            className="border border-white/10 px-3 py-2 hover:border-[#3b82f6] hover:text-[#3b82f6] transition-colors"
          >
            {playing ? "▼ Pause" : "▶ Play"}
          </button>
          <span className="text-white/60" style={{ fontFamily: "ui-monospace, Menlo, monospace" }}>
            {String(active + 1).padStart(2, "0")} / {String(SCREENSHOTS.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto reveal">
        <div className="relative aspect-video overflow-hidden rounded-sm shadow-2xl shadow-black/50">
          {SCREENSHOTS.map((sc, i) => (
            <img
              key={i}
              src={sc.src}
              alt={sc.caption}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? "scale(1)" : "scale(1.04)",
              }}
            />
          ))}

          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5 z-20">
            <div
              key={active}
              className="h-full bg-[#3b82f6]"
              style={{ animation: playing && inView ? "pip-progress 5s linear forwards" : "none" }}
            />
          </div>

          <button onClick={prev} aria-label="Previous"
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors duration-300 w-10 h-10 flex items-center justify-center border border-white/10 hover:border-white/30 backdrop-blur-sm bg-black/20">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button onClick={next} aria-label="Next"
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors duration-300 w-10 h-10 flex items-center justify-center border border-white/10 hover:border-white/30 backdrop-blur-sm bg-black/20">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/80 to-transparent p-4 md:p-8">
            <div key={active} style={{ animation: "pip-fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both" }}>
              <p className="text-[#3b82f6] text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase mb-1 md:mb-2" style={{ fontFamily: "'Barlow', sans-serif" }}>{s.caption}</p>
              <p className="text-white/90 text-xs md:text-base" style={{ fontFamily: "'Barlow', sans-serif" }}>{s.sub}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 mt-4">
          {SCREENSHOTS.map((sc, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`Show ${sc.caption}`}
              className={`relative aspect-video overflow-hidden rounded-sm transition-all duration-300 ${active === i ? "ring-1 ring-[#3b82f6] opacity-100" : "opacity-30 hover:opacity-70"}`}>
              <img src={sc.src} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
