import React from 'react'
import styled from 'styled-components'
import { colors, Heading3 } from '../../utils'
// import { Heading3 } from '../../utils';

const Form = styled.form`
    width: 100%;
    /* background-color: orangered; */

    @media (min-width: 767px) {
        max-width: 600px;
        margin: 0 auto;
    }
`

const QuestionnaireForm = styled.form`
    width: 100%;
    /* background-color: orangered; */

    @media (min-width: 767px) {
        max-width: 960px;
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


const QuestionnaireInputGroup = styled.div`
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
        /* text-transform: uppercase; */
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
        <QuestionnaireForm method="post" name="alec-yoder" action="POST" data-netlify="true" netlify-honeypot="bot">
            <input type="hidden" name="form-name" value="alec-yoder" />
            <QuestionnaireInputGroup style={{ display: 'none' }}>
                <label htmlFor="bot">Don't fill this out, human</label>
                <input id="bot" name="bot" />
            </QuestionnaireInputGroup>

            {/* First Section */}
            <Heading3 style={{marginBottom: '1.5rem'}}>Contact Info</Heading3>
            <QuestionnaireInputGroup>
                <label htmlFor="firstNameLastName">First Name + Last Name</label>
                <input id="firstNameLastName" name="name" type="text" placeholder="Your full name" required />
            </QuestionnaireInputGroup>
            {/* <QuestionnaireInputGroup>
                <label htmlFor="fileTest">File upload test</label>
                <input id="fileTest" name="fileTest" type="file" placeholder="File File" />
            </QuestionnaireInputGroup> */}

            {/* New Section */}
            <Heading3  style={{marginBottom: '1.5rem', marginTop: '3rem'}}>Who are you and what are you offering?</Heading3>
            <QuestionnaireInputGroup>
                <label htmlFor="WhyFollow">Why do people choose to follow you?</label>
                <input id="WhyFollow" name="WhyFollow" type="text" placeholder="For fun, for business, etc..." />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="WhyDifferent">What makes you different than others in your industry?</label>
                <input id="WhyDifferent" name="WhyDifferent" type="text" placeholder="Could be anything!" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="HowDoTheyFindYou">How are your clients/customers finding you?</label>
                <input id="HowDoTheyFindYou" name="HowDoTheyFindYou" type="text" placeholder="Social media, other places?" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="MissionStatement">Do you have a mission statement or tagline? If so, what is it?</label>
                <input id="MissionStatement" name="MissionStatement" type="text" placeholder="Mission Statement ..." />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="goals">What are your goals for your business? What is your 1 year goal? 3 year? 5 year?</label>
                <input id="goals" name="goals" type="text" placeholder="Dream big!" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="ThreeWords">If you had to choose 3 words to describe your personal brand, what would they be?</label>
                <input id="ThreeWords" name="ThreeWords" type="text" placeholder="Handsome, suave, nice" />
            </QuestionnaireInputGroup>



            {/* New */}
            <Heading3 style={{marginBottom: '1.5rem', marginTop: '3rem'}}>Audience</Heading3>
            <QuestionnaireInputGroup>
                <label htmlFor="targetAudience">Who do you want to attract?</label>
                <input id="targetAudience" name="targetAudience" type="text" placeholder="Everyone? Someone Specific?" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="whatsimportant">What is most important to them?</label>
                <input id="whatsimportant" name="whatsimportant" type="text" placeholder="Put yourself in their shoes!" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="InsiredBy">Where is he/she inspired by?</label>
                <input id="InsiredBy" name="InsiredBy" type="text" placeholder="Talented athletes? Competition?" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="bringsJoy">What brings him/her joy?</label>
                <input id="bringsJoy" name="bringsJoy" type="text" placeholder="Gymnastics? Athletics?" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="excitement">What brings him/her excitement?</label>
                <input id="excitement" name="excitement" type="text" placeholder="Watching their favorite athletes?" />
            </QuestionnaireInputGroup>


            {/* NEW */}
            <Heading3 style={{marginBottom: '1.5rem', marginTop: '3rem'}}>Competetive</Heading3>
            <QuestionnaireInputGroup>
                <label htmlFor="competetiveExamples">Give a few examples of other people in your field that you admire. What do you like about them? What do you do differently from them?</label>
                <input id="competetiveExamples" name="competetiveExamples" type="text" placeholder="Other athletes you admire?" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="dontAdmire">Any other people in your industry who are a force to be reckoned with whom you don’t necessarily admire? What makes them successful?</label>
                <input id="dontAdmire" name="dontAdmire" type="text" placeholder="Maybe you don't love them, but they're doing well..." />
            </QuestionnaireInputGroup>

            {/* NEW */}
            <Heading3 style={{marginBottom: '1.5rem', marginTop: '3rem'}}>Aesthetic Preferences</Heading3>
            <QuestionnaireInputGroup>
                <label htmlFor="usage">Where will your logo primarily be used?</label>
                <input id="usage" name="usage" type="text" placeholder="Social Media, etc..." />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="colorPreferences">Do you have any color preferences for your new branding? Are there any colors you would like to stay away from?</label>
                <input id="colorPreferences" name="colorPreferences" type="text" placeholder="Any thoughts?" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="brandCrush">Name 2-3 brands that you love, describe why</label>
                <input id="brandCrush" name="brandCrush" type="text" placeholder="Think brand crushes" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="drawInspiration">Where do you draw inspiration from for your social media?</label>
                <input id="drawInspiration" name="drawInspiration" type="text" placeholder="What get's you excited to make content?" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="AdditionalReferences">In addition to the reference you already sent, give a few examples of logos and typography that you believe are in line with your brand and describe why.</label>
                <input id="AdditionalReferences" name="AdditionalReferences" type="file" placeholder="Pinterest is a good place to start!" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="imageryIdeas">Do you have any imagery ideas for your branding?</label>
                <input id="imageryIdeas" name="imageryIdeas" type="file" placeholder="General vibe from your content?" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <label htmlFor="ExistingBrand">Are there any existing elements in your brand that you would like to keep? If so, please explain.</label>
                <input id="ExistingBrand" name="ExistingBrand" type="text" placeholder="Do you have anything you like??" />
            </QuestionnaireInputGroup>

            {/* Last */}
            <Heading3 style={{marginBottom: '1.5rem', marginTop: '3rem'}}>Miscellaneous</Heading3>
            <QuestionnaireInputGroup>
                <label htmlFor="Misc">Anything else we should know before moving forward?</label>
                <input id="Misc" name="Misc" type="text" placeholder="Things like, 'this form was way too long'" />
            </QuestionnaireInputGroup>
            <QuestionnaireInputGroup>
                <Pill type="submit">submit</Pill>
            </QuestionnaireInputGroup>
        </QuestionnaireForm>
    )
}