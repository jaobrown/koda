import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {below} from '../../utils'

const StyledLink = styled(Link)`
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: unset;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 5rem;
  text-transform: uppercase;
  font-family: "Soin Sans", "sans serif";
  letter-spacing: 1px;
  transition: .1s ease-in;

  svg {
    margin-right: 1rem;
    transform: translate3d(0, 4px, 0);
    transition: .1s ease-in;

    ${below.sm`
      margin-left: 1rem;
    `}
  }

  &:hover {
      svg {
        transform: translate3d(-5px, 4px, 0);      
      }
  }
`

export const BackButton = ({ children, ...props }) => {
  return (
    <StyledLink {...props}>
      <svg width="1.5rem" height="1.5rem" viewBox="0 0 100 100">
        <polyline
          fill="none"
          stroke="#B26C29"
          stroke-width="7"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="55,90 10,50 55,10"
        />
      </svg>
      {children}
    </StyledLink>
  )
}
