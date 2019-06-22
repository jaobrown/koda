import React from "react"
import { Link } from "gatsby"
import { window } from "browser-monads"
import logo from "../../images/logo.png"
// import "./nav.css"

const Nav = () => (
  <nav>
    <div className="nav__items">
      <a className="nav__item--left" href="/">
        <img src={logo} alt="travel blog logo" className="nav__item--logo" />
      </a>
      <Link
        className={
          window.location.href.indexOf("about") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/about"
      >
        about
      </Link>
      <Link
        className={
          window.location.href.indexOf("work") > 0 ||
          window.location.href.indexOf("category") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/portfolio"
      >
        portfolio
      </Link>
      <Link
        className={
          window.location.href.indexOf("services") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/services"
      >
        services
      </Link>
      <Link
        className={
          window.location.href.indexOf("process") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/process"
      >
        process
      </Link>
      <Link
        className={
          window.location.href.indexOf("blog") > 0 ||
          window.location.href.indexOf("category") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/blog"
      >
        blog
      </Link>
      <Link
        className={
          window.location.href.indexOf("contact") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/contact"
      >
        contact
      </Link>
    </div>
  </nav>
)

export default Nav
