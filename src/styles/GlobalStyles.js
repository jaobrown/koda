import { createGlobalStyle } from "styled-components"
import MajestiBold from '../../public/static/fonts/Majesti-Bold.otf'
import MajestiBookItalic from '../../public/static/fonts/Majesti-BookItalic.otf'
import MajestiHeavy from '../../public/static/fonts/Majesti-Heavy.otf'
import MajestiLightItalic from '../../public/static/fonts/Majesti-LightItalic.otf'
import SoinSansMedium from '../../public/static/fonts/SoinSansNeue-Medium.otf'
import SoinSansRoman from '../../public/static/fonts/SoinSansNeue-Roman.otf'

export const GlobalStyle = createGlobalStyle`
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
export const darkgray = "#3A3A3A"
export const alexwhite = "#fff"
export const red = "#7C3A2B"
export const orange = "#B26C29"
export const teal = "#1D5562"
export const blue = "#263752"
export const lightgreen = "#E7E6D7"
export const darkgreen = "#969A8A"
export const tan = "#C0B8AD"
export const lighttan = "#E0D5BD"
export const coral = "#D6AF8F"
