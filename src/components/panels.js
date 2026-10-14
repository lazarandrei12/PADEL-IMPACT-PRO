import courtCage from "../assets/screenshots/01-iconic-locations.png?responsive";
import newCourt from "../assets/panels/screenshots.png?responsive";
import rallyDark from "../assets/panels/trailer.png?responsive";
import steam2 from "../assets/panels/play-now.png?responsive";
import Friends from "./Friends";
import Gallery from "./Gallery";
import Media from "./Media";
import PlayNow from "./PlayNow";

// tint (optional): extra black overlay (0-1) to darken a bright image
// height / top: closed size and offset on desktop
export const PANELS = [
  { label: "The Game",    image: courtCage,  position: "42% 50%", height: 720, top: 40,  Body: Friends },
  { label: "Screenshots", image: newCourt,   position: "80% 50%", height: 520, top: 160, Body: Gallery },
  { label: "Trailer",     image: rallyDark,  position: "18% 50%", height: 620, top: 110, Body: Media },
  { label: "Play now",    image: steam2,     position: "45% 50%", height: 680, top: 60,  Body: PlayNow },
];
