import logo from "../assets/logo_acum_bun.png";

const SOCIALS = [
  { name: "Instagram", url: "https://www.instagram.com/padelimpactpro/" },
  { name: "TikTok",    url: "https://www.tiktok.com/@padelimpactpro" },
  { name: "Twitter / X", url: "https://x.com/PADELIMPACTPRO" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6 md:px-20 bg-[#03060c]" style={{ fontFamily: "'Barlow', sans-serif" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="flex items-center gap-4">
          <img src={logo} alt="PIP" className="w-10 h-10 object-contain" />
          <div>
            <p className="text-white font-bold text-sm tracking-wider uppercase">Padel Impact Pro</p>
            <p className="text-white/30 text-xs mt-1">2v2 Multiplayer Padel</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-6">
          {SOCIALS.map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
              className="text-white/30 text-xs tracking-widest uppercase hover:text-[#3b82f6] transition-colors duration-300">
              {s.name}
            </a>
          ))}
          <a href="mailto:contact@padelimpact.games"
            className="text-white/30 text-xs tracking-widest uppercase hover:text-[#3b82f6] transition-colors duration-300">
            Contact
          </a>
        </div>

        <p className="text-white/20 text-xs leading-relaxed">© 2026 Padel Impact Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}
