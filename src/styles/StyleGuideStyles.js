import styled from "styled-components"

export const StyleGuideWrapper = styled.div`
  max-width: 100vw;
  padding: 4rem;
`
export const StyledGuideHr = styled.hr`
  max-width: 100%;
  margin-bottom: 5rem;
`

export const ColorDivRow = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  margin-bottom: 3rem;
`

export const ColorDiv = styled.div`
  height: 100%;
  width: 100px;
  background-color: ${props => props.bg};
  margin-right: 8px;
`