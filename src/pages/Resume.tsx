import React from 'react'
import './Resume.css'
const Resume = () => {
     return (
          <>
               <div className="container">
                    <div id="banner"><img src="/resume-background.jpg" id="myImage" /></div>
                    <div className="centered">
                         <h1>Click to Download Resume.</h1>
                         <button className='download-button'>Download</button>
                    </div>
               </div>
          </>
     )
}

export default Resume