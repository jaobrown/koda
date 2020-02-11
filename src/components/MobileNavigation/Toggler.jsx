import React from "react"
import styled from "styled-components"
import { below, above } from "../../utils"

const HamburgerColor = `#3a3a3a`
const HamburgerHeight = `35px`
const HamburgerWidth = `45px`
const HamburgerIconStrokeWidth = `2.5px`

const MobileNavigationToggler = styled.button`
  position: absolute;
  top: 46px;
  right: 40px;
  z-index: 999;
  background: transparent;
  border: none;
  height: ${HamburgerHeight};
  width: ${HamburgerWidth};
  cursor: pointer;
  transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);

  ${above.md`
    display: none;
    opacity: 0;
    visibility:hidden;
  `}

  ${below.xs`
    right: 20px;
    width: 40px;  
  `}

  span {
    position: absolute;
    display: inline-block;
    z-index: 99999;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 100%;
    height: ${HamburgerIconStrokeWidth};
    background: ${HamburgerColor};
    border-radius: 100px;

    &::before,
    &::after {
      content: "";
      z-index: 99990;
      position: absolute;
      top: 10px;
      left: 0;
      height: ${HamburgerIconStrokeWidth};
      width: 100%;
      background: ${HamburgerColor};
      border-radius: 100px;
    }

    &::after {
      top: -10px;
    }
  }
`

export const Toggler = ({ clickEvent }) => {
  return (
    <MobileNavigationToggler onClick={clickEvent}>
      <span></span>
    </MobileNavigationToggler>
  )
}
