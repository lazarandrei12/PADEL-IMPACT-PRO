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

export function BtnPrimary({ children, onClick, href }) {
  const cls =
    "inline-flex items-center justify-center bg-[#3b82f6] text-white text-xs tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-[#2563eb] transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] cursor-pointer font-medium";
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

export function BtnGhost({ children, onClick, href }) {
  const cls =
    "inline-flex items-center justify-center bg-transparent text-white text-xs tracking-[0.2em] uppercase px-8 py-3.5 border border-white hover:bg-white/10 transition-all duration-300 cursor-pointer font-medium";
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

export function BtnOutlineBlue({ children, onClick, href }) {
  const cls =
    "text-xs tracking-[0.2em] uppercase border border-[#3b82f6]/50 text-[#3b82f6] px-5 py-2 hover:bg-[#3b82f6] hover:text-white transition-all duration-300 cursor-pointer font-medium";
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
