import React from "react"

import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import SEO from "../utils/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <h1>Index Page</h1>
  </Layout>
)

export default IndexPage
