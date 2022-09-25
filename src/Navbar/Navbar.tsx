import React from 'react'
import './Navbar.css'
import '../App.css'
import { BrowserRouter as Router } from 'react-router-dom'


const Navbar = () => {
     return (
          <nav className="nav-bar">
               <div className="nav-name">
                    <a href="/">Rakesh Peddamallu</a>
               </div>
               <Router>
                    <ul className='navbar-nav'>
                         <li>
                              <a href="/portfolio">Portfolio</a>
                         </li>
                         <li>
                              <a href="/about">About</a>
                         </li>
                         <li>
                              <a href="/projects">Projects</a>
                         </li>
                         <li>
                              <a href="/resume">Resume</a>
                         </li>
                         <li>
                              <a href="/blog">Blog</a>
                         </li>
                         <li>
                              <a href="/contact">Contact</a>
                         </li>
                    </ul>
               </Router>
          </nav >
     )
}

export default Navbar