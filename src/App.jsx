import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

import logo from "./assets/logo_acum_bun.png";
import screen1 from "./assets/HighresScreenshot00007.png";
import screen2 from "./assets/HighresScreenshot00010.png";
import screen3 from "./assets/HighresScreenshot00001.png";
import screen4 from "./assets/HighresScreenshot00012.png";
import screen5 from "./assets/HighresScreenshot00015.png";
import screen6 from "./assets/HighresScreenshot00016.png";
import screen7 from "./assets/HighresScreenshot00017.png";
import screen8 from "./assets/HighresScreenshot00023.png";
import screen9 from "./assets/HighresScreenshot00026.png";

const screenshots = [
  { src: screen2, caption: "Iconic Locations", sub: "Play in stunning real-world inspired courts" },
  { src: screen1, caption: "Precision Gameplay", sub: "Feel every shot, every serve, every smash" },
  { src: screen3, caption: "Intense Rallies", sub: "2v2 multiplayer — dominate with your partner" },
  { src: screen4, caption: "Dynamic Action", sub: "Experience fast-paced padel gameplay" },
  { src: screen5, caption: "Competitive Spirit", sub: "Challenge opponents and climb the ranks" },
  { src: screen6, caption: "Team Play", sub: "Master the art of coordination and timing" },
  { src: screen7, caption: "Victory Moments", sub: "Celebrate your wins with epic shots" },
  { src: screen8, caption: "Total Focus", sub: "Get in the zone before the first serve" },
  { src: screen9, caption: "Split-Second Reflexes", sub: "Master low returns and defensive plays" },
];

export default function App() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const logoY = useTransform(scrollY, [0, 600], [0, 120]);
  const logoOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const overlayOpacity = useTransform(scrollY, [0, 500], [0.45, 0.85]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#050a14] text-white font-sans overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 bg-[#050a14]/80 backdrop-blur-md border-b border-white/5">
        <a href="#game" className="w-8 h-8 opacity-90 z-50 hover:opacity-100 transition-opacity duration-300">
          <img src={logo} alt="PIP" className="w-full h-full object-contain" />
        </a>
        <div className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase text-white/60 font-medium">
          {["Game", "Screenshots", "Media"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="hover:text-[#3b82f6] transition-colors duration-300">{item}</a>
          ))}
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <a href="mailto:contact@padelimpact.games"
            className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#3b82f6] transition-colors duration-300">
            Contact
          </a>
          <a href="https://store.steampowered.com/app/4510950/Padel_Impact_Pro/?beta=1" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.2em] uppercase border border-[#3b82f6]/50 text-[#3b82f6] px-5 py-2 hover:bg-[#3b82f6] hover:text-white transition-all duration-300 inline-block text-center">
            Wishlist
          </a>
        </div>
        <button className="md:hidden text-white/70 z-50 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1.5 relative">
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-4 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050a14]/98 flex flex-col items-center justify-center gap-8 backdrop-blur-lg">
            {["Game", "Screenshots", "Media"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-2xl tracking-widest uppercase text-white/80 hover:text-[#3b82f6] transition-colors">{item}</a>
            ))}
            <a href="mailto:contact@padelimpact.games"
              onClick={() => setMenuOpen(false)}
              className="text-2xl tracking-widest uppercase text-white/80 hover:text-[#3b82f6] transition-colors">
              Contact
            </a>
            <a href="https://store.steampowered.com/app/4510950/Padel_Impact_Pro/?beta=1" target="_blank" rel="noopener noreferrer" className="mt-8 text-sm tracking-[0.2em] uppercase border border-[#3b82f6]/50 text-[#3b82f6] px-8 py-4 hover:bg-[#3b82f6] hover:text-white transition-all duration-300 inline-block text-center">
              Wishlist on Steam
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <section ref={heroRef} id="game" className="relative h-[100svh] overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110 md:scale-105">
          <img src={screen2} alt="hero bg" className="w-full h-full object-cover object-center" />
        </motion.div>

        <motion.div style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-[#050a14]/70 via-[#050a14]/50 to-[#050a14]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050a14_100%)]" />

        <motion.div
          style={{ y: useTransform(scrollY, [0, 800], [0, 80]) }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
          <motion.img
            src={logo}
            alt=""
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 0.07, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-[120vw] md:w-[90vw] max-w-4xl object-contain"
            style={{ filter: "blur(2px) saturate(0) brightness(3)" }}
          />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
          <div className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#3b82f6]/15 blur-[80px] md:blur-[120px]" />
        </div>

        <motion.div style={{ y: logoY, opacity: logoOpacity }}
          className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-2xl mx-auto">

          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-48 md:w-80 mb-6 md:mb-8 drop-shadow-[0_0_80px_rgba(59,130,246,0.6)]">
            <img src={logo} alt="Padel Impact Pro" className="w-full h-full object-contain" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/50 text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase mb-10">
            2v2 Multiplayer Padel Experience
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-4 w-full sm:w-2/3 md:w-auto mx-auto">
            {/* Buton 1: Wishlist */}
            <a href="https://store.steampowered.com/app/4510950/Padel_Impact_Pro/?beta=1" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto flex items-center justify-center bg-[#3b82f6] text-white text-xs tracking-[0.2em] uppercase px-8 py-4 md:py-3.5 hover:bg-[#2563eb] transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Add to Wishlist
            </a>
            
            {/* Buton 2: Watch Trailer  */}
            <a href="#media" className="w-full md:w-auto flex items-center justify-center bg-transparent text-white text-xs tracking-[0.2em] uppercase px-8 py-4 md:py-3.5 border border-white hover:bg-white/10 transition-all duration-300">
              Watch Trailer
            </a>
          </motion.div>
        </motion.div>
      </section>

      <FeaturesSection />

      <AdBanner />

      <ScreenshotsSection screenshots={screenshots} active={activeScreenshot} setActive={setActiveScreenshot} />
      <MediaSection />

      <AdBanner />

      <Footer logo={logo} />
    </div>
  );
}

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
      <ins className="adsbygoogle"
           style={{ display: "block", width: "100%", maxWidth: "900px", minHeight: "90px" }}
           data-ad-client="ca-pub-7891696047652204"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: "⚡", title: "Fast-Paced Action", desc: "Experience intense padel matches with responsive controls" },
    { icon: "🏆", title: "Competitive Ranks", desc: "Climb the leaderboards and prove your skills" },
    { icon: "👥", title: "2v2 Gameplay", desc: "Team up with friends or strangers worldwide" },
    { icon: "🎮", title: "Online Multiplayer", desc: "Connect with players across the globe in real-time" },
    { icon: "🌍", title: "Real Locations", desc: "Play in beautifully designed inspired courts" },
    { icon: "✨", title: "Pro Graphics", desc: "Stunning visuals powered by Unreal Engine" },
  ];

  return (
    <section ref={ref} id="features" className="relative py-20 md:py-32 px-6 md:px-20 bg-[#050a14]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16">
        <span className="text-[#3b82f6] text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase block mb-3 md:mb-4">Features</span>
        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight">What to Expect</h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {features.map((f, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-[#050a14] p-8 group hover:bg-[#0d1929] transition-colors duration-300">
            <div className="text-3xl mb-5 md:mb-6">{f.icon}</div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2 md:mb-3">{f.title}</h3>
            <p className="text-white/40 text-xs md:text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ScreenshotsSection({ screenshots, active, setActive }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="screenshots" className="relative py-20 md:py-32 px-6 md:px-20 overflow-hidden bg-[#0a101f]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16">
        <span className="text-[#3b82f6] text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase block mb-3 md:mb-4">Gallery</span>
        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight">Screenshots</h2>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <div className="relative aspect-video overflow-hidden mb-4 md:mb-6 rounded-sm shadow-2xl shadow-black/50">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={screenshots[active].src}
              alt={screenshots[active].caption}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          <button
            onClick={() => setActive((prev) => (prev - 1 + screenshots.length) % screenshots.length)}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors duration-300 text-3xl md:text-4xl"
          >
            ‹
          </button>
          <button
            onClick={() => setActive((prev) => (prev + 1) % screenshots.length)}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors duration-300 text-3xl md:text-4xl"
          >
            ›
          </button>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/80 to-transparent p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <p className="text-[#3b82f6] text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase mb-1">{screenshots[active].caption}</p>
                <p className="text-white/80 text-xs md:text-sm">{screenshots[active].sub}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {screenshots.map((s, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`relative aspect-video overflow-hidden rounded-sm transition-all duration-300 ${active === i ? "ring-2 ring-[#3b82f6] opacity-100" : "opacity-40 hover:opacity-80"}`}>
              <img src={s.src} alt={s.caption} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function MediaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="media" className="relative py-20 md:py-32 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto">

        <div className="text-center mb-12 md:mb-20">
          <span className="text-[#3b82f6] text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase block mb-3 md:mb-4">Media</span>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight">Official Trailer</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video bg-[#0d1929] border border-white/10 overflow-hidden mb-12 md:mb-16 group rounded-sm shadow-2xl shadow-black/50">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Jm8j7A6llGk?rel=0&modestbranding=1"
            title="Padel Impact Pro - Official Teaser"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer({ logo }) {
  return (
    <footer className="border-t border-white/5 py-12 md:py-16 px-6 md:px-20 bg-[#03060c]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img src={logo} alt="Padel Impact Pro" className="w-12 h-12 md:w-10 md:h-10 object-contain" />
          <div>
            <p className="text-white font-bold text-sm tracking-wider uppercase">Padel Impact Pro</p>
            <p className="text-white/30 text-xs mt-1 md:mt-0">2v2 Multiplayer Padel</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-6">
          {[
            { name: "Instagram", url: "https://www.instagram.com/padelimpactpro/" },
            { name: "TikTok", url: "https://www.tiktok.com/@padelimpactpro" },
            { name: "Twitter / X", url: "https://x.com/PADELIMPACTPRO" }
          ].map((social) => (
            <a key={social.name} href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 text-xs tracking-widest uppercase hover:text-[#3b82f6] transition-colors duration-300">
              {social.name}
            </a>
          ))}
          <a href="mailto:contact@padelimpact.games"
            className="text-white/30 text-xs tracking-widest uppercase hover:text-[#3b82f6] transition-colors duration-300">
            Contact
          </a>
        </div>

        <p className="text-white/20 text-xs w-full md:w-auto mt-4 md:mt-0 leading-relaxed">
          © 2026 Padel Impact Pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}