import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { PANELS } from "./panels";
import { Picture } from "./Primitives";

const EASE = "cubic-bezier(0.16,1,0.3,1)";
const SHADE = "linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(0,0,0,0.55) 100%)";
const FULL = "inset(0px 0px 0px 0px round 0px)";

// Clip-path that crops the full-screen sheet down to the card's rectangle,
// so animating between it and FULL looks like the card growing/shrinking.
function cardClip(index, sheet) {
  const card = document.querySelector(`[data-panel="${index}"]`);
  if (!card) return "inset(100% 0px 0px 0px round 20px)";
  const r = card.getBoundingClientRect();
  const s = sheet.getBoundingClientRect();
  return `inset(${r.top - s.top}px ${s.right - r.right}px ${s.bottom - r.bottom}px ${r.left - s.left}px round 20px)`;
}

function Card({ panel, index, onOpen }) {
  const { label, image, position, tint } = panel;
  return (
    <div className="reveal" style={{ transitionDelay: `${index * 0.08}s` }}>
      <button
        type="button"
        data-panel={index}
        aria-label={`Open ${label}`}
        onClick={onOpen}
        className="relative block w-full h-[clamp(120px,calc((100svh-240px)/4),220px)] rounded-[20px] overflow-hidden bg-[#0a2f6b] text-left shadow-[0_12px_30px_rgba(2,20,60,0.25)] transition-transform duration-200 active:scale-[0.98]"
      >
        <Picture
          pic={image}
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: position }}
        />
        <div className="absolute inset-0" style={{ background: SHADE }} />
        {tint && <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${tint})` }} />}
        <span className="absolute left-5 bottom-4 right-16 font-extrabold italic uppercase leading-none text-[26px] min-[430px]:text-[30px] sm:text-[40px]">
          {label}
        </span>
        <span
          aria-hidden
          className="absolute right-4 bottom-3.5 w-9 h-9 rounded-full border-[1.5px] border-white flex items-center justify-center"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  );
}

// Full-screen view of an open panel. Grows out of its card and shrinks back into it.
function Sheet({ panel, index, on, reduce, onClose, onGone }) {
  const { label, image, position, Body } = panel;
  const sheetRef = useRef(null);
  const bodyRef = useRef(null);
  const closeRef = useRef(null);

  useLayoutEffect(() => {
    const sheet = sheetRef.current;
    if (on) closeRef.current?.focus({ preventScroll: true });
    if (reduce) {
      if (!on) onGone();
      return;
    }
    const from = cardClip(index, sheet);
    const grow = sheet.animate(
      { clipPath: on ? [from, FULL] : [FULL, from] },
      { duration: on ? 550 : 420, easing: EASE, fill: "forwards" }
    );
    const fade = bodyRef.current.animate(
      on
        ? [{ opacity: 0, transform: "translateY(16px)" }, { opacity: 1, transform: "none" }]
        : [{ opacity: 1 }, { opacity: 0 }],
      on
        ? { duration: 450, delay: 150, easing: EASE, fill: "both" }
        : { duration: 160, fill: "forwards" }
    );
    if (!on) grow.finished.then(onGone, () => {});
    return () => { grow.cancel(); fade.cancel(); };
  }, [on, index, reduce, onGone]);

  return (
    <div
      ref={sheetRef}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-50 overflow-hidden bg-[#0a2f6b] text-white"
      style={{ pointerEvents: on ? "auto" : "none" }}
    >
      <Picture
        pic={image}
        sizes="100vw"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div ref={bodyRef} className="absolute inset-0 overflow-y-auto overscroll-contain px-4 pt-6 pb-8 sm:px-7">
        <h2 className="font-extrabold italic uppercase leading-none text-[30px] sm:text-[40px] mb-5 pr-14">
          {label}
        </h2>
        <Body open={on} />
      </div>

      <button
        ref={closeRef}
        type="button"
        aria-label={`Close ${label}`}
        onClick={onClose}
        className="absolute top-4 right-4 z-[3] w-10 h-10 rounded-full border-[1.5px] border-white bg-black/30 backdrop-blur-sm flex items-center justify-center text-2xl leading-none"
      >
        ×
      </button>
    </div>
  );
}

export default function MobilePanels({ open, onOpen, onClose, reduce }) {
  // Keep the last opened panel mounted while its closing animation runs
  const [shown, setShown] = useState(open);
  if (open !== null && open !== shown) setShown(open);
  const onGone = useCallback(() => setShown(null), []);

  const isOpen = open !== null;

  // Phone "back" closes the sheet instead of leaving the site
  useEffect(() => {
    if (!isOpen) return;
    if (!history.state?.sheet) history.pushState({ sheet: true }, "");
    const onPop = () => onClose();
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [isOpen, onClose]);

  const close = () => {
    if (history.state?.sheet) history.back(); // popstate -> onClose
    else onClose();
  };

  // No page scrolling behind the sheet
  const locked = shown !== null;
  useEffect(() => {
    if (!locked) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    return () => { root.style.overflow = ""; };
  }, [locked]);

  return (
    <>
      <div className="flex flex-col gap-3">
        {PANELS.map((panel, i) => (
          <Card key={panel.label} panel={panel} index={i} onOpen={() => onOpen(i)} />
        ))}
      </div>

      {shown !== null && (
        <Sheet
          panel={PANELS[shown]}
          index={shown}
          on={isOpen}
          reduce={reduce}
          onClose={close}
          onGone={onGone}
        />
      )}
    </>
  );
}
