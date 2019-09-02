import { Link } from 'gatsby'
import styled from 'styled-components'
import { Section } from '../../sections/Section'
import { Text, Heading3 } from '../../styles/Typography'
import { colors } from '../../styles/GlobalStyles'

export const ShapeGroup1 = styled.div`
  height: 3px;
  width: 195px;
  margin: 6px auto;
  background-color: #C0B8AD;
  border-radius: 500px;
`

export const Pill = styled(Link)`
  color: ${colors.darkgray};
  text-decoration: none;
  font-size: 13px;
  font-family: 'Soin Sans', 'sans serif';
  font-weight: normal;
  border: 2px solid ${colors.red};
  padding: .7rem 1rem;
  border-radius: 100px;
  text-align: center;

  transition: .2s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: ${props => props.borderColor || colors.red};
    color: #ffffff;
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

export const ServicesText = styled(Heading3)`
  font-size: 1.1rem;
  font-weight: lighter;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  @media (min-width: 1023px) {
    margin-bottom: 0 !important;
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
    top: 10px;
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

export const Footer = styled(Section)`
  
`

export const Social = styled.div`
  margin: 0 auto 3rem auto;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FooterContactGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
  } 
`

export const FooterContactGroup = styled.div`
   width: 100%;
`

export const FooterContactTitle = styled(Heading3)`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: -8px;
    height: 2px;
    background-color: ${colors.alexwhite};
    width: 80px;
    left: 50%;
    transform: translateX(-50%);
  }
`