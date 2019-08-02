import React from "react"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import SEO from '../utils/Seo'
import {Heading1} from '../styles/Typography'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Nav />
    <Heading1>About</Heading1>
  </Layout>
)

export default AboutPage
