import styled from "styled-components"

// 27.506
// 44.504708
// 72.00861754

export const Text = styled.p`
    font-size: ${props => props.fontSize || '1.5rem'};
    line-height: ${props => props.lineHeight || '2rem'};
    font-family: ${props => props.fontFamily || `'Soin Sans', 'sans serif'`};
    font-weight: ${props => props.fontWeight || '100'};
    margin-bottom: ${props => props.mb || '3rem;'};
    color: ${props => props.color};
    text-align: ${props => props.textAlign || 'left'};
    font-display: fallback;
`

export const Heading3 = styled.h3`
    font-size: ${props => props.fontSize || '1.5rem'};
    font-family: ${props => props.fontFamily || `'Soin Sans', 'sans serif'`};
    font-weight: ${props => props.fontWeight || 'normal'};
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: ${props => props.mb || '3rem;'};
    color: ${props => props.color};
    text-align: ${props => props.textAlign || 'left'};
    font-display: fallback;
`

export const Heading2 = styled.h2`
    font-size: ${props => props.fontSize || '3rem'};
    font-family: ${props => props.fontFamily || `'Majesti', 'serif'`};
    font-weight: ${props => props.fontWeight || 'bold'};
    margin-bottom: ${props => props.mb || '3rem;'};
    color: ${props => props.color};
    text-align: ${props => props.textAlign || 'left'};
    font-display: fallback;
`

export const Heading1 = styled.h1`
    font-size: ${props => props.fontSize || '4rem'};
    font-family: ${props => props.fontFamily || `'Majesti', 'serif'`};
    font-weight: ${props => props.fontWeight || 'bold'};
    margin-bottom: ${props => props.mb || '3rem;'};
    color: ${props => props.color};
    text-align: ${props => props.textAlign || 'left'};
    font-display: fallback;
`