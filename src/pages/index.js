import React from "react"

import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import SEO from "../utils/Seo"
import { Section } from '../sections/Section'
import { Heading1, Heading2, Text, Heading3 } from '../styles/Typography'
import { ContactForm, SignUp } from '../components/Forms/Forms'
import { colors } from '../styles/GlobalStyles'

import { Pill, ServiceTextWrapper, ServicesText, ContactSection, ContactWrapper, ContactTextWrapper, ContactText, Footer, Social, FooterContactGroup, FooterContactGroupWrapper, FooterContactTitle } from '../components/Styled/index-styles'

import styles from '../assets/svg/svg.module.css'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
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
        <Pill to="/about/">talk to us about your business</Pill>
      </div>
    </Section>
    <Section padding="5rem 1rem">
      <ServiceTextWrapper>
        <ServicesText mb="0">Brand Strategy</ServicesText>
        <ServicesText mb="0">Custom Web Development</ServicesText>
        <ServicesText mb="0">Visual Design</ServicesText>
      </ServiceTextWrapper>
    </Section>
    <ContactSection backgroundColor="#f7f7f7" padding="3rem 2rem" tabletPadding="3rem 8rem" lgPadding="3rem 12rem" xlPadding="3rem 8rem">
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
        <Pill to="/about/">@kodastudio</Pill>
      </div>
    </Section>
    <Section backgroundColor="#C2CBCE" padding="3rem 2rem" tabletPadding="3rem 8rem" lgPadding="3rem 12rem">
      <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 477.033 45.152" fill="#fff" className={styles.whiteLines1}>
        <g transform="translate(-2615.609 370.543) rotate(-90)">
          <path d="M472.755,6.343H4.278C1.917,6.343,0,4.922,0,3.172S1.917,0,4.278,0H472.755c2.362,0,4.278,1.421,4.278,3.172S475.117,6.343,472.755,6.343Z" transform="translate(370.543 2615.609) rotate(90)" />
          <path d="M472.755,6.343H4.278C1.917,6.343,0,4.922,0,3.172S1.917,0,4.278,0H472.755c2.362,0,4.278,1.421,4.278,3.172S475.117,6.343,472.755,6.343Z" transform="translate(350.883 2615.609) rotate(90)" />
          <path d="M472.755,6.343H4.278C1.917,6.343,0,4.922,0,3.172S1.917,0,4.278,0H472.755c2.362,0,4.278,1.421,4.278,3.172S475.117,6.343,472.755,6.343Z" transform="translate(331.735 2615.609) rotate(90)" />
        </g>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 192.308 55.92" fill="#7b3a2b" className={styles.redDrop2}>
        <path d="M709.533,349.72H545.093a27.913,27.913,0,0,1-27.867-27.961h0a27.914,27.914,0,0,1,27.959-27.867L653.8,293.8a55.826,55.826,0,0,1,55.734,55.92Z" transform="translate(709.533 349.72) rotate(180)"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="175px" viewBox="0 0 261.505 261.5" fill="#263752" className={styles.blueCircle2}>
        <path d="M418.18,274.771a130.75,130.75,0,1,0,130.75,130.75A130.752,130.752,0,0,0,418.18,274.771Zm0,233.785A103.033,103.033,0,1,1,521.21,405.521,103.034,103.034,0,0,1,418.18,508.556Z" transform="translate(-287.425 -274.771)"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 477.033 45.152" fill="#fff" className={styles.whiteLines2}>
        <g transform="translate(-2615.609 370.543) rotate(-90)">
          <path d="M472.755,6.343H4.278C1.917,6.343,0,4.922,0,3.172S1.917,0,4.278,0H472.755c2.362,0,4.278,1.421,4.278,3.172S475.117,6.343,472.755,6.343Z" transform="translate(370.543 2615.609) rotate(90)" />
          <path d="M472.755,6.343H4.278C1.917,6.343,0,4.922,0,3.172S1.917,0,4.278,0H472.755c2.362,0,4.278,1.421,4.278,3.172S475.117,6.343,472.755,6.343Z" transform="translate(350.883 2615.609) rotate(90)" />
          <path d="M472.755,6.343H4.278C1.917,6.343,0,4.922,0,3.172S1.917,0,4.278,0H472.755c2.362,0,4.278,1.421,4.278,3.172S475.117,6.343,472.755,6.343Z" transform="translate(331.735 2615.609) rotate(90)" />
        </g>
      </svg>
      <Heading2 mb="1rem" fontSize="28px" textAlign="center">Notify me</Heading2>
      <Text fontSize="1.1rem" textAlign="center" mb="2rem" lineHeight="1.5rem">Be the first know when the full website <br/>has been launched.</Text>
      <SignUp />
    </Section>
    <Footer backgroundColor={colors.darkgray} padding="3rem 2rem">
      <Text mb="1rem" fontSize=".9rem" color={colors.alexwhite} textAlign="center">&copy; KODA {new Date().getFullYear()}</Text>
      <Social>
        <svg width="30px" height="30px" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M29.663,14.832A14.832,14.832,0,1,0,12.514,29.483V19.119H8.748V14.832h3.766V11.564c0-3.717,2.214-5.77,5.6-5.77a22.807,22.807,0,0,1,3.32.29v3.65h-1.87a2.144,2.144,0,0,0-2.417,2.316v2.782h4.113L20.6,19.119H17.149V29.483A14.835,14.835,0,0,0,29.663,14.832Z" /></svg>
        <svg width="30px" height="30px" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0)"><path d="M18.82,6.735c3.936,0,4.4.015,5.957.086a8.159,8.159,0,0,1,2.737.508,4.882,4.882,0,0,1,2.8,2.8,8.159,8.159,0,0,1,.508,2.737c.071,1.554.086,2.021.086,5.957s-.015,4.4-.086,5.957a8.159,8.159,0,0,1-.508,2.737,4.882,4.882,0,0,1-2.8,2.8,8.159,8.159,0,0,1-2.737.508c-1.554.071-2.02.086-5.957.086s-4.4-.015-5.957-.086a8.159,8.159,0,0,1-2.737-.508,4.882,4.882,0,0,1-2.8-2.8,8.159,8.159,0,0,1-.508-2.737c-.071-1.554-.086-2.021-.086-5.957s.015-4.4.086-5.957a8.159,8.159,0,0,1,.508-2.737,4.882,4.882,0,0,1,2.8-2.8,8.159,8.159,0,0,1,2.737-.508c1.554-.071,2.021-.086,5.957-.086m0-2.656c-4,0-4.506.017-6.078.089a10.82,10.82,0,0,0-3.578.685A7.538,7.538,0,0,0,4.853,9.164a10.82,10.82,0,0,0-.685,3.578c-.072,1.572-.089,2.074-.089,6.078s.017,4.506.089,6.078a10.82,10.82,0,0,0,.685,3.578,7.538,7.538,0,0,0,4.311,4.311,10.82,10.82,0,0,0,3.578.685c1.572.072,2.074.089,6.078.089s4.506-.017,6.078-.089a10.82,10.82,0,0,0,3.578-.685,7.538,7.538,0,0,0,4.311-4.311,10.82,10.82,0,0,0,.685-3.578c.072-1.572.089-2.074.089-6.078s-.017-4.506-.089-6.078a10.82,10.82,0,0,0-.685-3.578,7.538,7.538,0,0,0-4.311-4.311A10.82,10.82,0,0,0,24.9,4.168c-1.572-.072-2.074-.089-6.078-.089Z" transform="translate(-4.079 -4.079)" /><path d="M134.2,126.635a7.57,7.57,0,1,0,7.57,7.57A7.57,7.57,0,0,0,134.2,126.635Zm0,12.484a4.914,4.914,0,1,1,4.914-4.914A4.914,4.914,0,0,1,134.2,139.119Z" transform="translate(-119.463 -119.463)" /><circle cx="1.769" cy="1.769" r="1.769" transform="translate(20.842 5.103)" /></g></svg>
        <svg width="30px" height="30px" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M181.6,268.143h-.644a.449.449,0,0,0-.095-.023,14.531,14.531,0,0,1-3.577-.534c-.132-.036-.263-.079-.4-.121.158-.271.309-.521.453-.776a13.937,13.937,0,0,0,1.321-2.892c.229-.78.419-1.572.626-2.359.12-.454.238-.908.363-1.383.07.1.123.191.185.271a2.307,2.307,0,0,0,.21.244,4.176,4.176,0,0,0,2.926,1.179,6.615,6.615,0,0,0,3.6-.956,8.067,8.067,0,0,0,3.171-3.6,10.734,10.734,0,0,0,.985-4.036,8.34,8.34,0,0,0-.977-4.6,8.651,8.651,0,0,0-5.781-4.3,10.8,10.8,0,0,0-3.648-.21,10.5,10.5,0,0,0-3.9,1.117,8.61,8.61,0,0,0-4.451,9.237,7.1,7.1,0,0,0,1.535,3.259,3.8,3.8,0,0,0,1.342,1.04c.267.119.393.059.463-.219.138-.553.269-1.108.409-1.66a.472.472,0,0,0-.1-.423,4.266,4.266,0,0,1-.293-.419,5.839,5.839,0,0,1-.76-3.785,6.119,6.119,0,0,1,2.9-4.591,6.947,6.947,0,0,1,5.952-.686,5.42,5.42,0,0,1,3.558,3.311,6.567,6.567,0,0,1,.426,2.637,9.513,9.513,0,0,1-.594,3.219,5.5,5.5,0,0,1-1.856,2.574,3.44,3.44,0,0,1-2.759.676,2.076,2.076,0,0,1-1.7-2.182,4.58,4.58,0,0,1,.19-.957c.282-1,.591-1.989.868-2.989a4.68,4.68,0,0,0,.2-1.835,1.794,1.794,0,0,0-1.364-1.623,2.081,2.081,0,0,0-1.515.213,2.892,2.892,0,0,0-1.281,1.491,5.207,5.207,0,0,0,.021,3.908.488.488,0,0,1,.024.264q-.745,3.181-1.5,6.359a11.637,11.637,0,0,0-.369,2.07,17.463,17.463,0,0,0,.059,2.5c.017.182.031.363.047.563-.072-.026-.123-.043-.171-.063a14.86,14.86,0,0,1-9.253-13.64,13.989,13.989,0,0,1,.3-3.109,14.826,14.826,0,0,1,25.133-7.354,14.388,14.388,0,0,1,2.663,3.738,14.821,14.821,0,0,1-12.663,21.435C181.788,268.119,181.693,268.133,181.6,268.143Z" transform="translate(-166.445 -238.468)" /></svg>
      </Social>
      <FooterContactGroupWrapper>
        <FooterContactGroup>
          <FooterContactTitle textAlign="center" color={colors.alexwhite} fontWeight="lighter" fontSize=".9rem" mb="12px">email</FooterContactTitle>
          <Text textAlign="center" color={colors.alexwhite} fontSize="1rem" fontWeight="bold" fontFamily={`'Majesti', 'serif'`}><em>alex@alexandrabrown.me</em></Text>
        </FooterContactGroup>
        <FooterContactGroup>
          <FooterContactTitle textAlign="center" color={colors.alexwhite} fontWeight="lighter" fontSize=".9rem" mb="12px">Location</FooterContactTitle>
          <Text textAlign="center" color={colors.alexwhite} fontSize="1rem" fontWeight="bold" fontFamily={`'Majesti', 'serif'`}><em>Indianapolis, Indiana</em></Text>
        </FooterContactGroup>
        <FooterContactGroup>
          <FooterContactTitle textAlign="center" color={colors.alexwhite} fontWeight="lighter" fontSize=".9rem" mb="12px">Studio Hours</FooterContactTitle>
          <Text textAlign="center" color={colors.alexwhite} fontSize="1rem" fontWeight="bold" fontFamily={`'Majesti', 'serif'`}><em>M-F 9-5 EST</em></Text>
        </FooterContactGroup>
      </FooterContactGroupWrapper>
    </Footer>
  </Layout>
)

export default IndexPage
