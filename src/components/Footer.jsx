const LINKS = [
  { label: "Instagram",   href: "https://www.instagram.com/padelimpactpro/" },
  { label: "TikTok",      href: "https://www.tiktok.com/@padelimpactpro" },
  { label: "Twitter / X", href: "https://x.com/PADELIMPACTPRO" },
  { label: "Contact",     href: "mailto:contact@padelimpact.games" },
];

export default function Footer() {
  return (
    <footer className="reveal flex-none mx-7 pt-4 pb-7 border-t border-white/30 flex flex-wrap items-center justify-between gap-5 text-[13px]">
      <span>© 2026 Padel Impact Pro</span>
      <div className="flex flex-wrap gap-6">
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
