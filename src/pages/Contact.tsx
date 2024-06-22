import React from 'react'
import Button from '../components/Button'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1 className="heading">Contact Me</h1>
        <form>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
          />
          <input
            type="tel"
            id="phno"
            name="phno"
            placeholder="Enter your phone number"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your e-mail"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Type your message"
            rows={4}
          ></textarea>
          <Button title="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Contact
