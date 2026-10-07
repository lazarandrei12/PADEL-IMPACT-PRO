export const STEAM_URL = "https://store.steampowered.com/app/4510950/Padel_Impact_Pro/?beta=1";

export function Eyebrow({ children }) {
  return (
    <span
      className="text-[#3b82f6] text-xs tracking-[0.4em] uppercase block mb-4 font-medium"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      {children}
    </span>
  );
}

export function H2({ children }) {
  return (
    <h2 className="text-5xl font-black uppercase tracking-tight leading-[0.95]">
      {children}
    </h2>
  );
}

// Body copy inside an open panel (colour is inherited: white)
export function PanelText({ className = "", children }) {
  return <p className={`text-[17px] leading-7 ${className}`}>{children}</p>;
}

// Volt Lime action pill — sizing comes from the caller
export function BtnLime({ href, className = "", children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full bg-[#D2FF42] text-[#0b1a33] hover:bg-white ${className}`}
    >
      {children}
    </a>
  );
}
