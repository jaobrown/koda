import React from "react"
// import { window } from "browser-monads"
// import logo from "../../images/logo.png"
import {Heading2} from '../../styles/Typography';
import { NavLink, NavBar } from './NavStyles';

const Nav = () => (
  <NavBar>
    {/* <NavLink
      className={
        window.location.href.indexOf("about") > 0
          ? "nav__item--link active"
          : "nav__item--link"
      }
      to="/about"
    >
      about
      </NavLink>
    <NavLink
      className={
        window.location.href.indexOf("work") > 0 ||
          window.location.href.indexOf("category") > 0
          ? "nav__item--link active"
          : "nav__item--link"
      }
      to="/work"
    >
      work
      </NavLink>
    <NavLink
      className={
        window.location.href.indexOf("services") > 0
          ? "nav__item--link active"
          : "nav__item--link"
      }
      to="/services"
    >
      services
      </NavLink> */}
    <NavLink
      className="nav__item-center"
      to="/"
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}
    >
      <Heading2 style={{marginBottom: '-8px', textTransform: 'capitalize', fontSize: '4rem'}}>Koda</Heading2>
      <span style={{fontSize: '11px'}}>a creative studio</span>
    </NavLink>
    {/* <NavLink
      className={
        window.location.href.indexOf("blog") > 0 ||
          window.location.href.indexOf("category") > 0
          ? "nav__item--link active"
          : "nav__item--link"
      }
      to="/blog"
    >
      blog
      </NavLink>
    <NavLink
      className={
        window.location.href.indexOf("shop") > 0
          ? "nav__item--link active"
          : "nav__item--link"
      }
      to="/shop"
    >
      shop
      </NavLink>
    <NavLink
      className={
        window.location.href.indexOf("contact") > 0
          ? "nav__item--link active"
          : "nav__item--link"
      }
      to="/contact"
    >
      contact
      </NavLink> */}
  </NavBar>
)

export default Nav
 