import React from 'react'
import { Link } from 'react-router-dom'
import LongButton from '../components/LongButton'
import './Footer.css'
const Footer = () => {
     return (
          <>
               <div className="footerExtras">
                    <section className="aboutAndSocial">
                         <h2>Rakesh Peddamallu</h2>
                         <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                              voluptatem corporis error non,
                         </p>
                         {/* <ul className="footerSocial">
                                   <li>
                                        <a href="#">
                                             <i className="fa-brands fa-facebook-square" />
                                             <span>Facebook</span>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             <i className="fa-brands fa-instagram-square" />
                                             <span>Instagram</span>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             <i className="fa-brands fa-twitter-square" />
                                             <span>Twitter</span>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             <i className="fa-brands fa-youtube-square" />
                                             <span>Youtube</span>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             <i className="fa-brands fa-whatsapp-square" />
                                             <span>WhatsApp</span>
                                        </a>
                                   </li>
                              </ul> */}
                         {/* .aboutAndSocial */}
                    </section>
                    <section className="links">
                         <nav>
                              <ul>
                                   <li>
                                        <Link to="/about">About</Link>
                                   </li>
                                   <li>
                                        <Link to="/projects">Projects</Link>
                                   </li>
                                   <li>
                                        <Link to="/resume"> Resume</Link>
                                   </li>
                                   <li>
                                        <Link to="/blog">Blog</Link>
                                   </li>
                                   <li>
                                        <Link to="/contact">Contact</Link>
                                   </li>
                              </ul>
                         </nav>
                         {/* .links */}
                    </section>

                    <form action="#" className="newsletterSignup" method="post">
                         <h2>Newsletter</h2>
                         <fieldset>
                              <label>
                                   Enter your e-mail address
                                   <br />
                                   <input type="email" name="address" />
                                   <br />
                              </label>
                              <LongButton title={'Subscribe'} />
                         </fieldset>
                         {/* .newsLetterSignup */}
                    </form>
                    {/* footerExtras */}
               </div>
          </>
     )
}

export default Footer