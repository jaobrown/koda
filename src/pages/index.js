import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
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

import dot_pattern from '../assets/svg/dot_pattern.svg'

import styles from "../assets/svg/svg.module.css"

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  position: relative;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.95);
    height: 100%;
    width: 100%;
    background: transparent;
    border: 3px solid #853526;
    transition: 0.2s cubic-bezier(0.19, 1, 0.22, 1) transform;
  }

  &:hover {
    &::after {
      transform: translate(-50%, -50%) scale(1.05);
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        yourVisionImage: file(relativePath: { eq: "your_vision.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        humbleHelperImage: file(relativePath: { eq: "humble_helpers.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allMdx(
          sort: { fields: frontmatter___date }
          filter: { fileAbsolutePath: { regex: "/content/work/" } }
          limit: 3
        ) {
          edges {
            node {
              frontmatter {
                slug
                categories
                thumbnail {
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

  const YourVisionImgData = data.yourVisionImage.childImageSharp.fluid
  const HumbleHelpersImgData = data.humbleHelperImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Home" />
      <Nav />

      {/* //* Begin hero */}
      <Section
        backgroundColor="#F7F7F7"
        padding="9rem 1rem 9rem 1rem"
        lgPadding="10rem 6rem 9rem 6rem"
        xlPadding="10rem 18rem 9rem 18rem"
        xxlPadding="10rem 24rem 9rem 24rem"
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
      <Section
        padding="5rem 1rem"
        backgroundColor="#C2CBCE"
        xxlPadding="5rem 15rem"
      >
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
      <Section padding="5rem 1rem" xxlPadding="5rem 10rem">
        <svg
          className={styles.shape1}
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 240.235 240.231"
          fill="#263752"
        >
          <path
            d="M407.545,274.771A120.115,120.115,0,1,0,527.66,394.887,120.117,120.117,0,0,0,407.545,274.771Zm0,214.77A94.653,94.653,0,1,1,502.2,394.887,94.654,94.654,0,0,1,407.545,489.541Z"
            transform="translate(-287.425 -274.771)"
          />
        </svg>
        <FiftyFifty>
          <FiftyFifty.Left modifiers="needHelp">
            <Heading2 fontSize="2rem" maxWidth="400px" mb="2rem">
              You need help bringing your vision to life
            </Heading2>
            <Text
              fontSize="1.1rem"
              mb="2rem"
              lineHeight="1.5rem"
              maxWidth="400px"
            >
              Whether a small business or entrepreneur, we want to give you the
              tools and deliverables you need to inspire confidence, make good
              impressions, and attract quality clients.
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="188.167"
              height="61.3"
              viewBox="0 0 188.167 61.3"
              fill="#7c3a2b"
              className={styles.shape3}
            >
              <path
                d="M741.727,299.834l-157.7-.263A30.517,30.517,0,0,1,553.56,269h0a30.519,30.519,0,0,1,30.568-30.467l96.664.162a61.035,61.035,0,0,1,60.935,61.138Z"
                transform="translate(741.727 299.833) rotate(180)"
              />
            </svg>
          </FiftyFifty.Left>
          <FiftyFifty.Right>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="353.641"
              height="45.152"
              viewBox="0 0 353.641 45.152"
              fill="#b26c29"
              className={styles.shape2}
            >
              <g transform="translate(2969.25 -325.391) rotate(90)">
                <path
                  d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z"
                  transform="translate(370.543 2615.609) rotate(90)"
                />
                <path
                  d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z"
                  transform="translate(350.883 2615.609) rotate(90)"
                />
                <path
                  d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z"
                  transform="translate(331.735 2615.609) rotate(90)"
                />
              </g>
            </svg>
            <Img fluid={YourVisionImgData} />
          </FiftyFifty.Right>
        </FiftyFifty>
      </Section>
      {/* //* End need help */}

      {/* //* Begin why brand */}
      {/* // todo: 5050 section 2 */}
      <Section
        padding="5rem 1rem"
        xxlPadding="5rem 10rem"
        backgroundColor="#F7F7F7"
      >
        <FiftyFifty>
          <FiftyFifty.Left
            modifiers={[
              "needHelp",
              "flip",
              "humbleHelpers",
              "humbleHelpersMain",
            ]}
          >
            <Heading2 fontSize="2rem" mb="2rem">
              We are humble helpers
            </Heading2>
            <Text fontSize="1.1rem" mb="4rem" lineHeight="1.5rem">
              We are a multi-disciplinary studio and we work with any business,
              no matter how established. Through branding, creative, and web, we
              put in the work, and you can focus on what you need to so your
              vision becomes a reality.
            </Text>
            <FiftyFifty.Button to="/about">about koda</FiftyFifty.Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="353.641"
              height="146.204"
              viewBox="0 0 353.641 146.204"
              className={styles.shape6}
            >
              <g transform="translate(-1657.146 -3179.801)">
                <path
                  class="a"
                  d="M355.506,274.771a68.078,68.078,0,1,0,68.078,68.078A68.079,68.079,0,0,0,355.506,274.771Zm0,121.726a53.647,53.647,0,1,1,53.646-53.648A53.648,53.648,0,0,1,355.506,396.5Z"
                  transform="translate(1459.118 2905.03)"
                  fill="#969a8a"
                />
                <g transform="translate(4626.396 2955.462) rotate(90)" fill="#fff">
                  <path
                    class="b"
                    d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z"
                    transform="translate(370.543 2615.609) rotate(90)"
                  />
                  <path
                    class="b"
                    d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z"
                    transform="translate(350.883 2615.609) rotate(90)"
                  />
                  <path
                    class="b"
                    d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z"
                    transform="translate(331.735 2615.609) rotate(90)"
                  />
                </g>
              </g>
            </svg>
          </FiftyFifty.Left>
          <FiftyFifty.Right modifiers="flip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45.152"
              height="198.391"
              viewBox="0 0 45.152 198.391"
              fill="#fff"
              className={styles.shape5}
            >
              <g transform="translate(-325.391 -2615.609)">
                <path
                  class="a"
                  d="M196.612,6.343H1.779C.8,6.343,0,4.922,0,3.172S.8,0,1.779,0H196.612c.982,0,1.779,1.421,1.779,3.172S197.594,6.343,196.612,6.343Z"
                  transform="translate(370.543 2615.609) rotate(90)"
                />
                <path
                  class="a"
                  d="M196.612,6.343H1.779C.8,6.343,0,4.922,0,3.172S.8,0,1.779,0H196.612c.982,0,1.779,1.421,1.779,3.172S197.594,6.343,196.612,6.343Z"
                  transform="translate(350.883 2615.609) rotate(90)"
                />
                <path
                  class="a"
                  d="M196.612,6.343H1.779C.8,6.343,0,4.922,0,3.172S.8,0,1.779,0H196.612c.982,0,1.779,1.421,1.779,3.172S197.594,6.343,196.612,6.343Z"
                  transform="translate(331.735 2615.609) rotate(90)"
                />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="337.378"
              height="109.909"
              viewBox="0 0 337.378 109.909"
              fill="#b26c29"
              className={styles.shape4}
            >
              <path
                d="M890.938,348.443l-282.751-.471a54.717,54.717,0,0,1-54.627-54.811h0a54.719,54.719,0,0,1,54.808-54.627l173.316.29A109.434,109.434,0,0,1,890.938,348.443Z"
                transform="translate(-553.56 -238.534)"
              />
            </svg>
            <Img fluid={HumbleHelpersImgData} />
          </FiftyFifty.Right>
        </FiftyFifty>
      </Section>
      {/* //* End why brand */}

      {/* //* Begin Recent Work */}
      {/* // todo: recent work */}
      <Section padding="5rem 1rem" xxlPadding="5rem 5rem">
        <img src={dot_pattern} className={styles.dots1}/>
        <img src={dot_pattern} className={styles.dots2}/>
        <Heading2 fontSize="2rem" mb="4rem" textAlign="center">
          Recent Work
        </Heading2>
        <ThreeColumns>
          <ThreeColumns.Col1>
            <StyledLink
              to={`/work/${
                data.allMdx.edges[0].node.frontmatter.categories.split(", ")[0]
              }/${data.allMdx.edges[0].node.frontmatter.slug}`}
            >
              <Img
                fluid={
                  data.allMdx.edges[0].node.frontmatter.thumbnail
                    .childImageSharp.fluid
                }
              />
            </StyledLink>
          </ThreeColumns.Col1>
          <ThreeColumns.Col2>
            <StyledLink
              to={`/work/${
                data.allMdx.edges[1].node.frontmatter.categories.split(", ")[0]
              }/${data.allMdx.edges[1].node.frontmatter.slug}`}
            >
              <Img
                fluid={
                  data.allMdx.edges[1].node.frontmatter.thumbnail
                    .childImageSharp.fluid
                }
              />
            </StyledLink>
          </ThreeColumns.Col2>
          <ThreeColumns.Col3>
            <StyledLink
              to={`/work/${
                data.allMdx.edges[2].node.frontmatter.categories.split(", ")[0]
              }/${data.allMdx.edges[2].node.frontmatter.slug}`}
            >
              <Img
                fluid={
                  data.allMdx.edges[2].node.frontmatter.thumbnail
                    .childImageSharp.fluid
                }
              />
            </StyledLink>
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
