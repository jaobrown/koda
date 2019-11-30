import React from 'react'
import { Section } from '../elements'
import { Heading2 } from '../utils'
import { AnchorPill } from '../components/Styled/index-styles'

export const InstagramCTA = () => {
    return (
        <Section padding="3rem 2rem">
            <Heading2 mb="1rem" fontSize="28px" textAlign="center">Follow us on Instagram</Heading2>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <AnchorPill href="https://www.instagram.com/koda.studio" target="_blank" rel="noopener noreferrer">@koda.studio</AnchorPill>
            </div>
        </Section>
    )
}