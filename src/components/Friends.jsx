import img23 from "../assets/HighresScreenshot00023.png";
import { Eyebrow, H2 } from "./Primitives";

function Trophy({ className = "" }) {
  return (
    <svg viewBox="0 0 120 140" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M28 28 H12 a6 6 0 0 0 -6 6 v8 a20 20 0 0 0 22 20" />
      <path d="M92 28 H108 a6 6 0 0 1 6 6 v8 a20 20 0 0 1 -22 20" />
      <path d="M28 16 h64 v32 a32 32 0 0 1 -64 0 z" />
      <path d="M60 24 l3 6 6.5 1 -4.75 4.75 1.25 6.75 -6-3.25 -6 3.25 1.25 -6.75 -4.75 -4.75 6.5 -1z" strokeWidth="1.25" />
      <path d="M48 80 h24" />
      <path d="M44 80 v10 a4 4 0 0 0 4 4 h24 a4 4 0 0 0 4 -4 v-10" />
      <path d="M56 94 v18" />
      <path d="M64 94 v18" />
      <path d="M36 112 h48 v8 a4 4 0 0 1 -4 4 h-40 a4 4 0 0 1 -4 -4 z" />
      <path d="M30 124 h60" />
    </svg>
  );
}

export default function Friends() {
  return (
    <section id="squad" className="relative py-24 md:py-40 px-6 md:px-20 bg-[#03060c] overflow-hidden">
      {/* Ambient aura */}
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 50% at calc(var(--mx, 0.5) * 100%) calc(var(--my, 0.3) * 100%), rgba(59,130,246,0.08) 0%, transparent 60%)"
      }} />

      <div className="relative max-w-5xl mx-auto mb-16 md:mb-24 text-center reveal">
        <Eyebrow>Play Together</Eyebrow>
        <H2>Better with<br />a friend.</H2>
        <p className="mx-auto max-w-xl mt-6 text-white/55 text-[15px] leading-relaxed" style={{ fontFamily: "'Barlow', sans-serif" }}>
          Padel is a doubles game at heart. Queue up with a friend, jump into a quick match, or chase the ladder together when Ranked goes live.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* Quick Match */}
        <div className="group relative aspect-[4/5] md:aspect-[5/6] overflow-hidden reveal">
          <img src={img23} alt="Quick Match 2v2" loading="lazy" decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/50 to-transparent" />
          <div className="absolute inset-0 bg-[#3b82f6]/0 group-hover:bg-[#3b82f6]/10 mix-blend-overlay transition-colors duration-500" />

          <div className="absolute top-6 left-6 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-white/70" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="w-6 h-px bg-[#3b82f6]" />
            <span>01 · Co-op Online</span>
          </div>
          <div className="absolute top-6 right-6 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/80" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse" />
            <span>Available</span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="text-[#3b82f6] text-[10px] tracking-[0.3em] uppercase mb-2" style={{ fontFamily: "'Barlow', sans-serif" }}>2v2 Multiplayer</p>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-4">Quick<br />Match</h3>
            <p className="text-white/60 text-[14px] leading-relaxed max-w-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
              Invite a friend or pair up with a random partner. Drop into a court, play a match, move on. The heartbeat of every session.
            </p>
          </div>
        </div>

        {/* Ranked — coming soon */}
        <div className="group relative aspect-[4/5] md:aspect-[5/6] overflow-hidden reveal bg-[#070e1f] border border-white/5">
          <div aria-hidden className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(59,130,246,0.22) 0%, transparent 65%)"
          }} />
          <div className="absolute inset-0 pip-grain opacity-30" />
          <div aria-hidden className="absolute inset-8 border border-white/5" />
          <div aria-hidden className="absolute top-1/2 left-8 right-8 h-px bg-white/5" />

          <div className="absolute top-6 left-6 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-white/70" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="w-6 h-px bg-[#3b82f6]" />
            <span>02 · Competitive</span>
          </div>
          <div className="absolute top-6 right-6 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#3b82f6]" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
            <span>Coming Soon</span>
          </div>

          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              transform: "translate3d(calc((var(--mx, 0.5) - 0.5) * 20px), calc((var(--my, 0.5) - 0.5) * 16px), 0)",
              transition: "transform .25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Trophy className="w-40 md:w-52 h-auto text-[#3b82f6]" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="text-[#3b82f6] text-[10px] tracking-[0.3em] uppercase mb-2" style={{ fontFamily: "'Barlow', sans-serif" }}>Ranked Ladder</p>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-4">Climb<br />Together</h3>
            <p className="text-white/60 text-[14px] leading-relaxed max-w-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
              Duo-queue into a competitive ladder with your partner. Earn stripes, defend your placement, and chase the top of the season leaderboard.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
