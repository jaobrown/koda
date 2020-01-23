import React from 'react'
import { Heading3 } from '../utils'
import styles from '../assets/svg/svg.module.css'
import { ContactForm } from '../components/Forms/Forms'
import { ContactSection, ContactWrapper, ContactTextWrapper, ContactText } from '../components/Styled/index-styles'

export const ContactLayout = () => {
    return (
        <ContactSection backgroundColor="#f7f7f7" padding="3rem 2rem" tabletPadding="3rem 8rem" lgPadding="3rem 12rem" xlPadding="3rem 8rem" className="contact-section">
            <svg xmlns="http://www.w3.org/2000/svg" height="75px" viewBox="0 0 402.381 131.085" fill="#7c3a2b" className={styles.redDrop1}>
                <path d="M955.941,424.619l-337.229-.562a65.259,65.259,0,0,1-65.152-65.371h0a65.262,65.262,0,0,1,65.368-65.152l206.708.346a130.519,130.519,0,0,1,130.3,130.74Z" transform="translate(-553.561 -293.534)" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="115px" viewBox="0 0 213.95 213.946" fill="#b26c29" className={styles.orangeCircle1}>
                <path d="M394.4,274.771A106.973,106.973,0,1,0,501.375,381.744,106.975,106.975,0,0,0,394.4,274.771Zm0,191.271a84.3,84.3,0,1,1,84.294-84.3A84.3,84.3,0,0,1,394.4,466.042Z" transform="translate(-287.425 -274.771)" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 353.641 45.152" fill="#1d5562" className={styles.blueLines}>
                <g transform="translate(-2615.609 370.543) rotate(-90)">
                    <path d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z" transform="translate(370.543 2615.609) rotate(90)" />
                    <path d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z" transform="translate(350.883 2615.609) rotate(90)" />
                    <path d="M350.469,6.343H3.172A3.172,3.172,0,0,1,3.172,0h347.3a3.172,3.172,0,0,1,0,6.343Z" transform="translate(331.735 2615.609) rotate(90)" />
                </g>
            </svg>
            <ContactWrapper>
                <ContactTextWrapper >
                    <Heading3 fontWeight="lighter" fontSize="1.1rem" mb="2rem">contact</Heading3>
                    <ContactText mb="3rem">Let’s talk about your project — it’s time to bring your vision to&nbsp;life.</ContactText>
                </ContactTextWrapper>
                <ContactForm />
            </ContactWrapper>
        </ContactSection>
    )
}