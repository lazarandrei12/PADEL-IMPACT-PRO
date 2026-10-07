import { useEffect, useRef } from "react";
import logo from "../assets/logo_acum_bun (1).png";

// Full-screen opening: the complete logo over a ghost wordmark, both drifting
// at different speeds as the page scrolls (parallax), then fading out.
export default function Intro() {
  const logoRef = useRef(null);
  const ghostRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight;
        if (y > vh * 1.2) return;
        if (ghostRef.current) {
          ghostRef.current.style.transform = `translate3d(0, ${y * 0.2}px, 0)`;
        }
        if (logoRef.current) {
          logoRef.current.style.transform = `translate3d(0, ${y * 0.1}px, 0) scale(${1 - y / (vh * 14)})`;
          logoRef.current.style.opacity = Math.max(0, 1 - y / (vh * 0.9));
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const goToPanels = () =>
    document.getElementById("panels")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-[#0251B0] flex items-center justify-center">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 70%)" }}
      />

      <div
        ref={ghostRef}
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none will-change-transform"
      >
        <span className="font-extrabold italic uppercase leading-none tracking-[-0.04em] text-white/[0.06] text-[34vw] md:text-[24vw]">
          PADEL
        </span>
      </div>

      <div ref={logoRef} className="relative z-10 flex flex-col items-center will-change-transform">
        <img
          src={logo}
          alt="Padel Impact Pro"
          fetchPriority="high"
          decoding="async"
          className="w-[min(86vw,640px)] h-auto drop-shadow-[0_10px_40px_rgba(2,20,60,0.35)]"
        />
      </div>

      <button
        type="button"
        onClick={goToPanels}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[11px] font-medium uppercase tracking-[0.35em] text-white/70 hover:text-white"
      >
        Scroll
        <svg className="animate-bounce" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  );
}
