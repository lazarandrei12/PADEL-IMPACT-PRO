import { useEffect, useRef, useState } from "react";
import CursorFX from "./components/CursorFX";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Friends from "./components/Friends";
import Gallery from "./components/Gallery";
import Media from "./components/Media";
import Footer from "./components/Footer";

function AdBanner() {
  const adRef = useRef(false);

  useEffect(() => {
    if (adRef.current) return;
    adRef.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <div className="w-full bg-[#050a14] py-6 flex justify-center overflow-hidden border-t border-white/5">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", maxWidth: "900px", minHeight: "90px" }}
        data-ad-client="ca-pub-7891696047652204"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("game");

  function onNavigate(id) {
    setActive(id);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 40, behavior: "smooth" });
  }

  // Wire up .reveal elements via IntersectionObserver
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="bg-[#050a14] text-white overflow-x-hidden">
      <CursorFX />
      <Nav onNavigate={onNavigate} active={active} />
      <Hero />
      <Friends />
      <AdBanner />
      <Gallery />
      <Media />
      <AdBanner />
      <Footer />
    </div>
  );
}
