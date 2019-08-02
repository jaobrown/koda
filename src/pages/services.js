import React from "react"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import SEO from '../utils/Seo'
import {Heading1} from '../styles/Typography'

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <Nav />
    <Heading1>Services</Heading1>
  </Layout>
)

export default ServicesPage
