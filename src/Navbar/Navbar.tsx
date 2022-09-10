import React from 'react'
import './Navbar.css'

import { BrowserRouter as Router } from 'react-router-dom'


const Navbar = () => {
     return (
          <nav className="nav-bar">
               <h2 style={{ marginTop: '25px' }} className="my-name">Rakesh Reddy</h2>
               <Router>
                    <ul className='nav-links'>
                         <a href="/about">
                              <li>About</li>
                         </a>
                         <a href="/projects">
                              <li>Projects</li>
                         </a>
                         <a href="/resume">
                              <li>Resume</li>
                         </a>
                         <a href="/contact">
                              <li>Contact</li>
                         </a>
                    </ul>
               </Router>
          </nav>
     )
}

export default Navbar