// todo: fixed width hero

import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { InstagramCTA, NewsletterSignUp } from "../layouts"
import { SEO, below, Text, Heading2 } from "../utils"
import * as DesignSystem from "../utils/BlogDesignSystem"
import { BackButton } from "../components/BackButton/BackButton"

const PostWrapper = styled.section`
  margin: 0 auto;
  max-width: 1375px;
  padding: 3rem 10rem 5rem 10rem;

  ${below.lg`
    padding: 5rem 3rem;
  `}

  ${below.sm`
    padding: 5rem 0rem;
  `}
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

const ContentMain = styled.div``
const ContentMeta = styled.div``
const Content = styled.section`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;

  ${below.smish`
    padding: 1rem 0;
    grid-template-columns: 1fr;
  `}

  ${below.sm`
      padding: 2rem 16px;
      grid-column-gap: 10px;
  `}

  ${ContentMain} {
    grid-column: 1 / span 3;

    ${below.smish`
      grid-column: -1 / 1;
    `}
  }

  ${ContentMeta} {
    grid-column: span 1 / -1;
    padding-top: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${below.smish`
      grid-column: -1 / 1;
      order: -1;
      margin-bottom: 2rem;
      align-items: flex-start;
    `}
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    transform: translateX(10px);

    ${below.smish`
      justify-content: flex-start;
      transform: none;
    `}
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
          h1: DesignSystem.Head1,
          h2: DesignSystem.Head2,
          h3: DesignSystem.Head3,
          h4: DesignSystem.Head4,
          h5: DesignSystem.Head5,
          h6: DesignSystem.Head6,
          p:  DesignSystem.Body,
        }}
      >
        <PostWrapper>
        <BackButton to="/work/">back</BackButton>
          <HeroImage
            fluid={mdx.frontmatter.bannerImage.childImageSharp.fluid}
          />
          <Content>
            <ContentMain>
              <Heading2>
                {mdx.frontmatter.title}
              </Heading2>
              <DesignSystem.Body>
                {mdx.frontmatter.description}
              </DesignSystem.Body>
            </ContentMain>
            <ContentMeta>
              {mdx.frontmatter.categories.split(", ").length > 1 ? (
                <Text
                  fontSize="1.3rem"
                  mb="0rem"
                  fontWeight="normal"
                  style={{ letterSpacing: `1px` }}
                >
                  CATEGORIES
                </Text>
              ) : (
                <Text
                  fontSize="1.3rem"
                  mb="0rem"
                  fontWeight="normal"
                  style={{ letterSpacing: `1px` }}
                >
                  CATEGORY
                </Text>
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
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
