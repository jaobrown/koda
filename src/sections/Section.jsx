import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
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
`


export const Section = ({ children, padding, margin, backgroundColor, mdPadding,lgPadding,xlPadding, ...props }) => {
    return (
        <StyledSection padding={padding} mdPadding={mdPadding} lgPadding={lgPadding} xlPadding={xlPadding} margin={margin} backgroundColor={backgroundColor}>
            {children}
        </StyledSection>
    )
}