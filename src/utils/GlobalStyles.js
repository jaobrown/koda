import { createGlobalStyle } from "styled-components"
import MajestiBold from "../assets/fonts/Majesti-Bold.woff"
import MajestiBookItalic from "../assets/fonts/Majesti-BookItalic.woff"
import MajestiHeavy from "../assets/fonts/Majesti-Heavy.woff"
import MajestiLightItalic from "../assets/fonts/Majesti-LightItalic.woff"
import SoinSansMedium from "../assets/fonts/SoinSansNeue-Medium.woff"
import SoinSansRoman from "../assets/fonts/SoinSansNeue-Roman.woff"
import SoinSansBold from "../assets/fonts/SoinSansNeue-Bold.woff"
import { colors } from "./Colors"

export const GlobalStyle = createGlobalStyle`
  ::selection {
    color: white;
    background-color: ${colors.orange};
  } 
  body {
    margin: 0;
    padding: 0;
    font-size: 10px;
    color: ${colors.darkgray}
  }
  main {
    position: relative;
  }
  * {
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: "Majesti";
    src: url('${MajestiHeavy}') format("woff");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "Majesti";
    src: url('${MajestiBold}') format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Majesti";
    src: url('${MajestiBookItalic}') format("woff");
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: "Majesti";
    src: url('${MajestiLightItalic}') format("woff");
    font-weight: lighter;
    font-style: italic;
  }
  @font-face {
    font-family: "Soin Sans";
    src: url('${SoinSansRoman}') format("woff");
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: "Soin Sans";
    src: url('${SoinSansMedium}') format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Soin Sans";
    src: url('${SoinSansBold}') format("opentype");
    font-weight: bold;
    font-style: normal;
  }
`
