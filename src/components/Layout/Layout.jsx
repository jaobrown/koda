import React from "react"
import { GlobalStyle } from '../../utils'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Footer, InstagramCTA, NewsletterSignUp } from '../../layouts'
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
        <GlobalStyle />
        <main>{children}</main>
        <InstagramCTA />
        <NewsletterSignUp />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
