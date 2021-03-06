import React from "react"
import styled from "styled-components"
import { Heading1, colors, below } from "../utils"

const StyledHeading1 = styled(Heading1)`
  text-align: center;
  font-size: 4.5rem;
  margin: 0rem 0rem 3rem 0;
  color: ${colors.darkgray};
  letter-spacing: 1px;

  ${below.xsish`
        font-size: 14.5vw;
    `}
`

export const HeroTitle = ({ children, ...props }) => {
  return <StyledHeading1 {...props}>{children}</StyledHeading1>
}
