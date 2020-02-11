import React from "react"
import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"
import { Pill } from "../components/Styled/index-styles"

// const FIFTY_FIFTY_MODIFIERS = {
// }

const FIFTY_FIFTY_LEFT_MODIFIERS = {
  needHelp: () => `
        padding-right: 1rem;
    `,
  flip: () => `
        grid-row: 1;
        grid-column: 3 / 4;
    `,
  withPseudo: () => `
        padding-left: 4.5rem;
    `,
  humbleHelpers: () => `
    padding-left: 3rem;

    @media screen and (max-width: 824px) {
      padding-left: 0;
    }
  `,
  humbleHelpersMain: () => `
    padding-left: 3rem;

    @media screen and (max-width: 824px) {
      padding-left: 0;
      margin-bottom: 4rem;
    }
  `,
  whyUs: () => `
  padding-right: 3rem;

  @media screen and (max-width: 824px) {
    padding-right: 0;
  }
`,
}

const FIFTY_FIFTY_RIGHT_MODIFIERS = {
  flip: () => `
        grid-row: 1;
        grid-column: 2 / 3;

        @media screen and (max-width: 824px) {
            grid-row: 2;
        }
    `,
}

const FiftyFiftyGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 120px 1fr 1fr 120px;
  grid-gap: 50px;
  place-items: center;

  @media screen and (max-width: 1170px) {
    grid-template-columns: 60px 1fr 1fr 60px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 10px 1fr 1fr 10px;
  }

  @media screen and (max-width: 824px) {
    grid-template-columns: 60px 1fr 60px;
    grid-column-gap: 0px;
    grid-row-gap: 50px;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 25px 1fr 25px;
    grid-column-gap: 0px;
    grid-row-gap: 50px;
  }
  @media screen and (max-width: 545px) {
    grid-template-columns: 1px 1fr 1px;
    grid-column-gap: 0px;
    grid-row-gap: 50px;
  }
`

export const FiftyFifty = ({ children }) => {
  return <FiftyFiftyGrid>{children}</FiftyFiftyGrid>
}

const ContentLeft = styled.div`
position: relative;
  box-sizing: border-box;
  grid-column: 2 / 3;
  width: 100%;

  @media screen and (max-width: 824px) {
    grid-column: 2 / 3;
  }

  ${applyStyleModifiers(FIFTY_FIFTY_LEFT_MODIFIERS)};
`

const ContentRight = styled.div`
position: relative;
  box-sizing: border-box;
  grid-column: 3 / 4;
  width: 100%;

  @media screen and (max-width: 824px) {
    grid-column: 2 / 3;
  }

  ${applyStyleModifiers(FIFTY_FIFTY_RIGHT_MODIFIERS)}
`

const FiftyFiftyButton = styled(Pill)`
  font-weight: bold;
  letter-spacing: 1px;
`

FiftyFifty.Left = ContentLeft
FiftyFifty.Right = ContentRight
FiftyFifty.Button = FiftyFiftyButton
