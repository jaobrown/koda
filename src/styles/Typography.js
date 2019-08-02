import styled from "styled-components"

// 27.506
// 44.504708
// 72.00861754

export const Text = styled.p`
    font-size: 1.5rem;
    line-height: 2rem;
    font-family: 'Soin Sans', 'sans serif';
    font-weight: normal;
    margin-bottom: 3rem;
    color: ${props => props.color};
`

export const Heading3 = styled.h3`
    font-size: 1.5rem;
    font-family: 'Soin Sans', 'sans serif';
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 3rem;
    color: ${props => props.color};
`

export const Heading2 = styled.h2`
    font-size: 2rem;
    font-family: 'Majesti', 'serif';
    font-weight: bold;
    margin-bottom: 3rem;
    color: ${props => props.color};
`

export const Heading1 = styled.h1`
    font-size: 3rem;
    font-family: 'Majesti', 'serif';
    font-weight: bold;
    margin-bottom: 3rem;
    color: ${props => props.color};
`