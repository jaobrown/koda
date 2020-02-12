import React from 'react'
import {Link} from 'gatsby'
import styled from "styled-components"

export const Head1 = styled.h1``
export const Head2 = styled.h2``
export const Head3 = styled.h3`
  font-size: 1.618rem !important;
  text-align: left !important;
  font-family: "Majesti", "serif";
`
export const Head4 = styled.h4``
export const Head5 = styled.h5``
export const Head6 = styled.h6``
export const Body = styled.p`
  margin-left: 0;
  margin-right: 0;
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-family: "Soin Sans", "sans serif";
  font-weight: 100;
  margin-bottom: 3rem;
  text-align: left;
  font-display: fallback;
  max-width: auto;
  letter-spacing: 1px;
`
export const Ordered = styled.ol``
export const Unordered = styled.ul`
    margin-bottom: 3rem;
    list-style-position: inside;
`
export const LineItem = styled.li`
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: "Soin Sans", "sans serif";
  font-weight: normal;
  margin-bottom: 1rem;
  text-transform: uppercase;
  text-align: left;
  font-display: fallback;
  letter-spacing: 1px;
`
export const BlockQuote = styled.blockquote``

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
export const KodaLink = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  custom_attributes,
  ...other
}) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <Link
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        custom_attributes={custom_attributes}
        {...other}
      >
        {children}
      </Link>
    )
  }
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      custom_attributes={custom_attributes}
      {...other}
    >
      {children}
    </a>
  )
}
