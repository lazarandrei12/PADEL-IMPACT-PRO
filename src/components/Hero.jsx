import { useEffect, useRef } from "react";
import logo from "../assets/logo_acum_bun.png";
import heroBg from "../assets/HighresScreenshot00032.png";
import { BtnPrimary, BtnGhost } from "./Primitives";

export default function Hero() {
  const rootRef = useRef(null);
  const logoRef = useRef(null);
  const revealRef = useRef(null);
  const meshRef = useRef(null);
  const glyphRef = useRef(null);
  const metaTLRef = useRef(null);
  const metaBRRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight;
        if (y > vh * 1.4) return;

        const logoOp = Math.max(0, 1 - y / (vh * 0.9));
        if (logoRef.current) {
          logoRef.current.style.transform = `translate3d(0, ${y * -0.15}px, 0)`;
          logoRef.current.style.opacity = logoOp;
        }
        if (glyphRef.current) {
          glyphRef.current.style.transform = `translate3d(0, ${y * -0.25}px, 0) scale(${1 + y / (vh * 8)})`;
        }
        if (meshRef.current) {
          meshRef.current.style.transform = `translate3d(0, ${y * -0.08}px, 0) rotate(${y * 0.02}deg)`;
        }
        if (revealRef.current) {
          const progress = Math.min(1, Math.max(0, y / (vh * 0.55)));
          const translate = (1 - progress) * 80;
          revealRef.current.style.transform = `translate3d(0, ${translate}px, 0)`;
          revealRef.current.style.opacity = progress;
        }
        const metaOp = Math.min(1, y / (vh * 0.25));
        if (metaTLRef.current) metaTLRef.current.style.opacity = metaOp;
        if (metaBRRef.current) metaBRRef.current.style.opacity = metaOp;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="game" ref={rootRef} className="relative h-[100svh] min-h-[720px] overflow-hidden flex items-center justify-center bg-[#050a14]">
      {/* Background image — revealed by cursor spotlight */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "calc(50% + (var(--mx, 0.5) - 0.5) * -40px) calc(50% + (var(--my, 0.5) - 0.5) * -30px)",
          filter: "grayscale(0.6) brightness(0.45) contrast(1.05)",
          opacity: 0.22,
          transform: "scale(1.08)",
          WebkitMaskImage: "radial-gradient(circle 420px at var(--mxpx, 50%) var(--mypx, 50%), rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.2) 100%)",
          maskImage: "radial-gradient(circle 420px at var(--mxpx, 50%) var(--mypx, 50%), rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      {/* Atmospheric layers */}
      <div ref={meshRef} className="absolute inset-0 pointer-events-none will-change-transform flex items-center justify-center">
        <div className="pip-mesh" />
      </div>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none pip-scanlines" />
      <div className="absolute inset-0 pointer-events-none pip-grain" />
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#050a14] via-[#050a14]/70 to-transparent" />

      {/* Ghost "PADEL" typography */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1] select-none will-change-transform" ref={glyphRef}>
        <span className="block text-[38vw] md:text-[24vw] leading-none italic font-black tracking-[-0.05em] text-white/[0.04]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          PADEL
        </span>
      </div>

      {/* Top-left metadata */}
      <div ref={metaTLRef} className="absolute top-24 left-6 md:top-28 md:left-10 z-20 hidden sm:flex items-start gap-3 text-[10px] tracking-[0.3em] uppercase text-white/50 opacity-0" style={{ fontFamily: "'Barlow', sans-serif" }}>
        <span className="w-8 h-px bg-[#3b82f6] mt-[7px]" />
        <div className="flex flex-col gap-1">
          <span className="text-white/80">Coming Soon</span>
          <span>Wishlist · Steam</span>
        </div>
      </div>

      {/* Bottom-right metadata */}
      <div ref={metaBRRef} className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 hidden sm:flex flex-col items-end gap-1 text-[10px] tracking-[0.3em] uppercase text-white/40 opacity-0" style={{ fontFamily: "'Barlow', sans-serif" }}>
        <span>2v2 Multiplayer</span>
        <span>Unreal Engine 5 · PC</span>
        <span className="flex items-center gap-2 text-white/70">
          In Development <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse" />
        </span>
      </div>

      {/* Logo */}
      <div ref={logoRef} className="relative z-10 flex flex-col items-center will-change-transform">
        <div
          className="w-60 md:w-[28rem]"
          style={{
            filter: "drop-shadow(0 0 120px rgba(59,130,246,0.55))",
            transform: "translate3d(calc((var(--mx, 0.5) - 0.5) * 18px), calc((var(--my, 0.5) - 0.5) * 12px), 0)",
            transition: "transform .2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <img src={logo} alt="Padel Impact Pro" fetchpriority="high" decoding="async" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Scroll-revealed CTAs */}
      <div
        ref={revealRef}
        className="absolute left-0 right-0 bottom-16 md:bottom-28 z-10 flex flex-col items-center text-center px-6 will-change-transform opacity-0"
        style={{ transform: "translate3d(0, 80px, 0)" }}
      >
        <div className="mb-5 md:mb-8 flex items-center gap-3 md:gap-4" style={{ fontFamily: "'Barlow', sans-serif" }}>
          <span className="w-6 md:w-10 h-px bg-white/30" />
          <p className="text-white/70 text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase">In Session · 2026</p>
          <span className="w-6 md:w-10 h-px bg-white/30" />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:w-auto">
          <BtnPrimary href="https://store.steampowered.com/app/4510950/Padel_Impact_Pro/?beta=1">
            Add to Wishlist
          </BtnPrimary>
          <BtnGhost href="#media">Watch Trailer</BtnGhost>
        </div>
      </div>

      {/* Scroll chevron */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-[10px] tracking-[0.4em] uppercase pip-bob flex flex-col items-center gap-2" style={{ fontFamily: "'Barlow', sans-serif" }}>
        <span>Scroll to Enter</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
