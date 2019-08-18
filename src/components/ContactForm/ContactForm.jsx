import React from 'react'
// import styled from 'styled-components'

export const ContactForm = () => {
    return (
        <form method="post" name="contact" action="/thanks" data-netlify="true" netlify-honeypot="bot">
            <input type="hidden" name="form-name" value="contact" />
            <div style={{ display: 'none' }}>
                <label>Don't fill this out, human</label>
                <input name="bot" />
            </div>
            <div>
                <label>First Name + Last Name</label>
                <input name="name" type="text" />
            </div>
            <div>
                <label>Email</label>
                <input name="email" type="text" />
            </div>
            <div>
                <label>What services are you interested in?</label>
                <select name="service" form="contact">
                    <option value="strategy">Brand Strategy</option>
                    <option value="development">Custom Web Development</option>
                    <option value="design">Visual Design</option>
                </select>
            </div>
            <div>
                <label>How did you hear about us?</label>
                <input name="referral" type="text" />
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    )
}