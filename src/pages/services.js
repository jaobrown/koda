import React from "react"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import {Heading1, SEO} from '../utils'

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <Nav />
    <Heading1>Services</Heading1>
  </Layout>
)

export default ServicesPage
