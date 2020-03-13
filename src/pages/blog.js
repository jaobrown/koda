import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { SEO, below, Heading2, Text } from "../utils"
import { NewsletterSignUp } from "../layouts"

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5%;
  grid-row-gap: 5%;
  padding: 5rem 10vw 7rem 10vw;

  ${below.md`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${below.sm`
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 2%;
  `}
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
`

const BlogPost = styled.article`
  ${below.sm`
    &:last-of-type {
      margin-bottom: 2rem;
    }
  `}

  &:hover {
    h2 {
      border-top: 3px solid #7c2f27;
      padding-top: calc(1rem - 2px);
    }
  }
`

const BlogPostImg = styled(Img)`
  margin-bottom: 0.5rem;
  height: auto;
  width: 100%;
`

// just define it so we can call in SC
const StyledHeading2 = styled(Heading2)``
const BlogPostDescriptionMeta = styled.div``
const BlogPostDescriptionDate = styled(Text)``
const BlogPostDescription = styled.div`
  ${StyledHeading2} {
    font-weight: bold;
    font-size: 1.618rem;
    margin-bottom: 0.6rem;
    border-top: 1px solid black;
    padding-top: 1rem;
    transition: .2s ease all;
  }

  ${BlogPostDescriptionMeta} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.35rem;

    ${BlogPostDescriptionDate} {
      font-size: 0.95rem;
      margin-bottom: 0;
      text-transform: uppercase;
      letter-spacing: 1px;
      ${below.lg`
        font-size: .85rem;
      `}

      ${below.md`
        font-size: .9rem;
      `}

      ${below.smish`
        font-size: .85rem;
      `}

      ${below.sm`
        font-size: .95rem;
      `}
    }
  }

  ul {
    list-style: none;
    display: flex;
    li {
      font-size: 1rem;
      font-weight: lighter;
      font-family: "Majesti", "serif";

      ${below.lg`
        font-size: .9rem;
      `}

      ${below.md`
        font-size: 1rem;
      `}

      ${below.smish`
        font-size: .9rem;
      `}

      ${below.sm`
        font-size: 1rem;
      `}
    }
  }
`

const BlogPage = ({ data }) => {
  const blogPosts = { ...data.allMdx }

  return (
    <Layout>
      <SEO title="Blog" image="kodastudio.jpg" />
      <Nav />
      <Grid>
        {blogPosts.edges.map((post, key) => {
          const category = post.node.frontmatter.categories.split(", ")[0]
          const categoryAndSlug = `${category.split(" ").join("-")}/${
            post.node.frontmatter.slug
          }`
          return (
            <StyledLink
              key={key}
              to={`/blog/${categoryAndSlug}/`}
            >
              <BlogPost key={key}>
                <BlogPostImg
                  fluid={post.node.frontmatter.thumbnail.childImageSharp.fluid}
                />
                <BlogPostDescription>
                  <BlogPostDescriptionMeta>
                    <BlogPostDescriptionDate>
                      {post.node.frontmatter.date}
                    </BlogPostDescriptionDate>
                    <ul>
                      {post.node.frontmatter.categories
                        .split(", ")
                        .map((category, key) => {
                          const categoryCount = post.node.frontmatter.categories.split(
                            ", "
                          ).length

                          return (
                            <li key={key}>
                              <em>
                                {key < categoryCount - 1
                                  ? `${category},`
                                  : category}
                                &ensp;
                              </em>
                            </li>
                          )
                        })}
                    </ul>
                  </BlogPostDescriptionMeta>
                  <StyledHeading2>{post.node.frontmatter.title}</StyledHeading2>
                  <Text
                    fontSize="1.1rem"
                    fontWeight="lighter"
                    mb=".5rem"
                    lineHeight="1.5rem"
                  >
                    {post.node.excerpt}
                  </Text>
                </BlogPostDescription>
              </BlogPost>
            </StyledLink>
          )
        })}
      </Grid>
      <NewsletterSignUp
        heading="Get Updates"
        subheading="On newsletters, freebies, and fun."
      />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            categories
            date(formatString: "MMM DD, YYYY")
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            slug
            title
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`
