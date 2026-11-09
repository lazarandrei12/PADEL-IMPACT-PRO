import newCourt from "../assets/HighresScreenshot00066.png";
import courtCage from "../assets/POZA1.png";
import rallyDark from "../assets/POZA6.png";
import steam2 from "../assets/HighresScreenshot00071.png";
import Friends from "./Friends";
import Gallery from "./Gallery";
import Media from "./Media";
import PlayNow from "./PlayNow";

// tint (optional): extra black overlay (0-1) to darken a bright image
// height / top: closed size and offset on desktop; narrow: closed width on mobile
export const PANELS = [
  { label: "The Game",    image: courtCage,  position: "42% 50%", height: 720, top: 40,  narrow: "100%", Body: Friends },
  { label: "Screenshots", image: newCourt,   position: "80% 50%", height: 520, top: 160, narrow: "90%",  Body: Gallery },
  { label: "Trailer",     image: rallyDark,  position: "18% 50%", height: 620, top: 110, narrow: "96%",  Body: Media },
  { label: "Play now",    image: steam2,     position: "45% 50%", height: 680, top: 60,  narrow: "84%",  Body: PlayNow },
];
