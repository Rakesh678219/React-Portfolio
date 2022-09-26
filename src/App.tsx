import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Home from './pages/Home'
import Blog from './pages/Blog'
import FooterNavbar from './Footer-Navbar/FooterNavbar'
import Portfolio from './pages/Portfolio'
export const App = () => {
  return (
    <>
      <Navbar />
      <body>
        <div className="body">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </Router>
        </div>
      </body>

      <footer>
        <div className="footer row primary">
          <div className="column about">
            <h3>Web Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              voluptatem corporis error non,
            </p>
            <div className="footer-social-icons">
              <ul className="social-icons">
                <li><a href="" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                <li><a href="" className="social-icon"> <i className="fa fa-whatsapp"></i></a></li>
                <li><a href="" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
                <li><a href="" className="social-icon"> <i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="column links">
            <h3>Some Links</h3>
            <ul>
              <li><a href="#faq">F.A.Q</a></li>
              <li><a href="#cookies-policy">Cookies Policy</a></li>
              <li><a href="#terms-of-services">Terms Of Service</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div className="column links">
            <h3>Some Links</h3>
            <ul>
              <li><a href="#faq">F.A.Q</a></li>
              <li><a href="#cookies-policy">Cookies Policy</a></li>
              <li><a href="#terms-of-services">Terms Of Service</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div className="column subscribe">
            <h3>Newsletter</h3>
            <div>
              <input type="email" placeholder="Your email id here" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
