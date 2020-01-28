import React from "react"
import Layout from "../components/Layout/Layout"
import { InstagramCTA, NewsletterSignUp } from "../layouts"
import Nav from "../components/Nav/Nav"
import { Heading1, SEO } from "../utils"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Nav />
    <Heading1 style={{ textAlign: `center`, marginTop: `3rem` }}>
      Blog Page
    </Heading1>
    <NewsletterSignUp />
    <InstagramCTA />
  </Layout>
)

export default BlogPage
