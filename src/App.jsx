import { useCallback, useEffect, useState } from "react";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

export default function App() {
  const [open, setOpen] = useState(null); // null | 0..3
  const wide = useMediaQuery("(min-width: 980px)");
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");

  const close = useCallback(() => setOpen(null), []);

  // Fade/rise elements in every time they scroll into view.
  // Re-run on layout switch: desktop and mobile panels are different elements.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        e.target.classList.toggle("in", e.isIntersecting);
      }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [wide]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="text-white">
      <Intro />
      <div id="panels" className="relative isolate min-h-screen min-[980px]:h-[100svh] min-[980px]:min-h-[560px] flex flex-col bg-[#0251B0]">
        <div aria-hidden className="page-texture -z-10" />
        <Nav onClose={close} />
        <main className="flex-1 min-h-0 flex flex-col justify-center min-[980px]:[container-type:size] px-4 sm:px-7 pt-1.5 pb-6 min-[980px]:pb-[clamp(10px,2svh,24px)]">
          <Hero open={open} onOpen={setOpen} onClose={close} wide={wide} reduce={reduce} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
