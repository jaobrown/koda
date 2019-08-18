import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

const Form = styled.form`
    width: 100%;
    /* background-color: orangered; */
`

const InputGroup = styled.div`
    width: 100%;
    /* background-color: yellowgreen; */
    margin-bottom: 1.3rem;

    label {
        display: block;
        font-family: 'Soin Sans', 'sans-serif';
        font-weight: lighter;
        font-size: .8rem; 
        color: ${colors.gray};
        text-transform: uppercase;
        margin-bottom: .4rem;
    }

    input,
    select {
        width: 100%;
        height: 2rem;
        border: 1px solid ${colors.gray};
        border-radius: 100px;
        background: white;
        padding-left: .8rem;
        box-sizing: border-box;

        select {
            font-family: 'Majesti', 'serif' !important;
        }
        
        ::placeholder {
            font-family: 'Majesti', 'serif';
        }
    }
`

const SignUpForm = styled.form`
    width: 100%;
`

const SignUpInputGroup = styled.div`
    width: 100%;

    label {
        display: block;
        font-family: 'Soin Sans', 'sans-serif';
        font-weight: lighter;
        font-size: .8rem; 
        color: ${colors.gray};
        text-transform: uppercase;
        margin-bottom: .4rem;
    }

    input,
    select {
        width: 100%;
        height: 2rem;
        border: none;
        border-radius: 100px;
        background: white;
        padding-left: .8rem;
        box-sizing: border-box;

        select {
            font-family: 'Majesti', 'serif' !important;
        }
        
        ::placeholder {
            font-family: 'Majesti', 'serif';
        }
    }
`

const Pill = styled.button`
  color: ${colors.darkgray};
  height: 2rem;
  text-decoration: none;
  font-size: 13px;
  font-family: 'Soin Sans', 'sans serif';
  font-weight: normal;
  letter-spacing: 1px;
  border: 2px solid ${props => props.borderColor || colors.red};
  padding: 0 1rem;
  border-radius: 100px;
  text-align: center;
  background-color: transparent;
`

export const ContactForm = () => {
    return (
        <Form method="post" name="contact" action="/" data-netlify="true" netlify-honeypot="bot">
            <input type="hidden" name="form-name" value="contact" />
            <InputGroup style={{ display: 'none' }}>
                <label>Don't fill this out, human</label>
                <input name="bot" />
            </InputGroup>
            <InputGroup>
                <label>First Name + Last Name</label>
                <input name="name" type="text" placeholder="Your full name" />
            </InputGroup>
            <InputGroup>
                <label>Email</label>
                <input name="email" type="text" placeholder="example@example.com" />
            </InputGroup>
            <InputGroup>
                <label>What services are you interested in?</label>
                <select name="service" form="contact">
                    <option value="select">Select</option>
                    <option value="strategy">Brand Strategy</option>
                    <option value="development">Custom Web Development</option>
                    <option value="design">Visual Design</option>
                </select>
            </InputGroup>
            <InputGroup>
                <label>How did you hear about us?</label>
                <input name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <Pill type="submit">submit</Pill>
            </InputGroup>
        </Form>
    )
}

export const SignUp = () => {
    return (
        <SignUpForm method="post" name="signup" action="/" data-netlify="true" netlify-honeypot="bot">
            <input type="hidden" name="form-name" value="signup" />
            <SignUpInputGroup style={{ display: 'none' }}>
                <label>Don't fill this out, human</label>
                <input name="bot" />
            </SignUpInputGroup>
            <SignUpInputGroup style={{marginBottom: '1rem'}}>
                <label>Email</label>
                <input name="email" type="text" placeholder="example@example.com" />
            </SignUpInputGroup>
            <SignUpInputGroup>
                <Pill type="submit" borderColor={colors.darkgray}>sign up</Pill>
            </SignUpInputGroup>
        </SignUpForm>
    )
}