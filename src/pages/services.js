import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"

import Layout from "../components/Layout/Layout"
import { InstagramCTA, NewsletterSignUp, FiftyFifty } from "../layouts"
import { Section } from "../elements"
import Nav from "../components/Nav/Nav"
import { Heading1, Heading3, Heading2, SEO, Text, above } from "../utils"
import { Pill } from "../components/Styled/index-styles"

const PSEUDO_CONTENT_MODIFIERS = {
  one: () => `
    &::before {
      content: '01';
      left: -42.5px;
    }
  `,
  two: () => `
    &::before {
      content: '02';
      left: -55px;
      color: #C2CBCE;
    }
  `,
  three: () => `
    &::before {
      content: '03';
      left: -55px;
    }
  `,
}

const StyledHeading3 = styled(Heading3)`
  position: relative;
  z-index: 1;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 2rem;

  &::before {
    position: absolute;
    z-index: -1;
    top: -30px;
    font-family: "Majesti", serif;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.63);
    font-size: 300%;
  }

  ${applyStyleModifiers(PSEUDO_CONTENT_MODIFIERS)}
`
const StyledUL = styled.ul`
  list-style: none;
  margin-bottom: 3.5rem;

  li {
    font-family: "Soin Sans", "sans serif";
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 1.1rem;
    font-size: 1.1rem;
    letter-spacing: 0.25px;
    color: #3a3a3a;
  }
`

const WhyInvestGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 415px) 1fr;

  div {
    grid-column: 2 / 3;
  }

  ${above.mdish`
      grid-template-columns: 1fr repeat(2, minmax(200px, 415px)) 1fr;
      grid-column-gap: 150px;
      grid-row-gap: 50px;
      margin-bottom: 4rem;

      div:nth-of-type(1) {
        grid-column-start: 2;
      }
      div:nth-of-type(2) {
        grid-column-start: 3;
      }
      div:nth-of-type(3) {
        grid-column-start: 2;
      }
      div:nth-of-type(4) {
        grid-column-start: 3;
      }
    `}
`

const StyledSVG = styled.svg`
  ${above.sm`
    transform: translateX(-75px);
  `}
`

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

const ServicesPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        servicesBrand: file(relativePath: { eq: "brand.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        servicesCreative: file(relativePath: { eq: "creative.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        servicesWeb: file(relativePath: { eq: "web.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const brandImg = data.servicesBrand.childImageSharp.fluid
  const creativeImg = data.servicesCreative.childImageSharp.fluid
  const webImg = data.servicesWeb.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Services" image="kodastudio.jpg" />
      <Nav />

      {/* //* Begin Hero */}
      <Section
        backgroundColor="#F7F7F7"
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
          OUR SERVICES
        </Text>
        <Heading1 textAlign="center" fontSize="40px" mb="0">
          You’re ready to make your dream a&nbsp;reality
        </Heading1>
        <StyledLine />
      </Section>
      {/* //* End Hero */}

      {/* //* Begin web */}
      {/* // todo: 5050 section 1 */}
      <Section padding="5rem 1rem" backgroundColor="#C2CBCE" margin="75px 0">
        <FiftyFifty>
          <FiftyFifty.Left modifiers={["needHelp", "withPseudo", "whyUs"]}>
            <StyledHeading3 modifiers="one">BRAND</StyledHeading3>
            <Text fontSize="1.1rem" mb="2rem" lineHeight="1.5rem">
              We humbly help build your brand. We want to identify your needs
              and roll out the strategy and visual identity you’ve been dreaming
              of.
            </Text>
            <StyledUL>
              <li style={{ letterSpacing: `.75px` }}>
                Exploration &amp; Discovery
              </li>
              <li style={{ letterSpacing: `.75px` }}>Strategy Design</li>
              <li style={{ letterSpacing: `.75px` }}>Visual Identity</li>
              <li style={{ letterSpacing: `.75px` }}>Implementation</li>
            </StyledUL>
            <FiftyFifty.Button to="/contact/">inquire</FiftyFifty.Button>
          </FiftyFifty.Left>
          <FiftyFifty.Right>
            <Img fluid={brandImg} />
          </FiftyFifty.Right>
        </FiftyFifty>
      </Section>
      {/* //* End need help */}

      {/* //* Begin creative */}
      {/* // todo: 5050 section 1 */}
      <Section padding="5rem 1rem" backgroundColor="#F7F7F7" margin="75px 0">
        <FiftyFifty>
          <FiftyFifty.Left modifiers={["flip", "withPseudo"]}>
            <StyledHeading3 modifiers="two">Creative</StyledHeading3>
            <Text fontSize="1.1rem" mb="2rem" lineHeight="1.5rem">
              From curating social media content to creating empathetic packaging for your product, we make intentional things, and we do it all.
            </Text>
            <StyledUL>
              <li style={{ letterSpacing: `.75px` }}>Photography</li>
              <li style={{ letterSpacing: `.75px` }}>Video</li>
              <li style={{ letterSpacing: `.75px` }}>Motion graphics</li>
              <li style={{ letterSpacing: `.75px` }}>Print design</li>
              <li style={{ letterSpacing: `.75px` }}>Social Media Content</li>
            </StyledUL>
            <FiftyFifty.Button to="/contact/">inquire</FiftyFifty.Button>
          </FiftyFifty.Left>
          <FiftyFifty.Right modifiers="flip">
            <Img fluid={creativeImg} />
          </FiftyFifty.Right>
        </FiftyFifty>
      </Section>
      {/* //* End need help */}

      {/* //* Begin web */}
      {/* // todo: 5050 section 1 */}
      <Section padding="5rem 1rem" backgroundColor="#C7C7C7" margin="75px 0">
        <FiftyFifty>
          <FiftyFifty.Left modifiers={["needHelp", "withPseudo", "whyUs"]}>
            <StyledHeading3 modifiers="three">Web</StyledHeading3>
            <Text fontSize="1.1rem" mb="2rem" lineHeight="1.5rem">
              We build thoughtfully crafted brand websites that are useful,
              useable, and desirable.
            </Text>
            <StyledUL>
              <li style={{ letterSpacing: `.75px` }}>
                Exploration &amp; Discovery
              </li>
              <li style={{ letterSpacing: `.75px` }}>Design</li>
              <li style={{ letterSpacing: `.75px` }}>Development</li>
              <li style={{ letterSpacing: `.75px` }}>
                Ongoing support &amp; new features
              </li>
            </StyledUL>
            <FiftyFifty.Button to="/contact/">inquire</FiftyFifty.Button>
          </FiftyFifty.Left>
          <FiftyFifty.Right>
            <Img fluid={webImg} />
          </FiftyFifty.Right>
        </FiftyFifty>
      </Section>
      {/* //* End need help */}

      <Section
        padding="4rem 1rem 7rem 1rem"
        lgPadding="5rem 1rem 6rem 1rem"
        xlPadding="3rem 1rem 8rem 1rem"
      >
        <Heading2 textAlign="center" fontSize="2.3rem" mb="6rem">
          Why invest?
        </Heading2>
        <WhyInvestGrid>
          <div>
            <StyledSVG
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="60"
              viewBox="0 0 245.593 80.008"
            >
              <path
                fill="#1d5562"
                d="M799.153,373.541,593.326,373.2a39.831,39.831,0,0,1-39.766-39.9h0a39.833,39.833,0,0,1,39.9-39.766l126.164.211a79.662,79.662,0,0,1,79.531,79.8Z"
                transform="translate(-553.56 -293.534)"
              />
            </StyledSVG>
            <Heading3 mb="1.618rem" style={{ marginTop: `3rem` }}>
              Inspired Confidence
            </Heading3>
            <Text fontSize="1.1rem" lineHeight="1.6rem">
              You are your business. You have the ideas, talent, and drive to
              accomplish anything. We want to help you discover and build a
              brand that inspires you with the confidence to do big things.{" "}
            </Text>
          </div>
          <div>
            <StyledSVG
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="60"
              viewBox="0 0 245.593 80.008"
            >
              <path
                fill="#b26c29"
                d="M799.153,373.541,593.326,373.2a39.831,39.831,0,0,1-39.766-39.9h0a39.833,39.833,0,0,1,39.9-39.766l126.164.211a79.662,79.662,0,0,1,79.531,79.8Z"
                transform="translate(799.153 373.542) rotate(180)"
              />
            </StyledSVG>
            <Heading3 mb="1.618rem" style={{ marginTop: `3rem` }}>
              Creative partner
            </Heading3>
            <Text fontSize="1.1rem" lineHeight="1.6rem">
              The success of your business is important to us. We won't give you
              a bunch of files and send you on your way. We thoughtfully build
              out how to use your new design goodies for the long run, and equip
              you to keep building a trustworthy brand.
            </Text>
          </div>
          <div>
            <StyledSVG
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="60"
              viewBox="0 0 245.593 80.008"
            >
              <path
                fill="#7c3a2b"
                d="M799.153,373.541,593.326,373.2a39.831,39.831,0,0,1-39.766-39.9h0a39.833,39.833,0,0,1,39.9-39.766l126.164.211a79.662,79.662,0,0,1,79.531,79.8Z"
                transform="translate(799.153 373.542) rotate(180)"
              />
            </StyledSVG>
            <Heading3 mb="1.618rem" style={{ marginTop: `3rem` }}>
              Good impressions
            </Heading3>
            <Text fontSize="1.1rem" lineHeight="1.6rem">
              First impressions are everything. If you have a DIY logo, a
              non-cohesive social page or a lackluster website, people will pass
              on your business. Your brand is the first thing that your audience
              will attribute to the professionalism of your business and the
              reliability of your product and/or services.
            </Text>
          </div>
          <div>
            <StyledSVG
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="60"
              viewBox="0 0 245.593 80.008"
            >
              <path
                fill="#263752"
                d="M799.153,373.541,593.326,373.2a39.831,39.831,0,0,1-39.766-39.9h0a39.833,39.833,0,0,1,39.9-39.766l126.164.211a79.662,79.662,0,0,1,79.531,79.8Z"
                transform="translate(-553.56 -293.534)"
              />
            </StyledSVG>
            <Heading3 mb="1.618rem" style={{ marginTop: `3rem` }}>
              Quality clients
            </Heading3>
            <Text fontSize="1.1rem" lineHeight="1.6rem">
              Giving attention to the visual design of your brand will attract
              quality clients in your preferred markets. By taking a strategic
              approach in clearly defining your brand, you intentionally align
              with your ideal client and they know that your business is the one
              they’ve been looking for.
            </Text>
          </div>
        </WhyInvestGrid>
        <div style={{ width: `100%`, display: `grid`, placeItems: `center` }}>
          <Pill to="/contact/">Reach out to us</Pill>
        </div>
      </Section>

      <NewsletterSignUp />
      <InstagramCTA />
    </Layout>
  )
}

export default ServicesPage
