import React from 'react'
import './Navbar.css'
import '../App.css'
<<<<<<< HEAD
import { BrowserRouter as Router, Link } from 'react-router-dom'
=======
import { BrowserRouter as Router } from 'react-router-dom'
>>>>>>> 43ca7bf (moved all to frontend folder)

function myFunction() {
     var x = document.getElementById("myTopnav") as HTMLInputElement;
     if (x.className === "topnav") {
          x.className += " responsive";
     } else {
          x.className = "topnav";
     }
}
const Navbar = () => {
     return (
          <div className="topnav" id="myTopnav">
<<<<<<< HEAD
               <nav>
                    <Link className="active" to="/">Rakesh Peddamallu</Link>
                    <Link to="/about">About</Link> |{" "}
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume"> Resume</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="#" className="icon" onClick={myFunction}>
                         <i className="fa fa-bars"></i> </Link>
               </nav>
=======
               <a href="/" className="active">Rakesh Peddamallu</a>
               <a href="/portfolio">Portfolio</a>
               <a href="/about">About</a>
               <a href="/projects">Projects</a>
               <a href="/resume">Resume</a>
               <a href="/blog">Blog</a>
               <a href="/contact">Contact</a>
               <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                    <i className="fa fa-bars"></i>
               </a>
>>>>>>> 43ca7bf (moved all to frontend folder)
          </div>
     )
}

export default Navbar