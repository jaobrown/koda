import React from "react"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { AlecYoderForm } from "../components/Forms/Forms"
import { Heading2, SEO, Text } from '../utils'
import { Section } from '../elements'
import { Footer } from '../layouts'

const AlecYoderPage = () => (
    <Layout>
        <SEO title="Alec Yoder || Brand Discovery Questionnaire" />
        <Nav />
        <Section padding="5rem 1rem 3rem 1rem" lgPadding="5rem 6rem 3rem 6rem" xlPadding="5rem 18rem 3rem 18rem">
            <Heading2 style={{margin: '0 auto 1rem auto', fontSize: '2rem'}}>Brand Discovery Questionnaire</Heading2>
            <Text style={{margin: '0 auto 5rem auto', fontSize: '1.1rem'}}>Please fill out as much of the form below as you can – if there are any questions that you are unsure of (there probably will be!) feel free to skip them, and we will find an answer together on our discovery call.</Text>
            <AlecYoderForm />
        </Section>
        <Footer />
    </Layout>
)

export default AlecYoderPage
