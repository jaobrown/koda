import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import animateScrollTo from "animated-scroll-to"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { Section, HeroTitle } from "../elements"
import { Heading2, Text, SEO } from "../utils"
import {
  FiftyFifty,
  ThreeColumns,
  InstagramCTA,
  NewsletterSignUp,
} from "../layouts"

import {
  ButtonPill,
  ServiceTextWrapper,
  ServicesText,
  ServicesLink,
} from "../components/Styled/index-styles"

import styles from "../assets/svg/svg.module.css"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderOne: file(relativePath: { eq: "place_1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholderTwo: file(relativePath: { eq: "place_2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allMdx(
          filter: { fileAbsolutePath: { regex: "/content/work/" } }
          limit: 3
        ) {
          edges {
            node {
              frontmatter {
                slug
                categories
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const place_1 = data.placeholderOne.childImageSharp.fluid
  const place_2 = data.placeholderTwo.childImageSharp.fluid
  const place_3 = data.allMdx.edges[0].node.frontmatter.featuredImage.childImageSharp.fluid
  const place_4 = data.allMdx.edges[1].node.frontmatter.featuredImage.childImageSharp.fluid
  const place_5 = data.allMdx.edges[2].node.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Home" />
      <Nav />

      {/* //* Begin hero */}
      <Section
        backgroundColor="#F7F7F7"
        padding="12rem 1rem 9rem 1rem"
        lgPadding="10rem 6rem 9rem 6rem"
        xlPadding="10rem 18rem 9rem 18rem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 0 357.354 45.152"
          fill="#cec8c0"
          className={styles.lightLines}
        >
          <g transform="translate(-2615.609 370.543) rotate(-90)">
            <path
              d="M354.149,6.343H3.2A3.19,3.19,0,0,1,0,3.172,3.19,3.19,0,0,1,3.2,0H354.149a3.19,3.19,0,0,1,3.2,3.172A3.19,3.19,0,0,1,354.149,6.343Z"
              transform="translate(370.543 2615.609) rotate(90)"
            />
            <path
              d="M354.149,6.343H3.2A3.19,3.19,0,0,1,0,3.172,3.19,3.19,0,0,1,3.2,0H354.149a3.19,3.19,0,0,1,3.2,3.172A3.19,3.19,0,0,1,354.149,6.343Z"
              transform="translate(350.883 2615.609) rotate(90)"
            />
            <path
              d="M354.149,6.343H3.2A3.19,3.19,0,0,1,0,3.172,3.19,3.19,0,0,1,3.2,0H354.149a3.19,3.19,0,0,1,3.2,3.172A3.19,3.19,0,0,1,354.149,6.343Z"
              transform="translate(331.735 2615.609) rotate(90)"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100px"
          viewBox="0 0 167.23 167.227"
          fill="#1d5562"
          className={styles.blueCircle1}
        >
          <path
            d="M371.042,274.771a83.614,83.614,0,1,0,83.614,83.614A83.615,83.615,0,0,0,371.042,274.771Zm0,149.5a65.889,65.889,0,1,1,65.887-65.89A65.89,65.89,0,0,1,371.042,424.275Z"
            transform="translate(-287.425 -274.771)"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="200px"
          viewBox="0 0 93.748 322.397"
          fill="#b26c29"
          className={styles.orangeDrop1}
        >
          <path
            d="M839.623,387.548H563.944a46.8,46.8,0,0,1-46.718-46.875h0A46.8,46.8,0,0,1,564.1,293.955l182.087-.155a93.59,93.59,0,0,1,93.437,93.748Z"
            transform="translate(387.548 -517.226) rotate(90)"
          />
        </svg>
        <HeroTitle>Humbly helping build better&nbsp;brands</HeroTitle>
        {/* <Text style={{ textTransform: 'uppercase', textAlign: 'center', fontSize: '1.1rem', letterSpacing: '2px' }}>Full site coming soon</Text> */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <ButtonPill onClick={() => animateScrollTo(900)}>
            about koda
          </ButtonPill>
        </div>
      </Section>
      {/* //* End hero */}

      {/* //* Begin Secondary nav */}
      <Section padding="5rem 1rem" backgroundColor="#C2CBCE">
        <ServiceTextWrapper>
          <ServicesText mb="0">
            <ServicesLink to="/work">See our work</ServicesLink>
          </ServicesText>
          <ServicesText mb="0">
            <ServicesLink to="/services">View our services</ServicesLink>
          </ServicesText>
          <ServicesText mb="0">
            <ServicesLink to="/blog">Read our blog</ServicesLink>
          </ServicesText>
        </ServiceTextWrapper>
      </Section>
      {/* //* End secondary nav */}

      {/* //* Begin need help */}
      {/* // todo: 5050 section 1 */}
      <Section padding="5rem 1rem">
        <FiftyFifty>
          <FiftyFifty.Left modifiers="needHelp">
            <Heading2 fontSize="2rem">
              You need help bringing your vision to life
            </Heading2>
            <Text fontSize="1.1rem" mb="2rem" lineHeight="1.5rem">
              Whether a small business or entrepreneur, we want to give you the
              tools and deliverables you need to inspire confidence, make good
              impressions, and attract quality clients.
            </Text>
          </FiftyFifty.Left>
          <FiftyFifty.Right>
            <Img fluid={place_1} />
          </FiftyFifty.Right>
        </FiftyFifty>
      </Section>
      {/* //* End need help */}

      {/* //* Begin why brand */}
      {/* // todo: 5050 section 2 */}
      <Section padding="5rem 1rem" backgroundColor="#F7F7F7">
        <FiftyFifty>
          <FiftyFifty.Left modifiers={["needHelp", "flip"]}>
            <Heading2 fontSize="2rem">We are humble helpers</Heading2>
            <Text fontSize="1.1rem" mb="2rem" lineHeight="1.5rem">
              We are a multi-disciplinary studio and we work with any business,
              no matter how established. Through branding, creative, and web, we
              put in the work, and you can focus on what you need to so your
              vision becomes a reality.
            </Text>
            <FiftyFifty.Button to="/contact">about koda</FiftyFifty.Button>
          </FiftyFifty.Left>
          <FiftyFifty.Right modifiers="flip">
            <Img fluid={place_2} style={{ width: "80%" }} />
          </FiftyFifty.Right>
        </FiftyFifty>
      </Section>
      {/* //* End why brand */}

      {/* //* Begin Recent Work */}
      {/* // todo: recent work */}
      <Section padding="5rem 1rem">
        <Heading2 fontSize="2rem" mb="4rem" textAlign="center">
          Recent Work
        </Heading2>
        <ThreeColumns>
          <ThreeColumns.Col1>
            <Link to={`/work/${data.allMdx.edges[0].node.frontmatter.categories.split(', ')[0]}/${data.allMdx.edges[0].node.frontmatter.slug}`}>
              <Img fluid={place_3} />
            </Link>
          </ThreeColumns.Col1>
          <ThreeColumns.Col2>
            <Link to={`/work/${data.allMdx.edges[1].node.frontmatter.categories.split(', ')[0]}/${data.allMdx.edges[1].node.frontmatter.slug}`}>
              <Img fluid={place_4} />
            </Link>
          </ThreeColumns.Col2>
          <ThreeColumns.Col3>
            <Link to={`/work/${data.allMdx.edges[2].node.frontmatter.categories.split(', ')[0]}/${data.allMdx.edges[2].node.frontmatter.slug}`}>
              <Img fluid={place_5} />
            </Link>
          </ThreeColumns.Col3>
          <ThreeColumns.CTA to="/work">see full portfolio</ThreeColumns.CTA>
        </ThreeColumns>
      </Section>
      {/* //* End Recent Work */}

      <NewsletterSignUp />
      <InstagramCTA />
    </Layout>
  )
}

export default IndexPage
