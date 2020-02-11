import React from "react"
import { Section } from "../elements"
import { Heading2, Text } from "../utils"
import { SignUp } from "../components/Forms/Forms"
import styles from "../assets/svg/svg.module.css"

export const NewsletterSignUp = () => {
  return (
    <Section
      backgroundColor="#C2CBCE"
      padding="3rem 2rem"
      tabletPadding="3rem 8rem"
      lgPadding="3rem 12rem"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 0 477.033 45.152"
        fill="#fff"
        className={styles.whiteLines1}
      >
        <g transform="translate(-2615.609 370.543) rotate(-90)">
          <path
            d="M472.755,6.343H4.278C1.917,6.343,0,4.922,0,3.172S1.917,0,4.278,0H472.755c2.362,0,4.278,1.421,4.278,3.172S475.117,6.343,472.755,6.343Z"
            transform="translate(370.543 2615.609) rotate(90)"
          />
          <path
            d="M472.755,6.343H4.278C1.917,6.343,0,4.922,0,3.172S1.917,0,4.278,0H472.755c2.362,0,4.278,1.421,4.278,3.172S475.117,6.343,472.755,6.343Z"
            transform="translate(350.883 2615.609) rotate(90)"
          />
          <path
            d="M472.755,6.343H4.278C1.917,6.343,0,4.922,0,3.172S1.917,0,4.278,0H472.755c2.362,0,4.278,1.421,4.278,3.172S475.117,6.343,472.755,6.343Z"
            transform="translate(331.735 2615.609) rotate(90)"
          />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="50px"
        viewBox="0 0 192.308 55.92"
        fill="#223754"
        className={styles.redDrop2}
      >
        <path
          d="M709.533,349.72H545.093a27.913,27.913,0,0,1-27.867-27.961h0a27.914,27.914,0,0,1,27.959-27.867L653.8,293.8a55.826,55.826,0,0,1,55.734,55.92Z"
          transform="translate(709.533 349.72) rotate(180)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="175px"
        viewBox="0 0 261.505 261.5"
        fill="#005664"
        className={styles.blueCircle2}
      >
        <path
          d="M418.18,274.771a130.75,130.75,0,1,0,130.75,130.75A130.752,130.752,0,0,0,418.18,274.771Zm0,233.785A103.033,103.033,0,1,1,521.21,405.521,103.034,103.034,0,0,1,418.18,508.556Z"
          transform="translate(-287.425 -274.771)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 0 477.033 45.152"
        fill="#fff"
        className={styles.whiteLines2}
      >
        <g transform="translate(-2615.609 370.543) rotate(-90)">
          <path
            d="M472.755,6.343H4.278C1.917,6.343,0,4.922,0,3.172S1.917,0,4.278,0H472.755c2.362,0,4.278,1.421,4.278,3.172S475.117,6.343,472.755,6.343Z"
            transform="translate(370.543 2615.609) rotate(90)"
          />
          <path
            d="M472.755,6.343H4.278C1.917,6.343,0,4.922,0,3.172S1.917,0,4.278,0H472.755c2.362,0,4.278,1.421,4.278,3.172S475.117,6.343,472.755,6.343Z"
            transform="translate(350.883 2615.609) rotate(90)"
          />
          <path
            d="M472.755,6.343H4.278C1.917,6.343,0,4.922,0,3.172S1.917,0,4.278,0H472.755c2.362,0,4.278,1.421,4.278,3.172S475.117,6.343,472.755,6.343Z"
            transform="translate(331.735 2615.609) rotate(90)"
          />
        </g>
      </svg>
      <Heading2 mb="1rem" fontSize="28px" textAlign="center">
        Sign Up
      </Heading2>
      <Text fontSize="1.1rem" textAlign="center" mb="2rem" lineHeight="1.5rem">
        For blog updates, freebies, and fun.
      </Text>
      <SignUp />
    </Section>
  )
}

export default NewsletterSignUp
