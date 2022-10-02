import React, { useState } from 'react'
import Button from '../components/Button'
import './Contact.css'
const Contact = () => {

     const [message, setMessage] = useState({
          name: '',
          phno: 0,
          email: '',
          description: '',
     })

     let name, value;

     const handleInputChange = (e: any) => {
          console.log(e);
          name = e.target.name;
          value = e.target.value;
          setMessage({ ...message, [name]: value })
     }
     const handleSubmit = async (e: any) => {
          e.preventDefault();
          const { name, phno, email, description } = message
          const res = await fetch("/messages", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(
                    {
                         fullName: name,
                         phoneNumber: phno,
                         email: email,
                         message: description
                    }
               )
          })

          const data = await res.json();

          if (data.status === 422 || !data) {
               window.alert("Message failed to be sent")
               console.log("Message failed to be sent");

          } else {
               window.alert("Message sent successfully!")
               console.log("Message sent successfully!");
          }

     }
     return (
          <>
               <div className="contact-container">
                    <div className="contact-form">
                         <h1 className="heading">Contact me</h1>
                         <form method="POST" >
                              <input type="text" id="name" name="name" placeholder="Enter your full name" onChange={handleInputChange} />
                              <input type="number" id="phno" name="phno" placeholder="Enter your phone number" onChange={handleInputChange} />
                              <input type="email" id="email" name="email" placeholder="Enter your e-mail " onChange={handleInputChange} />
                              <input style={{ height: '100px' }} type="description" id="message" name="message" placeholder="Type your message" onChange={handleInputChange} />
                              <input type="submit" value="Submit" onChange={handleSubmit} />
                         </form>
                    </div>
               </div>
          </>
     )
}

export default Contact