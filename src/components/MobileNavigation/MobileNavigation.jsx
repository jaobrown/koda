import React, {useState} from 'react'
import styled from 'styled-components'

const HamburgerColor = `#3a3a3a`
const HamburgerHeight = `35px`
const HamburgerWidth = `45px`
const HamburgerIconStrokeWidth = `2.5px`

export const MobileNavigationToggler = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  height: ${HamburgerHeight};
  width: ${HamburgerWidth};
  cursor: pointer;
  transition: .2s cubic-bezier(0.455, 0.03, 0.515, 0.955);

  span {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 100%;
    height: ${HamburgerIconStrokeWidth};
    background: ${HamburgerColor};
    border-radius: 100px;

    &::before,
    &::after {
      content: '';
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
  background: orangered;
  z-index: 99;
`

const MobileNavigation = () => {
    return (
        <MobileMenu>
            <MobileNavigationToggler />
        </MobileMenu>
    )
}

export default MobileNavigation