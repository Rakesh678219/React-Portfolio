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
          <span style={{ textAlign: 'center' }}>
            <p> All Rights Reserved</p>
          </span>
        </div>
      </footer>
    </>
  )
}
