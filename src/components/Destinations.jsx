import img10 from "../assets/HighresScreenshot00010.png";
import img07 from "../assets/HighresScreenshot00007.png";
import img16 from "../assets/HighresScreenshot00016.png";
import img26 from "../assets/HighresScreenshot00026.png";
import { Eyebrow, H2 } from "./Primitives";

const DESTINATIONS = [
  { img: img10, name: "Costa del Sol",  tag: "Málaga, Spain",    kicker: "Clay sunset" },
  { img: img07, name: "Roof at Twelve", tag: "Dubai Marina",     kicker: "Rooftop glass" },
  { img: img16, name: "Almería Open",   tag: "Andalusia Hills",  kicker: "Open air, hard court" },
  { img: img26, name: "Domo Central",   tag: "Buenos Aires",     kicker: "Indoor night sessions" },
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative py-24 md:py-40 px-6 md:px-20 bg-[#03060c]">
      <div className="max-w-6xl mx-auto mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 reveal">
        <div>
          <Eyebrow>The Circuit</Eyebrow>
          <H2>Play the world's<br />most famous courts.</H2>
        </div>
        <p className="max-w-sm text-white/50 text-sm leading-relaxed" style={{ fontFamily: "'Barlow', sans-serif" }}>
          Each venue carries its own bounce, light, and crowd. Tour a handful of the signature stops on the Padel Impact Pro circuit.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {DESTINATIONS.map((d, i) => (
          <div key={d.name} className="group relative aspect-[4/5] md:aspect-[5/6] overflow-hidden cursor-pointer reveal">
            <img src={d.img} alt={d.name} loading="lazy" decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/40 to-transparent" />
            <div className="absolute inset-0 bg-[#3b82f6]/0 group-hover:bg-[#3b82f6]/10 mix-blend-overlay transition-colors duration-500" />

            <div className="absolute top-6 left-6 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-white/70" style={{ fontFamily: "'Barlow', sans-serif" }}>
              <span className="w-6 h-px bg-[#3b82f6]" />
              <span>{String(i + 1).padStart(2, "0")} · {d.kicker}</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-white/60 text-[10px] tracking-[0.3em] uppercase mb-2" style={{ fontFamily: "'Barlow', sans-serif" }}>{d.tag}</p>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none text-white">{d.name}</h3>
              </div>
              <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-white/20 group-hover:border-[#3b82f6] group-hover:bg-[#3b82f6] transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className="text-white">
                  <path d="M7 17 17 7" /><path d="M7 7h10v10" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
