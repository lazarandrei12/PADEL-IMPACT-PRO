import { Eyebrow, H2 } from "./Primitives";

const FEATURES = [
  {
    no: "01",
    title: "Online Multiplayer & Private Lobbies",
    desc: "Host a lobby and invite your friends, drop into a public match, or set up a private 2v2 with the crew. Cross-region matchmaking keeps the courts full and the queues short.",
  },
  {
    no: "02",
    title: "Singleplayer vs AI",
    desc: "Take on AI opponents tuned for every skill level. Train, run an Exhibition match, or grind a full Best-of-3 — the bot adapts, pressures the net, and won't hand you the point.",
  },
  {
    no: "03",
    title: "Authentic Padel, Built to Play",
    desc: "Full doubles format with real sets, games, and proper scoring. Diagonal serves, glass rebounds, and tactical lobs are all part of the kit. Pick it up in minutes, spend hours learning the angles.",
  },
  {
    no: "04",
    title: "Strategy That Rewards You",
    desc: "Control the net, wrong-foot your opponent off the back wall, or drop a soft volley they can't reach. Every point is a setup. Every shot has an answer.",
  },
  {
    no: "05",
    title: "Built for Highlights",
    desc: "Diving volleys. Last-second saves. The smash that ends a tiebreak. Padel Impact PRO is built around the moments you'll want to clip and share.",
  },
];

export default function Friends() {
  return (
    <section id="thegame" className="relative py-24 md:py-40 px-6 md:px-20 bg-[#03060c] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 50% at calc(var(--mx, 0.5) * 100%) calc(var(--my, 0.3) * 100%), rgba(59,130,246,0.08) 0%, transparent 60%)"
      }} />

      <div className="relative max-w-5xl mx-auto mb-16 md:mb-24 reveal">
        <Eyebrow>The Game</Eyebrow>
        <H2>Grab a Racket.<br />Feel the Impact.</H2>
        <p className="mt-6 text-white/55 text-[15px] leading-relaxed max-w-2xl" style={{ fontFamily: "'Barlow', sans-serif" }}>
          Grab a racket and step onto the court. Play solo against AI, host private lobbies with friends, or battle online — smash, lob, and bounce shots off the glass in the world's hottest racket sport.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto mb-16 reveal">
        <p className="text-white/70 text-[15px] md:text-lg leading-relaxed max-w-3xl" style={{ fontFamily: "'Barlow', sans-serif" }}>
          Padel Impact PRO is the fast, fun, and fiercely competitive padel game where every rally is a battle of wits, reflexes, and big swings. Smash, lob, and bounce shots off the glass walls in the world's most addictive racquet sport — solo, with friends, or against the world.
        </p>
        <p className="mt-4 text-white/50 text-[14px] md:text-base leading-relaxed max-w-3xl italic" style={{ fontFamily: "'Barlow', sans-serif" }}>
          No menus full of sliders. No dry simulation. Just pure padel, dialed to eleven.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10 reveal">
          <span className="text-[#3b82f6] text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'Barlow', sans-serif" }}>Key Features</span>
          <span className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {FEATURES.map((f) => (
            <div key={f.no} className="group relative p-6 md:p-8 border border-white/5 bg-[#070e1f] hover:border-[#3b82f6]/30 transition-colors duration-500 reveal">
              <div aria-hidden className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                background: "radial-gradient(ellipse 60% 80% at 30% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)"
              }} />
              <span className="block text-[#3b82f6]/40 text-[10px] tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "ui-monospace, Menlo, monospace" }}>{f.no}</span>
              <h3 className="text-white text-lg md:text-xl font-black uppercase tracking-tight leading-tight mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{f.title}</h3>
              <p className="text-white/55 text-[14px] leading-relaxed" style={{ fontFamily: "'Barlow', sans-serif" }}>{f.desc}</p>
            </div>
          ))}

          <div className="relative p-6 md:p-8 border border-[#3b82f6]/20 bg-[#070e1f] reveal flex flex-col justify-between">
            <div>
              <span className="block text-[#3b82f6] text-[10px] tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Barlow', sans-serif" }}>The Court Is Calling</span>
              <p className="text-white/80 text-lg md:text-xl font-black uppercase tracking-tight leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Bring Your A-Game.
              </p>
            </div>
            <a
              href="https://store.steampowered.com/app/4510950/Padel_Impact_Pro/?beta=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/80 hover:text-white transition-colors duration-300 group"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              <span className="w-8 h-px bg-[#3b82f6] group-hover:w-12 transition-all duration-300" />
              Add to Wishlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
