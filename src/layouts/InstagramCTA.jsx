import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Section } from '../elements'
import { Heading2, below } from '../utils'
import { AnchorPill } from '../components/Styled/index-styles'

const fakeFeed = [
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
]

const InstagramFeed = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-bottom: 3rem;

    ${below.md`
      grid-template-columns: repeat(4, 1fr);
      div:nth-child(5) {
        display: none;
      }
      div:nth-child(6) {
        display: none;
      }
    `}
    ${below.sm`
      grid-template-columns: repeat(3, 1fr);
      div:nth-child(4) {
        display: none;
      }
    `}
    ${below.xs`
      grid-template-columns: repeat(2, 1fr);
      div:nth-child(3) {
        display: none;
      }
    `}
`

export const InstagramCTA = () => {
  const data = useStaticQuery(
    graphql`
        query {
          gram1: file(relativePath: { eq: "gram_1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          gram2: file(relativePath: { eq: "gram_2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          gram3: file(relativePath: { eq: "gram_3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          gram4: file(relativePath: { eq: "gram_4.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          gram5: file(relativePath: { eq: "gram_5.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          gram6: file(relativePath: { eq: "gram_6.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        `
  )

  const instagramImages = [
    data.gram1.childImageSharp.fluid,
    data.gram2.childImageSharp.fluid,
    data.gram3.childImageSharp.fluid,
    data.gram4.childImageSharp.fluid,
    data.gram5.childImageSharp.fluid,
    data.gram6.childImageSharp.fluid
  ]

  return (
    <Section padding="0 0 3rem 0">
      <InstagramFeed>
        {fakeFeed.map((id, key) => (
          <Img key={key} fluid={instagramImages[key]} />
        ))}
      </InstagramFeed>
      <Heading2 mb="1rem" fontSize="28px" textAlign="center">Follow us on Instagram</Heading2>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <AnchorPill href="https://www.instagram.com/koda.studio" target="_blank" rel="noopener noreferrer">@koda.studio</AnchorPill>
      </div>
    </Section>
  )
}