import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import { InstagramCTA, NewsletterSignUp, FiftyFifty } from "../layouts"
import { Section } from "../elements"
import Nav from "../components/Nav/Nav"
import { Heading1, Heading3, Heading2, SEO, Text } from "../utils"

import styles from "./about.module.css"

const AboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        ourMissionImage: file(relativePath: { eq: "our_mission.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        whyUsImage: file(relativePath: { eq: "why_us.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const OurMissionImgData = data.ourMissionImage.childImageSharp.fluid
  const WhyUsImgData = data.whyUsImage.childImageSharp.fluid

  const StyledLine = styled.span`
    display: inline-block;
    position: absolute;
    z-index: 8;
    bottom: -40px;
    left: 50%;
    height: 130px;
    width: 2px;
    background: #3a3a3a;
    border-radius: 100px;
  `

  return (
    <Layout>
      <SEO title="About" />
      <Nav />

      {/* //* Begin Hero */}
      <Section
        backgroundColor="#C2CBCE"
        padding="10rem 1rem"
        lgPadding="10rem"
        xlPadding="10rem"
        zIndex="auto"
        overFlow="visible"
      >
        <Text
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: "1.2rem",
            letterSpacing: "2px",
            marginBottom: `1.5rem`,
          }}
        >
          about us
        </Text>
        <Heading1 textAlign="center" fontSize="40px" mb="0">
          You've got a friend in&nbsp;us
        </Heading1>
        <StyledLine />
      </Section>
      {/* //* End Hero */}

      {/* //* Begin transform */}
      <Section padding="5rem 1rem" style={{ zIndex: `-1 !important` }}>
        <Heading3
          mb="0"
          textAlign="center"
          fontSize="1.3rem"
          style={{ lineHeight: `2rem`, letterSpacing: `2.5px` }}
        >
          let us help you transform your business
        </Heading3>
      </Section>
      {/* //* End transform */}

      {/* //* Begin mission statement */}
      <Section
        padding="5rem 1rem"
        backgroundColor="#cecece"
        xxlPadding="5rem 5rem"
      >
        <FiftyFifty>
          <FiftyFifty.Left modifiers={["needHelp", "flip", "humbleHelpers"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45.152"
              height="353.641"
              viewBox="0 0 45.152 353.641"
              fill="#223754"
              className={styles.shape2}
            >
              <g transform="translate(370.543 2969.25) rotate(180)">
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
            <Heading2 fontSize="2rem" mb="2rem">
              Our mission
            </Heading2>
            <Text fontSize="1.1rem" mb="2rem" lineHeight="1.5rem">
              Koda Studio works with good people to humbly help them build
              better brands. Along with providing incredible design, Koda cares
              about your problems, aspirations, and goals. We’re committed to
              your success and the business you’ve put your heart into.
            </Text>
          </FiftyFifty.Left>
          <FiftyFifty.Right modifiers="flip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="386.238"
              height="564.391"
              viewBox="0 0 386.238 564.391"
              className={styles.shape1}
            >
              <g transform="translate(-188.509 -3203.609)">
                <path
                  d="M480.548,274.771c-106.657,0-193.123,86.458-193.123,193.116S373.89,661,480.548,661s193.115-86.458,193.115-193.115S587.2,274.771,480.548,274.771Zm0,345.3A152.178,152.178,0,1,1,632.722,467.887,152.18,152.18,0,0,1,480.548,620.068Z"
                  transform="translate(-98.916 3106.998)"
                  fill="#b26c29"
                />
                <g transform="translate(34 588)">
                  <path
                    fill="#fff"
                    d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z"
                    transform="translate(370.543 2615.609) rotate(90)"
                  />
                  <path
                    fill="#fff"
                    d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z"
                    transform="translate(350.883 2615.609) rotate(90)"
                  />
                  <path
                    fill="#fff"
                    d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z"
                    transform="translate(331.735 2615.609) rotate(90)"
                  />
                </g>
              </g>
            </svg>
            <Img fluid={OurMissionImgData} />
          </FiftyFifty.Right>
        </FiftyFifty>
      </Section>
      {/* //* End mission statement */}

      {/* //* Begin need help */}
      {/* // todo: 5050 section 1 */}
      <Section
        padding="5rem 1rem"
        backgroundColor="#F7F7F7"
        margin="75px 0"
        xxlPadding="5rem 5rem"
      >
        <FiftyFifty>
          <FiftyFifty.Left modifiers={["needHelp", "whyUs", "humbleHelpersMain"]}>
            <Heading2 fontSize="2rem" mb="2rem">
              Why us?
            </Heading2>
            <Text fontSize="1.1rem" mb="4rem" lineHeight="1.5rem">
              Your vision brought you here. You are your business, and your
              involvement in defining your brand is vital. We want to listen to
              your thoughts and work with you to refine them. Together, we will
              build a brand that inspires you with the confidence to do big
              things.
            </Text>
            <FiftyFifty.Button to="/work/">View our work</FiftyFifty.Button>
          </FiftyFifty.Left>
          <FiftyFifty.Right>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="310.366"
              height="101.109"
              viewBox="0 0 310.366 101.109"
              fill="#3a3a3a"
              className={styles.shape4}
            >
              <path
                d="M863.926,394.643l-260.112-.433a50.336,50.336,0,0,1-50.253-50.422h0a50.338,50.338,0,0,1,50.42-50.253l159.439.267A100.672,100.672,0,0,1,863.926,394.643Z"
                transform="translate(-553.56 -293.534)"
              />
            </svg>
            <Img fluid={WhyUsImgData} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="143.381"
              height="143.378"
              viewBox="0 0 143.381 143.378"
              fill="#7c3a2b"
              className={styles.shape3}
            >
              <path
                d="M359.117,274.771a71.689,71.689,0,1,0,71.689,71.689A71.69,71.69,0,0,0,359.117,274.771Zm0,128.182a56.492,56.492,0,1,1,56.491-56.493A56.493,56.493,0,0,1,359.117,402.953Z"
                transform="translate(-287.425 -274.771)"
              />
            </svg>
          </FiftyFifty.Right>
        </FiftyFifty>
      </Section>
      {/* //* End need help */}

      <NewsletterSignUp />
      <InstagramCTA />
    </Layout>
  )
}

export default AboutPage
