import React from 'react'
import styled from 'styled-components'

const FiftyFiftyGrid = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const FiftyFifty = ({ children }) => {
    return (
        <FiftyFiftyGrid>
            {children}
        </FiftyFiftyGrid>
    )
}