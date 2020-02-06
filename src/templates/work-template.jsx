import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const WorkTemplate = ({ data: { mdx } }) => {
  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  )
}

export default WorkTemplate

export const workQuery = graphql`
  query WorkTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`