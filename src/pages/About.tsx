import React from 'react'
import './About.css'
import logo from '../images/myImage2.png'
const About = () => {
  return (
    <>
      <h1 className="heading">About Page</h1>
      <div className="about-container">
        <img className="about-my-image" src={logo} alt="" />
        <div className="about-introduction">
          Rakesh Peddamallu is a Creative Director with over ten years of
          experience. She is based in Germany and works globally for clients in
          the lifestyle, premium and fashion sectors. Sarah is skilled in
          holistic campaigning, social media strategies, brand building,
          creative direction and team leadership. Her goal is not only to solve
          her clients' problems, but to develop truly inspiring ideas and bring
          them to life with the best team possible. She intends to lead with
          purpose. To tell stories instead of just selling products. And in
          doing so, supporting people as well as brands to shape culture and
          bring visions of the future into the present.
        </div>
      </div>
    </>
  )
}

export default About
