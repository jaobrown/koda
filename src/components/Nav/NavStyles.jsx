import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"
import { Link } from "gatsby"
import { colors, below, Heading3 } from "../../utils"

const NAVLINK_MODIFIERS = {
  animated: () => `
    &::after {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 50%;
      width: 0;
      height: 2px;
      background: ${colors.red};
      transition: 0.2s ease-in;
    }

    &:hover {
      opacity: 75%;

      &::after {
        width: 50%;
        transform: translateX(-50%);
      }
    }
  `,
  withImage: () => `
        display: flex;
        align-items: center;
        justify-content: flex-start;
    `,
}

export const NavBar = styled.nav`
  max-width: 100vw;
  height: 130px;
  padding: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7f7f7;

  ${below.md`
      padding: 0 2rem;
    `}
`

export const NavLink = styled(Link)`
  position: relative;
  font-family: "Soin Sans", "serif";
  font-size: 12px;
  font-weight: normal;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.darkgray};
  cursor: pointer;
  transition: 0.2s ease-in;

  ${applyStyleModifiers(NAVLINK_MODIFIERS)}
`

export const NavLogoText = styled(Heading3)``
export const NavLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${NavLogoText} {
    margin-bottom: -5px;

    ${below.sm`
        font-size: 150%;
      `}
    ${below.xs`
        font-size: 120%;
        margin-left: -15px;
      `}
  }
`

export const NavLinkContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${below.md`
        display: none;
    `}
`