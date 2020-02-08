import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout"
import { InstagramCTA, NewsletterSignUp, FiftyFifty } from "../layouts"
import { Section } from "../elements"
import Nav from "../components/Nav/Nav"
import { Heading1, Heading3, Heading2, SEO, Text } from "../utils"

const AboutPage = () => {
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
        placeholderThree: file(relativePath: { eq: "place_3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const place_1 = data.placeholderOne.childImageSharp.fluid
  const place_2 = data.placeholderTwo.childImageSharp.fluid
  // const place_3 = data.placeholderThree.childImageSharp.fluid

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
        style={{ zIndex: `2 !important`, overflow: `visible !important` }}
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
      </Section>
      {/* //* End Hero */}

      {/* //* Begin transform */}
      <Section padding="5rem 1rem" style={{ zIndex: `-1 !important` }}>
        <Heading3
          mb="0"
          textAlign="center"
          fontSize="1.3rem"
          style={{ lineHeight: `1.618rem` }}
        >
          let us help you transform your business
        </Heading3>
      </Section>
      {/* //* End transform */}

      {/* //* Begin mission statement */}
      <Section padding="5rem 1rem" backgroundColor="#cecece">
        <FiftyFifty>
          <FiftyFifty.Left modifiers={["needHelp", "flip"]}>
            <Heading2 fontSize="2rem">Our mission</Heading2>
            <Text fontSize="1.1rem" mb="2rem" lineHeight="1.5rem">
              Koda Studio works with good people to humbly help them build
              better brands. Along with providing incredible design, Koda cares
              about your problems, aspirations, and goals. We’re committed to
              your success and the business you’ve put your heart into.
            </Text>
          </FiftyFifty.Left>
          <FiftyFifty.Right modifiers="flip">
            <Img fluid={place_2} />
          </FiftyFifty.Right>
        </FiftyFifty>
      </Section>
      {/* //* End mission statement */}

      {/* //* Begin need help */}
      {/* // todo: 5050 section 1 */}
      <Section padding="5rem 1rem" backgroundColor="#F7F7F7" margin="75px 0">
        <FiftyFifty>
          <FiftyFifty.Left modifiers="needHelp">
            <Heading2 fontSize="2rem">Why us?</Heading2>
            <Text fontSize="1.1rem" mb="2rem" lineHeight="1.5rem">
              Your vision brought you here. You are your business, and your
              involvement in defining your brand is vital. We want to listen to
              your thoughts, and work with you to refine them. Together, we will
              build a brand that inspires you with the confidence to do big
              things.
            </Text>
          </FiftyFifty.Left>
          <FiftyFifty.Right>
            <Img fluid={place_1} />
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
