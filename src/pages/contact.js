import React from "react"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { SEO } from '../utils'
import { ContactLayout, InstagramCTA, NewsletterSignUp, Footer } from '../layouts'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Nav />
    <ContactLayout />
    <InstagramCTA />
    <NewsletterSignUp />
    <Footer />
  </Layout>
)

export default ContactPage
