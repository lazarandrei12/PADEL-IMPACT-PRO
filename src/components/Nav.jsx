import { useState, useEffect } from "react";
import logo from "../assets/logo_acum_bun.png";
import { BtnOutlineBlue } from "./Primitives";

const NAV_ITEMS = ["Game", "Squad", "Screenshots", "Media"];

export default function Nav({ onNavigate, active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.75);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 bg-[#050a14]/80 backdrop-blur-md border-b border-white/5 transition-all duration-500 ${
          scrolled || menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-hidden={!scrolled && !menuOpen}
      >
        <button onClick={() => onNavigate("game")} className="w-8 h-8 opacity-90 z-50 hover:opacity-100 transition-opacity duration-300">
          <img src={logo} alt="PIP" className="w-full h-full object-contain" />
        </button>

        <div className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase text-white/60 font-medium" style={{ fontFamily: "'Barlow', sans-serif" }}>
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, "");
            return (
              <button
                key={item}
                onClick={() => onNavigate(id)}
                className={`hover:text-[#3b82f6] transition-colors duration-300 ${active === id ? "text-[#3b82f6]" : ""}`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <a
            href="mailto:contact@padelimpact.games"
            className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#3b82f6] transition-colors duration-300 font-medium"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Contact
          </a>
          <BtnOutlineBlue href="https://store.steampowered.com/app/4510950/Padel_Impact_Pro/?beta=1">
            Wishlist
          </BtnOutlineBlue>
        </div>

        <button className="md:hidden text-white/70 z-50 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1.5 relative">
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-4 h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050a14]/98 flex flex-col items-center justify-center gap-8 backdrop-blur-lg">
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, "");
            return (
              <button
                key={item}
                onClick={() => { onNavigate(id); setMenuOpen(false); }}
                className="text-2xl tracking-widest uppercase text-white/80 hover:text-[#3b82f6] transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {item}
              </button>
            );
          })}
          <a
            href="mailto:contact@padelimpact.games"
            onClick={() => setMenuOpen(false)}
            className="text-2xl tracking-widest uppercase text-white/80 hover:text-[#3b82f6] transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Contact
          </a>
          <a
            href="https://store.steampowered.com/app/4510950/Padel_Impact_Pro/?beta=1"
            target="_blank" rel="noopener noreferrer"
            className="mt-8 text-sm tracking-[0.2em] uppercase border border-[#3b82f6]/50 text-[#3b82f6] px-8 py-4 hover:bg-[#3b82f6] hover:text-white transition-all duration-300 inline-block text-center"
            onClick={() => setMenuOpen(false)}
          >
            Wishlist on Steam
          </a>
        </div>
      )}
    </>
  );
}
