import { Link } from 'gatsby'
import styled from 'styled-components'
import { Section } from '../../elements'
import { colors, Text, Heading3 } from '../../utils';

export const ShapeGroup1 = styled.div`
  height: 3px;
  width: 195px;
  margin: 6px auto;
  background-color: #C0B8AD;
  border-radius: 500px;
`

export const Pill = styled(Link)`
text-transform: capitalize;
  color: ${colors.darkgray};
  background-color: transparent;
  text-decoration: none;
  font-size: 13px;
  font-family: 'Soin Sans', 'sans serif';
  font-weight: bold;
  letter-spacing: 1px;
  border: 2px solid ${colors.red};
  padding: .7rem 1rem;
  border-radius: 100px;
  text-align: center;

  transition: .2s ease-in-out;
  cursor: pointer;

  @media (min-width: 500px) {
    :hover {
      background-color: ${props => props.borderColor || colors.red};
      color: #ffffff;
    } 
  }
`

export const AnchorPill = styled.a`
text-transform: capitalize;
  color: ${colors.darkgray};
  text-decoration: none;
  background-color: transparent;
  font-size: 13px;
  font-family: 'Soin Sans', 'sans serif';
  font-weight: bold;
  letter-spacing: 1px;
  border: 2px solid ${colors.red};
  padding: .7rem 1rem;
  border-radius: 100px;
  text-align: center;

  transition: .2s ease-in-out;
  cursor: pointer;

  @media (min-width: 500px) {
  :hover {
    background-color: ${props => props.borderColor || colors.red};
    color: #ffffff;
  }
  }
`

export const ButtonPill = styled.button`
  text-transform: capitalize;
  color: ${colors.darkgray};
  background-color: ${props => props.backgroundColor || `transparent`};
  text-decoration: none;
  font-size: 13px;
  font-family: 'Soin Sans', 'sans serif';
  font-weight: bold;
  letter-spacing: 1px;
  border: 2px solid ${colors.red};
  padding: .7rem 1rem;
  border-radius: 100px;
  text-align: center;

  transition: .2s ease-in-out;
  cursor: pointer;
  @media (min-width: 500px) {
  :hover {
    background-color: ${props => props.borderColor || colors.red};
    color: #ffffff;
  }
  }
`

export const ServiceTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 1023px) {
    flex-direction: row;
    justify-content: space-evenly;
  } 
`

export const ServicesLink = styled(Link)`
  color: ${colors.darkgray};
  text-decoration: none;
`

export const ServicesText = styled(Heading3)`
  position: relative;
  z-index: 1;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: .2s ease-in;

  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  @media (min-width: 1023px) {
    margin-bottom: 0 !important;
  } 

  /* before/after/decor */

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 0;
    height: 3px;
    transform: translateX(-50%);
    background: ${colors.red};
    transition: .2s ease-in;
  }

  &:hover {
    opacity: 75%;

    &::after {
      width: 50%;
    }
  }

  &:nth-of-type(1) {
      &::before {
        content: '01';
        left: -42.5px;
      }
  }
  &:nth-of-type(2) {
      &::before {
        content: '02';
        left: -55px;
      }
  }
  &:nth-of-type(3) {
      &::before {
        content: '03';
        left: -55px;
      }
  }

  &::before {
    position: absolute;
    z-index: -1;
    top: -30px;
    font-family: 'Majesti', serif;
    font-weight: bold;
    color: rgba(255,255,255,.63);
    font-size: 300%;
  }


`

export const ContactSection = styled(Section)`

`

export const ContactWrapper = styled.div`
  @media (min-width: 1160px) {
    display: flex;
  }
`

export const ContactTextWrapper = styled.div`
  padding-left: 5rem;
`

export const ContactText = styled(Text)`
  position: relative;
  font-family: 'Majesti', 'serif';
  font-weight: bold;

  ::before {
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0;
    left: -3.5rem;
    width: 2px;
    height: 100%;
    background-color: ${colors.darkgray};
  }

  @media (min-width: 767px) {
    max-width: 50%;
  }
  @media (min-width: 1160px) {
    max-width: 70%;
  }
`