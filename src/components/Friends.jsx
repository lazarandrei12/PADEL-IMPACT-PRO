import { PanelText } from "./Primitives";

const FEATURES = [
  {
    title: "Play with your friends",
    desc: "Host a private lobby and invite your friends, or jump online and take over the court. Team up in 2v2 doubles, trade smashes at the net and settle every score off the glass.",
  },
  {
    title: "AI that plays real padel",
    desc: "Your opponents mix flat drives, slices and lobs. Rush the net and they answer with a pass, a lob or a soft chiquita. They come forward to volley and smash the high balls. Stretch them wide and they start to slip up.",
  },
];

// Body of the "The Game" panel
export default function Friends() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto min-[980px]:pr-3.5 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.5)_transparent]">
      <p className="font-extrabold italic uppercase text-[20px] sm:text-[34px] leading-[1.1] text-[#D2FF42] mb-3.5">
        Meet Padel Impact PRO
      </p>
      <div className="font-semibold text-lg leading-[1.3] mb-4">Padel as it should be.</div>
      <PanelText className="max-w-[680px] mb-3.5">
        Padel Impact PRO is a fast, fun and competitive padel game. Smash, lob and bounce the ball off the glass, solo, with friends or online. Easy to pick up, full of angles to master.
      </PanelText>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3 max-w-[900px]">
        {FEATURES.map((f) => (
          <div key={f.title} className="bg-white/[0.12] rounded-xl px-5 py-[18px]">
            <div className="font-semibold text-lg leading-[1.3]">{f.title}</div>
            <div className="text-[15px] leading-6 mt-1.5 text-white/90">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
