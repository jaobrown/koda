import React from 'react'
import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers';
import { Pill } from '../components/Styled/index-styles'



const FIFTY_FIFTY_MODIFIERS = {
}

const FIFTY_FIFTY_LEFT_MODIFIERS = {
    needHelp: () => `
        padding-right: 1rem;
    `,
    flip: () => `
        grid-row: 1;
        grid-column: 3 / 4;
    `,
};

const FIFTY_FIFTY_RIGHT_MODIFIERS = {
    flip: () => `
        grid-row: 1;
        grid-column: 2 / 3;

        @media screen and (max-width: 824px) {
            grid-row: 2;
        }
    `,
};

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
`;

export const FiftyFifty = ({ children }) => {
    return (
        <FiftyFiftyGrid>
            {children}
        </FiftyFiftyGrid>
    )
};

const ContentLeft = styled.div`
    grid-column: 2 / 3;

    @media screen and (max-width: 824px) {
        grid-column: 2 / 3;
    }

    ${applyStyleModifiers(FIFTY_FIFTY_LEFT_MODIFIERS)};
`;

const ContentRight = styled.div`
    grid-column: 3 / 4;

    @media screen and (max-width: 824px) {
        grid-column: 2 / 3;
    }

    ${applyStyleModifiers(FIFTY_FIFTY_RIGHT_MODIFIERS)}
`;

const FiftyFiftyButton = styled(Pill)``

FiftyFifty.Left = ContentLeft;
FiftyFifty.Right = ContentRight;
FiftyFifty.Button = FiftyFiftyButton;