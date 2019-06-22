import React from "react"
import {GlobalStyle} from '../../styles/GlobalStyles'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <GlobalStyle/>
        <main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
