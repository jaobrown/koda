import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { SEO, below, Heading2 } from "../utils"
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

const WorkItem = styled.article`
  ${below.sm`
    &:last-of-type {
      margin-bottom: 6rem;
    }
  `}
`

const WorkItemImg = styled(Img)`
  margin-bottom: 2rem;
`

const WorkItemDescription = styled.div`
  h3 {
    font-size: 1.3rem;
    font-family: "Soin Sans", "sans serif";
    text-transform: uppercase;
    font-weight: lighter;
    margin-bottom: 0.5rem;
    border-top: 2px solid black;
    padding-top: 1rem;
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

const WorkPage = ({ data }) => {
  const workItems = { ...data.allMdx }
  return (
    <Layout>
      <SEO title="Work" />
      <Nav />
      <Grid>
        {workItems.edges.map((work, key) => (
          <StyledLink
            key={key}
            to={`/work/${work.node.frontmatter.categories.split(", ")[0]}/${
              work.node.frontmatter.slug
            }`}
          >
            <WorkItem>
              <WorkItemImg
                fluid={
                  work.node.frontmatter.featuredImage.childImageSharp.fluid
                }
              />
              <WorkItemDescription>
                <h3>{work.node.frontmatter.title}</h3>
                <ul>
                  {work.node.frontmatter.categories
                    .split(", ")
                    .map((category, key) => {
                      const categoryCount = work.node.frontmatter.categories.split(
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
              </WorkItemDescription>
            </WorkItem>
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

export default WorkPage

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/content/work/" } }) {
      edges {
        node {
          frontmatter {
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            slug
            categories
          }
        }
      }
    }
  }
`
