// libs
import React from "react"
import styled from "styled-components"

// my imports
import { Section } from "../elements"
import { colors, Text, Heading3 } from "../utils"

const StyledFooter = styled(Section)``

const Social = styled.div`
  margin: 0 auto 3rem auto;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FooterContactGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

const FooterContactGroup = styled.div`
  width: 100%;
`

const FooterContactTitle = styled(Heading3)`
  position: relative;

  ::after {
    content: "";
    position: absolute;
    bottom: -8px;
    height: 2px;
    background-color: ${colors.alexwhite};
    width: 80px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const Footer = () => {
  return (
    <StyledFooter backgroundColor={colors.darkgray} padding="3rem 2rem">
      <Text
        mb="1rem"
        fontSize=".9rem"
        color={colors.alexwhite}
        textAlign="center"
      >
        &copy; KODA {new Date().getFullYear()}
      </Text>
      <Social>
        <a
          href="https://www.fb.me/kodastudio.co"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <svg
            width="30px"
            height="30px"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M29.663,14.832A14.832,14.832,0,1,0,12.514,29.483V19.119H8.748V14.832h3.766V11.564c0-3.717,2.214-5.77,5.6-5.77a22.807,22.807,0,0,1,3.32.29v3.65h-1.87a2.144,2.144,0,0,0-2.417,2.316v2.782h4.113L20.6,19.119H17.149V29.483A14.835,14.835,0,0,0,29.663,14.832Z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/koda.studio"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <svg
            width="30px"
            height="30px"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(0)">
              <path
                d="M18.82,6.735c3.936,0,4.4.015,5.957.086a8.159,8.159,0,0,1,2.737.508,4.882,4.882,0,0,1,2.8,2.8,8.159,8.159,0,0,1,.508,2.737c.071,1.554.086,2.021.086,5.957s-.015,4.4-.086,5.957a8.159,8.159,0,0,1-.508,2.737,4.882,4.882,0,0,1-2.8,2.8,8.159,8.159,0,0,1-2.737.508c-1.554.071-2.02.086-5.957.086s-4.4-.015-5.957-.086a8.159,8.159,0,0,1-2.737-.508,4.882,4.882,0,0,1-2.8-2.8,8.159,8.159,0,0,1-.508-2.737c-.071-1.554-.086-2.021-.086-5.957s.015-4.4.086-5.957a8.159,8.159,0,0,1,.508-2.737,4.882,4.882,0,0,1,2.8-2.8,8.159,8.159,0,0,1,2.737-.508c1.554-.071,2.021-.086,5.957-.086m0-2.656c-4,0-4.506.017-6.078.089a10.82,10.82,0,0,0-3.578.685A7.538,7.538,0,0,0,4.853,9.164a10.82,10.82,0,0,0-.685,3.578c-.072,1.572-.089,2.074-.089,6.078s.017,4.506.089,6.078a10.82,10.82,0,0,0,.685,3.578,7.538,7.538,0,0,0,4.311,4.311,10.82,10.82,0,0,0,3.578.685c1.572.072,2.074.089,6.078.089s4.506-.017,6.078-.089a10.82,10.82,0,0,0,3.578-.685,7.538,7.538,0,0,0,4.311-4.311,10.82,10.82,0,0,0,.685-3.578c.072-1.572.089-2.074.089-6.078s-.017-4.506-.089-6.078a10.82,10.82,0,0,0-.685-3.578,7.538,7.538,0,0,0-4.311-4.311A10.82,10.82,0,0,0,24.9,4.168c-1.572-.072-2.074-.089-6.078-.089Z"
                transform="translate(-4.079 -4.079)"
              />
              <path
                d="M134.2,126.635a7.57,7.57,0,1,0,7.57,7.57A7.57,7.57,0,0,0,134.2,126.635Zm0,12.484a4.914,4.914,0,1,1,4.914-4.914A4.914,4.914,0,0,1,134.2,139.119Z"
                transform="translate(-119.463 -119.463)"
              />
              <circle
                cx="1.769"
                cy="1.769"
                r="1.769"
                transform="translate(20.842 5.103)"
              />
            </g>
          </svg>
        </a>
        <a
          href="https://www.pinterest.com/kodastudio"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <svg
            width="30px"
            height="30px"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M181.6,268.143h-.644a.449.449,0,0,0-.095-.023,14.531,14.531,0,0,1-3.577-.534c-.132-.036-.263-.079-.4-.121.158-.271.309-.521.453-.776a13.937,13.937,0,0,0,1.321-2.892c.229-.78.419-1.572.626-2.359.12-.454.238-.908.363-1.383.07.1.123.191.185.271a2.307,2.307,0,0,0,.21.244,4.176,4.176,0,0,0,2.926,1.179,6.615,6.615,0,0,0,3.6-.956,8.067,8.067,0,0,0,3.171-3.6,10.734,10.734,0,0,0,.985-4.036,8.34,8.34,0,0,0-.977-4.6,8.651,8.651,0,0,0-5.781-4.3,10.8,10.8,0,0,0-3.648-.21,10.5,10.5,0,0,0-3.9,1.117,8.61,8.61,0,0,0-4.451,9.237,7.1,7.1,0,0,0,1.535,3.259,3.8,3.8,0,0,0,1.342,1.04c.267.119.393.059.463-.219.138-.553.269-1.108.409-1.66a.472.472,0,0,0-.1-.423,4.266,4.266,0,0,1-.293-.419,5.839,5.839,0,0,1-.76-3.785,6.119,6.119,0,0,1,2.9-4.591,6.947,6.947,0,0,1,5.952-.686,5.42,5.42,0,0,1,3.558,3.311,6.567,6.567,0,0,1,.426,2.637,9.513,9.513,0,0,1-.594,3.219,5.5,5.5,0,0,1-1.856,2.574,3.44,3.44,0,0,1-2.759.676,2.076,2.076,0,0,1-1.7-2.182,4.58,4.58,0,0,1,.19-.957c.282-1,.591-1.989.868-2.989a4.68,4.68,0,0,0,.2-1.835,1.794,1.794,0,0,0-1.364-1.623,2.081,2.081,0,0,0-1.515.213,2.892,2.892,0,0,0-1.281,1.491,5.207,5.207,0,0,0,.021,3.908.488.488,0,0,1,.024.264q-.745,3.181-1.5,6.359a11.637,11.637,0,0,0-.369,2.07,17.463,17.463,0,0,0,.059,2.5c.017.182.031.363.047.563-.072-.026-.123-.043-.171-.063a14.86,14.86,0,0,1-9.253-13.64,13.989,13.989,0,0,1,.3-3.109,14.826,14.826,0,0,1,25.133-7.354,14.388,14.388,0,0,1,2.663,3.738,14.821,14.821,0,0,1-12.663,21.435C181.788,268.119,181.693,268.133,181.6,268.143Z"
              transform="translate(-166.445 -238.468)"
            />
          </svg>
        </a>
      </Social>
      <FooterContactGroupWrapper>
        <FooterContactGroup>
          <FooterContactTitle
            textAlign="center"
            color={colors.alexwhite}
            fontWeight="lighter"
            fontSize=".9rem"
            mb="12px"
          >
            email
          </FooterContactTitle>
          <a
            href="mailto:alex@kodastudio.co"
            style={{ textDecoration: "none" }}
          >
            <Text
              mb="1rem"
              textAlign="center"
              color={colors.alexwhite}
              fontSize="1rem"
              fontWeight="bold"
              fontFamily={`'Majesti', 'serif'`}
            >
              <em>alex@kodastudio.co</em>
            </Text>
          </a>
        </FooterContactGroup>
        <FooterContactGroup>
          <FooterContactTitle
            textAlign="center"
            color={colors.alexwhite}
            fontWeight="lighter"
            fontSize=".9rem"
            mb="12px"
          >
            Location
          </FooterContactTitle>
          <Text
            mb="1rem"
            textAlign="center"
            color={colors.alexwhite}
            fontSize="1rem"
            fontWeight="bold"
            fontFamily={`'Majesti', 'serif'`}
          >
            <em>Indianapolis, Indiana</em>
          </Text>
        </FooterContactGroup>
        <FooterContactGroup>
          <FooterContactTitle
            textAlign="center"
            color={colors.alexwhite}
            fontWeight="lighter"
            fontSize=".9rem"
            mb="12px"
          >
            Studio Hours
          </FooterContactTitle>
          <Text
            mb="1rem"
            textAlign="center"
            color={colors.alexwhite}
            fontSize="1rem"
            fontWeight="bold"
            fontFamily={`'Majesti', 'serif'`}
          >
            <em>M-F 9-5 EST</em>
          </Text>
        </FooterContactGroup>
      </FooterContactGroupWrapper>
    </StyledFooter>
  )
}

export default Footer
