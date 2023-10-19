import React from 'react'
import './Navbar.css'
import '../App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ThemeChanger from '../components/ThemeChange/ThemeChanger'

function myFunction() {
  var x = document.getElementById('myTopnav') as HTMLInputElement
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}
const Navbar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <a href="/" className="active">
        Rakesh Peddamallu
      </a>
      <a href="/portfolio">Portfolio</a>
      <a href="/about">About</a>
      <a href="/projects">Projects</a>
      {/* <a href="/resume">Resume</a> */}
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  )
}

export default Navbar
