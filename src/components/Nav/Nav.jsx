import React from "react"
import { window } from "browser-monads"
import logo from "../../images/logo.png"
import {NavLink} from './NavStyles';

const Nav = () => (
  <nav>
    <div className="nav__items">
      <NavLink
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
        to="/portfolio"
      >
        portfolio
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
      </NavLink>
      <NavLink
        className="nav__item-center"
        to="/"
      >
        <img
          src={logo}
          alt="travel blog logo"
          // come back and fix this
          style={{ width: "200px" }}
          className="nav__item--logo"
        />
      </NavLink>
      <NavLink
        className={
          window.location.href.indexOf("process") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/process"
      >
        process
      </NavLink>
      <NavLink
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
          window.location.href.indexOf("contact") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/contact"
      >
        contact
      </NavLink>
    </div>
  </nav>
)

export default Nav
