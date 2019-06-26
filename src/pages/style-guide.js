import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../utils/Seo"
import {StyleGuideWrapper} from "../styles/StyleGuideStyles"

const StyleGuidePage = () => (
  <Layout>
    <SEO title="Style Guide" />
    <StyleGuideWrapper>
      <h1>1. Heading One</h1>
      <h2>2. Heading Two</h2>
      <h3>3. Heading Three</h3>
      <h4>4. Heading Four</h4>
      <h5>5. Heading Five</h5>
      <h6>6. Heading Six</h6>
      <p>
        P – Body Copy <br /> Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Explicabo pariatur possimus, ad deleniti laboriosam neque labore
        cum voluptates adipisci dolorum minus, accusamus dolorem odit asperiores
        natus maiores? Labore, illum! Magni iusto molestias et est, id officia
        soluta neque distinctio consequuntur!
      </p>
      <br />
      <hr />
      <br />
    </StyleGuideWrapper>
  </Layout>
)

export default StyleGuidePage
