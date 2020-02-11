import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  position: relative;
  z-index:  ${props => props.zIndex || "2"};;
  overflow:  ${props => props.overFlow || "hidden"};;
  max-width: 100vw;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  background-color: ${props => props.backgroundColor || "#ffffff"};

  @media (min-width: 767px) {
    padding: ${props => props.mdPadding};
  }

  @media (min-width: 1023px) {
    padding: ${props => props.lgPadding};
  }

  @media (min-width: 1160px) {
    padding: ${props => props.xlPadding};
  }

  @media (min-width: 1575px) {
    padding: ${props => props.xxlPadding};
  }
`

export const Section = ({
  children,
  padding,
  margin,
  backgroundColor,
  overFlow,
  zIndex,
  mdPadding,
  lgPadding,
  xlPadding,
  xxlPadding
}) => {
  return (
    <StyledSection
      padding={padding}
      mdPadding={mdPadding}
      lgPadding={lgPadding}
      xlPadding={xlPadding}
      xxlPadding={xxlPadding}
      margin={margin}
      zIndex={zIndex}
      overFlow={overFlow}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledSection>
  )
}
