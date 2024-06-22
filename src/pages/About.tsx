import React from 'react'
import './About.css'
import logo from '../images/myImage2.png'

const About = () => {
  return (
    <>
      <h1 className="heading">About Me</h1>
      <div className="about-container">
        <img className="about-image" src={logo} alt="Web Developer" />
        <div className="about-introduction">
          <p>
            Hi there! Im Rakesh Peddamallu, a passionate web developer based
            [Your Location]. With a strong foundation in front-end and back-end
            technologies, I specialize in creating responsive and user-friendly
            web applications that deliver a seamless experience across devices.
          </p>
          <p>
            My journey in web development has been marked by a commitment to
            continuous learning and exploring new technologies. I thrive on
            turning complex ideas into intuitive solutions and collaborating
            with teams to achieve impactful results.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
