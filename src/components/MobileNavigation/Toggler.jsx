import React, { useState } from "react"
import styled from "styled-components"

const HamburgerColor = `#3a3a3a`
const HamburgerHeight = `35px`
const HamburgerWidth = `45px`
const HamburgerIconStrokeWidth = `2.5px`

const MobileNavigationToggler = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 999;
  background: transparent;
  border: none;
  height: ${HamburgerHeight};
  width: ${HamburgerWidth};
  cursor: pointer;
  transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);

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

const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  pointer-events: none;
  z-index: 9;
`

export const Toggler = () => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <MobileMenu>
      <MobileNavigationToggler onClick={() => setIsToggled(!isToggled)}>
        <span></span>
      </MobileNavigationToggler>
    </MobileMenu>
  )
}
