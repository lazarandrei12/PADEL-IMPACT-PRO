import { PanelText } from "./Primitives";

const FEATURES = [
  {
    title: "Online Multiplayer & Private Lobbies",
    desc: "Host a lobby and invite your friends, drop into a public match, or set up a private 2v2 with the crew. Cross-region matchmaking keeps the courts full and the queues short.",
  },
  {
    title: "Singleplayer vs AI",
    desc: "Take on AI opponents tuned for every skill level. Train, run an Exhibition match, or grind a full Best-of-3 — the bot adapts, pressures the net, and won’t hand you the point.",
  },
  {
    title: "Authentic Padel, Built to Play",
    desc: "Full doubles format with real sets, games, and proper scoring. Diagonal serves, glass rebounds, and tactical lobs are all part of the kit. Pick it up in minutes, spend hours learning the angles.",
  },
  {
    title: "Strategy That Rewards You",
    desc: "Control the net, wrong-foot your opponent off the back wall, or drop a soft volley they can’t reach. Every point is a setup. Every shot has an answer.",
  },
  {
    title: "Built for Highlights",
    desc: "Diving volleys. Last-second saves. The smash that ends a tiebreak. Padel Impact PRO is built around the moments you’ll want to clip and share.",
  },
];

// Body of the "The Game" panel
export default function Friends() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto pr-3.5 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.5)_transparent]">
      <p className="font-extrabold italic uppercase text-[20px] sm:text-[34px] leading-[1.1] text-[#D2FF42] mb-3.5">
        Grab a Racket. Feel the Impact.
      </p>
      <PanelText className="max-w-[680px] mb-3.5">
        Padel Impact PRO is the fast, fun, and fiercely competitive padel game where every rally is a battle of wits, reflexes, and big swings. Smash, lob, and bounce shots off the glass walls in the world’s most addictive racquet sport — solo, with friends, or against the world.
      </PanelText>
      <PanelText className="max-w-[680px] mb-9">
        No menus full of sliders. No dry simulation. Just pure padel, dialed to eleven.
      </PanelText>

      <div className="font-semibold text-[13px] tracking-[0.28em] uppercase mb-4">Key Features</div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3 max-w-[900px]">
        {FEATURES.map((f) => (
          <div key={f.title} className="bg-white/[0.12] rounded-xl px-5 py-[18px]">
            <div className="font-semibold text-lg leading-[1.3]">{f.title}</div>
            <div className="text-[15px] leading-6 mt-1.5 text-white/90">{f.desc}</div>
          </div>
        ))}
      </div>

      <PanelText className="mt-9 mb-2 font-semibold">
        The court is calling. Bring your A-game.
      </PanelText>
    </div>
  );
}
