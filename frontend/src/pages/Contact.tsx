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
               <>
                    <div className="contact-container">
                         <div className="contact-header" style={{ height: '200px', marginTop: '50px' }}>

                         </div>
                         <div className="wrapper">
                              <div className="company-info">
                                   <h3>Rakesh Peddamallu</h3>
                                   <ul>
                                        <li>
                                             <i className="fa fa-road" /> Bangalore
                                        </li>
                                        <li>
                                             <i className="fa fa-phone" /> (+91) 6303665574
                                        </li>
                                        <li>
                                             <i className="fa fa-envelope" /> https://rakeshpeddamallu.netlify.app/
                                        </li>
                                   </ul>
                              </div>
                              <div className="contact">
                                   <h3>E-mail Me</h3>
                                   <form id="contact-form">
                                        <p>
                                             <label>Name</label>
                                             <input type="text" name="name" id="name" />
                                        </p>
                                        <p>
                                             <label>E-mail Address</label>
                                             <input type="email" name="email" id="email" />
                                        </p>
                                        <p>
                                             <label>Phone Number</label>
                                             <input type="text" name="phone" id="phone" />
                                        </p>
                                        <p className="full">
                                             <label>Message</label>
                                             <textarea name="message" rows={5} id="message" defaultValue={""} />
                                        </p>
                                        <p className="full">
                                             <button type="submit">Submit</button>
                                        </p>
                                   </form>
                              </div>
                         </div>
                    </div>
               </>

          </>
     )
}

export default Contact