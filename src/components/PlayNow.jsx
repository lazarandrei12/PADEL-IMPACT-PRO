import { BtnLime, PanelText, STEAM_URL } from "./Primitives";

// Body of the "Play now" panel
export default function PlayNow() {
  return (
    <>
      <PanelText className="mb-1.5 font-semibold tracking-[0.18em] uppercase text-[#D2FF42]">
        Coming soon
      </PanelText>
      <PanelText className="max-w-[560px] mb-7">
        Wishlist on Steam to be notified when the courts open.
      </PanelText>
      <div className="flex flex-wrap gap-3">
        <BtnLime href={STEAM_URL} className="text-base font-semibold px-[30px] py-3.5">
          Wishlist
        </BtnLime>
      </div>
    </>
  );
}
