import logo from "../assets/padel-impact-pro-logo.png";
import { BtnLime, STEAM_URL } from "./Primitives";

export default function Nav({ onClose }) {
  return (
    <header className="reveal h-20 flex-none flex items-center justify-between gap-5 px-7">
      <button
        type="button"
        onClick={onClose}
        aria-label="Padel Impact Pro — back to overview"
        className="h-[52px]"
      >
        <img src={logo} alt="Padel Impact Pro" className="h-full w-auto" />
      </button>

      <BtnLime href={STEAM_URL} className="text-[15px] font-medium uppercase tracking-[0.08em] px-6 py-2.5">
        Wishlist
      </BtnLime>
    </header>
  );
}
