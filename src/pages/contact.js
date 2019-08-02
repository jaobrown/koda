import React from "react"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import SEO from '../utils/Seo'
import {Heading1} from '../styles/Typography'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Nav />
    <Heading1>Contact</Heading1>
  </Layout>
)

export default ContactPage
