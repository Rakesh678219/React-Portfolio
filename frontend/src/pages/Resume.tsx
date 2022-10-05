import React from 'react'
import './Resume.css'
const Resume = () => {
     return (
          <>
               <div >
                    <h1 className='heading'>Check My Resume </h1>
                    <div >
                         <div className="container">
                              <div className="name">
                                   <img
                                        className="photo"
                                        src="https://media-exp1.licdn.com/dms/image/C5603AQHmODX27aRpeg/profile-displayphoto-shrink_800_800/0/1657626686762?e=1669852800&v=beta&t=u-wfRdF_0AqFA2CBolQhUhE6KOWkJOrUf89V1eiYTyg"
                                   />
                                   <h1>Rakesh Peddamallu</h1>
                                   <p className="title">Web Developer</p>
                              </div>
                              <div className="section">
                                   <h2 className="about">About</h2>
                                   <p className="info">
                                        Lorem ipsum <u>sed dolor sit amet</u>, magna adipiscing elit. Integer
                                        sagittis, orci non mattis, ante odio bibendum lectus.
                                   </p>
                              </div>
                              <div className="section">
                                   <h2 className="recent-work">Recent Work</h2>
                                   <ul className="recent info">
                                        <li>
                                             Sed dolor <u>amet dictum</u>
                                        </li>
                                        <li>
                                             Eleifend eu <u>integer ac sapien</u>
                                        </li>
                                        <li>
                                             Rhoncus <u>hendrerit odio</u> consequat
                                        </li>
                                        <li>
                                             Ipsum <u>interdum nunc</u> ultrices
                                        </li>
                                   </ul>
                              </div>
                              <div className="section">
                                   <h2 className="contact">Contact</h2>
                                   <div className="btn-ctr info">
                                        <div className="btn">Twitter</div>
                                        <div className="btn">Facebook</div>
                                        <div className="btn">Instagram</div>
                                        <div className="btn">LinkedIn</div>
                                        <div className="btn">Phone</div>
                                        <div className="btn">Email</div>
                                   </div>
                              </div>
                         </div>

                    </div>
               </div>
          </>
     )
}

export default Resume