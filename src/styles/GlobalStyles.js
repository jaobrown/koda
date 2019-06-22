import { createGlobalStyle } from "styled-components"
import MajestiBold from "../../public/static/fonts/Majesti-Bold.otf"
import MajestiBookItalic from "../../public/static/fonts/Majesti-BookItalic.otf"
import MajestiHeavy from "../../public/static/fonts/Majesti-Heavy.otf"
import MajestiLightItalic from "../../public/static/fonts/Majesti-LightItalic.otf"
import SoinSansMedium from "../../public/static/fonts/SoinSansNeue-Medium.otf"
import SoinSansRoman from "../../public/static/fonts/SoinSansNeue-Roman.otf"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: "Majesti";
    src: url('${MajestiHeavy}') format("opentype");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "Majesti";
    src: url('${MajestiBold}') format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Majesti";
    src: url('${MajestiBookItalic}') format("opentype");
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: "Majesti";
    src: url('${MajestiLightItalic}') format("opentype");
    font-weight: lighter;
    font-style: italic;
  }
  @font-face {
    font-family: "Soin Sans";
    src: url('${SoinSansRoman}') format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Soin Sans";
    src: url('${SoinSansMedium}') format("opentype");
    font-weight: bold;
    font-style: normal;
  }
`
// global color variables

export const colors = {
  darkgray: "#3A3A3A",
  alexwhite: "#fff",
  red: "#7C3A2B",
  orange: "#B26C29",
  teal: "#1D5562",
  blue: "#263752",
  lightgreen: "#E7E6D7",
  darkgreen: "#969A8A",
  tan: "#C0B8AD",
  lighttan: "#E0D5BD",
  coral: "#D6AF8F",
}
