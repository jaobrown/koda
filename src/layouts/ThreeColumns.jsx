import React from "react"
import styled from "styled-components"
import { Pill } from "../components/Styled/index-styles"
// import { applyStyleModifiers } from 'styled-components-modifiers'

const ThreeColumnsGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 120px 1fr 1fr 1fr 120px;
  grid-gap: 70px;
  place-items: center;

  @media screen and (max-width: 1170px) {
    grid-template-columns: 60px 1fr 1fr 1fr 60px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 10px 1fr 1fr 1fr 10px;
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

export const ThreeColumns = ({ children }) => {
  return <ThreeColumnsGrid>{children}</ThreeColumnsGrid>
}

const col1 = styled.div`
  grid-column: 2 / 3;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 824px) {
    grid-column: 2 / 3;
  }
`
const col2 = styled.div`
  grid-column: 3 / 4;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 824px) {
    grid-column: 2 / 3;
  }
`
const col3 = styled.div`
  grid-column: 4 / 5;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 824px) {
    grid-column: 2 / 3;
  }
`
const ThreeColCTA = styled(Pill)`
  grid-column: 3 / 4;
  @media screen and (max-width: 824px) {
    grid-column: 2 / 3;
  }
`

ThreeColumns.Col1 = col1
ThreeColumns.Col2 = col2
ThreeColumns.Col3 = col3
ThreeColumns.CTA = ThreeColCTA
