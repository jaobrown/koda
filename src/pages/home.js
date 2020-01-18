import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { Section } from '../elements'
import { Heading1, Heading2, Text, colors, SEO } from '../utils'

const ShapeGroup1 = styled.div`
  height: 3px;
  width: 195px;
  margin: 6px auto;
  background-color: #C0B8AD;
  border-radius: 500px;
`

const Pill = styled(Link)`
text-transform: capitalize;
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

const CtaSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 375px;
  background-color: #C2CBCE;
`

const Cta1 = styled(Link)`
  position: relative;

  color: ${colors.darkgray};
  text-decoration: none;
  font-family: 'Soin Sans', 'sans serif';
  font-weight: normal;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;

  &:nth-child(1) {
    margin-top: 3rem;
  }

  &:hover {
    cursor: pointer;
  }

  ::before {
    content: '${props => props.content || '01'}';
    position: absolute;
    top: -240%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    font-family: 'Majesti', 'serif';
    font-weight: bold;
    color: ${colors.darkgray};
    height: 40px;
    width: 40px;
  }
`

const Shape2 = styled.div`
  height: 40px;
  width: 90px;
  background-color: ${colors.red};
  border-radius: 0 100px 100px 100%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Section backgroundColor="#fbfbfb" padding="2rem 1rem">
      <ShapeGroup1></ShapeGroup1>
      <ShapeGroup1></ShapeGroup1>
      <ShapeGroup1></ShapeGroup1>
      <Heading1 color={colors.darkgray} style={{ textAlign: 'center', fontSize: '3.5rem', margin: '30px 0' }}>we empower others through strategy and design.</Heading1>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
        <Pill to="/about/">about koda</Pill>
      </div>
    </Section>
    <CtaSection>
      <Cta1 content="01" to="/work/">See our work</Cta1>
      <Cta1 content="02" to="/services/">View our services</Cta1>
      <Cta1 content="03" to="/blog/">Read our blog</Cta1>
    </CtaSection>
    <Section padding="2rem 1rem">
      <Heading2 mb="1.2rem" fontSize="1.6rem">You need help bringing your vision to life.</Heading2>
      <Text lineHeight="1.5rem" mb="1.2rem" fontSize="1.1rem">Whether a small business or entrepreneur, we want to give you the tools and deliverables you need to attract your ideal customer, stand out, and increase revenue. </Text>
      <Text lineHeight="1.5rem" mb="1.2rem" fontSize="1.1rem">Through brand strategy and identity design, we put in the work, so you can focus on what you need to so your dream becomes a reality.</Text>
      <Shape2></Shape2>
    </Section>
  </Layout>
)

export default IndexPage
