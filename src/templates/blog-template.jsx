// todo: fixed width hero

import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"
import { SEO, below, Heading3, Heading2} from "../utils"
import * as DesignSystem from "../utils/BlogDesignSystem"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { BackButton } from "../components/BackButton/BackButton"
import { InstagramCTA } from "../layouts"

const PostWrapper = styled.section`
  margin: 0 auto;
  max-width: 1375px;
  padding: 3rem 10rem 5rem 10rem;

  h2 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  ${below.lg`
    padding: 5rem 3rem;
  `}

  ${below.sm`
    padding: 5rem 0rem;
  `}

  hr {
    width: 10%;
    margin: 0 auto 40px auto;
  }
`

const HeroImage = styled(Img)`
  width: 100%;
  height: auto;
  margin: 0 auto 3rem auto;

  /* ${below.lg`
    height: 420px;
  `}

  ${below.md`
    height: 380px;
  `}

  ${below.sm`
    height: 250px;
  `} */
`

const Content = styled.article`
  padding: 0 60px;
  max-width: 800px;
  margin: 0 auto;

  ${below.md`
    padding: 0 16px;
  `}
`

const BlogPostTemplate = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} image={mdx.frontmatter.thumbnail.childImageSharp.fixed} description={mdx.frontmatter.excerpt}/>
      <Nav />
      <MDXProvider
        components={{
          h1: DesignSystem.Head1,
          h2: DesignSystem.Head2,
          h3: DesignSystem.Head3,
          h4: DesignSystem.Head4,
          h5: DesignSystem.Head5,
          h6: DesignSystem.Head6,
          p: DesignSystem.Body,
          ol: DesignSystem.Ordered,
          ul: DesignSystem.Unordered,
          li: DesignSystem.LineItem,
          blockquote: DesignSystem.BlockQuote,
          a: DesignSystem.KodaLink,
        }}
      >
        <PostWrapper>
        <BackButton to="/blog/">back</BackButton>
          <HeroImage
            fluid={mdx.frontmatter.bannerImage.childImageSharp.fluid}
          />
          <Heading2>{mdx.frontmatter.title}</Heading2>
          <Heading3>{mdx.frontmatter.date}</Heading3>
          <hr/>
          <Content>
            <MDXRenderer>{mdx.body}</MDXRenderer>
            <BackButton to="/blog/">back to blog list</BackButton>
          </Content>
        </PostWrapper>
      </MDXProvider>
      <InstagramCTA />
    </Layout>
  )
}

export default BlogPostTemplate

export const postQuery = graphql`
  query BlogPostTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt(pruneLength: 120)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        thumbnail {
          childImageSharp {
            fixed(width: 900) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
