import React from 'react'
import Button from '../components/Button'
import './Contact.css'
const Contact = () => {
     return (
          <>
               <div className="contact-container">
                    <div className="contact-form">
                         <h1>Contact me</h1>
                         <form>
                              <input type="text" id="name" name="name" placeholder="Enter your full name" />
                              <input type="number" id="phno" name="phno" placeholder="Enter your phone number" />
                              <input type="email" id="email" name="email" placeholder="Enter your e-mail " />
                              <input style={{ height: '100px' }} type="description" id="message" name="message" placeholder="Type your message" />
                              <Button title="submit" />
                         </form>
                    </div>
               </div>
          </>
     )
}

export default Contact