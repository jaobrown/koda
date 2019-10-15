import React from 'react'
import styled from 'styled-components'
import { colors, Heading3, Text } from '../../utils'
// import { Heading3 } from '../../utils';

const Form = styled.form`
    width: 100%;
    /* background-color: orangered; */

    @media (min-width: 767px) {
        max-width: 600px;
        margin: 0 auto;
    }
`

const InputGroup = styled.div`
    width: 100%;
    /* background-color: yellowgreen; */
    margin-bottom: 1.3rem;
    border-radius: 100px;

    label {
        display: block;
        font-family: 'Soin Sans', 'sans-serif';
        font-weight: normal;
        font-size: .8rem; 
        color: ${colors.darkgray};
        text-transform: uppercase;
        margin-bottom: .4rem;
    }

    input,
    select {
        width: 100%;
        height: 2.5rem;
        border: 1px solid ${colors.gray};
        border-radius: 100px;
        background: white;
        padding-left: .8rem;
        box-sizing: border-box;

        select {
            font-family: 'Majesti', 'serif' !important;
        }
    }
`

const SignUpForm = styled.form`
    width: 100%;

    @media (min-width: 767px) {
        display: flex;
        align-items: center;
        max-width: 450px;
        margin: 0 auto;

        .sign-up__pill {
         margin-left: 1rem;   
        }
    }
`

const SignUpInputGroup = styled.div`
    width: 100%;

    label {
        display: block;
        font-family: 'Soin Sans', 'sans-serif';
        font-weight: normal;
        font-size: .8rem; 
        color: ${colors.darkgray};
        text-transform: uppercase;
        margin-bottom: .4rem;
    }

    input,
    select {
        width: 100%;
        height: 2.5rem;
        border: none;
        border-radius: 100px;
        background: white;
        padding-left: .8rem;
        box-sizing: border-box;
    }


`

const Pill = styled.button`
  color: ${colors.darkgray};
  height: 2.5rem;
  text-decoration: none;
  font-size: 13px;
  font-family: 'Soin Sans', 'sans serif';
  font-weight: normal;
  border: 2px solid ${props => props.borderColor || colors.red};
  padding: 0 1rem;
  border-radius: 100px;
  text-align: center;
  background-color: transparent;
  transition: .2s ease-in-out;
  cursor: pointer;
    @media (min-width: 500px) {
        :hover {
            background-color: ${props => props.borderColor || colors.red};
            color: #ffffff;
        }
    }
`

export const ContactForm = () => {
    return (
        <Form method="post" name="contact" action="POST" data-netlify="true" netlify-honeypot="bot">
            <input type="hidden" name="form-name" value="contact" />
            <InputGroup style={{ display: 'none' }}>
                <label htmlFor="bot">Don't fill this out, human</label>
                <input id="bot" name="bot" />
            </InputGroup>
            <InputGroup>
                <label htmlFor="firstNameLastName">First Name + Last Name</label>
                <input id="firstNameLastName" name="name" type="text" placeholder="Your full name" required />
            </InputGroup>
            <InputGroup>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="text" placeholder="example@example.com" required />
            </InputGroup>
            <InputGroup>
                <label htmlFor="services">What services are you interested in?</label>
                <input id="services" name="services" type="text" placeholder="Brand strategy and identity, rebrand, web development..." />
                {/* <select name="service[]" form="contact">
                    <option value="select">Select</option>
                    <option value="strategy">Brand Strategy</option>
                    <option value="development">Custom Web Development</option>
                    <option value="design">Visual Design</option>
                </select> */}
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <Pill type="submit">submit</Pill>
            </InputGroup>
        </Form>
    )
}

export const SignUp = () => {
    return (
        <SignUpForm method="post" name="signup" action="POST" data-netlify="true" netlify-honeypot="bot">
            <input type="hidden" name="form-name" value="signup" />
            <SignUpInputGroup style={{ display: 'none' }}>
                <label>Don't fill this out, human</label>
                <input name="bot" />
            </SignUpInputGroup>
            <SignUpInputGroup style={{ marginBottom: '1rem' }}>
                <label htmlFor="emailSignUp">Email</label>
                <input id="emailSignUp" name="email" type="text" placeholder="example@example.com" />
            </SignUpInputGroup>
            <Pill type="submit" borderColor={colors.darkgray} className="sign-up__pill">sign&nbsp;up</Pill>
        </SignUpForm>
    )
}


export const AlecYoderForm = () => {
    return (
        <Form method="post" name="contact" action="POST" data-netlify="true" netlify-honeypot="bot">
            <input type="hidden" name="form-name" value="contact" />
            <InputGroup style={{ display: 'none' }}>
                <label htmlFor="bot">Don't fill this out, human</label>
                <input id="bot" name="bot" />
            </InputGroup>

            {/* First Section */}
            <Heading3>Contact Info</Heading3>
            <InputGroup>
                <label htmlFor="firstNameLastName">First Name + Last Name</label>
                <input id="firstNameLastName" name="name" type="text" placeholder="Your full name" required />
            </InputGroup>
            <InputGroup>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="text" placeholder="example@example.com" required />
            </InputGroup>
            <InputGroup>
                <label htmlFor="services">What services are you interested in?</label>
                <input id="services" name="services" type="text" placeholder="Brand strategy and identity, rebrand, web development..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">File upload test</label>
                <input id="refferal" name="referral" type="file" placeholder="File File" />
            </InputGroup>

            {/* New Section */}
            <Heading3>Who are you and what are you offering?</Heading3>
            <InputGroup>
                <label htmlFor="refferal">File upload test 2</label>
                <input id="refferal" name="referral" type="file" placeholder="File File File" />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>



            {/* New */}
            <Heading3>Audience</Heading3>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>


            {/* NEW */}
            <Heading3>Competetive</Heading3>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>

            {/* NEW */}
            <Heading3>Aesthetic Preferences</Heading3>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>

            {/* Last */}
            <Heading3>Miscellaneous</Heading3>
            <InputGroup>
                <label htmlFor="refferal">How did you hear about us?</label>
                <input id="refferal" name="referral" type="text" placeholder="Social Media, etc..." />
            </InputGroup>
            <InputGroup>
                <Pill type="submit">submit</Pill>
            </InputGroup>
        </Form>
    )
}