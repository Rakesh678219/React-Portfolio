import React from 'react'
import './Navbar.css'
import '../App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

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
               <nav>
                    <Link className="active" to="/">Rakesh Peddamallu</Link>
                    <Link to="/about">About</Link> |{" "}
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume"> Resume</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="javascript:void(0);" className="icon" onClick={myFunction}>
                         <i className="fa fa-bars"></i> </Link>
               </nav>
          </div>
     )
}

export default Navbar