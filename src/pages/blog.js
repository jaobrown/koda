import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { SEO, below, Heading2, Text } from "../utils"
import { Pill } from "../components/Styled/index-styles"

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5%;
  grid-row-gap: 5%;
  padding: 5rem 10rem;

  ${below.md`
    grid-template-columns: repeat(2, 1fr);
    padding: 5rem 8rem;
  `}

  ${below.sm`
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 2%;
    padding: 5rem 4rem;
  `}
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
`

const BlogPost = styled.article`
  ${below.sm`
    &:last-of-type {
      margin-bottom: 6rem;
    }
  `}
`

const BlogPostImg = styled(Img)`
  margin-bottom: .5rem;
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
  }

  ${BlogPostDescriptionMeta} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .35rem;

    ${BlogPostDescriptionDate} {
      font-size: .95rem;
      margin-bottom: 0;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  ul {
    list-style: none;
    display: flex;
    li {
      font-size: 1rem;
      font-weight: lighter;
      font-family: "Majesti", "serif";
    }
  }
`

const CtaSection = styled.section`
  display: grid;
  place-items: center;
  padding: 5rem;

  ${below.sm`
    padding: 3rem 2rem 5rem 2rem;
  `}

  h2 {
    ${below.sm`
      margin-left: auto;
      margin-right: auto;
      font-size: 2rem;
    `}
  }
`

const BlogPage = ({ data }) => {
  const blogPosts = { ...data.allMdx }

  return (
    <Layout>
      <SEO title="Blog" />
      <Nav />
      <Grid>
        {blogPosts.edges.map((post, key) => (
          <StyledLink
            key={key}
            to={`/blog/${post.node.frontmatter.categories.split(", ")[0]}/${
              post.node.frontmatter.slug
            }`}
          >
            <BlogPost key={key}>
              <BlogPostImg
                fluid={
                  post.node.frontmatter.featuredImage.childImageSharp.fluid
                }
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
                <Text fontSize="1.1rem" fontWeight="lighter" mb=".5rem" lineHeight="1.5rem">
                  {post.node.excerpt}
                </Text>
              </BlogPostDescription>
            </BlogPost>
          </StyledLink>
        ))}
      </Grid>
      <CtaSection>
        <Heading2 mb="2rem">Like what you&nbsp;see?</Heading2>
        <Pill to="services">view our services</Pill>
      </CtaSection>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
      edges {
        node {
          frontmatter {
            categories
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
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
