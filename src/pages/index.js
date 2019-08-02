import React from "react"

import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import SEO from "../utils/Seo"
import {Heading1} from '../styles/Typography'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Heading1>Home</Heading1>
  </Layout>
)

export default IndexPage
