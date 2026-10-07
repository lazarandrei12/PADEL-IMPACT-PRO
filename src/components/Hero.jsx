import { PANELS } from "./panels";

const EASE = "cubic-bezier(0.16,1,0.3,1)";
const SHADE =
  "linear-gradient(180deg,rgba(0,0,0,0.28) 0%,rgba(0,0,0,0) 35%,rgba(0,0,0,0) 60%,rgba(0,0,0,0.35) 100%),rgba(90,90,90,0.26)";

function Panel({ panel, index, on, wide, reduce, onOpen, onClose }) {
  const { label, image, position, tint, height, top, narrow, Body } = panel;
  const dur = reduce ? "0s" : "0.55s";

  const slot = wide
    ? {
        flex: `${on ? 16 : 1} 1 0%`,
        minWidth: 0,
        height: on ? 740 : height,
        marginTop: on ? 0 : top,
        transition: `flex-grow ${dur} ${EASE}, height ${dur} ${EASE}, margin-top ${dur} ${EASE}`,
      }
    : {
        width: narrow,
        height: on ? 640 : 132,
        transition: `height ${dur} ${EASE}`,
      };

  const onKeyDown = (e) => {
    if (!on && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <div style={slot}>
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
          <div
            className="absolute inset-0"
            style={{ background: `url(${image}) ${position}/cover no-repeat` }}
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
            } ${
              wide
                ? "top-7 left-[22px] text-[46px] [writing-mode:vertical-rl] rotate-180"
                : "bottom-[26px] left-6 text-[20px] min-[430px]:text-[26px] sm:text-[40px]"
            }`}
          >
            {label}
          </div>
          <div
            aria-hidden
            className={`absolute bottom-[22px] w-[34px] h-[34px] rounded-full border-[1.5px] border-white flex items-center justify-center text-xl leading-none pointer-events-none transition-opacity duration-[250ms] ${
              wide ? "left-[22px]" : "right-[22px]"
            } ${on ? "opacity-0" : "opacity-100"}`}
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
            className={`absolute inset-0 flex flex-col overflow-hidden ${
              wide ? "pt-9 pr-9 pb-6 pl-8" : "pt-7 px-[22px] pb-[22px]"
            }`}
            style={{
              opacity: on ? 1 : 0,
              transform: on ? "none" : "translateY(14px)",
              transition: reduce ? "none" : `opacity .45s ease .12s, transform .55s ${EASE} .12s`,
              pointerEvents: on ? "auto" : "none",
            }}
          >
            <h2
              className={`font-extrabold italic uppercase leading-none mb-3 ${
                wide ? "text-[52px]" : "text-[22px] min-[430px]:text-[26px] sm:text-[36px]"
              }`}
            >
              {label}
            </h2>
            <Body open={on} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ open, onOpen, onClose, wide, reduce }) {
  return (
    <div className="flex-1 w-full max-w-[1400px] mx-auto px-6 pt-6 pb-14 rounded-[28px] bg-[rgba(40,52,70,0.18)]">
      <div
        className={`flex gap-3 items-start ${wide ? "h-[760px]" : "flex-col"}`}
      >
        {PANELS.map((panel, i) => (
          <Panel
            key={panel.label}
            panel={panel}
            index={i}
            on={open === i}
            wide={wide}
            reduce={reduce}
            onOpen={() => { if (open !== i) onOpen(i); }}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
}
