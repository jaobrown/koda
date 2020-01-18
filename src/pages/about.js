import React from "react"
import Layout from "../components/Layout/Layout"
import { InstagramCTA, NewsletterSignUp } from '../layouts'
import Nav from "../components/Nav/Nav"
import { Heading1, SEO } from '../utils'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Nav />
    <Heading1>About</Heading1>
    <NewsletterSignUp />
    <InstagramCTA />
  </Layout>
)

export default AboutPage
