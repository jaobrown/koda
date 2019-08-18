import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    padding: ${props => props.padding || "1rem"};
    margin: ${props => props.margin || "0"};
    background-color: ${props => props.backgroundColor || "#ffffff"};
`


export const Section = ({ children, padding, margin, backgroundColor, ...props }) => {
    return (
        <StyledSection padding={padding} margin={margin} backgroundColor={backgroundColor}>
            {children}
        </StyledSection>
    )
}