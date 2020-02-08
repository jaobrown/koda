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
import { BackButton } from "../components/BackButton/BackButton"

const PostWrapper = styled.section`
  margin: 0 auto;
  max-width: 1375px;
  padding: 5rem 10rem;

  ${below.lg`
    padding: 5rem 3rem;
  `}

  ${below.sm`
    padding: 5rem 0rem;
  `}
`

const HeroImage = styled(Img)`
  width: 100%;
  height: 720px;
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

const ContentMain = styled.div``
const ContentMeta = styled.div``
const Content = styled.section`
  padding: 2.65rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;

  ${ContentMain} {
    grid-column: 1 / span 3;
  }

  ${ContentMeta} {
    grid-column: span 1 / -1;
    padding-top: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    li {
      font-size: 1.25rem;
      font-weight: lighter;
      font-family: "Majesti", "serif";
    }
  }
`

const WorkTemplate = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Nav />
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          h1: props => (
            <DesignSystem.Heading1
              fontSize="3rem"
              mb="2rem"
              lineHeight="1.85rem"
              {...props}
            />
          ),
          h2: DesignSystem.Heading2,
          h3: DesignSystem.Heading3,
          p: props => (
            <DesignSystem.Text fontSize="1.3rem" mb="2rem" {...props} />
          ),
        }}
      >
        <PostWrapper>
          <HeroImage
            fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
          />
          <Content>
            <ContentMain>
              <DesignSystem.Heading2 fontSize="2.5rem" mb="2.5rem">
                {mdx.frontmatter.title}
              </DesignSystem.Heading2>
              <DesignSystem.Text fontSize="1.3rem" lineHeight="2rem">
                {mdx.frontmatter.description}
              </DesignSystem.Text>
            </ContentMain>
            <ContentMeta>
              {mdx.frontmatter.categories.split(", ").length > 1 ? (
                <DesignSystem.Text
                  fontSize="1.3rem"
                  mb="0rem"
                  fontWeight="normal"
                  style={{ letterSpacing: `1px` }}
                >
                  CATEGORIES
                </DesignSystem.Text>
              ) : (
                <DesignSystem.Text
                  fontSize="1.3rem"
                  mb="0rem"
                  fontWeight="normal"
                  style={{ letterSpacing: `1px` }}
                >
                  CATEGORY
                </DesignSystem.Text>
              )}
              <ul>
                {mdx.frontmatter.categories.split(", ").map((category, key) => {
                  const categoryCount = mdx.frontmatter.categories.split(", ")
                    .length

                  return (
                    <li key={key}>
                      <em>
                        {key < categoryCount - 1 ? `${category},` : category}
                        &ensp;
                      </em>
                    </li>
                  )
                })}
              </ul>
            </ContentMeta>
          </Content>
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <BackButton to="/work/">Back to List</BackButton>
        </PostWrapper>
      </MDXProvider>
      <NewsletterSignUp />
      <InstagramCTA />
    </Layout>
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
        description
        categories
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
