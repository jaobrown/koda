import styled from "styled-components"

// 27.506
// 44.504708
// 72.00861754

export const OrderedList = styled.ol``

export const Text = styled.p`
  margin-left: ${props => props.mx || "0"};
  margin-right: ${props => props.mx || "0"} ;
  font-size: ${props => props.fontSize || "1.5rem"};
  line-height: ${props => props.lineHeight || "2rem"};
  font-family: ${props => props.fontFamily || `'Soin Sans', 'sans serif'`};
  font-weight: ${props => props.fontWeight || "100"};
  margin-bottom: ${props => props.mb || "3rem;"};
  color: ${props => props.color};
  text-align: ${props => props.textAlign || "left"};
  font-display: fallback;
  max-width: ${props => props.maxWidth || "auto"};
`

export const Heading3 = styled.h3`
  margin-left: ${props => props.mx || "0"};
  margin-right: ${props => props.mx || "0"} ;
  font-size: ${props => props.fontSize || "1.5rem"};
  font-family: ${props => props.fontFamily || `'Soin Sans', 'sans serif'`};
  font-weight: ${props => props.fontWeight || "normal"};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${props => props.mb || "3rem;"};
  color: ${props => props.color};
  text-align: ${props => props.textAlign || "left"};
  font-display: fallback;
  max-width: ${props => props.maxWidth || "auto"};
`

export const Heading2 = styled.h2`
  margin-left: ${props => props.mx || "0"};
  margin-right: ${props => props.mx || "0"} ;
  font-size: ${props => props.fontSize || "3rem"};
  font-family: ${props => props.fontFamily || `'Majesti', 'serif'`};
  font-weight: ${props => props.fontWeight || "bold"};
  margin-bottom: ${props => props.mb || "3rem;"};
  color: ${props => props.color};
  text-align: ${props => props.textAlign || "left"};
  max-width: ${props => props.maxWidth || "auto"};
  font-display: fallback;
`

export const Heading1 = styled.h1`
  margin-left: ${props => props.mx || "0"};
  margin-right: ${props => props.mx || "0"} ;
  font-size: ${props => props.fontSize || "4rem"};
  font-family: ${props => props.fontFamily || `'Majesti', 'serif'`};
  font-weight: ${props => props.fontWeight || "bold"};
  margin-bottom: ${props => props.mb || "3rem;"};
  color: ${props => props.color};
  text-align: ${props => props.textAlign || "left"};
  font-display: fallback;
  max-width: ${props => props.maxWidth || "auto"};
`
