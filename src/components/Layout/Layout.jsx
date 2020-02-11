import React, {useState} from "react"
import { GlobalStyle } from "../../utils"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Footer } from "../../layouts"
import {MobileNavigation, Toggler} from "../MobileNavigation"

const Layout = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false)
  return (
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
          <Toggler clickEvent={() => setIsToggled(!isToggled)} />
          {isToggled && <MobileNavigation />}
          <main>{children}</main>
          <Footer />
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
