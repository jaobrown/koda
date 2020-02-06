import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { InstagramCTA, NewsletterSignUp } from "../layouts"
import { SEO, below } from "../utils"
import * as DesignSystem from "../utils/Typography"

const PostWrapper = styled.section`
  margin: 0 auto;
  max-width: 1375px;
  padding: 5rem 10rem;

  h2 {
    font-size: 3.4rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  h3 {
    text-align: center;
    margin-bottom: 4rem;
  }

  ${below.md`
    padding: 5rem 3rem;
  `}

  ${below.sm`
    padding: 5rem 0rem;
  `}
`

const HeroImage = styled(Img)`
  width: 100%;
  height: 480px;
  margin: 0 auto 3rem auto;
`

const Content = styled.article`
  padding: 0 60px;
`

const BlogPostTemplate = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Nav />
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          h1: DesignSystem.Heading1,
          h2: DesignSystem.Heading2,
          h3: DesignSystem.Heading3,
          p: DesignSystem.Text,
        }}
      >
        <PostWrapper>
          <HeroImage
            fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
          />
          <DesignSystem.Heading2>{mdx.frontmatter.title}</DesignSystem.Heading2>
          <DesignSystem.Heading3>{mdx.frontmatter.date}</DesignSystem.Heading3>
          <Content>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Content>
        </PostWrapper>
      </MDXProvider>
      <NewsletterSignUp />
      <InstagramCTA />
    </Layout>
  )
}

export default BlogPostTemplate

export const postQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1260) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
