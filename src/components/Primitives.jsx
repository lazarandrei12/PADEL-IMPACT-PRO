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

// Responsive image from a `?responsive` import (see vite.config.js).
// `sizes` tells the browser how wide it will be drawn so it picks the right file.
export function Picture({ pic, sizes, alt = "", loading = "lazy", fetchPriority, className = "", style }) {
  return (
    <picture>
      {Object.entries(pic.sources).map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={pic.img.src}
        width={pic.img.w}
        height={pic.img.h}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={className}
        style={style}
      />
    </picture>
  );
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
