import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import SEO from "../utils/Seo"
import { Section } from '../sections/Section'
import { Heading1, Heading2, Text, Heading3 } from '../styles/Typography'
import {ContactForm} from '../components/ContactForm/ContactForm'
import { colors } from '../styles/GlobalStyles'

const ShapeGroup1 = styled.div`
  height: 3px;
  width: 195px;
  margin: 6px auto;
  background-color: #C0B8AD;
  border-radius: 500px;
`

const Pill = styled(Link)`
  color: ${colors.darkgray};
  text-decoration: none;
  font-size: 13px;
  font-family: 'Soin Sans', 'sans serif';
  font-weight: normal;
  border: 2px solid ${colors.red};
  padding: .65rem 1rem;
  border-radius: 100px;
  text-align: center;
`

const ServicesSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ServicesText = styled(Heading3)`
  font-size: 1.1rem;
  font-weight: lighter;
  text-align: center;
  display: inline-block;
  width: 100%;
  
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`

const ContactText = styled(Text)`
  position: relative;
  font-family: 'Majesti', 'serif';
  font-weight: bold;

  ::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 0;
    left: -3.5rem;
    width: 2px;
    height: 100px;
    background-color: ${colors.darkgray};
  }
`

const Footer = styled(Section)`
  
`



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Section backgroundColor="#F7F7F7" padding="2rem 1rem">
      <ShapeGroup1></ShapeGroup1>
      <ShapeGroup1></ShapeGroup1>
      <ShapeGroup1></ShapeGroup1>
      <Heading1 color={colors.darkgray} style={{ textAlign: 'center', fontSize: '3.5rem', margin: '3rem 0' }}>The creative studio you’ve been waiting for.</Heading1>
      <Text style={{ textTransform: 'uppercase', textAlign: 'center', fontSize: '1.1rem' }}>Full Website Coming Soon</Text>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
        <Pill to="/about/">start your project now</Pill>
      </div>
    </Section>
    <ServicesSection padding="5rem 1rem">
      <ServicesText mb="0">Brand Strategy</ServicesText>
      <ServicesText mb="0">Custom Web Development</ServicesText>
      <ServicesText mb="0">Visual Design</ServicesText>
    </ServicesSection>
    <Section padding="3rem 2rem" backgroundColor="#f7f7f7">
      <div style={{paddingLeft: '5rem'}}>
        <Heading3 fontWeight="lighter" fontSize="1.1rem" mb="2rem">contact</Heading3>
        <ContactText mb="2rem">Let’s talk about your project — it’s time to bring your vision to life.</ContactText>
      </div>
      <ContactForm />
    </Section>
    <Section padding="2rem">
      <Heading2 mb="1rem" fontSize="35px" textAlign="center">Follow us on Instagram</Heading2>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Pill to="/about/">@kodastudio</Pill>
      </div>
    </Section>
    <Section padding="2rem" backgroundColor="#C2CBCE">
      Blog Sign Up
    </Section>
    <Footer padding="2rem" backgroundColor={colors.darkgray}>

    </Footer>
  </Layout>
)

export default IndexPage
