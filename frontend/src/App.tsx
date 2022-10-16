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
import Portfolio from './pages/Portfolio'
import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import BlogDetails from './pages/BlogDetails'
import ErrorPage from './pages/ErrorPage'
import ProjectDetails from './pages/ProjectDetails'
import Footer from './Footer/Footer'

export const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])
  return (
    <>

      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Router>
          <Navbar />
          {
            loading ?
              <Loading />
              :
              <>
                <body>
                  <div className="body">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/projects/:id" element={<ProjectDetails />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:id" element={<BlogDetails />} />
                      <Route path="/resume" element={<Resume />} />
                      <Route path="/portfolio" element={<Portfolio />} />
                      <Route path="*" element={<ErrorPage />} />
                    </Routes>
                  </div>
                </body>
                <footer>
                  <Footer />
                </footer>
              </>


          }
        </Router>
      </SkeletonTheme>
    </>
  )
}
