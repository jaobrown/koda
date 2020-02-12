import React from "react"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { SEO } from "../utils"
import { InstagramCTA, NewsletterSignUp, ContactLayout } from "../layouts"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Nav />
    <ContactLayout />
    <NewsletterSignUp />
    <InstagramCTA />
  </Layout>
)

export default ContactPage
