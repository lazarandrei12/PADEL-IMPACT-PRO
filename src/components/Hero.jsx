import { PANELS } from "./panels";
import { Picture } from "./Primitives";
import MobilePanels from "./MobilePanels";

const EASE = "cubic-bezier(0.16,1,0.3,1)";
// Panel heights/offsets in panels.js are designed for a 760px-tall row; they're
// applied as percentages so the row can fit any screen height.
const ROW = 760;
const pct = (px) => `${(px / ROW) * 100}%`;
// Font sizes follow the row height (cqh), so the vertical labels fit short screens
const LABEL_SIZE = "clamp(18px, calc((68cqh - 100px) / 8), 46px)";
const TITLE_SIZE = "clamp(30px, 7cqh, 52px)";

const SHADE =
  "linear-gradient(180deg,rgba(0,0,0,0.28) 0%,rgba(0,0,0,0) 35%,rgba(0,0,0,0) 60%,rgba(0,0,0,0.35) 100%),rgba(90,90,90,0.26)";

// Desktop accordion panel (mobile uses MobilePanels)
function Panel({ panel, index, on, reduce, onOpen, onClose }) {
  const { label, image, position, tint, height, top, Body } = panel;
  const dur = reduce ? "0s" : "0.55s";

  const slot = {
    flex: `${on ? 16 : 1} 1 0%`,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    transition: `flex-grow ${dur} ${EASE}`,
  };
  const offset = { flex: `0 0 ${on ? "0%" : pct(top)}`, transition: `flex-basis ${dur} ${EASE}` };
  const size = { flex: `0 0 ${pct(on ? 740 : height)}`, minHeight: 0, transition: `flex-basis ${dur} ${EASE}` };

  const onKeyDown = (e) => {
    if (!on && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <div style={slot}>
      <div style={offset} />
      <div style={size}>
        <div className="reveal h-full" style={{ transitionDelay: `${index * 0.1}s` }}>
          <div
            role={on ? undefined : "button"}
            tabIndex={on ? undefined : 0}
            aria-label={on ? undefined : `Open ${label}`}
            onClick={onOpen}
            onKeyDown={onKeyDown}
            className={`relative w-full h-full rounded-[20px] overflow-hidden bg-[#0a2f6b] outline-offset-[3px] transition-[transform,box-shadow] duration-300 ease-[ease] ${
              on
                ? "cursor-default shadow-[0_30px_60px_rgba(2,20,60,0.4)]"
                : "cursor-pointer shadow-[0_12px_30px_rgba(2,20,60,0.25)] hover:-translate-y-2 hover:shadow-[0_30px_50px_rgba(2,20,60,0.45)]"
            }`}
          >
            <Picture
              pic={image}
              sizes="90vw"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: position }}
            />
            <div className="absolute inset-0" style={{ background: SHADE }} />
            {tint && <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${tint})` }} />}
            <div
              className="absolute inset-0 bg-black/60 pointer-events-none"
              style={{ opacity: on ? 1 : 0, transition: `opacity ${dur} ease` }}
            />

            <div
              aria-hidden
              className={`absolute pointer-events-none whitespace-nowrap font-extrabold italic uppercase leading-none text-white transition-opacity duration-[250ms] ${
                on ? "opacity-0" : "opacity-100"
              } top-7 left-[22px] [writing-mode:vertical-rl] rotate-180`}
              style={{ fontSize: LABEL_SIZE }}
            >
              {label}
            </div>
            <div
              aria-hidden
              className={`absolute bottom-[22px] w-[34px] h-[34px] rounded-full border-[1.5px] border-white flex items-center justify-center text-xl leading-none pointer-events-none transition-opacity duration-[250ms] left-[22px] ${
                on ? "opacity-0" : "opacity-100"
              }`}
            >
              +
            </div>

            <button
              type="button"
              aria-label={`Close ${label}`}
              tabIndex={on ? 0 : -1}
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="absolute top-6 right-6 z-[3] w-9 h-9 rounded-full border-[1.5px] border-white flex items-center justify-center text-xl leading-none cursor-pointer"
              style={{
                opacity: on ? 1 : 0,
                pointerEvents: on ? "auto" : "none",
                transition: `opacity ${dur} ease .15s`,
              }}
            >
              ×
            </button>

            <div
              inert={!on}
              className="absolute inset-0 flex flex-col overflow-hidden pt-9 pr-9 pb-6 pl-8"
              style={{
                opacity: on ? 1 : 0,
                transform: on ? "none" : "translateY(14px)",
                transition: reduce ? "none" : `opacity .45s ease .12s, transform .55s ${EASE} .12s`,
                pointerEvents: on ? "auto" : "none",
              }}
            >
              <h2 className="font-extrabold italic uppercase leading-none mb-3" style={{ fontSize: TITLE_SIZE }}>
                {label}
              </h2>
              <Body open={on} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ open, onOpen, onClose, wide, reduce }) {
  if (!wide) {
    return <MobilePanels open={open} onOpen={onOpen} onClose={onClose} reduce={reduce} />;
  }

  return (
    <div className="flex flex-col mx-auto w-[min(100%,1400px,calc(92cqh*1.8))] h-[min(860px,92cqh)] px-6 py-[clamp(12px,3svh,28px)] rounded-[28px] bg-[rgba(40,52,70,0.18)]">
      <div className="flex-1 min-h-0 flex gap-3 [container-type:size]">
        {PANELS.map((panel, i) => (
          <Panel
            key={panel.label}
            panel={panel}
            index={i}
            on={open === i}
            reduce={reduce}
            onOpen={() => { if (open !== i) onOpen(i); }}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
}
