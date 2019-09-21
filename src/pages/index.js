import React from "react"
import animateScrollTo from 'animated-scroll-to';
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { Section } from '../elements'
import { Heading1, Heading2, Text, Heading3, colors, SEO } from '../utils'
import { ContactForm } from '../components/Forms/Forms'
import { NewsletterSignUp, Footer } from '../layouts';

import { ButtonPill, AnchorPill, ServiceTextWrapper, ServicesText, ContactSection, ContactWrapper, ContactTextWrapper, ContactText } from '../components/Styled/index-styles'

import styles from '../assets/svg/svg.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Koda Studio" />
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
    <Section padding="5rem 1rem">
      <ServiceTextWrapper>
        <ServicesText mb="0">Brand Strategy</ServicesText>
        <ServicesText mb="0">Custom Web Development</ServicesText>
        <ServicesText mb="0">Visual Design</ServicesText>
      </ServiceTextWrapper>
    </Section>
    <ContactSection backgroundColor="#f7f7f7" padding="3rem 2rem" tabletPadding="3rem 8rem" lgPadding="3rem 12rem" xlPadding="3rem 8rem"  className="contact-section">
      <svg xmlns="http://www.w3.org/2000/svg" height="75px" viewBox="0 0 402.381 131.085" fill="#7c3a2b" className={styles.redDrop1}>
        <path d="M955.941,424.619l-337.229-.562a65.259,65.259,0,0,1-65.152-65.371h0a65.262,65.262,0,0,1,65.368-65.152l206.708.346a130.519,130.519,0,0,1,130.3,130.74Z" transform="translate(-553.561 -293.534)" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="115px" viewBox="0 0 213.95 213.946" fill="#b26c29" className={styles.orangeCircle1}>
        <path d="M394.4,274.771A106.973,106.973,0,1,0,501.375,381.744,106.975,106.975,0,0,0,394.4,274.771Zm0,191.271a84.3,84.3,0,1,1,84.294-84.3A84.3,84.3,0,0,1,394.4,466.042Z" transform="translate(-287.425 -274.771)" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 353.641 45.152" fill="#1d5562" className={styles.blueLines}>
        <g transform="translate(-2615.609 370.543) rotate(-90)">
          <path d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z" transform="translate(370.543 2615.609) rotate(90)" />
          <path d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z" transform="translate(350.883 2615.609) rotate(90)" />
          <path d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z" transform="translate(331.735 2615.609) rotate(90)" />
        </g>
      </svg>
      <ContactWrapper>
        <ContactTextWrapper >
          <Heading3 fontWeight="lighter" fontSize="1.1rem" mb="2rem">contact</Heading3>
          <ContactText mb="3rem">Let’s talk about your project — it’s time to bring your vision to&nbsp;life.</ContactText>
        </ContactTextWrapper>
        <ContactForm />
      </ContactWrapper>
    </ContactSection>
    <Section padding="3rem 2rem">
      <Heading2 mb="1rem" fontSize="28px" textAlign="center">Follow us on Instagram</Heading2>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <AnchorPill href="https://www.instagram.com/koda.studio" target="_blank" rel="noopener noreferrer">@koda.studio</AnchorPill>
      </div>
    </Section>
    <NewsletterSignUp />
    <Footer />
  </Layout>
)

export default IndexPage
