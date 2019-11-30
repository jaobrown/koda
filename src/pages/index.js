import React from "react"
import animateScrollTo from 'animated-scroll-to';
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { Section } from '../elements'
import { Heading1, Heading2, Text, colors, SEO } from '../utils'
import { FiftyFifty, NewsletterSignUp, InstagramCTA, Footer } from '../layouts';

import { ButtonPill, ServiceTextWrapper, ServicesText } from '../components/Styled/index-styles'

import styles from '../assets/svg/svg.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Koda Studio" />
    {/* // todo: nav updates */}
    <Nav />
    <Section backgroundColor="#F7F7F7" padding="5rem 1rem 3rem 1rem" lgPadding="5rem 6rem 3rem 6rem" xlPadding="5rem 18rem 3rem 18rem">
      <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 357.354 45.152" fill="#cec8c0" className={styles.lightLines}>
        <g transform="translate(-2615.609 370.543) rotate(-90)">
          <path d="M354.149,6.343H3.2A3.19,3.19,0,0,1,0,3.172,3.19,3.19,0,0,1,3.2,0H354.149a3.19,3.19,0,0,1,3.2,3.172A3.19,3.19,0,0,1,354.149,6.343Z" transform="translate(370.543 2615.609) rotate(90)" />
          <path d="M354.149,6.343H3.2A3.19,3.19,0,0,1,0,3.172,3.19,3.19,0,0,1,3.2,0H354.149a3.19,3.19,0,0,1,3.2,3.172A3.19,3.19,0,0,1,354.149,6.343Z" transform="translate(350.883 2615.609) rotate(90)" />
          <path d="M354.149,6.343H3.2A3.19,3.19,0,0,1,0,3.172,3.19,3.19,0,0,1,3.2,0H354.149a3.19,3.19,0,0,1,3.2,3.172A3.19,3.19,0,0,1,354.149,6.343Z" transform="translate(331.735 2615.609) rotate(90)" />
        </g>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 167.23 167.227" fill="#1d5562" className={styles.blueCircle1}>
        <path d="M371.042,274.771a83.614,83.614,0,1,0,83.614,83.614A83.615,83.615,0,0,0,371.042,274.771Zm0,149.5a65.889,65.889,0,1,1,65.887-65.89A65.89,65.89,0,0,1,371.042,424.275Z" transform="translate(-287.425 -274.771)" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="200px" viewBox="0 0 93.748 322.397" fill="#b26c29" className={styles.orangeDrop1}>
        <path d="M839.623,387.548H563.944a46.8,46.8,0,0,1-46.718-46.875h0A46.8,46.8,0,0,1,564.1,293.955l182.087-.155a93.59,93.59,0,0,1,93.437,93.748Z" transform="translate(387.548 -517.226) rotate(90)" />
      </svg>
      <Heading1 color={colors.darkgray} style={{ textAlign: 'center', fontSize: '3.5rem', margin: '3rem 0' }}>Humbly helping build better brands</Heading1>
      <Text style={{ textTransform: 'uppercase', textAlign: 'center', fontSize: '1.1rem', letterSpacing: '2px' }}>Full site coming soon</Text>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <ButtonPill onClick={() => animateScrollTo(700)}>talk to us about your business</ButtonPill>
      </div>
    </Section>
    {/* // todo: fix this section */}
    <Section padding="5rem 1rem">
      <ServiceTextWrapper>
        <ServicesText mb="0">Brand Strategy</ServicesText>
        <ServicesText mb="0">Custom Web Development</ServicesText>
        <ServicesText mb="0">Visual Design</ServicesText>
      </ServiceTextWrapper>
    </Section>
    {/* // todo: 5050 section 1 */}
    <Section padding="5rem 1rem">
      <FiftyFifty>
        <div>
          <Heading2 fontSize="2rem">You need help bringing your vision to life.</Heading2>
          <Text fontSize="1.1rem" mb="2rem" lineHeight="1.5rem">Whether a small business or entreprenuer, we want to give you the tools and deliverables you need to attract your ideal customer, stand out, and increase revenue.</Text>
          <Text fontSize="1.1rem" mb="2rem" lineHeight="1.5rem">
            Through brand strategy and identity design, we put in the work, so you can focus on what you need to so your dream can become a reality.
          </Text>
        </div>
        <div>
          <div style={{ height: '450px', width: '350px', background: 'orange' }}></div>
        </div>
      </FiftyFifty>
    </Section>
    {/* // todo: 5050 section 2 */}
    <Section padding="5rem 1rem">
      <h2 style={{ textAlign: 'center' }}>50 50 section 1</h2>
    </Section>
    {/* // todo: recent work */}
    <Section padding="5rem 1rem">
      <h2 style={{ textAlign: 'center' }}>Recent Work</h2>
    </Section>
    <InstagramCTA />
    <NewsletterSignUp />
    <Footer />
  </Layout>
)

export default IndexPage
