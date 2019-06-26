import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../utils/Seo"
import { StyleGuideWrapper, StyledGuideHr } from "../styles/StyleGuideStyles"
import { colors as ThemeColors} from "../styles/GlobalStyles"
import { Text, Heading1, Heading2, Heading3 } from "../styles/Typography"

const StyleGuidePage = () => (
  <Layout>
    <SEO title="Style Guide" />
    <StyleGuideWrapper>
      <Heading1>STYLE GUIDE</Heading1>
      <StyledGuideHr />
      <Heading3 color={ThemeColors.orange}>Typography Baseline</Heading3>
      <Heading1>1. Heading One</Heading1>
      <Heading2>2. Heading Two</Heading2>
      <Heading3>3. View Our Services</Heading3>
      <Text>P – Body Copy</Text>
      <Text style={{ width: "30%" }}>
        A little bit about me as a designer, what I’m known for. A little bit
        about me as a designer, what I’m known for. A little bit about me as a
        designer, what I’m known, A little bit about me as a designer, what I’m
        known for. A little bit about me as a designer, what I’m known for
      </Text>
      <StyledGuideHr />
    </StyleGuideWrapper>
  </Layout>
)

export default StyleGuidePage
