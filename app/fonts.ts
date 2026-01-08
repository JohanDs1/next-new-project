import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const narutoFont = localFont({
  src: "styles/fonts/njnaruto.79da4c10d6e786e5.ttf",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--montserrat'
});
