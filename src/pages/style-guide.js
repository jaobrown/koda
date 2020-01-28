import React from "react"

import Layout from "../components/Layout/Layout"
import {
  StyleGuideWrapper,
  StyledGuideHr,
  ColorDivRow,
  ColorDiv,
} from "../utils/StyleGuideStyles"
import {
  SEO,
  Text,
  Heading1,
  Heading2,
  Heading3,
  colors as ThemeColors,
} from "../utils"

const StyleGuidePage = () => (
  <Layout>
    <SEO title="Style Guide" />
    <StyleGuideWrapper>
      <Heading1>STYLE GUIDE</Heading1>
      <StyledGuideHr />
      <Heading3 color={ThemeColors.orange}>Type Core</Heading3>
      <Heading1 style={{ width: "520px" }}>h1 – Heading One</Heading1>
      <Heading2>h2 – Heading Two</Heading2>
      <Heading3>h3 Heading Three</Heading3>
      <Text>P – Body Copy</Text>
      <Text style={{ width: "520px" }}>
        Whether a small business or entrepreneur, we want to give you the tools
        and deliverables you need to attract your ideal customer, stand out, and
        increase revenue. Through brand strategy and identity design, we put in
        the work, so you can focus on what you need to so your dream becomes a
        reality.
      </Text>
      <StyledGuideHr />
      <Heading3 color={ThemeColors.orange}>Colors</Heading3>
      <Text>Colorful Colors</Text>
      <ColorDivRow>
        <ColorDiv bg={ThemeColors.orange} />
        <ColorDiv bg={ThemeColors.red} />
        <ColorDiv bg={ThemeColors.teal} />
        <ColorDiv bg={ThemeColors.blue} />
      </ColorDivRow>
      <Text>Flat Colors</Text>
      <ColorDivRow>
        <ColorDiv bg={ThemeColors.lightgreen} />
        <ColorDiv bg={ThemeColors.darkgreen} />
        <ColorDiv bg={ThemeColors.lightgreen} />
        <ColorDiv bg={ThemeColors.tan} />
        <ColorDiv bg={ThemeColors.lighttan} />
        <ColorDiv bg={ThemeColors.coral} />
      </ColorDivRow>
      <Text>Utility Colors</Text>
      <ColorDivRow>
        <ColorDiv bg={ThemeColors.darkgray} />
        <ColorDiv
          style={{ border: `1px solid ${ThemeColors.darkgray}` }}
          bg={ThemeColors.alexwhite}
        />
      </ColorDivRow>
    </StyleGuideWrapper>
  </Layout>
)

export default StyleGuidePage
