const LINKS = [
  { label: "Instagram",   href: "https://www.instagram.com/padelimpactpro/" },
  { label: "TikTok",      href: "https://www.tiktok.com/@padelimpactpro" },
  { label: "Twitter / X", href: "https://x.com/PADELIMPACTPRO" },
  { label: "Contact",     href: "mailto:contact@padelimpact.games" },
];

export default function Footer() {
  return (
    <footer className="reveal flex-none mx-4 sm:mx-7 pt-4 pb-7 min-[980px]:pt-3 min-[980px]:pb-[clamp(12px,2.5svh,28px)] border-t border-white/30 flex flex-wrap items-center justify-between gap-x-5 gap-y-3 text-[13px]">
      <span>© 2026 Padel Impact Pro</span>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            className="text-white hover:text-[#D2FF42]"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
