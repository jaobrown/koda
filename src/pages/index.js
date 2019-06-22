import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/Nav/Nav"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <h1>Index Page</h1>
  </Layout>
)

export default IndexPage
