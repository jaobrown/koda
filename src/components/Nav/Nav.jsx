import React from "react"
// import { window } from "browser-monads"
// import logo from "../../images/logo.png"
import { Heading2 } from '../../utils';
import { NavLink, NavBar, NavLinkContainer } from './NavStyles';

const Nav = () => (
  <NavBar>
    <NavLinkContainer>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/work">work</NavLink>
      <NavLink to="/services">services</NavLink>
    </NavLinkContainer>
    <NavLink
      className="nav__item-center"
      to="/"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
    >
      <Heading2 style={{ marginBottom: '-8px', textTransform: 'capitalize', fontSize: '4rem' }}>Koda</Heading2>
      <span style={{ fontSize: '11px' }}>creative studio</span>
    </NavLink>
    <NavLinkContainer>
      <NavLink to="/blog">blog</NavLink>
      <NavLink modifiers="pill" to="/contact">contact</NavLink>
    </NavLinkContainer>
  </NavBar>
)

export default Nav
