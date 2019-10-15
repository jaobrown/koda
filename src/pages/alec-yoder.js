import React from "react"
import Layout from "../components/Layout/Layout"
import Nav from "../components/Nav/Nav"
import { AlecYoderForm } from "../components/Forms/Forms"
import { Heading2, SEO } from '../utils'
import { Section } from '../elements'
import { Footer } from '../layouts'

const AlecYoderPage = () => (
    <Layout>
        <SEO title="Alec Yoder || Brand Discovery Questionnaire" />
        <Nav />
        <Section padding="5rem 1rem 3rem 1rem" lgPadding="5rem 6rem 3rem 6rem" xlPadding="5rem 18rem 3rem 18rem">
            <Heading2>Brand Discovery Questionnaire</Heading2>
            <AlecYoderForm />
        </Section>
        <Footer />
    </Layout>
)

export default AlecYoderPage
