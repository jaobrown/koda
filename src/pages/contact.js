import React from "react"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { SEO } from '../utils'
import { ContactLayout } from '../layouts'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Nav />
    <ContactLayout />
  </Layout>
)

export default ContactPage
