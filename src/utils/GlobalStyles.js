import { createGlobalStyle } from "styled-components"
import MajestiBold from "../assets/fonts/Majesti-Bold.otf"
import MajestiBookItalic from "../assets/fonts/Majesti-BookItalic.otf"
import MajestiHeavy from "../assets/fonts/Majesti-Heavy.otf"
import MajestiLightItalic from "../assets/fonts/Majesti-LightItalic.otf"
import SoinSansMedium from "../assets/fonts/SoinSansNeue-Medium.otf"
import SoinSansRoman from "../assets/fonts/SoinSansNeue-Roman.otf"
import SoinSansBold from "../assets/fonts/SoinSansNeue-Bold.otf"
import { colors } from './Colors'

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
  * {
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
