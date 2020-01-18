import React from 'react'
import styled from 'styled-components'
import { Section } from '../elements'
import { Heading2 } from '../utils'
import { AnchorPill } from '../components/Styled/index-styles'

const fakeFeed = [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
]

const InstagramFeed = styled.div`
    height: 250px;
    display: grid;
    grid-template-columns: repeat(6, 250px);
    margin-bottom: 3rem;
`

export const InstagramCTA = () => {
    return (
        <Section padding="3rem 0">
            <InstagramFeed>
                {fakeFeed.map(() => (
                    <div style={{
                        height: '100%',
                        width: '100%',
                        background: `rgba(${Math.floor(Math.random() * 250) + 1},${Math.floor(Math.random() * 250) + 1},${Math.floor(Math.random() * 250) + 1},1)`,
                    }}>
                    </div>
                ))}
            </InstagramFeed>
            <Heading2 mb="1rem" fontSize="28px" textAlign="center">Follow us on Instagram</Heading2>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <AnchorPill href="https://www.instagram.com/koda.studio" target="_blank" rel="noopener noreferrer">@koda.studio</AnchorPill>
            </div>
        </Section>
    )
}