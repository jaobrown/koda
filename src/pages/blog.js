import React from "react"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import SEO from '../utils/Seo'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Nav />
    <h1>Blog</h1>
  </Layout>
)

export default BlogPage
