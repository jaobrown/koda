import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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

const WorkItem = styled.article`
  ${below.sm`
    &:last-of-type {
      margin-bottom: 6rem;
    }
  `}
`

const WorkItemImg = styled(Img)`
  margin-bottom: 2rem;
  height: auto;
  width: 100%;
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

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderOne: file(relativePath: { eq: "gram_1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholderTwo: file(relativePath: { eq: "gram_4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholderThree: file(relativePath: { eq: "gram_5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const WORK_ITEMS = [
    {
      title: "Blog Post Title",
      categories: ["Brand"],
      coverPhoto: data.placeholderOne.childImageSharp.fluid,
    },
    {
      title: "Blog Post Title",
      categories: ["Social"],
      coverPhoto: data.placeholderTwo.childImageSharp.fluid,
    },
    {
      title: "Blog Post Title",
      categories: ["Web"],
      coverPhoto: data.placeholderThree.childImageSharp.fluid,
    },
  ]

  return (
    <Layout>
      <SEO title="Work" />
      <Nav />
      <Grid>
        {WORK_ITEMS.map((work, key) => (
          <WorkItem key={key}>
            <WorkItemImg fluid={work.coverPhoto} />
            <WorkItemDescription>
              <h3>{work.title}</h3>
              <ul>
                {work.categories.map((category, key) => {
                  const categoryCount = work.categories.length

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
            </WorkItemDescription>
          </WorkItem>
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
