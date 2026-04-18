import img16 from "../assets/HighresScreenshot00016.png";
import img12 from "../assets/HighresScreenshot00012.png";
import img17 from "../assets/HighresScreenshot00017.png";
import img15 from "../assets/HighresScreenshot00015.png";
import { Eyebrow, H2 } from "./Primitives";

const PILLARS = [
  {
    no: "I.",
    location: "Centre Court",
    tag: "The Arena",
    quote: "Every rally is a conversation.",
    desc: "Four players, one glass cage. Feel the weight of every volley, every bandeja, every smash that kisses the back wall before bouncing out of reach.",
    img: img16,
  },
  {
    no: "II.",
    location: "The Draw",
    tag: "Tournaments",
    quote: "Bracket to brutal. Nobody remembers the semis.",
    desc: "Climb through qualifiers, open draws, and signature events. Win titles, earn seeding, build a career on the ranking board.",
    img: img12,
  },
  {
    no: "III.",
    location: "Doubles",
    tag: "Partnership",
    quote: "You're only as good as the player across from you.",
    desc: "Team up with a friend or a stranger who plays like one. Real communication, real positioning, real chemistry — the heartbeat of 2v2.",
    img: img17,
  },
  {
    no: "IV.",
    location: "The Tour",
    tag: "Seasons",
    quote: "Different courts. Different light. Same pressure.",
    desc: "Seasonal venues with their own bounce, glare, and crowd. Learn the court, then own the crowd — or watch the ball roll past.",
    img: img15,
  },
];

export default function Pillars() {
  return (
    <section id="features" className="relative py-24 md:py-40 px-6 md:px-20 bg-[#050a14]">
      <div className="max-w-6xl mx-auto mb-20 md:mb-28 reveal">
        <Eyebrow>The Game</Eyebrow>
        <H2>What awaits you<br />on court.</H2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-24 md:gap-40">
        {PILLARS.map((p, i) => (
          <div
            key={p.no}
            className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center reveal ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
          >
            {/* Visual */}
            <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.location} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-white/80" style={{ fontFamily: "'Barlow', sans-serif" }}>
                <span className="w-6 h-px bg-[#3b82f6]" /> {p.location}
              </div>
              <div className="absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase text-white/50" style={{ fontFamily: "ui-monospace, Menlo, monospace" }}>
                {String(i + 1).padStart(2, "0")} / 0{PILLARS.length}
              </div>
            </div>

            {/* Copy */}
            <div className="md:col-span-5 flex flex-col">
              <span className="text-[#3b82f6] text-5xl md:text-6xl italic font-black leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{p.no}</span>
              <span className="text-white/50 text-[10px] tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Barlow', sans-serif" }}>{p.tag}</span>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-6">{p.location}</h3>
              <blockquote className="text-white/90 text-xl md:text-2xl leading-snug italic mb-6 pl-5 border-l border-[#3b82f6]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                "{p.quote}"
              </blockquote>
              <p className="text-white/55 text-[15px] leading-relaxed max-w-md" style={{ fontFamily: "'Barlow', sans-serif" }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
