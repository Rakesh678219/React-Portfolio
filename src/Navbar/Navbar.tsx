import React, { useState } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom' // Import Link and useLocation from react-router-dom

const Navbar = () => {
  const location = useLocation() // Get current location pathname
  const [responsiveClass, setResponsiveClass] = useState('topnav') // State for responsive class toggle

  // Function to toggle responsive class for mobile view
  const toggleResponsive = () => {
    setResponsiveClass((prevClass) =>
      prevClass === 'topnav' ? 'topnav responsive' : 'topnav'
    )
  }

  return (
    <div className={responsiveClass} id="myTopnav">
      <a href="/" className={location.pathname === '/' ? 'active' : ''}>
        Rakesh Peddamallu
      </a>
      <a
        href="/about"
        className={location.pathname === '/about' ? 'active' : ''}
      >
        About
      </a>
      <a
        href="/projects"
        className={location.pathname === '/projects' ? 'active' : ''}
      >
        Projects
      </a>
      <a href="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
        Blog
      </a>
      <a
        href="/contact"
        className={location.pathname === '/contact' ? 'active' : ''}
      >
        Contact
      </a>
      <a href="javascript:void(0);" className="icon" onClick={toggleResponsive}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  )
}

export default Navbar
