import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"
import { SEO, below } from "../utils"
import * as DesignSystem from "../utils/Typography"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { BackButton } from "../components/BackButton/BackButton"
import { InstagramCTA } from "../layouts"

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

  ${below.lg`
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

  ${below.lg`
    height: 420px;
  `}

  ${below.md`
    height: 380px;
  `}

  ${below.sm`
    height: 250px;
  `}
`

const Content = styled.article`
  padding: 0 60px;
  max-width: 1000px;
  margin: 0 auto;

  ${below.md`
    padding: 0 16px;
  `}
`

const BlogPostTemplate = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Nav />
      <MDXProvider
        components={{
          h1: DesignSystem.Heading1,
          h2: DesignSystem.Heading2,
          h3: DesignSystem.Heading3,
          p: props => (
            <DesignSystem.Text
              fontSize="1.1rem"
              mb="2rem"
              lineHeight="1.85rem"
              {...props}
            />
          ),
          ol: DesignSystem.OrderedList,
          li: DesignSystem.Text,
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
