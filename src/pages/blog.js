import React from "react"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import SEO from '../utils/Seo'
import {Heading1} from '../styles/Typography'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Nav />
    <Heading1>Blog</Heading1>
  </Layout>
)

export default BlogPage
