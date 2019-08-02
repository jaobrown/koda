import React from "react"

import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import SEO from '../utils/Seo'
import {Heading1} from '../styles/Typography'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Nav />
    <Heading1>404</Heading1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
