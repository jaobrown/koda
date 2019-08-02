import React from "react"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import SEO from '../utils/Seo'
import {Heading1} from '../styles/Typography'

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <Nav />
    <Heading1>Work</Heading1>
  </Layout>
)

export default WorkPage
