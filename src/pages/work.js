import React from "react"

import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { SEO, Heading1 } from '../utils'

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <Nav />
    <Heading1 style={{ textAlign: `center`, marginTop: `3rem` }}>Work Page</Heading1>
  </Layout>
)

export default WorkPage
