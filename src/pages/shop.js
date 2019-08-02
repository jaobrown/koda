import React from "react"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import SEO from '../utils/Seo'
import {Heading1} from '../styles/Typography'

const ShopPage = () => (
  <Layout>
    <SEO title="Shop" />
    <Nav />
    <Heading1>Shop</Heading1>
  </Layout>
)

export default ShopPage
